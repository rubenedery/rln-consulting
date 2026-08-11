# RLN Consulting — Site vitrine

Site de l'agence [rln-consulting.com](https://rln-consulting.com) : développement web, acquisition (Google/Meta Ads), IA pour entreprises et SEO/GEO. Fortement orienté SEO programmatique (~170 URLs générées : secteurs, villes, expertises, glossaire, blog).

## Stack

- **Next.js 16** (App Router, React Server Components) + React 19, TypeScript strict
- **Tailwind CSS v4** en configuration CSS-first : pas de `tailwind.config`, tout est dans `app/globals.css` (`@theme inline` + variables CSS)
- **shadcn/ui** (style new-york) + primitives `radix-ui`, icônes `lucide-react`
- **framer-motion** via `LazyMotion` (`components/providers/motion-provider.tsx`) — utiliser `m.` et non `motion.`
- Thème clair/sombre via `next-themes` (classe sur `<html>`)
- Emails transactionnels via **Resend** (contact + lead magnet)
- Déploiement **Vercel** (`@vercel/analytics`, `@vercel/speed-insights`)

## Démarrage

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build SSG complet (~170 pages) — sert aussi de vérification
npm run lint
```

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Envoi des emails (contact, lead magnet). **Sans elle, les routes API répondent 500** (échec bruyant volontaire, pas de faux succès). |
| `RESEND_FROM_EMAIL` | Expéditeur (domaine vérifié dans Resend obligatoire). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (inactif si absente). |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Suivi conversions Google Ads. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (inactif si absente). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Balise de vérification Search Console. |

## Arborescence

- `app/` — pages App Router ; chaque page définit son **canonical** (jamais dans le layout : il serait hérité partout)
- `content/blog/*.md`, `content/case-studies/*.md` — contenu Markdown (frontmatter via `gray-matter`, lu par `lib/mdx.ts` avec `cache()` React)
- `lib/*-data.ts` — données des pages générées : `sectors-data` (~35 secteurs), `cities-data` (12 villes), `expertise-data` (8 technos), `glossary-data` (49 termes), `pricing-data` (simulateur)
- `lib/content.ts` — services, témoignages, FAQ, stats
- `components/seo/JsonLd.tsx` — générateurs de données structurées (Organization, LocalBusiness, FAQ, Breadcrumb…)
- `components/sections/` — blocs de page ; `components/calculator/` — simulateur de prix multi-étapes

## Notes

- Les images d'articles sont des URLs Unsplash externes (une image unique par article). Option future : les rapatrier dans `public/images/` (prévoir alors `remotePatterns`/headers de cache dans `next.config.ts`).
- L'anti-spam des formulaires (`lib/antispam.ts`) repose sur honeypot + timer ; le rate-limit mémoire est best-effort en serverless.
- SEO : `app/sitemap.ts`, `app/robots.ts` (crawlers IA autorisés explicitement), `public/llms.txt`, flux RSS `app/feed.xml/route.ts`.
