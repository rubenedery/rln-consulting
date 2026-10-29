import disposableDomains from "disposable-email-domains/index.json"
import disposableWildcards from "disposable-email-domains/wildcard.json"
import { checkBotId } from "botid/server"

/**
 * Deuxième ligne de défense des formulaires, après le champ piège, le délai
 * minimum et la limite par IP (lib/antispam.ts) :
 *
 * 1. BotID (Vercel) : les navigateurs automatisés, invisibles pour le visiteur.
 * 2. Le contenu : démarchage commercial, liens vers des domaines douteux,
 *    adresses jetables. Une demande suspecte n'est jamais supprimée : elle part
 *    avec « [Spam probable] » dans l'objet pour être triée, rien n'est perdu.
 */

export const SUSPECT_SUBJECT_PREFIX = "[Spam probable]"

/** Au-delà de ce score, la demande est marquée suspecte. */
const SUSPECT_THRESHOLD = 3

/** Domaines de premier niveau rarement utilisés par une entreprise française. */
const SUSPICIOUS_TLDS = [
  ".online", ".site", ".xyz", ".top", ".click", ".icu", ".buzz", ".live", ".my.id", ".biz.id",
  ".tk", ".ml", ".ga", ".cf", ".gq", ".work", ".space", ".website", ".fun", ".pw", ".ru", ".cn",
  ".monster", ".rest", ".cyou", ".sbs", ".cfd", ".quest", ".bond",
]

/**
 * Formules de démarchage : quelqu'un qui vend, pas quelqu'un qui achète.
 * `\b` ignore les lettres accentuées en JavaScript (« à », « é ») : les
 * limites de mot sont donc écrites en Unicode.
 */
const SALES_PHRASES: readonly string[] = [
  "je (vous )?propose",
  "nous (vous )?proposons",
  "nos (services|offres|tarifs|prestations|solutions)",
  "mes (services|offres|tarifs|prestations)",
  "à partir de \\d+",
  "projet détaillé",
  "(découvrez|consultez) (notre|nos|mon|mes)",
  "back ?links?",
  "guest ?posts?",
  "(première|1re|1ère) page (de |sur )?google",
  "first page",
  "we (offer|provide|help|specialize)",
  "our (services|agency|team|company|pricing)",
  "seo services?",
  "white ?label",
  "sous-traitance",
  "offshore",
  "crypto|casino|bitcoin|forex|viagra|cialis",
  "boost(er)? (votre|vos|your)",
  "générer (plus de |des )?(leads|prospects|rendez-vous)",
  "plus de \\d+ (clients|projets|sites)",
]

const SALES_PATTERNS: readonly RegExp[] = SALES_PHRASES.map(
  (phrase) => new RegExp(`(?<![\\p{L}\\p{N}])(?:${phrase})(?![\\p{L}\\p{N}])`, "iu")
)

const URL_PATTERN = /\bhttps?:\/\/([^\s/?#)]+)|\bwww\.([^\s/?#)]+)/gi

let disposableSet: Set<string> | null = null

function isDisposableDomain(domain: string): boolean {
  if (!disposableSet) disposableSet = new Set(disposableDomains as string[])
  if (disposableSet.has(domain)) return true
  return (disposableWildcards as string[]).some((root) => domain === root || domain.endsWith(`.${root}`))
}

function hasSuspiciousTld(domain: string): boolean {
  return SUSPICIOUS_TLDS.some((tld) => domain.endsWith(tld))
}

function emailDomain(email: string): string {
  return email.split("@").pop()?.trim().toLowerCase() ?? ""
}

export interface SpamAssessment {
  score: number
  reasons: string[]
  suspect: boolean
}

export interface SubmissionFields {
  email: string
  message?: string
  name?: string
  company?: string
}

/**
 * Note une demande. Pur et sans réseau : testable, et sans risque de bloquer
 * une vraie demande parce qu'un service externe ne répond pas.
 */
export function assessSubmission(fields: SubmissionFields): SpamAssessment {
  const reasons: string[] = []
  let score = 0

  const domain = emailDomain(fields.email)
  if (domain && isDisposableDomain(domain)) {
    score += 3
    reasons.push(`adresse jetable (${domain})`)
  } else if (domain && hasSuspiciousTld(domain)) {
    score += 2
    reasons.push(`domaine d'e-mail inhabituel (${domain})`)
  }

  const text = [fields.message, fields.company, fields.name].filter(Boolean).join("\n")
  if (text) {
    const linkedDomains = new Set<string>()
    for (const match of text.matchAll(URL_PATTERN)) {
      const host = (match[1] ?? match[2] ?? "").toLowerCase().replace(/^www\./, "")
      if (host && host !== domain) linkedDomains.add(host)
    }
    if (linkedDomains.size > 0) {
      score += Math.min(linkedDomains.size, 2)
      reasons.push(`lien(s) vers ${[...linkedDomains].slice(0, 3).join(", ")}`)
      const shady = [...linkedDomains].filter(hasSuspiciousTld)
      if (shady.length > 0) {
        score += 2
        reasons.push(`lien vers un domaine douteux (${shady[0]})`)
      }
    }

    const salesHits = SALES_PATTERNS.filter((re) => re.test(text))
    if (salesHits.length > 0) {
      score += Math.min(salesHits.length, 3)
      reasons.push(`formules de démarchage (${salesHits.length})`)
    }

    if (/[Ѐ-ӿ一-鿿฀-๿]/.test(text)) {
      score += 2
      reasons.push("alphabet inattendu")
    }
  }

  return { score, reasons, suspect: score >= SUSPECT_THRESHOLD }
}

/** Objet d'e-mail préfixé quand la demande est suspecte. */
export function tagSubject(subject: string, assessment: SpamAssessment): string {
  return assessment.suspect ? `${SUSPECT_SUBJECT_PREFIX} ${subject}` : subject
}

/**
 * Vérification BotID. Ne bloque jamais sur une erreur du service : un vrai
 * prospect perdu coûte plus cher qu'un robot qui passe.
 */
export async function isAutomatedRequest(): Promise<boolean> {
  try {
    const verification = await checkBotId()
    return verification.isBot
  } catch (error) {
    console.warn("[Anti-spam] BotID indisponible, demande acceptée :", String(error).slice(0, 120))
    return false
  }
}
