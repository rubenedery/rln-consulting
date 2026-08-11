import type { Metadata } from "next"
import { Gauge, Search, ShieldCheck, FileText, CheckCircle } from "lucide-react"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { AuditForm } from "@/components/audit/AuditForm"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  alternates: {
    canonical: "/audit-gratuit",
  },
  title: "Audit Gratuit de Site Web | Performance, SEO & Sécurité en 2 Minutes",
  description:
    "Analysez gratuitement votre site web : score de performance Google, SEO technique, balises essentielles et sécurité. Rapport détaillé envoyé par email en 2 minutes.",
  keywords: [
    "audit site web gratuit",
    "analyse site web",
    "test performance site",
    "audit SEO gratuit",
    "score PageSpeed",
    "vérifier son site",
  ],
  openGraph: {
    title: "Audit Gratuit de Site Web | RLN Consulting",
    description:
      "Score de performance, SEO technique et sécurité : recevez l'audit complet de votre site par email en 2 minutes, gratuitement.",
    url: `${siteConfig.url}/audit-gratuit`,
  },
}

const analyzedItems = [
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Scores Google Lighthouse (vitesse, LCP) : le facteur qui fait fuir 53 % des visiteurs mobiles.",
  },
  {
    icon: Search,
    title: "SEO technique",
    description:
      "Balises title et description, robots.txt, sitemap, canonical : ce que Google voit de votre site.",
  },
  {
    icon: FileText,
    title: "Contenu & partage",
    description:
      "Structure des titres, balises Open Graph : l'apparence de votre site dans les résultats et sur les réseaux.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "HTTPS et accessibilité de la page : les fondamentaux de la confiance des visiteurs.",
  },
]

export default function AuditGratuitPage() {
  const breadcrumbItems = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Audit gratuit", url: `${siteConfig.url}/audit-gratuit` },
  ]

  return (
    <>
      <WebPageJsonLd
        title="Audit Gratuit de Site Web"
        description="Analyse gratuite et automatisée de votre site : performance, SEO technique, balises et sécurité, avec rapport détaillé par email."
        url={`${siteConfig.url}/audit-gratuit`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={breadcrumbItems.slice(1).map((item) => ({ label: item.name }))}
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Search className="h-4 w-4" />
                Outil gratuit
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                Votre site vous fait-il{" "}
                <span className="text-primary">perdre des clients</span> ?
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Recevez en 2 minutes un audit complet de votre site : performance
                mesurée par Google, SEO technique, balises essentielles et
                sécurité — avec des explications claires pour chaque point.
              </p>
              <ul className="space-y-3">
                {[
                  "Score global sur 100, mesuré avec les outils Google",
                  "Chaque problème expliqué simplement, sans jargon",
                  "Rapport complet par email, gratuit et sans engagement",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <AuditForm />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Ce que l&apos;audit analyse
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyzedItems.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
