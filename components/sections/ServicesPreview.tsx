"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Target, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { containerVariants, itemVariants } from "@/lib/animations"

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description:
      "Création de sites web et applications performantes avec les dernières technologies.",
    features: [
      "Sites vitrines & e-commerce",
      "Applications web sur mesure",
      "Intégrations API & CMS",
      "Optimisation performance",
    ],
    href: "/services/developpement",
  },
  {
    icon: Target,
    title: "Gestion Publicités",
    description:
      "Gestion et optimisation de vos campagnes Facebook Ads, Google Ads et autres plateformes.",
    features: [
      "Audit & stratégie publicitaire",
      "Création de campagnes",
      "A/B testing & optimisation",
      "Reporting & analytics",
    ],
    href: "/services/ads-management",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Solutions complètes pour votre croissance digitale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la conception à la mise en ligne, nous vous accompagnons à chaque
            étape de votre transformation numérique.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={service.href}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
