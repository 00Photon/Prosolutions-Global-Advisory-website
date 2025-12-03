import { NextResponse } from "next/server"
import { signToken, validateState } from "@/lib/decap-oauth"

const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const state = searchParams.get("state")

  if (!CLIENT_ID || !CLIENT_SECRET || !OAUTH_CLIENT_SECRET) {
    return NextResponse.json({ error: "GitHub OAuth not configured" }, { status: 500 })
  }

  if (!code || !state || !validateState(state)) {
    return NextResponse.json({ error: "Invalid OAuth state" }, { status: 400 })
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }),
  })

  const tokenData = await tokenResponse.json()

  if (!tokenData.access_token) {
    return NextResponse.json({ error: "Failed to obtain access token" }, { status: 400 })
  }

  const token = signToken({ token: tokenData.access_token, provider: "github" }, OAUTH_CLIENT_SECRET)

  return NextResponse.json({ token })
}
