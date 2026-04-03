"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { hasAnalyticsConsent } from "@/lib/cookie-consent"

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export function MetaPixel() {
  const [consentGiven, setConsentGiven] = useState(() => hasAnalyticsConsent())

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setConsentGiven(detail?.analytics ?? false)
    }
    window.addEventListener("cookie-consent-update", handler)
    return () => window.removeEventListener("cookie-consent-update", handler)
  }, [])

  if (!META_PIXEL_ID || !consentGiven) {
    return null
  }

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

export function track_meta_lead() {
  if (typeof window !== "undefined" && hasAnalyticsConsent()) {
    window.fbq?.("track", "Lead")
  }
}

export function track_meta_contact() {
  if (typeof window !== "undefined" && hasAnalyticsConsent()) {
    window.fbq?.("track", "Contact")
  }
}

export function track_meta_complete_registration() {
  if (typeof window !== "undefined" && hasAnalyticsConsent()) {
    window.fbq?.("track", "CompleteRegistration")
  }
}

export function track_meta_custom(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && hasAnalyticsConsent()) {
    window.fbq?.("trackCustom", eventName, params)
  }
}

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void
  }
}
