import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Brain,
  Calculator,
  Camera,
  Check,
  Clapperboard,
  Code,
  Dumbbell,
  FileCheck,
  FileSearch,
  Flower2,
  Gavel,
  GraduationCap,
  Hammer,
  HeartPulse,
  Home,
  Landmark,
  Laptop,
  Lightbulb,
  MessageSquare,
  Mic,
  Paintbrush,
  PenTool,
  Phone,
  Plane,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Users,
  Wine,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  SpeakableJsonLd,
  HowToJsonLd,
} from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA, FAQ } from "@/components/sections"
import {
  getAiSectorBySlug,
  getAllAiSectorSlugs,
  getAiSectorsByCategory,
  getAiUseCase,
  aiImplementationTemplate,
} from "@/lib/ai-use-cases-data"
import { getSectorBySlug, categoryLabels } from "@/lib/sectors-data"
import { getGlossaryTermBySlug } from "@/lib/glossary-data"
import { getBlogPost } from "@/lib/mdx"
import { siteConfig } from "@/lib/constants"

const baseUrl = siteConfig.url

const iconMap: Record<string, React.ElementType> = {
  AlertCircle,
  Brain,
  Calculator,
  Camera,
  Clapperboard,
  Code,
  Dumbbell,
  FileCheck,
  FileSearch,
  Flower2,
  Gavel,
  GraduationCap,
  Hammer,
  HeartPulse,
  Home,
  Landmark,
  Laptop,
  Lightbulb,
  MessageSquare,
  Mic,
  Paintbrush,
  PenTool,
  Phone,
  Plane,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Store,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Users,
  Wine,
  Wrench,
}

interface PageProps {
  params: Promise<{ metier: string }>
}

export async function generateStaticParams() {
  return getAllAiSectorSlugs().map((metier) => ({ metier }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { metier } = await params
  const profile = getAiSectorBySlug(metier)

  if (!profile) {
    return {
      title: "Métier non trouvé",
    }
  }

  return {
    title: profile.metaTitle,
    description: profile.metaDescription,
    keywords: [
      `ia ${profile.name.toLowerCase()}`,
      `intelligence artificielle ${profile.name.toLowerCase()}`,
      `automatisation ${profile.name.toLowerCase()}`,
      `chatbot ${profile.name.toLowerCase()}`,
      `intégrer l'ia ${profile.name.toLowerCase()}`,
    ],
    openGraph: {
      title: profile.metaTitle,
      description: profile.metaDescription,
      url: `${baseUrl}/ia/${profile.slug}`,
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(`IA pour ${profile.name}`)}&description=${encodeURIComponent(profile.metaDescription.slice(0, 100))}&type=service`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `/ia/${profile.slug}`,
    },
  }
}

export default async function AiSectorPage({ params }: PageProps) {
  const { metier } = await params
  const profile = getAiSectorBySlug(metier)

  if (!profile) {
    notFound()
  }

  const Icon = iconMap[profile.icon] || Brain
  const sector = getSectorBySlug(profile.sectorSlug)
  const useCases = profile.useCases.map((type) => getAiUseCase(type))
  const steps = profile.implementationSteps ?? aiImplementationTemplate(profile.namePlural)

  // Termes du glossaire liés aux cas d'usage du métier (dédupliqués, 6 max)
  const glossaryTerms = Array.from(
    new Set(useCases.flatMap((useCase) => useCase.relatedGlossaryTerms))
  )
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter((term): term is NonNullable<typeof term> => term !== undefined)
    .slice(0, 6)

  // Articles liés (slugs inexistants filtrés)
  const relatedPosts = (profile.relatedBlogSlugs ?? [])
    .map((slug) => getBlogPost(slug))
    .filter((post): post is NonNullable<typeof post> => post !== undefined)

  // Autres métiers de la même catégorie
  const relatedProfiles = getAiSectorsByCategory(profile.category)
    .filter((p) => p.slug !== profile.slug)
    .slice(0, 5)

  const breadcrumbItems = [
    { name: "Accueil", url: baseUrl },
    { name: "IA par métier", url: `${baseUrl}/ia` },
    { name: profile.name, url: `${baseUrl}/ia/${profile.slug}` },
  ]

  return (
    <>
      <ServiceJsonLd
        name={`Intégration IA pour ${profile.namePlural}`}
        description={profile.metaDescription}
        url={`${baseUrl}/ia/${profile.slug}`}
        features={useCases.map((useCase) => useCase.title)}
        estimatedDuration={profile.answerFirst.duration.answer.split(".")[0]}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FAQPageJsonLd questions={profile.faqs} />
      <SpeakableJsonLd
        url={`${baseUrl}/ia/${profile.slug}`}
        cssSelectors={["h1", ".hero-description", ".answer-first"]}
      />
      <HowToJsonLd
        name={`Comment intégrer l'IA chez les ${profile.namePlural}`}
        description={profile.answerFirst.what.answer}
        steps={steps.map((step) => ({ name: step.name, text: step.description }))}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={breadcrumbItems.slice(1).map((item, index, arr) =>
              index < arr.length - 1
                ? { label: item.name, href: new URL(item.url).pathname }
                : { label: item.name }
            )}
            className="mb-6"
          />

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              IA pour {categoryLabels[profile.category]}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              {profile.headline}
            </h1>
            <p className="hero-description text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {profile.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href={`/contact?secteur=${profile.sectorSlug}`}>
                  Discutons de votre projet IA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/ia-entreprise">
                  Découvrir notre offre IA
                </Link>
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
              L&apos;IA pour les {profile.namePlural} : l&apos;essentiel
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🤖</span>
                  {profile.answerFirst.what.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {profile.answerFirst.what.answer}
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  {profile.answerFirst.cost.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {profile.answerFirst.cost.answer}
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">⏱️</span>
                  {profile.answerFirst.duration.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {profile.answerFirst.duration.answer}
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">📈</span>
                  {profile.answerFirst.roi.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {profile.answerFirst.roi.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Ces situations vous parlent ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {profile.painPoints.map((painPoint, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-muted/50 rounded-lg p-4"
                >
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{painPoint}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">
              Ce que l&apos;IA peut automatiser pour vous
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Des solutions concrètes, intégrées à vos outils existants et
              adaptées au quotidien des {profile.namePlural}.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase) => {
                const UseCaseIcon = iconMap[useCase.icon] || Brain
                return (
                  <Card key={useCase.type} className="h-full">
                    <CardHeader className="pb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <UseCaseIcon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {useCase.description}
                      </p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Exemples concrets chez les {profile.namePlural}
            </h2>
            <div className="space-y-6">
              {profile.concreteExamples.map((example, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {example.title}
                    </h3>
                    {example.metric && (
                      <Badge className="bg-success/10 text-success border-success/20">
                        {example.metric}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Comment nous intégrons l&apos;IA chez vous
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">
              L&apos;IA en chiffres
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {profile.roiStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <p className="text-sm opacity-90">{stat.label}</p>
                  {stat.source && (
                    <p className="text-xs opacity-70 mt-1">
                      Source : {stat.source}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Vos questions sur l&apos;IA pour {profile.namePlural}
            </h2>
            <FAQ items={profile.faqs} showTitle={false} />
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Sector & services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Pour aller plus loin
              </h2>
              <div className="flex flex-wrap gap-3">
                {sector && (
                  <Link href={`/secteurs/${sector.slug}`}>
                    <Button variant="outline">
                      Site web & digital pour {profile.namePlural}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
                <Link href="/services/ia-entreprise">
                  <Button variant="outline">
                    Notre offre IA entreprise
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/services/crm-applications-metier">
                  <Button variant="outline">
                    CRM & applications métier
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/expertise/ia-generative">
                  <Button variant="outline">
                    Notre expertise IA générative
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Related blog posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Nos guides sur le sujet
                </h3>
                <ul className="space-y-2">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:underline inline-flex items-center gap-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Glossary terms */}
            {glossaryTerms.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Termes à connaître
                </h3>
                <div className="flex flex-wrap gap-3">
                  {glossaryTerms.map((term) => (
                    <Link key={term.slug} href={`/glossaire/${term.slug}`}>
                      <Badge
                        variant="outline"
                        className="text-sm py-2 px-4 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
                      >
                        {term.term}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related professions */}
            {relatedProfiles.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  L&apos;IA pour d&apos;autres métiers
                </h3>
                <div className="flex flex-wrap gap-2">
                  {relatedProfiles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/ia/${related.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary hover:underline"
                    >
                      IA pour les {related.namePlural}
                    </Link>
                  ))}
                  <Link
                    href="/ia"
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    Tous les métiers →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <nav className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/ia"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            L&apos;IA pour tous les métiers
          </Link>
        </div>
      </nav>

      <CTA />
    </>
  )
}
