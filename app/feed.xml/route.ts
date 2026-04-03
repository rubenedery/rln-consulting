import { getAllBlogPosts } from "@/lib/mdx"
import { getAllCaseStudies } from "@/lib/mdx"
import { siteConfig } from "@/lib/constants"

const baseUrl = "https://rln-consulting.com"

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const blogPosts = getAllBlogPosts()
  const caseStudies = getAllCaseStudies()

  // Combine and sort all content by date
  const allContent = [
    ...blogPosts.map((post) => ({
      type: "blog" as const,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      category: post.category,
      image: post.image,
    })),
    ...caseStudies.map((study) => ({
      type: "case-study" as const,
      slug: study.slug,
      title: study.title,
      description: study.description,
      date: study.date,
      author: "RLN Consulting",
      category: study.industry,
      image: study.image,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const feedItems = allContent.map((item) => {
    const url =
      item.type === "blog"
        ? `${baseUrl}/blog/${item.slug}`
        : `${baseUrl}/cas-etudes/${item.slug}`

    const imageUrl = item.image.startsWith("http")
      ? item.image
      : `${baseUrl}${item.image}`

    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <author>${escapeXml(siteConfig.contact.email)} (${escapeXml(item.author)})</author>
      <category>${escapeXml(item.category)}</category>
      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" />
    </item>`
  })

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>RLN Consulting - Blog &amp; Actualités</title>
    <link>${baseUrl}</link>
    <description>Articles techniques, guides marketing digital et études de cas par RLN Consulting, agence web française spécialisée en Next.js, Google Ads et solutions IA.</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${allContent[0] ? new Date(allContent[0].date).toUTCString() : new Date().toUTCString()}</pubDate>
    <managingEditor>${siteConfig.contact.email} (${siteConfig.founder.name})</managingEditor>
    <webMaster>${siteConfig.contact.email} (${siteConfig.founder.name})</webMaster>
    <generator>Next.js RSS Generator</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>RLN Consulting</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <category>Développement Web</category>
    <category>Marketing Digital</category>
    <category>Intelligence Artificielle</category>
    <category>E-commerce</category>
    <category>SEO</category>
${feedItems.join("\n")}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
