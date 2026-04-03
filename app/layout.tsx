import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar, Footer } from "@/components/layout"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SkipLinks } from "@/components/ui/skip-links"
import { CookieBanner } from "@/components/ui/cookie-banner"
import { GoogleAnalytics, MetaPixel } from "@/components/analytics"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rln-consulting.com"),
  title: {
    default: "RLN Consulting | Agence Développement Web & Marketing Digital Paris",
    template: "%s | RLN Consulting",
  },
  description:
    "RLN Consulting est une agence web française fondée en 2020, spécialisée en développement Next.js/React et gestion Google Ads/Meta Ads. Services : création de sites web (à partir de 1 500€), e-commerce, applications web, CRM sur mesure et intégration IA pour entreprises.",
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
  authors: [{ name: "Ruben Edery", url: "https://rln-consulting.com" }],
  creator: "RLN Consulting",
  publisher: "RLN Consulting",
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
    url: "https://rln-consulting.com",
    siteName: "RLN Consulting",
    title: "RLN Consulting | Agence Développement Web & Marketing Digital Paris",
    description:
      "RLN Consulting : agence web française (fondée en 2020). Développement Next.js/React, e-commerce, CRM sur mesure, Google Ads et Meta Ads. Tarifs à partir de 1 500€.",
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
    title: "RLN Consulting | Agence Développement Web Paris",
    description: "Agence web française : développement Next.js/React, e-commerce, CRM, Google Ads et Meta Ads. Tarifs à partir de 1 500€.",
    images: ["/api/og?title=RLN+Consulting&description=Agence+D%C3%A9veloppement+Web+%26+Marketing+Digital+Paris"],
    creator: "@rlnconsulting",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
    canonical: "https://rln-consulting.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLinks />
          <Navbar />
          <main id="main-content" className="flex-1 pt-16">{children}</main>
          <Footer />
          <Toaster />
          <CookieBanner />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  )
}
