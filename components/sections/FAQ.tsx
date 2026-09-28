"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqData, type FAQItem } from "@/lib/content"

interface FAQProps {
  items?: FAQItem[]
  showTitle?: boolean
  maxItems?: number
  title?: React.ReactNode
  /** "h1" sur la page /faq dédiée (le titre y est le titre principal), "h2" partout ailleurs */
  headingLevel?: "h1" | "h2"
}

export function FAQ({ items = faqData, showTitle = true, maxItems, title, headingLevel = "h2" }: FAQProps) {
  const Heading = headingLevel
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const displayItems = maxItems ? items.slice(0, maxItems) : items

  return (
    <section className="py-24 lg:py-32" aria-labelledby={showTitle ? "faq-title" : undefined}>
      <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-8">
        {showTitle ? (
          <div className="flex flex-col gap-4">
            <span className="v-label">Questions fréquentes</span>
            <Heading id="faq-title" className="v-display text-5xl sm:text-6xl">
              {title ?? (
                <>
                  Ce qu&apos;on nous <span className="v-em">demande.</span>
                </>
              )}
            </Heading>
          </div>
        ) : (
          <div className="hidden lg:block" />
        )}

        <div className="border-b border-border">
          {displayItems.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={index} className="border-t border-border">
                <h3 className="m-0">
                  <button
                    id={`faq-question-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl leading-snug font-semibold tracking-[-0.02em] sm:text-2xl"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {item.question}
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full border border-input transition-all duration-300",
                        open && "rotate-45 border-transparent bg-primary text-primary-foreground"
                      )}
                      aria-hidden="true"
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.7, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[62ch] pr-12 pb-7 text-[17px] leading-relaxed text-muted-foreground">{item.answer}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
