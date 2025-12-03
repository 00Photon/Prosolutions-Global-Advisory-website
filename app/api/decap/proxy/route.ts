import { NextRequest, NextResponse } from "next/server"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const CMS_SHARED_SECRET = process.env.CMS_SHARED_SECRET
const REPO_FULL_NAME = process.env.GITHUB_REPO ?? "00Photon/Prosolutions-Global-Advisory-website"

async function githubRequest(path: string, init: RequestInit) {
  if (!GITHUB_TOKEN) {
    throw new Error("Missing GITHUB_TOKEN environment variable.")
  }

  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`GitHub API error (${response.status}): ${await response.text()}`)
  }

  return response.json()
}

export async function POST(request: NextRequest) {
  if (!CMS_SHARED_SECRET) {
    return NextResponse.json({ error: "CMS shared secret not configured" }, { status: 500 })
  }

  const authHeader = request.headers.get("x-cms-secret")
  if (authHeader !== CMS_SHARED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await request.json()
  const { action, ...rest } = body

  try {
    switch (action) {
      case "getEntry": {
        const { path } = rest
        const response = await githubRequest(`/repos/${REPO_FULL_NAME}/contents/${path}`, { method: "GET" })
        return NextResponse.json(response)
      }
      case "persistEntry": {
        const { path, data, message = "Update via Decap CMS" } = rest
        const response = await githubRequest(`/repos/${REPO_FULL_NAME}/contents/${path}`, {
          method: "PUT",
          body: JSON.stringify({
            message,
            content: Buffer.from(data).toString("base64"),
            committer: {
              name: "Decap CMS",
              email: "cms@prosolga.com",
            },
          }),
        })
        return NextResponse.json(response)
      }
      case "deleteEntry": {
        const { path, sha, message = "Delete via Decap CMS" } = rest
        const response = await githubRequest(`/repos/${REPO_FULL_NAME}/contents/${path}`, {
          method: "DELETE",
          body: JSON.stringify({
            message,
            sha,
            committer: {
              name: "Decap CMS",
              email: "cms@prosolga.com",
            },
          }),
        })
        return NextResponse.json(response)
      }
      case "listEntries": {
        const { path } = rest
        const response = await githubRequest(`/repos/${REPO_FULL_NAME}/contents/${path}`, { method: "GET" })
        return NextResponse.json(response)
      }
      default:
        return NextResponse.json({ error: "Unsupported action" }, { status: 400 })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Proxy request failed" }, { status: 500 })
  }
}
