import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { WebPageJsonLd, BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/seo"
import { PriceCalculator } from "@/components/calculator/PriceCalculator"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  alternates: {
    canonical: "/tarifs/simulateur",
  },
  title: "Simulateur de Prix Site Internet | Estimation Immédiate & Gratuite",
  description:
    "Combien coûte votre site internet ? Simulateur de prix gratuit : estimation instantanée pour site web, e-commerce, publicité ou IA. Sans inscription ni engagement.",
  openGraph: {
    title: "Simulateur de Prix | RLN Consulting",
    description:
      "Estimez le coût de votre projet digital en quelques clics. Site web, gestion de publicités, solutions IA.",
    url: `${siteConfig.url}/tarifs/simulateur`,
  },
}

export default function SimulateurPage() {
  return (
    <>
      <WebPageJsonLd
        title="Simulateur de Prix | RLN Consulting"
        description="Estimez le coût de votre projet digital en quelques clics."
        url={`${siteConfig.url}/tarifs/simulateur`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Tarifs", url: `${siteConfig.url}/tarifs` },
          { name: "Simulateur", url: `${siteConfig.url}/tarifs/simulateur` },
        ]}
      />
      {/* Schema SoftwareApplication pour le calculateur de prix */}
      <SoftwareApplicationJsonLd
        name="Simulateur de Tarifs RLN Consulting"
        description="Calculateur interactif pour estimer le coût de votre projet digital : site web, e-commerce, application mobile, campagnes publicitaires ou solutions IA. Estimation gratuite et instantanée."
        url={`${siteConfig.url}/tarifs/simulateur`}
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={{ price: 0, priceCurrency: "EUR" }}
      />

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/tarifs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux tarifs
          </Link>

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Estimation gratuite
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Simulateur de{" "}
              <span className="text-primary">prix</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Obtenez une estimation personnalisée en quelques clics.
              <br className="hidden sm:block" />
              Rapide, gratuit et sans engagement.
            </p>
          </div>

          {/* Calculator */}
          <PriceCalculator />
        </div>
      </section>
    </>
  )
}
