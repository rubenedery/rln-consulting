"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { testimonials } from "@/lib/content"

/** Témoignages clients, sans nom de personne : rôle et entreprise seulement. */
export function Testimonials() {
  const [i, setI] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const n = testimonials.length

  React.useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setI((x) => (x + 1) % n), 7000)
    return () => window.clearInterval(id)
  }, [paused, n])

  const t = testimonials[i]

  return (
    <section
      className="py-24 lg:py-32"
      aria-roledescription="carrousel"
      aria-label="Témoignages clients"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
    >
      <div className="container mx-auto grid gap-10 border-t border-border px-4 pt-10 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="v-label">Ils en parlent</span>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => setI((i + n - 1) % n)}
              aria-label="Témoignage précédent"
              className="grid size-13 place-items-center rounded-full border border-input transition-colors hover:bg-foreground hover:text-background"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setI((i + 1) % n)}
              aria-label="Témoignage suivant"
              className="grid size-13 place-items-center rounded-full border border-input transition-colors hover:bg-foreground hover:text-background"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="flex gap-1.5">
            {testimonials.map((x, k) => (
              <button
                key={x.id}
                type="button"
                onClick={() => setI(k)}
                aria-label={`Témoignage ${k + 1}`}
                aria-current={k === i}
                className={cn("h-[3px] w-7 rounded-full transition-colors", k === i ? "bg-primary" : "bg-border")}
              />
            ))}
          </div>
          <span className="font-mono text-[13px] text-muted-foreground tabular-nums">
            {i + 1} / {n}
          </span>
        </div>
        <figure key={t.id} className="m-0 flex min-h-[300px] animate-[v-pop_.6s_cubic-bezier(.7,0,.2,1)_both] flex-col gap-7" aria-live="polite">
          <blockquote className="m-0 max-w-[28ch] font-serif text-4xl leading-[1.1] tracking-[-0.01em] italic sm:text-5xl">
            « {t.quote} »
          </blockquote>
          <figcaption className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span>
              {t.role} · {t.company}
            </span>
            {t.result && (
              <span className="inline-flex h-8 items-center rounded-full bg-secondary px-3 font-mono text-xs text-secondary-foreground">
                {t.result}
              </span>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
