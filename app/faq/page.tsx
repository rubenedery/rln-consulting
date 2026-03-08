import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { FAQ, CTA } from "@/components/sections"
import { faqData } from "@/lib/content"

export const metadata: Metadata = {
  title: "FAQ | Questions Fréquentes",
  description:
    "Retrouvez les réponses aux questions les plus courantes sur nos services de développement web et gestion publicitaire. Tarifs, délais, processus.",
  openGraph: {
    title: "FAQ | RLN Consulting",
    description: "Questions fréquentes sur nos services de développement web et marketing digital.",
    url: "https://rln-consulting.com/faq",
  },
}

// Generate FAQ Schema for SEO
function FAQPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function FAQPage() {
  return (
    <>
      <WebPageJsonLd
        title="FAQ - RLN Consulting"
        description="Questions fréquentes sur nos services"
        url="https://rln-consulting.com/faq"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "FAQ", url: "https://rln-consulting.com/faq" },
        ]}
      />
      <FAQPageJsonLd />

      <FAQ />

      {/* Additional CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Vous n&apos;avez pas trouvé la réponse ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
            Contactez-nous directement.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTA />
    </>
  )
}
