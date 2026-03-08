"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { hasAnalyticsConsent } from "@/lib/cookie-consent"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(() => hasAnalyticsConsent())

  useEffect(() => {
    // Listen for consent changes
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setConsentGiven(detail?.analytics ?? false)
    }
    window.addEventListener("cookie-consent-update", handler)
    return () => window.removeEventListener("cookie-consent-update", handler)
  }, [])

  if (!GA_MEASUREMENT_ID || !consentGiven) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// --- Conversion tracking helpers ---

export function track_event(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && hasAnalyticsConsent()) {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export function track_page_view(url: string) {
  if (typeof window !== "undefined" && GA_MEASUREMENT_ID && hasAnalyticsConsent()) {
    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

/** Track contact form submission as a GA4 conversion */
export function track_contact_form() {
  track_event("generate_lead", "contact", "contact_form")
  track_event("form_submit", "contact", "contact_form")
}

/** Track lead magnet download as a GA4 conversion */
export function track_lead_magnet() {
  track_event("generate_lead", "lead_magnet", "guide_download")
  track_event("form_submit", "lead_magnet", "email_capture")
}

/** Track CTA click */
export function track_cta_click(ctaName: string, location: string) {
  track_event("cta_click", "engagement", `${ctaName}_${location}`)
}

/** Track WhatsApp click */
export function track_whatsapp_click() {
  track_event("click", "whatsapp", "navbar_whatsapp")
}

/** Track phone click */
export function track_phone_click() {
  track_event("click", "phone", "phone_call")
}

/** Track email click */
export function track_email_click() {
  track_event("click", "email", "email_contact")
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}
