import { randomBytes, createHash } from "crypto"

const stateStore = new Map<string, number>()
const STATE_TTL = 1000 * 60 * 10

export function generateState() {
  const state = randomBytes(16).toString("hex")
  stateStore.set(state, Date.now() + STATE_TTL)
  return state
}

export function validateState(state: string) {
  const expiry = stateStore.get(state)
  if (!expiry || expiry < Date.now()) {
    stateStore.delete(state)
    return false
  }
  stateStore.delete(state)
  return true
}

export function signToken(data: Record<string, any>, secret: string) {
  const payload = Buffer.from(JSON.stringify(data)).toString("base64url")
  const signature = createHash("sha256").update(`${payload}${secret}`).digest("base64url")
  return `${payload}.${signature}`
}
