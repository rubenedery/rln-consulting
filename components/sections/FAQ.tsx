"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqData, type FAQItem } from "@/lib/content"

interface FAQProps {
  items?: FAQItem[]
  showTitle?: boolean
  maxItems?: number
}

export function FAQ({
  items = faqData,
  showTitle = true,
  maxItems,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const displayItems = maxItems ? items.slice(0, maxItems) : items

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos
              services et notre façon de travailler.
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {displayItems.map((item, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-lg overflow-hidden bg-card hover:border-primary/30 transition-colors"
              >
                <button
                  id={`faq-question-${index}`}
                  onClick={() => toggleItem(index)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
