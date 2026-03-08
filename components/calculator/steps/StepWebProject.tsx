"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCard } from "../ui/OptionCard"
import { webProjectOptions } from "@/lib/pricing-data"

export function StepWebProject() {
  const { state, dispatch } = useCalculator()

  const handleSelect = (projectType: typeof webProjectOptions[number]["value"]) => {
    dispatch({ type: "SET_WEB_PROJECT_TYPE", payload: projectType })
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
          Quel type de site web ?
        </h2>
        <p className="text-muted-foreground">
          Choisissez le type de projet qui correspond à vos besoins
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
        {webProjectOptions.map((option, index) => (
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
              selected={state.web.projectType === option.value}
              popular={option.popular}
              onClick={() => handleSelect(option.value)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
