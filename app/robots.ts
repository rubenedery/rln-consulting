import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rln-consulting.com"

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
        ],
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      // ═══════════════════════════════════════════════════════════════
      // AI Crawlers - Autoriser explicitement pour l'indexation AI
      // ═══════════════════════════════════════════════════════════════
      // OpenAI
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Anthropic (Claude)
      {
        userAgent: "Claude-Web",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Google AI
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // Amazon / Alexa
      {
        userAgent: "Amazonbot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Microsoft / Bing / Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // ByteDance / TikTok
      {
        userAgent: "Bytespider",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Common Crawl (utilisé pour entraîner les LLM)
      {
        userAgent: "CCBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      {
        userAgent: "meta-externalagent",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // YouChat
      {
        userAgent: "YouBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // AI21 Labs
      {
        userAgent: "AI2Bot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
      // Hugging Face
      {
        userAgent: "HuggingFaceBot",
        allow: ["/", "/llms.txt", "/blog/", "/services/", "/cas-etudes/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
