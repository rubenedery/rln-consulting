import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { sectors, categoryLabels, getSectorsByCategory } from "@/lib/sectors-data"
import type { Sector } from "@/types/sectors"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  alternates: {
    canonical: "/secteurs",
  },
  title: "Sites Web par Secteur d'Activité | Solutions Métier",
  description:
    "Découvrez nos solutions web adaptées à votre secteur : restaurants, avocats, médecins, artisans, e-commerce... 30+ métiers accompagnés.",
  openGraph: {
    title: "Sites Web par Secteur | Agence RLN",
    description:
      "Solutions web sur mesure pour chaque métier. Découvrez nos offres par secteur d'activité.",
    url: `${siteConfig.url}/secteurs`,
  },
}

const categoryOrder: Sector["category"][] = [
  "commerce",
  "services",
  "sante",
  "artisanat",
  "tech",
  "autre",
]

export default function SecteursPage() {
  return (
    <>
      <WebPageJsonLd
        title="Sites Web par Secteur d'Activité | Agence RLN"
        description="Solutions web sur mesure pour chaque métier. 30+ secteurs accompagnés."
        url={`${siteConfig.url}/secteurs`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Secteurs", url: `${siteConfig.url}/secteurs` },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <Badge variant="secondary" className="mb-4">
              30+ secteurs d'activité
            </Badge>
            <h1 className="v-display text-5xl sm:text-7xl lg:text-[88px] text-foreground mb-6">
              Des solutions adaptées à{" "}
              <span className="v-em text-primary">votre métier</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Chaque secteur a ses spécificités. Nous créons des sites web pensés
              pour les besoins uniques de votre activité.
            </p>
          </div>

          {/* Sectors by category */}
          <div className="space-y-16">
            {categoryOrder.map((category) => {
              const categorySectors = getSectorsByCategory(category)
              if (categorySectors.length === 0) return null

              return (
                <div key={category}>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    {categoryLabels[category]}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySectors.map((sector) => (
                      <Link
                        key={sector.slug}
                        href={`/secteurs/${sector.slug}`}
                        className="group"
                      >
                        <Card className="h-full transition-all duration-200 hover:border-primary hover:shadow-lift">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center justify-between">
                              {sector.name}
                              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="line-clamp-2">
                              {sector.subheadline}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-secondary border-primary/20">
              <CardContent className="py-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Votre secteur n'est pas listé ?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nous accompagnons tous les métiers. Contactez-nous pour
                  discuter de vos besoins spécifiques.
                </p>
                <Button
                  asChild
                  size="lg"
                  
                >
                  <Link href="/contact">
                    Discutons de votre projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
