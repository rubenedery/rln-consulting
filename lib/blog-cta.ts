/**
 * Découpe un contenu markdown après le n-ième titre `## ` pour y insérer un
 * encart CTA. Retourne [avant, après] — `après` vaut null si l'article est
 * trop court (< n+1 titres h2) : dans ce cas, pas de CTA en milieu d'article.
 */
export function splitAfterNthH2(
  content: string,
  n = 2
): [string, string | null] {
  const lines = content.split("\n")
  let h2Count = 0
  let insideCodeFence = false
  let splitIndex = -1

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Ne jamais compter un `## ` situé dans un bloc de code clôturé
    if (/^(```|~~~)/.test(line.trim())) {
      insideCodeFence = !insideCodeFence
      continue
    }
    if (insideCodeFence) continue

    if (/^## /.test(line)) {
      // Ne pas couper juste avant la section FAQ : l'encart y serait déplacé
      // hors du fil de lecture
      if (/^## faq/i.test(line.trim())) break
      h2Count++
      // On coupe juste AVANT le (n+1)-ième h2 : le CTA s'insère entre la fin
      // de la n-ième section et le titre suivant
      if (h2Count === n + 1) {
        splitIndex = i
        break
      }
    }
  }

  if (splitIndex === -1) return [content, null]

  return [
    lines.slice(0, splitIndex).join("\n"),
    lines.slice(splitIndex).join("\n"),
  ]
}
