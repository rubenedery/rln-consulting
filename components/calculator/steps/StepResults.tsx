"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCalculator } from "../CalculatorContext"
import { calculatePrice, serviceOptions } from "@/lib/pricing-data"
import type { PriceBreakdownItem } from "@/types/calculator"

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const startValue = count

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(startValue + (target - startValue) * eased)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return count
}

export function StepResults() {
  const { state, reset } = useCalculator()
  const priceEstimate = calculatePrice(state)
  const animatedTotal = useAnimatedCounter(priceEstimate.total)

  const serviceName = serviceOptions.find((s) => s.value === state.service)?.label || ""

  // Build contact URL with parameters
  const contactParams = new URLSearchParams({
    service: state.service || "",
    estimation: priceEstimate.total.toString(),
  })
  const contactUrl = `/contact?${contactParams.toString()}`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Sparkles className="w-8 h-8 text-success" />
        </motion.div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Votre estimation
        </h2>
        <p className="text-muted-foreground">
          {serviceName}
        </p>
      </div>

      {/* Main price card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="max-w-lg mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="pt-8 pb-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Estimation {priceEstimate.isRecurring ? "mensuelle" : ""}
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <motion.span
                  className="text-5xl sm:text-6xl font-bold text-foreground"
                  key={animatedTotal}
                >
                  {animatedTotal.toLocaleString("fr-FR")}
                </motion.span>
                <span className="text-2xl text-muted-foreground">€</span>
                {priceEstimate.isRecurring && (
                  <span className="text-lg text-muted-foreground">/mois</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Fourchette : {priceEstimate.min.toLocaleString("fr-FR")}€ - {priceEstimate.max.toLocaleString("fr-FR")}€
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Price breakdown */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-lg mx-auto"
      >
        <h3 className="font-semibold text-foreground mb-4">Détail de l'estimation</h3>
        <div className="space-y-2">
          {priceEstimate.breakdown.map((item, index) => (
            <BreakdownItem key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto pt-4"
      >
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
        >
          <Link href={contactUrl}>
            Demander un devis précis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={reset}
          className="flex-1"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Recommencer
        </Button>
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-xs text-muted-foreground max-w-md mx-auto"
      >
        Cette estimation est donnée à titre indicatif. Le prix final dépendra des spécificités de votre projet après analyse détaillée.
      </motion.p>
    </motion.div>
  )
}

// Breakdown item component
function BreakdownItem({ item, index }: { item: PriceBreakdownItem; index: number }) {
  const isDiscount = item.type === "discount"

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.05 }}
      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
    >
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-success flex-shrink-0" />
        <span className="text-sm text-foreground">{item.label}</span>
      </div>
      <span
        className={`text-sm font-medium ${
          isDiscount ? "text-success" : "text-foreground"
        }`}
      >
        {isDiscount ? "" : "+"}{item.amount.toLocaleString("fr-FR")}€
      </span>
    </motion.div>
  )
}
