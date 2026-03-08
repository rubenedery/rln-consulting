# Guidelines Images - SEO & Performance

## Structure des dossiers

```
public/
├── images/
│   ├── hero/           # Images hero sections
│   ├── team/           # Photos équipe
│   ├── projects/       # Screenshots projets
│   ├── clients/        # Logos clients
│   ├── blog/           # Images articles
│   └── icons/          # Icônes et logos
├── og-image.jpg        # Image OpenGraph par défaut (1200x630)
└── favicon.ico
```

## Formats recommandés

| Usage | Format | Taille max |
|-------|--------|------------|
| Photos | WebP/AVIF | 200KB |
| Logos | SVG | 20KB |
| Icônes | SVG | 5KB |
| OG Images | JPG | 100KB |

## Dimensions recommandées

| Type | Dimensions | Ratio |
|------|------------|-------|
| Hero desktop | 1920x1080 | 16:9 |
| Hero mobile | 750x1000 | 3:4 |
| Thumbnail | 400x300 | 4:3 |
| Avatar | 200x200 | 1:1 |
| OG Image | 1200x630 | ~1.9:1 |
| Blog cover | 1200x630 | ~1.9:1 |

## Alt Text - Bonnes pratiques

### ✅ Bon alt text
- Descriptif et contextualisé
- Inclut des mots-clés naturellement
- 125 caractères maximum

### Exemples par type d'image

**Photo équipe:**
```
alt="Ruben Edery, fondateur de RLN Consulting, agence web Paris"
```

**Screenshot projet:**
```
alt="Site e-commerce Le Petit Marché créé par RLN Consulting - page d'accueil"
```

**Logo client:**
```
alt="Logo Entreprise XYZ - client RLN Consulting"
```

**Illustration service:**
```
alt="Illustration développement application mobile iOS et Android"
```

**Photo bureau:**
```
alt="Bureau RLN Consulting à Paris - espace de travail moderne"
```

### ❌ Mauvais alt text
- `alt="image"` ou `alt="photo"`
- `alt="IMG_20240301.jpg"`
- Alt text trop long (> 200 caractères)
- Bourrage de mots-clés

## Utilisation du composant OptimizedImage

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image"

<OptimizedImage
  src="/images/hero/homepage-hero.webp"
  alt="Agence web RLN Consulting - création sites web et applications mobiles à Paris"
  width={1920}
  height={1080}
  priority // Pour les images above-the-fold
  className="object-cover"
/>
```

## Checklist avant mise en production

- [ ] Toutes les images ont un alt text descriptif
- [ ] Images compressées (TinyPNG, Squoosh)
- [ ] Format WebP/AVIF utilisé
- [ ] Dimensions appropriées (pas d'images 4000px pour un thumbnail)
- [ ] Images hero avec `priority={true}`
- [ ] Lazy loading par défaut pour les autres
- [ ] Fallback configuré pour les erreurs

## Outils recommandés

- **Compression**: [Squoosh](https://squoosh.app/)
- **Conversion WebP**: [CloudConvert](https://cloudconvert.com/)
- **Audit images**: Chrome DevTools > Lighthouse
- **Placeholder**: [Placeholder.com](https://placeholder.com/)

## Images à créer/obtenir

### Priorité 1 (Sprint 1)
- [ ] `og-image.jpg` - Image OpenGraph principale (1200x630)
- [ ] `hero-homepage.webp` - Hero page d'accueil
- [ ] `team/ruben-edery.webp` - Photo fondateur
- [ ] `placeholder.jpg` - Image placeholder générique

### Priorité 2 (Sprint 2)
- [ ] `projects/` - Screenshots des 4 cas d'études
- [ ] `clients/` - Logos des clients
- [ ] `blog/` - Images pour les 6 articles

### Priorité 3 (Plus tard)
- [ ] `icons/services/` - Illustrations services
- [ ] `hero/` - Images hero pour chaque page service
