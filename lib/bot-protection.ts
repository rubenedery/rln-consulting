/**
 * Routes de formulaire protégées par BotID (Vercel). Le composant BotIdClient
 * de la mise en page ajoute ses signaux aux envois vers ces routes ; chacune
 * appelle isAutomatedRequest() (lib/spam-filter.ts) côté serveur.
 */
export const protectedFormRoutes = [
  { path: "/api/contact", method: "POST" },
  { path: "/api/lead-magnet", method: "POST" },
  { path: "/api/audit", method: "POST" },
  { path: "/api/referral", method: "POST" },
]
