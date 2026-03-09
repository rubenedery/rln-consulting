import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart2, FileText, Globe, MapPin, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { CTA, FAQ } from "@/components/sections"
import { serviceFaqs } from "@/lib/content"

export const metadata: Metadata = {
  title: "SEO & Référencement | Apparaissez en Premier sur Google",
  description:
    "Stratégie SEO complète pour améliorer votre visibilité sur Google. Audit SEO, optimisation on-page, SEO local, stratégie de contenu.",
  keywords: [
    "SEO",
    "référencement naturel",
    "Google",
    "SEO local",
    "audit SEO",
    "stratégie de contenu",
    "backlinks",
  ],
  openGraph: {
    title: "SEO & Référencement | RLN Consulting",
    description: "Stratégie SEO complète pour apparaître en premier sur Google.",
    url: "https://rln-consulting.com/services/seo-referencement",
  },
}

const features = [
  {
    icon: Search,
    title: "Audit SEO Complet",
    description: "Analyse technique, sémantique et concurrentielle pour identifier les opportunités.",
  },
  {
    icon: FileText,
    title: "Optimisation On-Page",
    description: "Balises, structure, maillage interne et contenu optimisés pour Google.",
  },
  {
    icon: MapPin,
    title: "SEO Local",
    description: "Google My Business, avis, citations locales pour capter les clients de votre zone.",
  },
  {
    icon: Globe,
    title: "Stratégie de Contenu",
    description: "Création de contenus optimisés qui attirent du trafic qualifié.",
  },
  {
    icon: TrendingUp,
    title: "Suivi des Positions",
    description: "Monitoring de vos mots-clés et reporting mensuel de progression.",
  },
  {
    icon: BarChart2,
    title: "Analytics & ROI",
    description: "Mesure du trafic organique et des conversions générées.",
  },
]

const results = [
  { label: "Trafic organique moyen", value: "+180%" },
  { label: "Mots-clés en 1ère page", value: "x3" },
  { label: "Leads organiques", value: "+120%" },
]

export default function SeoReferencementPage() {
  return (
    <>
      <ServiceJsonLd
        name="SEO & Référencement"
        description="Stratégie SEO complète pour améliorer votre visibilité sur Google. Audit SEO, optimisation on-page, SEO local."
        url="https://rln-consulting.com/services/seo-referencement"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          { name: "SEO & Référencement", url: "https://rln-consulting.com/services/seo-referencement" },
        ]}
      />
      <FAQPageJsonLd questions={serviceFaqs["seo-referencement"]} />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Search className="h-4 w-4" />
              SEO & Référencement
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Soyez <span className="text-primary">premier sur Google</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Stratégie SEO sur mesure pour attirer des clients qualifiés via Google.
              Audit, optimisation et suivi des résultats inclus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Audit SEO gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                <div className="text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Notre approche SEO</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
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

      {/* FAQ Section */}
      <FAQ items={serviceFaqs["seo-referencement"]} />

      <CTA />
    </>
  )
}
