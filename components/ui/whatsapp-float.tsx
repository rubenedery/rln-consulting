"use client"

import { track_whatsapp_click } from "@/components/analytics"
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/ui/whatsapp"

/** Bouton WhatsApp flottant, présent sur toutes les pages. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track_whatsapp_click()}
      aria-label="Nous écrire sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 rounded-full bg-foreground pl-2 pr-2 text-background shadow-lift transition-all duration-300 hover:-translate-y-0.5 sm:pr-5"
    >
      <span className="grid size-10 place-items-center rounded-full bg-[#1FA855] text-white">
        <WhatsAppIcon className="size-5" />
      </span>
      <span className="hidden text-[15px] font-medium sm:inline">Une question ? WhatsApp</span>
    </a>
  )
}
