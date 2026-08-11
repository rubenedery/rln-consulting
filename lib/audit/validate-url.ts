import { lookup } from "dns/promises"
import { isIP } from "net"

export interface UrlValidationResult {
  ok: boolean
  url?: URL
  error?: string
}

/**
 * Rejette toute IP non publique : le serveur d'audit fetch une URL fournie par
 * l'utilisateur, sans ce filtre il servirait de proxy vers le réseau interne
 * (SSRF). Limite connue : le fetch re-résout le DNS après cette validation
 * (fenêtre de rebinding théorique) — risque accepté ici car le contenu n'est
 * jamais restitué brut à l'utilisateur et les timeouts sont courts.
 */
function isPrivateIp(ip: string): boolean {
  if (isIP(ip) === 4) {
    const parts = ip.split(".").map(Number)
    const [a, b] = parts
    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168)
    )
  }

  const lower = ip.toLowerCase()
  if (lower === "::" || lower === "::1") return true
  // fc00::/7 (ULA), fe80::/10 (link-local)
  if (lower.startsWith("fc") || lower.startsWith("fd") || lower.startsWith("fe8") || lower.startsWith("fe9") || lower.startsWith("fea") || lower.startsWith("feb")) {
    return true
  }
  // IPv4 mappée en IPv6 (::ffff:10.0.0.1)
  const v4Mapped = lower.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/)
  if (v4Mapped) return isPrivateIp(v4Mapped[1])
  return false
}

export async function validateAuditUrl(rawUrl: string): Promise<UrlValidationResult> {
  let url: URL
  try {
    url = new URL(rawUrl)
  } catch {
    return { ok: false, error: "URL invalide" }
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { ok: false, error: "Seuls les protocoles http et https sont acceptés" }
  }
  if (url.username || url.password) {
    return { ok: false, error: "URL invalide" }
  }
  if (url.port && url.port !== "80" && url.port !== "443") {
    return { ok: false, error: "Port non autorisé" }
  }

  const hostname = url.hostname
  if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".internal")) {
    return { ok: false, error: "Cette adresse n'est pas auditable" }
  }
  if (isIP(hostname) && isPrivateIp(hostname)) {
    return { ok: false, error: "Cette adresse n'est pas auditable" }
  }

  if (!isIP(hostname)) {
    try {
      const addresses = await lookup(hostname, { all: true })
      if (addresses.length === 0) {
        return { ok: false, error: "Ce domaine ne répond pas" }
      }
      if (addresses.some((addr) => isPrivateIp(addr.address))) {
        return { ok: false, error: "Cette adresse n'est pas auditable" }
      }
    } catch {
      return { ok: false, error: "Ce domaine ne répond pas (vérifiez l'orthographe)" }
    }
  }

  return { ok: true, url }
}
