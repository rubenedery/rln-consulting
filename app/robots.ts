import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/constants"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  // Chemins ouverts aux crawlers IA (GPTBot, ClaudeBot, PerplexityBot, etc.)
  // Toute nouvelle famille de pages destinée à la citation LLM doit être ajoutée ici.
  const aiAllowList = [
    "/",
    "/llms.txt",
    "/blog/",
    "/services/",
    "/cas-etudes/",
    "/secteurs/",
    "/expertise/",
    "/glossaire/",
    "/ia/",
    "/outils/",
  ]

  return {
    rules: [
      // Règle par défaut pour tous les robots
      {
        userAgent: "*",
        allow: [
          "/",
          "/services/",
          "/blog/",
          "/cas-etudes/",
          "/secteurs/",
          "/tarifs/",
          "/faq",
          "/a-propos",
          "/contact",
          "/llms.txt",
          "/feed.xml",
          // Les images Open Graph sont servies par cette route : la règle la
          // plus spécifique l'emporte sur le disallow de /api/
          "/api/og",
        ],
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      // ═══════════════════════════════════════════════════════════════
      // AI Crawlers - Autoriser explicitement pour l'indexation AI
      // ═══════════════════════════════════════════════════════════════
      // OpenAI
      {
        userAgent: "GPTBot",
        allow: aiAllowList,
      },
      {
        userAgent: "ChatGPT-User",
        allow: aiAllowList,
      },
      // Anthropic (Claude)
      {
        userAgent: "Claude-Web",
        allow: aiAllowList,
      },
      {
        userAgent: "ClaudeBot",
        allow: aiAllowList,
      },
      {
        userAgent: "anthropic-ai",
        allow: aiAllowList,
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: aiAllowList,
      },
      // Google AI
      {
        userAgent: "Google-Extended",
        allow: aiAllowList,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // Amazon / Alexa
      {
        userAgent: "Amazonbot",
        allow: aiAllowList,
      },
      // Microsoft / Bing / Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // ByteDance / TikTok
      {
        userAgent: "Bytespider",
        allow: aiAllowList,
      },
      // Common Crawl (utilisé pour entraîner les LLM)
      {
        userAgent: "CCBot",
        allow: aiAllowList,
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: aiAllowList,
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: aiAllowList,
      },
      {
        userAgent: "meta-externalagent",
        allow: aiAllowList,
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: aiAllowList,
      },
      // YouChat
      {
        userAgent: "YouBot",
        allow: aiAllowList,
      },
      // AI21 Labs
      {
        userAgent: "AI2Bot",
        allow: aiAllowList,
      },
      // Hugging Face
      {
        userAgent: "HuggingFaceBot",
        allow: aiAllowList,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
