export interface QuittanceData {
  bailleurNom: string
  bailleurAdresse: string
  locataireNom: string
  logementAdresse: string
  periodeMois: number
  periodeAnnee: number
  loyerHorsCharges: string
  provisionsCharges: string
  datePaiement: string
  lieuEmission: string
  dateEmission: string
  paiementPartiel: boolean
  montantPartiel: string
}

// Seuls les champs stables d'un mois sur l'autre sont persistés :
// la période et les dates sont réinitialisées à chaque visite.
export const QUITTANCE_STORAGE_KEY = "rln_quittance_bailleur"
export const QUITTANCE_STORED_FIELDS = [
  "bailleurNom",
  "bailleurAdresse",
  "locataireNom",
  "logementAdresse",
  "lieuEmission",
  "loyerHorsCharges",
  "provisionsCharges",
] as const

export function quittanceDefaults(now: Date): QuittanceData {
  return {
    bailleurNom: "",
    bailleurAdresse: "",
    locataireNom: "",
    logementAdresse: "",
    periodeMois: now.getMonth(),
    periodeAnnee: now.getFullYear(),
    loyerHorsCharges: "",
    provisionsCharges: "",
    datePaiement: toIsoDate(now),
    lieuEmission: "",
    dateEmission: toIsoDate(now),
    paiementPartiel: false,
    montantPartiel: "",
  }
}

export function toIsoDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${date.getFullYear()}-${month}-${day}`
}

export function formatMoisAnnee(mois: number, annee: number): string {
  return new Date(annee, mois, 1).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  })
}

export function formatEuros(montant: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(montant)
}

// Parser manuel de l'ISO : new Date("yyyy-mm-dd") est interprété en UTC
// et peut décaler d'un jour selon le fuseau du navigateur.
export function formatDateLongue(iso: string): string {
  const [annee, mois, jour] = iso.split("-").map(Number)
  if (!annee || !mois || !jour) return ""
  return new Date(annee, mois - 1, jour).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function periodeComplete(mois: number, annee: number): string {
  const dernierJour = new Date(annee, mois + 1, 0).getDate()
  const libelle = formatMoisAnnee(mois, annee)
  return `du 1er ${libelle} au ${dernierJour} ${libelle}`
}

export function montantNumerique(valeur: string): number {
  const parsed = parseFloat(valeur.replace(",", "."))
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0
}

export function totalQuittance(data: QuittanceData): number {
  return (
    montantNumerique(data.loyerHorsCharges) +
    montantNumerique(data.provisionsCharges)
  )
}
