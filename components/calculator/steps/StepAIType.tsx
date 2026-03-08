"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCard } from "../ui/OptionCard"
import { aiSolutionOptions } from "@/lib/pricing-data"
import type { AISolutionType } from "@/types/calculator"

export function StepAIType() {
  const { state, dispatch } = useCalculator()

  const handleSelect = (solutionType: AISolutionType) => {
    dispatch({ type: "SET_AI_SOLUTION_TYPE", payload: solutionType })
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
          Quelle solution IA ?
        </h2>
        <p className="text-muted-foreground">
          Choisissez le type de solution d'intelligence artificielle adapté à vos besoins
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
        {aiSolutionOptions.map((option, index) => (
          <motion.div
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <OptionCard
              label={option.label}
              description={option.description}
              icon={option.icon}
              price={option.price}
              selected={state.ai.solutionType === option.value}
              popular={option.popular}
              onClick={() => handleSelect(option.value)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
