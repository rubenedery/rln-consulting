import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CreditCard, Package, ShoppingCart, Store, Truck, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { CTA, FAQ } from "@/components/sections"
import { serviceFaqs } from "@/lib/content"

export const metadata: Metadata = {
  title: "E-commerce | Boutiques en Ligne Performantes",
  description:
    "Création de boutiques en ligne e-commerce. Shopify, WooCommerce ou sur mesure. Paiement sécurisé, gestion des stocks, Click & Collect.",
  keywords: [
    "e-commerce",
    "boutique en ligne",
    "Shopify",
    "WooCommerce",
    "vente en ligne",
    "paiement en ligne",
  ],
  openGraph: {
    title: "E-commerce | RLN Consulting",
    description: "Création de boutiques en ligne e-commerce performantes.",
    url: "https://rln-consulting.com/services/ecommerce",
  },
}

const features = [
  {
    icon: Store,
    title: "Boutique Complète",
    description: "Catalogue produits, panier, checkout optimisé pour la conversion.",
  },
  {
    icon: CreditCard,
    title: "Paiement Sécurisé",
    description: "Stripe, PayPal, paiement en plusieurs fois avec Alma ou Klarna.",
  },
  {
    icon: Package,
    title: "Gestion des Stocks",
    description: "Suivi des stocks en temps réel, alertes de réapprovisionnement.",
  },
  {
    icon: Truck,
    title: "Livraison Intégrée",
    description: "Colissimo, Mondial Relay, transporteurs personnalisés.",
  },
  {
    icon: ShoppingCart,
    title: "Click & Collect",
    description: "Commande en ligne, retrait en magasin. Le meilleur des deux mondes.",
  },
  {
    icon: BarChart2,
    title: "Analytics E-commerce",
    description: "Suivi des ventes, panier moyen, taux de conversion.",
  },
]

const platforms = [
  "Shopify",
  "WooCommerce",
  "Next.js Commerce",
  "Stripe",
  "PayPal",
  "Alma",
  "Colissimo",
  "Mondial Relay",
]

export default function EcommercePage() {
  return (
    <>
      <ServiceJsonLd
        name="E-commerce"
        description="Création de boutiques en ligne e-commerce. Shopify, WooCommerce ou sur mesure."
        url="https://rln-consulting.com/services/ecommerce"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          { name: "E-commerce", url: "https://rln-consulting.com/services/ecommerce" },
        ]}
      />
      <FAQPageJsonLd questions={serviceFaqs["ecommerce"]} />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <ShoppingCart className="h-4 w-4" />
              E-commerce
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Vendez <span className="text-primary">24h/24</span> en ligne
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Boutique en ligne clé en main pour vendre vos produits.
              Shopify, WooCommerce ou solution sur mesure selon vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Lancer ma boutique
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tout ce qu'il faut pour vendre</h2>
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

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Plateformes & Intégrations</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={serviceFaqs["ecommerce"]} />

      <CTA />
    </>
  )
}
