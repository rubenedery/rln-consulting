import { siteConfig } from "@/lib/constants"
import { escapeHtml } from "@/lib/email-utils"
import type { AuditResult } from "@/lib/audit/scoring"
import type { CheckStatus } from "@/lib/audit/checks"

const statusIcon: Record<CheckStatus, string> = {
  pass: "✅",
  warn: "⚠️",
  fail: "❌",
}

function scoreColor(score: number): string {
  if (score >= 80) return "#16a34a"
  if (score >= 50) return "#f59e0b"
  return "#dc2626"
}

/**
 * Rapport envoyé au prospect. Toutes les valeurs issues du site audité (URL,
 * libellés) passent par escapeHtml : le contenu distant n'est pas fiable.
 */
export function generateAuditReportHtml(result: AuditResult): string {
  const safeUrl = escapeHtml(result.auditedUrl)

  const categoriesHtml = result.categories
    .map(
      (cat) => `
        <td style="padding: 12px; text-align: center;">
          <div style="font-size: 28px; font-weight: 700; color: ${scoreColor(cat.score)};">${cat.score}</div>
          <div style="font-size: 12px; color: #64748b;">${escapeHtml(cat.label)}</div>
        </td>`
    )
    .join("")

  const checksHtml = result.checks
    .map(
      (c) => `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1e293b;">
              ${statusIcon[c.status]} ${escapeHtml(c.label)}
            </p>
            <p style="margin: 4px 0 0; font-size: 13px; color: #475569;">
              ${escapeHtml(c.detail)}
            </p>
          </td>
        </tr>`
    )
    .join("")

  const perfDetail =
    result.pageSpeed?.lcpMs != null
      ? `<p style="margin: 16px 0 0; font-size: 13px; color: #475569;">
           Chargement du contenu principal (LCP) : <strong>${(result.pageSpeed.lcpMs / 1000).toFixed(1)} s</strong>
           ${result.pageSpeed.lcpMs > 2500 ? "— au-dessus des 2,5 s recommandés par Google." : "— dans la cible Google (&lt; 2,5 s)."}
         </p>`
      : ""

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Audit de votre site</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; word-break: break-all;">${safeUrl}</p>
        </div>

        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <div style="text-align: center; padding: 10px 0 20px;">
            <div style="font-size: 52px; font-weight: 800; color: ${scoreColor(result.globalScore)};">${result.globalScore}<span style="font-size: 22px; color: #94a3b8;">/100</span></div>
            <div style="font-size: 14px; color: #64748b;">Score global</div>
          </div>

          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
            <tr>${categoriesHtml}</tr>
          </table>
          ${perfDetail}

          <h2 style="font-size: 18px; color: #1e293b; margin: 28px 0 8px;">Le détail, point par point</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${checksHtml}
          </table>

          <div style="margin-top: 28px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center;">
            <p style="margin: 0 0 12px; font-size: 15px; color: #475569;">
              Vous voulez corriger ces points et gagner des clients avec votre site ?
              Nous vous expliquons quoi faire, gratuitement et sans engagement.
            </p>
            <a href="${siteConfig.url}/contact?utm_source=audit" style="display: inline-block; background: #f59e0b; color: #1e293b; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">
              Demander un devis gratuit
            </a>
          </div>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
          ${siteConfig.name} — ${siteConfig.url}<br>
          Vous recevez cet email car vous avez demandé un audit gratuit sur notre site.
        </p>
      </body>
    </html>
  `
}

/**
 * Notification interne : lead qualifié (email + URL de SON site + score).
 */
export function generateAuditNotificationHtml(
  escapedEmail: string,
  auditedUrl: string,
  globalScore: number | null
): string {
  const safeUrl = escapeHtml(auditedUrl)
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e3a8a;">Nouveau lead — audit gratuit</h2>
        <p style="font-size: 16px;">
          <strong>${escapedEmail}</strong> a demandé l'audit de
          <a href="${safeUrl}">${safeUrl}</a>${globalScore != null ? ` (score obtenu : <strong>${globalScore}/100</strong>)` : ""}.
        </p>
        <a href="mailto:${escapedEmail}" style="display: inline-block; background: #f59e0b; color: #1e293b; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
          Écrire à ce prospect
        </a>
      </body>
    </html>
  `
}
