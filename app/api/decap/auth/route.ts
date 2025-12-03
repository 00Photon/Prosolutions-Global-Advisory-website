import { NextResponse } from "next/server"
import { generateState } from "@/lib/decap-oauth"

const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export function GET() {
  if (!CLIENT_ID || !SITE_URL) {
    return NextResponse.json({ error: "GitHub OAuth not configured" }, { status: 500 })
  }

  const state = generateState()
  const url = new URL("https://github.com/login/oauth/authorize")
  url.searchParams.set("client_id", CLIENT_ID)
  url.searchParams.set("redirect_uri", `${SITE_URL}/api/decap/callback`)
  url.searchParams.set("scope", "repo")
  url.searchParams.set("state", state)

  return NextResponse.json({ authorize_url: url.toString() })
}
