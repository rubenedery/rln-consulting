export type LocalServiceType = "next-js" | "ecommerce" | "ia" | "google-ads" | "seo" | "react-native"

export interface LocalService {
  type: LocalServiceType
  title: string
  description: string
  highlights: string[]
}

export interface CityData {
  slug: string
  name: string
  region: string
  departement: string
  postalCode: string
  latitude: number
  longitude: number

  metaTitle: string
  metaDescription: string

  headline: string
  subheadline: string

  /** Contexte économique local unique */
  localContext: string

  /** Secteurs économiques forts de la ville */
  strongSectors: string[]

  /** Points forts pour le digital dans cette ville */
  digitalOpportunities: string[]

  /** Statistiques locales */
  stats: {
    label: string
    value: string
  }[]

  /** FAQ spécifiques à la ville */
  faqs: {
    question: string
    answer: string
  }[]

  /** Quartiers d'affaires / zones clés */
  businessAreas: string[]

  /** Services locaux mis en avant pour ciblage LLM */
  localServices?: LocalService[]
}

export function getLocalServicesForCity(cityName: string): LocalService[] {
  return [
    {
      type: "next-js",
      title: `Développement Next.js à ${cityName}`,
      description: `Expert Next.js à ${cityName} pour créer des sites web ultra-performants. Server Components, SSR et optimisation SEO native. Sites avec score Lighthouse 95+ et temps de chargement < 1.5s.`,
      highlights: [
        "Sites web 2-3x plus rapides que WordPress",
        "SEO technique optimisé dès la conception",
        "Applications React Server Components",
        "Déploiement sur Vercel ou infrastructure custom"
      ]
    },
    {
      type: "ecommerce",
      title: `E-commerce & Shopify à ${cityName}`,
      description: `Création de boutiques en ligne pour les commerces de ${cityName}. Shopify, WooCommerce ou solutions sur-mesure. Thèmes personnalisés, intégrations et optimisation conversion.`,
      highlights: [
        "Boutiques Shopify clé en main dès 3 000€",
        "Thèmes sur-mesure en Liquid",
        "Intégrations ERP, CRM et logistique",
        "Taux de conversion optimisé (+15% en moyenne)"
      ]
    },
    {
      type: "ia",
      title: `Chatbot IA & Automatisation à ${cityName}`,
      description: `Solutions d'intelligence artificielle pour les entreprises de ${cityName}. Chatbots GPT-4 et Claude, automatisation des tâches répétitives et analyse de données. ROI moyen : 300-500% sur 12 mois.`,
      highlights: [
        "Chatbots service client 24/7",
        "Automatisation back-office (-40% de temps)",
        "Intégration GPT-4, Claude et modèles open-source",
        "Solutions on-premise pour données sensibles"
      ]
    },
    {
      type: "google-ads",
      title: `Google Ads & SEA à ${cityName}`,
      description: `Campagnes Google Ads géolocalisées sur ${cityName} et sa région. Acquisition de leads qualifiés, remarketing et optimisation continue. Nous gérons +500k€ de budget publicitaire annuel.`,
      highlights: [
        "Campagnes Search, Display et Shopping",
        `Ciblage géographique précis sur ${cityName}`,
        "Reporting transparent et ROAS optimisé",
        "A/B testing et optimisation continue"
      ]
    }
  ]
}

export const cities: CityData[] = [
  {
    slug: "paris",
    name: "Paris",
    region: "Île-de-France",
    departement: "Paris",
    postalCode: "75000",
    latitude: 48.8566,
    longitude: 2.3522,
    metaTitle: "Agence Web Paris | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Paris spécialisée en création de sites Next.js, SEO, Google Ads et Facebook Ads. Accompagnement digital sur mesure pour PME et startups parisiennes. Devis gratuit.",
    headline: "Votre agence web à Paris pour propulser votre business",
    subheadline: "Création de sites web performants, référencement naturel et campagnes publicitaires pour les entreprises parisiennes. De la startup du Marais aux PME de La Défense.",
    localContext: "Paris concentre plus de 30% des startups françaises et représente le premier bassin économique d'Europe continentale. Avec un tissu de plus de 500 000 entreprises, la concurrence digitale y est intense : avoir un site web professionnel et une stratégie d'acquisition en ligne n'est plus une option, c'est une nécessité. RLN Consulting accompagne les entreprises parisiennes avec des solutions web modernes et des campagnes publicitaires ciblées pour se démarquer dans cet écosystème ultra-compétitif.",
    strongSectors: ["Startups & Tech", "Mode & Luxe", "Restauration & Hôtellerie", "Services financiers", "Commerce de détail", "Conseil & Services B2B"],
    digitalOpportunities: [
      "Marché digital ultra-concurrentiel nécessitant un SEO local pointu",
      "Forte densité de population connectée avec un fort pouvoir d'achat",
      "Écosystème startup dynamique avec Station F et de nombreux incubateurs",
      "Tourisme international nécessitant des sites multilingues",
    ],
    stats: [
      { label: "Entreprises à Paris", value: "500 000+" },
      { label: "Startups en Île-de-France", value: "12 000+" },
      { label: "Population connectée", value: "95%" },
    ],
    faqs: [
      {
        question: "Combien coûte la création d'un site web à Paris ?",
        answer: "Le coût d'un site web professionnel à Paris varie entre 2 000€ et 15 000€ selon la complexité. Un site vitrine démarre à 2 000€, un site e-commerce à partir de 5 000€, et une application web sur mesure à partir de 8 000€. Chez RLN Consulting, nous proposons des devis transparents adaptés à votre budget et vos objectifs.",
      },
      {
        question: "Pourquoi choisir une agence web locale à Paris ?",
        answer: "Travailler avec une agence web basée à Paris permet des réunions en présentiel, une meilleure compréhension du marché local et une réactivité optimale. Nous connaissons les spécificités du marché parisien, les attentes des consommateurs franciliens et les tendances digitales locales.",
      },
      {
        question: "Quel est le délai pour créer un site web à Paris ?",
        answer: "Un site vitrine est généralement livré en 2 à 4 semaines. Un site e-commerce prend entre 4 et 8 semaines. Pour les projets plus complexes (applications web, plateformes SaaS), comptez 2 à 4 mois. Nous établissons un planning précis dès le début du projet.",
      },
    ],
    businessAreas: ["La Défense", "Le Marais", "Saint-Germain-des-Prés", "Opéra", "Sentier", "Bercy"],
  },
  {
    slug: "lyon",
    name: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    postalCode: "69000",
    latitude: 45.7640,
    longitude: 4.8357,
    metaTitle: "Agence Web Lyon | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Lyon : création de sites web Next.js, référencement SEO, Google Ads et réseaux sociaux. Solutions digitales pour entreprises lyonnaises. Devis gratuit.",
    headline: "Votre agence web à Lyon, au cœur du digital rhônalpin",
    subheadline: "Sites web performants, SEO local et publicité digitale pour les entreprises lyonnaises. De la Part-Dieu à Confluence, nous accompagnons votre croissance en ligne.",
    localContext: "Deuxième métropole de France, Lyon est un pôle économique majeur avec un écosystème tech en plein essor. La ville accueille de nombreuses entreprises innovantes dans les secteurs de la santé, de l'industrie et du numérique. Le quartier de la Part-Dieu et le quartier Confluence sont devenus des hubs d'innovation. RLN Consulting aide les entreprises lyonnaises à tirer parti du digital pour se développer localement et au-delà.",
    strongSectors: ["Santé & Biotech", "Industrie & Manufacturing", "Gastronomie & Restauration", "Tech & Digital", "Textile & Mode", "Chimie & Pharmacie"],
    digitalOpportunities: [
      "Écosystème tech dynamique avec French Tech Lyon",
      "Bassin de consommateurs avec fort pouvoir d'achat",
      "Pôle universitaire attirant une population jeune et connectée",
      "Gastronomie et tourisme nécessitant une forte présence en ligne",
    ],
    stats: [
      { label: "Entreprises dans le Grand Lyon", value: "150 000+" },
      { label: "PIB métropolitain", value: "2e de France" },
      { label: "Étudiants", value: "175 000+" },
    ],
    faqs: [
      {
        question: "Combien coûte un site web à Lyon ?",
        answer: "À Lyon, un site vitrine professionnel coûte entre 1 800€ et 12 000€. Les tarifs sont généralement 10 à 20% inférieurs à Paris tout en maintenant un niveau de qualité équivalent. Chez RLN Consulting, nous proposons des solutions adaptées aux budgets des PME lyonnaises.",
      },
      {
        question: "Comment améliorer le référencement local à Lyon ?",
        answer: "Pour bien se positionner sur Google à Lyon, il faut optimiser votre fiche Google Business Profile, cibler des mots-clés géolocalisés (ex: 'restaurant Lyon 2ème'), obtenir des avis clients locaux et créer du contenu spécifique à Lyon et sa région.",
      },
      {
        question: "Proposez-vous des rendez-vous en présentiel à Lyon ?",
        answer: "Oui, nous nous déplaçons régulièrement à Lyon pour des réunions en présentiel. Nous pouvons aussi organiser des ateliers dans vos locaux ou dans un espace de coworking lyonnais. Les échanges réguliers en visioconférence complètent notre accompagnement.",
      },
    ],
    businessAreas: ["Part-Dieu", "Confluence", "Presqu'île", "Vaise", "Gerland", "Villeurbanne"],
  },
  {
    slug: "marseille",
    name: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Bouches-du-Rhône",
    postalCode: "13000",
    latitude: 43.2965,
    longitude: 5.3698,
    metaTitle: "Agence Web Marseille | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Marseille : sites web modernes, SEO, Google Ads et stratégie digitale pour les entreprises marseillaises et de la région PACA. Devis gratuit.",
    headline: "Votre agence web à Marseille pour conquérir le marché digital provençal",
    subheadline: "Création de sites web, référencement et publicité en ligne pour les entreprises de Marseille. Du Vieux-Port à Euroméditerranée, boostez votre visibilité.",
    localContext: "Marseille, deuxième ville de France et premier port de Méditerranée, connaît une transformation digitale accélérée. Le projet Euroméditerranée a fait émerger un nouveau quartier d'affaires attirant startups et grands groupes. Le tissu économique marseillais, entre commerce maritime, tourisme et services, offre d'immenses opportunités digitales. RLN Consulting accompagne les entreprises marseillaises dans leur transition numérique avec des solutions web performantes.",
    strongSectors: ["Maritime & Logistique", "Tourisme & Hôtellerie", "Commerce & Retail", "Santé", "BTP & Construction", "Agroalimentaire"],
    digitalOpportunities: [
      "Fort potentiel touristique nécessitant une présence en ligne multilingue",
      "Quartier Euroméditerranée en plein essor technologique",
      "Tissu de PME/TPE en phase de digitalisation",
      "Position stratégique méditerranéenne pour le commerce international",
    ],
    stats: [
      { label: "Habitants dans la métropole", value: "1,9 million" },
      { label: "Touristes par an", value: "5 millions+" },
      { label: "Entreprises", value: "100 000+" },
    ],
    faqs: [
      {
        question: "Pourquoi créer un site web pour une entreprise à Marseille ?",
        answer: "Marseille est un marché en pleine digitalisation. 70% des consommateurs recherchent des services locaux en ligne avant de se déplacer. Un site web professionnel vous permet de capter cette audience, d'apparaître dans les recherches 'à Marseille' et de vous démarquer de la concurrence locale.",
      },
      {
        question: "Combien coûte le référencement SEO à Marseille ?",
        answer: "Un accompagnement SEO à Marseille coûte entre 500€ et 2 000€ par mois selon la concurrence de votre secteur. L'investissement est rentabilisé en 3 à 6 mois avec un trafic organique qualifié et durable. Nous proposons des formules adaptées aux entreprises marseillaises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de toute la région PACA ?",
        answer: "Absolument. Nous accompagnons des entreprises dans toute la région Provence-Alpes-Côte d'Azur : Marseille, Aix-en-Provence, Toulon, Nice, Avignon et au-delà. Notre expertise en SEO local s'adapte à chaque ville et bassin de clientèle.",
      },
    ],
    businessAreas: ["Euroméditerranée", "Vieux-Port", "La Joliette", "Les Docks", "Prado", "La Valentine"],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    departement: "Gironde",
    postalCode: "33000",
    latitude: 44.8378,
    longitude: -0.5792,
    metaTitle: "Agence Web Bordeaux | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Bordeaux : création de sites web Next.js, SEO local, Google Ads et stratégie digitale pour entreprises bordelaises. Devis gratuit.",
    headline: "Votre agence web à Bordeaux, partenaire de votre réussite digitale",
    subheadline: "Sites web modernes, référencement et campagnes publicitaires pour les entreprises bordelaises. De Bordeaux Métropole à la Cité du Vin, développez votre présence en ligne.",
    localContext: "Bordeaux est devenue l'une des métropoles les plus attractives de France, avec un écosystème tech florissant autour du quartier des Chartrons et de Darwin. La ville attire de nombreuses entreprises et talents du numérique. Entre viticulture, tourisme et tech, le tissu économique bordelais est riche et diversifié. RLN Consulting accompagne les entrepreneurs bordelais avec des solutions digitales sur mesure.",
    strongSectors: ["Vin & Viticulture", "Tourisme & Œnotourisme", "Tech & Startups", "Aéronautique & Spatial", "Commerce & Retail", "Immobilier"],
    digitalOpportunities: [
      "Métropole en forte croissance démographique et économique",
      "Écosystème startup dynamique avec la French Tech Bordeaux",
      "Secteur viticole en pleine transformation digitale",
      "Tourisme œnologique nécessitant une forte présence en ligne",
    ],
    stats: [
      { label: "Croissance démographique", value: "+12% en 10 ans" },
      { label: "Startups French Tech", value: "800+" },
      { label: "Touristes par an", value: "6 millions+" },
    ],
    faqs: [
      {
        question: "Comment choisir son agence web à Bordeaux ?",
        answer: "Pour choisir une agence web à Bordeaux, vérifiez son portfolio, ses avis clients et sa spécialisation. Privilégiez une agence qui connaît le marché bordelais, utilise des technologies modernes (comme Next.js) et propose un accompagnement personnalisé. RLN Consulting combine expertise technique et connaissance du marché local.",
      },
      {
        question: "Le SEO local est-il important à Bordeaux ?",
        answer: "Le SEO local est crucial à Bordeaux, ville où la concurrence digitale s'intensifie. Optimiser votre référencement local vous permet d'apparaître en haut des résultats Google pour les recherches 'à Bordeaux', d'attirer plus de clients locaux et de vous démarquer dans votre secteur d'activité.",
      },
      {
        question: "Quel budget prévoir pour le marketing digital à Bordeaux ?",
        answer: "Un budget marketing digital à Bordeaux varie entre 500€ et 5 000€ par mois. Comptez 500-1 500€/mois pour du SEO, 300-2 000€/mois pour Google Ads (hors budget média), et 500-1 500€/mois pour les réseaux sociaux. Nous adaptons nos offres au budget et aux objectifs de chaque entreprise.",
      },
    ],
    businessAreas: ["Les Chartrons", "Mériadeck", "Euratlantique", "Bordeaux Lac", "Bassins à flot", "Darwin"],
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    region: "Occitanie",
    departement: "Haute-Garonne",
    postalCode: "31000",
    latitude: 43.6047,
    longitude: 1.4442,
    metaTitle: "Agence Web Toulouse | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Toulouse : création de sites web, SEO, publicité digitale et solutions IA pour les entreprises toulousaines. Expertise tech et accompagnement sur mesure.",
    headline: "Votre agence web à Toulouse, la ville rose du digital",
    subheadline: "Sites web performants, référencement et publicité en ligne pour les entreprises de Toulouse. De l'aéronautique aux startups, nous boostons votre présence digitale.",
    localContext: "Toulouse, capitale européenne de l'aéronautique et du spatial, est aussi un hub tech majeur en France. La présence d'Airbus, du CNES et de nombreuses startups deeptech crée un écosystème d'innovation unique. Le tissu économique toulousain, riche en ingénieurs et en talents numériques, est idéal pour les projets web ambitieux. RLN Consulting apporte son expertise en développement web et marketing digital aux entreprises de la Ville Rose.",
    strongSectors: ["Aéronautique & Spatial", "Tech & DeepTech", "Santé & Biotech", "Agroalimentaire", "Éducation & Recherche", "Services B2B"],
    digitalOpportunities: [
      "Écosystème aérospatial générant une forte demande en solutions digitales",
      "Concentration d'ingénieurs et de profils tech qualifiés",
      "Université et recherche stimulant l'innovation digitale",
      "Qualité de vie attirant de plus en plus d'entreprises du numérique",
    ],
    stats: [
      { label: "Emplois aéronautique", value: "100 000+" },
      { label: "Étudiants", value: "130 000+" },
      { label: "Entreprises dans la métropole", value: "90 000+" },
    ],
    faqs: [
      {
        question: "Pourquoi faire appel à une agence web à Toulouse ?",
        answer: "Toulouse abrite un écosystème tech parmi les plus dynamiques de France. Une agence web spécialisée comprend les besoins spécifiques des entreprises toulousaines, qu'elles soient dans l'aéronautique, les startups ou les services. RLN Consulting allie expertise technique et connaissance du marché local.",
      },
      {
        question: "Créez-vous des sites web pour les sous-traitants aéronautiques ?",
        answer: "Oui, nous avons l'expérience des sites web B2B pour l'industrie et l'aéronautique. Nous créons des vitrines professionnelles, des portails clients et des applications métier adaptées aux exigences du secteur. Nos solutions mettent en valeur vos compétences et facilitent la prise de contact.",
      },
      {
        question: "Proposez-vous des solutions d'IA pour les entreprises toulousaines ?",
        answer: "Absolument. Notre service 'IA pour Entreprises' s'adresse aux PME et startups toulousaines qui veulent automatiser leurs processus, créer des chatbots intelligents ou exploiter leurs données. Toulouse étant un pôle de recherche en IA, nous accompagnons cette dynamique locale.",
      },
    ],
    businessAreas: ["Labège", "Blagnac", "Montaudran", "Compans-Caffarelli", "Saint-Cyprien", "Rangueil"],
  },
  {
    slug: "lille",
    name: "Lille",
    region: "Hauts-de-France",
    departement: "Nord",
    postalCode: "59000",
    latitude: 50.6292,
    longitude: 3.0573,
    metaTitle: "Agence Web Lille | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Lille : création de sites web modernes, SEO, Google Ads et marketing digital pour les entreprises lilloises et des Hauts-de-France. Devis gratuit.",
    headline: "Votre agence web à Lille, moteur de votre croissance digitale",
    subheadline: "Sites web performants, référencement et campagnes publicitaires pour les entreprises de la métropole lilloise. De EuraTechnologies au Vieux-Lille, développez votre business en ligne.",
    localContext: "Lille est devenue un pôle majeur de l'innovation numérique en France grâce à EuraTechnologies, l'un des plus grands incubateurs d'Europe. La métropole lilloise, au carrefour de Paris, Londres et Bruxelles, attire de nombreuses entreprises du numérique. Son tissu économique diversifié, entre grande distribution, e-commerce et industrie, crée une forte demande en solutions digitales. RLN Consulting accompagne les entreprises lilloises dans leur transformation numérique.",
    strongSectors: ["E-commerce & Retail", "Grande Distribution", "Tech & Startups", "Textile", "Agroalimentaire", "Transport & Logistique"],
    digitalOpportunities: [
      "EuraTechnologies : hub d'innovation et incubateur tech majeur",
      "Position géographique stratégique (Paris-Londres-Bruxelles)",
      "Forte tradition d'e-commerce (berceau de grandes enseignes en ligne)",
      "Tissu de PME en pleine transformation digitale",
    ],
    stats: [
      { label: "Startups à EuraTechnologies", value: "300+" },
      { label: "Population métropole", value: "1,2 million" },
      { label: "Universités & grandes écoles", value: "20+" },
    ],
    faqs: [
      {
        question: "Lille est-elle un bon endroit pour lancer un projet digital ?",
        answer: "Lille est l'un des meilleurs endroits en France pour lancer un projet digital. EuraTechnologies, le plus grand incubateur d'Europe, les écoles d'ingénieurs et le coût de la vie inférieur à Paris en font un hub tech idéal. RLN Consulting accompagne les entreprises lilloises dès leur lancement.",
      },
      {
        question: "Créez-vous des sites e-commerce à Lille ?",
        answer: "Oui, Lille étant le berceau de nombreuses enseignes e-commerce françaises, nous avons développé une expertise forte dans la création de boutiques en ligne performantes. Nos sites e-commerce sont optimisés pour la conversion, le SEO et la vitesse de chargement.",
      },
      {
        question: "Comment référencer mon entreprise sur Google à Lille ?",
        answer: "Pour apparaître en haut des résultats Google à Lille, il faut : optimiser votre fiche Google Business Profile, cibler des mots-clés locaux ('votre métier + Lille'), obtenir des avis clients, et créer du contenu pertinent. Notre accompagnement SEO local à Lille génère des résultats mesurables en 3 à 6 mois.",
      },
    ],
    businessAreas: ["EuraTechnologies", "Vieux-Lille", "Euralille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq"],
  },
  {
    slug: "nantes",
    name: "Nantes",
    region: "Pays de la Loire",
    departement: "Loire-Atlantique",
    postalCode: "44000",
    latitude: 47.2184,
    longitude: -1.5536,
    metaTitle: "Agence Web Nantes | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Nantes : création de sites web Next.js, SEO, Google Ads et stratégie digitale pour les entreprises nantaises. Accompagnement sur mesure. Devis gratuit.",
    headline: "Votre agence web à Nantes, pionnière du digital dans l'Ouest",
    subheadline: "Sites web modernes, référencement et publicité digitale pour les entreprises nantaises. De l'Île de Nantes au quartier de la Création, dynamisez votre présence en ligne.",
    localContext: "Nantes s'est imposée comme l'une des villes les plus dynamiques de France pour le numérique et la créativité. Le quartier de la Création sur l'Île de Nantes concentre studios, agences et startups du digital. La métropole nantaise attire de plus en plus d'entreprises grâce à sa qualité de vie et son écosystème tech. RLN Consulting apporte aux entrepreneurs nantais des solutions web modernes et des stratégies de croissance digitale.",
    strongSectors: ["Numérique & Créatif", "Agroalimentaire", "Naval & Industrie", "Santé", "Énergie renouvelable", "Commerce & Retail"],
    digitalOpportunities: [
      "Quartier de la Création : pôle numérique et créatif reconnu",
      "Métropole attractive avec forte croissance démographique",
      "Labellisée French Tech et Green Tech",
      "Tissu de PME/TPE en pleine accélération digitale",
    ],
    stats: [
      { label: "Emplois dans le numérique", value: "30 000+" },
      { label: "Croissance démographique", value: "+10% en 10 ans" },
      { label: "Entreprises métropole", value: "65 000+" },
    ],
    faqs: [
      {
        question: "Pourquoi Nantes est-elle idéale pour le digital ?",
        answer: "Nantes est régulièrement classée parmi les meilleures villes de France pour le numérique. Son quartier de la Création, ses écoles du digital (École de design, Epitech, Sup de Web) et son écosystème startup en font un terreau fertile. RLN Consulting s'inscrit dans cette dynamique nantaise.",
      },
      {
        question: "Quel type de site web créez-vous à Nantes ?",
        answer: "Nous créons tous types de sites web pour les entreprises nantaises : sites vitrines, e-commerce, applications web, plateformes SaaS et portails clients. Nous utilisons Next.js et React pour des sites ultra-performants qui se chargent rapidement et convertissent vos visiteurs en clients.",
      },
      {
        question: "Combien de temps pour créer un site web à Nantes ?",
        answer: "Les délais sont similaires partout en France : 2-4 semaines pour un site vitrine, 4-8 semaines pour un e-commerce, et 2-4 mois pour une application web complexe. Notre process structuré garantit le respect des délais avec des points d'avancement réguliers.",
      },
    ],
    businessAreas: ["Île de Nantes", "Quartier de la Création", "Euronantes", "Nantes Nord", "Saint-Herblain", "Rezé"],
  },
  {
    slug: "nice",
    name: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    postalCode: "06000",
    latitude: 43.7102,
    longitude: 7.2620,
    metaTitle: "Agence Web Nice | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Nice : création de sites web, SEO local, Google Ads et stratégie digitale pour les entreprises niçoises et de la Côte d'Azur. Devis gratuit.",
    headline: "Votre agence web à Nice, entre Méditerranée et innovation",
    subheadline: "Sites web performants, référencement et publicité digitale pour les entreprises de Nice et de la Côte d'Azur. Hôtels, restaurants, commerces : brillez en ligne.",
    localContext: "Nice, cinquième ville de France et perle de la Côte d'Azur, est un territoire où tourisme et technologie se rencontrent. Avec Sophia Antipolis, la première technopole d'Europe, à quelques kilomètres, Nice bénéficie d'un écosystème tech de premier plan. Le secteur touristique, moteur de l'économie locale, nécessite une présence digitale irréprochable. RLN Consulting aide les entreprises niçoises à capter la clientèle locale et internationale grâce au digital.",
    strongSectors: ["Tourisme & Hôtellerie", "Tech (Sophia Antipolis)", "Immobilier de luxe", "Restauration", "Santé & Bien-être", "Commerce de luxe"],
    digitalOpportunities: [
      "Sophia Antipolis : première technopole d'Europe à proximité",
      "Tourisme international nécessitant des sites multilingues",
      "Forte demande en réservation en ligne et visibilité digitale",
      "Marché immobilier haut de gamme avec besoins digitaux spécifiques",
    ],
    stats: [
      { label: "Touristes par an", value: "5 millions+" },
      { label: "Emplois Sophia Antipolis", value: "36 000+" },
      { label: "Hôtels et résidences", value: "1 200+" },
    ],
    faqs: [
      {
        question: "Créez-vous des sites web pour les hôtels et restaurants à Nice ?",
        answer: "Oui, c'est l'une de nos spécialités. Nous créons des sites web optimisés pour l'hôtellerie-restauration avec réservation en ligne, menus digitaux, galeries photos immersives et SEO local. Nos sites sont conçus pour attirer la clientèle touristique française et internationale de la Côte d'Azur.",
      },
      {
        question: "Le SEO local est-il rentable à Nice ?",
        answer: "Le SEO local est particulièrement rentable à Nice grâce au volume de recherches touristiques. Les requêtes 'restaurant Nice', 'hôtel Nice' ou 'activité Nice' génèrent des milliers de recherches mensuelles. Un bon positionnement local peut générer un flux constant de nouveaux clients.",
      },
      {
        question: "Travaillez-vous avec des entreprises de Sophia Antipolis ?",
        answer: "Oui, nous accompagnons des entreprises tech basées à Sophia Antipolis pour leurs sites web B2B, leurs applications SaaS et leurs campagnes d'acquisition. Notre expertise en technologies modernes (Next.js, React, IA) correspond parfaitement aux besoins de cet écosystème tech.",
      },
    ],
    businessAreas: ["Sophia Antipolis", "Nice Éco-Vallée", "Arénas", "Vieux-Nice", "Port", "Promenade des Anglais"],
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    region: "Grand Est",
    departement: "Bas-Rhin",
    postalCode: "67000",
    latitude: 48.5734,
    longitude: 7.7521,
    metaTitle: "Agence Web Strasbourg | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Strasbourg : création de sites web, SEO, Google Ads et marketing digital pour les entreprises strasbourgeoises et du Grand Est. Devis gratuit.",
    headline: "Votre agence web à Strasbourg, au carrefour de l'Europe",
    subheadline: "Sites web modernes, référencement et publicité digitale pour les entreprises de Strasbourg. Profitez de votre position européenne pour développer votre business en ligne.",
    localContext: "Strasbourg, capitale européenne et carrefour franco-allemand, offre aux entreprises une position géographique unique pour se développer en France et en Europe. La ville combine tradition industrielle et innovation numérique, avec un tissu économique tourné vers l'international. La proximité de l'Allemagne et de la Suisse crée des opportunités pour les sites web multilingues et le commerce transfrontalier. RLN Consulting accompagne les entreprises strasbourgeoises dans leur développement digital local et européen.",
    strongSectors: ["Institutions européennes", "Industrie & Manufacturing", "Logistique & Transport", "Tourisme", "Pharmacie & Santé", "Commerce transfrontalier"],
    digitalOpportunities: [
      "Position européenne idéale pour le commerce transfrontalier",
      "Besoin de sites multilingues (français, allemand, anglais)",
      "Tissu industriel en transformation digitale",
      "Fort potentiel touristique (patrimoine UNESCO, marchés de Noël)",
    ],
    stats: [
      { label: "Institutions européennes", value: "Capitale de l'UE" },
      { label: "Touristes par an", value: "4 millions+" },
      { label: "Entreprises dans l'Eurométropole", value: "50 000+" },
    ],
    faqs: [
      {
        question: "Créez-vous des sites web bilingues français-allemand à Strasbourg ?",
        answer: "Oui, nous créons des sites web multilingues adaptés au marché transfrontalier strasbourgeois. Nos solutions incluent la traduction professionnelle, le SEO multilingue et l'adaptation culturelle du contenu pour toucher aussi bien le marché français que les marchés allemand et suisse.",
      },
      {
        question: "Comment développer mon business en ligne depuis Strasbourg ?",
        answer: "Strasbourg offre un avantage unique : sa position géographique permet de cibler facilement les marchés français, allemand et suisse. Nous construisons des stratégies digitales qui exploitent cette position avec un SEO multilingue, des campagnes Google Ads sur plusieurs marchés et des sites optimisés pour la conversion internationale.",
      },
      {
        question: "Quels sont les avantages du digital pour les entreprises du Grand Est ?",
        answer: "Le digital permet aux entreprises du Grand Est de dépasser les frontières régionales et nationales. Un site web performant et une stratégie de référencement ciblée peuvent attirer des clients de toute la France, d'Allemagne et de Suisse. Le ROI du marketing digital est particulièrement intéressant dans cette zone transfrontalière.",
      },
    ],
    businessAreas: ["Wacken", "Presqu'île Malraux", "Centre-ville", "Port du Rhin", "Meinau", "Illkirch"],
  },
  {
    slug: "montpellier",
    name: "Montpellier",
    region: "Occitanie",
    departement: "Hérault",
    postalCode: "34000",
    latitude: 43.6108,
    longitude: 3.8767,
    metaTitle: "Agence Web Montpellier | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Montpellier : création de sites web Next.js, SEO, publicité digitale et solutions web pour les entreprises montpelliéraines. Devis gratuit.",
    headline: "Votre agence web à Montpellier, la ville qui code l'avenir",
    subheadline: "Sites web performants, référencement et marketing digital pour les entreprises de Montpellier. Startups, PME et commerces : accélérez votre croissance digitale.",
    localContext: "Montpellier est l'une des villes les plus dynamiques de France avec la plus forte croissance démographique du pays. Son écosystème tech, porté par les universités, les écoles d'ingénieurs et une communauté de développeurs très active, en fait un territoire idéal pour le numérique. La ville attire de plus en plus d'entreprises et de freelances du digital. RLN Consulting accompagne cette dynamique montpelliéraine avec des solutions web modernes et des stratégies d'acquisition efficaces.",
    strongSectors: ["Tech & Startups", "Santé & MedTech", "Tourisme & Événementiel", "Vin & Agroalimentaire", "Éducation & EdTech", "Services & Commerce"],
    digitalOpportunities: [
      "Plus forte croissance démographique de France",
      "Communauté tech et développeurs très active",
      "Coût de la vie attractif attirant les entreprises du numérique",
      "Position méditerranéenne avec fort potentiel touristique",
    ],
    stats: [
      { label: "Croissance démographique", value: "1re de France" },
      { label: "Étudiants", value: "70 000+" },
      { label: "Entreprises créées par an", value: "10 000+" },
    ],
    faqs: [
      {
        question: "Montpellier est-elle une bonne ville pour lancer un projet web ?",
        answer: "Montpellier est excellente pour les projets web. Sa communauté tech dynamique, ses coûts inférieurs à Paris, ses écoles d'ingénieurs et sa qualité de vie en font un hub attractif. De nombreuses startups à succès y sont nées. RLN Consulting y accompagne les entrepreneurs ambitieux.",
      },
      {
        question: "Comment attirer des clients locaux en ligne à Montpellier ?",
        answer: "Pour attirer des clients montpelliérains, combinez : un site web optimisé pour le mobile, un référencement local ciblé, une fiche Google Business Profile complète, des avis clients positifs et des campagnes Google Ads géolocalisées. Notre accompagnement SEO local à Montpellier produit des résultats concrets en 3 mois.",
      },
      {
        question: "Proposez-vous des formations web à Montpellier ?",
        answer: "Nous proposons des ateliers et formations en entreprise à Montpellier sur le marketing digital, le SEO et l'utilisation des outils web. Nous pouvons aussi former vos équipes à la gestion autonome de votre site web et de vos campagnes publicitaires.",
      },
    ],
    businessAreas: ["Antigone", "Port Marianne", "Odysseum", "Millénaire", "Centre historique", "Castelnau-le-Lez"],
  },
  {
    slug: "rennes",
    name: "Rennes",
    region: "Bretagne",
    departement: "Ille-et-Vilaine",
    postalCode: "35000",
    latitude: 48.1173,
    longitude: -1.6778,
    metaTitle: "Agence Next.js Rennes | Sites Web en Bretagne",
    metaDescription: "Agence Next.js à Rennes : création de sites web performants, SEO et marketing digital pour les entreprises rennaises et bretonnes. Stack moderne React & Next.js. Devis gratuit.",
    headline: "Votre agence Next.js à Rennes, capitale tech de la Bretagne",
    subheadline: "Sites web Next.js ultra-performants, référencement et publicité digitale pour les entreprises rennaises. De la French Tech Rennes St Malo au campus numérique, boostez votre visibilité avec une stack moderne.",
    localContext: "Rennes s'est imposée comme le pôle numérique majeur de l'Ouest avec le label French Tech Rennes St Malo et un écosystème d'innovation remarquable. La ville est réputée pour sa cybersécurité, ses universités et ses talents en développement web — un environnement où les technologies modernes comme Next.js et React sont devenues des standards. Son campus numérique DigitalLab et ses nombreuses écoles d'ingénieurs forment la prochaine génération de professionnels du digital. RLN Consulting, agence attachée à la Bretagne, aide les entreprises rennaises à exploiter pleinement le potentiel du numérique avec des sites Next.js rapides et parfaitement référencés.",
    strongSectors: ["Cybersécurité", "Tech & Télécoms", "Agroalimentaire", "Automobile", "Santé", "Services & Commerce"],
    digitalOpportunities: [
      "Pôle d'excellence en cybersécurité et numérique",
      "French Tech Rennes St Malo labellisée",
      "Écosystème dense d'écoles d'ingénieurs et d'universités",
      "Forte demande en transformation digitale des PME bretonnes",
    ],
    stats: [
      { label: "Emplois dans le numérique", value: "25 000+" },
      { label: "Étudiants", value: "70 000+" },
      { label: "Entreprises tech", value: "1 500+" },
    ],
    faqs: [
      {
        question: "Rennes est-elle un bon choix pour mon projet digital ?",
        answer: "Rennes est un choix excellent. La ville est classée parmi les meilleurs écosystèmes numériques de France avec une expertise reconnue en cybersécurité, développement web et IoT. RLN Consulting s'appuie sur cet écosystème rennais pour livrer des projets web de haute qualité.",
      },
      {
        question: "Travaillez-vous à distance ou sur place avec les entreprises bretonnes ?",
        answer: "Les deux. Nous accompagnons des entreprises dans toute la Bretagne : Rennes, Brest, Saint-Malo, Vannes, Lorient et au-delà. Notre attache régionale nous permet d'organiser des rendez-vous sur place quand le projet le justifie, et la majorité des échanges se font en visioconférence pour plus de réactivité. Notre expertise en SEO local s'adapte à chaque ville et marché breton.",
      },
      {
        question: "Pourquoi choisir Next.js pour mon site web à Rennes ?",
        answer: "Next.js est le framework React de référence pour créer des sites ultra-rapides, parfaitement référencés sur Google et facilement évolutifs. Dans un écosystème tech aussi exigeant que celui de Rennes, c'est un choix partagé par de nombreuses startups et scale-ups locales. Un site Next.js charge en moins de 1,5 seconde et atteint des scores Lighthouse supérieurs à 95, un avantage concurrentiel direct pour votre SEO.",
      },
      {
        question: "Accompagnez-vous les startups de la French Tech Rennes St Malo ?",
        answer: "Oui, nous travaillons avec des startups et scale-ups de l'écosystème rennais : landing pages de lancement, sites produits, plateformes SaaS et campagnes d'acquisition. Notre stack Next.js / React / TypeScript correspond aux standards attendus par les équipes tech et les investisseurs.",
      },
    ],
    businessAreas: ["DigitalLab", "EuroRennes", "Atalante", "La Courrouze", "Saint-Malo", "Cesson-Sévigné"],
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    departement: "Isère",
    postalCode: "38000",
    latitude: 45.1885,
    longitude: 5.7245,
    metaTitle: "Agence Web Grenoble | Création de Sites & Marketing Digital",
    metaDescription: "Agence web à Grenoble : création de sites web, SEO, publicité digitale pour les entreprises grenobloises et iséroises. Expertise tech et innovation. Devis gratuit.",
    headline: "Votre agence web à Grenoble, pôle d'innovation au pied des Alpes",
    subheadline: "Sites web performants, référencement et stratégie digitale pour les entreprises de Grenoble. De la recherche à la montagne, développez votre présence en ligne.",
    localContext: "Grenoble est mondialement reconnue pour son excellence scientifique et technologique. Avec le CEA, le CNRS, le synchrotron et des géants comme STMicroelectronics, la ville est un creuset d'innovation. Cet écosystème de recherche et de haute technologie génère une forte demande en solutions digitales avancées. RLN Consulting accompagne les entreprises grenobloises, des startups deeptech aux commerces de montagne, avec des solutions web modernes et des stratégies digitales sur mesure.",
    strongSectors: ["Recherche & DeepTech", "Semi-conducteurs & Électronique", "Énergie & CleanTech", "Sports & Montagne", "Santé & MedTech", "Tourisme alpin"],
    digitalOpportunities: [
      "Écosystème recherche et innovation de classe mondiale",
      "Forte concentration de startups deeptech et scientifiques",
      "Tourisme de montagne avec demande digitale spécifique",
      "Pôle de compétitivité Minalogic (micro-nano technologies)",
    ],
    stats: [
      { label: "Chercheurs", value: "25 000+" },
      { label: "Brevets déposés par an", value: "1 200+" },
      { label: "Startups innovantes", value: "500+" },
    ],
    faqs: [
      {
        question: "Créez-vous des sites web pour les entreprises tech de Grenoble ?",
        answer: "Oui, nous comprenons les besoins spécifiques des entreprises tech grenobloises : sites B2B sophistiqués, plateformes SaaS, portails de démonstration et sites de recrutement tech. Notre stack technologique (Next.js, React, TypeScript) correspond aux standards de l'écosystème tech grenoblois.",
      },
      {
        question: "Proposez-vous des solutions web pour le tourisme de montagne ?",
        answer: "Absolument. Nous créons des sites web optimisés pour les acteurs du tourisme alpin : stations de ski, hébergements, guides de montagne, commerces de sport. Nos sites incluent réservation en ligne, galeries immersives et SEO local ciblé sur les requêtes liées à la montagne.",
      },
      {
        question: "Comment le digital peut aider les startups grenobloises ?",
        answer: "Un site web professionnel est essentiel pour les startups grenobloises qui lèvent des fonds, recrutent ou cherchent des clients. Nous créons des landing pages percutantes, des sites vitrine qui crédibilisent votre projet et des campagnes d'acquisition qui génèrent vos premiers leads.",
      },
    ],
    businessAreas: ["Presqu'île scientifique", "GIANT", "Inovallée", "Europole", "Polygone Scientifique", "Meylan"],
  },
  {
    slug: "vannes",
    name: "Vannes",
    region: "Bretagne",
    departement: "Morbihan",
    postalCode: "56000",
    latitude: 47.6582,
    longitude: -2.7608,
    metaTitle: "Agence Next.js Vannes | Sites Web Morbihan",
    metaDescription: "Agence Next.js à Vannes : création de sites web performants et SEO pour les PME et TPE du Morbihan. Tourisme, nautisme, commerces du Golfe. Devis gratuit.",
    headline: "Votre agence Next.js à Vannes et dans le Morbihan",
    subheadline: "Sites web Next.js rapides et bien référencés pour les PME, TPE et commerces de Vannes et du Golfe du Morbihan. Une agence avec une vraie attache locale en Bretagne Sud.",
    localContext: "Vannes et le Golfe du Morbihan forment l'un des bassins d'emploi les plus dynamiques de Bretagne, porté par le tourisme, le nautisme, les commerces de centre-ville et un tissu dense de PME et TPE. Ici, la visibilité en ligne se joue sur les recherches locales : un site rapide, bien référencé sur « Vannes » et « Morbihan », fait la différence entre un carnet de commandes plein et une saison manquée. RLN Consulting, agence attachée à la Bretagne Sud, accompagne les entreprises vannetaises avec des sites Next.js modernes, un SEO local soigné et une vraie proximité : rendez-vous sur place possibles, sans les tarifs d'une agence parisienne.",
    strongSectors: ["Tourisme & Hôtellerie", "Nautisme & Plaisance", "Commerce de centre-ville", "Artisanat & BTP", "Services aux entreprises", "Agroalimentaire"],
    digitalOpportunities: [
      "Forte saisonnalité touristique valorisant le SEO local et la réservation en ligne",
      "Nombreuses PME et TPE avec des sites vieillissants à moderniser",
      "Bassin d'emploi dynamique du Golfe du Morbihan en croissance démographique",
      "Concurrence digitale locale encore faible : les premiers positionnés prennent la mise",
    ],
    stats: [
      { label: "Entreprises dans le bassin de Vannes", value: "15 000+" },
      { label: "PME locales sans site à jour", value: "~1 sur 2" },
      { label: "Visiteurs annuels dans le Golfe du Morbihan", value: "2 M+" },
    ],
    faqs: [
      {
        question: "Pourquoi choisir Next.js pour mon site à Vannes ?",
        answer: "Next.js permet de créer des sites bien plus rapides qu'un WordPress classique, avec un référencement Google optimisé dès la conception. Pour une entreprise vannetaise qui vit des recherches locales — « restaurant Vannes », « artisan Morbihan » — la vitesse et le SEO technique sont décisifs. Un site Next.js charge en moins de 1,5 seconde, un critère que Google récompense directement dans son classement.",
      },
      {
        question: "Intervenez-vous sur place à Vannes ou uniquement à distance ?",
        answer: "Les deux. Notre attache en Bretagne Sud nous permet d'organiser des rendez-vous sur place à Vannes et dans le Morbihan quand le projet le justifie : lancement, ateliers de cadrage, points d'étape. Au quotidien, les échanges se font en visioconférence pour rester réactifs, avec un interlocuteur unique du devis à la mise en ligne.",
      },
      {
        question: "Créez-vous des sites pour les acteurs du tourisme et du nautisme ?",
        answer: "Oui, c'est un cœur de cible dans le Golfe du Morbihan : hôtels, campings, restaurants, loueurs de bateaux, écoles de voile et prestataires nautiques. Nous intégrons réservation en ligne, galeries photos optimisées, avis clients et SEO local ciblé sur les requêtes saisonnières pour capter les visiteurs avant et pendant la saison.",
      },
      {
        question: "Quel budget prévoir pour un site web professionnel à Vannes ?",
        answer: "Un site vitrine Next.js professionnel démarre autour de 2 500 à 4 000 €, un site e-commerce à partir de 5 000 € selon le périmètre. Nous établissons un devis gratuit et détaillé adapté aux budgets des TPE et PME morbihannaises, sans coûts cachés, avec un site que vous pouvez faire évoluer.",
      },
    ],
    businessAreas: ["Centre-ville de Vannes", "Le Prat", "Parc Innovation Bretagne Sud", "Laroiseau", "Séné", "Arradon", "Presqu'île de Rhuys"],
  },
  {
    slug: "lorient",
    name: "Lorient",
    region: "Bretagne",
    departement: "Morbihan",
    postalCode: "56100",
    latitude: 47.7482,
    longitude: -3.3702,
    metaTitle: "Agence Next.js Lorient | Sites Web Morbihan",
    metaDescription: "Agence Next.js à Lorient : sites web performants et SEO pour les PME, artisans et acteurs maritimes du pays de Lorient. Approche pragmatique. Devis gratuit.",
    headline: "Votre agence Next.js à Lorient, au service des PME du pays de Lorient",
    subheadline: "Sites web Next.js rapides, SEO local et solutions digitales pragmatiques pour les PME, artisans et acteurs maritimes lorientais. Du port de pêche à la sailing valley, passez au numérique sans complexité inutile.",
    localContext: "Lorient conjugue une identité maritime forte — premier port de pêche français en valeur, industrie navale, et la « sailing valley » qui concentre les meilleures équipes de course au large à Lorient La Base — avec un tissu de PME et d'artisans en pleine reconversion numérique. Beaucoup d'entreprises du pays de Lorient travaillent encore avec un site obsolète, voire sans site du tout, alors que leurs clients les cherchent d'abord sur Google. RLN Consulting propose une approche pragmatique : des sites Next.js rapides et bien référencés, des tarifs adaptés aux PME, et un accompagnement concret sans jargon, à distance ou sur place dans le Morbihan.",
    strongSectors: ["Pêche & Filière mer", "Industrie navale & Naval défense", "Course au large & Voile", "Artisanat & BTP", "Commerce & Services", "Logistique portuaire"],
    digitalOpportunities: [
      "Reconversion numérique des PME et artisans du pays de Lorient",
      "Rayonnement international de la sailing valley et de Lorient La Base",
      "Filière mer en modernisation avec des besoins B2B digitaux croissants",
      "SEO local peu concurrentiel : une vraie fenêtre pour se positionner en premier",
    ],
    stats: [
      { label: "Entreprises dans le pays de Lorient", value: "12 000+" },
      { label: "Emplois liés à la filière mer", value: "10 000+" },
      { label: "Artisans et TPE sans présence web efficace", value: "~1 sur 2" },
    ],
    faqs: [
      {
        question: "Pourquoi choisir Next.js pour mon site à Lorient ?",
        answer: "Parce que c'est un choix pragmatique : un site Next.js charge en moins de 1,5 seconde, se référence mieux sur Google qu'un WordPress vieillissant et ne demande quasiment aucune maintenance technique. Pour une PME ou un artisan lorientais, cela veut dire plus d'appels entrants via les recherches locales, sans frais récurrents de plugins ou de mises à jour.",
      },
      {
        question: "Vous déplacez-vous à Lorient ou travaillez-vous à distance ?",
        answer: "Les deux. Notre attache en Bretagne Sud nous permet d'intervenir sur place à Lorient et dans le Morbihan pour les moments clés du projet — cadrage, validation, formation à la prise en main. Le reste des échanges se fait en visioconférence et par téléphone, ce qui garde le projet réactif et les coûts maîtrisés.",
      },
      {
        question: "Travaillez-vous avec les artisans et petites entreprises lorientaises ?",
        answer: "Oui, c'est le cœur de notre approche à Lorient : des sites vitrine efficaces pour être trouvé sur Google, un module de demande de devis, des avis clients mis en avant et un SEO local sur votre zone d'intervention. Pas de superflu, pas de jargon : un site qui ramène des clients, livré avec une formation pour le mettre à jour vous-même.",
      },
      {
        question: "Pouvez-vous accompagner les acteurs de la filière mer et de la voile ?",
        answer: "Absolument. Chantiers navals, équipementiers, prestataires de la course au large, mareyeurs : nous créons des sites B2B crédibles à l'international (multilingue possible), des portails de présentation technique et des supports digitaux pour les sponsors. La sailing valley lorientaise mérite des sites au niveau de ses performances.",
      },
    ],
    businessAreas: ["Lorient La Base", "Port de pêche de Keroman", "Centre-ville de Lorient", "Zone de Kerpont", "Lanester", "Ploemeur", "Quéven"],
  },
]

/**
 * Récupère toutes les villes
 */
export function getAllCities(): CityData[] {
  return cities
}

/**
 * Récupère une ville par son slug
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug)
}

/**
 * Récupère tous les slugs de villes
 */
export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}
