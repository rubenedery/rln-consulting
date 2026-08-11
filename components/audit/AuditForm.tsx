"use client"

import { useState, useRef } from "react"
import { Globe, Mail, Loader2, CheckCircle, AlertCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { track_audit_request } from "@/components/analytics"

export function AuditForm() {
  const [url, setUrl] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  // Anti-spam: honeypot + timer
  const [honeypot, setHoneypot] = useState("")
  const loadedAtRef = useRef(Date.now())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!url.trim()) {
      setError("L'adresse de votre site est requise")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setIsLoading(true)
    let serverError: string | null = null

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          email,
          _gotcha: honeypot,
          _loadedAt: loadedAtRef.current,
        }),
      })

      if (response.ok) {
        track_audit_request()
        setIsSuccess(true)
      } else {
        const body = await response.json().catch(() => null)
        if (typeof body?.error === "string") serverError = body.error
        throw new Error("Erreur lors de l'envoi")
      }
    } catch {
      toast({
        title: "Erreur",
        description: serverError ?? "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg text-center animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Audit en cours !
        </h2>
        <p className="text-muted-foreground">
          Nous analysons votre site. Votre rapport arrive par email d&apos;ici
          2 minutes — pensez à vérifier vos spams.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-fade-in-up [animation-delay:200ms]">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot - invisible to users, bots fill this */}
        <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
          <label htmlFor="_audit_gotcha">Ne pas remplir</label>
          <input
            id="_audit_gotcha"
            name="_gotcha"
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="audit-url" className="text-sm font-medium text-foreground">
            L&apos;adresse de votre site
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="audit-url"
              type="text"
              inputMode="url"
              placeholder="www.monsite.fr"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                setError("")
              }}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="audit-email" className="text-sm font-medium text-foreground">
            Votre email (pour recevoir le rapport)
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="audit-email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              className={`pl-10 ${error ? "border-destructive" : ""}`}
              aria-invalid={!!error}
              aria-describedby={error ? "audit-error" : undefined}
            />
          </div>
          {error && (
            <p id="audit-error" className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {error}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" variant="accent" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Lancement de l&apos;audit...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Auditer mon site gratuitement
            </>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          🔒 Gratuit, sans engagement. Pas de spam, promis.
        </p>
      </form>
    </div>
  )
}
