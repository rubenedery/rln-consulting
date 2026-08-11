import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA, FAQ } from "@/components/sections"
import { serviceFaqs } from "@/lib/content"
import { siteConfig } from "@/lib/constants"
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type RichTextSegment,
  type ServiceSection,
} from "@/lib/services-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service non trouvé",
    }
  }

  return {
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    openGraph: {
      title: service.meta.ogTitle,
      description: service.meta.ogDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      ...(service.meta.ogImage && {
        images: [{ url: service.meta.ogImage, width: 1200, height: 630 }],
      }),
    },
  }
}

function RichText({ segments }: { segments: RichTextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        typeof segment === "string" ? (
          segment
        ) : (
          <strong key={index}>{segment.strong}</strong>
        )
      )}
    </>
  )
}

function ServiceSectionBlock({ section }: { section: ServiceSection }) {
  switch (section.type) {
    case "answer-first":
      return (
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-foreground mb-3">
                      {item.heading}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <RichText segments={item.body} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    case "features":
      return (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {section.heading}
              </h2>
              {section.subtitle && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/30 transition-colors"
                >
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
      )
    case "badges":
      return (
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {section.heading}
              </h2>
              {section.subtitle && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {section.items.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )
    case "process":
      return (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {section.heading}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    case "use-cases":
      return (
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    case "stats":
      return (
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {section.items.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const breadcrumbItems = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    {
      name: service.breadcrumbName,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  ]

  const HeroIcon = service.hero.icon

  return (
    <>
      <ServiceJsonLd
        name={service.jsonLd.name}
        description={service.jsonLd.description}
        url={`${siteConfig.url}/services/${service.slug}`}
        minPrice={service.jsonLd.minPrice}
        maxPrice={service.jsonLd.maxPrice}
        features={service.jsonLd.features}
        estimatedDuration={service.jsonLd.estimatedDuration}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FAQPageJsonLd questions={serviceFaqs[service.slug]} />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={breadcrumbItems.slice(1).map((item, index, arr) =>
              index < arr.length - 1
                ? { label: item.name, href: new URL(item.url).pathname }
                : { label: item.name }
            )}
            className="mb-6"
          />
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <HeroIcon className="h-4 w-4" />
              {service.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              {service.hero.h1.before}
              <span className="text-primary">{service.hero.h1.highlight}</span>
              {service.hero.h1.after}
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              {service.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href={service.hero.primaryCta.href}>
                  {service.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {service.hero.secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <Link href={service.hero.secondaryCta.href}>
                    {service.hero.secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {service.sections.map((section, index) => (
        <ServiceSectionBlock key={index} section={section} />
      ))}

      {/* FAQ Section */}
      <FAQ items={serviceFaqs[service.slug]} />

      <CTA />
    </>
  )
}
