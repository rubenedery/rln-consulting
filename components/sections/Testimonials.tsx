"use client"

import { motion } from "framer-motion"
import { Quote, Star, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { containerVariants, itemVariants } from "@/lib/animations"
import { testimonials } from "@/lib/content"

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
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
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits et leurs résultats
            après avoir travaillé avec nous.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors relative">
                {/* Result badge */}
                {testimonial.result && (
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-success px-3 py-1 text-xs font-semibold text-success-foreground shadow-sm">
                      <TrendingUp className="h-3 w-3" />
                      {testimonial.result}
                    </span>
                  </div>
                )}

                <CardContent className="pt-8">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />

                  {/* Stars - dynamique selon la note */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
