"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { track_cta_click } from "@/components/analytics"

export function Hero() {
  const ref = React.useRef<HTMLElement>(null)
  const [flipped, setFlipped] = React.useState(false)

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="v-dots hidden md:block" aria-hidden="true" />
      <div className="container relative mx-auto grid gap-10 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-x-16 lg:gap-y-12 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="flex flex-col gap-7 lg:col-span-2">
          <span className="v-label inline-flex items-center gap-2">
            <span className="v-dot" aria-hidden="true" />
            Studio produit &amp; marque · Paris · 50+ projets livrés
          </span>
          <h1 id="hero-title" className="v-display text-[56px] sm:text-[88px] lg:text-[128px] xl:text-[152px]">
            <span className="v-line"><span>On construit.</span></span>
            <span className="v-line">
              <span>
                On fait <span className="v-em text-primary">connaître.</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col justify-start gap-8">
          <p className="max-w-[40ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Un associé tech, une associée marketing. Sites, apps, SaaS, IA, 3D, SEO et acquisition, avec les mêmes
            interlocuteurs du premier commit à la première vente.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" onClick={() => track_cta_click("demarrer_projet", "hero")}>
              <Link href="/contact">
                <span className="v-roll">
                  <span>Démarrer un projet</span>
                  <span aria-hidden="true">Démarrer un projet</span>
                </span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cas-etudes">Voir les réalisations</Link>
            </Button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          data-flipped={flipped}
          aria-pressed={flipped}
          aria-label="Retourner la carte : ce qu'on construit, ce que ça rapporte"
          className="v-flip relative hidden h-[340px] cursor-pointer text-left lg:block"
        >
          <span className="v-flip__in block">
            <span className="v-face group flex flex-col gap-3 bg-primary p-8 text-primary-foreground">
              <span className="v-fold" aria-hidden="true" />
              <span className="v-label !text-white/80">Recto · ce qu&apos;on construit</span>
              <span className="mt-2 font-mono text-sm leading-[1.9] text-white/90">
                next.js · react native · three.js
                <br />
                openai · rag · automatisations
                <br />
                shopify headless · stripe
                <br />
                crm sur mesure · api
              </span>
              <span className="mt-auto font-display text-[44px] leading-none font-semibold tracking-[-0.03em]">Le produit.</span>
              <span className="text-sm text-white/80">Survolez pour voir le verso</span>
            </span>
            <span className="v-face v-face--back flex flex-col gap-3 bg-[#0B0D12] p-8 text-white">
              <span className="v-label !text-[#C8CDFF]">Verso · ce que ça rapporte</span>
              <span className="mt-auto font-display text-[96px] leading-[0.9] font-semibold tracking-[-0.05em]">
                +463<span className="v-em text-[#C8CDFF]">%</span>
              </span>
              <span className="text-[17px] leading-snug text-[#C8CDFF]">
                de trafic organique pour une agence immobilière : 800 → 4 500 visites par mois.
              </span>
            </span>
          </span>
        </button>
      </div>
    </section>
  )
}
