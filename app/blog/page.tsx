import type { Metadata } from "next"
import { getAllBlogPosts } from "@/lib/mdx"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { BlogList } from "./BlogList"

export const metadata: Metadata = {
  title: "Blog | Articles sur le Développement Web et Marketing Digital",
  description:
    "Découvrez nos articles sur le développement web, le SEO, le marketing digital et les dernières tendances tech. Conseils et tutoriels pratiques.",
  openGraph: {
    title: "Blog | RLN Consulting",
    description:
      "Articles sur le développement web, le SEO et le marketing digital.",
    url: "https://rln-consulting.com/blog",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <WebPageJsonLd
        title="Blog RLN Consulting"
        description="Articles sur le développement web, le SEO et le marketing digital."
        url="https://rln-consulting.com/blog"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Blog", url: "https://rln-consulting.com/blog" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Le <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez nos articles sur le développement web, le marketing
              digital et les dernières tendances tech.
            </p>
          </div>

          {/* Blog List with filters */}
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  )
}
