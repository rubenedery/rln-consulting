"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { track_cta_click, track_whatsapp_click } from "@/components/analytics"
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/ui/whatsapp"

export function CTA() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="cta-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group relative grid items-end gap-10 overflow-hidden bg-primary px-6 py-14 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-20 lg:py-24">
          <span className="v-fold !size-[72px] group-hover:!size-[96px]" aria-hidden="true" />
          <div className="flex flex-col gap-5">
            <span className="v-label !text-white/80">Nouveau projet</span>
            <h2 id="cta-title" className="v-display text-6xl sm:text-8xl lg:text-[104px]">
              Tournons <span className="v-em">la page.</span>
            </h2>
            <p className="max-w-[44ch] text-lg leading-relaxed text-white/90">
              Racontez-nous votre projet en deux minutes. Réponse chiffrée sous 24 h ouvrées.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Button asChild size="lg" variant="inverse" onClick={() => track_cta_click("demarrer_projet", "cta_section")}>
              <Link href="/contact">
                <span className="v-roll">
                  <span>Démarrer un projet</span>
                  <span aria-hidden="true">Démarrer un projet</span>
                </span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track_whatsapp_click()}
              className="inline-flex h-12 items-center gap-3 rounded-full bg-white/15 pr-5 pl-1.5 text-[15px] font-medium transition-colors hover:bg-white/25"
            >
              <span className="grid size-9 place-items-center rounded-full bg-[#1FA855]">
                <WhatsAppIcon className="size-4" />
              </span>
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
