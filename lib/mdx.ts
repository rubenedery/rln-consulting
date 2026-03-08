import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type {
  BlogPost,
  BlogPostMeta,
  CaseStudy,
  CaseStudyMeta,
  BlogCategory,
  CaseStudyResult,
  CaseStudyTestimonial,
} from "@/types"

const CONTENT_PATH = path.join(process.cwd(), "content")
const BLOG_PATH = path.join(CONTENT_PATH, "blog")
const CASE_STUDIES_PATH = path.join(CONTENT_PATH, "case-studies")

// Ensure directories exist
function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// Get all blog post slugs
export function getBlogSlugs(): string[] {
  ensureDirectoryExists(BLOG_PATH)
  return fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

// Get all case study slugs
export function getCaseStudySlugs(): string[] {
  ensureDirectoryExists(CASE_STUDIES_PATH)
  return fs
    .readdirSync(CASE_STUDIES_PATH)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

// Get blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  ensureDirectoryExists(BLOG_PATH)

  const mdPath = path.join(BLOG_PATH, `${slug}.md`)
  const mdxPath = path.join(BLOG_PATH, `${slug}.mdx`)

  let filePath: string | null = null
  if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  }

  if (!filePath) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "RLN Consulting",
    category: (data.category || "developpement") as BlogCategory,
    tags: data.tags || [],
    image: data.image || "/images/blog/default.jpg",
    content,
    readingTime: Math.ceil(stats.minutes),
  }
}

// Get all blog posts metadata (for listings)
export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getBlogSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getBlogPost(slug)
      if (!post) return null
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = post
      return meta
    })
    .filter((post): post is BlogPostMeta => post !== null)

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

// Get blog posts by category
export function getBlogPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) => post.category === category)
}

// Get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

// Search blog posts
export function searchBlogPosts(query: string): BlogPostMeta[] {
  const searchQuery = query.toLowerCase()
  return getAllBlogPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery) ||
      post.description.toLowerCase().includes(searchQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
  )
}

// Get all unique tags from blog posts
export function getAllBlogTags(): string[] {
  const posts = getAllBlogPosts()
  const tagsSet = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tagsSet.add(tag)))
  return Array.from(tagsSet).sort()
}

// Get case study by slug
export function getCaseStudy(slug: string): CaseStudy | null {
  ensureDirectoryExists(CASE_STUDIES_PATH)

  const mdPath = path.join(CASE_STUDIES_PATH, `${slug}.md`)
  const mdxPath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`)

  let filePath: string | null = null
  if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  }

  if (!filePath) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "",
    client: data.client || "",
    description: data.description || "",
    date: data.date || "",
    services: data.services || [],
    industry: data.industry || "",
    image: data.image || "/images/case-studies/default.jpg",
    content,
    results: (data.results || []) as CaseStudyResult[],
    testimonial: data.testimonial as CaseStudyTestimonial | undefined,
  }
}

// Get all case studies metadata (for listings)
export function getAllCaseStudies(): CaseStudyMeta[] {
  const slugs = getCaseStudySlugs()
  const studies = slugs
    .map((slug) => {
      const study = getCaseStudy(slug)
      if (!study) return null
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, testimonial, ...meta } = study
      return meta
    })
    .filter((study): study is CaseStudyMeta => study !== null)

  // Sort by date (newest first)
  return studies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

// Get case studies by service
export function getCaseStudiesByService(service: string): CaseStudyMeta[] {
  return getAllCaseStudies().filter((study) =>
    study.services.map((s) => s.toLowerCase()).includes(service.toLowerCase())
  )
}

// Get case studies by industry
export function getCaseStudiesByIndustry(industry: string): CaseStudyMeta[] {
  return getAllCaseStudies().filter(
    (study) => study.industry.toLowerCase() === industry.toLowerCase()
  )
}

// Get all unique industries from case studies
export function getAllIndustries(): string[] {
  const studies = getAllCaseStudies()
  const industriesSet = new Set<string>()
  studies.forEach((study) => industriesSet.add(study.industry))
  return Array.from(industriesSet).sort()
}

// Get all unique services from case studies
export function getAllServices(): string[] {
  const studies = getAllCaseStudies()
  const servicesSet = new Set<string>()
  studies.forEach((study) => study.services.forEach((s) => servicesSet.add(s)))
  return Array.from(servicesSet).sort()
}
