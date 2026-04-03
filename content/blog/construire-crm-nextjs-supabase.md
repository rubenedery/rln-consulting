---
title: "Construire un CRM Custom avec Next.js + Supabase : Guide Technique"
description: "Architecture, database schema, auth, real-time. RLN Consulting détaille la construction d'un CRM custom en 6 semaines."
date: "2026-03-30"
author: "Ruben Edery"
category: "developpement"
tags: ["crm", "next.js", "supabase", "postgresql", "real-time", "custom"]
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&q=80"
---

## Pourquoi construire un CRM custom plutôt qu'utiliser HubSpot ou Salesforce ?

Un CRM sur-mesure répond à des besoins que les solutions SaaS ne couvrent pas : workflows métier spécifiques, intégrations profondes avec vos outils existants, et contrôle total sur vos données.

Ce guide est basé sur le CRM développé par RLN Consulting pour plusieurs clients PME, livré en 6 semaines en moyenne. Nous utilisons Next.js pour le frontend/backend et Supabase pour la base de données, l'authentification et le real-time.

**Avantages de cette stack :**

- **Supabase** : PostgreSQL managé + Auth + Real-time + Storage
- **Next.js App Router** : Server Components + API Routes + Server Actions
- **Coût réduit** : ~20€/mois pour une PME vs 500€+/mois sur HubSpot Pro
- **Propriété des données** : Export SQL standard, pas de vendor lock-in

## Architecture Globale du CRM

### Structure des pages

```
app/
├── (auth)/
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── layout.tsx
├── (dashboard)/
│   ├── layout.tsx                 # Sidebar + Header
│   ├── page.tsx                   # Dashboard principal
│   ├── contacts/
│   │   ├── page.tsx               # Liste des contacts
│   │   ├── [id]/page.tsx          # Fiche contact
│   │   └── new/page.tsx           # Nouveau contact
│   ├── companies/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── deals/
│   │   ├── page.tsx               # Pipeline Kanban
│   │   └── [id]/page.tsx
│   ├── activities/page.tsx        # Timeline d'activités
│   └── settings/
│       ├── page.tsx
│       ├── team/page.tsx
│       └── integrations/page.tsx
└── api/
    ├── webhooks/
    │   └── stripe/route.ts
    └── cron/
        └── daily-digest/route.ts
```

### Structure des composants

```
components/
├── ui/                            # shadcn/ui components
│   ├── button.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── ...
├── layouts/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   └── MobileNav.tsx
├── features/
│   ├── contacts/
│   │   ├── ContactCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactList.tsx
│   │   └── ContactFilters.tsx
│   ├── deals/
│   │   ├── DealCard.tsx
│   │   ├── DealPipeline.tsx       # Kanban board
│   │   └── DealForm.tsx
│   └── activities/
│       ├── ActivityTimeline.tsx
│       └── ActivityForm.tsx
└── shared/
    ├── SearchInput.tsx
    ├── Pagination.tsx
    └── EmptyState.tsx
```

## Database Schema Supabase (PostgreSQL)

### Configuration initiale

```sql
-- Activer les extensions nécessaires
create extension if not exists "uuid-ossp";

-- Enum pour les statuts et stages
create type contact_status as enum ('lead', 'qualified', 'customer', 'churned');
create type deal_stage as enum ('lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost');
create type activity_type as enum ('call', 'email', 'meeting', 'task', 'note');

-- Table des organisations (multi-tenant)
create table organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  logo_url text,
  created_at timestamptz default now()
);

-- Table des profils utilisateurs (liée à auth.users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  organization_id uuid references organizations(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  role text default 'member' check (role in ('owner', 'admin', 'member')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Table des entreprises/comptes
create table companies (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  domain text,
  industry text,
  size text check (size in ('solo', 'small', 'medium', 'large', 'enterprise')),
  website text,
  phone text,
  address text,
  city text,
  country text default 'France',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(organization_id, domain)
);

-- Table des contacts
create table contacts (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  company_id uuid references companies(id) on delete set null,
  created_by_id uuid references profiles(id),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  title text,
  status contact_status default 'lead',
  source text,
  tags text[] default '{}',
  custom_fields jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(organization_id, email)
);

-- Table des deals/opportunités
create table deals (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  contact_id uuid not null references contacts(id) on delete cascade,
  company_id uuid references companies(id) on delete set null,
  owner_id uuid not null references profiles(id),
  name text not null,
  value numeric(12,2) not null default 0,
  currency text default 'EUR',
  stage deal_stage default 'lead',
  probability integer default 10 check (probability >= 0 and probability <= 100),
  expected_close_date date,
  closed_at timestamptz,
  lost_reason text,
  tags text[] default '{}',
  custom_fields jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Table des activités
create table activities (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  user_id uuid not null references profiles(id),
  contact_id uuid references contacts(id) on delete cascade,
  deal_id uuid references deals(id) on delete cascade,
  type activity_type not null,
  subject text not null,
  description text,
  due_date timestamptz,
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- Table des notes
create table notes (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  user_id uuid not null references profiles(id),
  contact_id uuid references contacts(id) on delete cascade,
  deal_id uuid references deals(id) on delete cascade,
  content text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Index pour les performances
create index idx_contacts_org on contacts(organization_id);
create index idx_contacts_email on contacts(email);
create index idx_contacts_status on contacts(organization_id, status);
create index idx_deals_org_stage on deals(organization_id, stage);
create index idx_deals_owner on deals(owner_id);
create index idx_activities_user on activities(user_id, due_date);
```

### Row Level Security (RLS)

```sql
-- Activer RLS sur toutes les tables
alter table organizations enable row level security;
alter table profiles enable row level security;
alter table companies enable row level security;
alter table contacts enable row level security;
alter table deals enable row level security;
alter table activities enable row level security;
alter table notes enable row level security;

-- Fonction helper pour obtenir l'org_id de l'utilisateur courant
create or replace function get_user_org_id()
returns uuid as $$
  select organization_id from profiles where id = auth.uid()
$$ language sql security definer;

-- Policies pour les contacts (exemple)
create policy "Users can view contacts in their organization"
  on contacts for select
  using (organization_id = get_user_org_id());

create policy "Users can insert contacts in their organization"
  on contacts for insert
  with check (organization_id = get_user_org_id());

create policy "Users can update contacts in their organization"
  on contacts for update
  using (organization_id = get_user_org_id());

create policy "Admins can delete contacts"
  on contacts for delete
  using (
    organization_id = get_user_org_id()
    and exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('owner', 'admin')
    )
  );

-- Appliquer des policies similaires pour les autres tables
```

## Authentification avec Supabase Auth

### Configuration du client Supabase

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// lib/supabase/server.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}
```

### Middleware d'authentification

```typescript
// middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  // Rediriger vers login si non authentifié sur les routes protégées
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Rediriger vers dashboard si déjà authentifié sur les pages auth
  if (user && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
```

### Page de connexion

```tsx
// app/(auth)/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <h1 className="text-2xl font-bold text-center">Connexion au CRM</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">ou</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
          Continuer avec Google
        </Button>
      </div>
    </div>
  )
}
```

## Pipeline de Deals avec Drag & Drop

### Composant Kanban

```tsx
// components/features/deals/DealPipeline.tsx
'use client'

import { useState, useOptimistic } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCorners,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Deal, DealStage } from '@/types'
import { updateDealStage } from '@/app/actions/deals'
import { DealCard } from './DealCard'
import { PipelineColumn } from './PipelineColumn'

const STAGES: { id: DealStage; label: string; color: string }[] = [
  { id: 'lead', label: 'Leads', color: 'bg-gray-100' },
  { id: 'qualified', label: 'Qualifiés', color: 'bg-blue-100' },
  { id: 'proposal', label: 'Proposition', color: 'bg-yellow-100' },
  { id: 'negotiation', label: 'Négociation', color: 'bg-orange-100' },
  { id: 'won', label: 'Gagnés', color: 'bg-green-100' },
  { id: 'lost', label: 'Perdus', color: 'bg-red-100' },
]

interface DealPipelineProps {
  initialDeals: Deal[]
}

export function DealPipeline({ initialDeals }: DealPipelineProps) {
  const [deals, setDeals] = useState(initialDeals)
  const [activeDeal, setActiveDeal] = useState<Deal | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    const deal = deals.find((d) => d.id === event.active.id)
    if (deal) setActiveDeal(deal)
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    setActiveDeal(null)

    if (!over) return

    const dealId = active.id as string
    const newStage = over.id as DealStage

    const deal = deals.find((d) => d.id === dealId)
    if (!deal || deal.stage === newStage) return

    // Mise à jour optimiste
    setDeals((prev) =>
      prev.map((d) => (d.id === dealId ? { ...d, stage: newStage } : d))
    )

    // Mise à jour serveur
    const result = await updateDealStage(dealId, newStage)
    if (result.error) {
      // Rollback en cas d'erreur
      setDeals((prev) =>
        prev.map((d) => (d.id === dealId ? { ...d, stage: deal.stage } : d))
      )
    }
  }

  const dealsByStage = STAGES.reduce((acc, stage) => {
    acc[stage.id] = deals.filter((deal) => deal.stage === stage.id)
    return acc
  }, {} as Record<DealStage, Deal[]>)

  const totalByStage = STAGES.reduce((acc, stage) => {
    acc[stage.id] = dealsByStage[stage.id].reduce((sum, deal) => sum + deal.value, 0)
    return acc
  }, {} as Record<DealStage, number>)

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map((stage) => (
          <PipelineColumn
            key={stage.id}
            id={stage.id}
            title={stage.label}
            count={dealsByStage[stage.id].length}
            total={totalByStage[stage.id]}
            color={stage.color}
          >
            <SortableContext
              items={dealsByStage[stage.id].map((d) => d.id)}
              strategy={verticalListSortingStrategy}
            >
              {dealsByStage[stage.id].map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </SortableContext>
          </PipelineColumn>
        ))}
      </div>

      <DragOverlay>
        {activeDeal && <DealCard deal={activeDeal} isDragging />}
      </DragOverlay>
    </DndContext>
  )
}
```

### Server Action pour la mise à jour

```typescript
// app/actions/deals.ts
'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { DealStage } from '@/types'

export async function updateDealStage(dealId: string, newStage: DealStage) {
  const supabase = await createServerSupabaseClient()

  const updateData: { stage: DealStage; closed_at?: string | null } = {
    stage: newStage,
  }

  // Si gagné ou perdu, enregistrer la date de clôture
  if (newStage === 'won' || newStage === 'lost') {
    updateData.closed_at = new Date().toISOString()
  } else {
    updateData.closed_at = null
  }

  const { error } = await supabase
    .from('deals')
    .update(updateData)
    .eq('id', dealId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/deals')
  return { success: true }
}
```

## Real-time Subscriptions

### Hook pour les mises à jour en temps réel

```typescript
// hooks/use-realtime-deals.ts
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Deal } from '@/types'
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'

export function useRealtimeDeals(initialDeals: Deal[]) {
  const [deals, setDeals] = useState(initialDeals)
  const supabase = createClient()

  useEffect(() => {
    const channel = supabase
      .channel('deals-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'deals',
        },
        (payload: RealtimePostgresChangesPayload<Deal>) => {
          if (payload.eventType === 'INSERT') {
            setDeals((prev) => [...prev, payload.new as Deal])
          } else if (payload.eventType === 'UPDATE') {
            setDeals((prev) =>
              prev.map((deal) =>
                deal.id === payload.new.id ? (payload.new as Deal) : deal
              )
            )
          } else if (payload.eventType === 'DELETE') {
            setDeals((prev) =>
              prev.filter((deal) => deal.id !== payload.old.id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase])

  return deals
}
```

### Utilisation dans le composant

```tsx
// app/(dashboard)/deals/page.tsx
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { DealPipelineRealtime } from '@/components/features/deals/DealPipelineRealtime'

export default async function DealsPage() {
  const supabase = await createServerSupabaseClient()

  const { data: deals } = await supabase
    .from('deals')
    .select(`
      *,
      contact:contacts(id, first_name, last_name, email),
      company:companies(id, name),
      owner:profiles(id, full_name, avatar_url)
    `)
    .order('created_at', { ascending: false })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Pipeline des deals</h1>
      <DealPipelineRealtime initialDeals={deals ?? []} />
    </div>
  )
}
```

## Dashboard avec Statistiques

```tsx
// app/(dashboard)/page.tsx
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RecentActivities } from '@/components/features/activities/RecentActivities'

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()

  // Statistiques en parallèle
  const [dealsStats, contactsCount, activitiesCount, recentDeals] = await Promise.all([
    // Valeur totale du pipeline
    supabase
      .from('deals')
      .select('value, stage')
      .not('stage', 'in', '("won","lost")'),

    // Nombre de contacts
    supabase
      .from('contacts')
      .select('id', { count: 'exact', head: true }),

    // Activités à venir
    supabase
      .from('activities')
      .select('id', { count: 'exact', head: true })
      .is('completed_at', null)
      .gte('due_date', new Date().toISOString()),

    // Derniers deals
    supabase
      .from('deals')
      .select('*, contact:contacts(first_name, last_name)')
      .order('created_at', { ascending: false })
      .limit(5),
  ])

  const pipelineValue = dealsStats.data?.reduce((sum, deal) => sum + deal.value, 0) ?? 0
  const pipelineCount = dealsStats.data?.length ?? 0

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pipeline actif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              }).format(pipelineValue)}
            </div>
            <p className="text-xs text-muted-foreground">{pipelineCount} deals en cours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactsCount.count}</div>
            <p className="text-xs text-muted-foreground">dans la base</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Activités
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activitiesCount.count}</div>
            <p className="text-xs text-muted-foreground">à venir</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Derniers deals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentDeals.data?.map((deal) => (
                <li key={deal.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{deal.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {deal.contact?.first_name} {deal.contact?.last_name}
                    </p>
                  </div>
                  <span className="font-semibold">
                    {new Intl.NumberFormat('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(deal.value)}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <RecentActivities />
      </div>
    </div>
  )
}
```

## Délai et Coûts de Développement

RLN Consulting a développé ce type de CRM pour plusieurs clients PME. Voici les délais moyens :

| Phase | Durée | Description |
|-------|-------|-------------|
| Setup & Auth | 1 semaine | Projet Next.js, Supabase, authentification |
| Contacts & Companies | 1 semaine | CRUD complet, recherche, filtres |
| Deals & Pipeline | 1.5 semaine | Kanban drag & drop, real-time |
| Activities & Notes | 1 semaine | Timeline, tâches, rappels |
| Dashboard & Reports | 1 semaine | Statistiques, graphiques |
| Tests & Deploy | 0.5 semaine | Tests, CI/CD, mise en production |

**Total : 6 semaines** pour un CRM fonctionnel avec les features essentielles.

**Coûts d'hébergement mensuels :**
- Supabase Pro : 25$/mois
- Vercel Pro : 20$/mois
- Domain + Email : 10$/mois
- **Total : ~55€/mois** vs 500€+/mois pour HubSpot Pro

## Conclusion

Construire un CRM custom avec Next.js et Supabase est un investissement rentable pour les PME ayant des besoins spécifiques. Cette stack offre :

- **Flexibilité totale** sur les fonctionnalités
- **Coûts maîtrisés** et prévisibles
- **Performance** grâce aux Server Components et PostgreSQL
- **Real-time** natif pour la collaboration

RLN Consulting accompagne les entreprises dans la conception et le développement de CRM sur-mesure. Contactez-nous pour discuter de votre projet.
