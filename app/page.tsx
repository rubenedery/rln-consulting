import {
  Hero,
  ServicesPreview,
  AIServices,
  LeadMagnet,
  Testimonials,
  CTA,
  CaseStudiesPreview,
  FAQ,
} from "@/components/sections"
import {
  WebSiteJsonLd,
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  FAQPageJsonLd,
  ItemListJsonLd,
} from "@/components/seo"
import { getAllCaseStudies } from "@/lib/mdx"
import { services, faqData } from "@/lib/content"
import { siteConfig } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

/**
 * Les 6 questions reprises en page d'accueil. La constante est partagée entre le
 * rendu et le JSON-LD : déclarer dans FAQPage des questions absentes de la page
 * est une non-conformité aux consignes de Google, et un agent qui compare les
 * deux y voit une contradiction.
 */
const homeFaqItems = faqData.slice(0, 6)

export default function HomePage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <FAQPageJsonLd questions={homeFaqItems} />
      <ItemListJsonLd
        name="Services RLN Consulting"
        description="Prestations de développement web, marketing digital et intelligence artificielle."
        itemType="Service"
        items={services.map((service) => ({
          name: service.title,
          url: `${siteConfig.url}${service.href}`,
          description: service.description,
        }))}
      />
      <Hero />
      <ServicesPreview />
      <AIServices />
      <LeadMagnet />
      <CaseStudiesPreview caseStudies={caseStudies} />
      <Testimonials />
      <FAQ items={homeFaqItems} />
      <CTA />
    </>
  )
}
