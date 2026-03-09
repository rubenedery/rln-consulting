"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code,
  Target,
  BrainCircuit,
  Smartphone,
  LayoutDashboard,
  Search,
  Mail,
  ShoppingCart,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { containerVariants, itemVariants } from "@/lib/animations"
import { services } from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Target,
  BrainCircuit,
  Smartphone,
  LayoutDashboard,
  Search,
  Mail,
  ShoppingCart,
}

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <Check className="h-3 w-3 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="w-full group">
                      <Link href={service.href}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
