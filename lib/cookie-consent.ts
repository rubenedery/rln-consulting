const CONSENT_KEY = "rln_cookie_consent"

export type CookieCategory = "essential" | "analytics" | "marketing"

export interface CookieConsent {
  essential: boolean // always true
  analytics: boolean
  marketing: boolean
  timestamp: string
}

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CookieConsent
  } catch {
    return null
  }
}

export function setConsent(consent: Omit<CookieConsent, "essential" | "timestamp">) {
  const full: CookieConsent = {
    essential: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    timestamp: new Date().toISOString(),
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(full))
  window.dispatchEvent(new CustomEvent("cookie-consent-update", { detail: full }))
  return full
}

export function acceptAll() {
  return setConsent({ analytics: true, marketing: true })
}

export function rejectAll() {
  return setConsent({ analytics: false, marketing: false })
}

export function hasConsent(): boolean {
  return getConsent() !== null
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics ?? false
}

export function hasMarketingConsent(): boolean {
  return getConsent()?.marketing ?? false
}
