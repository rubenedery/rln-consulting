import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Search, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  getAllGlossaryTerms,
  getGlossaryTermsByCategory,
  glossaryCategories,
  type GlossaryCategory,
} from "@/lib/glossary-data"
import { WebPageJsonLd, BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo"

const baseUrl = "https://rln-consulting.com"

export const metadata: Metadata = {
  title: "Glossaire Marketing Digital & Développement Web",
  description:
    "Définitions complètes de 50+ termes techniques : SEO, Google Ads, Next.js, React, CRM, IA, e-commerce. Ressource éducative par RLN Consulting pour comprendre le digital.",
  keywords: [
    "glossaire marketing digital",
    "définition SEO",
    "qu'est-ce que le CRM",
    "définition Next.js",
    "termes développement web",
    "vocabulaire e-commerce",
    "lexique digital",
  ],
  openGraph: {
    title: "Glossaire Marketing Digital & Développement Web | RLN Consulting",
    description:
      "50+ définitions techniques pour comprendre le développement web, le marketing digital et l'IA. Ressource gratuite par RLN Consulting.",
    url: `${baseUrl}/glossaire`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/glossaire`,
  },
}

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

export default function GlossairePage() {
  const allTerms = getAllGlossaryTerms()

  // Grouper les termes par première lettre
  const termsByLetter = allTerms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(term)
      return acc
    },
    {} as Record<string, typeof allTerms>
  )

  const letters = Object.keys(termsByLetter).sort()

  // Termes populaires (les plus importants pour le SEO)
  const popularTerms = [
    "seo",
    "google-ads",
    "next-js",
    "crm",
    "chatbot-ia",
    "shopify",
    "conversion",
    "roas",
  ]
    .map((slug) => allTerms.find((t) => t.slug === slug))
    .filter(Boolean)

  return (
    <>
      <WebPageJsonLd
        title="Glossaire Marketing Digital & Développement Web"
        description="Définitions complètes de 50+ termes techniques du marketing digital, développement web et intelligence artificielle."
        url={`${baseUrl}/glossaire`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: baseUrl },
          { name: "Glossaire", url: `${baseUrl}/glossaire` },
        ]}
      />
      <ItemListJsonLd
        name="Glossaire des termes digitaux"
        description="Liste complète des définitions de termes techniques du marketing digital et développement web"
        items={allTerms.map((term, index) => ({
          name: term.term,
          url: `${baseUrl}/glossaire/${term.slug}`,
          description: term.definition,
          position: index + 1,
        }))}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            Ressource éducative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Glossaire Marketing Digital & Développement Web
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de <strong>50 définitions</strong> pour comprendre le développement web, le
            marketing digital, le SEO, l&apos;e-commerce et l&apos;intelligence artificielle.
            Ressource gratuite par RLN Consulting.
          </p>
        </header>

        {/* Navigation alphabétique */}
        <nav className="mb-12" aria-label="Navigation alphabétique">
          <div className="flex flex-wrap justify-center gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                {letter}
              </a>
            ))}
          </div>
        </nav>

        {/* Termes populaires */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Search className="h-6 w-6 text-primary" />
            Termes les plus recherchés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTerms.map(
              (term) =>
                term && (
                  <Link key={term.slug} href={`/glossaire/${term.slug}`}>
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">
                            {categoryIcons[term.category]} {glossaryCategories[term.category].name}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{term.term}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-2">
                          {term.definition}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
            )}
          </div>
        </section>

        {/* Catégories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Parcourir par catégorie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(Object.keys(glossaryCategories) as GlossaryCategory[]).map((category) => {
              const terms = getGlossaryTermsByCategory(category)
              return (
                <Card key={category} className="hover:border-primary transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{categoryIcons[category]}</span>
                      {glossaryCategories[category].name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {glossaryCategories[category].description}
                    </p>
                    <p className="text-sm font-medium text-primary">{terms.length} termes</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Liste alphabétique complète */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tous les termes (A-Z)</h2>
          <div className="space-y-12">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <h3 className="text-3xl font-bold text-primary mb-4 pb-2 border-b">{letter}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {termsByLetter[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossaire/${term.slug}`}
                      className="group block p-4 rounded-lg border hover:border-primary hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {term.term}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {term.definition}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {categoryIcons[term.category]} {glossaryCategories[term.category].name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center bg-muted rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Besoin d&apos;aide pour votre projet digital ?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            RLN Consulting accompagne les PME et startups dans leur transformation digitale :
            développement web, marketing digital, solutions IA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Découvrir nos services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
