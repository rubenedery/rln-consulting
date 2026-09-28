import type { Metadata } from "next"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { ReferralForm } from "./ReferralForm"

export const metadata: Metadata = {
  title: "Apport d'affaires | Recommandez une entreprise, on vous rémunère",
  description:
    "Freelance, agence, consultant ou client : recommandez-nous une entreprise qui a besoin d'un site, d'une app, d'IA ou de visibilité. Commission fixée par écrit avant la signature.",
  alternates: { canonical: "https://rln-consulting.com/apport-affaires" },
  openGraph: {
    title: "Apport d'affaires | Agence RLN",
    description: "Recommandez une entreprise, on s'occupe du reste. Commission à la signature.",
    url: "https://rln-consulting.com/apport-affaires",
  },
}

const steps = [
  { t: "Vous nous présentez le contact", d: "Via le formulaire ou WhatsApp. Deux minutes suffisent." },
  { t: "On le rencontre et on chiffre", d: "Vous êtes tenu informé à chaque étape, sans démarche commerciale de votre part." },
  { t: "Projet signé, commission versée", d: "Le montant de votre commission est fixé par écrit avant la signature du projet." },
]

const profiles = ["Freelances", "Agences", "Consultants", "Experts-comptables", "Clients satisfaits"]

export default function ApportAffairesPage() {
  return (
    <>
      <WebPageJsonLd
        title="Apport d'affaires"
        description="Programme apporteurs d'affaires : recommandez une entreprise et touchez une commission à la signature."
        url="https://rln-consulting.com/apport-affaires"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Apport d'affaires", url: "https://rln-consulting.com/apport-affaires" },
        ]}
      />
      <section className="py-14 lg:py-24">
        <div className="container mx-auto grid items-start gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_600px] lg:gap-20 lg:px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="v-label">Programme apporteurs d&apos;affaires</span>
              <h1 className="v-display text-5xl sm:text-7xl lg:text-[88px]">
                <span className="v-line">
                  <span>Vous connaissez</span>
                </span>
                <span className="v-line">
                  <span>un projet ?</span>
                </span>
                <span className="v-line">
                  <span className="v-em text-primary">On vous rémunère.</span>
                </span>
              </h1>
              <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Présentez-nous une entreprise qui a besoin d&apos;un site, d&apos;une app, d&apos;IA ou de visibilité. On
                s&apos;occupe du reste, et vous êtes rémunéré quand le projet est signé.
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Qui peut recommander">
                {profiles.map((p) => (
                  <li key={p} className="rounded-full border bg-card px-3 py-1.5 font-mono text-xs">
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <ol className="border-t border-foreground">
              {steps.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b py-6">
                  <span className="font-mono text-sm leading-7 text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div className="grid gap-1.5">
                    <h2 className="text-[22px] leading-tight font-semibold">{s.t}</h2>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ReferralForm />
        </div>
      </section>
    </>
  )
}
