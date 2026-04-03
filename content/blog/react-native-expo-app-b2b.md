---
title: "Développer une App B2B avec React Native + Expo : Stack et Patterns"
description: "Architecture, state management, offline-first, push notifications. Stack React Native utilisée par RLN Consulting sur +15 apps."
date: "2026-03-30"
author: "Ruben Edery"
category: "developpement"
tags: ["react-native", "expo", "mobile", "b2b", "offline", "typescript"]
image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop&q=80"
---

## Pourquoi React Native + Expo pour une Application B2B ?

Les applications B2B ont des exigences spécifiques : mode offline, synchronisation de données, authentification sécurisée, et souvent des workflows complexes. React Native avec Expo offre le meilleur compromis entre rapidité de développement et performance native.

RLN Consulting a livré plus de 15 applications React Native B2B avec cette stack depuis 2020. Ce guide partage notre architecture et nos patterns éprouvés en production.

**Avantages de React Native + Expo pour le B2B :**

- **Une seule codebase** pour iOS et Android (économie de 40% sur le développement)
- **Expo EAS** pour le build et la distribution sans Mac/Xcode
- **Over-the-air updates** pour déployer des corrections instantanément
- **TypeScript natif** pour la robustesse du code métier

## Stack Technique RLN Consulting 2026

Voici la stack que nous utilisons sur tous nos projets React Native B2B :

| Catégorie | Librairie | Version |
|-----------|-----------|---------|
| Framework | Expo SDK | 52+ |
| Navigation | Expo Router | 4.x |
| State Management | Zustand | 5.x |
| Data Fetching | TanStack Query | 5.x |
| Storage | MMKV | 3.x |
| Forms | React Hook Form + Zod | - |
| UI | NativeWind (Tailwind) | 4.x |
| Auth | Expo SecureStore + JWT | - |

### Pourquoi ces choix ?

**Expo Router** plutôt que React Navigation seul : Navigation file-based comme Next.js, deep linking automatique, typed routes.

**Zustand** plutôt que Redux : API minimaliste, pas de boilerplate, persist middleware intégré.

**TanStack Query** plutôt que SWR : Meilleur support offline, mutations optimistes, devtools.

**MMKV** plutôt qu'AsyncStorage : 30x plus rapide, synchrone, parfait pour l'offline-first.

## Architecture de Projet

```
app/
├── (auth)/
│   ├── login.tsx
│   ├── forgot-password.tsx
│   └── _layout.tsx
├── (tabs)/
│   ├── index.tsx                    # Dashboard
│   ├── orders/
│   │   ├── index.tsx                # Liste des commandes
│   │   └── [id].tsx                 # Détail commande
│   ├── inventory/
│   │   ├── index.tsx
│   │   └── [id].tsx
│   ├── customers/
│   │   └── index.tsx
│   └── _layout.tsx                  # Tab navigation
├── settings.tsx
├── _layout.tsx                      # Root layout
└── +not-found.tsx

components/
├── ui/                              # Composants réutilisables
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── Badge.tsx
├── forms/
│   ├── OrderForm.tsx
│   └── CustomerForm.tsx
└── features/
    ├── orders/
    │   ├── OrderCard.tsx
    │   └── OrderStatusBadge.tsx
    └── inventory/
        ├── ProductCard.tsx
        └── StockIndicator.tsx

lib/
├── api/
│   ├── client.ts                    # Config axios/fetch
│   └── endpoints.ts
├── auth/
│   ├── store.ts                     # Auth Zustand store
│   └── utils.ts
├── storage/
│   ├── mmkv.ts
│   └── secure-store.ts
└── sync/
    ├── queue.ts                     # Queue de sync offline
    └── conflicts.ts                 # Résolution de conflits

hooks/
├── use-auth.ts
├── use-offline.ts
└── use-sync-status.ts

stores/
├── orders.ts
├── inventory.ts
└── customers.ts
```

## Configuration Expo

### app.json / app.config.ts

```typescript
// app.config.ts
import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: 'MonApp B2B',
  slug: 'monapp-b2b',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.monentreprise.monappb2b',
    infoPlist: {
      NSCameraUsageDescription: 'Pour scanner les codes-barres produits',
      NSPhotoLibraryUsageDescription: 'Pour ajouter des photos aux commandes',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.monentreprise.monappb2b',
    permissions: ['CAMERA', 'READ_EXTERNAL_STORAGE'],
  },
  plugins: [
    'expo-router',
    'expo-secure-store',
    [
      'expo-camera',
      { cameraPermission: 'Pour scanner les codes-barres produits' },
    ],
    [
      'expo-notifications',
      {
        icon: './assets/notification-icon.png',
        color: '#ffffff',
      },
    ],
  ],
  extra: {
    apiUrl: process.env.API_URL ?? 'https://api.monapp.com',
    eas: {
      projectId: 'votre-project-id',
    },
  },
  updates: {
    url: 'https://u.expo.dev/votre-project-id',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
})
```

## Authentification Mobile

### Secure Storage pour les tokens

```typescript
// lib/auth/secure-store.ts
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'auth_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export const authStorage = {
  async getToken(): Promise<string | null> {
    return SecureStore.getItemAsync(TOKEN_KEY)
  },

  async setToken(token: string): Promise<void> {
    await SecureStore.setItemAsync(TOKEN_KEY, token)
  },

  async getRefreshToken(): Promise<string | null> {
    return SecureStore.getItemAsync(REFRESH_TOKEN_KEY)
  },

  async setRefreshToken(token: string): Promise<void> {
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, token)
  },

  async clearTokens(): Promise<void> {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY)
  },
}
```

### Auth Store avec Zustand

```typescript
// lib/auth/store.ts
import { create } from 'zustand'
import { authStorage } from './secure-store'
import { api } from '@/lib/api/client'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'user'
  companyId: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  refreshToken: () => Promise<boolean>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password })
    const { user, token, refreshToken } = response.data

    await authStorage.setToken(token)
    await authStorage.setRefreshToken(refreshToken)

    set({ user, isAuthenticated: true })
  },

  logout: async () => {
    await authStorage.clearTokens()
    set({ user: null, isAuthenticated: false })
  },

  checkAuth: async () => {
    set({ isLoading: true })

    const token = await authStorage.getToken()
    if (!token) {
      set({ isLoading: false, isAuthenticated: false })
      return
    }

    try {
      const response = await api.get('/auth/me')
      set({ user: response.data, isAuthenticated: true, isLoading: false })
    } catch {
      // Token invalide, essayer de refresh
      const refreshed = await get().refreshToken()
      if (!refreshed) {
        await get().logout()
      }
      set({ isLoading: false })
    }
  },

  refreshToken: async () => {
    const refreshToken = await authStorage.getRefreshToken()
    if (!refreshToken) return false

    try {
      const response = await api.post('/auth/refresh', { refreshToken })
      const { token, refreshToken: newRefreshToken } = response.data

      await authStorage.setToken(token)
      await authStorage.setRefreshToken(newRefreshToken)

      return true
    } catch {
      return false
    }
  },
}))
```

### Layout avec protection des routes

```tsx
// app/_layout.tsx
import { useEffect } from 'react'
import { Stack, useRouter, useSegments } from 'expo-router'
import { useAuthStore } from '@/lib/auth/store'
import { View, ActivityIndicator } from 'react-native'

export default function RootLayout() {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore()
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (isLoading) return

    const inAuthGroup = segments[0] === '(auth)'

    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/login')
    } else if (isAuthenticated && inAuthGroup) {
      router.replace('/')
    }
  }, [isAuthenticated, isLoading, segments])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
```

## Architecture Offline-First

### Configuration MMKV

```typescript
// lib/storage/mmkv.ts
import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: 'app-storage',
  encryptionKey: 'your-encryption-key', // En prod, générer dynamiquement
})

// Helpers typés
export const mmkvStorage = {
  getString: (key: string) => storage.getString(key),
  setString: (key: string, value: string) => storage.set(key, value),
  getObject: <T>(key: string): T | null => {
    const value = storage.getString(key)
    return value ? JSON.parse(value) : null
  },
  setObject: <T>(key: string, value: T) => {
    storage.set(key, JSON.stringify(value))
  },
  delete: (key: string) => storage.delete(key),
  clearAll: () => storage.clearAll(),
}
```

### Zustand avec persistence MMKV

```typescript
// stores/orders.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storage } from '@/lib/storage/mmkv'
import { Order, OrderStatus } from '@/types'

// Storage adapter pour Zustand
const zustandStorage = {
  getItem: (name: string) => {
    const value = storage.getString(name)
    return value ?? null
  },
  setItem: (name: string, value: string) => {
    storage.set(name, value)
  },
  removeItem: (name: string) => {
    storage.delete(name)
  },
}

interface OrdersState {
  orders: Order[]
  pendingSyncs: Order[] // Commandes créées offline
  setOrders: (orders: Order[]) => void
  addOrder: (order: Order) => void
  updateOrderStatus: (id: string, status: OrderStatus) => void
  addPendingSync: (order: Order) => void
  removePendingSync: (id: string) => void
}

export const useOrdersStore = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      pendingSyncs: [],

      setOrders: (orders) => set({ orders }),

      addOrder: (order) =>
        set((state) => ({ orders: [order, ...state.orders] })),

      updateOrderStatus: (id, status) =>
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === id ? { ...o, status } : o
          ),
        })),

      addPendingSync: (order) =>
        set((state) => ({
          pendingSyncs: [...state.pendingSyncs, order],
          orders: [order, ...state.orders],
        })),

      removePendingSync: (id) =>
        set((state) => ({
          pendingSyncs: state.pendingSyncs.filter((o) => o.id !== id),
        })),
    }),
    {
      name: 'orders-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
)
```

### TanStack Query avec cache offline

```typescript
// lib/api/query-client.ts
import { QueryClient } from '@tanstack/react-query'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { storage } from '@/lib/storage/mmkv'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 heures
      retry: 2,
      networkMode: 'offlineFirst',
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
})

// Persister pour le cache
const persister = createSyncStoragePersister({
  storage: {
    getItem: (key) => storage.getString(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key),
  },
})

persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 24, // 24 heures
})
```

### Hook pour les queries avec support offline

```typescript
// hooks/use-orders.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api/client'
import { useOrdersStore } from '@/stores/orders'
import { useNetworkState } from '@/hooks/use-network-state'
import { Order, CreateOrderInput } from '@/types'

export function useOrders() {
  const { isConnected } = useNetworkState()
  const { setOrders, orders: cachedOrders } = useOrdersStore()

  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const response = await api.get<Order[]>('/orders')
      setOrders(response.data) // Mettre en cache local
      return response.data
    },
    // Utiliser le cache local si offline
    placeholderData: isConnected ? undefined : cachedOrders,
    enabled: isConnected,
  })
}

export function useCreateOrder() {
  const queryClient = useQueryClient()
  const { isConnected } = useNetworkState()
  const { addOrder, addPendingSync } = useOrdersStore()

  return useMutation({
    mutationFn: async (input: CreateOrderInput) => {
      if (!isConnected) {
        // Créer localement si offline
        const tempOrder: Order = {
          id: `temp-${Date.now()}`,
          ...input,
          status: 'pending',
          createdAt: new Date().toISOString(),
          syncStatus: 'pending',
        }
        addPendingSync(tempOrder)
        return tempOrder
      }

      const response = await api.post<Order>('/orders', input)
      return response.data
    },
    onSuccess: (order) => {
      if (order.syncStatus !== 'pending') {
        addOrder(order)
      }
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    },
  })
}
```

### Sync Queue pour les opérations offline

```typescript
// lib/sync/queue.ts
import { storage } from '@/lib/storage/mmkv'
import { api } from '@/lib/api/client'
import NetInfo from '@react-native-community/netinfo'

interface SyncOperation {
  id: string
  type: 'CREATE_ORDER' | 'UPDATE_ORDER' | 'CREATE_CUSTOMER'
  payload: any
  createdAt: string
  retryCount: number
}

const SYNC_QUEUE_KEY = 'sync_queue'

export const syncQueue = {
  getQueue(): SyncOperation[] {
    return storage.getString(SYNC_QUEUE_KEY)
      ? JSON.parse(storage.getString(SYNC_QUEUE_KEY)!)
      : []
  },

  addToQueue(operation: Omit<SyncOperation, 'id' | 'createdAt' | 'retryCount'>) {
    const queue = this.getQueue()
    queue.push({
      ...operation,
      id: `sync-${Date.now()}`,
      createdAt: new Date().toISOString(),
      retryCount: 0,
    })
    storage.set(SYNC_QUEUE_KEY, JSON.stringify(queue))
  },

  removeFromQueue(id: string) {
    const queue = this.getQueue().filter((op) => op.id !== id)
    storage.set(SYNC_QUEUE_KEY, JSON.stringify(queue))
  },

  async processQueue() {
    const netState = await NetInfo.fetch()
    if (!netState.isConnected) return { processed: 0, failed: 0 }

    const queue = this.getQueue()
    let processed = 0
    let failed = 0

    for (const operation of queue) {
      try {
        await this.processOperation(operation)
        this.removeFromQueue(operation.id)
        processed++
      } catch (error) {
        failed++
        // Incrémenter retry count, supprimer après 3 échecs
        if (operation.retryCount >= 3) {
          this.removeFromQueue(operation.id)
          // Logger l'erreur pour investigation
        }
      }
    }

    return { processed, failed }
  },

  async processOperation(operation: SyncOperation) {
    switch (operation.type) {
      case 'CREATE_ORDER':
        await api.post('/orders', operation.payload)
        break
      case 'UPDATE_ORDER':
        await api.patch(`/orders/${operation.payload.id}`, operation.payload)
        break
      case 'CREATE_CUSTOMER':
        await api.post('/customers', operation.payload)
        break
    }
  },
}

// Listener pour sync automatique quand la connexion revient
NetInfo.addEventListener((state) => {
  if (state.isConnected) {
    syncQueue.processQueue()
  }
})
```

## Push Notifications

### Configuration Expo Notifications

```typescript
// lib/notifications/setup.ts
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import Constants from 'expo-constants'
import { Platform } from 'react-native'
import { api } from '@/lib/api/client'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export async function registerForPushNotifications() {
  if (!Device.isDevice) {
    console.log('Push notifications require a physical device')
    return null
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  if (finalStatus !== 'granted') {
    console.log('Permission for push notifications denied')
    return null
  }

  const projectId = Constants.expoConfig?.extra?.eas?.projectId
  const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data

  // Envoyer le token au serveur
  await api.post('/users/push-token', { token })

  // Configuration Android
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  return token
}
```

### Hook pour gérer les notifications

```typescript
// hooks/use-notifications.ts
import { useEffect, useRef } from 'react'
import * as Notifications from 'expo-notifications'
import { useRouter } from 'expo-router'

export function useNotifications() {
  const router = useRouter()
  const notificationListener = useRef<Notifications.Subscription>()
  const responseListener = useRef<Notifications.Subscription>()

  useEffect(() => {
    // Notification reçue en foreground
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('Notification received:', notification)
        // Optionnel : mise à jour du state, affichage d'un toast, etc.
      }
    )

    // Utilisateur tape sur une notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const data = response.notification.request.content.data

        // Navigation basée sur le type de notification
        if (data.type === 'new_order') {
          router.push(`/orders/${data.orderId}`)
        } else if (data.type === 'message') {
          router.push('/messages')
        }
      }
    )

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current)
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [router])
}
```

## Composants UI Réutilisables

### Button avec NativeWind

```tsx
// components/ui/Button.tsx
import { Pressable, Text, ActivityIndicator, View } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex-row items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        outline: 'border border-primary bg-transparent',
        ghost: 'bg-transparent',
        destructive: 'bg-destructive',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-10 px-4',
        lg: 'h-14 px-8',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const textVariants = cva('font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      outline: 'text-primary',
      ghost: 'text-primary',
      destructive: 'text-destructive-foreground',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      icon: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  onPress?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  icon?: React.ReactNode
}

export function Button({
  children,
  variant,
  size,
  onPress,
  disabled,
  loading,
  className,
  icon,
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={cn(
        buttonVariants({ variant, size }),
        isDisabled && 'opacity-50',
        className
      )}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? '#000' : '#fff'}
        />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={textVariants({ variant, size })}>{children}</Text>
        </>
      )}
    </Pressable>
  )
}
```

## Déploiement avec EAS

### Configuration eas.json

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "resourceClass": "m1-medium"
      },
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "ios": {
        "resourceClass": "m1-medium"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "votre@email.com",
        "ascAppId": "123456789"
      },
      "android": {
        "serviceAccountKeyPath": "./google-service-account.json",
        "track": "internal"
      }
    }
  }
}
```

### Commandes de build et déploiement

```bash
# Build de développement (avec dev client)
eas build --profile development --platform all

# Build preview (pour tests internes)
eas build --profile preview --platform all

# Build production
eas build --profile production --platform all

# Soumettre aux stores
eas submit --platform all

# OTA Update (mise à jour sans rebuild)
eas update --branch production --message "Fix: correction bug paiement"
```

## Conclusion

RLN Consulting a livré plus de 15 applications React Native B2B avec cette stack depuis 2020. Les points clés à retenir :

- **Expo SDK 52+** simplifie énormément le développement et le déploiement
- **L'architecture offline-first** est essentielle pour les apps B2B terrain
- **Zustand + MMKV** offrent la meilleure DX pour le state persisté
- **EAS Build/Submit** permet de déployer sans Mac ni compte développeur Apple personnel

Cette stack permet de livrer une application B2B complète en 8-12 semaines, avec un coût de maintenance minimal grâce aux OTA updates.

Pour vos projets d'applications mobiles B2B, contactez RLN Consulting pour bénéficier de cette expertise.
