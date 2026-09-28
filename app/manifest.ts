import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agence RLN",
    short_name: "Agence RLN",
    description: "Développement web, IA & marketing digital à Paris.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F3F5",
    theme_color: "#1F2BFF",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}
