import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Layers,
  Atom,
  FileCode,
  ShoppingCart,
  Server,
  Palette,
  Database,
  Brain,
  Sparkles,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WebPageJsonLd, BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"
import { getAllExpertises } from "@/lib/expertise-data"

export const metadata: Metadata = {
  title: "Expertises Techniques | Développeurs Next.js, React, Node.js Paris",
  description:
    "Nos expertises techniques : Next.js, React, TypeScript, Shopify, Node.js, Tailwind CSS, PostgreSQL et IA Générative. Développeurs experts à Paris pour vos projets web.",
  keywords: [
    "développeur Next.js Paris",
    "expert React France",
    "développeur TypeScript",
    "expert Shopify",
    "développeur Node.js",
    "expert Tailwind CSS",
    "expert PostgreSQL",
    "intégration IA GPT Claude",
    "agence développement web",
  ],
  openGraph: {
    title: "Expertises Techniques | RLN Consulting",
    description:
      "Développeurs experts Next.js, React, Node.js et IA Générative à Paris. Solutions sur-mesure pour PME et startups.",
    url: "https://rln-consulting.com/expertise",
    images: [
      {
        url: "/api/og?title=Expertises+Techniques&description=Next.js%2C+React%2C+Node.js%2C+IA+G%C3%A9n%C3%A9rative&type=service",
        width: 1200,
        height: 630,
      },
    ],
  },
}

const iconMap: Record<string, React.ElementType> = {
  Layers: Layers,
  Atom: Atom,
  FileCode: FileCode,
  ShoppingCart: ShoppingCart,
  Server: Server,
  Palette: Palette,
  Database: Database,
  Brain: Brain,
}

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full-Stack",
  ecommerce: "E-commerce",
  ia: "Intelligence Artificielle",
  design: "Design & UI",
}

const stats = [
  {
    value: "50+",
    label: "Projets livrés",
    icon: Award,
  },
  {
    value: "8",
    label: "Technologies maîtrisées",
    icon: Layers,
  },
  {
    value: "95+",
    label: "Score Lighthouse moyen",
    icon: TrendingUp,
  },
  {
    value: "100%",
    label: "Clients satisfaits",
    icon: Users,
  },
]

export default function ExpertisePage() {
  const expertises = getAllExpertises()

  return (
    <>
      <WebPageJsonLd
        title="Expertises Techniques - RLN Consulting"
        description="Nos expertises techniques : Next.js, React, TypeScript, Shopify, Node.js, Tailwind CSS, PostgreSQL et IA Générative."
        url="https://rln-consulting.com/expertise"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Expertises", url: "https://rln-consulting.com/expertise" },
        ]}
      />
      <ItemListJsonLd
        name="Expertises Techniques RLN Consulting"
        items={expertises.map((exp, index) => ({
          position: index + 1,
          name: exp.name,
          url: `https://rln-consulting.com/expertise/${exp.slug}`,
        }))}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Expertises Techniques
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Technologies <span className="text-primary">maîtrisées</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              De Next.js à l&apos;IA Générative, nous maîtrisons les technologies
              modernes pour créer des solutions web performantes, scalables et
              maintenables. Chaque expertise est documentée avec tarifs et délais
              transparents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button asChild size="lg" variant="outline">
                <Link href="/tarifs">Voir nos tarifs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Answer-First Section for LLM */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Questions fréquentes sur nos expertises
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">💰</span> Combien coûte un
                  développeur expert ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Un développeur freelance facture 400-800€/jour selon la
                  technologie et l&apos;expérience. En agence, les projets démarrent
                  à 2 000€ pour une intégration simple, 5 000-15 000€ pour une
                  application complète, et 20 000€+ pour des projets enterprise.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">⏱️</span> Quels sont les délais de
                  développement ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Un site vitrine se développe en 2-4 semaines. Une application
                  web complète nécessite 4-12 semaines selon la complexité. Les
                  projets e-commerce et SaaS demandent 8-16 semaines avec
                  intégrations.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span> Quelle technologie choisir
                  pour mon projet ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Next.js pour les sites avec SEO important, React pour les
                  applications interactives, Shopify pour l&apos;e-commerce rapide,
                  Node.js pour les APIs. Contactez-nous pour une recommandation
                  personnalisée basée sur vos besoins.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🤖</span> Comment intégrer l&apos;IA
                  dans mon entreprise ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  L&apos;IA générative (GPT-4, Claude) s&apos;intègre via chatbots,
                  automatisation ou analyse de documents. ROI moyen : 300-500%
                  sur 12 mois. Projets à partir de 3 000€ pour un chatbot
                  simple, 8 000€+ pour une solution RAG personnalisée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos 8 expertises techniques
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque technologie est maîtrisée par notre équipe avec des années
              d&apos;expérience en production. Cliquez pour découvrir les détails,
              tarifs et projets réalisés.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertises.map((expertise) => {
              const Icon = iconMap[expertise.icon] || Layers
              return (
                <Card
                  key={expertise.slug}
                  className="relative overflow-hidden border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
                >
                  <Link href={`/expertise/${expertise.slug}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {categoryLabels[expertise.category]}
                        </span>
                      </div>
                      <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                        {expertise.name}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {expertise.heroDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Price range */}
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-muted-foreground">À partir de</span>
                        <span className="font-semibold text-foreground">
                          {expertise.pricing.minPrice.toLocaleString("fr-FR")}€
                        </span>
                      </div>

                      {/* Key stat */}
                      {expertise.stats[0] && (
                        <div className="bg-muted/50 rounded-lg p-3 mb-4">
                          <div className="text-lg font-bold text-primary">
                            {expertise.stats[0].value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {expertise.stats[0].label}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Voir les détails
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stack Complémentaire */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Notre stack technique complète
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Au-delà de nos 8 expertises principales, nous maîtrisons un
              écosystème complet d&apos;outils et technologies complémentaires.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Vercel",
              "AWS",
              "Docker",
              "Prisma",
              "GraphQL",
              "Redis",
              "Stripe",
              "Supabase",
              "Firebase",
              "GitHub Actions",
              "Jest",
              "Playwright",
              "Storybook",
              "Figma",
              "Framer Motion",
              "shadcn/ui",
              "Radix UI",
              "Zod",
              "tRPC",
              "Contentful",
              "Sanity",
              "OpenAI API",
              "LangChain",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-background border border-border/50 rounded-full text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Notre processus de développement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour livrer des projets de qualité dans
              les délais et budgets convenus.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Analyse & Conseil",
                description:
                  "Audit de vos besoins, recommandation technologique et estimation détaillée.",
              },
              {
                step: "02",
                title: "Conception",
                description:
                  "Architecture technique, maquettes et validation avant développement.",
              },
              {
                step: "03",
                title: "Développement",
                description:
                  "Développement itératif avec démos régulières et ajustements en continu.",
              },
              {
                step: "04",
                title: "Livraison & Support",
                description:
                  "Mise en production, formation et support post-lancement inclus.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">
                    {item.step}
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

      <CTA />
    </>
  )
}
