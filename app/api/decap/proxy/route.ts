import { NextRequest, NextResponse } from "next/server"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const CMS_SHARED_SECRET = process.env.CMS_SHARED_SECRET
const REPO_FULL_NAME = process.env.GITHUB_REPO ?? "00Photon/Prosolutions-Global-Advisory-website"

type DecapProxyRequest = {
  action: string
  collection?: string
  slug?: string
  entry?: {
    path?: string
    raw?: string
    file?: { path: string }
  }
  folder?: string
  path?: string
  field?: string
  id?: string
}

function githubHeaders() {
  if (!GITHUB_TOKEN) {
    throw new Error("Missing GITHUB_TOKEN")
  }
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "Content-Type": "application/json",
  }
}

async function getFile(path: string) {
  const response = await fetch(`https://raw.githubusercontent.com/${REPO_FULL_NAME}/main/${path}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`)
  }
  return response.text()
}

async function writeFile(path: string, content: string, message: string) {
  const getResponse = await fetch(`https://api.github.com/repos/${REPO_FULL_NAME}/contents/${path}`, {
    method: "GET",
    headers: githubHeaders(),
  })

  const existing = getResponse.ok ? await getResponse.json() : null

  const response = await fetch(`https://api.github.com/repos/${REPO_FULL_NAME}/contents/${path}`, {
    method: "PUT",
    headers: githubHeaders(),
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString("base64"),
      sha: existing?.sha,
      committer: { name: "Decap CMS", email: "cms@prosolga.com" },
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to write ${path}`)
  }
}

async function deleteFile(path: string, message: string) {
  const getResponse = await fetch(`https://api.github.com/repos/${REPO_FULL_NAME}/contents/${path}`, {
    method: "GET",
    headers: githubHeaders(),
  })

  if (!getResponse.ok) {
    throw new Error(`File not found: ${path}`)
  }

  const existing = await getResponse.json()

  const response = await fetch(`https://api.github.com/repos/${REPO_FULL_NAME}/contents/${path}`, {
    method: "DELETE",
    headers: githubHeaders(),
    body: JSON.stringify({
      message,
      sha: existing.sha,
      committer: { name: "Decap CMS", email: "cms@prosolga.com" },
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to delete ${path}`)
  }
}

export async function POST(request: NextRequest) {
  if (!CMS_SHARED_SECRET) {
    return NextResponse.json({ error: "CMS secret not configured" }, { status: 500 })
  }

  if (request.headers.get("x-cms-secret") !== CMS_SHARED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let payload: DecapProxyRequest
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  try {
    switch (payload.action) {
      case "info":
        return NextResponse.json({ repo: REPO_FULL_NAME })
      case "entriesByFolder": {
        const { folder } = payload as any
        const response = await fetch(
          `https://api.github.com/repos/${REPO_FULL_NAME}/contents/${folder}`,
          { headers: githubHeaders() },
        )
        const files = await response.json()
        const entries = await Promise.all(
          files.map(async (file: any) => ({
            file: { path: file.path },
            data: await getFile(file.path),
          })),
        )
        return NextResponse.json(entries)
      }
      case "entry": {
        const path = payload.entry?.path || payload.entry?.file?.path
        if (!path) throw new Error("Missing entry path")
        const data = await getFile(path)
        return NextResponse.json({ file: { path }, data })
      }
      case "persistEntry": {
        const path = payload.entry?.path || payload.entry?.file?.path
        if (!path || !payload.entry?.raw) throw new Error("Missing entry data")
        await writeFile(path, payload.entry.raw, `Update ${path} via Decap CMS`)
        return NextResponse.json({ ok: true })
      }
      case "deleteEntry": {
        const path = payload.entry?.path || payload.entry?.file?.path
        if (!path) throw new Error("Missing entry path")
        await deleteFile(path, `Delete ${path} via Decap CMS`)
        return NextResponse.json({ ok: true })
      }
      case "getMedia": {
        const response = await fetch(
          `https://api.github.com/repos/${REPO_FULL_NAME}/contents/public/uploads`,
          { headers: githubHeaders() },
        )
        const files = await response.json()
        return NextResponse.json(
          files.map((file: any) => ({
            id: file.sha,
            name: file.name,
            url: file.download_url,
            path: file.path,
          })),
        )
      }
      case "persistMedia": {
        const { path, fileData, fileName } = payload as any
        const targetPath = path || `public/uploads/${fileName}`
        await writeFile(targetPath, fileData, `Upload ${targetPath} via Decap CMS`)
        return NextResponse.json({ path: targetPath, url: `/${targetPath}` })
      }
      case "deleteMedia": {
        const { path } = payload
        if (!path) throw new Error("Missing media path")
        await deleteFile(path, `Delete ${path} via Decap CMS`)
        return NextResponse.json({ ok: true })
      }
      default:
        return NextResponse.json({ error: `Unsupported action: ${payload.action}` }, { status: 400 })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Proxy request failed" }, { status: 500 })
  }
}
