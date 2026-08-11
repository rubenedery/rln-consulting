import type { AiSectorProfile } from "@/types/ai-sectors"

// Profils IA — catégorie "commerce" (7 métiers)
// Règle : les exemples concrets, painPoints et FAQ sont propres à chaque métier,
// jamais réutilisés ni reformulés d'un métier à l'autre.

export const aiSectorProfilesCommerce: AiSectorProfile[] = [
  {
    slug: "restaurant",
    relatedBlogSlugs: ["chatbot-ia-commerce-guide"],
    sectorSlug: "restaurant",
    name: "restaurant",
    namePlural: "restaurants",
    icon: "UtensilsCrossed",
    category: "commerce",
    metaTitle: "IA pour Restaurant : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un restaurant ? Réservations automatisées, lutte contre le no-show, standard téléphonique pendant le service : cas d'usage, coûts réels et ROI.",
    headline: "L'IA en salle et en cuisine, sans dénaturer votre métier",
    subheadline:
      "Réservations prises automatiquement, no-show anticipé, téléphone décroché pendant le coup de feu : l'IA absorbe ce qui vous éloigne de vos clients et de vos assiettes.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un restaurant ?",
        answer:
          "L'IA prend les réservations par téléphone et sur le site 24h/24, détecte les réservations à risque de no-show et les confirme automatiquement, prévoit le nombre de couverts par service pour ajuster les achats, et rédige menus du jour, posts et réponses aux avis Google dans votre ton.",
      },
      cost: {
        question: "Combien coûte l'IA pour un restaurant ?",
        answer:
          "Un module de réservation intelligent ou un standard téléphonique IA coûte entre 40 et 150 € par mois. Un assistant sur mesure combinant réservations, anti-no-show et prévision de couverts branché sur votre caisse représente un projet de 3 000 à 12 000 € selon le périmètre.",
      },
      duration: {
        question: "Combien de temps pour mettre en place l'IA dans un restaurant ?",
        answer:
          "Un standard téléphonique IA ou un chatbot de réservation se déploie en 1 à 3 semaines. Une solution sur mesure intégrée à votre logiciel de caisse et à votre plan de salle demande 4 à 8 semaines, avec un rodage sur quelques services avant généralisation.",
      },
      roi: {
        question: "Quel retour sur investissement pour un restaurant ?",
        answer:
          "La confirmation automatique des réservations divise le no-show par deux : pour un restaurant de 50 couverts avec 10 % de défections, cela représente plusieurs centaines d'euros récupérés par semaine. Ajoutez les appels décrochés pendant le service et l'investissement est couvert en 3 à 6 mois.",
      },
    },
    painPoints: [
      "Le téléphone sonne pendant le coup de feu et personne ne peut décrocher",
      "Les no-show laissent des tables vides sur des services complets",
      "Le menu du jour et les réseaux sociaux passent après tout le reste",
      "Difficile de prévoir les couverts et donc les achats du lendemain",
    ],
    useCases: [
      "chatbot_client",
      "assistant_vocal",
      "analyse_predictive",
      "generation_contenu",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Standard IA pendant le service",
        description:
          "Entre 12 h et 14 h 30, un assistant vocal décroche à votre place : il annonce les disponibilités du soir, prend la réservation directement dans votre plan de salle et transfère uniquement les demandes particulières (groupes, allergies, privatisation).",
        metric: "0 appel manqué pendant le service",
      },
      {
        title: "Chasse au no-show",
        description:
          "L'IA repère les réservations à risque (première venue, groupe, vendredi soir) et envoie une demande de confirmation par SMS la veille. Sans réponse, la table est remise en vente sur votre module de réservation avant le service.",
        metric: "−50 % de tables perdues",
      },
      {
        title: "Prévision de couverts et menu du jour",
        description:
          "À partir de votre historique de caisse, de la météo et des événements locaux, l'IA estime les couverts de chaque service. Elle génère aussi le visuel du menu du jour pour l'ardoise Instagram à partir d'une simple liste de plats dictée le matin.",
        metric: "Prévisions fiables à ±10 %",
      },
    ],
    roiStats: [
      {
        label: "de no-show en moins avec confirmation automatique des réservations",
        value: "−50 %",
      },
      {
        label: "des restaurateurs voient l'IA comme un levier de rentabilité d'ici 2027",
        value: "2 sur 3",
        source: "Étude sectorielle food service 2025",
      },
      {
        label: "de gain potentiel sur les fonctions marketing et vente grâce à l'IA générative",
        value: "+5 à 15 %",
        source: "McKinsey",
      },
    ],
    faqs: [
      {
        question: "L'assistant vocal va-t-il agacer mes clients au téléphone ?",
        answer:
          "Les voix actuelles sont naturelles et l'assistant annonce toujours qu'il est un assistant du restaurant. Pour une réservation simple, l'appel dure moins d'une minute — la plupart des clients préfèrent cela à une sonnerie dans le vide pendant le service.",
      },
      {
        question: "Est-ce que ça vaut le coup pour un petit restaurant de quartier ?",
        answer:
          "Oui, et c'est même là que l'effet est le plus net : sans hôtesse dédiée, chaque appel manqué est une table perdue. Un standard IA à moins de 100 € par mois se rentabilise dès deux ou trois couverts récupérés par semaine.",
      },
      {
        question: "L'IA fonctionne-t-elle avec mon logiciel de caisse et mon module de réservation ?",
        answer:
          "Les solutions du marché (Zenchef, TheFork Manager, Guestonline, Lightspeed, Zelty) exposent des connecteurs. Nous branchons l'IA sur votre environnement existant : le plan de salle reste votre outil de référence, l'IA ne fait que l'alimenter.",
      },
      {
        question: "Combien de temps pour que l'équipe prenne le pli ?",
        answer:
          "Une journée suffit pour l'essentiel : l'équipe continue de travailler dans le plan de salle qu'elle connaît, les réservations IA y apparaissent comme les autres. Le seul réflexe à acquérir est de consulter les notes laissées par l'assistant (allergies, occasions).",
      },
      {
        question: "Que se passe-t-il si l'IA ne comprend pas une demande au téléphone ?",
        answer:
          "Elle bascule l'appel vers votre portable ou prend un message transcrit par écrit avec le numéro du client. Vous définissez les cas qui doivent toujours passer par un humain : groupes au-delà d'un certain nombre, privatisations, journalistes.",
      },
    ],
  },
  {
    slug: "boulangerie-patisserie",
    relatedBlogSlugs: ["chatbot-ia-commerce-guide"],
    sectorSlug: "boulangerie-patisserie",
    name: "boulangerie-pâtisserie",
    namePlural: "boulangeries-pâtisseries",
    icon: "Store",
    category: "commerce",
    metaTitle: "IA pour Boulangerie-Pâtisserie : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une boulangerie-pâtisserie ? Prévision de production, réduction des invendus, commandes de gâteaux automatisées : cas d'usage, coûts et ROI.",
    headline: "Produire juste, jeter moins : l'IA au fournil",
    subheadline:
      "L'IA apprend de vos ventes pour vous dire combien de baguettes cuire demain, absorbe les commandes de gâteaux et fait vivre votre vitrine en ligne — pendant que vous êtes au pétrin.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une boulangerie-pâtisserie ?",
        answer:
          "L'IA prévoit vos quantités de production par référence et par jour à partir de votre historique de caisse, de la météo et du calendrier, ce qui réduit les invendus. Elle prend aussi les commandes de gâteaux personnalisés en ligne et rédige vos posts et annonces saisonnières.",
      },
      cost: {
        question: "Combien coûte l'IA pour une boulangerie ?",
        answer:
          "Un outil de prévision de production dédié aux boulangeries coûte entre 50 et 150 € par mois. Un assistant sur mesure gérant en plus les commandes spéciales et la communication représente un projet de 3 000 à 10 000 €, souvent amorti par la seule baisse des invendus.",
      },
      duration: {
        question: "Combien de temps pour mettre en place l'IA au fournil ?",
        answer:
          "Un outil de prévision se connecte à votre caisse en 1 à 2 semaines, puis affine ses recommandations pendant 4 à 6 semaines d'apprentissage sur vos ventes réelles. Un projet sur mesure incluant les commandes de gâteaux demande 4 à 8 semaines au total.",
      },
      roi: {
        question: "Quel retour sur investissement pour une boulangerie ?",
        answer:
          "Une boulangerie jette couramment 5 à 15 % de sa production. En ramenant les invendus autour de 5 %, une affaire réalisant 300 000 € de chiffre d'affaires économise plusieurs milliers d'euros de matières premières par an — bien plus que le coût de l'outil, rentabilisé en quelques mois.",
      },
    },
    painPoints: [
      "Chaque soir, des invendus partent à la poubelle ou en promotion de dernière minute",
      "Les quantités à produire se décident à l'instinct, avec des ruptures les bons jours",
      "Les commandes de gâteaux se prennent au comptoir ou au téléphone, avec des erreurs de date ou de mention",
      "Aucun temps pour annoncer les nouveautés, la galette ou les fermetures sur les réseaux",
    ],
    useCases: [
      "analyse_predictive",
      "automatisation_admin",
      "generation_contenu",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Plan de production quotidien",
        description:
          "Chaque soir, l'IA croise vos tickets de caisse, la météo du lendemain, les jours fériés et les vacances scolaires, puis propose les quantités par référence : baguettes, tradition, viennoiseries, pâtisseries. Le boulanger ajuste en 2 minutes avant de lancer le fournil.",
        metric: "−30 % d'invendus en moyenne",
      },
      {
        title: "Commandes de gâteaux sans erreur",
        description:
          "Le client commande son fraisier ou son gâteau d'anniversaire en ligne : parts, parfum, inscription, date de retrait. L'IA vérifie les délais de fabrication, bloque les dates complètes et édite chaque matin la liste de production des commandes du jour.",
        metric: "+40 % de commandes spéciales",
      },
      {
        title: "Vitrine numérique tenue à jour",
        description:
          "À partir d'une photo prise au comptoir, l'IA rédige le post d'annonce : brioche des rois, fraisiers de saison, fournées spéciales du samedi. Elle prépare aussi les réponses aux avis Google, que vous validez d'un clic.",
        metric: "3 publications par semaine sans y penser",
      },
    ],
    roiStats: [
      {
        label: "d'invendus en moins grâce à la prévision de production",
        value: "−20 à −30 %",
      },
      {
        label: "de réduction possible du gaspillage alimentaire dans le commerce grâce à l'IA",
        value: "jusqu'à −30 %",
        source: "McKinsey",
      },
      {
        label: "de la production part encore en perte dans une boulangerie type",
        value: "5-15 %",
      },
    ],
    faqs: [
      {
        question: "Est-ce que ça vaut le coup pour une petite boulangerie de village ?",
        answer:
          "Oui : la prévision de production n'exige aucun volume minimum, seulement un historique de caisse. Même sur une petite affaire, quelques dizaines de baguettes et pâtisseries sauvées par semaine couvrent l'abonnement, et les ruptures en moins fidélisent la clientèle.",
      },
      {
        question: "Mon historique de caisse suffit-il pour que l'IA soit fiable ?",
        answer:
          "Six mois de tickets suffisent pour démarrer, un an couvre toutes les saisonnalités (rentrée, fêtes, été). Les premières semaines, l'outil apprend et vous gardez la main ; la fiabilité se constate en comparant ses propositions à vos ventes réelles.",
      },
      {
        question: "Faut-il être à l'aise avec l'informatique pour s'en servir ?",
        answer:
          "Non : le plan de production arrive chaque soir sur votre téléphone, sous forme d'une liste de quantités à valider ou corriger. La prise en main tient en une démonstration de 30 minutes, sans changer votre caisse ni vos habitudes au fournil.",
      },
      {
        question: "L'IA peut-elle gérer les pics comme l'Épiphanie ou Pâques ?",
        answer:
          "C'est justement là qu'elle est la plus utile : elle retrouve vos ventes des années précédentes sur ces périodes et anticipe la montée en charge des galettes ou des chocolats, jour par jour, au lieu de reproduire la même estimation globale chaque année.",
      },
      {
        question: "Que devient le rôle du boulanger dans les quantités ?",
        answer:
          "Il reste décisionnaire : l'IA propose, le boulanger dispose. Un événement local qu'elle ne connaît pas (brocante, match, mariage) se corrige en un geste, et cette correction enrichit le modèle pour les fois suivantes.",
      },
    ],
  },
  {
    slug: "boutique-vetements",
    sectorSlug: "boutique-vetements",
    name: "boutique de vêtements",
    namePlural: "boutiques de vêtements",
    icon: "ShoppingBag",
    category: "commerce",
    metaTitle: "IA pour Boutique de Vêtements : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une boutique de mode ? Fiches produits générées, conseil de taille, prévision des réassorts, réduction des retours : cas d'usage, coûts et ROI.",
    headline: "L'IA qui habille votre boutique, en ligne comme en rayon",
    subheadline:
      "Fiches produits rédigées en série à chaque collection, conseil de taille qui réduit les retours, réassorts anticipés : l'IA travaille pendant que vous conseillez en cabine.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une boutique de vêtements ?",
        answer:
          "L'IA rédige vos fiches produits à chaque nouvelle collection à partir des photos et des caractéristiques fournisseur, conseille la bonne taille aux clients en ligne pour limiter les retours, anticipe les réassorts des références qui partent vite et personnalise vos campagnes selon l'historique d'achat de chaque cliente.",
      },
      cost: {
        question: "Combien coûte l'IA pour une boutique de mode ?",
        answer:
          "Les modules IA des plateformes e-commerce (description automatique, recommandation, conseil de taille) coûtent entre 30 et 150 € par mois. Un dispositif sur mesure reliant boutique physique et site — stocks unifiés, campagnes personnalisées — représente un projet de 4 000 à 15 000 €.",
      },
      duration: {
        question: "Combien de temps pour équiper une boutique de vêtements ?",
        answer:
          "Un assistant de rédaction de fiches produits est opérationnel en quelques jours sur Shopify ou WooCommerce. Un projet complet avec conseil de taille, recommandations et connexion à votre caisse demande 4 à 8 semaines, calé de préférence entre deux collections.",
      },
      roi: {
        question: "Quel retour sur investissement pour une boutique de mode ?",
        answer:
          "Le conseil de taille réduit les retours de 20 à 30 % — un poste qui coûte cher en logistique et en marge sur le textile. Ajoutez les heures de rédaction économisées à chaque collection et des relances personnalisées qui convertissent mieux : l'investissement se rembourse en une à deux saisons.",
      },
    },
    painPoints: [
      "Chaque nouvelle collection impose des soirées entières de rédaction de fiches produits",
      "Les retours pour mauvaise taille rognent la marge et le temps en boutique",
      "Les invendus de fin de saison partent en solde faute d'avoir anticipé les réassorts",
      "Impossible de relancer chaque cliente avec les nouveautés qui lui correspondent",
    ],
    useCases: [
      "generation_contenu",
      "chatbot_client",
      "crm_ia",
      "analyse_predictive",
      "automatisation_admin",
    ],
    concreteExamples: [
      {
        title: "Collection en ligne en une journée",
        description:
          "Vous photographiez les nouveautés, l'IA génère titre, description, matières, conseils d'entretien et suggestions d'association pour chaque pièce, dans le ton de votre marque et déclinés par coloris. La mise en ligne d'une collection passe de deux semaines à une journée.",
        metric: "×10 sur la vitesse de mise en ligne",
      },
      {
        title: "Conseil de taille anti-retours",
        description:
          "Sur chaque fiche, un assistant pose deux ou trois questions (taille habituelle, morphologie, préférence ajusté ou ample) et croise les réponses avec le taillant réel de la marque, appris des retours passés. La cliente commande la bonne taille du premier coup.",
        metric: "−25 % de retours",
      },
      {
        title: "Réassorts pilotés par les ventes",
        description:
          "L'IA surveille la vitesse d'écoulement par référence, taille et coloris, en boutique comme en ligne. Elle alerte quand un best-seller doit être recommandé avant rupture chez le fournisseur et identifie tôt les pièces à écouler avant les soldes.",
        metric: "−20 % de stock résiduel en fin de saison",
      },
    ],
    roiStats: [
      {
        label: "de retours en moins grâce à la recommandation de taille",
        value: "−20 à −30 %",
      },
      {
        label: "de croissance supplémentaire pour les distributeurs qui personnalisent à grande échelle",
        value: "+10 à 15 %",
        source: "McKinsey",
      },
      {
        label: "de temps de rédaction économisé sur les fiches produits",
        value: "−80 %",
      },
    ],
    faqs: [
      {
        question: "Est-ce que ça vaut le coup pour une boutique indépendante face aux grandes enseignes ?",
        answer:
          "C'est même votre meilleur levier d'égalisation : les grandes enseignes personnalisent déjà à grande échelle. Avec des outils à moins de 100 € par mois, une indépendante offre la même expérience en ligne tout en gardant son atout imbattable, le conseil humain en cabine.",
      },
      {
        question: "L'IA peut-elle écrire dans le ton de ma marque ?",
        answer:
          "Oui : on lui fournit vos anciennes fiches, votre charte et quelques exemples de ce que vous aimez ou non. Elle reproduit ensuite votre style — minimaliste, chaleureux ou pointu mode — et vous gardez la validation avant publication.",
      },
      {
        question: "Combien de temps pour maîtriser ces outils ?",
        answer:
          "Une demi-journée de formation suffit pour la génération de fiches et les campagnes : tout se passe dans l'interface e-commerce que vous utilisez déjà. Le conseil de taille et les réassorts tournent seuls une fois paramétrés avec l'historique de vos deux dernières saisons.",
      },
      {
        question: "Mes données clientes sont-elles en sécurité ?",
        answer:
          "Les historiques d'achat restent dans votre CRM ou votre plateforme e-commerce, hébergés en Europe, et ne servent jamais à entraîner des modèles publics. Les campagnes personnalisées respectent le RGPD : seules les clientes ayant consenti sont sollicitées.",
      },
    ],
  },
  {
    slug: "cave-vins",
    sectorSlug: "cave-vins",
    name: "cave à vins",
    namePlural: "caves à vins",
    icon: "Wine",
    category: "commerce",
    metaTitle: "IA pour Cave à Vins : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un caviste ? Conseil d'accords mets-vins en ligne, fiches de dégustation générées, gestion des millésimes : cas d'usage, coûts réels et ROI.",
    headline: "Votre conseil de caviste, disponible même boutique fermée",
    subheadline:
      "Un sommelier numérique entraîné sur votre sélection recommande la bonne bouteille, vos fiches de dégustation s'écrivent toutes seules et vos allocations partent aux bons clients.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une cave à vins ?",
        answer:
          "L'IA joue le rôle de sommelier sur votre site : elle recommande une bouteille de votre stock selon le plat, l'occasion et le budget du client. Elle rédige aussi vos fiches de dégustation à chaque arrivage, cible vos invitations aux dégustations et signale les références à recommander avant rupture de millésime.",
      },
      cost: {
        question: "Combien coûte l'IA pour un caviste ?",
        answer:
          "Un assistant d'accords mets-vins intégré à votre site coûte entre 50 et 150 € par mois. Un sommelier numérique sur mesure, entraîné sur votre cave réelle et connecté à votre stock et à votre fichier clients, représente un projet de 4 000 à 15 000 € selon la profondeur du catalogue.",
      },
      duration: {
        question: "Combien de temps pour équiper une cave à vins ?",
        answer:
          "La génération de fiches de dégustation démarre en quelques jours. Un assistant d'accords branché sur votre stock demande 4 à 8 semaines : le temps de structurer votre catalogue (appellations, cépages, profils de dégustation) puis d'affiner les recommandations avec vous, bouteille par bouteille.",
      },
      roi: {
        question: "Quel retour sur investissement pour un caviste ?",
        answer:
          "Le conseil est ce qui fait vendre chez un caviste : le prolonger en ligne augmente le panier moyen de 15 à 25 % et convertit les visiteurs qui n'osent pas choisir seuls. Avec les heures de rédaction de fiches économisées à chaque arrivage, l'investissement se couvre en moins d'un an.",
      },
    },
    painPoints: [
      "Votre conseil fait la différence en boutique, mais votre site en est dépourvu",
      "Chaque arrivage impose des heures de rédaction de fiches de dégustation",
      "Les clients hésitent des semaines avant d'oser demander un accord pour un repas",
      "Les millésimes en fin de stock partent sans avoir été proposés aux bons amateurs",
    ],
    useCases: [
      "chatbot_client",
      "generation_contenu",
      "crm_ia",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Sommelier numérique sur votre stock",
        description:
          "Le client décrit son repas — gigot d'agneau, plateau de fruits de mer, dîner végétarien — et son budget. L'assistant, entraîné sur votre sélection et vos propres notes, propose deux ou trois bouteilles réellement en stock, avec l'argument d'accord que vous auriez donné au comptoir.",
        metric: "+20 % de panier moyen en ligne",
      },
      {
        title: "Fiches de dégustation à chaque arrivage",
        description:
          "À partir de la fiche technique du domaine et de vos impressions dictées en trois phrases à la réception, l'IA rédige la fiche complète : robe, nez, bouche, accords, température de service, potentiel de garde. Douze références sont fichées dans l'heure au lieu du week-end.",
        metric: "10 heures gagnées par arrivage",
      },
      {
        title: "Allocations et fins de millésime ciblées",
        description:
          "L'IA connaît les préférences de chaque client fidèle : régions, styles, budgets. Quand un millésime arrive en fin de stock ou qu'une allocation rare est livrée, elle prépare des messages individuels aux amateurs concernés — le bourgogne au buveur de pinot, pas à toute la liste.",
        metric: "×3 sur le taux d'ouverture des offres",
      },
    ],
    roiStats: [
      {
        label: "de panier moyen supplémentaire avec un conseil d'accords en ligne",
        value: "+15 à 25 %",
      },
      {
        label: "de revenus additionnels grâce aux recommandations personnalisées dans le commerce",
        value: "+10 à 15 %",
        source: "McKinsey",
      },
      {
        label: "des acheteurs de vin en ligne déclarent renoncer faute de conseil",
        value: "1 sur 2",
      },
    ],
    faqs: [
      {
        question: "Un assistant IA peut-il vraiment conseiller comme un caviste ?",
        answer:
          "Il ne remplace pas votre palais : il restitue vos propres accords et vos notes, appliqués à votre stock du moment. Vous validez ses recommandations pendant la phase de réglage ; ensuite, il répond comme vous l'auriez fait — y compris le dimanche soir avant un déjeuner de famille.",
      },
      {
        question: "Est-ce que ça vaut le coup pour une petite cave de quartier ?",
        answer:
          "Oui, car votre différence face aux sites géants est justement le conseil : c'est l'actif que l'IA prolonge en ligne. Une petite cave équipée d'un assistant d'accords à moins de 150 € par mois capte les commandes du soir et du dimanche qu'elle perdait jusque-là.",
      },
      {
        question: "Combien de temps pour structurer mon catalogue et prendre l'outil en main ?",
        answer:
          "Comptez deux à trois semaines pour enrichir le catalogue (profils de dégustation, accords), souvent accélérées par l'IA elle-même à partir de vos fiches existantes. Côté usage quotidien, dicter ses impressions d'arrivage et valider les fiches s'apprend en une matinée.",
      },
      {
        question: "L'IA gère-t-elle les contraintes propres au vin, comme les millésimes ?",
        answer:
          "Oui : chaque référence est suivie par millésime, avec ses stocks et son apogée. L'assistant ne recommande jamais une bouteille épuisée et peut suggérer le millésime suivant en expliquant la différence — un niveau de précision indispensable pour rester crédible auprès des amateurs.",
      },
      {
        question: "Puis-je l'utiliser aussi pour mes soirées dégustation ?",
        answer:
          "C'est un usage naturel : l'IA rédige l'invitation et le livret de dégustation de la soirée à partir des vins choisis, puis cible l'envoi vers les clients dont les goûts correspondent au thème. Les inscriptions arrivent directement dans votre agenda.",
      },
    ],
  },
  {
    slug: "fleuriste",
    sectorSlug: "fleuriste",
    name: "fleuriste",
    namePlural: "fleuristes",
    icon: "Flower2",
    category: "commerce",
    metaTitle: "IA pour Fleuriste : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un fleuriste ? Commandes prises pendant que vous composez, devis mariage accélérés, achats ajustés au périssable : cas d'usage, coûts et ROI.",
    headline: "L'IA qui prend les commandes pendant que vous composez",
    subheadline:
      "Téléphone décroché les mains dans un bouquet, devis de mariage préparés en heures plutôt qu'en soirées, achats ajustés à la fraîcheur : l'IA s'occupe du reste, vous des fleurs.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un fleuriste ?",
        answer:
          "L'IA répond au téléphone et prend les commandes de bouquets avec message et créneau de livraison pendant que vous avez les mains prises. Elle prépare vos devis de mariage et de deuil à partir d'un brief, ajuste vos achats au marché selon les commandes à venir et rédige vos publications au fil des saisons.",
      },
      cost: {
        question: "Combien coûte l'IA pour un fleuriste ?",
        answer:
          "Un assistant vocal qui prend les commandes coûte entre 40 et 120 € par mois. Un dispositif sur mesure ajoutant les devis événementiels assistés et l'aide aux achats représente un projet de 3 000 à 10 000 €, dimensionné pour une boutique indépendante.",
      },
      duration: {
        question: "Combien de temps pour équiper une boutique de fleuriste ?",
        answer:
          "L'assistant téléphonique se paramètre en 1 à 2 semaines : vos gammes de prix, zones de livraison et créneaux. L'aide aux devis événementiels et à l'achat demande 4 à 6 semaines, le temps d'intégrer vos compositions types et une saison d'historique de ventes.",
      },
      roi: {
        question: "Quel retour sur investissement pour un fleuriste ?",
        answer:
          "Un appel manqué pendant une composition, c'est souvent un bouquet de 40 à 60 € perdu au profit d'un site national. Quelques commandes rattrapées par semaine paient l'assistant, et la réduction des pertes de fleurs invendues — un périssable à rotation courte — fait le reste en quelques mois.",
      },
    },
    painPoints: [
      "Impossible de décrocher les mains dans une composition, et l'appel part chez un concurrent en ligne",
      "Les devis de mariage demandent des soirées entières entre brief, fleurs de saison et chiffrage",
      "Les fleurs invendues fanent : chaque erreur d'achat au marché part à la benne",
      "Les pics de Saint-Valentin et de fête des mères débordent la prise de commandes",
    ],
    useCases: [
      "assistant_vocal",
      "automatisation_admin",
      "analyse_predictive",
      "generation_contenu",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Commandes prises les mains dans l'eau",
        description:
          "L'assistant vocal répond dès la troisième sonnerie : il prend la commande — gamme de prix, occasion, message du petit mot, adresse et créneau de livraison — et la dépose dans votre carnet du jour. Les demandes particulières (deuil, très grosses pièces) vous sont transférées.",
        metric: "+15 % de commandes captées",
      },
      {
        title: "Devis mariage en une heure",
        description:
          "Vous saisissez le brief du couple : date, lieu, ambiance, couleurs, budget. L'IA assemble un devis à partir de vos compositions types — bouquet de mariée, centres de table, arche — avec les fleurs disponibles à la saison du mariage et vos coefficients. Vous ajustez, elle met en page.",
        metric: "Devis rendu en 24 h au lieu d'une semaine",
      },
      {
        title: "Achats au marché ajustés à la fraîcheur",
        description:
          "Avant chaque passage au marché ou commande chez le grossiste, l'IA rapproche vos ventes des semaines comparables, les commandes événementielles à venir et les pertes constatées par variété. Vous partez avec une liste d'achats calibrée, ni rupture le samedi ni seaux à jeter le mardi.",
        metric: "−25 % de pertes de fleurs",
      },
    ],
    roiStats: [
      {
        label: "de pertes sur le périssable en moins grâce aux achats pilotés par les données",
        value: "−20 à −30 %",
      },
      {
        label: "de réduction des erreurs de prévision d'approvisionnement grâce à l'IA",
        value: "−20 à −50 %",
        source: "McKinsey",
      },
      {
        label: "des appels en boutique arrivent pendant qu'un fleuriste a les mains prises",
        value: "~40 %",
      },
    ],
    faqs: [
      {
        question: "Est-ce que ça vaut le coup pour une petite boutique de fleuriste ?",
        answer:
          "Oui : c'est précisément quand on travaille seul que les appels manqués coûtent le plus, faute de personne pour décrocher. À moins de 120 € par mois, l'assistant se rembourse avec deux ou trois bouquets sauvés par semaine — sans compter les pertes de fleurs évitées.",
      },
      {
        question: "L'assistant saura-t-il gérer une commande de deuil avec le tact nécessaire ?",
        answer:
          "Les commandes sensibles suivent la règle que vous fixez : soit un transfert immédiat vers vous, soit une prise de message sobre avec rappel sous l'heure. L'assistant est configuré pour reconnaître ces situations et ne jamais dérouler un script commercial à ce moment-là.",
      },
      {
        question: "Comment l'IA connaît-elle les fleurs de saison pour les devis ?",
        answer:
          "Elle s'appuie sur un calendrier des disponibilités que nous construisons avec vous et sur vos habitudes d'approvisionnement. Pour un mariage en février, elle ne proposera pas de pivoines : elle suggérera renoncules ou anémones, avec l'écart de prix correspondant.",
      },
      {
        question: "Que se passe-t-il pendant les pics comme la Saint-Valentin ?",
        answer:
          "C'est là que l'assistant absorbe le plus : il prend les commandes en simultané sans faire patienter, applique vos gammes spéciales du jour et ferme automatiquement les créneaux de livraison complets. Vous composez, le carnet de commandes se remplit proprement.",
      },
      {
        question: "Combien de temps pour apprendre à m'en servir ?",
        answer:
          "Une heure suffit : les commandes arrivent dans un carnet du jour consultable sur téléphone, et les devis se pilotent depuis un formulaire simple. L'essentiel du travail initial — gammes, zones, compositions types — est fait avec vous au paramétrage.",
      },
    ],
  },
  {
    slug: "bijouterie",
    sectorSlug: "bijouterie",
    name: "bijouterie",
    namePlural: "bijouteries",
    icon: "Store",
    category: "commerce",
    metaTitle: "IA pour Bijouterie : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une bijouterie ? Qualification des demandes sur mesure, fiches de pièces d'exception, suivi des projets clients : cas d'usage, coûts et ROI.",
    headline: "L'IA au service de vos pièces d'exception",
    subheadline:
      "Demandes sur mesure qualifiées avant le premier rendez-vous, fiches dignes de vos créations, suivi d'atelier tenu au fil des semaines : l'IA prépare le terrain, vous créez.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une bijouterie ?",
        answer:
          "L'IA qualifie les demandes de création sur mesure — occasion, type de pièce, pierres, budget — avant votre premier rendez-vous, rédige des fiches à la hauteur de vos pièces d'exception avec leurs caractéristiques gemmologiques, et tient le fil des projets d'atelier : relances, étapes de fabrication, messages aux clients.",
      },
      cost: {
        question: "Combien coûte l'IA pour une bijouterie ?",
        answer:
          "Un assistant de qualification des demandes et de rédaction de fiches coûte entre 50 et 200 € par mois. Un dispositif sur mesure couvrant le suivi des projets d'atelier et la clientèle fidèle représente un projet de 5 000 à 20 000 €, à la mesure d'une maison qui vend des pièces à forte valeur.",
      },
      duration: {
        question: "Combien de temps pour intégrer l'IA dans une bijouterie ?",
        answer:
          "L'assistant de demandes sur mesure se met en place en 2 à 3 semaines, avec vos grilles de prix indicatives et vos délais d'atelier. Un dispositif complet incluant fiches produits et suivi de projets demande 6 à 10 semaines, en respectant vos exigences de discrétion et de présentation.",
      },
      roi: {
        question: "Quel retour sur investissement pour une bijouterie ?",
        answer:
          "Sur des pièces à panier élevé, chaque projet sur mesure gagné change le mois : une qualification soignée double le taux de premiers rendez-vous aboutis en écartant tôt les demandes hors budget. Un seul projet de bague de fiançailles concrétisé en plus par trimestre couvre largement l'investissement.",
      },
    },
    painPoints: [
      "Les demandes de sur mesure arrivent floues : des heures de rendez-vous pour des projets qui n'aboutissent pas",
      "Vos pièces d'exception méritent mieux que des fiches expédiées en deux lignes",
      "Le suivi des projets d'atelier — attentes de pierres, essayages, retouches — vit dans un carnet",
      "Les grandes occasions de vos clients (anniversaires de mariage, naissances) passent sans que vous puissiez vous les rappeler",
    ],
    useCases: [
      "chatbot_client",
      "generation_contenu",
      "crm_ia",
      "automatisation_admin",
    ],
    concreteExamples: [
      {
        title: "Demandes sur mesure qualifiées avant le rendez-vous",
        description:
          "Sur votre site, l'assistant dialogue avec le futur client : occasion, type de pièce, métal, pierre centrale, gravure, fourchette de budget, délai souhaité. Vous recevez un brief structuré et arrivez au premier rendez-vous avec des pistes déjà pertinentes — ou évitez un rendez-vous sans issue.",
        metric: "×2 de rendez-vous aboutis",
      },
      {
        title: "Fiches d'écrin pour pièces d'exception",
        description:
          "À partir du certificat et de quelques indications — carats, couleur, pureté, origine de la pierre, travail de sertissage — l'IA rédige une fiche au vocabulaire joaillier précis, déclinée pour le site, la vitrine et Instagram. Le ton reste celui de votre maison, jamais celui d'un catalogue.",
        metric: "20 minutes par pièce au lieu de 2 heures",
      },
      {
        title: "Le fil des projets d'atelier",
        description:
          "Chaque création en cours a son fil : attente de la pierre chez le lapidaire, fonte, sertissage, essayage, retouche de taille de doigt. L'IA relance les fournisseurs en retard, prévient le client aux étapes convenues et vous alerte quand une date de remise — souvent une demande en mariage — approche.",
        metric: "0 date de remise manquée",
      },
    ],
    roiStats: [
      {
        label: "de premiers rendez-vous aboutis en plus grâce à la qualification en amont",
        value: "×2",
      },
      {
        label: "des acheteurs de bijoux se renseignent en ligne avant de pousser la porte",
        value: "~80 %",
        source: "Études retail joaillerie",
      },
      {
        label: "de temps gagné sur la rédaction des fiches de pièces",
        value: "−80 %",
      },
    ],
    faqs: [
      {
        question: "Un assistant IA n'est-il pas trop impersonnel pour une maison de joaillerie ?",
        answer:
          "Il est conçu comme un majordome, pas comme un vendeur : ton sobre, vocabulaire de votre maison, et passage systématique vers vous dès que le projet se précise. Son rôle s'arrête où commence le vôtre — la relation en boutique reste intégralement humaine.",
      },
      {
        question: "Est-ce que ça vaut le coup pour une petite bijouterie indépendante ?",
        answer:
          "Oui, précisément parce que chaque vente compte : sur des paniers de plusieurs milliers d'euros, il suffit qu'un ou deux projets sur mesure supplémentaires aboutissent dans l'année pour rentabiliser l'ensemble. Les outils en abonnement restent sous 200 € par mois.",
      },
      {
        question: "Comment l'IA gère-t-elle la confidentialité, par exemple pour une demande en mariage ?",
        answer:
          "Les projets marqués confidentiels ne déclenchent aucun message automatique vers des adresses ou numéros partagés : vous définissez le canal sûr avec le client (téléphone personnel, email dédié). Les données restent hébergées en Europe et ne servent jamais à entraîner des modèles publics.",
      },
      {
        question: "L'IA connaît-elle le vocabulaire gemmologique ?",
        answer:
          "Elle est alimentée par vos certificats (GIA, HRD, LFG) et un lexique joaillier validé avec vous : les 4C, les types de taille, de sertissage et d'alliage sont employés correctement. Chaque fiche vous est soumise avant publication — indispensable sur des pièces engageant votre réputation.",
      },
      {
        question: "Combien de temps pour prendre l'outil en main ?",
        answer:
          "Une demi-journée pour l'essentiel : consulter les briefs qualifiés, valider les fiches, suivre les fils de projets. Le paramétrage initial — grilles de prix indicatives, étapes d'atelier, ton de la maison — est réalisé avec vous et n'est fait qu'une fois.",
      },
    ],
  },
  {
    slug: "traiteur",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "traiteur",
    name: "traiteur",
    namePlural: "traiteurs",
    icon: "Truck",
    category: "commerce",
    metaTitle: "IA pour Traiteur : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un traiteur ? Devis événementiels au couvert générés en heures, quantités calculées sans gâchis, suivi des prospects mariage : cas d'usage et ROI.",
    headline: "Des devis au couvert en quelques heures, pas en soirées",
    subheadline:
      "L'IA chiffre vos prestations au couvert à partir de vos formules, calcule les quantités par convive sans gâchis ni manque, et relance les mariés qui n'ont pas répondu.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un traiteur ?",
        answer:
          "L'IA transforme une demande — date, lieu, nombre de convives, type de réception — en devis chiffré au couvert à partir de vos formules et coefficients. Elle calcule les quantités par convive et les bons de production, relance les prospects mariage restés sans réponse et résume vos rendez-vous de cadrage.",
      },
      cost: {
        question: "Combien coûte l'IA pour un traiteur ?",
        answer:
          "Un outil de devis assisté coûte entre 50 et 200 € par mois. Un dispositif sur mesure couvrant devis au couvert, fiches de production et suivi des prospects représente un projet de 4 000 à 15 000 €, calibré selon votre volume d'événements et la variété de vos formules.",
      },
      duration: {
        question: "Combien de temps pour équiper une activité de traiteur ?",
        answer:
          "Le devis assisté est opérationnel en 3 à 5 semaines : le temps de modéliser vos formules, vos coefficients par type de réception et vos minimums de commande. Le calcul des quantités et les relances automatiques s'ajoutent ensuite, pour un déploiement complet en 6 à 8 semaines.",
      },
      roi: {
        question: "Quel retour sur investissement pour un traiteur ?",
        answer:
          "Répondre en 24 heures au lieu d'une semaine change le taux de signature : les organisateurs retiennent souvent le premier devis sérieux reçu. Un cocktail d'entreprise ou un mariage gagné en plus par trimestre couvre l'investissement, avant même les économies de gâchis sur les quantités.",
      },
    },
    painPoints: [
      "Chaque demande de devis exige des heures de chiffrage au couvert, souvent le soir après la production",
      "Les prospects signent ailleurs pendant que le devis attend d'être finalisé",
      "Les quantités par convive se calculent à l'expérience, entre gâchis coûteux et buffet dégarni",
      "Les demandes de mariage affluent en janvier et le suivi des relances s'éparpille",
    ],
    useCases: [
      "automatisation_admin",
      "chatbot_client",
      "analyse_predictive",
      "crm_ia",
      "transcription_comptes_rendus",
    ],
    concreteExamples: [
      {
        title: "Devis au couvert en 2 heures",
        description:
          "La demande arrive par le formulaire : mariage de 120 convives, cocktail puis dîner assis, service compris. L'IA assemble le devis à partir de vos formules — pièces cocktail par personne, menu, boissons, personnel de service, livraison selon la distance — et l'édite à votre charte. Vous relisez, ajustez, envoyez.",
        metric: "Devis envoyé en 24 h au lieu de 5 jours",
      },
      {
        title: "Quantités et bons de production sans gâchis",
        description:
          "Pour chaque événement confirmé, l'IA convertit le menu en quantités précises par convive — grammages, pièces par personne selon la durée du cocktail, ratios boissons — puis génère les bons de production et la liste de courses consolidée quand plusieurs événements tombent le même week-end.",
        metric: "−20 % de gâchis sur les buffets",
      },
      {
        title: "Suivi des mariés du premier contact à la dégustation",
        description:
          "Chaque prospect mariage a son fil : devis envoyé, relance douce à J+7, proposition de rendez-vous de dégustation, compte rendu du rendez-vous transcrit et résumé automatiquement avec les choix arrêtés (menu, allergies, plan de table côté traiteur). Rien ne se perd entre janvier et le jour J.",
        metric: "+30 % de devis transformés",
      },
    ],
    roiStats: [
      {
        label: "de taux de transformation en plus quand le devis part sous 24 heures",
        value: "+30 %",
      },
      {
        label: "de gains de productivité possibles sur les fonctions administratives grâce à l'IA générative",
        value: "30-40 %",
        source: "Gartner",
      },
      {
        label: "de gâchis en moins avec des quantités calculées par convive",
        value: "−15 à −20 %",
      },
    ],
    faqs: [
      {
        question: "L'IA peut-elle vraiment chiffrer un événement aussi bien que moi ?",
        answer:
          "Elle chiffre avec vos règles : vos formules, vos grammages, vos coefficients selon le type de réception et la saison, vos minimums. Le devis qu'elle produit est celui que vous auriez fait — en 2 heures au lieu d'une soirée — et vous gardez toujours la relecture avant envoi.",
      },
      {
        question: "Est-ce que ça vaut le coup pour un petit traiteur qui fait 30 événements par an ?",
        answer:
          "Oui, car le goulot d'étranglement d'un petit traiteur est justement le temps de chiffrage : chaque devis non envoyé est un événement perdu. À volume modeste, un outil en abonnement autour de 100 € par mois suffit souvent, sans passer par du sur mesure.",
      },
      {
        question: "Comment l'IA gère-t-elle les demandes très spécifiques, comme un menu casher ou sans allergènes ?",
        answer:
          "Les contraintes alimentaires font partie du brief collecté dès le formulaire : régimes, allergies, certifications requises. L'IA adapte les formules compatibles et signale ce qui exige votre arbitrage — un menu certifié, par exemple, déclenche systématiquement une validation manuelle.",
      },
      {
        question: "Combien de temps pour prendre l'outil en main ?",
        answer:
          "La modélisation initiale de vos formules se fait avec nous en deux ou trois ateliers. Ensuite, le quotidien se résume à relire les devis proposés et consulter les fils de prospects : une demi-journée de formation suffit, y compris pour un assistant ou un apprenti.",
      },
      {
        question: "Les comptes rendus de rendez-vous sont-ils fiables ?",
        answer:
          "Le rendez-vous de dégustation est enregistré avec l'accord du client, transcrit puis résumé : choix de menu, quantités, allergies, logistique du lieu. Vous validez le résumé avant qu'il n'alimente le dossier de l'événement — fini les détails convenus à l'oral et perdus six mois plus tard.",
      },
    ],
  },
]
