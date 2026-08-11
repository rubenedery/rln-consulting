import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  getGlossaryTermBySlug,
  getRelatedGlossaryTerms,
  getAllGlossarySlugs,
  glossaryCategories,
  type GlossaryCategory,
} from "@/lib/glossary-data"
import { DefinedTermJsonLd, BreadcrumbJsonLd, SpeakableJsonLd } from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { siteConfig } from "@/lib/constants"

const baseUrl = siteConfig.url

const categoryIcons: Record<GlossaryCategory, string> = {
  developpement: "💻",
  marketing: "📈",
  seo: "🔍",
  ecommerce: "🛒",
  ia: "🤖",
  design: "🎨",
  analytics: "📊",
  infrastructure: "☁️",
}

interface PageProps {
  params: Promise<{ term: string }>
}

export async function generateStaticParams() {
  const slugs = getAllGlossarySlugs()
  return slugs.map((term) => ({ term }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { term: termSlug } = await params
  const term = getGlossaryTermBySlug(termSlug)

  if (!term) {
    return {
      title: "Terme non trouvé",
    }
  }

  return {
    title: `${term.term} : Définition et explications`,
    description: `${term.definition} Définition complète, exemples et ressources par RLN Consulting.`,
    keywords: [
      `définition ${term.term.toLowerCase()}`,
      `qu'est-ce que ${term.term.toLowerCase()}`,
      `${term.term.toLowerCase()} explication`,
      ...term.relatedTerms.map((t) => `définition ${t}`),
    ],
    openGraph: {
      title: `${term.term} : Définition | Glossaire RLN Consulting`,
      description: term.definition,
      url: `${baseUrl}/glossaire/${term.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `/glossaire/${term.slug}`,
    },
  }
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { term: termSlug } = await params
  const term = getGlossaryTermBySlug(termSlug)

  if (!term) {
    notFound()
  }

  const relatedTerms = getRelatedGlossaryTerms(term.slug)

  const breadcrumbItems = [
    { name: "Accueil", url: baseUrl },
    { name: "Glossaire", url: `${baseUrl}/glossaire` },
    { name: term.term, url: `${baseUrl}/glossaire/${term.slug}` },
  ]

  return (
    <>
      <DefinedTermJsonLd
        term={term.term}
        definition={term.definition}
        url={`${baseUrl}/glossaire/${term.slug}`}
        relatedTerms={term.relatedTerms}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <SpeakableJsonLd
        url={`${baseUrl}/glossaire/${term.slug}`}
        cssSelectors={["h1", ".definition", ".long-description"]}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={breadcrumbItems.slice(1).map((item, index, arr) =>
            index < arr.length - 1
              ? { label: item.name, href: new URL(item.url).pathname }
              : { label: item.name }
          )}
          className="mb-6"
        />

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="text-sm">
              {categoryIcons[term.category]} {glossaryCategories[term.category].name}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <BookOpen className="h-3 w-3 mr-1" />
              Définition
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{term.term}</h1>

          {/* Définition courte - Optimisée pour les featured snippets */}
          <div className="definition bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-lg font-medium leading-relaxed">{term.definition}</p>
          </div>
        </header>

        {/* Contenu principal */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Explication détaillée</h2>
          <div className="long-description prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {term.longDescription}
            </p>
          </div>
        </section>

        {/* Services liés */}
        {term.relatedServices && term.relatedServices.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Services RLN Consulting associés</h2>
            <div className="flex flex-wrap gap-3">
              {term.relatedServices.map((serviceUrl) => {
                const serviceName = serviceUrl.split("/").pop()?.replace(/-/g, " ") || ""
                return (
                  <Link key={serviceUrl} href={serviceUrl}>
                    <Button variant="outline" className="capitalize">
                      {serviceName}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* Passerelle vers les guides IA par métier */}
        {term.category === "ia" && (
          <section className="mb-12 bg-primary/5 border border-primary/10 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              L&apos;IA appliquée à votre métier
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Découvrez ce que cette technologie peut concrètement faire pour
              votre profession : cas d&apos;usage, coûts et retour sur
              investissement détaillés pour plus de 30 métiers.
            </p>
            <Link href="/ia">
              <Button variant="accent">
                Voir l&apos;IA par métier
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </section>
        )}

        {/* Termes liés */}
        {relatedTerms.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary" />
              Termes associés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTerms.map((relatedTerm) => (
                <Link key={relatedTerm.slug} href={`/glossaire/${relatedTerm.slug}`}>
                  <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center justify-between">
                        {relatedTerm.term}
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedTerm.definition}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Liens externes */}
        {term.externalLinks && term.externalLinks.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ressources externes</h2>
            <ul className="space-y-2">
              {term.externalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link
            href="/glossaire"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au glossaire
          </Link>
        </nav>

        {/* CTA */}
        <section className="mt-12 bg-muted rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d&apos;aide avec {term.term.toLowerCase()} ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            RLN Consulting accompagne les entreprises dans leur transformation digitale. Discutons de
            votre projet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Découvrir nos services
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
