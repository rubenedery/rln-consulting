import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  FileSearch,
  FileText,
  Inbox,
  Landmark,
  MessageSquare,
  Newspaper,
  ScanLine,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA, FAQ } from "@/components/sections"
import { testimonials } from "@/lib/content"
import type { Sector } from "@/types/sectors"
import { AccountantChatDemo } from "./AccountantChatDemo"

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const flowSteps = [
  {
    icon: Inbox,
    title: "Le client envoie sa facture",
    detail: "Photo par WhatsApp, e-mail ou dépôt dans son espace client.",
    mono: "facture_orange_mars.jpg",
  },
  {
    icon: ScanLine,
    title: "L'IA la lit",
    detail: "Fournisseur, date, montant HT, TVA : tout est extrait.",
    mono: "Orange Pro · 49,99 € HT · TVA 20 %",
  },
  {
    icon: FileText,
    title: "Elle propose l'imputation",
    detail: "Pré-saisie directement dans votre outil de production.",
    mono: "626 — Frais postaux et télécom → Pennylane",
  },
  {
    icon: UserCheck,
    title: "Votre collaborateur valide",
    detail: "Un clic si tout est bon, une alerte si l'IA a un doute.",
    mono: "Validé · 4 s",
  },
]

const stackGroups = [
  {
    label: "Production comptable",
    tools: ["Pennylane", "Cegid Loop", "ACD", "MyUnisoft", "Sage", "Inqom"],
  },
  {
    label: "Collecte des pièces",
    tools: ["Dext", "Tiime", "Portail client", "Boîte e-mail dédiée"],
  },
  {
    label: "Banque & trésorerie",
    tools: ["Qonto", "Shine", "Agicap", "Flux bancaires"],
  },
  {
    label: "Relation client",
    tools: ["Site du cabinet", "WhatsApp", "Yousign", "Prise de RDV"],
  },
]

const useCases = [
  {
    icon: Inbox,
    title: "Collecte et relance des pièces",
    text: "L'assistant sait ce qui manque dans chaque dossier et relance le client au bon moment, par e-mail ou WhatsApp, sans qu'un collaborateur n'y pense.",
  },
  {
    icon: ScanLine,
    title: "Lecture et pré-imputation",
    text: "Factures, tickets et relevés sont lus, classés et pré-saisis dans votre outil. Le collaborateur contrôle au lieu de taper.",
  },
  {
    icon: MessageSquare,
    title: "Réponses aux clients 24/7",
    text: "Seuils de TVA, frais kilométriques, échéances sociales : des réponses validées par le cabinet, et un relais vers le bon collaborateur pour le reste.",
  },
  {
    icon: FileSearch,
    title: "Pré-révision",
    text: "Avant le bilan, l'IA repère comptes d'attente non soldés, variations inhabituelles et doublons, et vous donne une liste de points à contrôler.",
  },
  {
    icon: ShieldCheck,
    title: "Onboarding et lettres de mission",
    text: "Collecte des pièces d'identification, questionnaire LCB-FT, lettre de mission pré-remplie et envoyée en signature électronique.",
  },
  {
    icon: Newspaper,
    title: "Veille et notes clients",
    text: "Les nouveautés fiscales et sociales résumées, puis déclinées en notes adaptées à chaque profil de client, que vous relisez avant envoi.",
  },
]

const websiteFeatures = [
  { title: "Pages par profil de client", text: "Création d'entreprise, professions libérales, e-commerçants, SCI, associations." },
  { title: "Simulateurs", text: "Charges sociales, choix du statut, rémunération du dirigeant : des outils qui génèrent des contacts qualifiés." },
  { title: "Prise de rendez-vous", text: "Premier échange en visio ou au cabinet, directement dans votre agenda." },
  { title: "Espace client", text: "Dépôt de pièces sécurisé, branché sur votre outil de collecte." },
  { title: "Référencement local", text: "Être trouvé sur « expert-comptable + votre ville » et cité par les assistants IA." },
  { title: "Communication conforme", text: "Un site qui respecte les règles de communication de la profession." },
]

const steps = [
  { title: "Audit de vos outils", time: "1 h · gratuit", text: "On fait le tour de votre stack (production, collecte, banque) et on identifie le cas d'usage le plus rentable." },
  { title: "Pilote", time: "2 à 4 semaines", text: "L'IA est déployée sur un portefeuille restreint. Vous mesurez le temps gagné avant d'aller plus loin." },
  { title: "Déploiement", time: "Selon le cabinet", text: "Généralisation à tous les dossiers, formation des équipes et suivi mensuel." },
]

const prices = [
  { label: "Site du cabinet", value: "990 €" },
  { label: "Assistant IA clients", value: "1 490 €" },
  { label: "Automatisation de la collecte", value: "1 490 €" },
]

/* ------------------------------------------------------------------ */

interface ExpertComptableLandingProps {
  sector: Sector
  breadcrumbs: { label: string; href?: string }[]
}

export function ExpertComptableLanding({ sector, breadcrumbs }: ExpertComptableLandingProps) {
  const testimonial = testimonials.find((t) => t.role.toLowerCase().includes("comptable"))

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="py-14 lg:py-24" aria-labelledby="ec-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
            <div className="flex flex-col gap-7">
              <span className="v-label">Experts-comptables · Site &amp; IA</span>
              <h1 id="ec-hero" className="v-display text-5xl sm:text-7xl lg:text-[88px]">
                <span className="v-line">
                  <span>Le cabinet comptable,</span>
                </span>
                <span className="v-line">
                  <span className="v-em text-primary">augmenté par l&apos;IA.</span>
                </span>
              </h1>
              <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Vos collaborateurs passent leurs journées à saisir, relancer et répondre aux mêmes questions. On branche
                l&apos;IA sur vos outils, Pennylane compris, pour qu&apos;ils reviennent au conseil.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <span className="v-roll">
                      <span>Réserver l&apos;audit de mes outils</span>
                      <span aria-hidden="true">Réserver l&apos;audit de mes outils</span>
                    </span>
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#cas-usage">Voir ce que fait l&apos;IA</Link>
                </Button>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="Tarifs de départ">
                {prices.map((p) => (
                  <li key={p.label} className="rounded-full border bg-card px-3 py-1.5 font-mono text-xs">
                    {p.label} · dès {p.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Flux d'une pièce */}
            <figure className="relative m-0 overflow-hidden rounded-lg border bg-card p-6 shadow-lift sm:p-7">
              <span className="v-fold" aria-hidden="true" />
              <figcaption className="v-label mb-5">Le trajet d&apos;une facture · exemple</figcaption>
              <ol className="flex flex-col">
                {flowSteps.map((s, i) => (
                  <li key={s.title} className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 pb-6 last:pb-0">
                    {i < flowSteps.length - 1 && (
                      <span className="absolute top-10 bottom-0 left-5 w-px bg-border" aria-hidden="true" />
                    )}
                    <span
                      className={
                        i === flowSteps.length - 1
                          ? "grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"
                          : "grid size-10 place-items-center rounded-full bg-secondary text-primary"
                      }
                    >
                      <s.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <strong className="font-display text-lg leading-tight font-semibold">{s.title}</strong>
                      <span className="text-sm text-muted-foreground">{s.detail}</span>
                      <span className="self-start rounded-sm bg-muted px-2 py-1 font-mono text-[11px] text-foreground">
                        {s.mono}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Stack ---------- */}
      <section className="border-y bg-card py-20 lg:py-28" aria-labelledby="ec-stack">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label">Vos outils</span>
              <h2 id="ec-stack" className="v-display text-4xl sm:text-6xl">
                On ne remplace pas Pennylane. <span className="v-em">On le rend plus rapide.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              L&apos;IA se branche sur les logiciels que vos équipes utilisent déjà, par API ou par export selon
              l&apos;outil. Pas de nouvelle plateforme à apprendre, pas de double saisie.
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_1fr_1fr] lg:items-center">
            {stackGroups.slice(0, 2).map((g) => (
              <StackCard key={g.label} {...g} />
            ))}
            <div className="order-first flex flex-col items-center gap-3 rounded-lg bg-primary p-6 text-center text-primary-foreground md:col-span-2 lg:order-none lg:col-span-1 lg:w-44">
              <Bot className="size-7" aria-hidden="true" />
              <span className="font-display text-xl leading-tight font-semibold">Couche IA du cabinet</span>
              <span className="font-mono text-[11px] text-white/80">hébergée en Europe</span>
            </div>
            {stackGroups.slice(2).map((g) => (
              <StackCard key={g.label} {...g} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Les noms cités sont des marques de leurs éditeurs respectifs. La profondeur d&apos;intégration dépend des
            connecteurs proposés par chaque logiciel ; on la vérifie pendant l&apos;audit.
          </p>
        </div>
      </section>

      {/* ---------- Cas d'usage ---------- */}
      <section id="cas-usage" className="scroll-mt-24 py-20 lg:py-32" aria-labelledby="ec-cas">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4">
            <span className="v-label">Ce que l&apos;IA prend en charge</span>
            <h2 id="ec-cas" className="v-display text-4xl sm:text-6xl">
              Les tâches répétitives. <span className="v-em">Pas le conseil.</span>
            </h2>
          </header>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <li
                key={u.title}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-lg border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary">
                  <u.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-2xl leading-tight font-semibold">{u.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{u.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-xs text-primary">
                  <Check className="size-3.5" aria-hidden="true" /> Le collaborateur garde la main
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Démo assistant ---------- */}
      <section className="bg-[#0B0D12] py-20 text-white lg:py-32" aria-labelledby="ec-demo">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="flex flex-col gap-6">
            <span className="v-label !text-[#C8CDFF]">L&apos;assistant de vos clients</span>
            <h2 id="ec-demo" className="v-display text-4xl sm:text-6xl">
              Moins d&apos;interruptions. <span className="v-em text-[#C8CDFF]">Plus de production.</span>
            </h2>
            <p className="max-w-[46ch] text-lg leading-relaxed text-white/75">
              Il répond à partir de vos propres fiches, validées par le cabinet. Quand la question sort du cadre, il
              prépare le contexte et le transmet au collaborateur référent.
            </p>
            <ul className="flex flex-col gap-3 text-[15px] text-white/85">
              {[
                "Entraîné uniquement sur vos contenus validés",
                "Escalade vers un humain dès que la question est spécifique",
                "Disponible sur votre site, par e-mail ou sur WhatsApp",
                "Données hébergées en Europe, jamais utilisées pour entraîner des modèles publics",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#8B93FF]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <AccountantChatDemo />
        </div>
      </section>

      {/* ---------- Site du cabinet ---------- */}
      <section className="py-20 lg:py-32" aria-labelledby="ec-site">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label">Le site du cabinet</span>
              <h2 id="ec-site" className="v-display text-4xl sm:text-6xl">
                Attirer les dossiers <span className="v-em">que vous voulez.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Un site rapide, accessible et bien référencé, pensé pour les créateurs d&apos;entreprise et les dirigeants
              qui cherchent un cabinet moderne. À partir de 990 €.
            </p>
          </header>
          <ul className="grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-3">
            {websiteFeatures.map((f, i) => (
              <li
                key={f.title}
                className={`flex flex-col gap-2 border-b py-7 sm:pr-8 ${i % 3 !== 0 ? "lg:border-l lg:pl-8" : ""}`}
              >
                <h3 className="text-xl leading-tight font-semibold">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Méthode + témoignage ---------- */}
      <section className="bg-secondary py-20 lg:py-32" aria-labelledby="ec-methode">
        <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20 lg:px-8">
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-4">
              <span className="v-label">Comment on démarre</span>
              <h2 id="ec-methode" className="v-display text-4xl sm:text-6xl">
                Un pilote avant <span className="v-em">tout engagement.</span>
              </h2>
            </header>
            <ol className="border-t border-foreground">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[48px_minmax(0,1fr)_auto] items-baseline gap-4 border-b border-foreground/15 py-6">
                  <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl leading-tight font-semibold">{s.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                  <span className="v-label hidden whitespace-nowrap sm:block">{s.time}</span>
                </li>
              ))}
            </ol>
          </div>
          {testimonial && (
            <figure className="m-0 flex flex-col justify-between gap-8 self-start rounded-lg bg-card p-8 shadow-lift lg:mt-24">
              <blockquote className="m-0 font-serif text-3xl leading-[1.15] italic">« {testimonial.quote} »</blockquote>
              <figcaption className="flex flex-wrap items-center gap-3 text-muted-foreground">
                <span>
                  {testimonial.role} · {testimonial.company}
                </span>
                {testimonial.result && (
                  <span className="inline-flex h-8 items-center rounded-full bg-secondary px-3 font-mono text-xs text-foreground">
                    {testimonial.result}
                  </span>
                )}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* ---------- Prix + lien IA ---------- */}
      <section className="py-20 lg:py-28" aria-labelledby="ec-prix">
        <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4">
            <span className="v-label">Tarifs de départ</span>
            <h2 id="ec-prix" className="v-display text-4xl sm:text-6xl">
              Commencer petit, <span className="v-em">mesurer, étendre.</span>
            </h2>
          </header>
          <div className="grid gap-5 md:grid-cols-3">
            {prices.map((p) => (
              <div key={p.label} className="flex flex-col gap-3 border-t border-foreground pt-5">
                <span className="v-label">{p.label}</span>
                <span className="font-display text-6xl leading-none font-semibold tracking-[-0.05em]">
                  <span className="v-em mr-2 text-2xl text-primary">dès</span>
                  {p.value}
                </span>
              </div>
            ))}
          </div>
          <Link
            href={`/ia/${sector.slug}`}
            className="group flex items-center justify-between gap-6 rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lift sm:p-8"
          >
            <span className="flex items-center gap-4">
              <Landmark className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl font-semibold">L&apos;IA pour les experts-comptables, en détail</span>
                <span className="text-sm text-muted-foreground">Cas d&apos;usage, délais de mise en place, questions fréquentes.</span>
              </span>
            </span>
            <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FAQ items={sector.faqs} title={<>Vos questions, <span className="v-em">nos réponses.</span></>} />
      <CTA />
    </>
  )
}

function StackCard({ label, tools }: { label: string; tools: string[] }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border bg-background p-6">
      <span className="v-label">{label}</span>
      <ul className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <li key={t} className="rounded-full border bg-card px-3 py-1.5 text-sm font-medium">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
