"use client"

import * as React from "react"
import { RotateCcw } from "lucide-react"

const messages: { from: "client" | "bot"; text: string; note?: string }[] = [
  { from: "client", text: "Bonjour, mon chiffre d'affaires augmente cette année. À partir de quand je dois facturer la TVA ?" },
  {
    from: "bot",
    text: "Dès que vous dépassez le seuil de la franchise en base qui s'applique à votre activité. Je vous envoie la fiche du cabinet qui détaille les seuils à jour et les démarches.",
    note: "Réponse issue de la fiche « Franchise de TVA » validée par le cabinet",
  },
  { from: "client", text: "Et pour ma situation précise, je fais comment ?" },
  {
    from: "bot",
    text: "C'est une question à traiter avec votre collaborateur référent. Je lui transmets votre dossier et votre question : il vous rappelle sous 24 h ouvrées.",
    note: "Transmis au collaborateur avec le contexte",
  },
]

/** Démo animée de l'assistant client d'un cabinet (exemple illustratif). */
export function AccountantChatDemo() {
  const [run, setRun] = React.useState(0)

  return (
    <figure className="m-0 flex flex-col gap-3 rounded-lg bg-white p-4 text-[#0B0D12] shadow-lift sm:p-5">
      <div className="flex items-center justify-between border-b border-[#D9DBE2] pb-3">
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-[#5A5F6E] uppercase">
          <span className="v-dot" aria-hidden="true" />
          Assistant du cabinet · exemple
        </span>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs text-[#5A5F6E] transition-colors hover:bg-[#E8EAEE] hover:text-[#0B0D12]"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" /> Rejouer
        </button>
      </div>
      <div key={run} className="flex min-h-[380px] flex-col justify-end gap-3" aria-live="polite">
        {messages.map((m, i) =>
          m.from === "client" ? (
            <div
              key={i}
              className="v-msg max-w-[82%] self-end rounded-2xl rounded-br-sm bg-[#1F2BFF] px-4 py-3 text-sm leading-relaxed text-white"
            >
              {m.text}
            </div>
          ) : (
            <div key={i} className="v-msg flex max-w-[88%] flex-col gap-1.5 self-start">
              <div className="rounded-2xl rounded-bl-sm bg-[#E8EAEE] px-4 py-3 text-sm leading-relaxed">{m.text}</div>
              {m.note && <span className="pl-1 font-mono text-[10px] text-[#5A5F6E]">{m.note}</span>}
            </div>
          )
        )}
      </div>
      <figcaption className="sr-only">
        Exemple de conversation entre un client et l&apos;assistant IA d&apos;un cabinet comptable.
      </figcaption>
    </figure>
  )
}
