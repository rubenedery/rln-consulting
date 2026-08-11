import type { AiSectorProfile } from "@/types/ai-sectors"

// Profils IA — catégorie "artisanat"
// Règle : les exemples concrets, painPoints et FAQ sont propres à chaque métier,
// jamais réutilisés ni reformulés d'un métier à l'autre.

export const aiSectorProfilesArtisanat: AiSectorProfile[] = [
  {
    slug: "couvreur",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "couvreur",
    name: "couvreur",
    namePlural: "couvreurs",
    icon: "Home",
    category: "artisanat",
    metaTitle: "IA pour Couvreur : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA pour un couvreur ? Devis à partir de photos de toiture, appels décrochés après tempête, relances de démoussage : cas d’usage, coûts réels et ROI.",
    headline: "L’IA qui répond pendant que vous êtes sur le toit",
    subheadline:
      "Devis pré-chiffrés à partir de photos de toiture, appels décrochés les lendemains de tempête, contrats d’entretien relancés au bon moment : l’IA travaille au sol pendant que vous êtes en hauteur.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un couvreur ?",
        answer:
          "L’IA décroche vos appels quand vous êtes en hauteur, pré-chiffre un devis à partir de photos de toiture prises au sol ou au drone, relance les devis en attente et propose un démoussage aux clients dont la toiture date. Vous restez concentré sur le chantier, elle s’occupe du reste.",
      },
      cost: {
        question: "Combien coûte l’IA pour une entreprise de couverture ?",
        answer:
          "Un standard téléphonique IA coûte 30 à 100 € par mois, un outil de relance automatique 30 à 80 € par mois. Un assistant sur mesure qui pré-chiffre vos devis à partir de photos de toiture représente un projet de 3 000 à 12 000 € selon vos types de couverture.",
      },
      duration: {
        question: "Combien de temps pour mettre l’IA en place chez un couvreur ?",
        answer:
          "Le standard IA est opérationnel en une à deux semaines : il suffit de lui apprendre vos prestations et votre zone d’intervention. Le pré-chiffrage par photos demande 4 à 8 semaines, le temps de le calibrer sur vos anciens devis de tuiles, ardoises ou zinc.",
      },
      roi: {
        question: "Quel retour sur investissement pour un couvreur ?",
        answer:
          "Un lendemain de tempête, chaque appel décroché est un bâchage ou une réparation facturée : un seul chantier de rénovation récupéré rembourse l’année d’abonnement. Ajoutez les contrats de démoussage relancés automatiquement, et l’investissement est couvert dès la première saison.",
      },
    },
    painPoints: [
      "Impossible de décrocher quand vous êtes sur un toit — et les appels affluent justement après chaque coup de vent",
      "Chiffrer une toiture demande un déplacement, parfois une nacelle, avant même de savoir si le client est sérieux",
      "Les devis de rénovation partent puis restent sans réponse, faute de temps pour relancer",
      "Les contrats de démoussage et d’entretien, pourtant récurrents, ne sont jamais proposés systématiquement",
    ],
    useCases: [
      "assistant_vocal",
      "automatisation_admin",
      "generation_contenu",
      "analyse_predictive",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Pré-chiffrage à partir de photos de toiture",
        description:
          "Le client envoie des photos prises du sol ou vous survolez la toiture au drone : l’IA estime la surface, repère les tuiles cassées et l’état du faîtage, puis prépare une trame de devis avec vos prix. Vous validez et ajustez après visite.",
        metric: "Devis envoyé en 24 h au lieu d’une semaine",
      },
      {
        title: "Standard IA des lendemains de tempête",
        description:
          "Après un épisode de vent ou de grêle, les appels sont multipliés : l’assistant vocal décroche chaque demande, distingue la fuite active du simple contrôle, note l’adresse et l’étendue des dégâts, et classe vos interventions par urgence.",
        metric: "Zéro appel perdu les jours de pic",
      },
      {
        title: "Relance automatique des démoussages",
        description:
          "L’IA repère dans votre historique les toitures nettoyées il y a trois ou quatre ans et envoie une proposition d’entretien personnalisée avant le printemps. Un revenu récurrent qui lisse votre saison sans prospection.",
        metric: "+30 % de contrats d’entretien signés",
      },
    ],
    roiStats: [
      {
        label: "des appelants qui tombent sur un répondeur ne rappellent jamais",
        value: "85 %",
        source: "BT Business",
      },
      {
        label: "de volume d’appels en plus les lendemains de tempête — autant de chantiers à ne pas laisser filer",
        value: "jusqu’à ×10",
      },
      {
        label: "de déplacements de chiffrage évités grâce au pré-devis sur photos",
        value: "−40 %",
      },
    ],
    faqs: [
      {
        question: "L’IA peut-elle vraiment chiffrer une toiture sans visite ?",
        answer:
          "Elle pré-chiffre, elle ne remplace pas votre œil. À partir des photos, elle estime surface et matériaux et prépare le devis selon vos prix ; vous confirmez lors de la visite. L’intérêt : trier les demandes sérieuses et répondre en 24 h là où vos concurrents mettent une semaine.",
      },
      {
        question: "Je passe mes journées en hauteur, ça marche depuis le téléphone ?",
        answer:
          "Oui, c’est conçu pour ça. Les appels décrochés par l’assistant arrivent en résumé écrit sur votre smartphone, les devis se valident en deux touches entre deux chantiers, et vous dictez vos comptes rendus de visite au lieu de les taper le soir.",
      },
      {
        question: "Que se passe-t-il si un client signale une fuite en cours ?",
        answer:
          "L’assistant vocal pose les bonnes questions — l’eau entre-t-elle encore, quelle pièce est touchée — et vous transfère immédiatement les vraies urgences. Les demandes de contrôle ou de devis, elles, sont planifiées sans vous déranger sur le chantier.",
      },
      {
        question: "Mes photos de drone peuvent-elles servir à autre chose ?",
        answer:
          "Oui : l’IA en tire des publications avant/après pour votre fiche Google et vos réseaux, avec un texte dans votre ton. Vos plus beaux chantiers de couverture travaillent votre notoriété locale pendant que vous êtes sur le suivant.",
      },
      {
        question: "Faut-il changer mes outils de devis et de facturation ?",
        answer:
          "Non. L’IA se branche sur votre logiciel actuel ou, si vous travaillez encore sur papier, c’est l’occasion de passer à un outil simple qu’elle alimente pour vous. Dans les deux cas, vous gardez vos modèles de devis et vos prix.",
      },
    ],
  },
  {
    slug: "electricien",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "electricien",
    name: "électricien",
    namePlural: "électriciens",
    icon: "Lightbulb",
    category: "artisanat",
    metaTitle: "IA pour Électricien : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA pour un électricien ? Devis de mise aux normes accélérés, schémas et attestations classés, relances automatiques : cas d’usage, coûts et ROI.",
    headline: "L’IA qui allège la paperasse de vos chantiers électriques",
    subheadline:
      "Devis de mise aux normes pré-remplis à partir du diagnostic, schémas et attestations retrouvés en une recherche, relances qui signent : l’IA s’occupe du bureau, vous du tableau.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un électricien ?",
        answer:
          "L’IA pré-remplit vos devis de mise aux normes à partir du diagnostic électrique et de photos du tableau, classe schémas, attestations Consuel et fiches techniques par chantier, décroche les appels pendant vos interventions et relance les devis restés sans réponse. Vous câblez, elle administre.",
      },
      cost: {
        question: "Combien coûte l’IA pour un électricien ?",
        answer:
          "Les outils prêts à l’emploi coûtent 30 à 120 € par mois : standard téléphonique IA, devis-factures automatisés, classement de documents. Un assistant sur mesure qui chiffre vos mises aux normes selon vos prix et vos fournisseurs représente 2 000 à 10 000 € selon le périmètre.",
      },
      duration: {
        question: "En combien de temps un électricien peut-il s’équiper ?",
        answer:
          "Une à deux semaines suffisent pour le standard IA et l’automatisation des devis et relances. Comptez 4 à 6 semaines pour un assistant de chiffrage entraîné sur vos anciens devis de rénovation, de tableaux et de bornes de recharge.",
      },
      roi: {
        question: "Quel retour sur investissement pour un électricien ?",
        answer:
          "Un devis de mise aux normes chiffré en une heure au lieu d’une demi-journée, c’est plus de devis envoyés — donc plus de chantiers signés à effort égal. Avec les relances automatiques qui rattrapent les devis oubliés, la plupart des électriciens rentabilisent l’outil en deux à trois mois.",
      },
    },
    painPoints: [
      "Chiffrer une mise aux normes complète prend une demi-journée entre le diagnostic, les postes et les références de matériel",
      "Schémas unifilaires, attestations Consuel et fiches techniques s’éparpillent entre mails, cartons et téléphone",
      "Les appels arrivent pendant que vous êtes au tableau, disjoncteur coupé, les mains occupées",
      "Les devis de rénovation partent en concurrence et ne sont jamais relancés à temps",
    ],
    useCases: [
      "assistant_vocal",
      "automatisation_admin",
      "extraction_documents",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Devis de mise aux normes accéléré",
        description:
          "Vous transmettez le diagnostic électrique du logement et quelques photos du tableau : l’IA en extrait les anomalies, les traduit en postes de travaux avec vos prix et références habituelles, et vous livre un devis prêt à relire poste par poste.",
        metric: "Devis de rénovation en 1 h au lieu d’une demi-journée",
      },
      {
        title: "Schémas et attestations classés par chantier",
        description:
          "Schémas unifilaires, attestations Consuel, notices de matériel, garanties : l’IA lit chaque document reçu, l’associe au bon chantier et le rend retrouvable en une recherche — y compris deux ans plus tard pour un SAV.",
        metric: "Fini les 20 minutes à fouiller les mails",
      },
      {
        title: "Relances qui transforment les devis en chantiers",
        description:
          "Chaque demande est tracée : l’IA relance au bon moment les devis sans réponse, en priorisant les chantiers à forte valeur comme les bornes de recharge ou les rénovations complètes, avec un message personnalisé que vous validez.",
        metric: "+25 % de devis signés grâce aux relances",
      },
    ],
    roiStats: [
      {
        label: "des logements de plus de 15 ans présentent au moins une anomalie électrique — autant de mises aux normes à chiffrer vite",
        value: "2 sur 3",
        source: "ONSE",
      },
      {
        label: "de temps gagné sur le chiffrage d’une rénovation électrique complète",
        value: "−70 %",
      },
      {
        label: "d’appels décrochés pendant vos interventions, résumés par écrit",
        value: "100 %",
      },
    ],
    faqs: [
      {
        question: "L’IA peut-elle se tromper sur un devis de mise aux normes ?",
        answer:
          "Elle peut proposer un poste discutable, c’est pourquoi vous relisez toujours avant envoi. En pratique, elle applique vos prix et vos habitudes de matériel ; les erreurs sont rares et se corrigent en quelques secondes — bien plus vite que de tout chiffrer à la main.",
      },
      {
        question: "Mes documents de chantier sont partout, par où commencer ?",
        answer:
          "Justement par là : vous transférez vos mails et photos de documents dans un dossier unique, l’IA les lit, les classe par chantier et par type. En quelques jours, tout votre historique devient consultable — sans ressaisie de votre part.",
      },
      {
        question: "Je ne suis pas à l’aise avec l’informatique, c’est pour moi ?",
        answer:
          "Oui : vous continuez à téléphoner, photographier et dicter comme aujourd’hui, c’est l’IA qui transforme ça en devis, dossiers et relances. Pas de logiciel compliqué à apprendre — si vous savez envoyer un SMS et une photo, vous savez l’utiliser.",
      },
      {
        question: "L’assistant vocal saura-t-il répondre à des questions techniques ?",
        answer:
          "Il ne fait pas de diagnostic à votre place : il recueille le besoin — panne, mise aux normes, borne de recharge —, précise l’adresse et l’urgence, et propose un créneau. Une coupure générale ou un danger vous est transféré immédiatement.",
      },
    ],
  },
  {
    slug: "garage-automobile",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia", "chatbot-ia-commerce-guide"],
    sectorSlug: "garage-automobile",
    name: "garage automobile",
    namePlural: "garages automobiles",
    icon: "Truck",
    category: "artisanat",
    metaTitle: "IA pour Garage Automobile : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA dans un garage ? Ordres de réparation dictés, rappels d’entretien automatiques, standard désengorgé : cas d’usage concrets, coûts et ROI.",
    headline: "L’IA qui fait tourner l’atelier sans saturer le comptoir",
    subheadline:
      "Ordres de réparation dictés au pont, rappels de révision envoyés au bon kilométrage, standard qui ne sonne plus dans le vide : l’IA gère l’accueil et le suivi, vos mécaniciens gardent les mains sur la mécanique.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un garage automobile ?",
        answer:
          "L’IA prend les rendez-vous par téléphone sans mobiliser le comptoir, transforme les constats dictés au pont en ordres de réparation chiffrés, envoie les rappels de révision au bon kilométrage et répond aux « ma voiture est-elle prête ? ». L’atelier avance, le standard respire.",
      },
      cost: {
        question: "Combien coûte l’IA pour un garage ?",
        answer:
          "Un standard téléphonique IA avec prise de rendez-vous coûte 50 à 150 € par mois. Les rappels d’entretien automatisés s’ajoutent pour 30 à 80 € par mois. Un assistant sur mesure branché sur votre logiciel d’atelier représente un projet de 3 000 à 15 000 € selon la taille du garage.",
      },
      duration: {
        question: "Combien de temps pour équiper un garage ?",
        answer:
          "Le standard IA et les rappels d’entretien se déploient en deux à trois semaines, le temps de les connecter à votre agenda et à votre fichier clients. L’automatisation des ordres de réparation demande 4 à 8 semaines, selon votre logiciel d’atelier.",
      },
      roi: {
        question: "Quel retour sur investissement pour un garage ?",
        answer:
          "Les rappels d’entretien font revenir des clients qui seraient partis en centre auto : à 250 € de panier moyen par révision, quelques retours par mois couvrent l’abonnement. Ajoutez les heures de comptoir libérées et les validations de travaux plus rapides, et le retour se mesure dès le premier trimestre.",
      },
    },
    painPoints: [
      "Le standard sonne sans arrêt pour des prises de rendez-vous et des « c’est prêt ? » qui interrompent l’atelier",
      "Les ordres de réparation attendent que le client rappelle pour valider les travaux supplémentaires, et les voitures occupent les ponts",
      "Les clients oublient leurs échéances d’entretien et filent en centre auto au premier voyant",
      "Les constats faits au pont se perdent entre l’atelier et la facturation",
    ],
    useCases: [
      "assistant_vocal",
      "crm_ia",
      "automatisation_admin",
      "analyse_predictive",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Ordres de réparation dictés au pont",
        description:
          "Le mécanicien dicte ses constats pendant l’inspection : l’IA génère l’ordre de réparation avec les références de pièces et le chiffrage, puis l’envoie au client pour validation par SMS. Plus de voiture immobilisée en attendant un rappel téléphonique.",
        metric: "Travaux validés en 10 minutes au lieu d’une journée",
      },
      {
        title: "Rappels d’entretien au bon kilométrage",
        description:
          "L’IA croise l’historique de chaque véhicule — dernière révision, distribution, pneus — pour envoyer le rappel au moment pertinent, avec un lien de prise de rendez-vous. Vos clients reviennent chez vous au lieu de partir au premier prospectus de centre auto.",
        metric: "+30 % de retours atelier sur les entretiens",
      },
      {
        title: "Comptoir désengorgé",
        description:
          "L’assistant vocal prend les rendez-vous, renseigne sur les délais et répond aux appels de suivi ; le chatbot du site fait de même le soir. Le chef d’atelier n’est plus interrompu toutes les dix minutes pour des questions dont la réponse est dans le planning.",
        metric: "−50 % d’appels à traiter au comptoir",
      },
    ],
    roiStats: [
      {
        label: "des tâches répétitives d’accueil et d’administratif sont automatisables",
        value: "~50 %",
        source: "McKinsey Global Institute",
      },
      {
        label: "automobiliste sur trois dépasse ses échéances d’entretien faute de rappel",
        value: "1 sur 3",
      },
      {
        label: "des appels entrants d’un garage sont de simples questions de suivi ou de rendez-vous",
        value: "~40 %",
      },
    ],
    faqs: [
      {
        question: "L’IA est-elle compatible avec mon logiciel d’atelier ?",
        answer:
          "Dans la plupart des cas, oui : les logiciels de garage récents exposent des connecteurs, et pour les autres nous mettons en place des passerelles simples. Vos mécaniciens gardent leurs habitudes ; seules les ressaisies et les relances disparaissent.",
      },
      {
        question: "Mes clients âgés vont-ils accepter un standard automatique ?",
        answer:
          "L’assistant se présente comme celui du garage, parle naturellement et bascule vers un humain dès que la demande sort du cadre. Pour un rendez-vous de révision ou une question de délai, la plupart des clients ne font pas la différence — et personne ne tombe plus sur le répondeur.",
      },
      {
        question: "Le chiffrage automatique des ordres de réparation est-il fiable ?",
        answer:
          "L’IA propose le chiffrage à partir de vos temps barémés et de vos tarifs de pièces ; le chef d’atelier valide avant envoi au client. C’est le même contrôle qu’aujourd’hui, sans la double saisie entre le constat au pont et le devis.",
      },
      {
        question: "Ça marche aussi pour un petit garage sans secrétaire ?",
        answer:
          "C’est même là que l’effet est le plus fort : quand le patron est seul sous le capot, chaque appel manqué est un client perdu. Le standard IA décroche à sa place, prend les rendez-vous et ne lui transfère que ce qui le nécessite vraiment.",
      },
      {
        question: "Peut-on commencer petit avant d’équiper tout le garage ?",
        answer:
          "Oui, et c’est recommandé : commencez par les rappels d’entretien ou le standard IA, mesurez les retours pendant un ou deux mois, puis étendez aux ordres de réparation. Chaque brique fonctionne seule et se rentabilise indépendamment.",
      },
    ],
  },
  {
    slug: "jardinier-paysagiste",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "jardinier-paysagiste",
    name: "jardinier paysagiste",
    namePlural: "jardiniers paysagistes",
    icon: "Flower2",
    category: "artisanat",
    metaTitle: "IA pour Jardinier Paysagiste : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA pour un paysagiste ? Contrats d’entretien renouvelés automatiquement, tournées optimisées selon la saison, devis qualifiés : cas d’usage, coûts et ROI.",
    headline: "L’IA qui cultive vos contrats d’entretien",
    subheadline:
      "Renouvellements relancés avant chaque saison, tournées replanifiées quand il pleut, projets de création qualifiés avant la visite : l’IA lisse votre année pendant que vous façonnez les jardins.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un jardinier paysagiste ?",
        answer:
          "L’IA relance les contrats d’entretien avant chaque saison, organise vos tournées de tonte et de taille par secteur, replanifie automatiquement quand la météo s’en mêle et qualifie les projets de création — surface, style, budget — avant que vous ne vous déplaciez. Votre saison se remplit sans prospection.",
      },
      cost: {
        question: "Combien coûte l’IA pour un paysagiste ?",
        answer:
          "Un CRM avec relances automatiques coûte 30 à 100 € par mois, un standard téléphonique IA 30 à 100 € par mois également. Un outil sur mesure de planification des tournées et des contrats saisonniers représente un projet de 2 000 à 10 000 € selon la taille de l’équipe.",
      },
      duration: {
        question: "Combien de temps pour équiper une entreprise de paysage ?",
        answer:
          "Les relances de contrats et le suivi client se mettent en place en deux à trois semaines, idéalement avant le pic de printemps. La planification intelligente des tournées demande 4 à 6 semaines, le temps d’intégrer vos secteurs, vos équipes et vos fréquences d’intervention.",
      },
      roi: {
        question: "Quel retour sur investissement pour un paysagiste ?",
        answer:
          "Un contrat d’entretien annuel pèse souvent 1 500 à 3 000 € : deux ou trois renouvellements sauvés par les relances automatiques financent l’outil pour l’année. Ajoutez les kilomètres économisés par des tournées mieux groupées, et le gain se voit dès la première saison.",
      },
    },
    painPoints: [
      "L’activité s’écrase entre le rush du printemps et le creux de l’hiver, et la trésorerie suit la même courbe",
      "Les contrats d’entretien arrivent à échéance sans être relancés, et certains clients partent sans bruit",
      "La pluie bouscule le planning et il faut rappeler chaque client un par un pour reprogrammer",
      "Les demandes de création affluent au printemps, mais beaucoup de visites se font pour des curieux sans budget",
    ],
    useCases: [
      "crm_ia",
      "automatisation_admin",
      "analyse_predictive",
      "generation_contenu",
      "assistant_vocal",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Renouvellement automatique des contrats d’entretien",
        description:
          "Avant chaque saison, l’IA repère les contrats qui arrivent à échéance et envoie une proposition personnalisée — tonte, taille de haies, débroussaillage — au bon moment. Vous ne perdez plus un client par simple oubli de relance.",
        metric: "90 % de renouvellements sans relance manuelle",
      },
      {
        title: "Tournées replanifiées selon la météo",
        description:
          "L’IA regroupe vos interventions par secteur, équilibre la charge entre équipes et, quand la pluie s’annonce, décale les tontes et prévient les clients automatiquement. Le planning se réorganise en minutes, pas en soirées de coups de fil.",
        metric: "−20 % de kilomètres entre deux chantiers",
      },
      {
        title: "Projets de création qualifiés avant la visite",
        description:
          "Sur votre site, le prospect décrit son projet, envoie des photos du terrain et indique son budget ; l’IA qualifie la demande et ne programme une visite que pour les projets sérieux. Vos déplacements de printemps deviennent tous utiles.",
        metric: "2 fois moins de visites sans suite",
      },
    ],
    roiStats: [
      {
        label: "par semaine : le temps que les dirigeants de TPE consacrent aux tâches administratives",
        value: "≈ 1 jour",
        source: "Sage",
      },
      {
        label: "de l’activité concentrée sur six mois — les contrats d’entretien relancés à temps lissent la trésorerie",
        value: "~70 %",
      },
      {
        label: "de taux de renouvellement en plus quand la relance part avant l’échéance du contrat",
        value: "+25 %",
      },
    ],
    faqs: [
      {
        question: "L’IA peut-elle gérer la saisonnalité de mon activité ?",
        answer:
          "C’est son terrain de jeu : elle anticipe le pic de printemps à partir de vos années passées, propose de caler l’élagage et les créations sur les mois creux, et relance les contrats avant chaque saison. Votre carnet se remplit plus régulièrement, votre trésorerie aussi.",
      },
      {
        question: "Je suis dans les jardins toute la journée, ça marche depuis le téléphone ?",
        answer:
          "Oui : le planning du jour, les fiches clients et les demandes entrantes sont sur votre smartphone, et les replanifications météo se valident d’une touche. Vous pouvez même dicter un compte rendu de visite en remontant dans le camion.",
      },
      {
        question: "Mes clients vont-ils apprécier des relances automatiques ?",
        answer:
          "Les messages sont personnalisés — nom du client, prestations habituelles, période d’intervention — et partent en votre nom. Pour le client, c’est un paysagiste prévoyant qui pense à son jardin avant la saison ; rien ne ressemble à un envoi de masse.",
      },
      {
        question: "L’IA peut-elle m’aider à vendre plus de créations paysagères ?",
        answer:
          "Oui, de deux façons : en qualifiant les demandes pour que vous ne vous déplaciez que pour des projets à vrai budget, et en publiant vos réalisations — massifs, terrasses, jardins avant/après — sur votre fiche Google et vos réseaux, saison après saison.",
      },
    ],
  },
  {
    slug: "menuisier",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "menuisier",
    name: "menuisier",
    namePlural: "menuisiers",
    icon: "Hammer",
    category: "artisanat",
    metaTitle: "IA pour Menuisier : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA pour un menuisier ? Devis sur mesure chiffrés en une heure, comptes rendus de conception fiables, portfolio qui vend : cas d’usage, coûts et ROI.",
    headline: "L’IA au service de votre atelier sur mesure",
    subheadline:
      "Comptes rendus de conception sans détail perdu, devis chiffrés à partir de vos cotes et de vos essences, réalisations publiées dans votre ton : l’IA s’occupe du papier, vous du bois.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un menuisier ?",
        answer:
          "L’IA transcrit vos rendez-vous de conception en comptes rendus structurés — cotes, essences, finitions, contraintes de pose —, chiffre vos devis sur mesure à partir du descriptif et de vos prix de matière, relance les projets en réflexion et publie vos réalisations. L’atelier gagne des heures chaque semaine.",
      },
      cost: {
        question: "Combien coûte l’IA pour une menuiserie ?",
        answer:
          "Les outils prêts à l’emploi — transcription de rendez-vous, devis-factures, relances — coûtent 30 à 120 € par mois. Un assistant de chiffrage sur mesure, entraîné sur vos anciens devis d’agencements, d’escaliers ou de cuisines, représente un projet de 3 000 à 12 000 €.",
      },
      duration: {
        question: "Combien de temps pour équiper une menuiserie ?",
        answer:
          "Les comptes rendus automatiques et les relances fonctionnent en une à deux semaines. L’assistant de chiffrage demande 4 à 8 semaines : il faut lui apprendre vos prix de débit, vos quincailleries et vos temps de fabrication et de pose avant de lui faire confiance.",
      },
      roi: {
        question: "Quel retour sur investissement pour un menuisier ?",
        answer:
          "Un devis sur mesure chiffré en une heure au lieu d’une soirée, c’est deux à trois fois plus de projets chiffrés — donc plus de commandes signées à carnet égal. Sur des ouvrages à plusieurs milliers d’euros, un seul projet gagné en plus rembourse largement l’année d’outils.",
      },
    },
    painPoints: [
      "Chiffrer un ouvrage sur mesure — débit de matière, quincaillerie, temps d’atelier et de pose — mange vos soirées",
      "Un détail mal noté au rendez-vous de conception se paie cash à l’atelier ou à la pose",
      "Les clients comparent vos prix au mobilier industriel sans mesurer le travail derrière",
      "Vos plus belles réalisations dorment dans le téléphone au lieu de vous amener des projets",
    ],
    useCases: [
      "transcription_comptes_rendus",
      "automatisation_admin",
      "generation_contenu",
      "crm_ia",
      "assistant_vocal",
    ],
    concreteExamples: [
      {
        title: "Compte rendu de conception sans détail perdu",
        description:
          "Pendant le rendez-vous client, l’IA transcrit l’échange puis en tire un compte rendu structuré : dimensions, essences choisies, finitions, contraintes du lieu de pose. Le client valide par écrit — les malentendus coûteux sur le sur-mesure disparaissent.",
        metric: "Plus aucun détail perdu entre le salon du client et l’atelier",
      },
      {
        title: "Du croquis au devis chiffré",
        description:
          "À partir des cotes et du descriptif validé, l’IA calcule le débit de matière, ajoute la quincaillerie et applique vos temps de fabrication et de pose. Vous relisez un devis quasi terminé au lieu de partir d’une page blanche.",
        metric: "Devis sur mesure en 1 h au lieu d’une soirée",
      },
      {
        title: "Un portfolio qui justifie vos prix",
        description:
          "Photos d’atelier et de pose deviennent des publications qui racontent la fabrication — du plateau brut à l’escalier posé — et des réponses aux avis dans votre ton. Les prospects comprennent la valeur du sur-mesure avant même de vous appeler.",
        metric: "Présence en ligne régulière sans y passer le dimanche",
      },
    ],
    roiStats: [
      {
        label: "fois plus de chances de convertir un prospect en répondant dans l’heure plutôt qu’en 24 h",
        value: "7×",
        source: "Harvard Business Review",
      },
      {
        label: "de temps gagné sur le chiffrage des projets sur mesure",
        value: "50-70 %",
      },
      {
        label: "projet signé en plus suffit à rentabiliser une année d’outils IA",
        value: "1",
      },
    ],
    faqs: [
      {
        question: "L’IA peut-elle vraiment chiffrer du sur-mesure ?",
        answer:
          "Elle chiffre à partir de vos règles, pas dans le vide : vos prix de matière, vos temps d’atelier, vos coefficients. Sur un ouvrage courant, sa proposition est très proche de la vôtre ; sur une pièce inhabituelle, elle prépare la trame et vous ajustez. Dans les deux cas, vous validez tout.",
      },
      {
        question: "Je ne suis pas à l’aise avec l’informatique, c’est pour moi ?",
        answer:
          "Oui : votre rôle se limite à parler et à photographier. Le rendez-vous s’enregistre d’une touche, le compte rendu et le devis arrivent prêts à relire. Les menuisiers qui s’y mettent utilisent trois boutons — enregistrer, relire, envoyer.",
      },
      {
        question: "L’enregistrement des rendez-vous est-il légal ?",
        answer:
          "Oui, avec l’accord du client — qu’il donne volontiers puisque le compte rendu le protège aussi : il reçoit noir sur blanc ce qui a été convenu, dimensions et finitions comprises. C’est un argument de sérieux, pas un obstacle.",
      },
      {
        question: "Peut-elle m’aider face à la concurrence du meuble industriel ?",
        answer:
          "Indirectement, beaucoup : en répondant plus vite que les autres artisans, en montrant votre fabrication en images, et en libérant des heures de paperasse que vous réinvestissez dans les projets. Le sur-mesure gagne quand il est réactif et visible — l’IA vous donne les deux.",
      },
    ],
  },
  {
    slug: "peintre-batiment",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "peintre-batiment",
    name: "peintre en bâtiment",
    namePlural: "peintres en bâtiment",
    icon: "Paintbrush",
    category: "artisanat",
    metaTitle: "IA pour Peintre en Bâtiment : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA pour un peintre en bâtiment ? Métrés estimés sur photos, devis remis le jour de la visite, conseil couleurs automatisé : cas d’usage, coûts et ROI.",
    headline: "L’IA qui chiffre vos chantiers de peinture pendant que vous peignez",
    subheadline:
      "Métrés estimés à partir de photos, devis remis le jour de la visite, conseil couleurs qui qualifie vos prospects : l’IA prépare le chantier suivant pendant que vous terminez celui en cours.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un peintre en bâtiment ?",
        answer:
          "L’IA estime vos métrés à partir de photos ou d’une vidéo des pièces, applique vos prix au mètre carré selon support et finition, décroche les appels quand vous êtes au rouleau et aide vos clients à choisir leurs teintes avant le rendez-vous. Le devis part le jour de la visite, pas la semaine suivante.",
      },
      cost: {
        question: "Combien coûte l’IA pour un peintre ?",
        answer:
          "Un outil de devis avec estimation sur photos coûte 30 à 100 € par mois, le standard téléphonique IA 30 à 100 € par mois. Un assistant sur mesure — chiffrage selon vos gammes, conseil couleurs à partir de vos nuanciers habituels — représente un projet de 2 000 à 8 000 €.",
      },
      duration: {
        question: "Combien de temps pour mettre l’IA en place chez un peintre ?",
        answer:
          "Une à deux semaines pour le standard IA et l’automatisation devis-factures-relances. Comptez 3 à 6 semaines pour l’estimation sur photos calibrée sur vos prix — le temps de vérifier sur quelques chantiers que ses métrés collent aux vôtres.",
      },
      roi: {
        question: "Quel retour sur investissement pour un peintre en bâtiment ?",
        answer:
          "Dans un métier où les clients comparent trois devis, le premier arrivé part favori : remettre le vôtre le jour de la visite fait gagner des chantiers sans baisser vos prix. Un seul chantier de ravalement ou d’intérieur complet gagné ainsi couvre plus d’une année d’abonnement.",
      },
    },
    painPoints: [
      "Entre la visite, le métré et la rédaction, un devis part souvent une semaine après la demande — quand le concurrent a déjà signé",
      "Les clients comparent trois peintres et décident surtout au prix, faute de voir la différence de qualité",
      "Les appels de prospects tombent pendant que vous êtes au rouleau, sur l’échafaudage ou en train de protéger un sol",
      "Les clients changent d’avis sur les teintes en cours de chantier, et les retouches ne sont jamais facturées",
    ],
    useCases: [
      "automatisation_admin",
      "assistant_vocal",
      "generation_contenu",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Métré sur photos et devis le jour même",
        description:
          "Pendant la visite, vous filmez les pièces ; l’IA estime les surfaces de murs, plafonds et boiseries, déduit les ouvertures et applique vos prix selon le support et la finition. Le devis détaillé part le soir même, quand le client est encore chaud.",
        metric: "Devis remis le jour de la visite",
      },
      {
        title: "Conseil couleurs qui qualifie vos prospects",
        description:
          "Sur votre site, le client décrit sa pièce et son ambiance ; l’IA propose des harmonies tirées de vos nuanciers habituels et recueille surfaces et délais souhaités. Vous arrivez au rendez-vous avec un client décidé, pas un curieux.",
        metric: "Des visites deux fois mieux qualifiées",
      },
      {
        title: "Avant/après qui remplissent le carnet",
        description:
          "Vos photos de chantier deviennent des publications avant/après légendées dans votre ton, et chaque avis Google reçoit une réponse soignée. La preuve visuelle fait la différence quand trois devis sont sur la table.",
        metric: "+40 % d’avis clients collectés",
      },
    ],
    roiStats: [
      {
        label: "des particuliers lisent les avis en ligne avant de choisir un artisan",
        value: "87 %",
        source: "BrightLocal",
      },
      {
        label: "de temps gagné entre la visite et l’envoi du devis",
        value: "−80 %",
      },
      {
        label: "d’heures administratives récupérées chaque semaine (devis, relances, factures)",
        value: "5-8 h",
      },
    ],
    faqs: [
      {
        question: "L’estimation des surfaces sur photos est-elle fiable ?",
        answer:
          "Elle est fiable pour établir le devis, à quelques pour cent près, et vous gardez la main : l’outil affiche son métré pièce par pièce et vous corrigez si besoin. Sur un chantier atypique — cage d’escalier, volumes hauts —, vous mesurez comme avant et l’IA ne fait que chiffrer.",
      },
      {
        question: "Ça marche depuis le téléphone, sur le chantier ?",
        answer:
          "Oui, tout passe par le smartphone : vous filmez les pièces, le devis se prépare pendant que vous discutez avec le client, et vous l’envoyez avant de remonter dans le fourgon. Les appels manqués arrivent en résumé écrit, à rappeler entre deux couches.",
      },
      {
        question: "Comment éviter les litiges sur les teintes choisies ?",
        answer:
          "Chaque choix est tracé : références exactes du nuancier, pièces concernées, finitions — le tout récapitulé par écrit et validé par le client avant l’ouverture du premier pot. Si le client change d’avis ensuite, l’avenant se génère en deux minutes au lieu d’être offert.",
      },
      {
        question: "Mes concurrents cassent les prix, l’IA change quoi ?",
        answer:
          "Elle ne baisse pas vos prix, elle les défend : devis remis le premier, avis Google nombreux et bien traités, avant/après qui prouvent la qualité. À prix supérieur mais dossier plus solide et réponse plus rapide, c’est souvent vous qui signez.",
      },
    ],
  },
  {
    slug: "plombier",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "plombier",
    name: "plombier",
    namePlural: "plombiers",
    icon: "Wrench",
    category: "artisanat",
    metaTitle: "IA pour Plombier : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l’IA pour un plombier ? Urgences triées au téléphone, diagnostic par photo avant déplacement, facture envoyée depuis le fourgon : cas d’usage, coûts et ROI.",
    headline: "L’IA qui décroche pendant que vous dépannez",
    subheadline:
      "Urgences triées au téléphone, panne identifiée sur photo avant de partir, facture envoyée depuis le fourgon : l’IA gère les appels et la paperasse, vous gérez les fuites.",
    answerFirst: {
      what: {
        question: "Que peut faire l’IA pour un plombier ?",
        answer:
          "L’IA décroche vos appels pendant les interventions, distingue la fuite qui inonde du robinet qui goutte, pré-diagnostique la panne à partir d’une photo envoyée par le client et génère devis et factures que vous dictez depuis le fourgon. Vous ne perdez plus un dépannage faute d’avoir pu répondre.",
      },
      cost: {
        question: "Combien coûte l’IA pour un plombier ?",
        answer:
          "Un standard téléphonique IA coûte 30 à 100 € par mois, la suite devis-factures-relances 30 à 80 € par mois. Un assistant sur mesure — pré-diagnostic par photo, tri des urgences selon vos règles, intégration à votre agenda — représente un projet de 2 000 à 8 000 €.",
      },
      duration: {
        question: "En combien de temps un plombier peut-il être équipé ?",
        answer:
          "Le standard IA fonctionne en moins de deux semaines : on lui apprend vos prestations, vos tarifs de déplacement et votre zone, et il décroche. Le pré-diagnostic par photo et les automatisations sur mesure demandent 4 à 6 semaines supplémentaires.",
      },
      roi: {
        question: "Quel retour sur investissement pour un plombier ?",
        answer:
          "Un dépannage facturé 150 à 300 € : il suffit qu’un ou deux appels par mois cessent de partir chez le concurrent pour couvrir l’abonnement. La plupart des plombiers équipés d’un standard IA le rentabilisent dès le premier mois, avant même de compter les heures de paperasse économisées.",
      },
    },
    painPoints: [
      "Les mains dans une intervention, impossible de décrocher — et l’appel manqué appelle le plombier suivant de la liste",
      "Au téléphone, tout est « urgent » : difficile de distinguer la vraie inondation du joint qui suinte",
      "Un déplacement sur deux se fait sans connaître la panne, donc parfois sans la bonne pièce dans le fourgon",
      "Devis, factures et relances d’impayés s’entassent le soir, après les tournées",
    ],
    useCases: [
      "assistant_vocal",
      "automatisation_admin",
      "chatbot_client",
      "crm_ia",
      "generation_contenu",
    ],
    concreteExamples: [
      {
        title: "Urgences triées au téléphone",
        description:
          "L’assistant vocal pose les questions qui comptent — l’eau coule-t-elle encore, l’arrivée est-elle fermée, quel étage — puis vous transfère les vraies urgences et planifie le reste. Votre journée n’est plus désorganisée par de fausses inondations.",
        metric: "Zéro appel manqué, urgences réelles transférées",
      },
      {
        title: "Pré-diagnostic par photo avant de partir",
        description:
          "Le client envoie une photo de la fuite, du ballon ou du mitigeur : l’IA identifie le type de panne et le matériel probable, et vous partez avec la bonne pièce. Le dépannage se règle en un passage au lieu de deux.",
        metric: "−40 % de seconds déplacements",
      },
      {
        title: "Facture dictée depuis le fourgon",
        description:
          "Intervention terminée, vous dictez ce qui a été fait : l’IA génère la facture avec vos tarifs, l’envoie au client et programme les relances en cas d’impayé. La paperasse du soir tient désormais en deux minutes sur le parking.",
        metric: "Facture envoyée avant de démarrer",
      },
    ],
    roiStats: [
      {
        label: "des appels vers les petites entreprises restent sans réponse",
        value: "62 %",
        source: "411 Locals",
      },
      {
        label: "de chiffre d’affaires moyen par dépannage — le prix de chaque appel manqué",
        value: "150-300 €",
      },
      {
        label: "de paperasse hebdomadaire absorbées par l’automatisation des devis et factures",
        value: "5-8 h",
      },
    ],
    faqs: [
      {
        question: "Un client en pleine fuite acceptera-t-il de parler à une IA ?",
        answer:
          "Mieux que de tomber sur un répondeur : l’assistant répond immédiatement, le rassure avec les premiers gestes — fermer l’arrivée d’eau, couper le ballon — et vous transfère l’appel si la situation l’exige. Pour le client, quelqu’un a décroché et l’a pris en charge ; c’est ce qui compte.",
      },
      {
        question: "Je ne suis pas à l’aise avec l’informatique, c’est quand même pour moi ?",
        answer:
          "Oui — tout est pensé pour se piloter à la voix et depuis le téléphone que vous avez déjà en poche. Vous parlez, l’IA écrit ; elle décroche, vous lisez le résumé. Si vous savez passer un appel et envoyer une photo, vous savez tout faire.",
      },
      {
        question: "L’IA peut-elle annoncer mes tarifs de dépannage au téléphone ?",
        answer:
          "Oui, et c’est même recommandé dans un métier où la méfiance sur les prix est forte : elle annonce votre forfait déplacement et vos fourchettes selon l’intervention, telles que vous les avez définies. Les clients qui cherchaient juste le moins cher sont filtrés avant de vous faire perdre du temps.",
      },
      {
        question: "Que devient l’appel si l’assistant ne sait pas répondre ?",
        answer:
          "Il ne bluffe jamais : dès qu’une demande sort du cadre — chantier complexe, litige, demande inhabituelle —, il prend les coordonnées, résume la situation par écrit et vous notifie. Vous rappelez en connaissant déjà le sujet, au moment que vous choisissez.",
      },
      {
        question: "Est-ce que ça m’aide aussi pour mes avis Google ?",
        answer:
          "Oui : après chaque intervention, l’IA envoie une demande d’avis au client satisfait, puis rédige une proposition de réponse pour chaque avis reçu, positive ou négative. Dans un métier choisi sur la réputation locale, c’est un flux régulier d’avis qui fait la différence.",
      },
    ],
  },
]
