"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { containerVariants, itemVariants } from "@/lib/animations"
import type { CaseStudyMeta } from "@/types"

interface CaseStudiesPreviewProps {
  caseStudies: CaseStudyMeta[]
}

export function CaseStudiesPreview({ caseStudies }: CaseStudiesPreviewProps) {
  // Show only first 3 case studies
  const displayedCaseStudies = caseStudies.slice(0, 3)

  if (displayedCaseStudies.length === 0) {
    return null
  }

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
            Cas d&apos;études
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Nos réalisations récentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous avons aidé nos clients à atteindre leurs
            objectifs avec des solutions sur mesure.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedCaseStudies.map((study) => (
            <motion.div key={study.slug} variants={itemVariants}>
              <Link href={`/cas-etudes/${study.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50">
                  {/* Image */}
                  <div className="relative aspect-video bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <TrendingUp className="h-12 w-12" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="pt-6">
                    {/* Client */}
                    <p className="text-sm text-muted-foreground mb-1">
                      {study.client}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {study.description}
                    </p>

                    {/* Key result */}
                    {study.results.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        <span className="font-medium text-accent">
                          {study.results[0].improvement}
                        </span>
                        <span className="text-muted-foreground">
                          {study.results[0].metric}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/cas-etudes">
              Voir tous nos cas d&apos;études
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
