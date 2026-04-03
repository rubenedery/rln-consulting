// Blog Post Types
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: BlogCategory
  tags: string[]
  image: string
  content: string
  readingTime: number
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: BlogCategory
  tags: string[]
  image: string
  readingTime: number
}

export type BlogCategory =
  | "seo"
  | "geo"
  | "developpement"
  | "marketing"
  | "performance"
  | "design"
  | "strategie"

export const blogCategories: Record<BlogCategory, string> = {
  seo: "SEO",
  geo: "GEO",
  developpement: "Développement",
  marketing: "Marketing",
  performance: "Performance",
  design: "Design",
  strategie: "Stratégie",
}

// Case Study Types
export interface CaseStudy {
  slug: string
  title: string
  client: string
  description: string
  date: string
  services: string[]
  industry: string
  image: string
  content: string
  results: CaseStudyResult[]
  testimonial?: CaseStudyTestimonial
}

export interface CaseStudyMeta {
  slug: string
  title: string
  client: string
  description: string
  date: string
  services: string[]
  industry: string
  image: string
  results: CaseStudyResult[]
}

export interface CaseStudyResult {
  metric: string
  before: string
  after: string
  improvement: string
}

export interface CaseStudyTestimonial {
  quote: string
  author: string
  role: string
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  href: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image?: string
  rating: number // Note de 1 à 5
  result?: string // Résultat chiffré (ex: "+150% de leads")
}

// Team Member Types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}
