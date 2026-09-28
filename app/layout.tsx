import type { Metadata } from "next"
import { Bricolage_Grotesque, Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar, Footer } from "@/components/layout"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { MotionProvider } from "@/components/providers/motion-provider"
import { SkipLinks } from "@/components/ui/skip-links"
import { CookieBanner } from "@/components/ui/cookie-banner"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { ExitIntentPopup } from "@/components/marketing/ExitIntentPopup"
import { GoogleAnalytics, MetaPixel, Clarity } from "@/components/analytics"
import "./globals.css"
import { siteConfig } from "@/lib/constants"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Agence RLN | Développement web, IA & marketing digital à Paris",
    template: "%s | Agence RLN",
  },
  description:
    "RLN Consulting est une agence web française fondée en 2020, spécialisée en développement Next.js/React et gestion Google Ads/Meta Ads. Services : création de sites web (à partir de 990€), e-commerce, applications web, CRM sur mesure et intégration IA pour entreprises.",
  keywords: [
    "agence développement web paris",
    "agence web france",
    "développement Next.js",
    "création site web",
    "application mobile sur mesure",
    "CRM entreprise",
    "Facebook Ads",
    "Google Ads",
    "marketing digital",
    "agence digitale",
  ],
  authors: [{ name: "Ruben Edery", url: siteConfig.url }],
  creator: "RLN Consulting",
  publisher: "RLN Consulting",
  // Meta tags pour optimisation LLM/AI
  other: {
    "ai-content-declaration": "original",
    "citation-source": "RLN Consulting",
    "content-language": "fr-FR",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: "Agence RLN",
    title: "Agence RLN | Développement web, IA & marketing digital à Paris",
    description:
      "Agence RLN : agence web française (fondée en 2020). Développement Next.js/React, e-commerce, CRM sur mesure, Google Ads et Meta Ads. Tarifs à partir de 990€.",
    images: [
      {
        url: "/api/og?title=RLN+Consulting&description=Agence+D%C3%A9veloppement+Web+%26+Marketing+Digital+Paris",
        width: 1200,
        height: 630,
        alt: "RLN Consulting - Agence Web Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence RLN | Développement web & marketing digital Paris",
    description: "Agence web française : développement Next.js/React, e-commerce, CRM, Google Ads et Meta Ads. Tarifs à partir de 990€.",
    images: ["/api/og?title=RLN+Consulting&description=Agence+D%C3%A9veloppement+Web+%26+Marketing+Digital+Paris"],
    creator: "@rlnconsulting",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    // Pas de canonical ici : il serait hérité par TOUTES les pages sans canonical propre,
    // ce qui indiquerait à Google qu'elles sont des doublons de la page d'accueil.
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
      "text/plain": `${siteConfig.url}/llms.txt`,
    },
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <SkipLinks />
            <Navbar />
            <main id="main-content" className="flex-1 pt-16">{children}</main>
            <Footer />
            <Toaster />
            <CookieBanner />
            <ExitIntentPopup />
            <WhatsAppFloat />
          </MotionProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <MetaPixel />
        <Clarity />
      </body>
    </html>
  )
}
