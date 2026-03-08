import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Sparkles, Zap, Crown, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { TrustBadges } from "@/components/ui/trust-badges"

export const metadata: Metadata = {
  title: "Tarifs | Nos Forfaits de Développement Web et Marketing",
  description:
    "Découvrez nos forfaits de développement web et marketing digital. Des solutions adaptées à chaque budget, du site vitrine à l'application sur mesure.",
  openGraph: {
    title: "Tarifs et Forfaits | RLN Consulting",
    description:
      "Forfaits flexibles pour votre projet digital. Devis gratuit et sans engagement.",
    url: "https://rln-consulting.com/tarifs",
  },
}

const plans = [
  {
    id: "essentiel",
    name: "Essentiel",
    description: "Idéal pour les startups et petites entreprises qui démarrent leur présence en ligne.",
    price: "999",
    priceNote: "à partir de",
    icon: Sparkles,
    popular: false,
    features: [
      "Site vitrine (jusqu'à 5 pages)",
      "Design responsive mobile",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Intégration Google Analytics",
      "Livraison en 2-3 semaines",
      "1 mois de support inclus",
    ],
    notIncluded: [
      "Blog intégré",
      "E-commerce",
      "Fonctionnalités sur mesure",
    ],
    cta: "Démarrer",
    ctaVariant: "outline" as const,
  },
  {
    id: "professionnel",
    name: "Professionnel",
    description: "Pour les entreprises qui veulent un site performant avec des fonctionnalités avancées.",
    price: "Sur devis",
    priceNote: "",
    icon: Zap,
    popular: true,
    features: [
      "Site jusqu'à 15 pages",
      "Design sur mesure premium",
      "Blog intégré (CMS)",
      "SEO avancé + Schémas",
      "Animations & interactions",
      "Intégrations tierces (Calendly, CRM...)",
      "Performance optimisée (Score 90+)",
      "V1 livrée en 3 mois maximum",
      "3 mois de support inclus",
    ],
    notIncluded: [
      "E-commerce complet",
      "Application web complexe",
    ],
    cta: "Demander mon devis",
    ctaVariant: "default" as const,
  },
  {
    id: "sur-mesure",
    name: "Sur-Mesure",
    description: "Pour les projets ambitieux nécessitant une solution entièrement personnalisée.",
    price: "Sur devis",
    priceNote: "",
    icon: Crown,
    popular: false,
    features: [
      "Application web complète",
      "E-commerce (Shopify, WooCommerce...)",
      "Développement sur mesure",
      "Intégrations API complexes",
      "Dashboard & analytics custom",
      "Architecture scalable",
      "Tests automatisés",
      "V1 livrée en 3 mois maximum",
      "Documentation technique",
      "Formation équipe",
      "Support prioritaire 12 mois",
    ],
    notIncluded: [],
    cta: "Discutons de votre projet",
    ctaVariant: "outline" as const,
  },
]

const addons = [
  {
    name: "Intégration IA",
    description: "Chatbot, automatisation, API GPT/Claude",
    price: "à partir de 2 000€",
  },
  {
    name: "Gestion Ads",
    description: "Facebook & Google Ads",
    price: "à partir de 500€/mois",
  },
  {
    name: "Maintenance",
    description: "Mises à jour & support",
    price: "à partir de 150€/mois",
  },
  {
    name: "SEO Avancé",
    description: "Stratégie & contenu",
    price: "à partir de 800€/mois",
  },
  {
    name: "Formation",
    description: "Prise en main du site",
    price: "300€ (2h)",
  },
]

export default function TarifsPage() {
  return (
    <>
      <WebPageJsonLd
        title="Tarifs et Forfaits | RLN Consulting"
        description="Nos forfaits de développement web et marketing digital. Solutions adaptées à chaque budget."
        url="https://rln-consulting.com/tarifs"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Tarifs", url: "https://rln-consulting.com/tarifs" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Tarifs transparents
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Des forfaits adaptés à{" "}
              <span className="text-primary">vos ambitions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Chaque projet est unique : nos tarifs sont personnalisés selon vos besoins.
              Contactez-nous pour un devis gratuit et sur mesure.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-5 py-3 text-sm font-medium text-accent">
              <Zap className="h-4 w-4" />
              Votre V1 livrée en 3 mois maximum, quel que soit le projet
            </div>
          </div>

          {/* Simulator CTA */}
          <Card className="max-w-2xl mx-auto mb-16 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">
                    Estimez votre projet en 2 minutes
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Utilisez notre simulateur interactif pour une estimation personnalisée
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0"
              >
                <Link href="/tarifs/simulateur">
                  Simuler mon prix
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pricing cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105 lg:scale-110"
                    : "border-border/50"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">
                      Le plus populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[48px]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Price */}
                  <div className="text-center mb-8">
                    {plan.priceNote && (
                      <span className="text-sm text-muted-foreground">
                        {plan.priceNote}
                      </span>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      {plan.price !== "Sur devis" && (
                        <span className="text-muted-foreground">€</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Not included */}
                  {plan.notIncluded.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">
                        Non inclus :
                      </p>
                      <ul className="space-y-1">
                        {plan.notIncluded.map((item) => (
                          <li
                            key={item}
                            className="text-xs text-muted-foreground/60"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={plan.ctaVariant}
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : ""
                    }`}
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Add-ons */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Options & services complémentaires
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addons.map((addon) => (
                <Card key={addon.name} className="border-border/50">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-foreground mb-1">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {addon.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {addon.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16">
            <TrustBadges />
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="py-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Un projet en tête ? Parlons-en.
                </h2>
                <p className="text-muted-foreground mb-2">
                  Nos tarifs sont adaptés à la complexité de votre projet.
                  On échange, on comprend vos besoins, et on vous propose un prix juste.
                </p>
                <p className="text-sm font-medium text-accent mb-6">
                  V1 livrée en 3 mois maximum — c&apos;est notre engagement.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
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
