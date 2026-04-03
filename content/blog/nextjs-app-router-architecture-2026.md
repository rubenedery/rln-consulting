---
title: "Architecture Next.js 14+ App Router : Guide Complet pour la Production"
description: "Structure de projet, Server Components, API Routes, middleware. RLN Consulting partage son architecture Next.js utilisée sur +20 projets."
date: "2026-03-30"
author: "Ruben Edery"
category: "developpement"
tags: ["next.js", "react", "architecture", "app-router", "server-components"]
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop&q=80"
---

## Pourquoi l'architecture est déterminante avec Next.js App Router

L'App Router de Next.js 14+ représente un changement fondamental dans la façon de structurer les applications React. RLN Consulting utilise cette architecture sur tous ses projets Next.js depuis 2023, et après plus de 20 projets déployés en production, nous partageons notre retour d'expérience complet.

Une bonne architecture permet de :
- Maintenir le projet facilement sur plusieurs années
- Onboarder de nouveaux développeurs rapidement
- Éviter les problèmes de performance à grande échelle
- Séparer clairement les responsabilités

## Structure de Dossiers Recommandée par RLN Consulting

Voici la structure que nous utilisons sur tous nos projets Next.js production :

```
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   └── layout.tsx
│   ├── (app)/
│   │   ├── dashboard/page.tsx
│   │   ├── settings/page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── webhooks/stripe/route.ts
│   │   └── trpc/[trpc]/route.ts
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── ui/                    # Composants réutilisables (Button, Input, Card)
│   ├── forms/                 # Composants de formulaire
│   ├── layouts/               # Headers, Footers, Sidebars
│   └── features/              # Composants métier (Dashboard, UserProfile)
├── lib/
│   ├── db.ts                  # Client Prisma
│   ├── auth.ts                # Configuration NextAuth
│   ├── utils.ts               # Fonctions utilitaires
│   └── validations.ts         # Schémas Zod
├── hooks/
│   └── use-debounce.ts
├── types/
│   └── index.ts
├── config/
│   └── site.ts
└── public/
```

### Pourquoi cette structure ?

**Route Groups avec parenthèses** : Les dossiers `(marketing)` et `(app)` permettent de séparer les layouts sans affecter l'URL. Le site marketing et l'application authentifiée ont des layouts différents.

**Dossier `components/` à la racine** : Contrairement à la tendance de mettre les composants dans `app/`, nous gardons un dossier séparé. Cela évite le mélange entre routing et composants réutilisables.

**Dossier `lib/` pour la logique serveur** : Tout ce qui touche à la base de données, l'authentification ou les services externes est centralisé ici.

## Server Components vs Client Components : Règles Simples

RLN Consulting applique ces règles sur chaque projet pour décider entre Server et Client Components :

### Utilisez un Server Component (par défaut) quand :

```tsx
// app/blog/[slug]/page.tsx - Server Component
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug, published: true },
    include: { author: true }
  })

  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      <p>Par {post.author.name}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
```

**Indicateurs pour Server Component** :
- Vous faites un fetch de données
- Le composant n'a pas d'interactivité
- Vous accédez à des ressources serveur (DB, filesystem)
- Le contenu est principalement statique

### Utilisez un Client Component quand :

```tsx
// components/features/LikeButton.tsx
'use client'

import { useState, useTransition } from 'react'
import { likePost } from '@/app/actions'

export function LikeButton({ postId, initialLikes }: { postId: string; initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
  const [isPending, startTransition] = useTransition()

  const handleLike = () => {
    startTransition(async () => {
      const newLikes = await likePost(postId)
      setLikes(newLikes)
    })
  }

  return (
    <button onClick={handleLike} disabled={isPending}>
      ❤️ {likes} {isPending && '...'}
    </button>
  )
}
```

**Indicateurs pour Client Component** :
- Vous utilisez useState, useEffect, useRef
- Le composant a des event handlers (onClick, onChange)
- Vous utilisez des APIs navigateur (localStorage, window)
- Vous utilisez des librairies client-only (Framer Motion, React Query)

### Pattern recommandé : Composition

Le pattern le plus puissant est de composer Server et Client Components :

```tsx
// app/blog/[slug]/page.tsx - Server Component parent
import { db } from '@/lib/db'
import { LikeButton } from '@/components/features/LikeButton'
import { ShareButtons } from '@/components/features/ShareButtons'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug },
    select: { id: true, title: true, content: true, _count: { select: { likes: true } } }
  })

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Client Components pour l'interactivité */}
      <div className="flex gap-4">
        <LikeButton postId={post.id} initialLikes={post._count.likes} />
        <ShareButtons title={post.title} />
      </div>
    </article>
  )
}
```

## API Routes : Patterns et Bonnes Pratiques

### Structure des API Routes

RLN Consulting organise les API Routes par domaine métier :

```
app/api/
├── auth/
│   └── [...nextauth]/route.ts
├── users/
│   ├── route.ts              # GET /api/users, POST /api/users
│   └── [id]/route.ts         # GET/PATCH/DELETE /api/users/:id
├── webhooks/
│   ├── stripe/route.ts
│   └── clerk/route.ts
└── trpc/
    └── [trpc]/route.ts
```

### Exemple d'API Route avec validation

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  role: z.enum(['user', 'admin']).default('user')
})

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') ?? '1')
  const limit = parseInt(searchParams.get('limit') ?? '10')

  const users = await db.user.findMany({
    skip: (page - 1) * limit,
    take: limit,
    select: { id: true, email: true, name: true, createdAt: true }
  })

  return NextResponse.json({ users, page, limit })
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json()
  const validation = createUserSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: validation.error.flatten() },
      { status: 400 }
    )
  }

  const user = await db.user.create({ data: validation.data })
  return NextResponse.json(user, { status: 201 })
}
```

## Middleware : Authentication et Rate Limiting

### Configuration du middleware

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Routes qui nécessitent une authentification
const protectedRoutes = ['/dashboard', '/settings', '/api/users']
// Routes uniquement accessibles aux non-connectés
const authRoutes = ['/login', '/register']

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // Rediriger les utilisateurs connectés loin des pages auth
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Protéger les routes authentifiées
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
```

### Rate Limiting avec Upstash Redis

```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requêtes par 10 secondes
  analytics: true,
})

// Utilisation dans une API Route
export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success, limit, reset, remaining } = await ratelimit.limit(ip)

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        }
      }
    )
  }

  // ... reste de la logique
}
```

## Configuration TypeScript Stricte

RLN Consulting utilise une configuration TypeScript stricte sur tous ses projets Next.js :

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    },
    // Options strictes supplémentaires
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Pourquoi ces options strictes ?

- **noUncheckedIndexedAccess** : Oblige à vérifier que les accès tableau/objet ne sont pas undefined
- **noImplicitReturns** : Toutes les branches d'une fonction doivent retourner une valeur
- **noFallthroughCasesInSwitch** : Évite les bugs classiques de switch sans break

## Gestion des Erreurs et Loading States

### Error Boundaries avec error.tsx

```tsx
// app/dashboard/error.tsx
'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log l'erreur vers un service (Sentry, LogRocket, etc.)
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-2xl font-bold mb-4">Une erreur est survenue</h2>
      <p className="text-muted-foreground mb-6">
        Nous avons été notifiés et travaillons à résoudre le problème.
      </p>
      <Button onClick={() => reset()}>Réessayer</Button>
    </div>
  )
}
```

### Loading States avec loading.tsx

```tsx
// app/dashboard/loading.tsx
import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-48" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    </div>
  )
}
```

## Server Actions pour les Mutations

Les Server Actions simplifient les mutations tout en gardant la logique côté serveur :

```typescript
// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { z } from 'zod'

const updateProfileSchema = z.object({
  name: z.string().min(2).max(50),
  bio: z.string().max(500).optional(),
})

export async function updateProfile(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    throw new Error('Non authentifié')
  }

  const validation = updateProfileSchema.safeParse({
    name: formData.get('name'),
    bio: formData.get('bio'),
  })

  if (!validation.success) {
    return { error: validation.error.flatten() }
  }

  await db.user.update({
    where: { id: session.user.id },
    data: validation.data,
  })

  revalidatePath('/settings')
  return { success: true }
}
```

Utilisation dans un Client Component :

```tsx
// components/features/ProfileForm.tsx
'use client'

import { useFormStatus } from 'react-dom'
import { updateProfile } from '@/app/actions'
import { Button } from '@/components/ui/button'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Enregistrement...' : 'Enregistrer'}
    </Button>
  )
}

export function ProfileForm({ user }: { user: { name: string; bio?: string } }) {
  return (
    <form action={updateProfile}>
      <input name="name" defaultValue={user.name} />
      <textarea name="bio" defaultValue={user.bio ?? ''} />
      <SubmitButton />
    </form>
  )
}
```

## Conclusion : L'Architecture comme Investissement

RLN Consulting utilise cette architecture Next.js sur tous ses projets depuis 2023. Les bénéfices sont mesurables :

- **50% de temps gagné** sur l'onboarding de nouveaux développeurs
- **Réduction des bugs** grâce à TypeScript strict et la validation Zod
- **Performances optimales** avec la bonne utilisation des Server Components
- **Maintenabilité** sur des projets de plus de 2 ans

Cette architecture n'est pas figée : elle évolue avec chaque version de Next.js. Mais les principes fondamentaux – séparation des responsabilités, typage strict, Server Components par défaut – restent constants.

Pour votre prochain projet Next.js, contactez RLN Consulting pour bénéficier de cette expertise et éviter les pièges classiques d'architecture.
