import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar, Footer } from "@/components/layout"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SkipLinks } from "@/components/ui/skip-links"
import { CookieBanner } from "@/components/ui/cookie-banner"
import { GoogleAnalytics } from "@/components/analytics"
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
    "Agence de développement web et marketing digital à Paris. Sites web Next.js, applications mobiles, CRM sur mesure, Google Ads et Facebook Ads. Devis gratuit.",
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
      "Agence de développement web et marketing digital à Paris. Sites web, applications mobiles, CRM et publicités en ligne.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RLN Consulting - Agence Web Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RLN Consulting | Agence Développement Web Paris",
    description: "Agence de développement web et marketing digital à Paris.",
    images: ["/og-image.png"],
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
      </body>
    </html>
  )
}
