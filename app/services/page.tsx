import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, Target, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"
import { services } from "@/lib/content"

export const metadata: Metadata = {
  title: "Services | Développement Web & Gestion Publicitaire",
  description:
    "Découvrez nos services de développement web (Next.js, React) et gestion de campagnes publicitaires (Facebook Ads, Google Ads). Solutions digitales sur mesure pour votre entreprise.",
  keywords: [
    "services développement web",
    "gestion publicités",
    "agence digitale",
    "Next.js",
    "Facebook Ads",
    "Google Ads",
  ],
  openGraph: {
    title: "Services | RLN Consulting",
    description:
      "Services de développement web et gestion de campagnes publicitaires.",
    url: "https://rln-consulting.com/services",
  },
}

const iconMap: Record<string, React.ElementType> = {
  Code: Code,
  Target: Target,
}

const whyChooseUs = [
  {
    title: "Expertise technique",
    description: "Maîtrise des dernières technologies et meilleures pratiques du marché.",
  },
  {
    title: "Approche sur mesure",
    description: "Solutions adaptées à vos besoins spécifiques et à votre budget.",
  },
  {
    title: "Résultats mesurables",
    description: "KPIs clairs et reporting régulier pour suivre vos performances.",
  },
  {
    title: "Support réactif",
    description: "Accompagnement continu et réponse sous 24h garantie.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <WebPageJsonLd
        title="Services - RLN Consulting"
        description="Services de développement web et gestion de campagnes publicitaires"
        url="https://rln-consulting.com/services"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
        ]}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Nos Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Solutions digitales{" "}
              <span className="text-primary">complètes</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Du développement web à la gestion publicitaire, nous vous accompagnons
              dans votre transformation digitale avec des solutions sur mesure et
              orientées résultats.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90"
            >
              <Link href="/contact">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos domaines d&apos;expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deux pôles d&apos;expertise complémentaires pour maximiser votre présence digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code
              return (
                <Card
                  key={service.id}
                  className="relative overflow-hidden border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features list */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button asChild className="w-full group/btn">
                      <Link href={service.href}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche centrée sur vos objectifs et vos résultats.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Une offre combinée
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bénéficiez d&apos;une approche globale en combinant nos deux expertises.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-accent/50 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-muted-foreground">+</span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
              <CardTitle className="text-2xl">Pack Croissance Digitale</CardTitle>
              <CardDescription className="text-base">
                Site web performant + campagnes publicitaires optimisées pour
                maximiser votre acquisition client.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Site web Next.js optimisé",
                  "Landing pages de conversion",
                  "Campagnes Facebook Ads",
                  "Campagnes Google Ads",
                  "Tracking & Analytics",
                  "Reporting mensuel",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
              >
                <Link href="/contact">
                  Demander un devis personnalisé
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTA />
    </>
  )
}
