import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  HelpCircle,
  Target,
  Lightbulb,
  BarChart3,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { WebPageJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { TrustBadges } from "@/components/ui/trust-badges"
import {
  sectors,
  getSectorBySlug,
  getAllSectorSlugs,
  get_sector_digital_services,
} from "@/lib/sectors-data"
import {
  Globe,
  MapPin,
  Megaphone,
  Instagram,
  Star,
  Users,
  Mail,
  Zap,
  MessageSquare,
  Share2,
  Calendar,
  ShoppingCart,
  LineChart,
  Smartphone,
} from "lucide-react"
import type { DigitalServiceType } from "@/types/sectors"

const service_icons: Record<DigitalServiceType, React.ElementType> = {
  site_web: Globe,
  seo_local: MapPin,
  google_ads: Megaphone,
  facebook_ads: Instagram,
  avis_google: Star,
  crm: Users,
  emailing: Mail,
  automation: Zap,
  chatbot: MessageSquare,
  reseaux_sociaux: Share2,
  reservation: Calendar,
  ecommerce: ShoppingCart,
  analytics: LineChart,
  app_mobile: Smartphone,
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all sectors
export async function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sector = getSectorBySlug(slug)

  if (!sector) {
    return {
      title: "Secteur non trouvé",
    }
  }

  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      url: `https://rln-consulting.com/secteurs/${sector.slug}`,
    },
    alternates: {
      canonical: `https://rln-consulting.com/secteurs/${sector.slug}`,
    },
  }
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params
  const sector = getSectorBySlug(slug)

  if (!sector) {
    notFound()
  }

  // Build FAQ data for JSON-LD
  const faqJsonLd = sector.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  return (
    <>
      {/* SEO JSON-LD */}
      <WebPageJsonLd
        title={sector.metaTitle}
        description={sector.metaDescription}
        url={`https://rln-consulting.com/secteurs/${sector.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Secteurs", url: "https://rln-consulting.com/secteurs" },
          { name: sector.name, url: `https://rln-consulting.com/secteurs/${sector.slug}` },
        ]}
      />
      <FAQPageJsonLd questions={faqJsonLd} />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Site web pour {sector.namePlural.toLowerCase()}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {sector.headline}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {sector.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/tarifs/simulateur">
                  Simuler mon prix
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Les défis des {sector.namePlural.toLowerCase()}
                </h2>
                <p className="text-muted-foreground">
                  Vous vous reconnaissez ?
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {sector.painPoints.map((pain, index) => (
                <Card key={index} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="pt-6">
                    <p className="text-foreground">{pain}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-success" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Nos solutions pour les {sector.namePlural.toLowerCase()}
                </h2>
                <p className="text-muted-foreground">
                  Ce que nous mettons en place pour vous
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {sector.solutions.map((solution, index) => (
                <Card key={index} className="border-success/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Fonctionnalités spécifiques pour {sector.namePlural.toLowerCase()}
            </h2>

            <div className="flex flex-wrap gap-3 justify-center">
              {sector.specificFeatures.map((feature, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  <Check className="h-4 w-4 mr-2 text-success" />
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-accent text-accent">
                Solutions digitales complètes
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Bien plus qu'un site web
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous accompagnons les {sector.namePlural.toLowerCase()} avec un écosystème digital complet : site web, CRM sur mesure, application mobile et automatisations.
              </p>
            </div>

            {/* Featured Services - CRM & App Mobile */}
            {(sector.digitalServices.includes("crm") || sector.digitalServices.includes("app_mobile")) && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {sector.digitalServices.includes("crm") && (
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <Badge className="mb-1 bg-primary/20 text-primary hover:bg-primary/30">Solution phare</Badge>
                          <CardTitle className="text-lg">CRM & Application Métier</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Un CRM sur mesure adapté à votre métier de {sector.name.toLowerCase()}. Gérez vos clients, prospects et processus métier avec une interface intuitive.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">CRM personnalisé</Badge>
                        <Badge variant="secondary">Tableaux de bord</Badge>
                        <Badge variant="secondary">Automatisations</Badge>
                        <Badge variant="secondary">App mobile incluse</Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
                {sector.digitalServices.includes("app_mobile") && (
                  <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <Badge className="mb-1 bg-accent/20 text-accent-foreground hover:bg-accent/30">Nouveauté</Badge>
                          <CardTitle className="text-lg">Application Mobile</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Une application iOS et Android sur mesure pour vos clients ou votre équipe. Fidélisez et simplifiez l'expérience utilisateur.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">iOS & Android</Badge>
                        <Badge variant="secondary">Notifications push</Badge>
                        <Badge variant="secondary">Mode hors-ligne</Badge>
                        <Badge variant="secondary">Publication stores</Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Other Digital Services */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {get_sector_digital_services(sector)
                .filter((service) => service.type !== "crm" && service.type !== "app_mobile")
                .map((service) => {
                  const IconComponent = service_icons[service.type]
                  return (
                    <Card key={service.type} className="border-border/50 hover:border-primary/30 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-base">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs font-normal">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Tous nos services sont personnalisables selon vos besoins
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Découvrir tous nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <BarChart3 className="h-8 w-8" />
              <h2 className="text-2xl font-bold">
                Résultats pour nos clients {sector.namePlural.toLowerCase()}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {sector.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Questions fréquentes
                </h2>
                <p className="text-muted-foreground">
                  Ce que les {sector.namePlural.toLowerCase()} nous demandent
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {sector.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-10 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Prêt à développer votre activité de {sector.name.toLowerCase()} ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Discutons de votre projet et obtenez un devis personnalisé sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href={`/contact?secteur=${sector.slug}`}>
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tarifs">
                    Voir nos tarifs
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Sectors */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">
              Découvrez aussi nos solutions pour
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {sectors
                .filter((s) => s.slug !== sector.slug && s.category === sector.category)
                .slice(0, 5)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/secteurs/${s.slug}`}
                    className="text-sm text-primary hover:text-primary/80 hover:underline"
                  >
                    {s.namePlural}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
