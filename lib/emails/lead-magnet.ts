import { siteConfig } from "@/lib/constants"

interface GuideItem {
  title: string
  body: string
}

const guideItems: GuideItem[] = [
  {
    title: "Un temps de chargement supérieur à 3 secondes",
    body: "53 % des visiteurs mobiles quittent un site qui met plus de 3 secondes à charger. Compressez vos images (WebP/AVIF), limitez les scripts tiers et mesurez régulièrement vos Core Web Vitals avec PageSpeed Insights.",
  },
  {
    title: "Aucun appel à l'action visible au-dessus de la ligne de flottaison",
    body: "Si le visiteur doit scroller pour comprendre quoi faire, vous le perdez. Placez un bouton d'action clair et contrasté dès le premier écran, avec un verbe d'action précis (« Demander un devis », pas « En savoir plus »).",
  },
  {
    title: "Un formulaire trop long",
    body: "Chaque champ supplémentaire fait chuter le taux de complétion. Limitez-vous à l'essentiel : nom, email, message. Vous collecterez les détails lors du premier échange.",
  },
  {
    title: "L'absence de preuve sociale",
    body: "Témoignages, études de cas chiffrées, logos clients : sans preuve, une promesse ne vaut rien. Une seule étude de cas détaillée avec des résultats vérifiables convertit mieux que dix slogans.",
  },
  {
    title: "Un site non pensé pour le mobile",
    body: "Plus de 60 % du trafic est mobile. Boutons trop petits, texte illisible, menus cassés : testez chaque page sur un vrai téléphone, pas seulement en réduisant la fenêtre du navigateur.",
  },
  {
    title: "Un message flou sur ce que vous faites",
    body: "En 5 secondes, un visiteur doit comprendre ce que vous proposez, pour qui, et pourquoi vous plutôt qu'un autre. Si votre titre principal pourrait s'appliquer à n'importe quelle entreprise, il ne dit rien.",
  },
  {
    title: "Ignorer le SEO de base",
    body: "Balises title uniques, meta descriptions, structure de titres cohérente, URLs propres : ces fondamentaux ne demandent pas d'expertise pointue mais conditionnent toute votre visibilité sur Google.",
  },
  {
    title: "Aucun suivi des conversions",
    body: "Sans mesure, impossible de savoir ce qui fonctionne. Configurez le suivi des soumissions de formulaire, des clics sur vos boutons clés et des appels téléphoniques avant d'investir en publicité.",
  },
  {
    title: "Des pages orphelines et un maillage interne négligé",
    body: "Une page sans lien entrant est invisible pour vos visiteurs comme pour Google. Reliez vos contenus entre eux : chaque page importante doit être accessible en 3 clics maximum depuis l'accueil.",
  },
  {
    title: "Ne jamais tester ni itérer",
    body: "Un site n'est jamais « terminé ». Analysez le comportement réel des visiteurs, identifiez les pages où ils abandonnent, et améliorez en continu. Les meilleurs taux de conversion viennent d'itérations successives, pas d'une refonte unique.",
  },
]

/**
 * Email envoyé au prospect : le guide complet directement dans le corps du message.
 * TODO: joindre le PDF quand disponible via attachments: [{ filename, content }] (base64)
 */
export function generateGuideHtml(): string {
  const itemsHtml = guideItems
    .map(
      (item, index) => `
        <tr>
          <td style="padding: 20px 0; border-bottom: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px; font-size: 17px; font-weight: 600; color: #1e293b;">
              ${index + 1}. ${item.title}
            </p>
            <p style="margin: 0; font-size: 15px; color: #475569; line-height: 1.6;">
              ${item.body}
            </p>
          </td>
        </tr>`
    )
    .join("")

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">10 erreurs qui tuent la conversion de votre site</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Le guide complet, offert par ${siteConfig.name}</p>
        </div>

        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="margin: 0 0 10px; font-size: 15px; color: #475569;">
            Merci pour votre confiance ! Voici les 10 erreurs les plus courantes que nous
            corrigeons chez nos clients — et comment les éviter sur votre propre site.
          </p>
          <table style="width: 100%; border-collapse: collapse;">
            ${itemsHtml}
          </table>

          <div style="margin-top: 28px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center;">
            <p style="margin: 0 0 12px; font-size: 15px; color: #475569;">
              Vous voulez un diagnostic personnalisé de votre site ?
            </p>
            <a href="${siteConfig.url}/contact" style="display: inline-block; background: #f59e0b; color: #1e293b; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">
              Demander un audit gratuit
            </a>
          </div>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
          ${siteConfig.name} — ${siteConfig.url}<br>
          Vous recevez cet email car vous avez demandé ce guide sur notre site.
        </p>
      </body>
    </html>
  `
}

/**
 * Email de notification interne : un nouveau lead a demandé le guide.
 */
export function generateLeadNotificationHtml(escapedEmail: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e3a8a;">Nouveau lead — guide conversion</h2>
        <p style="font-size: 16px;">
          <strong>${escapedEmail}</strong> a demandé le guide
          « 10 erreurs qui tuent la conversion » depuis la page d'accueil.
        </p>
        <a href="mailto:${escapedEmail}" style="display: inline-block; background: #f59e0b; color: #1e293b; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
          Écrire à ce prospect
        </a>
      </body>
    </html>
  `
}
