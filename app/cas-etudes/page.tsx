import type { Metadata } from "next"
import { getAllCaseStudies } from "@/lib/mdx"
import { CaseStudyCard } from "@/components/case-studies"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
  title: "Cas d'Études | Nos Réalisations et Résultats Clients",
  description:
    "Découvrez nos cas d'études détaillés : développement web, marketing digital et optimisation de performance. Résultats concrets et mesurables.",
  openGraph: {
    title: "Cas d'Études | RLN Consulting",
    description: "Nos réalisations et résultats clients en développement web et marketing digital.",
    url: "https://rln-consulting.com/cas-etudes",
  },
}

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      <WebPageJsonLd
        title="Cas d'Études RLN Consulting"
        description="Nos réalisations et résultats clients en développement web et marketing digital."
        url="https://rln-consulting.com/cas-etudes"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Cas d'études", url: "https://rln-consulting.com/cas-etudes" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Cas d&apos;<span className="text-primary">études</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez comment nous avons aidé nos clients à atteindre leurs
              objectifs avec des solutions sur mesure et des résultats
              mesurables.
            </p>
          </div>

          {/* Case studies grid */}
          {caseStudies.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nos cas d&apos;études seront bientôt disponibles.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
