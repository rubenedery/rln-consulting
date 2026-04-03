/**
 * Anti-spam utilities for form protection
 * 3 layers: honeypot, timer, rate limiting
 */

// --- Rate Limiter (in-memory, resets on deploy) ---

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5 // max submissions per window

/**
 * Check if an IP has exceeded the rate limit
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX_REQUESTS
}

// Clean up old entries every 10 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now()
    for (const [ip, entry] of rateLimitMap) {
      if (now > entry.resetAt) {
        rateLimitMap.delete(ip)
      }
    }
  }, 10 * 60 * 1000)
}

// --- Honeypot Check ---

/**
 * Returns true if the honeypot field was filled (= bot)
 */
export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.length > 0
}

// --- Timer Check ---

const MIN_SUBMIT_TIME_MS = 2000 // 2 seconds minimum

/**
 * Returns true if the form was submitted too quickly (= bot)
 */
export function isSubmittedTooFast(loadedAt: unknown): boolean {
  if (typeof loadedAt !== "number") return true // missing timestamp = suspicious
  const elapsed = Date.now() - loadedAt
  return elapsed < MIN_SUBMIT_TIME_MS
}

/**
 * Get client IP from request headers (works with Vercel, Cloudflare, etc.)
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  return request.headers.get("x-real-ip") || "unknown"
}

/**
 * Validate all anti-spam checks. Returns error message or null if clean.
 */
export function validateAntiSpam(
  request: Request,
  body: Record<string, unknown>
): string | null {
  // 1. Honeypot
  if (isHoneypotFilled(body._gotcha)) {
    return "spam_detected"
  }

  // 2. Timer
  if (isSubmittedTooFast(body._loadedAt)) {
    return "submitted_too_fast"
  }

  // 3. Rate limit
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return "rate_limited"
  }

  return null
}
