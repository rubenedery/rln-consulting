---
title: "Next.js + Prisma + PostgreSQL : Le Guide Complet du Backend"
description: "Schéma DB, relations, migrations, type safety. Stack backend utilisée par RLN Consulting pour ses CRM et applications métier."
date: "2026-03-30"
author: "Ruben Edery"
category: "developpement"
tags: ["next.js", "prisma", "postgresql", "backend", "database", "typescript"]
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=630&fit=crop&q=80"
---

## Pourquoi Next.js + Prisma + PostgreSQL ?

Cette stack est devenue le standard pour les applications métier modernes. RLN Consulting recommande cette stack pour tout projet nécessitant une base de données robuste avec une excellente developer experience.

**Les avantages de cette combinaison :**

- **Type safety end-to-end** : Les types Prisma se propagent jusqu'aux composants React
- **Migrations automatiques** : Versionning du schéma DB intégré
- **Performance** : Connection pooling et query optimization natifs
- **Productivité** : API intuitive et auto-complétion parfaite dans l'IDE

RLN Consulting utilise cette stack depuis 2021 sur plus de 15 projets CRM et applications métier en production.

## Installation et Configuration

### 1. Initialisation du projet

```bash
# Créer un nouveau projet Next.js
npx create-next-app@latest mon-app --typescript --tailwind --app

# Ajouter Prisma
cd mon-app
npm install prisma @prisma/client
npx prisma init
```

### 2. Configuration de la connexion PostgreSQL

```env
# .env
DATABASE_URL="postgresql://user:password@localhost:5432/mon_app?schema=public"

# Pour la production (exemple avec Supabase)
# DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres?schema=public&pgbouncer=true"
# DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres?schema=public"
```

### 3. Configuration Prisma pour la production

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // Pour les migrations en production
}
```

## Schéma Prisma : Exemple CRM Complet

Voici le schéma que RLN Consulting utilise comme base pour ses projets CRM :

```prisma
// prisma/schema.prisma

// ==================== AUTHENTICATION ====================
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String?   // Hashé avec bcrypt
  image         String?
  role          Role      @default(USER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  accounts      Account[]
  sessions      Session[]
  contacts      Contact[]  @relation("CreatedContacts")
  deals         Deal[]     @relation("OwnedDeals")
  activities    Activity[]
  notes         Note[]

  @@map("users")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

enum Role {
  USER
  ADMIN
  MANAGER
}

// ==================== CRM ENTITIES ====================
model Company {
  id          String    @id @default(cuid())
  name        String
  domain      String?   @unique
  industry    String?
  size        CompanySize?
  website     String?
  phone       String?
  address     String?
  city        String?
  country     String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  contacts    Contact[]
  deals       Deal[]

  @@index([name])
  @@map("companies")
}

enum CompanySize {
  SOLO
  SMALL      // 2-10
  MEDIUM     // 11-50
  LARGE      // 51-200
  ENTERPRISE // 200+
}

model Contact {
  id          String    @id @default(cuid())
  firstName   String
  lastName    String
  email       String    @unique
  phone       String?
  title       String?   // Job title
  status      ContactStatus @default(LEAD)
  source      String?   // Comment ils nous ont trouvé
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  companyId   String?
  company     Company?  @relation(fields: [companyId], references: [id])
  createdById String
  createdBy   User      @relation("CreatedContacts", fields: [createdById], references: [id])
  deals       Deal[]
  activities  Activity[]
  notes       Note[]

  @@index([email])
  @@index([lastName, firstName])
  @@map("contacts")
}

enum ContactStatus {
  LEAD
  QUALIFIED
  CUSTOMER
  CHURNED
}

model Deal {
  id          String      @id @default(cuid())
  name        String
  value       Decimal     @db.Decimal(12, 2)
  currency    String      @default("EUR")
  stage       DealStage   @default(LEAD)
  probability Int         @default(10) // 0-100
  expectedCloseDate DateTime?
  closedAt    DateTime?
  lostReason  String?
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  // Relations
  companyId   String?
  company     Company?    @relation(fields: [companyId], references: [id])
  contactId   String
  contact     Contact     @relation(fields: [contactId], references: [id])
  ownerId     String
  owner       User        @relation("OwnedDeals", fields: [ownerId], references: [id])
  activities  Activity[]
  notes       Note[]

  @@index([stage])
  @@index([ownerId])
  @@map("deals")
}

enum DealStage {
  LEAD
  QUALIFIED
  PROPOSAL
  NEGOTIATION
  WON
  LOST
}

// ==================== ACTIVITY TRACKING ====================
model Activity {
  id          String       @id @default(cuid())
  type        ActivityType
  subject     String
  description String?
  dueDate     DateTime?
  completedAt DateTime?
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt

  // Relations
  userId      String
  user        User         @relation(fields: [userId], references: [id])
  contactId   String?
  contact     Contact?     @relation(fields: [contactId], references: [id])
  dealId      String?
  deal        Deal?        @relation(fields: [dealId], references: [id])

  @@index([userId, dueDate])
  @@index([contactId])
  @@map("activities")
}

enum ActivityType {
  CALL
  EMAIL
  MEETING
  TASK
  NOTE
}

model Note {
  id          String    @id @default(cuid())
  content     String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  contactId   String?
  contact     Contact?  @relation(fields: [contactId], references: [id])
  dealId      String?
  deal        Deal?     @relation(fields: [dealId], references: [id])

  @@index([contactId])
  @@index([dealId])
  @@map("notes")
}
```

### Points clés du schéma

**Conventions de nommage :**
- `@@map()` pour utiliser snake_case en DB (standard PostgreSQL)
- CamelCase dans le code TypeScript
- Relations explicites avec `@relation`

**Index stratégiques :**
- Sur les champs de recherche fréquente (email, name)
- Sur les clés étrangères utilisées dans les filtres
- Index composites pour les requêtes complexes

**Types Decimal pour l'argent :**
- Jamais de Float pour les montants financiers
- `@db.Decimal(12, 2)` = jusqu'à 9 999 999 999,99 €

## Client Prisma : Configuration Production

### Singleton Pattern pour Next.js

```typescript
// lib/db.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development'
    ? ['query', 'error', 'warn']
    : ['error'],
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}

export type { User, Contact, Company, Deal, Activity, Note } from '@prisma/client'
```

**Pourquoi ce pattern ?** En développement, le hot-reload de Next.js créerait une nouvelle connexion à chaque modification de fichier, épuisant rapidement le pool de connexions.

## Queries Optimisées

### Fetching avec relations (N+1 évité)

```typescript
// app/contacts/page.tsx
import { db } from '@/lib/db'

export default async function ContactsPage() {
  // ✅ Une seule requête SQL avec JOIN
  const contacts = await db.contact.findMany({
    include: {
      company: {
        select: { name: true, domain: true }
      },
      createdBy: {
        select: { name: true }
      },
      _count: {
        select: { deals: true, activities: true }
      }
    },
    orderBy: { createdAt: 'desc' },
    take: 50
  })

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.firstName} {contact.lastName}
          {contact.company && ` @ ${contact.company.name}`}
          <span>({contact._count.deals} deals)</span>
        </li>
      ))}
    </ul>
  )
}
```

### Recherche full-text avec filtres

```typescript
// lib/queries/contacts.ts
import { db } from '@/lib/db'
import { ContactStatus, Prisma } from '@prisma/client'

interface ContactFilters {
  search?: string
  status?: ContactStatus
  companyId?: string
  createdById?: string
  page?: number
  limit?: number
}

export async function searchContacts(filters: ContactFilters) {
  const { search, status, companyId, createdById, page = 1, limit = 20 } = filters

  const where: Prisma.ContactWhereInput = {
    ...(status && { status }),
    ...(companyId && { companyId }),
    ...(createdById && { createdById }),
    ...(search && {
      OR: [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { company: { name: { contains: search, mode: 'insensitive' } } },
      ],
    }),
  }

  const [contacts, total] = await Promise.all([
    db.contact.findMany({
      where,
      include: {
        company: { select: { id: true, name: true } },
        _count: { select: { deals: true } },
      },
      orderBy: { updatedAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    db.contact.count({ where }),
  ])

  return {
    contacts,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  }
}
```

### Agrégations pour dashboard

```typescript
// lib/queries/dashboard.ts
import { db } from '@/lib/db'
import { DealStage } from '@prisma/client'

export async function getDashboardStats(userId: string) {
  const [dealsByStage, revenueStats, recentActivity] = await Promise.all([
    // Deals groupés par stage
    db.deal.groupBy({
      by: ['stage'],
      where: { ownerId: userId },
      _count: { id: true },
      _sum: { value: true },
    }),

    // Revenue des deals gagnés ce mois
    db.deal.aggregate({
      where: {
        ownerId: userId,
        stage: DealStage.WON,
        closedAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
      _sum: { value: true },
      _count: { id: true },
    }),

    // 10 dernières activités
    db.activity.findMany({
      where: { userId },
      include: {
        contact: { select: { firstName: true, lastName: true } },
        deal: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
  ])

  return {
    pipeline: dealsByStage.map(stage => ({
      stage: stage.stage,
      count: stage._count.id,
      value: stage._sum.value?.toNumber() ?? 0,
    })),
    monthlyRevenue: revenueStats._sum.value?.toNumber() ?? 0,
    dealsWonThisMonth: revenueStats._count.id,
    recentActivity,
  }
}
```

## Migrations en Production

### Workflow de migration recommandé

```bash
# 1. En développement : modifier le schema.prisma
# 2. Créer la migration
npx prisma migrate dev --name add_company_notes

# 3. Vérifier le SQL généré
cat prisma/migrations/20240320_add_company_notes/migration.sql

# 4. En production : appliquer les migrations
npx prisma migrate deploy
```

### Script de déploiement

```json
// package.json
{
  "scripts": {
    "build": "prisma generate && prisma migrate deploy && next build",
    "postinstall": "prisma generate"
  }
}
```

### Migrations avec données (seed)

```typescript
// prisma/seed.ts
import { PrismaClient, Role, ContactStatus, DealStage } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Créer l'admin par défaut
  const adminPassword = await hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      password: adminPassword,
      role: Role.ADMIN,
    },
  })

  // Créer des données de test
  const company = await prisma.company.create({
    data: {
      name: 'Acme Corp',
      domain: 'acme.com',
      industry: 'Technology',
      size: 'MEDIUM',
    },
  })

  await prisma.contact.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@acme.com',
      status: ContactStatus.QUALIFIED,
      companyId: company.id,
      createdById: admin.id,
      deals: {
        create: {
          name: 'Enterprise Plan',
          value: 15000,
          stage: DealStage.PROPOSAL,
          ownerId: admin.id,
          companyId: company.id,
        },
      },
    },
  })

  console.log('✅ Seed completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

```bash
# Exécuter le seed
npx prisma db seed
```

## Type Safety End-to-End

### Avec les Server Actions

```typescript
// app/actions/contacts.ts
'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Schéma Zod qui correspond au modèle Prisma
const createContactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  title: z.string().optional(),
  companyId: z.string().cuid().optional(),
})

type CreateContactInput = z.infer<typeof createContactSchema>

export async function createContact(input: CreateContactInput) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return { error: 'Non authentifié' }
  }

  const validation = createContactSchema.safeParse(input)
  if (!validation.success) {
    return { error: 'Données invalides', details: validation.error.flatten() }
  }

  try {
    const contact = await db.contact.create({
      data: {
        ...validation.data,
        createdById: session.user.id,
      },
    })

    revalidatePath('/contacts')
    return { success: true, contact }
  } catch (error) {
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return { error: 'Un contact avec cet email existe déjà' }
    }
    return { error: 'Erreur lors de la création' }
  }
}
```

### Avec tRPC (alternative aux Server Actions)

```typescript
// lib/trpc/routers/contacts.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { db } from '@/lib/db'
import { TRPCError } from '@trpc/server'

export const contactsRouter = router({
  list: protectedProcedure
    .input(z.object({
      search: z.string().optional(),
      status: z.enum(['LEAD', 'QUALIFIED', 'CUSTOMER', 'CHURNED']).optional(),
      page: z.number().min(1).default(1),
    }))
    .query(async ({ input, ctx }) => {
      const { search, status, page } = input
      const limit = 20

      const where = {
        ...(status && { status }),
        ...(search && {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' as const } },
            { lastName: { contains: search, mode: 'insensitive' as const } },
            { email: { contains: search, mode: 'insensitive' as const } },
          ],
        }),
      }

      const [contacts, total] = await Promise.all([
        db.contact.findMany({
          where,
          include: { company: { select: { name: true } } },
          skip: (page - 1) * limit,
          take: limit,
          orderBy: { createdAt: 'desc' },
        }),
        db.contact.count({ where }),
      ])

      return { contacts, total, pages: Math.ceil(total / limit) }
    }),

  create: protectedProcedure
    .input(z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      email: z.string().email(),
      companyId: z.string().cuid().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const existing = await db.contact.findUnique({
        where: { email: input.email },
      })

      if (existing) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'Un contact avec cet email existe déjà',
        })
      }

      return db.contact.create({
        data: { ...input, createdById: ctx.session.user.id },
      })
    }),
})
```

## Performances et Optimisations

### Connection Pooling avec PgBouncer

Pour la production, RLN Consulting recommande d'utiliser un connection pooler :

```env
# Avec Supabase (PgBouncer intégré)
DATABASE_URL="postgresql://...?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://..." # Pour les migrations
```

### Caching avec unstable_cache

```typescript
// lib/queries/cached.ts
import { unstable_cache } from 'next/cache'
import { db } from '@/lib/db'

export const getCachedCompanies = unstable_cache(
  async () => {
    return db.company.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    })
  },
  ['companies-list'],
  { revalidate: 300, tags: ['companies'] } // 5 minutes
)
```

### Monitoring des requêtes

```typescript
// lib/db.ts (version avec logging)
import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient({
  log: [
    { level: 'query', emit: 'event' },
    { level: 'error', emit: 'stdout' },
  ],
})

// En développement : log des requêtes lentes
if (process.env.NODE_ENV === 'development') {
  db.$on('query', (e) => {
    if (e.duration > 100) { // Plus de 100ms
      console.warn(`🐢 Slow query (${e.duration}ms):`, e.query)
    }
  })
}
```

## Conclusion

La stack Next.js + Prisma + PostgreSQL offre le meilleur équilibre entre productivité développeur et robustesse en production. RLN Consulting l'utilise comme stack backend principale depuis 2021.

**Points clés à retenir :**

- Utilisez le singleton pattern pour le client Prisma
- Définissez des index stratégiques dès le début
- Utilisez `include` et `select` pour éviter le N+1
- Validez les inputs avec Zod avant Prisma
- Configurez le connection pooling en production

Pour vos projets nécessitant une base de données PostgreSQL avec Next.js, contactez RLN Consulting pour bénéficier de cette expertise.
