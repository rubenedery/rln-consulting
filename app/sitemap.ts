import { MetadataRoute } from "next"
import { getBlogSlugs, getCaseStudySlugs, getBlogPost, getCaseStudy } from "@/lib/mdx"
import { getAllSectorSlugs } from "@/lib/sectors-data"
import { cities } from "@/lib/cities-data"
import { getAllGlossarySlugs } from "@/lib/glossary-data"
import { getExpertiseSlugs } from "@/lib/expertise-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rln-consulting.com"

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/developpement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ads-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ia-entreprise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/geo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ecommerce`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo-referencement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/applications-mobiles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/crm-applications-metier`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/email-marketing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/configurateur-3d`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/secteurs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tarifs/simulateur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cas-etudes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/statistiques`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
  ]

  const blogSlugs = getBlogSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => {
    const post = getBlogPost(slug)
    const postDate = post?.date ? new Date(post.date) : new Date()

    const isGuide = slug.includes("guide") || slug.includes("comment") || slug.includes("tutorial")
    const isComparison = slug.includes("vs") || slug.includes("comparatif")

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: postDate,
      changeFrequency: "monthly" as const,
      priority: isGuide || isComparison ? 0.8 : 0.7,
    }
  })

  const caseStudySlugs = getCaseStudySlugs()
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => {
    const study = getCaseStudy(slug)
    const studyDate = study?.date ? new Date(study.date) : new Date()

    return {
      url: `${baseUrl}/cas-etudes/${slug}`,
      lastModified: studyDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }
  })

  const sectorSlugs = getAllSectorSlugs()
  const sectorPages: MetadataRoute.Sitemap = sectorSlugs.map((slug) => ({
    url: `${baseUrl}/secteurs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/agence-web-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const glossarySlugs = getAllGlossarySlugs()
  const glossaryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/glossaire`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...glossarySlugs.map((slug) => ({
      url: `${baseUrl}/glossaire/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ]

  const expertiseSlugs = getExpertiseSlugs()
  const expertisePages: MetadataRoute.Sitemap = expertiseSlugs.map((slug) => ({
    url: `${baseUrl}/expertise/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  return [
    ...staticPages,
    ...blogPages,
    ...caseStudyPages,
    ...sectorPages,
    ...cityPages,
    ...glossaryPages,
    ...expertisePages,
  ]
}
