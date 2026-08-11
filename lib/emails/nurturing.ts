import { siteConfig } from "@/lib/constants"

function emailShell(headerTitle: string, headerSubtitle: string, body: string, unsubscribeUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">${headerTitle}</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">${headerSubtitle}</p>
        </div>
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          ${body}
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
          ${siteConfig.name} — ${siteConfig.url}<br>
          <a href="${unsubscribeUrl}" style="color: #94a3b8;">Se désinscrire de ces emails</a>
        </p>
      </body>
    </html>
  `
}

const ctaButton = (href: string, label: string) => `
  <div style="text-align: center; margin-top: 24px;">
    <a href="${href}" style="display: inline-block; background: #f59e0b; color: #1e293b; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">
      ${label}
    </a>
  </div>
`

/** Email 1 — envoyé immédiatement après confirmation du double opt-in */
export function generateWelcomeHtml(unsubscribeUrl: string): string {
  return emailShell(
    "Bienvenue !",
    "Vos conseils digitaux par RLN Consulting",
    `
      <p style="font-size: 15px; color: #475569;">
        Merci d'avoir confirmé votre inscription. Environ deux fois par mois, vous
        recevrez des conseils concrets pour que votre site vous rapporte des
        clients : conversion, SEO, acquisition — sans jargon, sans blabla.
      </p>
      <p style="font-size: 15px; color: #475569;">
        En attendant, trois ressources gratuites pour démarrer :
      </p>
      <ul style="font-size: 15px; color: #475569; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><a href="${siteConfig.url}/audit-gratuit" style="color: #2563eb;">L'audit gratuit de votre site</a> — score et points à corriger en 2 minutes</li>
        <li style="margin-bottom: 8px;"><a href="${siteConfig.url}/tarifs/simulateur" style="color: #2563eb;">Le simulateur de prix</a> — estimez votre projet sans engagement</li>
        <li><a href="${siteConfig.url}/blog" style="color: #2563eb;">Le blog</a> — 45+ guides pratiques</li>
      </ul>
      ${ctaButton(`${siteConfig.url}/audit-gratuit`, "Auditer mon site gratuitement")}
    `,
    unsubscribeUrl
  )
}

/** Email 2 — J+3 : la preuve par l'exemple */
export function generateDay3Html(unsubscribeUrl: string): string {
  return emailShell(
    "Comment un site devient une machine à clients",
    "Étude de cas concrète",
    `
      <p style="font-size: 15px; color: #475569;">
        Un site vitrine qui ne génère aucune demande n'est pas une fatalité :
        c'est presque toujours une question de parcours visiteur, de preuve et
        d'appels à l'action placés au bon endroit.
      </p>
      <p style="font-size: 15px; color: #475569;">
        Nous avons documenté plusieurs projets avec leurs résultats mesurés
        (trafic, taux de conversion, coût par prospect) — avant et après.
        La méthode est transposable à la plupart des activités.
      </p>
      ${ctaButton(`${siteConfig.url}/cas-etudes`, "Voir les études de cas chiffrées")}
    `,
    unsubscribeUrl
  )
}

/** Email 3 — J+7 : proposition directe */
export function generateDay7Html(unsubscribeUrl: string): string {
  return emailShell(
    "Et si on regardait votre site ensemble ?",
    "30 minutes, gratuit, sans engagement",
    `
      <p style="font-size: 15px; color: #475569;">
        Depuis une semaine, vous avez le guide des 10 erreurs de conversion.
        La question suivante est simple : lesquelles concernent <em>votre</em> site ?
      </p>
      <p style="font-size: 15px; color: #475569;">
        Nous proposons un échange gratuit de 30 minutes : vous repartez avec un
        diagnostic honnête et 2-3 actions prioritaires — que vous travailliez
        avec nous ensuite ou non.
      </p>
      ${ctaButton(`${siteConfig.url}/contact?utm_source=nurturing`, "Réserver mon créneau gratuit")}
    `,
    unsubscribeUrl
  )
}

/** Bloc à insérer dans l'email du guide : invitation double opt-in */
export function generateOptInSectionHtml(confirmUrl: string): string {
  return `
    <div style="margin-top: 28px; padding: 20px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe; text-align: center;">
      <p style="margin: 0 0 12px; font-size: 15px; color: #1e3a8a;">
        <strong>Envie d'aller plus loin ?</strong> Recevez nos conseils concrets
        (conversion, SEO, acquisition) environ deux fois par mois.
      </p>
      <a href="${confirmUrl}" style="display: inline-block; background: #1e3a8a; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
        Oui, je confirme mon inscription
      </a>
      <p style="margin: 10px 0 0; font-size: 12px; color: #64748b;">
        Un clic suffit — désinscription possible à tout moment.
      </p>
    </div>
  `
}
