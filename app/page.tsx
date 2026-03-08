import {
  Hero,
  ClientLogos,
  ServicesPreview,
  AIServices,
  LeadMagnet,
  Testimonials,
  CTA,
  CaseStudiesPreview,
} from "@/components/sections"
import { WebSiteJsonLd, OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo"
import { getAllCaseStudies } from "@/lib/mdx"

export default function HomePage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <Hero />
      <ClientLogos />
      <ServicesPreview />
      <AIServices />
      <LeadMagnet />
      <CaseStudiesPreview caseStudies={caseStudies} />
      <Testimonials />
      <CTA />
    </>
  )
}
