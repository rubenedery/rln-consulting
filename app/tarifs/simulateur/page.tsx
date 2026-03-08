import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { PriceCalculator } from "@/components/calculator/PriceCalculator"

export const metadata: Metadata = {
  title: "Simulateur de Prix | Estimez votre projet digital",
  description:
    "Obtenez une estimation instantanée pour votre projet web, publicité ou IA. Calculateur interactif gratuit et sans engagement.",
  openGraph: {
    title: "Simulateur de Prix | RLN Consulting",
    description:
      "Estimez le coût de votre projet digital en quelques clics. Site web, gestion de publicités, solutions IA.",
    url: "https://rln-consulting.com/tarifs/simulateur",
  },
}

export default function SimulateurPage() {
  return (
    <>
      <WebPageJsonLd
        title="Simulateur de Prix | RLN Consulting"
        description="Estimez le coût de votre projet digital en quelques clics."
        url="https://rln-consulting.com/tarifs/simulateur"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Tarifs", url: "https://rln-consulting.com/tarifs" },
          { name: "Simulateur", url: "https://rln-consulting.com/tarifs/simulateur" },
        ]}
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
