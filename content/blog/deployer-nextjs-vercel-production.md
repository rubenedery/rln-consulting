---
title: "Déployer Next.js sur Vercel : Guide Production Complet"
description: "CI/CD, environment variables, preview deployments, monitoring. Configuration Vercel utilisée par RLN Consulting."
date: "2026-03-30"
author: "Ruben Edery"
category: "developpement"
tags: ["next.js", "vercel", "deployment", "ci-cd", "production", "devops"]
image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=630&fit=crop&q=80"
---

## Pourquoi Vercel pour Next.js en Production ?

Vercel est la plateforme de déploiement créée par l'équipe derrière Next.js. Cette intégration native offre des avantages significatifs :

- **Zero-config** : Détection automatique de la configuration Next.js
- **Edge Network** : CDN global avec plus de 100 points de présence
- **Preview Deployments** : Chaque PR génère une URL de preview unique
- **Serverless Functions** : API Routes déployées automatiquement en fonctions edge

RLN Consulting déploie tous ses projets Next.js sur Vercel avec cette configuration depuis 2022. Ce guide partage notre setup production testé sur plus de 30 projets.

## Configuration Initiale

### Connexion du repository

```bash
# Installation de Vercel CLI
npm i -g vercel

# Login et liaison du projet
vercel login
vercel link
```

### Structure du projet recommandée

```
├── .github/
│   └── workflows/
│       ├── ci.yml              # Tests et lint avant merge
│       └── preview-cleanup.yml # Nettoyage des previews
├── .vercel/
│   └── project.json           # Généré automatiquement
├── vercel.json                 # Configuration personnalisée
├── next.config.js
└── package.json
```

## Configuration vercel.json Optimale

RLN Consulting utilise cette configuration sur tous ses projets production :

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm ci",
  "regions": ["cdg1"],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store, max-age=0" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/blog/ancien-article",
      "destination": "/blog/nouvel-article",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ],
  "crons": [
    {
      "path": "/api/cron/daily-cleanup",
      "schedule": "0 3 * * *"
    },
    {
      "path": "/api/cron/weekly-report",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

### Points clés de cette configuration

**Région `cdg1`** : Paris, pour minimiser la latence vers les utilisateurs français.

**Headers de sécurité** : Protection XSS, clickjacking, MIME sniffing par défaut sur toutes les pages.

**Cache immutable** : Les assets statiques (fonts, JS/CSS bundled) sont cachés indéfiniment avec `immutable`.

**Crons** : Vercel Pro permet les cron jobs, utile pour les tâches récurrentes (nettoyage, rapports).

## Gestion des Environment Variables

### Organisation des variables

Vercel propose 3 environnements : Production, Preview, Development.

```
# .env.local (développement local uniquement, jamais commité)
DATABASE_URL="postgresql://localhost/myapp_dev"
NEXTAUTH_SECRET="dev-secret-change-in-prod"
NEXTAUTH_URL="http://localhost:3000"

# Variables à configurer dans Vercel Dashboard
```

### Variables sensibles vs publiques

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Variables exposées au client (préfixe NEXT_PUBLIC_)
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  // Variables serveur seulement (pas de préfixe)
  // DATABASE_URL, NEXTAUTH_SECRET, API_KEYS... sont automatiquement serveur-only
}

module.exports = nextConfig
```

### Variables par environnement dans Vercel

```bash
# Via CLI
vercel env add DATABASE_URL production
vercel env add DATABASE_URL preview
vercel env add NEXTAUTH_SECRET production

# Lister les variables
vercel env ls

# Puller les variables pour le dev local
vercel env pull .env.local
```

### Pattern pour les secrets sensibles

```typescript
// lib/env.ts - Validation des variables d'environnement
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
  RESEND_API_KEY: z.string().startsWith('re_'),
  // Variables publiques
  NEXT_PUBLIC_API_URL: z.string().url(),
})

// Validation au démarrage
export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
})
```

## Preview Deployments

### Configuration automatique

Chaque push sur une branche (autre que main/master) génère automatiquement une preview deployment avec une URL unique.

```
https://monprojet-git-feature-login-monequipe.vercel.app
```

### Protection des previews

```json
// vercel.json
{
  "passwordProtection": {
    "vercel": true
  }
}
```

Ou via Vercel Dashboard : Settings → General → Password Protection.

### Commentaires GitHub automatiques

Vercel commente automatiquement chaque PR avec :
- Lien vers la preview
- Statut du build
- Logs en cas d'erreur

### Variables d'environnement pour les previews

Pour les previews, utilisez des bases de données de staging :

```
# Production
DATABASE_URL=postgresql://prod-server/myapp

# Preview (configuré séparément)
DATABASE_URL=postgresql://staging-server/myapp_preview
```

## CI/CD avec GitHub Actions

### Workflow de CI avant déploiement

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run TypeScript check
        run: npm run type-check

      - name: Run tests
        run: npm run test
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL_TEST }}

      - name: Build
        run: npm run build
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL_TEST }}
          NEXTAUTH_SECRET: ${{ secrets.NEXTAUTH_SECRET_TEST }}

  # Job optionnel : E2E tests avec Playwright
  e2e:
    runs-on: ubuntu-latest
    needs: lint-and-test

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npm run test:e2e
        env:
          BASE_URL: ${{ github.event.deployment_status.target_url }}
```

### Scripts package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "db:migrate": "prisma migrate deploy",
    "db:seed": "prisma db seed",
    "postinstall": "prisma generate"
  }
}
```

## Monitoring et Observabilité

### Vercel Analytics

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Intégration Sentry

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.VERCEL_ENV || 'development',
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})
```

```typescript
// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.VERCEL_ENV || 'development',
  tracesSampleRate: 1.0,
})
```

```typescript
// next.config.js
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // votre config
}

module.exports = withSentryConfig(nextConfig, {
  org: 'votre-org',
  project: 'votre-projet',
  silent: true,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
})
```

### Logs structurés avec Axiom

```typescript
// lib/logger.ts
import { Logger } from 'next-axiom'

export const log = new Logger()

// Utilisation dans une API Route
export async function POST(request: Request) {
  const log = new Logger({ source: 'api/orders' })

  try {
    const body = await request.json()
    log.info('Order created', { orderId: body.id, amount: body.amount })

    // ... logique

    return Response.json({ success: true })
  } catch (error) {
    log.error('Order creation failed', { error: String(error) })
    return Response.json({ error: 'Failed' }, { status: 500 })
  } finally {
    await log.flush()
  }
}
```

## Optimisations de Performance

### Configuration next.config.js optimisée

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations d'images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Compression
  compress: true,

  // Strict mode React
  reactStrictMode: true,

  // Optimisation des packages
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'date-fns',
    ],
  },

  // Headers de sécurité supplémentaires
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Caching avec ISR et on-demand revalidation

```typescript
// app/blog/[slug]/page.tsx
import { revalidatePath, revalidateTag } from 'next/cache'

// Génération statique avec revalidation
export const revalidate = 3600 // 1 heure

// Ou avec tags pour invalidation ciblée
async function getPost(slug: string) {
  const post = await db.post.findUnique({ where: { slug } })
  return post
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  // ...
}

// API Route pour invalider le cache
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const { secret, path, tag } = await request.json()

  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 })
  }

  if (path) {
    revalidatePath(path)
  }

  if (tag) {
    revalidateTag(tag)
  }

  return Response.json({ revalidated: true, now: Date.now() })
}
```

## Domaines et DNS

### Configuration du domaine custom

```bash
# Ajouter un domaine
vercel domains add monsite.com

# Vérifier la configuration DNS
vercel domains inspect monsite.com
```

### Configuration DNS recommandée

```
# Pour le domaine apex (monsite.com)
Type: A
Name: @
Value: 76.76.21.21

# Pour le www
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Redirection www vers apex

```json
// vercel.json
{
  "redirects": [
    {
      "source": "/:path((?!api/).*)",
      "has": [{ "type": "host", "value": "www.monsite.com" }],
      "destination": "https://monsite.com/:path",
      "permanent": true
    }
  ]
}
```

## Coûts et Plans Vercel

### Comparatif des plans

| Feature | Hobby (Gratuit) | Pro (20$/mois) | Enterprise |
|---------|----------------|-----------------|------------|
| Bandwidth | 100 GB | 1 TB | Illimité |
| Serverless Execution | 100 GB-hrs | 1000 GB-hrs | Custom |
| Build Minutes | 6000/mois | 24000/mois | Custom |
| Team Members | 1 | Illimité | Illimité |
| Preview Deployments | ✓ | ✓ | ✓ |
| Analytics | Basique | Avancé | Avancé |
| Password Protection | ✗ | ✓ | ✓ |
| SAML SSO | ✗ | ✗ | ✓ |

### Estimation pour un projet moyen

Un site vitrine/blog avec ~10k visiteurs/mois :
- **Hobby** suffit généralement

Une application SaaS avec ~50k utilisateurs actifs :
- **Pro** recommandé (~20-50$/mois selon usage)

RLN Consulting utilise le plan Pro pour tous ses projets clients, avec un coût moyen de 25-35$/mois par projet.

## Checklist de Déploiement Production

RLN Consulting utilise cette checklist avant chaque mise en production :

### Avant le déploiement

- [ ] Tests passent (unit + E2E)
- [ ] TypeScript sans erreurs (`npm run type-check`)
- [ ] ESLint sans erreurs (`npm run lint`)
- [ ] Build local réussi (`npm run build`)
- [ ] Variables d'environnement configurées dans Vercel
- [ ] Base de données migrée (`prisma migrate deploy`)

### Configuration Vercel

- [ ] Domaine configuré et SSL actif
- [ ] Headers de sécurité en place
- [ ] Analytics activé
- [ ] Sentry/monitoring configuré
- [ ] Password protection sur les previews (si données sensibles)

### Post-déploiement

- [ ] Vérifier les Core Web Vitals
- [ ] Tester les fonctionnalités critiques manuellement
- [ ] Vérifier les logs Vercel pour erreurs
- [ ] Confirmer que les crons s'exécutent (si applicable)
- [ ] Notifier l'équipe/client du déploiement

## Conclusion

Vercel offre la meilleure expérience de déploiement pour Next.js, avec une configuration minimale et des performances optimales. RLN Consulting déploie tous ses projets Next.js sur Vercel depuis 2022.

**Points clés à retenir :**

- **vercel.json** pour personnaliser headers, redirects, crons
- **Variables d'environnement** séparées par environnement
- **CI avec GitHub Actions** pour tests avant merge
- **Sentry + Vercel Analytics** pour le monitoring
- **Plan Pro** recommandé pour les projets clients (~25$/mois)

Cette stack de déploiement permet de livrer des projets Next.js robustes et performants, avec un workflow professionnel de CI/CD.

Pour vos projets Next.js nécessitant un déploiement production fiable, contactez RLN Consulting.
