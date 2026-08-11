/**
 * Échappe les caractères HTML spéciaux des données utilisateur avant
 * interpolation dans les templates d'emails (contenu et attributs).
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
