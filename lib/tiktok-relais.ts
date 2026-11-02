/**
 * Relais TikTok Shop de l'agence.
 *
 * Une seule application TikTok (« RLN Commerce Connect ») sert toutes les
 * bijouteries, chacune sur son propre back-office. TikTok n'accepte qu'une URL
 * de retour et qu'une URL de notification par application : ce relais les reçoit
 * et les renvoie vers le bon back-office, sans jamais lire ni conserver de jeton.
 */

/** Même format que côté back-office : l'instance précède le « ~ » du state. */
const FORMAT_INSTANCE = /^[a-z0-9-]{1,40}$/

/** Délai par instance : TikTok exige une réponse sous 3 secondes. */
export const DELAI_TRANSMISSION_MS = 2500

/**
 * Lit `TIKTOK_INSTANCES` ({"identifiant": "https://api.exemple.fr"}).
 * C'est la liste blanche : une instance absente ne reçoit jamais rien, et seule
 * l'origine HTTPS est gardée (un chemin glissé dans la variable est ignoré).
 */
export function instancesAutorisees(brut: string | undefined): Map<string, string> {
  const instances = new Map<string, string>()
  let lu: unknown
  try {
    lu = JSON.parse(brut ?? "{}")
  } catch {
    return instances
  }
  if (!lu || typeof lu !== "object" || Array.isArray(lu)) return instances
  for (const [identifiant, adresse] of Object.entries(lu)) {
    if (!FORMAT_INSTANCE.test(identifiant) || typeof adresse !== "string") continue
    try {
      const url = new URL(adresse)
      if (url.protocol === "https:") instances.set(identifiant, url.origin)
    } catch {
      continue
    }
  }
  return instances
}

/** Identifiant d'instance porté par le state, ou null s'il est absent ou mal formé. */
export function instanceDuState(state: string | null): string | null {
  if (!state) return null
  const position = state.indexOf("~")
  if (position <= 0) return null
  const identifiant = state.slice(0, position)
  return FORMAT_INSTANCE.test(identifiant) ? identifiant : null
}

/**
 * URL de retour sur le back-office de l'instance, tous les paramètres de TikTok
 * recopiés à l'identique. Le back-office vérifie lui-même la signature du state :
 * le relais ne fait qu'aiguiller.
 */
export function urlRetourInstance(recherche: URLSearchParams, instances: Map<string, string>): string | null {
  const identifiant = instanceDuState(recherche.get("state"))
  const origine = identifiant ? instances.get(identifiant) : undefined
  if (!origine) return null
  return `${origine}/hooks/tiktok/autorisation?${recherche.toString()}`
}

export type Transmission = { instance: string; statut: number | null }

/**
 * Transmet une notification à chaque instance, corps brut et en-tête
 * `Authorization` intacts : la signature HMAC est calculée sur ces octets
 * exacts, toute réécriture du JSON la rendrait invalide. Chaque back-office
 * vérifie la signature et ignore une boutique qui n'est pas la sienne.
 */
export async function transmetNotification(
  corps: string,
  entetes: { authorization: string | null; contentType: string | null },
  instances: Map<string, string>,
  fetchImpl: typeof fetch = fetch
): Promise<Transmission[]> {
  const envois = [...instances].map(async ([instance, origine]): Promise<Transmission> => {
    try {
      const reponse = await fetchImpl(`${origine}/hooks/tiktok`, {
        method: "POST",
        headers: {
          "content-type": entetes.contentType ?? "application/json",
          ...(entetes.authorization ? { authorization: entetes.authorization } : {}),
        },
        body: corps,
        signal: AbortSignal.timeout(DELAI_TRANSMISSION_MS),
        redirect: "manual",
      })
      return { instance, statut: reponse.status }
    } catch {
      return { instance, statut: null }
    }
  })
  return Promise.all(envois)
}

/**
 * 200 dès qu'une instance a accepté : TikTok ne renvoie alors pas la
 * notification. Sinon 502, pour que TikTok la renvoie plus tard (le back-office
 * la rattrape aussi par relecture périodique). Sans aucune instance déclarée il
 * n'y a rien à livrer : 200, pour que la console TikTok accepte l'URL.
 */
export function statutPourTikTok(transmissions: Transmission[]): number {
  if (transmissions.length === 0) return 200
  return transmissions.some((t) => t.statut !== null && t.statut >= 200 && t.statut < 300) ? 200 : 502
}
