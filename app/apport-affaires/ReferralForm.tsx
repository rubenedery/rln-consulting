"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { track_event, track_whatsapp_click } from "@/components/analytics"
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/ui/whatsapp"

const PROFILES = ["Particulier", "Indépendant", "Entreprise"] as const
const NEEDS = ["Site web", "E-commerce", "App mobile", "IA", "Configurateur 3D", "CRM", "SEO & Ads"] as const
const BUDGETS = ["< 5 k€", "5 – 15 k€", "15 – 50 k€", "50 k€ +", "Je ne sais pas"] as const

function Segmented<T extends string>({
  label,
  id,
  options,
  value,
  onChange,
}: {
  label: string
  id: string
  options: readonly T[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <span id={id} className="text-sm font-medium">
        {label}
      </span>
      <div role="radiogroup" aria-labelledby={id} className="inline-flex flex-wrap gap-1 self-start rounded-[24px] bg-muted p-1">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={value === o}
            onClick={() => onChange(o)}
            className={cn(
              "h-10 rounded-full px-4 text-sm font-medium transition-colors",
              value === o ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

function StepTitle({ n, children, brand }: { n: number; children: React.ReactNode; brand?: boolean }) {
  return (
    <legend className="mb-4 flex items-center gap-3">
      <span
        className={cn(
          "grid size-7 place-items-center rounded-full font-mono text-xs",
          brand ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
        )}
      >
        {n}
      </span>
      <span className="font-display text-[22px] font-semibold tracking-[-0.015em]">{children}</span>
    </legend>
  )
}

export function ReferralForm() {
  const [profile, setProfile] = React.useState<(typeof PROFILES)[number]>("Indépendant")
  const [budget, setBudget] = React.useState<(typeof BUDGETS)[number]>("5 – 15 k€")
  const [needs, setNeeds] = React.useState<string[]>([])
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = React.useState<string | null>(null)
  const [honeypot, setHoneypot] = React.useState("")
  const loadedAt = React.useRef(0)
  React.useEffect(() => {
    loadedAt.current = Date.now()
  }, [])
  const formRef = React.useRef<HTMLFormElement>(null)

  const toggleNeed = (n: string) => setNeeds((xs) => (xs.includes(n) ? xs.filter((x) => x !== n) : [...xs, n]))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      profile,
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      contact: String(fd.get("contact") || ""),
      needs,
      budget,
      context: String(fd.get("context") || ""),
      informed: fd.get("informed") === "on",
      consent: fd.get("consent") === "on",
      _gotcha: honeypot,
      _loadedAt: loadedAt.current,
    }
    if (!payload.informed || !payload.consent) {
      setError("Cochez les deux cases pour envoyer la recommandation.")
      return
    }
    setError(null)
    setStatus("sending")
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(
          data?.error === "Données invalides"
            ? "Vérifiez votre nom, votre e-mail et le nom de l'entreprise recommandée."
            : data?.error || "L'envoi n'a pas abouti. Réessayez ou écrivez-nous sur WhatsApp."
        )
        setStatus("error")
        return
      }
      track_event("referral_submit", "apport_affaires", `${profile} · ${budget}`)
      setStatus("sent")
    } catch {
      setError("L'envoi n'a pas abouti. Réessayez ou écrivez-nous sur WhatsApp.")
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-5 rounded-lg border bg-card p-8 shadow-lift sm:p-10" role="status">
        <span className="inline-flex h-8 items-center self-start rounded-full bg-secondary px-3 font-mono text-xs">
          Recommandation reçue
        </span>
        <h2 className="text-4xl leading-none font-semibold tracking-[-0.035em] sm:text-5xl">
          Merci, <span className="v-em">on s&apos;en occupe.</span>
        </h2>
        <p className="text-[17px] leading-relaxed text-muted-foreground">
          On vous recontacte sous 24 h ouvrées pour faire le point avant d&apos;appeler votre contact.
        </p>
        <Button
          variant="outline"
          className="self-start"
          onClick={() => {
            setStatus("idle")
            setNeeds([])
            loadedAt.current = Date.now()
          }}
        >
          Recommander une autre entreprise
        </Button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate={false}
      className="relative flex flex-col gap-8 rounded-lg border bg-card p-6 shadow-lift sm:p-10"
      aria-labelledby="referral-form-title"
    >
      <h2 id="referral-form-title" className="sr-only">
        Formulaire de recommandation
      </h2>
      <div className="absolute top-0 left-0 -z-10 h-0 w-0 opacity-0" aria-hidden="true">
        <label htmlFor="_gotcha">Ne pas remplir</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <fieldset className="flex flex-col gap-4">
        <StepTitle n={1}>Vous</StepTitle>
        <Segmented label="Vous êtes" id="r-profile" options={PROFILES} value={profile} onChange={setProfile} />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="r-name">Prénom et nom</Label>
            <Input id="r-name" name="name" autoComplete="name" required minLength={2} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="r-phone">Téléphone</Label>
            <Input id="r-phone" name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="r-email">E-mail</Label>
          <Input id="r-email" name="email" type="email" autoComplete="email" required placeholder="vous@exemple.fr" />
        </div>
      </fieldset>

      <hr className="border-border" />
      <fieldset className="flex flex-col gap-4">
        <StepTitle n={2} brand>
          L&apos;entreprise recommandée
        </StepTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="r-company">Entreprise</Label>
            <Input id="r-company" name="company" required placeholder="Nom de l'entreprise" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="r-contact">Contact (e-mail ou téléphone)</Label>
            <Input id="r-contact" name="contact" />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <span id="r-needs" className="text-sm font-medium">
            Son besoin
          </span>
          <div role="group" aria-labelledby="r-needs" className="flex flex-wrap gap-2">
            {NEEDS.map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={needs.includes(n)}
                onClick={() => toggleNeed(n)}
                className={cn(
                  "h-10 rounded-full border px-4 text-sm font-medium transition-colors",
                  needs.includes(n) ? "border-foreground bg-foreground text-background" : "border-input bg-card hover:border-foreground"
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        <Segmented label="Budget estimé" id="r-budget" options={BUDGETS} value={budget} onChange={setBudget} />
        <div className="flex flex-col gap-2">
          <Label htmlFor="r-context">
            Contexte <span className="font-normal text-muted-foreground">(facultatif)</span>
          </Label>
          <Textarea
            id="r-context"
            name="context"
            rows={3}
            placeholder="Comment vous le connaissez, ce qu'il cherche, le bon moment pour l'appeler."
          />
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 text-sm leading-snug">
        <label htmlFor="r-informed" className="flex items-start gap-3">
          <input id="r-informed" name="informed" type="checkbox" defaultChecked className="mt-0.5 size-5 shrink-0 accent-primary" />
          Le contact est informé que je le recommande.
        </label>
        <label htmlFor="r-consent" className="flex items-start gap-3 text-muted-foreground">
          <input id="r-consent" name="consent" type="checkbox" className="mt-0.5 size-5 shrink-0 accent-primary" />
          J&apos;accepte que mes données soient utilisées pour le suivi de cette recommandation (voir la politique de confidentialité).
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-sm border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Envoi…
            </>
          ) : (
            <span className="v-roll">
              <span>Envoyer la recommandation</span>
              <span aria-hidden="true">Envoyer la recommandation</span>
            </span>
          )}
        </Button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track_whatsapp_click()}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span className="grid size-7 place-items-center rounded-full bg-[#1FA855] text-white">
            <WhatsAppIcon className="size-3.5" />
          </span>
          Plus simple par WhatsApp
        </a>
      </div>
    </form>
  )
}
