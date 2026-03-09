"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Mail, Loader2, CheckCircle, FileText, TrendingUp, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { track_lead_magnet } from "@/components/analytics"

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("L'email est requis")
      return
    }

    if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        track_lead_magnet()
        setIsSuccess(true)
        toast({
          title: "Guide envoyé !",
          description: "Vérifiez votre boîte email pour télécharger le guide.",
          variant: "success",
        })
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    "Les 10 erreurs critiques qui tuent votre taux de conversion",
    "Comment optimiser votre site pour le SEO en 2026",
    "Checklist complète pour un site performant",
  ]

  if (isSuccess) {
    return (
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Votre guide est en route !
            </h3>
            <p className="text-muted-foreground">
              Vérifiez votre boîte email (et vos spams). Vous recevrez le guide
              dans les prochaines minutes.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
                <Download className="h-4 w-4" />
                Ressource gratuite
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Guide gratuit : 10 erreurs qui tuent la{" "}
                <span className="text-primary">conversion</span> de votre site
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Découvrez les erreurs les plus courantes qui empêchent vos
                visiteurs de devenir clients, et comment les corriger.
              </p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              {/* Preview mockup */}
              <div className="flex items-center justify-center gap-4 mb-8 p-6 bg-muted/50 rounded-xl">
                <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Guide PDF</p>
                  <p className="text-sm text-muted-foreground">15 pages • Gratuit</p>
                  <div className="flex items-center gap-1 text-sm text-success mt-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>+150% de conversions</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
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
                      aria-describedby={error ? "email-error" : undefined}
                    />
                  </div>
                  {error && (
                    <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {error}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger le guide gratuit
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 Vos données sont protégées. Pas de spam, promis.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
