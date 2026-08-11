import {
  Hero,
  ServicesPreview,
  AIServices,
  LeadMagnet,
  Testimonials,
  CTA,
  CaseStudiesPreview,
} from "@/components/sections"
import { WebSiteJsonLd, OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo"
import { getAllCaseStudies } from "@/lib/mdx"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <Hero />
      <ServicesPreview />
      <AIServices />
      <LeadMagnet />
      <CaseStudiesPreview caseStudies={caseStudies} />
      <Testimonials />
      <CTA />
    </>
  )
}
