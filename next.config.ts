import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Désactiver le header X-Powered-By pour la sécurité
  poweredByHeader: false,

  // Optimisation des images
  images: {
    // Formats modernes pour de meilleures performances
    formats: ["image/avif", "image/webp"],
    // Domaines autorisés pour les images externes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    // Tailles d'images optimisées
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Header pour AI crawlers - autoriser l'indexation complète
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://*.cloudinary.com https://avatars.githubusercontent.com https://www.google-analytics.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-src 'self' https://calendly.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ]
  },

  // Réécritures : les URLs publiques /agence-web-paris pointent vers la route
  // dynamique /agence-web/[city] (Next.js ne supporte pas les segments partiels
  // type "agence-web-[city]" — l'ancien dossier était traité comme une route
  // littérale et toutes les pages villes renvoyaient 404)
  async rewrites() {
    return [
      {
        source: "/agence-web-:city",
        destination: "/agence-web/:city",
      },
    ]
  },

  // Redirections (ex: anciennes URLs)
  async redirects() {
    return [
      // www → apex : le site ne doit exister que sous un seul hôte,
      // sinon Google indexe deux versions concurrentes
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rln-consulting.com" }],
        destination: "https://rln-consulting.com/:path*",
        permanent: true,
      },
      // Ancienne page portfolio devenue cas-etudes
      {
        source: "/portfolio",
        destination: "/cas-etudes",
        permanent: true,
      },
      // Ancien slug secteur accentué (indexé sous sa forme URL-encodée)
      {
        source: "/secteurs/vid%C3%A9aste",
        destination: "/secteurs/videaste",
        permanent: true,
      },
    ]
  },

  // Compression et optimisation
  compress: true,

  // Générer un sitemap statique
  // (le fichier app/sitemap.ts s'en charge déjà)

  // Optimisation du bundle
  experimental: {
    // Optimiser les imports de packages
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
}

export default nextConfig
