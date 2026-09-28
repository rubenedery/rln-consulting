import {
  Hero,
  Showreel,
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
import { WebSiteJsonLd, OrganizationJsonLd, LocalBusinessJsonLd, FAQPageJsonLd, VideoJsonLd } from "@/components/seo"
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
      "Un site vitrine démarre à 990 €, un e-commerce à 2 490 €, un chatbot IA à 1 490 € et une application web ou mobile à 4 900 €. Le devis est gratuit et ajusté à votre projet.",
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
      <VideoJsonLd
        name="Showreel Agence RLN"
        description="30 secondes de motion design aux couleurs de l'Agence RLN : sites, apps, IA, 3D, SEO et acquisition."
        contentPath="/videos/showreel-agence-rln.mp4"
        thumbnailPath="/videos/showreel-agence-rln.jpg"
        uploadDate="2026-09-28"
        duration="PT30S"
      />
      <Hero />
      <Showreel />
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
