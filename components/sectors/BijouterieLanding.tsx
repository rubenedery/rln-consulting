import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CalendarCheck,
  Camera,
  Check,
  CreditCard,
  Gem,
  Instagram,
  KeyRound,
  MapPin,
  Megaphone,
  PenLine,
  RefreshCw,
  Ruler,
  Scale,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA, FAQ } from "@/components/sections"
import type { Sector } from "@/types/sectors"

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const offer = {
  setup: "1 500 €",
  monthly: "599 €",
  posts: 15,
}

/** Comparatif du hero : site en abonnement vs site RLN. */
const comparison = [
  { label: "Propriété du site", before: "Lié à l'abonnement", after: "Le site vous appartient" },
  { label: "Design", before: "Le même gabarit que d'autres boutiques", after: "Sur mesure, à votre image" },
  { label: "Évolutions", before: "Selon la feuille de route de l'éditeur", after: "Incluses chaque mois" },
  { label: "Publicité Google & Meta", before: "À gérer vous-même", after: "Gérée pour vous" },
  { label: "Réseaux sociaux", before: "Quand vous avez le temps", after: `${offer.posts} publications par mois` },
  { label: "Stock de la boutique", before: "Synchronisé", after: "Synchronisé" },
]

const pains = [
  {
    k: "01",
    title: "Un site loué, pas possédé",
    text: "Avec une formule en abonnement, votre site vit tant que vous payez. Le jour où vous changez, vous repartez de zéro.",
  },
  {
    k: "02",
    title: "Un site qui ne bouge plus",
    text: "Actualités figées depuis des mois, suivi des visites jamais mis à jour, pages lentes sur mobile : le site s'use sans que personne ne s'en occupe.",
  },
  {
    k: "03",
    title: "Instagram en pointillé",
    text: "Une nouvelle collection, un mariage, une montre d'exception : les occasions de publier ne manquent pas, le temps si.",
  },
  {
    k: "04",
    title: "La boutique reste invisible",
    text: "Sur « bijouterie + votre ville », ce sont les chaînes et les marketplaces qui sortent en premier.",
  },
]

const included = {
  setup: [
    "Site e-commerce sur mesure, conçu pour vos pièces",
    "Reprise de votre catalogue existant : produits, photos, descriptions",
    "Redirection de chaque ancienne adresse pour garder votre référencement",
    "Synchronisation avec le stock de la boutique",
    "Fiche Google de la boutique optimisée",
  ],
  monthly: [
    "Évolutions et maintenance du site",
    "Gestion de vos campagnes Google et Meta",
    `${offer.posts} publications par mois sur vos réseaux sociaux`,
    "Point mensuel sur les ventes, les visites et les demandes",
    "Un interlocuteur direct, celui qui construit votre site",
  ],
}

const migration = [
  {
    icon: Boxes,
    title: "Votre catalogue est repris",
    text: "Produits, photos, prix et descriptions sont récupérés depuis votre site actuel. Vous ne ressaisissez rien, même avec plusieurs milliers de références.",
  },
  {
    icon: Search,
    title: "Votre place sur Google est préservée",
    text: "Chaque ancienne adresse est redirigée vers la nouvelle page correspondante. Google et vos clients retrouvent tout, dès la mise en ligne.",
  },
  {
    icon: RefreshCw,
    title: "Votre stock reste synchronisé",
    text: "Le site est relié au stock de la boutique : une pièce vendue au comptoir disparaît du site, sans double saisie.",
  },
]

const bento = [
  {
    icon: Camera,
    title: "Un e-commerce qui rend justice à vos pièces",
    text: "Zoom haute définition, vidéos 360°, porté sur la main, fiches avec poinçons, titre du métal, certificats et garanties téléchargeables.",
    tags: ["Sur mesure", "Zoom HD", "Vidéo 360°"],
    className: "lg:col-span-2",
    dark: true,
  },
  {
    icon: CalendarCheck,
    title: "Rendez-vous en boutique",
    text: "Essayage, bague de fiançailles, sur-mesure : le client réserve un créneau, vous savez déjà ce qu'il cherche.",
    tags: ["Agenda synchronisé", "Rappels SMS"],
  },
  {
    icon: Ruler,
    title: "Guide des tailles & conseiller IA",
    text: "Trouver son tour de doigt, choisir une pierre, une idée cadeau selon le budget : des réponses immédiates, à votre ton.",
    tags: ["Disponible 24/7"],
  },
  {
    icon: Scale,
    title: "Rachat d'or : pré-estimation",
    text: "Le client indique poids et titre, obtient une fourchette indicative et prend rendez-vous. L'estimation définitive se fait en boutique.",
    tags: ["Génère du passage"],
  },
  {
    icon: CreditCard,
    title: "Paiement en plusieurs fois & click & collect",
    text: "Alma ou Klarna pour lever le frein du prix, 3D Secure, retrait sécurisé en boutique.",
    tags: ["3x · 4x", "Retrait boutique"],
  },
]

const journey = [
  { icon: Instagram, label: "Instagram", text: "Il découvre une pièce dans l'une de vos publications du mois." },
  { icon: Gem, label: "Fiche produit", text: "Il zoome, regarde la vidéo, vérifie le poinçon et la garantie." },
  { icon: Sparkles, label: "Configurateur", text: "Il ajuste le métal, la pierre, grave un prénom." },
  { icon: CalendarCheck, label: "Rendez-vous", text: "Il réserve un essayage, sa configuration vous arrive." },
  { icon: Store, label: "Boutique", text: "Vous concluez la vente, en face à face." },
]

const monthlyCare = [
  { icon: Wrench, title: "Le site évolue", text: "Nouvelles pages, collections, améliorations : votre site progresse au lieu de vieillir." },
  { icon: Megaphone, title: "La publicité tourne", text: "Campagnes Google et Meta autour de la boutique, aux moments clés : fiançailles, fêtes, soldes." },
  { icon: Share2, title: "Vos réseaux vivent", text: `${offer.posts} publications par mois, préparées avec vos pièces et validées par vous.` },
  { icon: MapPin, title: "On vous trouve près de chez vous", text: "Fiche Google, pages par occasion, Google Shopping : visible quand on cherche une bague dans votre ville." },
]

const steps = [
  {
    title: "Audit",
    time: "30 min · gratuit",
    text: "On regarde ensemble votre site actuel, votre catalogue et votre caisse. Vous savez exactement comment se passerait le changement.",
  },
  {
    title: "Migration & mise en ligne",
    time: "3 à 6 semaines",
    text: "Nouveau site, reprise du catalogue, redirections, synchronisation du stock. Vous validez avant la mise en ligne.",
  },
  {
    title: "Chaque mois",
    time: "En continu",
    text: `Évolutions, publicité, ${offer.posts} publications sur vos réseaux et un point sur les résultats.`,
  },
]

/* ------------------------------------------------------------------ */

interface BijouterieLandingProps {
  sector: Sector
  breadcrumbs: { label: string; href?: string }[]
}

export function BijouterieLanding({ sector, breadcrumbs }: BijouterieLandingProps) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="py-14 lg:py-24" aria-labelledby="bj-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-16">
            <div className="flex flex-col gap-7">
              <span className="v-label">Bijouteries &amp; joailliers</span>
              <h1 id="bj-hero" className="v-display text-5xl sm:text-7xl lg:text-[88px]">
                <span className="v-line">
                  <span>Votre site</span>
                </span>
                <span className="v-line">
                  <span>de bijouterie, </span>
                </span>
                <span className="v-line">
                  <span className="v-em text-primary">enfin à vous.</span>
                </span>
              </h1>
              <p className="max-w-[48ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Un site e-commerce sur mesure dont vous êtes propriétaire, synchronisé avec le stock de la boutique.
                Et chaque mois, on le fait évoluer, on gère votre publicité et on anime vos réseaux sociaux.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <span className="v-roll">
                      <span>Réserver mon audit gratuit</span>
                      <span aria-hidden="true">Réserver mon audit gratuit</span>
                    </span>
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#formule">Voir la formule</Link>
                </Button>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="Tarifs de la formule bijouterie">
                <li className="rounded-full border bg-card px-3 py-1.5 font-mono text-xs">
                  Création du site · {offer.setup} HT
                </li>
                <li className="rounded-full border bg-card px-3 py-1.5 font-mono text-xs">
                  Site, publicité &amp; réseaux · {offer.monthly} HT / mois
                </li>
              </ul>
            </div>

            {/* Comparatif abonnement / propriété */}
            <figure className="relative m-0 overflow-hidden rounded-lg border bg-card shadow-lift">
              <span className="v-fold" aria-hidden="true" />
              <figcaption className="v-label flex items-center gap-2 px-6 pt-6 sm:px-7">
                <KeyRound className="size-4 text-primary" aria-hidden="true" /> Louer ou posséder son site
              </figcaption>
              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-t text-sm">
                <span className="border-r px-4 py-3 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase sm:px-6">
                  Site en abonnement
                </span>
                <span className="bg-primary px-4 py-3 font-mono text-[11px] tracking-[0.06em] text-primary-foreground uppercase sm:px-6">
                  Avec l&apos;agence RLN
                </span>
              </div>
              <dl className="m-0">
                {comparison.map((row) => {
                  const same = row.before === row.after
                  return (
                    <div key={row.label} className="border-t">
                      <dt className="px-4 pt-3 font-mono text-[11px] tracking-[0.04em] text-muted-foreground sm:px-6">
                        {row.label}
                      </dt>
                      <dd className="m-0 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                        <span className="flex items-start gap-2 border-r px-4 pt-1 pb-3 text-[14px] leading-snug sm:px-6">
                          {same ? (
                            <Check className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                          ) : (
                            <X className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                          )}
                          <span className="text-muted-foreground">{row.before}</span>
                        </span>
                        <span className="flex items-start gap-2 bg-secondary/60 px-4 pt-1 pb-3 text-[14px] leading-snug font-medium sm:px-6">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                          <span>{row.after}</span>
                        </span>
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Constat ---------- */}
      <section className="border-y bg-card py-20 lg:py-28" aria-labelledby="bj-constat">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label">Le constat</span>
              <h2 id="bj-constat" className="v-display text-4xl sm:text-6xl">
                Un beau site ne suffit pas <span className="v-em">s&apos;il ne vit pas.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Vos clients commencent leur recherche sur leur téléphone, bien avant de pousser la porte. Un site figé,
              une page Instagram silencieuse, et ils vont voir ailleurs.
            </p>
          </header>
          <ul className="grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
            {pains.map((p, i) => (
              <li
                key={p.k}
                className={`flex flex-col gap-3 border-b py-7 sm:pr-8 ${i % 4 !== 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "sm:border-l sm:pl-8 lg:pl-8" : ""}`}
              >
                <span className="font-mono text-sm text-primary">{p.k}</span>
                <h3 className="text-xl leading-tight font-semibold">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Formule ---------- */}
      <section id="formule" className="scroll-mt-24 py-20 lg:py-32" aria-labelledby="bj-formule">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label">La formule bijouterie</span>
              <h2 id="bj-formule" className="v-display text-4xl sm:text-6xl">
                Un site qui vous appartient, <span className="v-em">entretenu chaque mois.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Une création à prix fixe, puis un forfait mensuel qui réunit tout ce dont une bijouterie a besoin pour
              vendre en ligne et faire venir en boutique.
            </p>
          </header>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-lg border bg-card p-7 sm:p-9">
              <div className="flex flex-col gap-2">
                <span className="v-label">Création du site</span>
                <span className="font-display text-6xl leading-none font-semibold tracking-[-0.05em]">
                  {offer.setup}
                  <span className="ml-2 align-middle font-mono text-sm font-normal tracking-normal text-muted-foreground">
                    HT · une fois
                  </span>
                </span>
              </div>
              <ul className="flex flex-col divide-y border-t">
                {included.setup.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-lg bg-[#0B0D12] p-7 text-white sm:p-9">
              <span
                className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,#5560FF_0%,transparent_65%)] opacity-50"
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-2">
                <span className="v-label !text-[#C8CDFF]">Chaque mois</span>
                <span className="font-display text-6xl leading-none font-semibold tracking-[-0.05em]">
                  {offer.monthly}
                  <span className="ml-2 align-middle font-mono text-sm font-normal tracking-normal text-white/70">
                    HT / mois
                  </span>
                </span>
              </div>
              <ul className="relative flex flex-col divide-y divide-white/10 border-t border-white/10">
                {included.monthly.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#1F2BFF] text-white">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="max-w-[80ch] text-sm leading-relaxed text-muted-foreground">
            Le budget publicitaire versé à Google ou Meta reste à votre charge et se fixe avec vous. La durée
            d&apos;engagement est précisée au devis.
          </p>
        </div>
      </section>

      {/* ---------- Migration ---------- */}
      <section className="bg-[#0B0D12] py-20 text-white lg:py-32" aria-labelledby="bj-migration">
        <div className="container mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label !text-[#C8CDFF]">Changer de site</span>
              <h2 id="bj-migration" className="v-display text-4xl sm:text-6xl">
                On change de site, <span className="v-em text-[#C8CDFF]">vous ne perdez rien.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-white/75">
              Quitter une formule en abonnement fait peur : le catalogue, Google, la caisse. On s&apos;occupe des trois.
            </p>
          </header>
          <ul className="grid gap-5 md:grid-cols-3">
            {migration.map((m) => (
              <li key={m.title} className="flex flex-col gap-4 rounded-lg border border-white/10 p-7">
                <span className="grid size-11 place-items-center rounded-md bg-white/10 text-[#C8CDFF]">
                  <m.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-2xl leading-tight font-semibold">{m.title}</h3>
                <p className="leading-relaxed text-white/75">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Solutions (bento) ---------- */}
      <section id="solutions" className="scroll-mt-24 py-20 lg:py-32" aria-labelledby="bj-solutions">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4">
            <span className="v-label">Ce que contient votre site</span>
            <h2 id="bj-solutions" className="v-display text-4xl sm:text-6xl">
              Tout ce qu&apos;il faut pour vendre, <span className="v-em">rien de superflu.</span>
            </h2>
          </header>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bento.map((b) => (
              <li
                key={b.title}
                className={`group relative flex flex-col gap-4 overflow-hidden rounded-lg border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${b.className ?? ""} ${b.dark ? "border-transparent bg-[#0B0D12] text-white" : "bg-card"}`}
              >
                {b.dark && (
                  <span
                    className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,#5560FF_0%,transparent_65%)] opacity-50"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`relative grid size-11 place-items-center rounded-md ${b.dark ? "bg-white/10 text-[#C8CDFF]" : "bg-secondary text-primary"}`}
                >
                  <b.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className={`relative leading-tight font-semibold ${b.dark ? "max-w-[20ch] text-3xl" : "text-2xl"}`}>
                  {b.title}
                </h3>
                <p className={`relative max-w-[56ch] leading-relaxed ${b.dark ? "text-white/75" : "text-muted-foreground"}`}>
                  {b.text}
                </p>
                <ul className="relative mt-auto flex flex-wrap gap-2 pt-2">
                  {b.tags.map((t) => (
                    <li
                      key={t}
                      className={`rounded-full px-3 py-1 font-mono text-[11px] ${b.dark ? "border border-white/20 text-white/85" : "border bg-background"}`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="relative flex flex-col gap-6 overflow-hidden rounded-lg bg-primary p-7 text-primary-foreground sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-white/15">
                  <PenLine className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl leading-tight font-semibold lg:text-3xl">Gravure &amp; sur-mesure</h3>
                  <p className="max-w-[60ch] leading-relaxed text-white/85">
                    Aperçu de la gravure en direct, demande de création guidée : vous recevez un brief complet, avec la
                    configuration du client, pas un message vague.
                  </p>
                </div>
              </div>
              <Button asChild variant="inverse" className="self-start lg:self-auto">
                <Link href="/contact">
                  Parler de ma bijouterie
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Chaque mois ---------- */}
      <section className="border-y bg-card py-20 lg:py-28" aria-labelledby="bj-mois">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label">Votre forfait mensuel</span>
              <h2 id="bj-mois" className="v-display text-4xl sm:text-6xl">
                Pendant que vous vendez, <span className="v-em">on fait le reste.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Le site, la publicité et les réseaux sociaux avancent ensemble, avec un seul interlocuteur et un point
              chaque mois sur ce que ça rapporte.
            </p>
          </header>
          <ul className="grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
            {monthlyCare.map((f, i) => (
              <li
                key={f.title}
                className={`flex flex-col gap-3 border-b py-7 sm:pr-8 ${i % 4 !== 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "sm:border-l sm:pl-8 lg:pl-8" : ""}`}
              >
                <f.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="text-xl leading-tight font-semibold">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Parcours ---------- */}
      <section className="py-20 lg:py-32" aria-labelledby="bj-parcours">
        <div className="container mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label">Le parcours client</span>
              <h2 id="bj-parcours" className="v-display text-4xl sm:text-6xl">
                De la publication <span className="v-em">à la boutique.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Le site ne remplace pas votre conseil : il prépare la rencontre. Le client arrive en sachant ce qu&apos;il
              veut, vous savez ce qu&apos;il cherche.
            </p>
          </header>
          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-5">
            <span
              className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-border via-primary to-border md:block"
              aria-hidden="true"
            />
            {journey.map((j, i) => (
              <li key={j.label} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 md:flex md:flex-col md:items-center md:text-center">
                <span
                  className={`relative grid size-12 place-items-center rounded-full ${i === journey.length - 1 ? "bg-primary text-primary-foreground" : "border bg-background"}`}
                >
                  <j.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-primary uppercase">
                    {String(i + 1).padStart(2, "0")} · {j.label}
                  </span>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Méthode ---------- */}
      <section className="bg-secondary py-20 lg:py-32" aria-labelledby="bj-methode">
        <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4">
            <span className="v-label">Comment on travaille</span>
            <h2 id="bj-methode" className="v-display text-4xl sm:text-6xl">
              Trois étapes, <span className="v-em">un interlocuteur.</span>
            </h2>
          </header>
          <ol className="border-t border-foreground">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[48px_minmax(0,1fr)_auto] items-baseline gap-4 border-b border-foreground/15 py-6">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl leading-tight font-semibold">{s.title}</h3>
                  <p className="max-w-[60ch] leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
                <span className="v-label hidden whitespace-nowrap sm:block">{s.time}</span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Réserver mon audit gratuit
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/audit-gratuit">Tester la vitesse de mon site</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Lien IA ---------- */}
      <section className="py-16 lg:py-20" aria-label="L'IA pour les bijouteries">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/ia/${sector.slug}`}
            className="group flex items-center justify-between gap-6 rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lift sm:p-8"
          >
            <span className="flex items-center gap-4">
              <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl font-semibold">L&apos;IA pour les bijouteries, en détail</span>
                <span className="text-sm text-muted-foreground">Demandes sur mesure qualifiées, fiches de pièces, suivi des projets d&apos;atelier.</span>
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
