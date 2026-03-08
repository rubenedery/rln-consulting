"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCard } from "../ui/OptionCard"
import { serviceOptions } from "@/lib/pricing-data"

export function StepServiceSelection() {
  const { state, dispatch, nextStep } = useCalculator()

  const handleSelect = (service: typeof serviceOptions[number]["value"]) => {
    dispatch({ type: "SET_SERVICE", payload: service })
    // Auto-advance after selection
    setTimeout(nextStep, 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          De quel service avez-vous besoin ?
        </h2>
        <p className="text-muted-foreground">
          Sélectionnez le type de projet pour obtenir une estimation
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
        {serviceOptions.map((option, index) => (
          <motion.div
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <OptionCard
              label={option.label}
              description={option.description}
              icon={option.icon}
              selected={state.service === option.value}
              onClick={() => handleSelect(option.value)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
