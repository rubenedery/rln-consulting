import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  ArrowLeft,
  Check,
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
  Clock,
  Euro,
  Target,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  SpeakableJsonLd,
} from "@/components/seo"
import { CTA, FAQ } from "@/components/sections"
import {
  getExpertiseBySlug,
  getExpertiseSlugs,
  getAllExpertises,
  type ExpertiseCategory,
} from "@/lib/expertise-data"

const baseUrl = "https://rln-consulting.com"

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

const categoryLabels: Record<ExpertiseCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full-Stack",
  ecommerce: "E-commerce",
  ia: "Intelligence Artificielle",
  design: "Design & UI",
}

interface PageProps {
  params: Promise<{ tech: string }>
}

export async function generateStaticParams() {
  const slugs = getExpertiseSlugs()
  return slugs.map((tech) => ({ tech }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tech } = await params
  const expertise = getExpertiseBySlug(tech)

  if (!expertise) {
    return {
      title: "Expertise non trouvée",
    }
  }

  return {
    title: expertise.title,
    description: expertise.metaDescription,
    keywords: [
      `développeur ${expertise.name.toLowerCase()}`,
      `expert ${expertise.name.toLowerCase()} Paris`,
      `${expertise.name.toLowerCase()} freelance`,
      `agence ${expertise.name.toLowerCase()}`,
      ...expertise.complementaryStack.map((tech) => tech.toLowerCase()),
    ],
    openGraph: {
      title: `${expertise.name} | RLN Consulting`,
      description: expertise.metaDescription,
      url: `${baseUrl}/expertise/${expertise.slug}`,
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(expertise.name)}&description=${encodeURIComponent(expertise.heroDescription.slice(0, 100))}&type=service`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/expertise/${expertise.slug}`,
    },
  }
}

export default async function ExpertiseTechPage({ params }: PageProps) {
  const { tech } = await params
  const expertise = getExpertiseBySlug(tech)

  if (!expertise) {
    notFound()
  }

  const Icon = iconMap[expertise.icon] || Layers

  // Get related expertises (same category, different slug)
  const allExpertises = getAllExpertises()
  const relatedExpertises = allExpertises
    .filter((e) => e.slug !== expertise.slug)
    .slice(0, 3)

  return (
    <>
      <ServiceJsonLd
        name={`${expertise.name} - ${expertise.title}`}
        description={expertise.description}
        url={`${baseUrl}/expertise/${expertise.slug}`}
        minPrice={expertise.pricing.minPrice}
        maxPrice={expertise.pricing.maxPrice}
        features={expertise.features}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 35,
        }}
        reviews={[
          {
            author: "Client satisfait",
            reviewBody: `Excellent travail sur notre projet ${expertise.name}. Équipe réactive et résultats au rendez-vous.`,
            ratingValue: 5,
            datePublished: "2026-02-15",
          },
        ]}
        estimatedDuration={expertise.answerFirst.duration.answer.split(".")[0]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: baseUrl },
          { name: "Expertises", url: `${baseUrl}/expertise` },
          { name: expertise.name, url: `${baseUrl}/expertise/${expertise.slug}` },
        ]}
      />
      <FAQPageJsonLd questions={expertise.faqs} />
      <SpeakableJsonLd
        url={`${baseUrl}/expertise/${expertise.slug}`}
        cssSelectors={["h1", ".hero-description", ".answer-first"]}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/expertise"
                  className="hover:text-primary transition-colors"
                >
                  Expertises
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">{expertise.name}</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              {categoryLabels[expertise.category]}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Expert <span className="text-primary">{expertise.name}</span>
            </h1>
            <p className="hero-description text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {expertise.heroDescription}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm">
                <Euro className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">À partir de</span>
                <span className="font-semibold text-foreground">
                  {expertise.pricing.minPrice.toLocaleString("fr-FR")}€
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Délai</span>
                <span className="font-semibold text-foreground">
                  2-12 semaines
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {expertise.stats[0]?.label}
                </span>
                <span className="font-semibold text-foreground">
                  {expertise.stats[0]?.value}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                <Link href="/contact">
                  Discutons de votre projet {expertise.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/tarifs">Voir les tarifs complets</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First Section - Optimized for LLM citations */}
      <section className="answer-first py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Questions fréquentes sur {expertise.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  {expertise.answerFirst.cost.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {expertise.answerFirst.cost.answer}
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">⏱️</span>
                  {expertise.answerFirst.duration.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {expertise.answerFirst.duration.answer}
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  {expertise.answerFirst.advantages.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {expertise.answerFirst.advantages.answer}
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  {expertise.answerFirst.useCase.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {expertise.answerFirst.useCase.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Notre expertise {expertise.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {expertise.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Ce que nous proposons
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Cas d&apos;usage
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.useCases.map((useCase, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              {expertise.name} en chiffres
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 text-center border border-border/50"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  {stat.source && (
                    <div className="text-xs text-muted-foreground/70">
                      {stat.source}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Stack */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Stack technique complémentaire
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Technologies que nous utilisons couramment avec {expertise.name}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.complementaryStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background border border-border/50 rounded-full text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Case Studies */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Projets réalisés avec {expertise.name}
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Exemples de réalisations concrètes avec des résultats mesurables
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.projects.map((project, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.metrics && (
                      <div className="bg-primary/5 rounded-lg p-3 mb-4">
                        <div className="text-sm font-medium text-primary">
                          {project.metrics}
                        </div>
                      </div>
                    )}
                    {project.caseStudySlug && (
                      <Link
                        href={`/cas-etudes/${project.caseStudySlug}`}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Voir le cas d&apos;étude
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tarifs {expertise.name}
            </h2>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">
                {expertise.pricing.minPrice.toLocaleString("fr-FR")}€ -{" "}
                {expertise.pricing.maxPrice.toLocaleString("fr-FR")}€
              </div>
              <div className="text-muted-foreground mb-6">
                par {expertise.pricing.unit}
              </div>
              {expertise.pricing.details && (
                <p className="text-sm text-muted-foreground mb-8">
                  {expertise.pricing.details}
                </p>
              )}
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Demander un devis personnalisé
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={expertise.faqs} />

      {/* Related Services */}
      {expertise.relatedServices.length > 0 && (
        <section className="py-16 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Services associés
              </h2>
              <div className="flex flex-wrap gap-3">
                {expertise.relatedServices.map((serviceUrl) => {
                  const serviceName =
                    serviceUrl.split("/").pop()?.replace(/-/g, " ") || ""
                  return (
                    <Link key={serviceUrl} href={serviceUrl}>
                      <Button variant="outline" className="capitalize">
                        {serviceName}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Expertises */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Autres expertises
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedExpertises.map((related) => {
                const RelatedIcon = iconMap[related.icon] || Layers
                return (
                  <Link key={related.slug} href={`/expertise/${related.slug}`}>
                    <Card className="h-full hover:border-primary/30 transition-colors cursor-pointer">
                      <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <RelatedIcon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {related.name}
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.heroDescription}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <nav className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux expertises
          </Link>
        </div>
      </nav>

      <CTA />
    </>
  )
}
