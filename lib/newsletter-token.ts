import { createHmac, timingSafeEqual } from "crypto"

interface TokenPayload {
  email: string
  /** Epoch ms d'expiration ; 0 = sans expiration (lien de désinscription) */
  exp: number
}

function getSecret(): string | null {
  return process.env.NEWSLETTER_SIGNING_SECRET || null
}

function sign(data: string, secret: string): string {
  return createHmac("sha256", secret).update(data).digest("base64url")
}

/**
 * Token signé HMAC pour les liens de confirmation/désinscription : l'email
 * n'apparaît jamais en clair dans une URL et le lien ne peut pas être forgé.
 * Pas de base de données : toute l'information vit dans le token.
 */
export function createNewsletterToken(
  email: string,
  ttlMs: number | null = 72 * 60 * 60 * 1000
): string | null {
  const secret = getSecret()
  if (!secret) {
    console.error("[Newsletter] NEWSLETTER_SIGNING_SECRET manquante")
    return null
  }
  const payload: TokenPayload = {
    email,
    exp: ttlMs === null ? 0 : Date.now() + ttlMs,
  }
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url")
  return `${encoded}.${sign(encoded, secret)}`
}

export function verifyNewsletterToken(token: string): string | null {
  const secret = getSecret()
  if (!secret) return null

  const dotIndex = token.lastIndexOf(".")
  if (dotIndex <= 0) return null
  const encoded = token.slice(0, dotIndex)
  const signature = token.slice(dotIndex + 1)

  const expected = sign(encoded, secret)
  const signatureBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)
  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8")
    ) as TokenPayload
    if (typeof payload.email !== "string" || typeof payload.exp !== "number") {
      return null
    }
    if (payload.exp !== 0 && Date.now() > payload.exp) return null
    return payload.email
  } catch {
    return null
  }
}
