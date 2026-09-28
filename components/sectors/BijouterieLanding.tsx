import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Camera,
  Check,
  CreditCard,
  Gem,
  Instagram,
  MapPin,
  PenLine,
  Ruler,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA, FAQ } from "@/components/sections"
import type { Sector } from "@/types/sectors"
import { RingConfigurator } from "./RingConfigurator"

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const pains = [
  { k: "01", title: "L'éclat se perd en photo", text: "Une bague à plusieurs milliers d'euros présentée comme un produit de catalogue. Le client ne ressent rien." },
  { k: "02", title: "On n'achète pas un bijou à l'aveugle", text: "Taille, rendu de la pierre, authenticité : sans réponses, le panier est abandonné." },
  { k: "03", title: "Le sur-mesure se perd en messages", text: "Des demandes vagues sur Instagram, des allers-retours, et un rendez-vous qui n'arrive jamais." },
  { k: "04", title: "La boutique reste invisible", text: "Sur « bijouterie + votre ville », ce sont les chaînes et les marketplaces qui sortent en premier." },
]

const bento = [
  {
    icon: Camera,
    title: "Un e-commerce qui rend justice à vos pièces",
    text: "Zoom haute définition, vidéos 360°, porté sur la main, fiches avec poinçons, titre du métal, certificats et garanties téléchargeables.",
    tags: ["Shopify ou sur-mesure", "Zoom HD", "Vidéo 360°"],
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
  { icon: Instagram, label: "Instagram", text: "Il découvre une pièce dans une story ou un post shoppable." },
  { icon: Gem, label: "Fiche produit", text: "Il zoome, regarde la vidéo, vérifie le poinçon et la garantie." },
  { icon: Sparkles, label: "Configurateur", text: "Il ajuste le métal, la pierre, grave un prénom." },
  { icon: CalendarCheck, label: "Rendez-vous", text: "Il réserve un essayage, sa configuration vous arrive." },
  { icon: Store, label: "Boutique", text: "Vous concluez la vente, en face à face." },
]

const trust = [
  "Poinçons et titre du métal sur chaque fiche",
  "Certificats de pierres et garanties téléchargeables",
  "Photos et vidéos fidèles, sans retouche trompeuse",
  "Conditions de retour et de livraison assurée claires",
  "Avis clients et adresse de la boutique mis en avant",
]

const local = [
  { title: "Fiche Google optimisée", text: "Photos, horaires, catégories, publications : la vitrine avant la vitrine." },
  { title: "Pages par occasion", text: "Fiançailles, mariage, naissance, fête des mères : chaque recherche a sa page." },
  { title: "Google Shopping", text: "Votre catalogue dans les résultats produits, avec la disponibilité en boutique." },
  { title: "Instagram & Facebook Shopping", text: "Catalogue synchronisé, pièces identifiées dans vos publications." },
  { title: "Campagnes locales", text: "Annonces ciblées autour de la boutique aux moments clés de l'année." },
  { title: "Accessible et rapide", text: "Un site conforme aux règles d'accessibilité, rapide même sur mobile." },
]

const steps = [
  { title: "Diagnostic", time: "1 h · gratuit", text: "Votre boutique, vos pièces phares, vos clients : on identifie ce qui fera venir du monde en premier." },
  { title: "Shooting & catalogue", time: "Selon le volume", text: "On organise les visuels et on structure les fiches : métal, pierres, tailles, pièces uniques." },
  { title: "Mise en ligne", time: "3 à 6 semaines", text: "Site, paiement, rendez-vous, fiche Google. Vous êtes formé pour ajouter une création depuis votre téléphone." },
]

const prices = [
  { label: "Site vitrine de la boutique", value: "990 €" },
  { label: "Boutique en ligne", value: "2 490 €" },
  { label: "Configurateur 3D", value: "3 900 €" },
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
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16">
            <div className="flex flex-col gap-7">
              <span className="v-label">Bijouteries &amp; joailliers</span>
              <h1 id="bj-hero" className="v-display text-5xl sm:text-7xl lg:text-[88px]">
                <span className="v-line">
                  <span>Des bijoux qui</span>
                </span>
                <span className="v-line">
                  <span>se vendent </span>
                </span>
                <span className="v-line">
                  <span className="v-em text-primary">aussi en ligne.</span>
                </span>
              </h1>
              <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Un écrin digital à la hauteur de vos pièces. On donne envie en ligne, on rassure, et on fait venir vos
                clients en boutique pour conclure.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <span className="v-roll">
                      <span>Parler de ma bijouterie</span>
                      <span aria-hidden="true">Parler de ma bijouterie</span>
                    </span>
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#solutions">Voir les solutions</Link>
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
            <RingConfigurator />
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
                Un bijou se choisit <span className="v-em">avec les yeux.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Vos clients commencent leur recherche sur leur téléphone, bien avant de pousser la porte. Si votre
              présence en ligne ne leur donne pas envie, ils ne viennent pas.
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

      {/* ---------- Solutions (bento) ---------- */}
      <section id="solutions" className="scroll-mt-24 py-20 lg:py-32" aria-labelledby="bj-solutions">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4">
            <span className="v-label">Ce qu&apos;on construit pour vous</span>
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
                <Link href="#bj-hero">
                  Essayer le configurateur
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Parcours ---------- */}
      <section className="bg-[#0B0D12] py-20 text-white lg:py-32" aria-labelledby="bj-parcours">
        <div className="container mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label !text-[#C8CDFF]">Le parcours client</span>
              <h2 id="bj-parcours" className="v-display text-4xl sm:text-6xl">
                De la story <span className="v-em text-[#C8CDFF]">à la boutique.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-white/75">
              Le site ne remplace pas votre conseil : il prépare la rencontre. Le client arrive en sachant ce qu&apos;il
              veut, vous savez ce qu&apos;il cherche.
            </p>
          </header>
          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-5">
            <span
              className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-white/10 via-[#5560FF] to-white/10 md:block"
              aria-hidden="true"
            />
            {journey.map((j, i) => (
              <li key={j.label} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 md:flex md:flex-col md:items-center md:text-center">
                <span
                  className={`relative grid size-12 place-items-center rounded-full ${i === journey.length - 1 ? "bg-[#1F2BFF]" : "border border-white/15 bg-[#0B0D12]"}`}
                >
                  <j.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-[#C8CDFF] uppercase">
                    {String(i + 1).padStart(2, "0")} · {j.label}
                  </span>
                  <p className="text-[15px] leading-relaxed text-white/80">{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Confiance ---------- */}
      <section className="py-20 lg:py-32" aria-labelledby="bj-confiance">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="flex flex-col gap-6">
            <span className="v-label">Rassurer avant d&apos;acheter</span>
            <h2 id="bj-confiance" className="v-display text-4xl sm:text-6xl">
              La confiance, <span className="v-em">détail par détail.</span>
            </h2>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Sur un achat de cette valeur, chaque doute coûte une vente. On met en avant tout ce qui prouve votre
              sérieux, au bon endroit de la fiche.
            </p>
          </div>
          <figure className="relative m-0 overflow-hidden rounded-lg border bg-card p-6 shadow-lift sm:p-8">
            <span className="v-fold" aria-hidden="true" />
            <figcaption className="v-label mb-6 flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" /> Sur chaque fiche produit
            </figcaption>
            <ul className="flex flex-col divide-y">
              {trust.map((t) => (
                <li key={t} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </section>

      {/* ---------- Local & social ---------- */}
      <section className="border-y bg-card py-20 lg:py-28" aria-labelledby="bj-local">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="v-label flex items-center gap-2">
                <MapPin className="size-3.5" aria-hidden="true" /> Référencement local &amp; réseaux
              </span>
              <h2 id="bj-local" className="v-display text-4xl sm:text-6xl">
                Trouvé quand on cherche <span className="v-em">une bague près de chez soi.</span>
              </h2>
            </div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Google, Google Maps, Instagram : on vous rend visible là où vos clients cherchent, et on relie chaque
              canal à votre boutique.
            </p>
          </header>
          <ul className="grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-3">
            {local.map((f, i) => (
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
        </div>
      </section>

      {/* ---------- Prix + lien IA ---------- */}
      <section className="py-20 lg:py-28" aria-labelledby="bj-prix">
        <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4">
            <span className="v-label">Tarifs de départ</span>
            <h2 id="bj-prix" className="v-display text-4xl sm:text-6xl">
              Commencer par l&apos;essentiel, <span className="v-em">puis briller.</span>
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
              <Sparkles className="size-6 shrink-0 text-primary" aria-hidden="true" />
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
