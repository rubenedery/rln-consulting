"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, Settings, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getConsent,
  acceptAll,
  rejectAll,
  setConsent,
} from "@/lib/cookie-consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const existing = getConsent()
    if (!existing) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    acceptAll()
    setVisible(false)
  }

  const handleRejectAll = () => {
    rejectAll()
    setVisible(false)
  }

  const handleSavePreferences = () => {
    setConsent(preferences)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
          role="dialog"
          aria-label="Gestion des cookies"
          aria-modal="false"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            {!showPreferences ? (
              /* Simple view */
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-foreground mb-1">
                      Nous respectons votre vie privée
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Nous utilisons des cookies pour améliorer votre expérience et analyser le
                      trafic du site. Vous pouvez choisir les cookies que vous acceptez.{" "}
                      <a
                        href="/confidentialite"
                        className="text-primary hover:underline"
                      >
                        En savoir plus
                      </a>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={handleAcceptAll} size="sm">
                        Tout accepter
                      </Button>
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        size="sm"
                      >
                        Tout refuser
                      </Button>
                      <Button
                        onClick={() => setShowPreferences(true)}
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                      >
                        <Settings className="mr-1.5 h-3.5 w-3.5" />
                        Personnaliser
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Preferences view */
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Préférences des cookies
                  </h2>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-muted-foreground hover:text-foreground p-1 rounded"
                    aria-label="Retour"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Essential */}
                  <CookieOption
                    title="Cookies essentiels"
                    description="Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés."
                    checked={true}
                    disabled={true}
                    onChange={() => {}}
                  />

                  {/* Analytics */}
                  <CookieOption
                    title="Cookies analytiques"
                    description="Google Analytics, Vercel Analytics. Nous aident à comprendre comment vous utilisez le site."
                    checked={preferences.analytics}
                    onChange={(checked) =>
                      setPreferences((p) => ({ ...p, analytics: checked }))
                    }
                  />

                  {/* Marketing */}
                  <CookieOption
                    title="Cookies marketing"
                    description="Permettent d'afficher des publicités personnalisées (Facebook Pixel, LinkedIn, etc.)."
                    checked={preferences.marketing}
                    onChange={(checked) =>
                      setPreferences((p) => ({ ...p, marketing: checked }))
                    }
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleSavePreferences} size="sm">
                    Enregistrer mes choix
                  </Button>
                  <Button onClick={handleAcceptAll} variant="outline" size="sm">
                    Tout accepter
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CookieOption({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <label
      className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
        disabled
          ? "bg-muted/50 border-border cursor-not-allowed"
          : "border-border hover:border-primary/30 cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-primary disabled:opacity-50"
      />
      <div className="flex-1 min-w-0">
        <span className="text-sm font-medium text-foreground">{title}</span>
        {disabled && (
          <span className="ml-2 text-xs text-muted-foreground">(Toujours actif)</span>
        )}
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
    </label>
  )
}

/**
 * Small button to reopen cookie preferences from footer
 */
export function CookieSettingsButton() {
  const handleClick = () => {
    // Remove consent to re-show banner
    localStorage.removeItem("rln_cookie_consent")
    window.location.reload()
  }

  return (
    <button
      onClick={handleClick}
      className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
    >
      Gérer les cookies
    </button>
  )
}
