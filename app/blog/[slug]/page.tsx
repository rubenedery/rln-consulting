import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { getBlogPost, getBlogSlugs, getAllBlogPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"
import { ArticleCard } from "@/components/blog"
import { blogCategories } from "@/types"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://rln-consulting.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <BlogPostingJsonLd
        post={post}
        url={`https://rln-consulting.com/blog/${post.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Blog", url: "https://rln-consulting.com/blog" },
          { name: post.title, url: `https://rln-consulting.com/blog/${post.slug}` },
        ]}
      />

      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>
          </Button>

          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {blogCategories[post.category]}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
          </header>

          {/* Featured image placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-muted rounded-lg" />
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
              {/* Render markdown content as HTML */}
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("## ")) {
                        return `<h2>${line.slice(3)}</h2>`
                      }
                      if (line.startsWith("### ")) {
                        return `<h3>${line.slice(4)}</h3>`
                      }
                      if (line.startsWith("- ")) {
                        return `<li>${line.slice(2)}</li>`
                      }
                      if (line.trim() === "") {
                        return "<br />"
                      }
                      return `<p>${line}</p>`
                    })
                    .join("\n"),
                }}
              />
            </div>

            {/* Tags */}
            <Separator className="my-12" />
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <ArticleCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
