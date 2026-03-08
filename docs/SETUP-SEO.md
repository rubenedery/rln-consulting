# Configuration SEO - Guide Complet

> Ce guide explique comment configurer tous les services SEO pour RLN Consulting.

---

## 1. Google Search Console

### Étapes de configuration

1. **Aller sur** [Google Search Console](https://search.google.com/search-console)

2. **Ajouter une propriété**
   - Cliquer sur "Ajouter une propriété"
   - Choisir "Domaine" et entrer `rln-consulting.com`
   - Ou choisir "Préfixe d'URL" et entrer `https://rln-consulting.com`

3. **Vérifier la propriété** (méthode recommandée: Meta tag)
   - Copier le code de vérification (ex: `google1234567890abcdef`)
   - L'ajouter dans `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google1234567890abcdef
   ```

4. **Soumettre le sitemap**
   - Aller dans "Sitemaps" dans le menu
   - Entrer `sitemap.xml` et cliquer "Envoyer"

5. **Vérifier l'indexation**
   - Utiliser "Inspection de l'URL" pour tester les pages
   - Demander l'indexation des pages importantes

### Pages prioritaires à indexer
- `/` (accueil)
- `/services`
- `/tarifs`
- `/contact`
- `/secteurs` (toutes les pages secteurs)

---

## 2. Google Analytics 4

### Création du compte

1. **Aller sur** [Google Analytics](https://analytics.google.com)

2. **Créer un compte**
   - Nom du compte: `RLN Consulting`
   - Nom de la propriété: `rln-consulting.com`

3. **Configurer la propriété**
   - Pays: France
   - Devise: Euro (€)
   - Secteur: Services aux entreprises

4. **Obtenir l'ID de mesure**
   - Aller dans Admin > Flux de données > Web
   - Copier l'ID (format: `G-XXXXXXXXXX`)
   - L'ajouter dans `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Événements à configurer

| Événement | Déclencheur |
|-----------|-------------|
| `contact_form_submit` | Soumission formulaire contact |
| `simulator_complete` | Fin du simulateur de prix |
| `phone_click` | Clic sur numéro de téléphone |
| `email_click` | Clic sur email |
| `cta_click` | Clic sur CTA principal |

### Objectifs recommandés

1. **Conversion principale**: Soumission formulaire contact
2. **Micro-conversion 1**: Visite page tarifs
3. **Micro-conversion 2**: Utilisation simulateur
4. **Engagement**: Temps sur site > 2 minutes

---

## 3. Google My Business

### Création/Revendication de la fiche

1. **Aller sur** [Google Business Profile](https://business.google.com)

2. **Informations à renseigner**

| Champ | Valeur |
|-------|--------|
| Nom | RLN Consulting |
| Catégorie principale | Agence de développement web |
| Catégories secondaires | Agence de marketing digital, Consultant informatique |
| Adresse | [Votre adresse à Paris] |
| Téléphone | [Votre numéro] |
| Site web | https://rln-consulting.com |
| Horaires | Lun-Ven 9h-18h |

3. **Description de l'entreprise** (750 caractères max)
```
RLN Consulting est une agence de développement web et marketing digital basée à Paris. Nous créons des sites web performants, des applications mobiles sur mesure et des solutions CRM adaptées à votre métier.

Nos services :
• Création de sites web (Next.js, React)
• Applications mobiles iOS et Android
• CRM et outils métier personnalisés
• Gestion Google Ads et Facebook Ads
• SEO et référencement local

Plus de 50 clients accompagnés dans leur transformation digitale. Devis gratuit sous 24h.
```

4. **Photos à ajouter**
   - Logo (carré, 250x250 minimum)
   - Photo de couverture (1080x608)
   - Photos du bureau/équipe (3-5 photos)
   - Photos de projets réalisés

5. **Services à lister**
   - Création de site web
   - Développement d'application mobile
   - CRM sur mesure
   - Gestion publicités Google
   - Gestion publicités Facebook
   - Référencement SEO

### Stratégie d'avis

1. **Créer un lien court pour les avis**
   - Dans GMB > Accueil > "Obtenir plus d'avis"
   - Copier le lien court

2. **Demander des avis**
   - Email post-projet avec lien
   - QR code dans les livrables
   - Relance 2 semaines après livraison

3. **Répondre aux avis**
   - Répondre à TOUS les avis (positifs et négatifs)
   - Délai max: 48h

---

## 4. Vérification technique

### Test après configuration

```bash
# Vérifier que les variables sont bien chargées
npm run dev

# Ouvrir http://localhost:3000 et vérifier :
# - Dans le code source: présence du script GA4
# - Dans le <head>: meta google-site-verification
```

### Checklist de validation

- [ ] `.env.local` créé avec toutes les variables
- [ ] Build réussi sans erreurs
- [ ] Script GA4 visible dans le code source
- [ ] Meta verification visible dans le <head>
- [ ] Sitemap accessible sur `/sitemap.xml`
- [ ] Robots.txt accessible sur `/robots.txt`

---

## 5. Monitoring

### Dashboards à configurer

1. **Google Search Console**
   - Vérifier les erreurs d'indexation chaque semaine
   - Suivre les positions des mots-clés principaux

2. **Google Analytics**
   - Trafic par source
   - Taux de conversion
   - Pages les plus visitées

3. **Google My Business**
   - Vues de la fiche
   - Actions (appels, visites site, itinéraires)
   - Avis et notes

### Alertes recommandées

- Chute de trafic > 30%
- Nouvelles erreurs 404
- Problèmes d'indexation
- Nouvel avis (positif ou négatif)

---

## Ressources

- [Documentation Google Search Console](https://support.google.com/webmasters)
- [Documentation Google Analytics 4](https://support.google.com/analytics)
- [Guide Google My Business](https://support.google.com/business)
- [Schema.org Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
