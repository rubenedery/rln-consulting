import type { AiSectorProfile } from "@/types/ai-sectors"

// Profils IA — catégorie "services" (11 métiers)
// Règle : les exemples concrets, painPoints et FAQ sont propres à chaque métier,
// jamais réutilisés ni reformulés d'un métier à l'autre.

export const aiSectorProfilesServices: AiSectorProfile[] = [
  {
    slug: "expert-comptable",
    relatedBlogSlugs: ["ia-cabinet-comptable-guide", "ia-crm-cas-usage"],
    sectorSlug: "expert-comptable",
    name: "expert-comptable",
    namePlural: "experts-comptables",
    icon: "Calculator",
    category: "services",
    metaTitle: "IA pour Expert-Comptable : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un cabinet comptable ? Saisie automatique des factures, pré-révision, réponses clients : cas d'usage concrets, coûts réels et ROI mesuré.",
    headline: "L'IA au service de votre cabinet comptable",
    subheadline:
      "Automatisez la saisie, la révision et les échanges clients pour recentrer vos collaborateurs sur le conseil — là où se joue la valeur de votre cabinet.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un expert-comptable ?",
        answer:
          "L'IA automatise la saisie des pièces (lecture automatique des factures), pré-révise les comptes en détectant les anomalies, répond aux questions récurrentes des clients et génère les courriers et déclarations préparatoires. Les collaborateurs se concentrent sur la révision finale et le conseil.",
      },
      cost: {
        question: "Combien coûte l'IA pour un cabinet comptable ?",
        answer:
          "Un outil de reconnaissance de factures démarre à 50-150 € par mois. Un assistant IA sur mesure (réponses clients, pré-révision, intégration à votre outil de production) représente un projet de 5 000 à 25 000 € selon le périmètre et la taille du cabinet.",
      },
      duration: {
        question: "Combien de temps pour intégrer l'IA dans un cabinet ?",
        answer:
          "Un outil de saisie automatique se déploie en 2 à 4 semaines. Un assistant sur mesure branché sur vos dossiers demande 6 à 10 semaines, en commençant par un pilote sur un portefeuille restreint avant généralisation.",
      },
      roi: {
        question: "Quel retour sur investissement pour un cabinet comptable ?",
        answer:
          "La saisie automatique réduit de 60 à 80 % le temps de traitement des pièces. Sur un portefeuille de 200 dossiers, cela représente l'équivalent d'un mi-temps de collaborateur réaffecté à la révision et au conseil — rentabilisé en moins d'un an.",
      },
    },
    painPoints: [
      "La saisie des pièces mobilise vos collaborateurs sur des tâches sans valeur ajoutée",
      "Les questions récurrentes des clients (TVA, notes de frais, échéances) interrompent la production",
      "La période fiscale concentre une charge écrasante sur quelques semaines",
      "Le recrutement de collaborateurs qualifiés est de plus en plus difficile",
    ],
    useCases: [
      "extraction_documents",
      "automatisation_admin",
      "chatbot_client",
      "crm_ia",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Saisie automatique des factures fournisseurs",
        description:
          "Les clients déposent leurs pièces dans un portail ; l'IA lit chaque facture, extrait montant, TVA et imputation proposée, puis pré-comptabilise dans votre outil de production. Le collaborateur ne fait que valider.",
        metric: "−70 % de temps de saisie",
      },
      {
        title: "Assistant de réponse aux clients",
        description:
          "Un assistant entraîné sur votre base documentaire répond aux questions récurrentes (seuils de TVA, frais kilométriques, échéances sociales) avec des réponses validées par le cabinet, et transmet les questions complexes au bon collaborateur.",
        metric: "60 % des questions traitées sans interruption",
      },
      {
        title: "Pré-révision par détection d'anomalies",
        description:
          "Avant la révision annuelle, l'IA passe les balances au crible : variations inhabituelles, comptes d'attente non soldés, doublons de facturation. Le réviseur reçoit une liste de points à contrôler priorisée.",
        metric: "2 à 3 heures gagnées par dossier",
      },
    ],
    roiStats: [
      {
        label: "de temps de saisie économisé avec la lecture automatique de pièces",
        value: "60-80 %",
      },
      {
        label: "des tâches comptables standardisables sont automatisables",
        value: "~50 %",
        source: "McKinsey Global Institute",
      },
      {
        label: "des cabinets français ont engagé un chantier IA en 2025",
        value: "1 sur 3",
      },
    ],
    faqs: [
      {
        question: "L'IA est-elle compatible avec mon outil de production comptable ?",
        answer:
          "Les principaux outils du marché (ACD, Cegid, Sage, Pennylane, MyUnisoft) exposent des connecteurs ou des API. Nous intégrons la couche IA à votre environnement existant : vos collaborateurs gardent leurs habitudes, seules les tâches répétitives disparaissent.",
      },
      {
        question: "Que deviennent les données de mes clients ?",
        answer:
          "Les données restent hébergées en Europe et ne servent jamais à entraîner des modèles publics. Nous privilégions des architectures où les documents sont traités dans votre environnement, avec journalisation des accès — un point clé vis-à-vis du secret professionnel.",
      },
      {
        question: "Mes collaborateurs vont-ils perdre leur emploi ?",
        answer:
          "Non : l'IA absorbe la saisie et les questions répétitives, pas la révision ni le conseil. Les cabinets qui s'équipent réaffectent leurs collaborateurs vers des missions à plus forte valeur (accompagnement, prévisionnel, conseil fiscal) — celles qui fidélisent les clients.",
      },
      {
        question: "Par quoi commencer concrètement ?",
        answer:
          "Par la saisie automatique des pièces : c'est le cas d'usage au retour le plus rapide et le plus mesurable. Une fois ce socle en place, l'assistant de réponse clients et la pré-révision s'y ajoutent naturellement.",
      },
      {
        question: "L'IA peut-elle se tromper sur une imputation comptable ?",
        answer:
          "Oui, c'est pourquoi le collaborateur valide toujours. En pratique, l'IA propose une imputation avec un score de confiance : au-dessus du seuil que vous définissez, la pièce est pré-validée ; en dessous, elle est signalée pour contrôle manuel.",
      },
    ],
  },
  {
    slug: "agence-immobiliere",
    relatedBlogSlugs: ["ia-agence-immobiliere", "ia-crm-cas-usage"],
    sectorSlug: "agence-immobiliere",
    name: "agence immobilière",
    namePlural: "agences immobilières",
    icon: "Home",
    category: "services",
    metaTitle: "IA pour Agence Immobilière : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une agence immobilière ? Réponse aux leads en 5 minutes, annonces rédigées, avis de valeur automatisés : cas d'usage, coûts et ROI.",
    headline: "L'IA qui répond à vos leads avant la concurrence",
    subheadline:
      "Qualification des contacts portails, annonces rédigées, avis de valeur préparés : vos négociateurs passent leur temps en rendez-vous, pas derrière un clavier.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une agence immobilière ?",
        answer:
          "L'IA répond aux contacts des portails en quelques minutes, qualifie acquéreurs et vendeurs, rédige les annonces, prépare les avis de valeur à partir des données de marché et alimente le CRM sans saisie. Le négociateur garde la visite, la négociation et la rentrée de mandat.",
      },
      cost: {
        question: "Combien coûte l'IA pour une agence immobilière ?",
        answer:
          "Un assistant de qualification de leads coûte 100 à 300 € par mois. Un dispositif sur mesure — réponse automatique multi-portails, avis de valeur, rapprochement acquéreurs branché sur votre logiciel de transaction — représente un projet de 6 000 à 25 000 € selon le nombre d'agences.",
      },
      duration: {
        question: "Combien de temps pour équiper une agence immobilière ?",
        answer:
          "Un assistant de réponse aux leads se déploie en 2 à 3 semaines. Un dispositif complet intégré à votre logiciel de transaction demande 6 à 10 semaines, en commençant par une agence pilote avant d'étendre au réseau.",
      },
      roi: {
        question: "Quel retour sur investissement pour une agence immobilière ?",
        answer:
          "Répondre en moins de 5 minutes à un contact portail multiplie les chances de le joindre avant la concurrence. Les agences équipées convertissent davantage de leads en visites puis en mandats, et chaque négociateur récupère plusieurs heures de rédaction et de saisie par semaine.",
      },
    },
    painPoints: [
      "Les contacts SeLoger ou Leboncoin arrivent à toute heure et refroidissent en quelques heures sans réponse",
      "La rédaction des annonces et leur déclinaison multi-portails se répètent pour chaque mandat",
      "Les avis de valeur demandent des heures de recherche de comparables, pour des vendeurs pas toujours engagés",
      "Le rapprochement entre biens rentrés et acquéreurs en base se fait de tête — quand il se fait",
    ],
    useCases: [
      "chatbot_client",
      "crm_ia",
      "generation_contenu",
      "extraction_documents",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Réponse immédiate aux leads portails",
        description:
          "Chaque contact SeLoger, Leboncoin ou Bien'ici reçoit une réponse en quelques minutes : l'IA précise les informations du bien, pose les questions de qualification (financement, délai, secteur recherché) et propose un créneau de visite dans l'agenda du négociateur.",
        metric: "Réponse en moins de 5 minutes, 24 h/24",
      },
      {
        title: "Annonces rédigées depuis la fiche du bien",
        description:
          "À partir des caractéristiques, des diagnostics et des photos, l'IA rédige une annonce complète et conforme (DPE, honoraires, statut de copropriété), déclinée pour chaque portail et pour vos réseaux sociaux.",
        metric: "20 minutes gagnées par mandat",
      },
      {
        title: "Avis de valeur préparés automatiquement",
        description:
          "L'IA compile les ventes comparables (données DVF, historique de l'agence) et pré-remplit votre trame d'avis de valeur. Le négociateur ajuste avec sa connaissance du terrain et arrive au rendez-vous vendeur avec un document solide.",
        metric: "Un avis de valeur en 15 minutes au lieu d'une heure",
      },
    ],
    roiStats: [
      {
        label: "fois plus de chances de qualifier un prospect rappelé dans l'heure",
        value: "×7",
        source: "Harvard Business Review",
      },
      {
        label: "des demandes entrantes traitées sans mobiliser un négociateur",
        value: "60-70 %",
      },
      {
        label: "de temps gagné sur la rédaction et la diffusion des annonces",
        value: "−80 %",
      },
    ],
    faqs: [
      {
        question: "L'IA peut-elle estimer un bien à ma place ?",
        answer:
          "Elle prépare un avis de valeur à partir des comparables et des données de marché, mais l'état réel du bien et la connaissance micro-locale restent l'affaire du négociateur. L'IA fait gagner le temps de compilation, pas l'expertise terrain — et c'est votre signature qui engage l'agence.",
      },
      {
        question: "Est-ce compatible avec mon logiciel de transaction ?",
        answer:
          "Les logiciels courants (Hektor, Apimo, Netty, Périclès) exposent des API ou des passerelles. Nous branchons la couche IA dessus : les leads qualifiés, annonces et comptes rendus atterrissent directement dans votre outil, sans double saisie.",
      },
      {
        question: "Puis-je retoucher les photos des biens avec l'IA ?",
        answer:
          "Le home staging virtuel est utile pour projeter les acquéreurs, à condition d'être clairement signalé comme tel. Retoucher un défaut réel (fissure, vis-à-vis) relèverait de la pratique commerciale trompeuse : nous configurons les outils pour rester du bon côté de la ligne.",
      },
      {
        question: "Que deviennent les données de mes contacts ?",
        answer:
          "Elles restent hébergées en Europe, ne servent jamais à entraîner des modèles publics et sont traitées conformément au RGPD : consentement tracé, droit d'accès et de suppression, durées de conservation définies avec vous.",
      },
      {
        question: "Est-ce que ça fonctionne aussi pour la location et la gestion ?",
        answer:
          "Oui : pré-qualification des candidats locataires, vérification de complétude des dossiers, réponses aux locataires sur les demandes courantes (quittances, préavis, petites réparations). C'est souvent le second chantier des agences après la transaction.",
      },
    ],
  },
  {
    slug: "agence-voyage",
    sectorSlug: "agence-voyage",
    name: "agence de voyage",
    namePlural: "agences de voyage",
    icon: "Plane",
    category: "services",
    metaTitle: "IA pour Agence de Voyage : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une agence de voyage ? Propositions sur mesure accélérées, assistant avant départ, relances de devis : cas d'usage, coûts et ROI.",
    headline: "L'IA qui redonne du temps au conseil voyage",
    subheadline:
      "Propositions sur mesure accélérées, questions avant départ automatisées, devis relancés au bon moment : vos conseillers créent des voyages, l'IA gère le reste.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une agence de voyage ?",
        answer:
          "L'IA assemble une première proposition de voyage à partir du brief client, répond 24 h/24 aux questions avant départ (formalités, bagages, santé), relance les devis restés sans réponse et alimente vos pages destinations. Le conseiller garde la conception fine du voyage et la relation client.",
      },
      cost: {
        question: "Combien coûte l'IA pour une agence de voyage ?",
        answer:
          "Un assistant de réponse aux voyageurs coûte 50 à 200 € par mois. Un dispositif sur mesure — propositions automatisées à partir de vos contrats et de votre back-office, relances de devis — représente un projet de 6 000 à 20 000 € selon le périmètre.",
      },
      duration: {
        question: "Combien de temps pour équiper une agence de voyage ?",
        answer:
          "Un assistant avant départ se met en place en 2 à 3 semaines à partir de vos fiches destinations. L'automatisation des propositions demande 6 à 10 semaines, le temps de structurer vos contrats et circuits de référence, avec un pilote sur une destination phare.",
      },
      roi: {
        question: "Quel retour sur investissement pour une agence de voyage ?",
        answer:
          "Un devis sur mesure mobilise souvent une demi-journée de conseiller, pour un taux de transformation limité. En automatisant la première proposition et les relances, les agences répondent plus vite, transforment davantage de devis et absorbent les pics saisonniers sans embaucher.",
      },
    },
    painPoints: [
      "Chaque devis sur mesure mobilise des heures de conseiller, souvent sans réservation à la clé",
      "Les questions avant départ (visas, vaccins, bagages) saturent les boîtes mail à chaque vague de départs",
      "Les demandes explosent en janvier et avant l'été, quand l'équipe est déjà au maximum",
      "Les devis envoyés restent sans réponse faute de temps pour relancer",
    ],
    useCases: [
      "chatbot_client",
      "generation_contenu",
      "crm_ia",
      "automatisation_admin",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Première proposition de voyage automatisée",
        description:
          "À partir du brief (destination, dates, budget, envies), l'IA assemble un itinéraire jour par jour à partir de vos contrats et de vos circuits éprouvés. Le conseiller affine et personnalise au lieu de partir d'une page blanche.",
        metric: "Une proposition en 30 minutes au lieu d'une demi-journée",
      },
      {
        title: "Assistant avant départ sur WhatsApp",
        description:
          "Formalités d'entrée, franchise bagages, météo, rappel des horaires de vol : l'assistant répond aux voyageurs à toute heure à partir de vos fiches validées, et alerte l'agence dès qu'un imprévu sérieux se présente.",
        metric: "80 % des questions avant départ traitées sans conseiller",
      },
      {
        title: "Relance intelligente des devis",
        description:
          "L'IA détecte les devis restés sans réponse et relance chaque client au bon moment, avec un message personnalisé : évolution tarifaire, disponibilité qui se réduit, alternative de dates ou de catégorie d'hébergement.",
        metric: "+25 % de devis transformés",
      },
    ],
    roiStats: [
      {
        label: "de réduction des coûts de service client grâce aux agents conversationnels",
        value: "jusqu'à 30 %",
        source: "Gartner",
      },
      {
        label: "de temps gagné sur le montage d'une proposition sur mesure",
        value: "−70 %",
      },
      {
        label: "de devis transformés en plus grâce aux relances automatiques",
        value: "+20-30 %",
      },
    ],
    faqs: [
      {
        question: "L'IA peut-elle se tromper sur des formalités de visa ?",
        answer:
          "Oui, si elle improvise. C'est pourquoi l'assistant ne répond qu'à partir de vos fiches validées et de sources officielles, et renvoie au conseiller en cas de doute. Sur un sujet où une erreur bloque un embarquement, la règle est simple : pas de source, pas de réponse.",
      },
      {
        question: "Mes clients ne vont-ils pas fuir en parlant à un robot ?",
        answer:
          "L'assistant traite le factuel (horaires, bagages, formalités) et se présente comme tel ; le conseiller garde tout ce qui fait la valeur du sur-mesure. En pratique, les voyageurs apprécient surtout d'avoir une réponse à 22 h la veille du départ.",
      },
      {
        question: "Est-ce compatible avec mon back-office et mon GDS ?",
        answer:
          "L'intégration dépend de vos outils (Amadeus, logiciels de production). Beaucoup de cas d'usage — propositions, relances, assistant avant départ — fonctionnent en amont du GDS et se déploient sans toucher à votre chaîne de réservation.",
      },
      {
        question: "Est-ce rentable pour une petite agence indépendante ?",
        answer:
          "Oui, en commençant par les outils en abonnement : assistant avant départ et relances de devis se rentabilisent dès quelques dossiers supplémentaires transformés. Le sur-mesure ne se justifie qu'à partir d'un volume significatif de demandes.",
      },
    ],
  },
  {
    slug: "architecte",
    sectorSlug: "architecte",
    name: "architecte",
    namePlural: "architectes",
    icon: "PenTool",
    category: "services",
    metaTitle: "IA pour Architecte : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un architecte ? Comptes rendus de chantier automatiques, candidatures aux marchés, suivi des réserves : cas d'usage, coûts et ROI.",
    headline: "L'IA travaille autour du projet, vous restez sur la conception",
    subheadline:
      "Comptes rendus de chantier, candidatures aux marchés publics, suivi des réserves : libérez des heures chaque semaine sans rien céder sur la qualité architecturale.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un architecte ?",
        answer:
          "L'IA transcrit vos réunions de chantier en comptes rendus diffusables, analyse les règlements de consultation, pré-rédige mémoires techniques et courriers aux entreprises, et met en récit vos projets pour votre portfolio. La conception reste votre œuvre : l'IA travaille autour du projet, pas à votre place.",
      },
      cost: {
        question: "Combien coûte l'IA pour une agence d'architecture ?",
        answer:
          "Les outils de transcription et de rédaction coûtent 50 à 200 € par mois. Un assistant sur mesure entraîné sur vos dossiers d'affaires — comptes rendus, mémoires techniques, suivi des réserves — représente un projet de 6 000 à 20 000 € selon la taille de l'agence.",
      },
      duration: {
        question: "Combien de temps pour équiper une agence d'architecture ?",
        answer:
          "Les comptes rendus automatiques fonctionnent en 1 à 2 semaines. Un assistant branché sur vos affaires (candidatures, suivi de chantier, courriers) demande 6 à 10 semaines, en commençant par une opération pilote avant de généraliser.",
      },
      roi: {
        question: "Quel retour sur investissement pour un architecte ?",
        answer:
          "Un compte rendu de réunion de chantier représente une à deux heures de rédaction hebdomadaire par opération. Automatisé, ce seul poste libère des dizaines d'heures par an et par chantier — auxquelles s'ajoutent les gains sur les candidatures aux marchés et les mémoires techniques.",
      },
    },
    painPoints: [
      "Chaque réunion de chantier se prolonge d'une à deux heures de rédaction de compte rendu",
      "Les dossiers de candidature aux marchés publics se montent dans l'urgence, pièce par pièce",
      "Les mémoires techniques se réécrivent presque à l'identique pour chaque consultation",
      "Le suivi des réserves et des courriers aux entreprises grignote le temps de conception",
    ],
    useCases: [
      "transcription_comptes_rendus",
      "generation_contenu",
      "automatisation_admin",
      "extraction_documents",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Comptes rendus de chantier automatiques",
        description:
          "La réunion est enregistrée puis transformée en compte rendu structuré par lot : décisions, observations, actions et échéances par entreprise. La diffusion à tous les intervenants part dans l'heure, au lieu du lendemain soir.",
        metric: "1 h 30 gagnée par réunion de chantier",
      },
      {
        title: "Candidatures aux marchés publics accélérées",
        description:
          "L'IA lit le règlement de consultation, liste les pièces exigées et les critères de jugement, puis pré-remplit le mémoire technique à partir de vos références et de vos réponses passées. Vous arbitrez le fond, elle assemble le dossier.",
        metric: "Une candidature montée 2 fois plus vite",
      },
      {
        title: "Suivi des réserves jusqu'à la levée",
        description:
          "Réserves d'OPR, relances d'entreprises, courriers de mise en demeure : l'IA tient le tableau de suivi par lot et prépare chaque courrier à partir de vos modèles, jusqu'à la levée complète.",
        metric: "Zéro réserve oubliée à la livraison",
      },
    ],
    roiStats: [
      {
        label: "de temps gagné sur la rédaction des comptes rendus",
        value: "70-80 %",
      },
      {
        label: "des organisations constatent un retour positif de leurs projets d'IA dès la première année",
        value: "2 sur 3",
        source: "Deloitte",
      },
      {
        label: "de temps de montage en moins sur les dossiers de candidature",
        value: "−50 %",
      },
    ],
    faqs: [
      {
        question: "L'IA peut-elle concevoir des plans à ma place ?",
        answer:
          "Non, et ce n'est pas l'objectif. Les gains fiables aujourd'hui sont autour du projet : comptes rendus, candidatures, courriers, suivi. Les outils génératifs d'images peuvent nourrir une recherche d'ambiance, mais la conception et la responsabilité du projet restent celles de l'architecte.",
      },
      {
        question: "Mes projets et ceux de mes maîtres d'ouvrage restent-ils confidentiels ?",
        answer:
          "Oui : les documents sont traités dans un environnement privé, hébergé en Europe, sans entraînement de modèles publics. Un point important quand vos dossiers contiennent des plans, des budgets et des données de maîtres d'ouvrage publics ou privés.",
      },
      {
        question: "Qui est responsable si l'IA fait une erreur dans un compte rendu ?",
        answer:
          "Vous relisez et validez avant diffusion, comme pour un compte rendu rédigé par un collaborateur. L'IA produit un projet de document ; la signature — et la responsabilité de maîtrise d'œuvre — restent les vôtres. La relecture prend quelques minutes, pas une heure.",
      },
      {
        question: "Est-ce adapté à une petite agence de deux ou trois personnes ?",
        answer:
          "C'est même là que le gain relatif est le plus fort : dans une petite structure, c'est l'architecte lui-même qui rédige les comptes rendus le soir. Les outils en abonnement suffisent pour commencer, sans projet sur mesure.",
      },
    ],
  },
  {
    slug: "auto-ecole",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "auto-ecole",
    name: "auto-école",
    namePlural: "auto-écoles",
    icon: "FileCheck",
    category: "services",
    metaTitle: "IA pour Auto-École : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une auto-école ? Standard qui décroche pendant les leçons, relances d'élèves, dossiers ANTS : cas d'usage concrets, coûts et ROI.",
    headline: "Une auto-école qui répond, même pendant les leçons",
    subheadline:
      "Standard IA, relances des élèves qui décrochent, dossiers d'inscription automatisés : remplissez vos créneaux et gardez vos élèves jusqu'au permis.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une auto-école ?",
        answer:
          "L'IA décroche le téléphone pendant que les moniteurs sont en leçon, renseigne sur les formules et inscrit les élèves, relance ceux qui espacent leurs leçons avant qu'ils n'abandonnent, optimise le planning des moniteurs et automatise la préparation des dossiers ANTS.",
      },
      cost: {
        question: "Combien coûte l'IA pour une auto-école ?",
        answer:
          "Un standard téléphonique IA coûte 60 à 250 € par mois. Un dispositif complet — standard, relances d'élèves, planning optimisé, intégration à votre logiciel de gestion d'auto-école — représente un projet de 5 000 à 15 000 € selon le nombre d'agences.",
      },
      duration: {
        question: "Combien de temps pour équiper une auto-école ?",
        answer:
          "Le standard IA se met en place en 1 à 2 semaines : il suffit de le connecter à votre ligne et à votre agenda. Les relances automatiques et l'optimisation du planning demandent 4 à 8 semaines, le temps de se brancher sur votre logiciel de gestion.",
      },
      roi: {
        question: "Quel retour sur investissement pour une auto-école ?",
        answer:
          "Chaque appel manqué pendant une leçon est un élève potentiel qui compose le numéro de l'auto-école suivante. En récupérant ces appels et en réduisant les abandons en cours de formation, vous remplissez vos créneaux existants : le standard IA se rembourse dès les premières inscriptions.",
      },
    },
    painPoints: [
      "Le téléphone sonne dans le vide pendant les leçons de conduite, et les prospects appellent le concurrent",
      "Les élèves qui espacent leurs leçons finissent par abandonner sans que personne ne s'en aperçoive",
      "Les dossiers ANTS et les pièces d'inscription se traitent le soir, après les heures de conduite",
      "Le planning des moniteurs se creuse de trous impossibles à combler à la dernière minute",
    ],
    useCases: [
      "assistant_vocal",
      "chatbot_client",
      "automatisation_admin",
      "analyse_predictive",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Standard IA pendant les heures de conduite",
        description:
          "L'assistant décroche quand le bureau est vide : il renseigne sur les formules (permis B, AAC, conduite supervisée), les tarifs et les délais de passage, inscrit aux séances de code et programme un rappel par un moniteur pour les cas particuliers.",
        metric: "Zéro appel manqué, même à 19 h",
      },
      {
        title: "Détection des élèves qui décrochent",
        description:
          "L'IA repère les élèves sans leçon depuis trois semaines ou en échec répété aux examens blancs, et déclenche une relance personnalisée avant l'abandon : proposition de créneaux, point pédagogique avec le moniteur référent.",
        metric: "−30 % d'abandons en cours de formation",
      },
      {
        title: "Dossiers d'inscription sans ressaisie",
        description:
          "L'élève dépose ses pièces (identité, JDC, photo-signature numérique) dans un portail ; l'IA vérifie leur conformité, réclame ce qui manque et prépare le dossier NEPH prêt à déposer sur l'ANTS.",
        metric: "Un dossier complet en 10 minutes de traitement",
      },
    ],
    roiStats: [
      {
        label: "du temps de travail administratif automatisable avec les technologies actuelles",
        value: "60-70 %",
        source: "McKinsey Global Institute",
      },
      {
        label: "d'appels récupérés en dehors des heures de présence au bureau",
        value: "100 %",
      },
      {
        label: "d'abandons en moins grâce aux relances automatiques des élèves",
        value: "−20-30 %",
      },
    ],
    faqs: [
      {
        question: "Le standard IA sait-il vraiment répondre sur mes formules et mes prix ?",
        answer:
          "Oui : il est configuré avec vos offres, vos tarifs, vos délais réels de passage à l'examen et vos horaires de code. Il ne répond que sur ce périmètre validé ; pour toute question pédagogique ou litigieuse, il prend les coordonnées et programme un rappel.",
      },
      {
        question: "Est-ce compatible avec mon logiciel de gestion d'auto-école ?",
        answer:
          "Les logiciels courants du secteur exposent des exports ou des API. Le standard IA fonctionne dans tous les cas (il se branche sur votre ligne et votre agenda) ; les relances et le suivi des élèves demandent un accès à votre base, mis en place avec votre éditeur.",
      },
      {
        question: "Les élèves acceptent-ils de parler à une IA ?",
        answer:
          "La grande majorité des appels concernent des questions simples : tarifs, horaires, pièces à fournir. L'assistant se présente comme tel, répond immédiatement et transfère vers un humain à la demande — ce qui reste préférable à un répondeur ou une sonnerie dans le vide.",
      },
      {
        question: "Combien de temps pour rentabiliser l'investissement ?",
        answer:
          "Avec un forfait permis B autour de 1 300 à 1 500 €, deux ou trois inscriptions récupérées grâce aux appels décrochés couvrent une année de standard IA. Les relances anti-abandon ajoutent un second levier : un élève retenu, c'est une formation menée à terme et payée.",
      },
    ],
  },
  {
    slug: "avocat",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "avocat",
    name: "avocat",
    namePlural: "avocats",
    icon: "Gavel",
    category: "services",
    metaTitle: "IA pour Avocat : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un cabinet d'avocats ? Analyse des pièces, trames de conclusions, notes de rendez-vous : cas d'usage concrets, coûts réels et ROI.",
    headline: "L'IA au service de votre cabinet d'avocats",
    subheadline:
      "Analyse des pièces, trames d'actes, notes de dossier : réduisez les heures non facturables et consacrez votre temps à la stratégie et à la plaidoirie.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un avocat ?",
        answer:
          "L'IA recherche dans les pièces d'un dossier volumineux, prépare des trames de conclusions et de courriers à partir de vos modèles, transcrit vos rendez-vous en notes de dossier et automatise le suivi administratif du cabinet. Elle assiste la préparation : l'analyse juridique et la stratégie restent celles de l'avocat.",
      },
      cost: {
        question: "Combien coûte l'IA pour un cabinet d'avocats ?",
        answer:
          "Les outils de recherche et de rédaction juridiques assistés par IA coûtent 100 à 300 € par mois et par utilisateur. Un assistant sur mesure, entraîné sur vos modèles d'actes et branché sur votre logiciel de gestion de cabinet, représente un projet de 8 000 à 30 000 € selon la taille de la structure.",
      },
      duration: {
        question: "Combien de temps pour intégrer l'IA dans un cabinet d'avocats ?",
        answer:
          "Un outil du marché se prend en main en 1 à 2 semaines. Un assistant sur mesure demande 6 à 10 semaines, avec un pilote sur un domaine d'activité (droit du travail, famille, immobilier) avant extension au reste du cabinet.",
      },
      roi: {
        question: "Quel retour sur investissement pour un cabinet d'avocats ?",
        answer:
          "La recherche dans les pièces et la préparation des actes courants représentent des heures non facturables chaque semaine. Les cabinets équipés récupèrent 4 à 8 heures par avocat et par semaine — du temps réinvesti dans les dossiers complexes et le développement de la clientèle.",
      },
    },
    painPoints: [
      "Retrouver une pièce ou une mention dans un dossier de plusieurs centaines de pages engloutit des heures non facturables",
      "Les conclusions et courriers récurrents se rédigent toujours en repartant de zéro",
      "Les clients appellent pour connaître l'avancement de leur dossier et interrompent le travail de fond",
      "Le formalisme procédural (délais, bordereaux, communication de pièces) expose à des erreurs coûteuses",
    ],
    useCases: [
      "extraction_documents",
      "transcription_comptes_rendus",
      "automatisation_admin",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Analyse des pièces adverses",
        description:
          "Vous versez les pièces adverses dans un espace sécurisé ; l'IA les indexe, en produit une synthèse chronologique et retrouve chaque mention d'un fait, d'une date ou d'un montant. Le bordereau de pièces se prépare en parallèle.",
        metric: "Un dossier de 400 pages exploitable en une heure",
      },
      {
        title: "Trames de conclusions à partir de vos modèles",
        description:
          "L'IA repart de vos propres écritures pour proposer une trame structurée — faits, discussion, dispositif — adaptée au dossier. L'avocat concentre son temps sur l'argumentation et la qualification juridique, pas sur la mise en forme.",
        metric: "−40 % de temps sur les actes courants",
      },
      {
        title: "Notes de rendez-vous automatiques",
        description:
          "Chaque rendez-vous client est transcrit puis résumé en note de dossier : faits rapportés, pièces à réclamer, prochaines étapes. La note est archivée au dossier avant votre rendez-vous suivant.",
        metric: "30 minutes gagnées par rendez-vous",
      },
    ],
    roiStats: [
      {
        label: "des tâches juridiques présentent un potentiel d'automatisation par l'IA",
        value: "~44 %",
        source: "Goldman Sachs Research",
      },
      {
        label: "d'heures non facturables économisées par avocat chaque semaine",
        value: "4 à 8 h",
      },
      {
        label: "de temps gagné sur la recherche dans les pièces d'un dossier",
        value: "jusqu'à 70 %",
      },
    ],
    faqs: [
      {
        question: "L'IA est-elle compatible avec le secret professionnel ?",
        answer:
          "Oui, à condition d'une architecture adaptée : hébergement en Europe, aucune réutilisation des données pour entraîner des modèles publics, cloisonnement par dossier et journalisation des accès. C'est le prérequis de tout projet en cabinet — un outil grand public ne le garantit pas.",
      },
      {
        question: "L'IA peut-elle citer une jurisprudence inventée ?",
        answer:
          "Oui, un modèle générique peut halluciner une décision. C'est pourquoi les outils sérieux s'appuient sur les bases officielles (Légifrance, Judilibre) et citent leurs sources, et pourquoi l'avocat vérifie chaque référence avant de la reprendre dans un acte. La vérification reste non négociable.",
      },
      {
        question: "L'IA va-t-elle remplacer les avocats ?",
        answer:
          "Non. Elle absorbe la recherche documentaire, la mise en forme et l'administratif ; l'analyse juridique, la stratégie contentieuse, la négociation et la plaidoirie restent humaines. L'IA assiste la préparation du dossier, elle ne délivre pas de conseil juridique autonome.",
      },
      {
        question: "Puis-je utiliser ChatGPT pour mes dossiers clients ?",
        answer:
          "Pas dans sa version grand public : les données saisies quittent votre contrôle, ce qui est incompatible avec le secret professionnel. Il faut un environnement dédié, contractualisé, où vos dossiers ne servent jamais à entraîner un modèle tiers.",
      },
      {
        question: "Que dit la déontologie sur l'usage de l'IA au cabinet ?",
        answer:
          "Le CNB encourage un usage maîtrisé : l'avocat reste pleinement responsable de ce qu'il produit et signe. Concrètement, cela impose de vérifier systématiquement les sorties de l'IA, de protéger les données clients et de conserver la maîtrise intellectuelle de chaque acte.",
      },
    ],
  },
  {
    slug: "centre-formation",
    sectorSlug: "centre-formation",
    name: "centre de formation",
    namePlural: "centres de formation",
    icon: "GraduationCap",
    category: "services",
    metaTitle: "IA pour Centre de Formation : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un organisme de formation ? Dossiers OPCO et CPF automatisés, préparation Qualiopi, quiz générés : cas d'usage, coûts et ROI.",
    headline: "L'administratif de vos formations, en pilote automatique",
    subheadline:
      "Dossiers de financement, preuves Qualiopi, supports et quiz : vos formateurs forment, l'IA tient la paperasse — et vos audits se préparent sereinement.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un centre de formation ?",
        answer:
          "L'IA pré-remplit les dossiers de financement (OPCO, CPF), compile les preuves Qualiopi indicateur par indicateur, décline vos contenus en programmes, supports et quiz d'évaluation, répond aux questions des stagiaires et relance les prospects. Les formateurs forment, l'administratif suit tout seul.",
      },
      cost: {
        question: "Combien coûte l'IA pour un organisme de formation ?",
        answer:
          "Les outils de création de contenus pédagogiques coûtent 50 à 200 € par mois. Un dispositif sur mesure — automatisation des dossiers de financement, préparation Qualiopi, assistant stagiaires branché sur votre outil de gestion — représente un projet de 8 000 à 25 000 €.",
      },
      duration: {
        question: "Combien de temps pour équiper un centre de formation ?",
        answer:
          "Les outils standards se déploient en 2 à 4 semaines. L'automatisation du flux documentaire des sessions demande 6 à 10 semaines, en pilotant d'abord sur une formation phare avant d'étendre au catalogue complet.",
      },
      roi: {
        question: "Quel retour sur investissement pour un centre de formation ?",
        answer:
          "Une session génère convention, programme, convocations, émargements, attestations et questionnaires : plusieurs heures d'administratif à chaque fois. Automatisé, ce flux libère l'équivalent de journées entières chaque mois — et sécurise le passage des audits Qualiopi.",
      },
    },
    painPoints: [
      "Chaque session déclenche sa cascade de documents : convention, convocations, émargements, attestations, évaluations",
      "Les dossiers OPCO et CPF exigent des pièces précises, avec des refus de prise en charge à la moindre erreur",
      "L'audit Qualiopi se prépare dans la panique, en compilant des preuves éparpillées",
      "L'actualisation des supports de formation passe toujours après l'urgence commerciale",
    ],
    useCases: [
      "chatbot_client",
      "generation_contenu",
      "automatisation_admin",
      "crm_ia",
      "extraction_documents",
    ],
    concreteExamples: [
      {
        title: "Flux documentaire de session automatisé",
        description:
          "À la création d'une session, l'IA génère convention, programme personnalisé, convocations et questionnaires de positionnement à partir de vos modèles, les envoie aux bonnes personnes et archive chaque preuve au bon endroit.",
        metric: "−60 % de temps administratif par session",
      },
      {
        title: "Préparation d'audit Qualiopi assistée",
        description:
          "L'IA rapproche vos preuves (émargements, évaluations, réclamations, veille) des 32 indicateurs du référentiel et signale les trous à combler avant le passage de l'auditeur. Vous arrivez à l'audit avec un dossier organisé, pas une pile de classeurs.",
        metric: "Des semaines de préparation ramenées à quelques jours",
      },
      {
        title: "Déclinaison des contenus pédagogiques",
        description:
          "À partir d'un support existant, l'IA produit le programme détaillé, le quiz d'évaluation des acquis et le support stagiaire, dans votre charte graphique. Le formateur valide et ajuste au lieu de tout créer.",
        metric: "Un quiz d'évaluation généré en 5 minutes",
      },
    ],
    roiStats: [
      {
        label: "de productivité mesurée chez les équipes assistées par l'IA générative",
        value: "+14 %",
        source: "Étude Stanford & MIT",
      },
      {
        label: "de temps administratif économisé par session de formation",
        value: "50-60 %",
      },
      {
        label: "de temps gagné sur la création de supports et de quiz",
        value: "jusqu'à 70 %",
      },
    ],
    faqs: [
      {
        question: "L'IA est-elle compatible avec Qualiopi ?",
        answer:
          "Oui, elle sert justement la traçabilité qu'exige le référentiel : chaque document est généré, daté et archivé au bon indicateur. La responsabilité pédagogique et la conformité restent celles de l'organisme certifié — l'IA organise les preuves, elle ne les invente pas.",
      },
      {
        question: "Les contenus générés m'appartiennent-ils ?",
        answer:
          "Ils sont produits à partir de vos propres supports et restent votre propriété. Le point de vigilance est en amont : ne pas injecter dans l'outil des contenus tiers protégés (manuels, formations concurrentes) dont vous ne détenez pas les droits.",
      },
      {
        question: "L'IA peut-elle animer une formation à la place du formateur ?",
        answer:
          "Non. Elle prépare les supports, génère les évaluations et répond aux questions logistiques des stagiaires, mais l'animation, l'adaptation au groupe et l'accompagnement pédagogique restent le cœur du métier de formateur — c'est aussi ce que financent OPCO et CPF.",
      },
      {
        question: "Est-ce compatible avec Digiforma ou mon outil de gestion ?",
        answer:
          "Les outils de gestion de la formation (Digiforma, Dendreo et équivalents) exposent des API ou des exports. Nous branchons l'automatisation dessus : les sessions créées dans votre outil déclenchent le flux documentaire sans double saisie.",
      },
      {
        question: "Par où commencer ?",
        answer:
          "Par le flux documentaire de session : c'est le poste le plus volumineux, le plus répétitif et le plus mesurable. La préparation Qualiopi et la déclinaison des contenus s'ajoutent ensuite sur le même socle.",
      },
    ],
  },
  {
    slug: "consultant",
    relatedBlogSlugs: ["ia-crm-cas-usage"],
    sectorSlug: "consultant",
    name: "consultant",
    namePlural: "consultants",
    icon: "Lightbulb",
    category: "services",
    metaTitle: "IA pour Consultant : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un consultant indépendant ? Propales en 1 heure, comptes rendus instantanés, base de missions : cas d'usage, coûts réels et ROI.",
    headline: "Facturez plus d'heures, sans allonger vos journées",
    subheadline:
      "Propositions commerciales, comptes rendus, contenus LinkedIn : l'IA absorbe le non-facturable pour que votre expertise reste concentrée sur vos missions.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un consultant ?",
        answer:
          "L'IA rédige vos propositions commerciales à partir de vos missions passées, transcrit entretiens et ateliers en comptes rendus structurés, transforme vos livrables en contenus LinkedIn et tient votre CRM à jour. Vous vendez et vous délivrez ; elle absorbe tout ce qui ne se facture pas.",
      },
      cost: {
        question: "Combien coûte l'IA pour un consultant indépendant ?",
        answer:
          "Les outils généralistes (transcription, rédaction assistée) coûtent 20 à 100 € par mois — le point d'entrée le plus bas de tous les métiers de services. Un assistant sur mesure entraîné sur vos livrables et votre méthodologie représente un projet de 5 000 à 15 000 €.",
      },
      duration: {
        question: "Combien de temps pour outiller une activité de conseil ?",
        answer:
          "Les outils du marché s'installent en quelques jours. Un assistant sur mesure — base de missions interrogeable, génération de propales dans vos modèles — demande 4 à 8 semaines, principalement pour structurer et indexer votre capital de livrables.",
      },
      roi: {
        question: "Quel retour sur investissement pour un consultant ?",
        answer:
          "Pour un consultant facturant 800 à 1 500 € la journée, chaque heure non facturable a un coût direct. Récupérer 5 heures par semaine sur les propales, comptes rendus et contenus représente jusqu'à 20 % de capacité facturable en plus — sans allonger les journées.",
      },
    },
    painPoints: [
      "Les propositions commerciales dévorent des journées entières, sans garantie de signature",
      "Les comptes rendus d'entretiens et d'ateliers s'écrivent le soir, après les journées facturées",
      "La prospection et LinkedIn passent à la trappe dès qu'une mission démarre — et le pipe se vide",
      "Dix ans de livrables dorment dans des dossiers que personne ne réexploite",
    ],
    useCases: [
      "generation_contenu",
      "transcription_comptes_rendus",
      "crm_ia",
      "automatisation_admin",
    ],
    concreteExamples: [
      {
        title: "Propositions commerciales en une heure",
        description:
          "L'IA repart de vos propales gagnantes et de vos références pour générer une proposition structurée — contexte, approche, planning, budget — adaptée au brief du prospect. Vous ajustez le fond, elle a déjà fait la forme.",
        metric: "Une propale en 1 heure au lieu d'une journée",
      },
      {
        title: "Comptes rendus d'entretiens instantanés",
        description:
          "Chaque entretien de cadrage ou atelier est transcrit puis synthétisé : verbatims clés, constats, décisions, actions. La synthèse alimente directement votre livrable de diagnostic, sans soirée de rédaction.",
        metric: "5 heures gagnées par semaine de mission",
      },
      {
        title: "Votre base de missions interrogeable",
        description:
          "Vos livrables, notes et propales sont indexés dans un espace privé : « qu'avait-on recommandé sur la supply chain en 2023 ? » trouve la réponse en quelques secondes, benchmarks et chiffrages compris.",
        metric: "10 ans d'expérience mobilisables en une question",
      },
    ],
    roiStats: [
      {
        label: "de tâches réalisées plus rapidement par les consultants équipés d'IA générative",
        value: "+25 %",
        source: "Harvard Business School × BCG",
      },
      {
        label: "d'heures non facturables économisées chaque semaine",
        value: "5 à 8 h",
      },
      {
        label: "de capacité facturable récupérée sur une année",
        value: "jusqu'à +20 %",
      },
    ],
    faqs: [
      {
        question: "Mes livrables clients sont sous NDA : puis-je les confier à une IA ?",
        answer:
          "Oui, dans un environnement privé : hébergement en Europe, aucune réutilisation pour entraîner des modèles publics, cloisonnement par client. Cela reste compatible avec la plupart des clauses de confidentialité — à vérifier contrat par contrat, certains grands comptes imposant leurs propres outils.",
      },
      {
        question: "ChatGPT ne suffit-il pas ?",
        answer:
          "Pour dépanner, si. Mais un assistant entraîné sur vos méthodes écrit dans votre style, réutilise vos références et vos chiffrages réels — c'est ce qui fait la différence dans une propale face à un concurrent qui envoie du générique.",
      },
      {
        question: "L'IA ne va-t-elle pas banaliser le métier de consultant ?",
        answer:
          "Elle banalise la mise en forme, pas le jugement. Le diagnostic, la recommandation assumée et la conduite du changement restent votre valeur. Les consultants équipés livrent plus vite et mieux documenté — ils vendent plus de séniorité, pas moins.",
      },
      {
        question: "Par quoi commencer quand on est seul ?",
        answer:
          "Par deux outils en abonnement : la transcription de vos entretiens et la génération de propales à partir de vos modèles. Comptez moins de 100 € par mois pour un gain immédiat ; la base de missions sur mesure viendra quand le volume le justifiera.",
      },
    ],
  },
  {
    slug: "demenageur",
    relatedBlogSlugs: ["automatiser-taches-administratives-ia"],
    sectorSlug: "demenageur",
    name: "déménageur",
    namePlural: "déménageurs",
    icon: "Truck",
    category: "services",
    metaTitle: "IA pour Déménageur : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un déménageur ? Devis au cubage par photos, standard pendant les tournées, planning optimisé : cas d'usage, coûts réels et ROI.",
    headline: "Des devis en 24 heures et des camions pleins",
    subheadline:
      "Cubage estimé par photos, standard qui décroche pendant les tournées, planning optimisé : signez plus de déménagements sans multiplier les visites techniques.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un déménageur ?",
        answer:
          "L'IA estime le cubage à partir de photos ou d'une vidéo du logement, prépare le devis, décroche le téléphone pendant les tournées, optimise le planning des camions et des équipes et pré-remplit les documents de transport (lettre de voiture, déclaration de valeur). Vous déménagez, elle gère le reste.",
      },
      cost: {
        question: "Combien coûte l'IA pour une entreprise de déménagement ?",
        answer:
          "Un standard IA et un module de devis en ligne coûtent 80 à 250 € par mois. Un dispositif complet — estimation du cubage par photos, planning optimisé, documents automatisés — représente un projet de 5 000 à 20 000 € selon la taille de la flotte.",
      },
      duration: {
        question: "Combien de temps pour équiper une entreprise de déménagement ?",
        answer:
          "Le standard IA fonctionne en 1 à 2 semaines. L'estimation du cubage par photos et l'optimisation du planning demandent 6 à 10 semaines, avec un calibrage sur vos déménagements passés pour fiabiliser les estimations avant la haute saison.",
      },
      roi: {
        question: "Quel retour sur investissement pour un déménageur ?",
        answer:
          "Le premier déménageur qui envoie un devis sérieux remporte souvent l'affaire. En chiffrant en 24 heures sans visite technique et en récupérant les appels manqués en tournée, une entreprise augmente son taux de signature et remplit ses camions — y compris hors saison.",
      },
    },
    painPoints: [
      "Chaque devis sérieux exige une visite technique, coûteuse pour des prospects qui comparent cinq entreprises",
      "Les appels tombent pendant les portages, quand personne ne peut décrocher",
      "Le planning camions-équipes se monte à la main, entre les imprévus et la haute saison de l'été",
      "Lettres de voiture, déclarations de valeur et contrats de garde-meuble génèrent une paperasse permanente",
    ],
    useCases: [
      "assistant_vocal",
      "automatisation_admin",
      "analyse_predictive",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Cubage estimé à partir de photos",
        description:
          "Le client filme son logement avec son téléphone ; l'IA identifie les meubles, calcule le volume en mètres cubes et signale les points d'attention (piano, accès étroit, étage sans ascenseur). Le devis part en 24 heures, la visite technique n'est réservée qu'aux dossiers complexes.",
        metric: "Un devis en 24 h sans déplacement",
      },
      {
        title: "Standard IA pendant les tournées",
        description:
          "L'assistant décroche quand l'équipe porte : il renseigne sur la zone d'intervention et les disponibilités, qualifie la demande (volume, distance, date souhaitée) et fixe le rendez-vous de rappel avec le responsable.",
        metric: "100 % des appels pris, même un jour de portage",
      },
      {
        title: "Planning camions et équipes optimisé",
        description:
          "L'IA construit le planning hebdomadaire en croisant volumes, distances, effectifs et contraintes d'accès, puis réordonnance en cas d'imprévu : report client, camion immobilisé, monte-meuble indisponible.",
        metric: "+15 % de déménagements absorbés à flotte constante",
      },
    ],
    roiStats: [
      {
        label: "d'économies possibles sur les coûts logistiques grâce à l'optimisation par IA",
        value: "10-15 %",
        source: "McKinsey",
      },
      {
        label: "de taux de signature en plus en répondant le premier avec un devis fiable",
        value: "+30 %",
      },
      {
        label: "d'appels récupérés pendant les jours de déménagement",
        value: "100 %",
      },
    ],
    faqs: [
      {
        question: "L'estimation du cubage par photos est-elle fiable ?",
        answer:
          "Sur les dossiers standard, la marge d'erreur se limite à quelques mètres cubes — suffisant pour un devis ferme. L'IA signale elle-même les dossiers à risque (gros volumes, objets d'art, accès difficiles) pour lesquels la visite technique reste programmée.",
      },
      {
        question: "Est-ce que ça fonctionne pour les transferts d'entreprise ?",
        answer:
          "Oui : inventaire du mobilier par photos, phasage par service, planning de bascule sur un week-end. Les transferts de bureaux sont même le terrain où l'optimisation du planning et des équipes rapporte le plus.",
      },
      {
        question: "Et pendant la haute saison de l'été ?",
        answer:
          "C'est là que le dispositif paie le plus : les devis partent sans attendre une visite, le standard absorbe le pic d'appels et le planning optimisé permet de caser des déménagements supplémentaires avec la même flotte, au lieu de refuser des clients.",
      },
      {
        question: "Les documents de transport peuvent-ils être automatisés ?",
        answer:
          "Oui : lettre de voiture, déclaration de valeur et conditions générales se pré-remplissent depuis le dossier client, avec signature électronique. Le cadre réglementaire du transport est respecté — le document est simplement prêt avant que le camion parte.",
      },
    ],
  },
  {
    slug: "notaire",
    sectorSlug: "notaire",
    name: "notaire",
    namePlural: "notaires",
    icon: "Landmark",
    category: "services",
    metaTitle: "IA pour Notaire : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans une étude notariale ? Collecte des pièces automatisée, pré-analyse des successions, suivi client : cas d'usage, coûts et ROI.",
    headline: "L'IA au service de votre étude notariale",
    subheadline:
      "Collecte des pièces, pré-analyse des successions, suivi client automatisé : vos clercs se recentrent sur les actes, vos dossiers avancent plus vite.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour une étude notariale ?",
        answer:
          "L'IA collecte et vérifie les pièces des dossiers (état civil, titres, diagnostics, urbanisme), pré-analyse les successions, répond aux demandes d'avancement des clients et transcrit les rendez-vous en notes de dossier. Elle prépare les dossiers ; la rédaction finale et l'authentification restent l'apanage du notaire.",
      },
      cost: {
        question: "Combien coûte l'IA pour une étude notariale ?",
        answer:
          "Un assistant de suivi de dossiers coûte 100 à 300 € par mois. Un projet sur mesure, intégré à votre logiciel de rédaction d'actes et à vos circuits de collecte de pièces, représente 10 000 à 30 000 € selon le périmètre et la taille de l'étude.",
      },
      duration: {
        question: "Combien de temps pour équiper une étude notariale ?",
        answer:
          "Un assistant de suivi client se déploie en 2 à 4 semaines. L'automatisation de la collecte des pièces demande 8 à 12 semaines, en commençant par un pilote sur les ventes immobilières — le flux le plus volumineux et le plus standardisé de l'étude.",
      },
      roi: {
        question: "Quel retour sur investissement pour une étude notariale ?",
        answer:
          "La collecte des pièces représente l'essentiel du délai entre compromis et acte. En l'automatisant, les études réduisent de plusieurs semaines le délai moyen d'une vente et libèrent les clercs des relances — un gain direct de capacité de traitement, sans recruter.",
      },
    },
    painPoints: [
      "La collecte des pièces (état civil, urbanisme, syndic, hypothèques) rythme — et retarde — chaque dossier de vente",
      "Les successions imposent des heures de dépouillement de relevés bancaires et d'actes anciens",
      "Les demandes d'avancement de dossier mobilisent les clercs au détriment de la rédaction",
      "Le formalisme des actes ne tolère aucune approximation, alors que la charge des études augmente",
    ],
    useCases: [
      "extraction_documents",
      "transcription_comptes_rendus",
      "automatisation_admin",
      "assistant_vocal",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Constitution automatisée des dossiers de vente",
        description:
          "Dès l'ouverture du dossier, l'IA réclame les pièces aux parties (état civil, titre de propriété, diagnostics, pré-état daté), relance automatiquement et signale au clerc ce qui manque. Le dossier arrive complet à l'étape de rédaction.",
        metric: "Plusieurs semaines gagnées entre compromis et acte",
      },
      {
        title: "Pré-analyse des successions",
        description:
          "L'IA dépouille relevés bancaires, avis d'imposition et actes antérieurs pour préparer l'inventaire des actifs et un projet de déclaration de succession, que le notaire contrôle, corrige et complète.",
        metric: "Des heures de dépouillement économisées par dossier",
      },
      {
        title: "Suivi client sans mobiliser les clercs",
        description:
          "Un assistant répond aux demandes d'avancement — « où en est ma vente ? » — à partir de l'état réel du dossier, au téléphone comme par email, et transfère à l'étude dès que la question sort du cadre.",
        metric: "−50 % d'appels entrants à traiter",
      },
    ],
    roiStats: [
      {
        label: "de temps gagné sur la constitution des dossiers de vente",
        value: "40-60 %",
      },
      {
        label: "des tâches administratives standardisées sont automatisables",
        value: "~50 %",
        source: "McKinsey Global Institute",
      },
      {
        label: "d'appels entrants absorbés par un assistant de suivi de dossier",
        value: "jusqu'à 50 %",
      },
    ],
    faqs: [
      {
        question: "L'IA peut-elle rédiger un acte authentique ?",
        answer:
          "Non. Elle prépare le dossier — pièces, vérifications, trames — mais la rédaction finale, le contrôle juridique et l'authentification relèvent du notaire seul : c'est ce qui fonde la force probante et exécutoire de l'acte. L'IA fait gagner du temps en amont, jamais sur l'acte lui-même.",
      },
      {
        question: "Qu'en est-il du secret professionnel de l'étude ?",
        answer:
          "Les dossiers sont traités dans un environnement hébergé en France ou en Europe, sans réutilisation pour entraîner des modèles publics, avec cloisonnement par dossier et traçabilité des accès. Aucune donnée d'un client ne peut ressortir dans le dossier d'un autre.",
      },
      {
        question: "L'IA s'intègre-t-elle à mon logiciel de rédaction d'actes ?",
        answer:
          "Les principaux logiciels du notariat exposent des connecteurs ou des API. Quand l'intégration directe n'est pas possible, la collecte de pièces et le suivi client fonctionnent en amont, sans rien changer à votre chaîne de rédaction.",
      },
      {
        question: "Par quel type de dossier commencer ?",
        answer:
          "Par les ventes immobilières : le volume est élevé, les pièces sont standardisées et le gain se mesure directement sur le délai compromis-acte. Les successions, plus hétérogènes, constituent le second chantier naturel.",
      },
    ],
  },
  {
    slug: "wedding-planner",
    sectorSlug: "wedding-planner",
    name: "wedding planner",
    namePlural: "wedding planners",
    icon: "Flower2",
    category: "services",
    metaTitle: "IA pour Wedding Planner : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un wedding planner ? Réponse immédiate aux mariés, rétroplannings générés, relances prestataires : cas d'usage, coûts et ROI.",
    headline: "Répondez aux futurs mariés avant les autres",
    subheadline:
      "Qualification immédiate des demandes, rétroplannings générés, prestataires relancés : plus de mariages signés, et un jour J toujours aussi soigné.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un wedding planner ?",
        answer:
          "L'IA répond aux demandes des futurs mariés dès qu'elles arrivent — souvent le soir ou le dimanche —, qualifie date, lieu et budget, génère rétroplannings et tableaux de suivi prestataires, et transforme vos mariages en contenus pour Instagram. Vous gardez la créativité et le jour J.",
      },
      cost: {
        question: "Combien coûte l'IA pour un wedding planner ?",
        answer:
          "Un assistant de réponse et de qualification coûte 50 à 200 € par mois. Un dispositif sur mesure — rétroplannings automatisés, suivi prestataires, contenus — représente 5 000 à 15 000 € : à l'échelle d'une saison, l'équivalent d'un seul contrat d'organisation complète signé en plus.",
      },
      duration: {
        question: "Combien de temps pour outiller une activité de wedding planner ?",
        answer:
          "L'assistant de réponse se met en place en 1 à 2 semaines, idéalement avant la vague de demandes qui suit les fêtes de fin d'année. Les rétroplannings et le suivi prestataires automatisés demandent 4 à 8 semaines à partir de vos modèles existants.",
      },
      roi: {
        question: "Quel retour sur investissement pour un wedding planner ?",
        answer:
          "Les futurs mariés contactent trois à cinq wedding planners à la fois : la première réponse crée l'avantage. En répondant en quelques minutes et en automatisant le suivi, vous signez plus de mariages par saison et absorbez la coordination sans embaucher d'assistante.",
      },
    },
    painPoints: [
      "Les demandes arrivent le soir et le week-end, précisément quand vous êtes en mariage",
      "Chaque mariage mobilise des dizaines de prestataires à relancer un par un",
      "Le rétroplanning et les tableaux de suivi se refont à la main pour chaque couple",
      "Instagram exige une présence constante alors que la saison ne laisse aucun répit",
    ],
    useCases: [
      "chatbot_client",
      "generation_contenu",
      "crm_ia",
      "automatisation_admin",
    ],
    concreteExamples: [
      {
        title: "Réponse immédiate aux futurs mariés",
        description:
          "Chaque demande — site, Instagram, annuaires mariage — reçoit une réponse personnalisée en quelques minutes : l'assistant vérifie votre disponibilité à la date, présente vos formules et propose un appel découverte directement dans votre agenda.",
        metric: "Réponse en 3 minutes, même un samedi de mariage",
      },
      {
        title: "Rétroplanning généré depuis le brief",
        description:
          "À partir du questionnaire couple (date, lieu, nombre d'invités, envies), l'IA génère le rétroplanning sur 12 à 18 mois et le tableau de suivi prestataires, dans vos modèles. Vous arrivez au premier rendez-vous avec un document déjà au propre.",
        metric: "Un rétroplanning complet en 15 minutes",
      },
      {
        title: "Relances prestataires automatiques",
        description:
          "Devis du traiteur en attente, contrat du DJ non signé, essai coiffure à caler : l'IA suit chaque échéance et relance les prestataires en votre nom, avec un récapitulatif hebdomadaire par mariage.",
        metric: "Zéro relance oubliée sur la saison",
      },
    ],
    roiStats: [
      {
        label: "des clients attendent une réponse immédiate à leur première demande",
        value: "2 sur 3",
        source: "Salesforce",
      },
      {
        label: "des demandes de futurs mariés arrivent hors horaires de bureau",
        value: "~60 %",
      },
      {
        label: "de temps gagné sur la préparation documentaire de chaque mariage",
        value: "−50 %",
      },
    ],
    faqs: [
      {
        question: "Un métier aussi humain peut-il vraiment s'appuyer sur l'IA ?",
        answer:
          "L'IA ne touche ni à la relation avec les couples ni au jour J : elle absorbe la logistique répétitive — réponses initiales, tableaux, relances — pour que vous soyez plus disponible sur ce qui fait votre valeur. Les couples voient un service plus réactif, pas un robot.",
      },
      {
        question: "Puis-je utiliser les photos des mariés pour créer du contenu ?",
        answer:
          "Uniquement avec leur accord écrit et celui du photographe : droit à l'image et droits d'auteur s'appliquent. L'IA rédige légendes et déclinaisons à partir des photos autorisées ; la sélection et la publication restent sous votre contrôle.",
      },
      {
        question: "Que se passe-t-il quand un couple pose une question délicate ?",
        answer:
          "L'assistant traite le factuel (disponibilité, formules, déroulé) et détecte ce qui sort du cadre — budget sensible, situation familiale particulière — pour vous le transférer avec le contexte. Vous reprenez la main sur tout ce qui demande du tact.",
      },
      {
        question: "Est-ce utile hors saison des mariages ?",
        answer:
          "Oui : c'est en automne et en hiver que se signent les mariages de l'année suivante. L'assistant capte et qualifie ces demandes pendant que vous préparez la saison, et la génération de contenu maintient votre visibilité toute l'année.",
      },
    ],
  },
]
