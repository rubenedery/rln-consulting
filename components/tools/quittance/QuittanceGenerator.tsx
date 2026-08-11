"use client"

import { useEffect, useRef, useState } from "react"
import { Printer, ShieldCheck, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuittanceForm } from "@/components/tools/quittance/QuittanceForm"
import { QuittancePreview } from "@/components/tools/quittance/QuittancePreview"
import {
  type QuittanceData,
  quittanceDefaults,
  QUITTANCE_STORAGE_KEY,
  QUITTANCE_STORED_FIELDS,
} from "@/lib/quittance"

export function QuittanceGenerator() {
  const [data, setData] = useState<QuittanceData>(() => quittanceDefaults(new Date()))
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Hydratation localStorage au mount uniquement (jamais dans l'initialiseur
  // de useState : le HTML serveur doit correspondre au premier rendu client).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(QUITTANCE_STORAGE_KEY)
      if (!stored) return
      const parsed = JSON.parse(stored) as Partial<QuittanceData>
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydratation one-shot depuis localStorage : impossible dans l'initialiseur useState sans mismatch SSR
      setData((current) => {
        const restored = { ...current }
        for (const field of QUITTANCE_STORED_FIELDS) {
          const value = parsed[field]
          if (typeof value === "string") restored[field] = value
        }
        return restored
      })
    } catch {
      // localStorage indisponible (navigation privée Safari) : l'outil reste fonctionnel
    }
  }, [])

  // Sauvegarde débouncée des seuls champs stables d'un mois sur l'autre
  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      try {
        const toStore: Record<string, string> = {}
        for (const field of QUITTANCE_STORED_FIELDS) toStore[field] = data[field]
        window.localStorage.setItem(QUITTANCE_STORAGE_KEY, JSON.stringify(toStore))
      } catch {
        // Ignoré : le stockage est un confort, pas une fonctionnalité critique
      }
    }, 500)
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current)
    }
  }, [data])

  const effacer = () => {
    try {
      window.localStorage.removeItem(QUITTANCE_STORAGE_KEY)
    } catch {
      // Rien à faire : le stockage n'était pas disponible
    }
    setData(quittanceDefaults(new Date()))
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <Card className="print-hidden">
        <CardHeader>
          <CardTitle>Vos informations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <QuittanceForm data={data} onChange={setData} />
          <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
            <Button variant="accent" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              Imprimer / Enregistrer en PDF
            </Button>
            <Button variant="ghost" onClick={effacer}>
              <Trash2 className="h-4 w-4 mr-2" />
              Effacer mes informations
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Dans la boîte de dialogue d&apos;impression, choisissez «&nbsp;Enregistrer au
            format PDF&nbsp;» comme destination.
          </p>
          <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
            <ShieldCheck className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              100&nbsp;% gratuit — aucune donnée n&apos;est envoyée sur nos serveurs. Vos
              informations restent dans votre navigateur et vous pouvez les effacer à tout
              moment.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="lg:sticky lg:top-24">
        <QuittancePreview data={data} />
      </div>
    </div>
  )
}
