"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Dialog } from "radix-ui"
import { Download, Mail, Loader2, CheckCircle, X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { track_exit_intent, track_lead_magnet } from "@/components/analytics"

const SHOWN_KEY = "rln_exit_popup_shown"
const SUBSCRIBED_KEY = "rln_lead_subscribed"
const ARM_DELAY_MS = 10_000
const MOBILE_DELAY_MS = 45_000
const EXCLUDED_PATHS = ["/contact", "/mentions-legales", "/confidentialite", "/merci"]

/**
 * Popup à l'intention de sortie : propose le guide gratuit une seule fois par
 * visiteur (localStorage), jamais sur les pages d'exclusion ni aux inscrits.
 * Radix Dialog fournit focus trap, Escape et les attributs ARIA.
 */
export function ExitIntentPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [honeypot, setHoneypot] = useState("")
  const loadedAtRef = useRef(Date.now())
  const armedRef = useRef(false)
  const firedRef = useRef(false)

  const excluded = EXCLUDED_PATHS.some((p) => pathname.startsWith(p))

  useEffect(() => {
    // Tout l'accès localStorage vit dans useEffect (pas de mismatch d'hydration)
    if (excluded) return
    if (localStorage.getItem(SHOWN_KEY) || localStorage.getItem(SUBSCRIBED_KEY)) {
      return
    }

    const trigger = () => {
      if (firedRef.current || !armedRef.current) return
      firedRef.current = true
      localStorage.setItem(SHOWN_KEY, "1")
      track_exit_intent("shown")
      setOpen(true)
    }

    const armTimer = setTimeout(() => {
      armedRef.current = true
    }, ARM_DELAY_MS)

    // Desktop : la souris quitte la fenêtre par le haut (vers la barre d'URL)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }
    document.addEventListener("mouseleave", onMouseLeave)

    // Mobile (pas de mouseleave fiable) : simple délai
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    const mobileTimer = isTouch ? setTimeout(trigger, MOBILE_DELAY_MS) : null

    return () => {
      clearTimeout(armTimer)
      if (mobileTimer) clearTimeout(mobileTimer)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [excluded])

  const handleOpenChange = (next: boolean) => {
    if (!next && !isSuccess) track_exit_intent("dismissed")
    setOpen(next)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          _gotcha: honeypot,
          _loadedAt: loadedAtRef.current,
        }),
      })
      if (!response.ok) {
        const body = await response.json().catch(() => null)
        throw new Error(typeof body?.error === "string" ? body.error : "Erreur")
      }
      localStorage.setItem(SUBSCRIBED_KEY, "1")
      track_lead_magnet()
      track_exit_intent("converted")
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error && err.message !== "Erreur" ? err.message : "Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50 animate-fade-in-up [animation-duration:200ms]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[71] w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-8 shadow-2xl focus:outline-none">
          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>

          {isSuccess ? (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-7 w-7 text-success" />
              </div>
              <Dialog.Title className="text-xl font-bold text-foreground mb-2">
                Votre guide est en route !
              </Dialog.Title>
              <Dialog.Description className="text-sm text-muted-foreground">
                Vérifiez votre boîte email (et vos spams). Bonne lecture !
              </Dialog.Description>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-accent" />
              </div>
              <Dialog.Title className="text-xl font-bold text-foreground mb-2">
                Une seconde ! Votre site convertit-il vraiment ?
              </Dialog.Title>
              <Dialog.Description className="text-sm text-muted-foreground mb-5">
                Recevez gratuitement notre guide « 10 erreurs qui tuent la
                conversion » — les corrections les plus rentables, expliquées
                simplement.
              </Dialog.Description>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
                  <label htmlFor="_exit_gotcha">Ne pas remplir</label>
                  <input
                    id="_exit_gotcha"
                    name="_gotcha"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError("")
                    }}
                    className={`pl-10 ${error ? "border-destructive" : ""}`}
                    aria-invalid={!!error}
                    aria-describedby={error ? "exit-error" : undefined}
                  />
                </div>
                {error && (
                  <p id="exit-error" className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {error}
                  </p>
                )}

                <Button type="submit" variant="accent" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    "Recevoir le guide gratuit"
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  🔒 Pas de spam, désinscription en un clic.
                </p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
