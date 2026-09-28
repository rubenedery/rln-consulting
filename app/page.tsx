import {
  Hero,
  ExpertiseMarquee,
  ServicesBento,
  Included,
  Stats,
  Studio,
  Method,
  LeadMagnet,
  Testimonials,
  FAQ,
  CTA,
  CaseStudiesPreview,
} from "@/components/sections"
import { WebSiteJsonLd, OrganizationJsonLd, LocalBusinessJsonLd, FAQPageJsonLd } from "@/components/seo"
import { getAllCaseStudies } from "@/lib/mdx"
import type { FAQItem } from "@/lib/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

const homeFaqs: FAQItem[] = [
  {
    question: "Combien coûte un site web ?",
    answer:
      "Un site vitrine professionnel coûte entre 2 000 € et 5 000 €. Un e-commerce démarre à 5 000 € et peut aller jusqu'à 15 000 €. Une application web sur mesure se situe entre 10 000 € et 50 000 €.",
  },
  {
    question: "En combien de temps est-ce livré ?",
    answer:
      "Un site vitrine est livré en 2 à 4 semaines, un e-commerce en 4 à 8 semaines, une application web complexe en 2 à 4 mois.",
  },
  {
    question: "Mon site sera-t-il accessible et bien référencé ?",
    answer:
      "Oui, c'est inclus dans chaque projet : SEO technique, données structurées, performance, et accessibilité selon les critères WCAG et RGAA (contrastes, navigation au clavier, lecteurs d'écran).",
  },
  {
    question: "Qui s'occupe de mon projet ?",
    answer:
      "Les deux associés, du début à la fin : l'un sur la technique, l'autre sur la marque, la visibilité et le suivi. Vous gardez les mêmes interlocuteurs.",
  },
  {
    question: "Vous travaillez en dehors de Paris ?",
    answer:
      "Oui. Nous accompagnons des entreprises partout en France, à distance, avec des rendez-vous possibles à Paris.",
  },
]

export default function HomePage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <FAQPageJsonLd questions={homeFaqs} />
      <Hero />
      <ExpertiseMarquee />
      <ServicesBento />
      <Included />
      <Stats />
      <Studio />
      <Method />
      <CaseStudiesPreview caseStudies={caseStudies} />
      <Testimonials />
      <LeadMagnet />
      <FAQ items={homeFaqs} />
      <CTA />
    </>
  )
}
