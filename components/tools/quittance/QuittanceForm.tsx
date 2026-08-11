"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { type QuittanceData, formatMoisAnnee } from "@/lib/quittance"

interface QuittanceFormProps {
  data: QuittanceData
  onChange: (data: QuittanceData) => void
}

const selectClassName =
  "border-input h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"

export function QuittanceForm({ data, onChange }: QuittanceFormProps) {
  const set = <K extends keyof QuittanceData>(key: K, value: QuittanceData[K]) =>
    onChange({ ...data, [key]: value })

  const anneeCourante = new Date().getFullYear()
  const annees = [anneeCourante - 1, anneeCourante, anneeCourante + 1]

  return (
    <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
      <fieldset className="space-y-3">
        <legend className="font-semibold text-foreground mb-1">Bailleur</legend>
        <div className="space-y-1.5">
          <Label htmlFor="bailleur-nom">Nom et prénom (ou société)</Label>
          <Input
            id="bailleur-nom"
            value={data.bailleurNom}
            onChange={(event) => set("bailleurNom", event.target.value)}
            placeholder="Jean Dupont"
            autoComplete="name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bailleur-adresse">Adresse du bailleur</Label>
          <Textarea
            id="bailleur-adresse"
            value={data.bailleurAdresse}
            onChange={(event) => set("bailleurAdresse", event.target.value)}
            placeholder={"12 rue de la Paix\n75002 Paris"}
            rows={2}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-semibold text-foreground mb-1">Locataire et logement</legend>
        <div className="space-y-1.5">
          <Label htmlFor="locataire-nom">Nom et prénom du locataire</Label>
          <Input
            id="locataire-nom"
            value={data.locataireNom}
            onChange={(event) => set("locataireNom", event.target.value)}
            placeholder="Marie Martin"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="logement-adresse">Adresse du logement loué</Label>
          <Textarea
            id="logement-adresse"
            value={data.logementAdresse}
            onChange={(event) => set("logementAdresse", event.target.value)}
            placeholder={"8 avenue des Lilas, Apt 3B\n69003 Lyon"}
            rows={2}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-semibold text-foreground mb-1">Période concernée</legend>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="periode-mois">Mois</Label>
            <select
              id="periode-mois"
              className={selectClassName}
              value={data.periodeMois}
              onChange={(event) => set("periodeMois", Number(event.target.value))}
            >
              {Array.from({ length: 12 }, (_, mois) => (
                <option key={mois} value={mois}>
                  {formatMoisAnnee(mois, data.periodeAnnee).replace(/ \d{4}$/, "")}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="periode-annee">Année</Label>
            <select
              id="periode-annee"
              className={selectClassName}
              value={data.periodeAnnee}
              onChange={(event) => set("periodeAnnee", Number(event.target.value))}
            >
              {annees.map((annee) => (
                <option key={annee} value={annee}>
                  {annee}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-semibold text-foreground mb-1">Montants</legend>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="loyer">Loyer hors charges (€)</Label>
            <Input
              id="loyer"
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={data.loyerHorsCharges}
              onChange={(event) => set("loyerHorsCharges", event.target.value)}
              placeholder="750"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="charges">Provision charges (€)</Label>
            <Input
              id="charges"
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={data.provisionsCharges}
              onChange={(event) => set("provisionsCharges", event.target.value)}
              placeholder="50"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="date-paiement">Date du paiement</Label>
          <Input
            id="date-paiement"
            type="date"
            value={data.datePaiement}
            onChange={(event) => set("datePaiement", event.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            id="paiement-partiel"
            type="checkbox"
            className="h-4 w-4 accent-primary"
            checked={data.paiementPartiel}
            onChange={(event) => set("paiementPartiel", event.target.checked)}
          />
          <Label htmlFor="paiement-partiel" className="font-normal">
            Paiement partiel (génère un reçu, pas une quittance)
          </Label>
        </div>
        {data.paiementPartiel && (
          <div className="space-y-1.5">
            <Label htmlFor="montant-partiel">Montant reçu (€)</Label>
            <Input
              id="montant-partiel"
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={data.montantPartiel}
              onChange={(event) => set("montantPartiel", event.target.value)}
              placeholder="400"
            />
          </div>
        )}
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-semibold text-foreground mb-1">Émission</legend>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="lieu-emission">Fait à</Label>
            <Input
              id="lieu-emission"
              value={data.lieuEmission}
              onChange={(event) => set("lieuEmission", event.target.value)}
              placeholder="Paris"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="date-emission">Le</Label>
            <Input
              id="date-emission"
              type="date"
              value={data.dateEmission}
              onChange={(event) => set("dateEmission", event.target.value)}
            />
          </div>
        </div>
      </fieldset>
    </form>
  )
}
