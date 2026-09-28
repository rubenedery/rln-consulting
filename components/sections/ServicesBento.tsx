"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"

function TileHead({
  label,
  title,
  price,
  href,
  dark,
}: {
  label: string
  title: React.ReactNode
  price?: string
  href: string
  dark?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2.5">
        <span className={cn("v-label", dark && "!text-white/60")}>{label}</span>
        <h3 className="max-w-[20ch] text-2xl leading-[1.05] font-semibold tracking-[-0.025em] sm:text-[28px]">
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {title}
          </Link>
        </h3>
      </div>
      <div className="flex flex-col items-end gap-2">
        <ArrowUpRight
          className={cn(
            "size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
          aria-hidden="true"
        />
        {price && (
          <span className={cn("text-right font-mono text-xs whitespace-pre-line", dark ? "text-white/60" : "text-muted-foreground")}>
            {price}
          </span>
        )}
      </div>
    </div>
  )
}

function Result({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center self-start rounded-full px-3 font-mono text-xs",
        dark ? "bg-white/15 text-white" : "bg-secondary text-secondary-foreground"
      )}
    >
      {children}
    </span>
  )
}

const tile =
  "group relative flex flex-col gap-4 overflow-hidden rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7"

const products = [
  ["Manteau laine", "189 €", "bg-klein-200"],
  ["Pull col rond", "79 €", "bg-muted"],
  ["Veste droite", "149 €", "bg-foreground"],
  ["Écharpe", "45 €", "bg-primary"],
  ["Chemise lin", "69 €", "bg-muted"],
  ["Pantalon", "99 €", "bg-secondary"],
  ["Cardigan", "109 €", "bg-klein-200"],
  ["Bottines", "159 €", "bg-foreground"],
]

const finishes = [
  { name: "Bleu Klein", hex: "#1F2BFF" },
  { name: "Graphite", hex: "#2A2D36" },
  { name: "Sable", hex: "#D8C3A5" },
  { name: "Sauge", hex: "#8FA894" },
]

export function ServicesBento() {
  const [finish, setFinish] = React.useState(0)

  return (
    <section className="py-24 lg:py-40" aria-labelledby="expertises-title">
      <div className="container mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <header className="grid items-end gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="v-label">Expertises</span>
            <h2 id="expertises-title" className="v-display text-5xl sm:text-7xl">
              Tout pour lancer, <span className="v-em">et pour vendre.</span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
            Sept métiers, une seule équipe. Chaque bloc montre ce qu&apos;on livre, avec un résultat obtenu chez un
            client.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Sites & e-commerce */}
          <article className={cn(tile, "bg-card min-h-[500px] lg:col-span-7")}>
            <TileHead
              label="Recto · Sites & e-commerce"
              title="Des sites qui chargent vite et qui vendent."
              price={"Dès\u00a02\u00a0000\u00a0€\nE-commerce dès\u00a05\u00a0000\u00a0€"}
              href="/services/developpement"
            />
            <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-md border bg-card" aria-hidden="true">
              <div className="flex h-8 items-center gap-1.5 border-b bg-background px-3">
                <i className="size-2 rounded-full bg-input/50" />
                <i className="size-2 rounded-full bg-input/50" />
                <i className="size-2 rounded-full bg-input/50" />
                <span className="ml-3 h-5 flex-1 rounded bg-muted px-2 font-mono text-[11px] leading-5 text-muted-foreground">
                  boutique-mode.fr
                </span>
              </div>
              <div className="absolute inset-x-0 top-8 bottom-0 overflow-hidden">
                <div className="v-scrollpage flex flex-col gap-3.5 p-4">
                  <div className="flex h-36 items-end justify-between rounded-md bg-secondary p-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-2xl font-semibold tracking-[-0.03em]">Collection automne</span>
                      <span className="text-xs text-muted-foreground">Livraison offerte dès 80 €</span>
                    </div>
                    <span className="rounded-full bg-foreground px-3.5 py-1.5 text-xs text-background">Découvrir</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {products.map(([name, price, bg]) => (
                      <div key={name} className="flex flex-col gap-1.5">
                        <div className={cn("h-28 rounded", bg)} />
                        <span className="text-xs">{name}</span>
                        <span className="font-mono text-[11px] text-muted-foreground">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Result>Refonte mode · chargement 4,2 s → 1,4 s · conversion +78 %</Result>
          </article>

          {/* IA */}
          <article className={cn(tile, "min-h-[500px] border-transparent bg-[#0B0D12] text-white lg:col-span-5")}>
            <TileHead
              dark
              label="Recto · IA & chatbots"
              title={
                <>
                  Un assistant qui répond à <span className="v-em text-[#C8CDFF]">70 %</span> des demandes.
                </>
              }
              price="3 000 € – 30 000 €"
              href="/services/ia-entreprise"
            />
            <div className="flex min-h-[260px] flex-1 flex-col justify-end gap-2.5 rounded-md bg-white p-4 text-[#0B0D12]" aria-hidden="true">
              <div className="v-msg max-w-[80%] self-end rounded-2xl rounded-br-sm bg-[#1F2BFF] px-3.5 py-2.5 text-sm text-white">
                Ma commande n&apos;est pas arrivée, vous pouvez vérifier ?
              </div>
              <div className="v-msg max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-[#E8EAEE] px-3.5 py-2.5 text-sm">
                Bien sûr. Le colis #4821 est en livraison, arrivée prévue demain avant 13 h.
              </div>
              <div className="v-msg max-w-[80%] self-end rounded-2xl rounded-br-sm bg-[#1F2BFF] px-3.5 py-2.5 text-sm text-white">
                Et je peux encore changer la taille ?
              </div>
              <div className="v-msg max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-[#E8EAEE] px-3.5 py-2.5 text-sm">
                Oui, jusqu&apos;à l&apos;expédition. Je passe du M au L ?
              </div>
              <span className="v-typing v-msg inline-flex gap-1 self-start rounded-2xl bg-[#E8EAEE] px-3.5 py-3">
                <i />
                <i />
                <i />
              </span>
            </div>
            <Result dark>70 % des tickets résolus · réponse &lt; 30 s</Result>
          </article>

          {/* 3D */}
          <article className={cn(tile, "min-h-[440px] border-transparent bg-secondary lg:col-span-4")}>
            <TileHead label="Recto · Configurateurs 3D" title="Le client voit son produit exact." price="8 000 € – 50 000 €" href="/services/configurateur-3d" />
            <div
              className="v-scene grid min-h-[200px] flex-1 place-items-center"
              style={{ "--c": finishes[finish].hex } as React.CSSProperties}
              aria-hidden="true"
            >
              <div className="v-cube">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex gap-2.5" role="group" aria-label="Choisir une finition">
                {finishes.map((f, i) => (
                  <button
                    key={f.name}
                    type="button"
                    onClick={() => setFinish(i)}
                    aria-pressed={finish === i}
                    aria-label={f.name}
                    className={cn(
                      "size-9 rounded-full border-2 border-card ring-1 ring-input transition-shadow",
                      finish === i && "ring-2 ring-foreground"
                    )}
                    style={{ background: f.hex }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">{finishes[finish].name}</span>
            </div>
          </article>

          {/* SEO & GEO */}
          <article className={cn(tile, "min-h-[440px] bg-card lg:col-span-5")}>
            <TileHead
              label="Verso · SEO & GEO"
              title={
                <>
                  Trouvé sur Google. <span className="v-em">Cité par les IA.</span>
                </>
              }
              price="Dès 800 € / mois"
              href="/services/seo-referencement"
            />
            <div className="flex flex-1 flex-col gap-2.5" aria-hidden="true">
              <div className="flex h-10 items-center gap-2.5 rounded-full border border-input px-4 text-sm">
                <Search className="size-3.5" /> agence immobilière luxe paris
              </div>
              <div className="flex flex-col gap-1 px-3 py-2 opacity-45">
                <span className="font-mono text-[11px]">annonces-immo.fr</span>
                <b className="h-2 w-[70%] rounded bg-input" />
              </div>
              <div className="flex items-center justify-between rounded-md border border-klein-200 bg-secondary p-3">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] text-primary">votre-agence.fr</span>
                  <span className="text-sm font-semibold">Biens d&apos;exception à Paris</span>
                </div>
                <span className="rounded-full bg-primary px-3 py-1 font-mono text-xs text-primary-foreground">Top 3</span>
              </div>
              <div className="mt-auto rounded-md bg-muted p-3.5 text-[13px] leading-relaxed">
                <span className="v-label mb-1 block">Réponse d&apos;un assistant IA</span>
                Pour un bien de prestige à Paris, plusieurs agences spécialisées sont recommandées, dont{" "}
                <b className="text-primary">votre-agence.fr</b>.
              </div>
            </div>
            <Result>Immobilier · page 3 → top 3 Google · +463 % de trafic</Result>
          </article>

          {/* Apps */}
          <article className={cn(tile, "min-h-[440px] border-transparent bg-primary text-primary-foreground lg:col-span-3")}>
            <TileHead dark label="Recto · Apps mobiles" title="iOS et Android, un seul code." href="/services/applications-mobiles" />
            <div className="grid flex-1 place-items-center" aria-hidden="true">
              <div className="h-[250px] w-[150px] -rotate-6 rounded-[26px] bg-[#0B0D12] p-[7px] shadow-[0_24px_48px_-16px_rgba(0,0,0,.45)]">
                <div className="flex h-full flex-col gap-1.5 rounded-[20px] bg-[#F2F3F5] px-2.5 pt-4 pb-2.5 text-[#0B0D12]">
                  <span className="font-display text-[15px] font-semibold">Bonjour</span>
                  <div className="h-14 rounded-[10px] bg-[#1F2BFF]" />
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-10 rounded-lg bg-[#E4E7FF]" />
                    <div className="h-10 rounded-lg bg-white" />
                  </div>
                  <div className="h-5 rounded-md bg-white" />
                  <div className="h-5 rounded-md bg-white" />
                  <div className="mt-auto flex justify-around">
                    <i className="size-3.5 rounded bg-[#1F2BFF]" />
                    <i className="size-3.5 rounded bg-[#C8CDFF]" />
                    <i className="size-3.5 rounded bg-[#C8CDFF]" />
                  </div>
                </div>
              </div>
            </div>
            <span className="font-mono text-xs text-white/80">15 000 € – 80 000 €</span>
          </article>

          {/* CRM */}
          <article className={cn(tile, "min-h-[400px] bg-card lg:col-span-6")}>
            <TileHead label="Recto · CRM sur mesure" title="Vos process, pas ceux d'un logiciel." price="15 000 € – 50 000 €" href="/services/crm-applications-metier" />
            <div className="grid flex-1 grid-cols-3 items-start gap-3" aria-hidden="true">
              {[
                ["Nouveau · 4", 3],
                ["Qualifié · 3", 2],
                ["Signé · 2", 1],
              ].map(([title, n], col) => (
                <div key={title as string} className="relative flex min-h-[230px] flex-col gap-2 rounded-md bg-muted p-2.5">
                  <span className="v-label text-[10px]">{title}</span>
                  {Array.from({ length: n as number }).map((_, i) => (
                    <div key={i} className="flex h-11 flex-col gap-1.5 rounded border bg-card p-2">
                      <b className="h-1.5 rounded bg-input/50" />
                      <b className="h-1.5 w-3/5 rounded bg-input/30" />
                    </div>
                  ))}
                  {col === 0 && (
                    <div className="v-kmove relative z-10 flex h-11 flex-col gap-1.5 rounded border border-primary bg-card p-2 shadow-lift">
                      <b className="h-1.5 rounded bg-primary" />
                      <b className="h-1.5 w-3/5 rounded bg-input/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Result>Directeur commercial, PME B2B · équipe 2× plus efficace</Result>
          </article>

          {/* Ads */}
          <article className={cn(tile, "min-h-[400px] border-transparent bg-[#0B0D12] text-white lg:col-span-6")}>
            <TileHead
              dark
              label="Verso · Acquisition & Ads"
              title={
                <>
                  Pilotées au <span className="v-em text-[#C8CDFF]">coût par lead.</span>
                </>
              }
              price="Dès 500 € / mois"
              href="/services/ads-management"
            />
            <div className="flex flex-1 flex-col justify-center gap-6">
              {[
                { cap: "Coût par lead · SaaS B2B", rows: [["Avant", "185 €", 80], ["Après", "62 €", 26.8]] },
                { cap: "Leads qualifiés par mois", rows: [["Avant", "45", 20], ["Après", "180", 80]] },
              ].map((fig) => (
                <figure key={fig.cap} className="m-0 grid grid-cols-[64px_minmax(0,1fr)] items-center gap-x-4 gap-y-2">
                  <figcaption className="v-label col-span-2 !text-white/60">{fig.cap}</figcaption>
                  {fig.rows.map(([k, v, w], i) => (
                    <React.Fragment key={k as string}>
                      <span className="text-[13px] text-white/60">{k}</span>
                      <div className="flex items-center gap-2.5">
                        <div
                          className="v-bar h-6"
                          style={{ width: `${w}%`, background: i ? "#8B93FF" : "#5A5F70", animationDelay: i ? ".6s" : undefined }}
                        />
                        <span className="font-mono text-[13px]">{v}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </figure>
              ))}
            </div>
            <Result dark>CPL −66 % · ROAS 1,8× → 4,2×</Result>
          </article>
        </div>
      </div>
    </section>
  )
}
