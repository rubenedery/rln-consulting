import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Building2, Briefcase, Quote } from "lucide-react"
import { getCaseStudy, getCaseStudySlugs, getAllCaseStudies } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CaseStudyJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { ResultsMetrics, CaseStudyCard } from "@/components/case-studies"
import { CTA } from "@/components/sections"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    return {
      title: "Cas d'étude non trouvé",
    }
  }

  return {
    title: `${caseStudy.title} | Cas d'étude`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
      url: `https://rln-consulting.com/cas-etudes/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  // Get related case studies (different from current)
  const allCaseStudies = getAllCaseStudies()
  const relatedCaseStudies = allCaseStudies
    .filter((cs) => cs.slug !== caseStudy.slug)
    .slice(0, 2)

  return (
    <>
      <CaseStudyJsonLd
        caseStudy={caseStudy}
        url={`https://rln-consulting.com/cas-etudes/${caseStudy.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Cas d'études", url: "https://rln-consulting.com/cas-etudes" },
          {
            name: caseStudy.title,
            url: `https://rln-consulting.com/cas-etudes/${caseStudy.slug}`,
          },
        ]}
      />

      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/cas-etudes">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tous les cas d&apos;études
            </Link>
          </Button>

          {/* Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-accent text-accent-foreground">
                {caseStudy.industry}
              </Badge>
              {caseStudy.services.map((service) => (
                <Badge key={service} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {caseStudy.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="font-medium text-foreground">
                  {caseStudy.client}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{caseStudy.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(caseStudy.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            </div>
          </header>

          {/* Featured image placeholder */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="aspect-video bg-muted rounded-lg" />
          </div>

          {/* Results */}
          {caseStudy.results.length > 0 && (
            <section className="max-w-5xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Résultats obtenus
              </h2>
              <ResultsMetrics results={caseStudy.results} />
            </section>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
              <div
                dangerouslySetInnerHTML={{
                  __html: caseStudy.content
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
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <section className="max-w-3xl mx-auto mb-16">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-8 pb-6">
                  <Quote className="h-10 w-10 text-accent/50 mb-4" />
                  <blockquote className="text-lg text-foreground mb-6 italic">
                    &ldquo;{caseStudy.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {caseStudy.testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {caseStudy.testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Services used */}
          <section className="max-w-3xl mx-auto">
            <Separator className="mb-8" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">
                Services utilisés :
              </span>
              {caseStudy.services.map((service) => (
                <Badge key={service} variant="secondary">
                  {service}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Related case studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Autres cas d&apos;études
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
