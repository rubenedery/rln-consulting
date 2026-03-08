import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Code, Database, Globe, Layers, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
  title: "Développement Web | Next.js, React & Applications Sur Mesure",
  description:
    "Services de développement web sur mesure. Création de sites vitrines, e-commerce et applications web avec Next.js, React et TypeScript. Optimisation performance et SEO.",
  keywords: [
    "développement web",
    "Next.js",
    "React",
    "TypeScript",
    "site vitrine",
    "e-commerce",
    "application web",
    "freelance développeur",
  ],
  openGraph: {
    title: "Développement Web | RLN Consulting",
    description:
      "Services de développement web sur mesure avec Next.js et React.",
    url: "https://rln-consulting.com/services/developpement",
    images: [{ url: "/api/og?title=D%C3%A9veloppement+Web&description=Next.js%2C+React+%26+Applications+Sur+Mesure&type=service", width: 1200, height: 630 }],
  },
}

const features = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description:
      "Sites web professionnels et modernes pour présenter votre entreprise et vos services.",
  },
  {
    icon: Layers,
    title: "E-commerce",
    description:
      "Boutiques en ligne performantes avec gestion des paiements et des stocks.",
  },
  {
    icon: Code,
    title: "Applications Web",
    description:
      "Applications sur mesure pour répondre à vos besoins métier spécifiques.",
  },
  {
    icon: Database,
    title: "Intégrations API",
    description:
      "Connexion avec vos outils existants : CRM, ERP, CMS et services tiers.",
  },
  {
    icon: Rocket,
    title: "Optimisation Performance",
    description:
      "Sites ultra-rapides avec Core Web Vitals optimisés pour le référencement.",
  },
  {
    icon: Zap,
    title: "SEO Technique",
    description:
      "Structure technique optimisée pour un meilleur positionnement sur Google.",
  },
]

const technologies = [
  "Next.js 14+",
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "AWS",
  "Stripe",
  "Shopify",
  "Contentful",
]

const process = [
  {
    step: "01",
    title: "Découverte",
    description:
      "Analyse de vos besoins, objectifs et contraintes pour définir le scope du projet.",
  },
  {
    step: "02",
    title: "Conception",
    description:
      "Design UX/UI et architecture technique validés avant le développement.",
  },
  {
    step: "03",
    title: "Développement",
    description:
      "Développement itératif avec points réguliers et livraisons intermédiaires.",
  },
  {
    step: "04",
    title: "Livraison",
    description:
      "Tests, mise en production et formation pour une autonomie maximale.",
  },
]

export default function DeveloppementPage() {
  return (
    <>
      <ServiceJsonLd
        name="Développement Web"
        description="Services de développement web sur mesure avec Next.js et React. Création de sites vitrines, e-commerce et applications web."
        url="https://rln-consulting.com/services/developpement"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          {
            name: "Développement Web",
            url: "https://rln-consulting.com/services/developpement",
          },
        ]}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Code className="h-4 w-4" />
              Développement Web
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Sites web et applications{" "}
              <span className="text-primary">sur mesure</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Création de solutions digitales performantes avec les dernières
              technologies : Next.js, React, TypeScript. Des sites rapides,
              accessibles et optimisés pour le SEO.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Button asChild variant="outline" size="lg">
                <Link href="/cas-etudes">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos expertises
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins digitaux.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technologies utilisées
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous utilisons les technologies les plus modernes et performantes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Notre processus
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des projets réussis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
