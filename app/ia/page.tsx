import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  WebPageJsonLd,
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA } from "@/components/sections"
import { aiSectorProfiles, getAiSectorsByCategory } from "@/lib/ai-use-cases-data"
import { categoryLabels } from "@/lib/sectors-data"
import type { Sector } from "@/types/sectors"
import { siteConfig } from "@/lib/constants"

const baseUrl = siteConfig.url

export const metadata: Metadata = {
  title: "IA par Métier : Intégrer l'Intelligence Artificielle dans Votre Activité",
  description:
    "Que peut faire l'IA pour votre métier ? Cas d'usage concrets, coûts réels et ROI mesuré pour experts-comptables, avocats, médecins, artisans, commerçants et plus de 30 professions.",
  alternates: {
    canonical: "/ia",
  },
  openGraph: {
    title: "IA par Métier | RLN Consulting",
    description:
      "Cas d'usage IA concrets, coûts et ROI pour plus de 30 métiers : professions libérales, santé, commerce, artisanat.",
    url: `${baseUrl}/ia`,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("IA par Métier")}&description=${encodeURIComponent("Intégrer l'IA dans votre activité : cas d'usage, coûts et ROI")}&type=service`,
        width: 1200,
        height: 630,
      },
    ],
  },
}

const categoryOrder: Sector["category"][] = [
  "services",
  "sante",
  "commerce",
  "artisanat",
  "tech",
]

export default function AiHubPage() {
  const breadcrumbItems = [
    { name: "Accueil", url: baseUrl },
    { name: "IA par métier", url: `${baseUrl}/ia` },
  ]

  const categories = categoryOrder
    .map((category) => ({
      category,
      profiles: getAiSectorsByCategory(category),
    }))
    .filter(({ profiles }) => profiles.length > 0)

  return (
    <>
      <WebPageJsonLd
        title="IA par métier : intégrer l'intelligence artificielle dans votre activité"
        description="Cas d'usage IA concrets, coûts réels et ROI mesuré pour plus de 30 métiers."
        url={`${baseUrl}/ia`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ItemListJsonLd
        name="L'IA par métier"
        description="Guides d'intégration de l'intelligence artificielle par profession"
        items={aiSectorProfiles.map((profile, index) => ({
          name: `IA pour ${profile.namePlural}`,
          url: `${baseUrl}/ia/${profile.slug}`,
          description: profile.metaDescription,
          position: index + 1,
        }))}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "IA par métier" }]}
            className="mb-6"
          />
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Intelligence artificielle appliquée
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              L&apos;IA appliquée à <span className="text-primary">votre métier</span>
            </h1>
            <p className="hero-description text-lg text-muted-foreground mb-8">
              Chatbots, automatisation administrative, IA dans le CRM, analyse
              prédictive : découvrez ce que l&apos;intelligence artificielle peut
              concrètement faire pour votre profession — avec les coûts réels et
              le retour sur investissement mesuré.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href="/contact">
                  Discutons de votre projet IA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/ia-entreprise">Notre offre IA entreprise</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First intro */}
      <section className="answer-first py-12 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-3">
              Qu&apos;est-ce que l&apos;intégration IA métier ?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Intégrer l&apos;IA dans un métier, c&apos;est brancher des outils
              d&apos;intelligence artificielle (assistants, automatisations,
              analyse de documents) sur les tâches répétitives de votre
              quotidien : réponses aux clients, saisie administrative, relances,
              comptes rendus. Un premier cas d&apos;usage se déploie
              généralement en 2 à 6 semaines, pour un budget de 3 000 à
              30 000 € selon le périmètre, avec un retour sur investissement
              constaté en moins d&apos;un an.
            </p>
          </div>
        </div>
      </section>

      {/* Professions by category */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {categories.map(({ category, profiles }) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {categoryLabels[category]}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profiles.map((profile) => (
                    <Link key={profile.slug} href={`/ia/${profile.slug}`}>
                      <Card className="h-full hover:border-primary/30 transition-colors cursor-pointer">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center justify-between">
                            IA pour les {profile.namePlural}
                            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {profile.subheadline}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross links */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-3">
              Votre métier n&apos;est pas dans la liste ?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Nous intégrons l&apos;IA dans tous les secteurs d&apos;activité.
              Parlez-nous de votre quotidien, nous identifierons les cas
              d&apos;usage les plus rentables pour vous.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="accent">
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/expertise/ia-generative">
                  Notre expertise IA générative
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
