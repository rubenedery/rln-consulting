/**
 * Convertisseur HTML → Markdown pour la négociation de contenu (acceptmarkdown.com).
 *
 * Pourquoi maison plutôt qu'une dépendance (turndown & co) : on ne convertit que
 * notre propre HTML, produit par React côté serveur — donc toujours bien formé et
 * sans les cas tordus du web ouvert. Un parseur de ~200 lignes évite d'embarquer
 * une lib + jsdom dans le bundle serveur, et surtout il garantit une couverture
 * automatique : toute page ajoutée au site devient lisible par un agent sans
 * qu'on ait à écrire un « builder markdown » de plus.
 */

// Balises sans contenu : le parseur ne doit pas leur chercher de fermeture.
const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
])

// Balises dont le contenu n'a aucun sens pour un lecteur : on les jette avec
// leur sous-arbre (les <svg> sont décoratifs, les <script> sont du bruit).
const DROPPED_TAGS = new Set(["script", "style", "svg", "noscript", "template", "iframe"])

type TextNode = { type: "text"; value: string }
type ElementNode = {
  type: "element"
  tag: string
  attrs: Record<string, string>
  children: Node[]
}
type Node = TextNode | ElementNode

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  eacute: "é", egrave: "è", ecirc: "ê", agrave: "à", ccedil: "ç",
  ugrave: "ù", ocirc: "ô", icirc: "î", euro: "€", hellip: "…",
  laquo: "«", raquo: "»", rsquo: "’", lsquo: "‘", mdash: "—", ndash: "–",
}

export function decodeEntities(input: string): string {
  return input.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity: string) => {
    if (entity.startsWith("#x") || entity.startsWith("#X")) {
      return String.fromCodePoint(parseInt(entity.slice(2), 16))
    }
    if (entity.startsWith("#")) {
      return String.fromCodePoint(parseInt(entity.slice(1), 10))
    }
    return NAMED_ENTITIES[entity.toLowerCase()] ?? match
  })
}

function parseAttributes(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {}
  const attrPattern = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g
  let match: RegExpExecArray | null
  while ((match = attrPattern.exec(raw)) !== null) {
    attrs[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "")
  }
  return attrs
}

/**
 * Parse un fragment HTML en arbre. Les balises mal fermées ne font pas planter :
 * une fermeture orpheline est ignorée, une ouverture jamais fermée se referme
 * implicitement à la fin du fragment.
 */
function parseHtml(html: string): Node[] {
  const root: ElementNode = { type: "element", tag: "#root", attrs: {}, children: [] }
  const stack: ElementNode[] = [root]
  const tokenPattern = /<!--[\s\S]*?-->|<\/?([a-zA-Z][-a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^>])*)>/g

  let cursor = 0
  let match: RegExpExecArray | null

  const pushText = (value: string) => {
    if (!value) return
    stack[stack.length - 1].children.push({ type: "text", value: decodeEntities(value) })
  }

  while ((match = tokenPattern.exec(html)) !== null) {
    pushText(html.slice(cursor, match.index))
    cursor = tokenPattern.lastIndex

    if (match[0].startsWith("<!--")) continue

    const tag = match[1].toLowerCase()
    const isClosing = match[0].startsWith("</")

    if (isClosing) {
      // Remonter jusqu'à l'ouverture correspondante, si elle existe.
      const openIndex = stack.findLastIndex((node) => node.tag === tag)
      if (openIndex > 0) stack.length = openIndex
      continue
    }

    const selfClosing = match[2].trimEnd().endsWith("/") || VOID_TAGS.has(tag)
    const element: ElementNode = { type: "element", tag, attrs: parseAttributes(match[2]), children: [] }
    stack[stack.length - 1].children.push(element)
    if (!selfClosing) stack.push(element)
  }

  pushText(html.slice(cursor))
  return root.children
}

/** Texte brut d'un sous-arbre, entités décodées et espaces normalisés. */
function textOf(nodes: Node[]): string {
  return nodes
    .map((node) => (node.type === "text" ? node.value : textOf(node.children)))
    .join("")
    .replace(/\s+/g, " ")
}

function isHidden(node: ElementNode): boolean {
  return (
    node.attrs["aria-hidden"] === "true" ||
    node.attrs.hidden !== undefined ||
    // Utilitaire Tailwind du projet pour le contenu réservé aux lecteurs d'écran :
    // il fait doublon avec le texte visible et pollue le markdown.
    /(^|\s)sr-only(\s|$)/.test(node.attrs.class ?? "")
  )
}

function escapeInline(text: string): string {
  // On n'échappe que ce qui pourrait être relu comme du balisage en début de
  // ligne ; sur-échapper rendrait le markdown pénible à lire pour un humain.
  return text.replace(/([[\]])/g, "\\$1")
}

type RenderOptions = { baseUrl?: string }

function absolutize(href: string, baseUrl?: string): string {
  if (!baseUrl || !href) return href
  try {
    return new URL(href, baseUrl).toString()
  } catch {
    return href
  }
}

/** Rend les enfants d'un nœud en markdown inline (liens, emphase, code). */
function renderInline(nodes: Node[], options: RenderOptions): string {
  let out = ""
  for (const node of nodes) {
    if (node.type === "text") {
      out += escapeInline(node.value.replace(/\s+/g, " "))
      continue
    }
    if (DROPPED_TAGS.has(node.tag) || isHidden(node)) continue

    switch (node.tag) {
      case "br":
        out += "\n"
        break
      case "strong":
      case "b": {
        const inner = renderInline(node.children, options).trim()
        out += inner ? `**${inner}**` : ""
        break
      }
      case "em":
      case "i": {
        const inner = renderInline(node.children, options).trim()
        out += inner ? `*${inner}*` : ""
        break
      }
      case "code": {
        const inner = textOf(node.children).trim()
        out += inner ? `\`${inner}\`` : ""
        break
      }
      case "a": {
        const label = renderInline(node.children, options).trim()
        const href = node.attrs.href ?? ""
        // Un lien sans libellé (icône seule) n'apporte rien à un agent.
        out += label ? (href ? `[${label}](${absolutize(href, options.baseUrl)})` : label) : ""
        break
      }
      case "img": {
        const alt = node.attrs.alt?.trim()
        if (alt) out += `![${alt}](${absolutize(node.attrs.src ?? "", options.baseUrl)})`
        break
      }
      default:
        out += renderInline(node.children, options)
    }
  }
  return out
}

function renderTable(node: ElementNode, options: RenderOptions): string {
  const rows: string[][] = []
  const collectRows = (nodes: Node[]) => {
    for (const child of nodes) {
      if (child.type !== "element") continue
      if (child.tag === "tr") {
        rows.push(
          child.children
            .filter((cell): cell is ElementNode => cell.type === "element" && (cell.tag === "td" || cell.tag === "th"))
            .map((cell) => renderInline(cell.children, options).replace(/\|/g, "\\|").trim())
        )
      } else {
        collectRows(child.children)
      }
    }
  }
  collectRows(node.children)
  if (rows.length === 0) return ""

  const width = Math.max(...rows.map((row) => row.length))
  const pad = (row: string[]) => [...row, ...Array(width - row.length).fill("")]
  const [header, ...body] = rows
  return [
    `| ${pad(header).join(" | ")} |`,
    `| ${Array(width).fill("---").join(" | ")} |`,
    ...body.map((row) => `| ${pad(row).join(" | ")} |`),
  ].join("\n")
}

/** Rend une liste de nœuds en blocs markdown séparés par des lignes vides. */
function renderBlocks(nodes: Node[], options: RenderOptions, depth = 0): string[] {
  const blocks: string[] = []

  for (const node of nodes) {
    if (node.type === "text") {
      const value = node.value.trim()
      if (value) blocks.push(escapeInline(value))
      continue
    }
    if (DROPPED_TAGS.has(node.tag) || isHidden(node)) continue

    switch (node.tag) {
      case "h1": case "h2": case "h3": case "h4": case "h5": case "h6": {
        const inner = renderInline(node.children, options).trim()
        if (inner) blocks.push(`${"#".repeat(Number(node.tag[1]))} ${inner}`)
        break
      }
      case "p": {
        const inner = renderInline(node.children, options).trim()
        if (inner) blocks.push(inner)
        break
      }
      case "ul":
      case "ol": {
        const items = node.children.filter(
          (child): child is ElementNode => child.type === "element" && child.tag === "li"
        )
        const rendered = items
          .map((item, index) => {
            const marker = node.tag === "ol" ? `${index + 1}.` : "-"
            const content = renderBlocks(item.children, options, depth + 1).join("\n\n").trim()
            if (!content) return ""
            // Les lignes suivantes d'un item sont indentées pour rester dans l'item.
            const indented = content.split("\n").join(`\n${" ".repeat(marker.length + 1)}`)
            return `${marker} ${indented}`
          })
          .filter(Boolean)
        if (rendered.length > 0) blocks.push(rendered.join("\n"))
        break
      }
      case "pre": {
        const code = textOf(node.children).trim()
        // Une fence contenant elle-même ``` casserait le document côté agent :
        // on allonge la clôture jusqu'à ce qu'elle soit sans ambiguïté.
        if (code) {
          const longest = (code.match(/`+/g) ?? []).reduce((max, run) => Math.max(max, run.length), 0)
          const fence = "`".repeat(Math.max(3, longest + 1))
          blocks.push(`${fence}\n${code}\n${fence}`)
        }
        break
      }
      case "blockquote": {
        const inner = renderBlocks(node.children, options, depth).join("\n\n").trim()
        if (inner) blocks.push(inner.split("\n").map((line) => `> ${line}`).join("\n"))
        break
      }
      case "table": {
        const table = renderTable(node, options)
        if (table) blocks.push(table)
        break
      }
      case "hr":
        blocks.push("---")
        break
      case "br":
        break
      default:
        blocks.push(...renderBlocks(node.children, options, depth))
    }
  }

  return blocks
}

/** Extrait le contenu d'un élément identifié par un attribut (ex. id="main-content"). */
export function extractElement(html: string, matcher: RegExp): string | null {
  const openMatch = matcher.exec(html)
  if (!openMatch) return null

  const tagName = /<([a-zA-Z][-a-zA-Z0-9]*)/.exec(openMatch[0])?.[1]?.toLowerCase()
  if (!tagName) return null

  // Compter les ouvertures/fermetures du même tag pour trouver la vraie fermeture.
  const scanner = new RegExp(`<${tagName}\\b[^>]*>|</${tagName}>`, "gi")
  scanner.lastIndex = openMatch.index
  let depth = 0
  let match: RegExpExecArray | null
  while ((match = scanner.exec(html)) !== null) {
    depth += match[0].startsWith("</") ? -1 : 1
    if (depth === 0) return html.slice(openMatch.index + openMatch[0].length, match.index)
  }
  return html.slice(openMatch.index + openMatch[0].length)
}

/** Convertit un fragment HTML en markdown. */
export function htmlToMarkdown(html: string, options: RenderOptions = {}): string {
  return renderBlocks(parseHtml(html), options)
    .join("\n\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}
