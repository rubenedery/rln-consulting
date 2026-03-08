---
title: "React Server Components : Tout comprendre en 5 minutes"
description: "Découvrez les React Server Components avec Next.js App Router. Fonctionnement, avantages et cas d'usage pour vos applications React."
date: "2024-03-01"
author: "Ruben Edery"
category: "developpement"
tags: ["react", "nextjs", "server-components", "performance"]
image: "/images/blog/rsc.jpg"
---

## Qu'est-ce qu'un React Server Component ?

Les React Server Components (RSC) représentent un changement de paradigme dans le développement React. Ils s'exécutent côté serveur et n'envoient que le HTML résultant au client, sans JavaScript.

## Server Components vs Client Components

### Server Components (par défaut dans App Router)

- S'exécutent uniquement sur le serveur
- Peuvent accéder directement aux bases de données
- Pas de JavaScript envoyé au client
- Pas d'accès aux hooks React (useState, useEffect)
- Parfaits pour le contenu statique

### Client Components (directive "use client")

- S'exécutent dans le navigateur
- Peuvent utiliser tous les hooks React
- Nécessaires pour l'interactivité
- Ajoutent du JavaScript au bundle

## Quand utiliser quoi ?

### Utilisez Server Components pour :

- Fetching de données
- Accès aux ressources backend
- Affichage de contenu statique
- Composants sans interactivité

### Utilisez Client Components pour :

- Formulaires et inputs
- Interactivité (onClick, onChange)
- Hooks React (useState, useEffect)
- APIs navigateur (localStorage, etc.)

## Patterns recommandés

### Le pattern "lifting" des Client Components

Gardez les Server Components aussi hauts que possible dans l'arbre. Encapsulez seulement la partie interactive dans un Client Component.

### Passer des Server Components comme children

Vous pouvez passer des Server Components comme children à un Client Component. Le Server Component reste rendu côté serveur.

### Éviter de convertir toute une branche

Ne mettez pas "use client" trop haut. Identifiez précisément les composants qui nécessitent l'interactivité.

## Avantages concrets

### Performance améliorée

- Bundle JavaScript réduit
- First Contentful Paint plus rapide
- Time to Interactive amélioré

### Sécurité renforcée

- Clés API restent côté serveur
- Requêtes DB non exposées
- Logique métier protégée

### Developer Experience

- Fetch de données simplifié
- Moins de useEffect pour le loading
- Composition naturelle des composants

## Exemple pratique

Un blog comme celui-ci est un cas parfait :
- La liste des articles : Server Component (fetch DB)
- Le filtre de recherche : Client Component (interactif)
- Chaque carte article : Server Component (statique)

## Conclusion

Les React Server Components optimisent naturellement vos applications en réduisant le JavaScript côté client. Adoptez-les par défaut et n'utilisez "use client" que quand c'est nécessaire.
