import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronRight,
  MapPin,
  Building2,
  TrendingUp,
  HelpCircle,
  Globe,
  Megaphone,
  Bot,
  BarChart3,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  WebPageJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  CityLocalBusinessJsonLd,
} from "@/components/seo"
import { TrustBadges } from "@/components/ui/trust-badges"
import { getCityBySlug, getAllCitySlugs } from "@/lib/cities-data"
import { siteConfig } from "@/lib/constants"

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params
  const cityData = getCityBySlug(city)

  if (!cityData) {
    return { title: "Page non trouvée" }
  }

  const url = `${siteConfig.url}/agence-web-${cityData.slug}`

  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      url,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(`Agence Web ${cityData.name}`)}&description=${encodeURIComponent(cityData.metaDescription)}&type=service`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params
  const cityData = getCityBySlug(city)

  if (!cityData) {
    notFound()
  }

  const url = `${siteConfig.url}/agence-web-${cityData.slug}`

  const services = [
    {
      icon: Globe,
      title: `Création de sites web à ${cityData.name}`,
      description: `Sites web Next.js ultra-rapides, responsive et optimisés SEO pour les entreprises de ${cityData.name}. Du site vitrine au e-commerce en passant par les applications web sur mesure.`,
      href: "/services/developpement",
    },
    {
      icon: Megaphone,
      title: `Google Ads & Facebook Ads à ${cityData.name}`,
      description: `Campagnes publicitaires ciblées sur ${cityData.name} et ${cityData.region}. Google Ads, Facebook Ads, Instagram Ads avec un suivi ROI précis et optimisations continues.`,
      href: "/services/ads-management",
    },
    {
      icon: Bot,
      title: `IA pour entreprises à ${cityData.name}`,
      description: `Solutions d'intelligence artificielle pour les entreprises de ${cityData.name} : chatbots, automatisation, analyse de données et outils IA sur mesure.`,
      href: "/services/ia-entreprise",
    },
  ]

  return (
    <>
      {/* SEO JSON-LD */}
      <CityLocalBusinessJsonLd
        cityName={cityData.name}
        region={cityData.region}
        postalCode={cityData.postalCode}
        latitude={cityData.latitude}
        longitude={cityData.longitude}
        url={url}
      />
      <WebPageJsonLd
        title={cityData.metaTitle}
        description={cityData.metaDescription}
        url={url}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: `Agence Web ${cityData.name}`, url },
        ]}
      />
      <FAQPageJsonLd questions={cityData.faqs} />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              {cityData.name}, {cityData.region}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {cityData.headline}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {cityData.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href={`/contact?ville=${cityData.slug}`}>
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

      {/* Local Context Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Le marché digital à {cityData.name}
                </h2>
                <p className="text-muted-foreground">
                  Pourquoi votre présence en ligne est essentielle
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {cityData.localContext}
            </p>

            {/* Strong Sectors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Secteurs clés à {cityData.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cityData.strongSectors.map((sector, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1.5">
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Digital Opportunities */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Opportunités digitales
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {cityData.digitalOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Nos services à {cityData.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des solutions digitales complètes pour les entreprises de {cityData.name} et de {cityData.region}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button asChild variant="link" className="p-0 h-auto text-primary">
                        <Link href={service.href}>
                          En savoir plus
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <TrendingUp className="h-8 w-8" />
              <h2 className="text-2xl font-bold">
                {cityData.name} en chiffres
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {cityData.stats.map((stat, index) => (
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

      {/* Business Areas */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Nous intervenons dans tout {cityData.name}
            </h2>
            <p className="text-muted-foreground mb-8">
              Nos experts accompagnent les entreprises de tous les quartiers
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {cityData.businessAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  <MapPin className="h-3 w-3 mr-2" />
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Questions fréquentes - {cityData.name}
                </h2>
                <p className="text-muted-foreground">
                  Tout savoir sur nos services à {cityData.name}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {cityData.faqs.map((faq, index) => (
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
                Prêt à développer votre activité à {cityData.name} ?
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
                  <Link href={`/contact?ville=${cityData.slug}`}>
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.contact.phoneHref}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler directement
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Linking - Other Cities */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Nous intervenons aussi dans ces villes
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {getAllCitySlugs()
                .filter((slug) => slug !== cityData.slug)
                .map((slug) => {
                  const otherCity = getCityBySlug(slug)
                  if (!otherCity) return null
                  return (
                    <Link
                      key={slug}
                      href={`/agence-web-${slug}`}
                      className="text-sm text-primary hover:text-primary/80 hover:underline px-2 py-1"
                    >
                      Agence web {otherCity.name}
                    </Link>
                  )
                })}
            </div>

            <Separator className="my-8" />

            {/* Cross-linking with sectors */}
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Nos solutions par secteur d'activité
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/secteurs/restaurant" className="text-sm text-muted-foreground hover:text-primary hover:underline">Restaurants</Link>
              <Link href="/secteurs/avocat" className="text-sm text-muted-foreground hover:text-primary hover:underline">Avocats</Link>
              <Link href="/secteurs/cabinet-medecin" className="text-sm text-muted-foreground hover:text-primary hover:underline">Médecins</Link>
              <Link href="/secteurs/agence-immobilier" className="text-sm text-muted-foreground hover:text-primary hover:underline">Agences immobilières</Link>
              <Link href="/secteurs/coiffeur" className="text-sm text-muted-foreground hover:text-primary hover:underline">Coiffeurs</Link>
              <Link href="/secteurs/plombier" className="text-sm text-muted-foreground hover:text-primary hover:underline">Plombiers</Link>
              <Link href="/secteurs/boutique-vetements" className="text-sm text-muted-foreground hover:text-primary hover:underline">Boutiques</Link>
              <Link href="/secteurs" className="text-sm text-primary font-medium hover:underline">Voir tous les secteurs →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
