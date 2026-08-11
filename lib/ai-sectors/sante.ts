import type { AiSectorProfile } from "@/types/ai-sectors"

// Profils IA — catégorie "sante"
// Règle : les exemples concrets, painPoints et FAQ sont propres à chaque métier,
// jamais réutilisés ni reformulés d'un métier à l'autre.

export const aiSectorProfilesSante: AiSectorProfile[] = [
  {
    slug: "medecin",
    relatedBlogSlugs: ["ia-cabinet-medical-rgpd", "automatiser-taches-administratives-ia"],
    sectorSlug: "medecin",
    name: "médecin",
    namePlural: "médecins",
    icon: "Stethoscope",
    category: "sante",
    metaTitle: "IA pour Médecin : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un cabinet médical ? Comptes rendus de consultation dictés, standard désengorgé, no-show anticipés : cas d'usage concrets, coûts et limites.",
    headline: "L'IA au service de votre cabinet médical",
    subheadline:
      "Comptes rendus de consultation générés automatiquement, standard désengorgé, courriers d'adressage prérédigés : l'IA vous rend du temps médical — sans jamais toucher au diagnostic.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA dans un cabinet médical ?",
        answer:
          "L'IA transcrit vos consultations et génère le compte rendu structuré, prérédige les courriers d'adressage aux confrères, décroche le téléphone quand le secrétariat est saturé et anticipe les rendez-vous à risque de désistement. Elle assiste exclusivement l'administratif et la documentation : le diagnostic et la décision thérapeutique restent entièrement au médecin.",
      },
      cost: {
        question: "Combien coûte l'IA pour un médecin ?",
        answer:
          "Un assistant de transcription médicale conforme se situe entre 80 et 250 € par mois par praticien. Un projet sur mesure — standard vocal intelligent branché sur votre agenda, automatisation des courriers dans votre logiciel métier — représente 6 000 à 25 000 € selon la taille du cabinet et les intégrations.",
      },
      duration: {
        question: "Combien de temps pour équiper un cabinet médical ?",
        answer:
          "Un outil de transcription de consultation s'adopte en 1 à 2 semaines, le temps d'ajuster vos modèles de comptes rendus. Un standard téléphonique IA relié à votre agenda demande 4 à 6 semaines, avec une phase de test sur les appels hors urgence avant généralisation.",
      },
      roi: {
        question: "Quel retour sur investissement pour un médecin ?",
        answer:
          "La transcription automatique économise 1 à 2 heures de rédaction par jour, soit deux à quatre consultations supplémentaires ou des journées qui finissent plus tôt. Ajoutez les rappels intelligents qui réduisent les rendez-vous non honorés de 25 à 40 % : l'abonnement est couvert dès les premières semaines.",
      },
    },
    painPoints: [
      "La rédaction des comptes rendus et des courriers déborde sur vos soirées",
      "Le standard téléphonique sature et fait perdre des demandes de rendez-vous",
      "Les rendez-vous non honorés désorganisent des journées déjà pleines",
      "La charge administrative (télétransmission, certificats, formulaires) grignote le temps médical",
    ],
    useCases: [
      "transcription_comptes_rendus",
      "assistant_vocal",
      "automatisation_admin",
      "analyse_predictive",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Compte rendu de consultation dicté en fin d'examen",
        description:
          "Pendant la consultation, vous restez concentré sur le patient. L'IA transcrit l'échange ou votre dictée de synthèse, structure le compte rendu selon vos modèles (motif, examen, conduite à tenir) et le verse dans le dossier patient. Vous relisez et signez.",
        metric: "1 à 2 h de rédaction économisées par jour",
      },
      {
        title: "Standard vocal pour les demandes hors urgence",
        description:
          "Un assistant vocal décroche les appels de prise de rendez-vous, renouvellements et questions pratiques, propose des créneaux dans votre agenda et transfère immédiatement tout appel évoquant une urgence vers le secrétariat ou le 15 selon votre protocole.",
        metric: "−45 % d'appels traités par le secrétariat",
      },
      {
        title: "Courriers d'adressage prérédigés",
        description:
          "À partir du dossier et de votre consigne (« adresser au cardiologue pour bilan »), l'IA prérédige le courrier de correspondance avec antécédents et traitements en cours. Vous corrigez en trente secondes au lieu de repartir d'une page blanche.",
        metric: "5 minutes gagnées par courrier",
      },
    ],
    roiStats: [
      {
        label: "du temps de travail d'un médecin généraliste absorbé par l'administratif",
        value: "~30 %",
      },
      {
        label: "du temps de documentation clinique économisable grâce à l'IA générative",
        value: "jusqu'à 40 %",
        source: "McKinsey & Company",
      },
      {
        label: "de rendez-vous non honorés en moins avec des rappels intelligents",
        value: "−25 à −40 %",
      },
    ],
    faqs: [
      {
        question: "L'IA médicale est-elle conforme au RGPD et à l'hébergement HDS ?",
        answer:
          "C'est le prérequis absolu. Toute solution manipulant des données de patients doit s'appuyer sur un hébergeur certifié HDS (Hébergeur de Données de Santé) en France, avec chiffrement, journalisation des accès et absence totale d'entraînement de modèles publics sur vos données. Nous ne déployons que des architectures respectant ce cadre et le secret médical.",
      },
      {
        question: "L'IA peut-elle poser un diagnostic à ma place ?",
        answer:
          "Non, et ce n'est pas son rôle. Les outils que nous mettons en place assistent la documentation, l'organisation et la communication du cabinet. Le diagnostic, la prescription et la décision thérapeutique relèvent exclusivement de votre jugement clinique — l'IA ne formule jamais de recommandation médicale au patient.",
      },
      {
        question: "La transcription fonctionne-t-elle avec le vocabulaire médical ?",
        answer:
          "Oui. Les modèles récents reconnaissent la terminologie médicale française (DCI, examens, abréviations courantes) avec un taux d'erreur faible, et vos propres modèles de comptes rendus servent de trame. La relecture avant signature reste systématique : vous validez toujours le document final.",
      },
      {
        question: "Est-ce compatible avec mon logiciel métier et la télétransmission ?",
        answer:
          "Les principaux logiciels de gestion de cabinet exposent des connecteurs ou permettent l'insertion directe des documents. L'IA s'intègre en amont — transcription, courriers, préparation des pièces — sans toucher à la chaîne de télétransmission SESAM-Vitale, qui reste gérée par votre logiciel agréé.",
      },
      {
        question: "Que dire à mes patients sur l'utilisation de l'IA ?",
        answer:
          "La transparence est requise : les patients sont informés qu'un outil de transcription assiste la rédaction du dossier, avec possibilité de refuser. En pratique, l'immense majorité accepte volontiers un médecin qui les regarde plutôt qu'un écran pendant la consultation.",
      },
    ],
  },
  {
    slug: "dentiste",
    relatedBlogSlugs: ["ia-cabinet-medical-rgpd"],
    sectorSlug: "dentiste",
    name: "dentiste",
    namePlural: "dentistes",
    icon: "HeartPulse",
    category: "sante",
    metaTitle: "IA pour Dentiste : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un cabinet dentaire ? Devis mutuelle accélérés, plans de traitement mieux expliqués, suivi des soins automatisé : cas d'usage, coûts et ROI.",
    headline: "L'IA au service de votre cabinet dentaire",
    subheadline:
      "Devis et ententes préalables générés sans ressaisie, plans de traitement expliqués simplement, rappels de suivi automatisés : l'IA fluidifie tout ce qui entoure le fauteuil.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA dans un cabinet dentaire ?",
        answer:
          "L'IA prépare les devis et les demandes de prise en charge mutuelle à partir du plan de traitement, rédige des explications claires pour les patients (implant, couronne, orthodontie), automatise les rappels de détartrage et de suivi post-opératoire et documente les soins réalisés. Elle assiste l'organisation du cabinet, jamais l'acte clinique.",
      },
      cost: {
        question: "Combien coûte l'IA pour un cabinet dentaire ?",
        answer:
          "Les outils SaaS (rappels intelligents, aide à la rédaction de devis, transcription) se situent entre 60 et 300 € par mois. Un projet sur mesure — génération de devis branchée sur votre logiciel, suivi automatisé des plans de traitement multi-séances — représente 5 000 à 20 000 € selon le périmètre.",
      },
      duration: {
        question: "Combien de temps pour équiper un cabinet dentaire ?",
        answer:
          "Les rappels automatisés et l'aide à la rédaction se déploient en 2 à 3 semaines. L'automatisation des devis et des ententes préalables, qui suppose une intégration avec votre logiciel de gestion, demande 6 à 8 semaines avec une phase de validation sur des dossiers réels.",
      },
      roi: {
        question: "Quel retour sur investissement pour un dentiste ?",
        answer:
          "Un devis mutuelle qui part le jour même au lieu d'attendre une semaine, c'est un taux d'acceptation des plans de traitement qui grimpe de 15 à 25 %. Sur des actes prothétiques ou implantaires, quelques plans acceptés en plus par mois couvrent largement l'investissement.",
      },
    },
    painPoints: [
      "Les devis et ententes préalables mutuelle s'accumulent et partent en retard",
      "Les plans de traitement complexes sont mal compris, donc souvent reportés",
      "Le suivi des soins en plusieurs séances repose sur la mémoire de l'assistante",
      "Les demandes d'urgence dentaire saturent le téléphone aux heures d'ouverture",
    ],
    useCases: [
      "extraction_documents",
      "automatisation_admin",
      "transcription_comptes_rendus",
      "chatbot_client",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Devis et entente préalable générés depuis le plan de traitement",
        description:
          "Une fois le plan de traitement saisi, l'IA assemble le devis conventionnel, la demande de prise en charge mutuelle et la lettre d'accompagnement, avec les codes CCAM et les montants de votre grille. L'assistante contrôle et envoie le jour même.",
        metric: "Devis envoyé en 10 minutes au lieu de 5 jours",
      },
      {
        title: "Explications de soins personnalisées pour le patient",
        description:
          "Pour chaque plan proposé (implant, inlay-core, gouttières), l'IA génère une fiche explicative dans un langage simple : déroulé des séances, suites attendues, alternatives et reste à charge. Le patient repart avec un document clair — et accepte plus souvent.",
        metric: "+20 % d'acceptation des plans de traitement",
      },
      {
        title: "Relances de suivi et de maintenance automatisées",
        description:
          "Détartrage annuel, contrôle post-implant, fin de traitement orthodontique : l'IA détecte les patients arrivés à échéance dans votre base et déclenche des rappels personnalisés par SMS, avec lien de prise de rendez-vous.",
        metric: "+30 % de rendez-vous de maintenance honorés",
      },
    ],
    roiStats: [
      {
        label: "d'acceptation en plus quand le devis est remis ou envoyé le jour même",
        value: "+15 à +25 %",
      },
      {
        label: "des dirigeants de santé attendent un gain d'efficacité opérationnelle de l'IA générative",
        value: "75 %",
        source: "Deloitte Health Care Outlook",
      },
      {
        label: "de temps administratif en moins sur la préparation des dossiers mutuelle",
        value: "−60 %",
      },
    ],
    faqs: [
      {
        question: "Les données de mes patients sont-elles protégées (RGPD, HDS) ?",
        answer:
          "Oui, à condition de choisir des outils conçus pour la santé : hébergement certifié HDS en France, chiffrement des dossiers, accès tracés et aucune réutilisation de vos données pour entraîner des modèles publics. Nous écartons d'office toute solution grand public non conforme pour traiter des données de patients.",
      },
      {
        question: "L'IA peut-elle analyser mes radiographies ?",
        answer:
          "Des dispositifs médicaux d'aide à la lecture radiographique marqués CE existent, mais ils relèvent d'un cadre réglementaire spécifique et restent une aide : l'interprétation et le diagnostic vous appartiennent. Nos accompagnements portent sur l'administratif et la relation patient, pas sur l'acte diagnostique.",
      },
      {
        question: "Est-ce compatible avec mon logiciel de gestion de cabinet ?",
        answer:
          "Les logiciels dentaires courants permettent l'export des plans de traitement et l'import de documents. Selon l'outil, l'intégration passe par un connecteur natif ou une automatisation dédiée. Nous validons la faisabilité technique sur votre configuration avant tout engagement.",
      },
      {
        question: "Mon assistante dentaire va-t-elle y arriver ?",
        answer:
          "C'est elle qui en profite le plus : moins de ressaisie de devis, moins de relances manuelles au téléphone. Les outils s'utilisent depuis une interface simple et la formation prend une demi-journée. L'assistante garde la validation finale sur chaque document qui part du cabinet.",
      },
    ],
  },
  {
    slug: "kinesitherapeute",
    relatedBlogSlugs: ["ia-cabinet-medical-rgpd"],
    sectorSlug: "kinesitherapeute",
    name: "kinésithérapeute",
    namePlural: "kinésithérapeutes",
    icon: "Dumbbell",
    category: "sante",
    metaTitle: "IA pour Kinésithérapeute : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un cabinet de kiné ? Bilans BDK rédigés en minutes, séances en série suivies automatiquement, programmes d'exercices personnalisés : le guide complet.",
    headline: "L'IA au service de votre cabinet de kinésithérapie",
    subheadline:
      "Bilans rédigés pendant que vous traitez, renouvellements suivis automatiquement, programmes d'exercices personnalisés en quelques clics : l'IA allège tout ce qui entoure vos séances.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA dans un cabinet de kinésithérapie ?",
        answer:
          "L'IA rédige vos bilans-diagnostics kinésithérapiques à partir de vos notes dictées, suit l'avancement des séances en série et alerte avant la fin des prescriptions, génère des fiches d'exercices personnalisées à remettre aux patients et optimise un planning saturé. Le choix des techniques et la conduite de la rééducation restent les vôtres.",
      },
      cost: {
        question: "Combien coûte l'IA pour un kinésithérapeute ?",
        answer:
          "Un assistant de rédaction de bilans et de fiches d'exercices se situe entre 50 et 150 € par mois. Une automatisation sur mesure du suivi des prescriptions et du planning, intégrée à votre logiciel de facturation, représente un projet de 5 000 à 12 000 € — souvent mutualisé entre praticiens d'un même cabinet.",
      },
      duration: {
        question: "Combien de temps pour équiper un cabinet de kiné ?",
        answer:
          "L'aide à la rédaction des bilans s'adopte en une semaine avec vos trames habituelles. Le suivi automatisé des séances en série et des renouvellements d'ordonnance, branché sur votre agenda et votre facturation, demande 4 à 6 semaines de mise en place.",
      },
      roi: {
        question: "Quel retour sur investissement pour un kinésithérapeute ?",
        answer:
          "Un bilan BDK rédigé en 10 minutes au lieu de 40, sur 15 à 20 bilans par mois, libère l'équivalent d'une journée de traitement. Ajoutez les séances de fin de prescription qui ne se perdent plus faute de renouvellement : le gain dépasse largement le coût d'abonnement.",
      },
    },
    painPoints: [
      "Les bilans-diagnostics kinésithérapiques s'entassent et se rédigent le soir",
      "Les séances en série se perdent quand le renouvellement d'ordonnance n'est pas anticipé",
      "Les patients abandonnent leurs exercices entre les séances",
      "Le planning en créneaux de 30 minutes ne pardonne aucune absence",
    ],
    useCases: [
      "transcription_comptes_rendus",
      "automatisation_admin",
      "analyse_predictive",
      "generation_contenu",
    ],
    concreteExamples: [
      {
        title: "Bilan BDK rédigé à partir de vos notes dictées",
        description:
          "Après la première séance, vous dictez vos observations en deux minutes. L'IA structure le bilan-diagnostic complet selon votre trame — déficiences, objectifs, protocole envisagé — prêt à archiver et à transmettre au médecin prescripteur après votre relecture.",
        metric: "30 minutes gagnées par bilan",
      },
      {
        title: "Suivi automatique des séances en série",
        description:
          "L'IA croise votre agenda et vos facturations pour suivre chaque prescription : à la 8e séance sur 10, le patient reçoit un rappel pour renouveler son ordonnance et vous êtes alerté. Fini les traitements interrompus en plein protocole.",
        metric: "−80 % de séries interrompues faute de renouvellement",
      },
      {
        title: "Programmes d'exercices à domicile personnalisés",
        description:
          "À partir de votre bibliothèque d'exercices et de la pathologie du patient, l'IA compose une fiche illustrée personnalisée (séries, répétitions, progressions) envoyée par email ou imprimée. L'adhésion aux auto-exercices s'améliore nettement.",
        metric: "+50 % d'adhésion aux exercices à domicile",
      },
    ],
    roiStats: [
      {
        label: "de temps de rédaction en moins sur les bilans et comptes rendus",
        value: "−70 %",
      },
      {
        label: "du temps de travail des professionnels de santé libérable par l'automatisation",
        value: "jusqu'à 30 %",
        source: "Gartner",
      },
      {
        label: "de séances récupérées par mois grâce au suivi des renouvellements",
        value: "+10 à +15",
      },
    ],
    faqs: [
      {
        question: "Les données de mes patients sont-elles conformes RGPD et HDS ?",
        answer:
          "Oui, si l'outil est prévu pour : les bilans et notes de séance sont des données de santé qui exigent un hébergement certifié HDS en France, un chiffrement de bout en bout et des accès journalisés. Nous configurons systématiquement ce cadre et proscrivons l'usage d'outils d'IA grand public pour vos dossiers patients.",
      },
      {
        question: "L'IA peut-elle choisir le protocole de rééducation ?",
        answer:
          "Non. Elle met en forme vos observations et vos décisions, jamais l'inverse. Le raisonnement clinique, le choix des techniques et l'adaptation du protocole séance après séance relèvent de votre expertise de praticien — l'IA n'émet aucune recommandation thérapeutique.",
      },
      {
        question: "Est-ce utile pour un cabinet avec plusieurs kinés ?",
        answer:
          "C'est même là que le retour est le meilleur : trames de bilans partagées, suivi des prescriptions centralisé pour tout le cabinet, bibliothèque d'exercices commune et planning optimisé entre praticiens. Le coût de mise en place se répartit, les gains se cumulent.",
      },
      {
        question: "Combien de temps pour rentabiliser l'investissement ?",
        answer:
          "Pour un praticien qui rédige 15 bilans par mois, le gain de temps couvre un abonnement de 100 € dès le premier mois. Pour une automatisation sur mesure autour de 8 000 €, les séances récupérées et le temps administratif économisé amortissent le projet en 8 à 12 mois.",
      },
    ],
  },
  {
    slug: "psychologue",
    sectorSlug: "psychologue",
    name: "psychologue",
    namePlural: "psychologues",
    icon: "Brain",
    category: "sante",
    metaTitle: "IA pour Psychologue : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un psychologue ? Notes de séance structurées, premier contact facilité, annulations tardives réduites : cas d'usage respectueux de la confidentialité.",
    headline: "L'IA au service de votre pratique de psychologue",
    subheadline:
      "Notes de séance structurées sans y passer vos soirées, premier contact facilité pour les patients hésitants, annulations tardives anticipées — dans le respect absolu de la confidentialité.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un psychologue ?",
        answer:
          "L'IA vous aide à structurer vos notes de séance à partir de synthèses dictées, répond sur votre site aux questions pratiques des patients hésitants (déroulement, tarifs, remboursements), gère la prise de rendez-vous et anticipe les annulations tardives. Elle n'intervient jamais dans le contenu thérapeutique ni dans la relation avec le patient.",
      },
      cost: {
        question: "Combien coûte l'IA pour un psychologue ?",
        answer:
          "Pour une pratique individuelle, un assistant de notes et un module de rendez-vous intelligent se situent entre 50 et 120 € par mois. Un dispositif sur mesure — accueil conversationnel sur votre site, gestion fine des annulations et de la liste d'attente — représente 5 000 à 10 000 €.",
      },
      duration: {
        question: "Combien de temps pour équiper une pratique de psychologue ?",
        answer:
          "Un assistant de structuration de notes s'adopte en quelques jours, le temps de définir votre trame (anamnèse, observations, axes de travail). Un accueil conversationnel sur votre site avec prise de rendez-vous se met en place en 3 à 4 semaines, textes validés par vos soins.",
      },
      roi: {
        question: "Quel retour sur investissement pour un psychologue ?",
        answer:
          "Trente minutes de rédaction économisées par jour de consultation, des créneaux annulés recasés grâce à la liste d'attente automatique et des patients hésitants qui franchissent le pas plus facilement : à 60-80 € la séance, deux créneaux sauvés par mois suffisent à rentabiliser l'outil.",
      },
    },
    painPoints: [
      "Les notes de séance se rédigent tard le soir, quand la mémoire s'estompe",
      "Les annulations tardives laissent des créneaux impossibles à recaser",
      "Les patients hésitants renoncent faute de réponse simple sur le déroulement d'une thérapie",
      "La gestion des rendez-vous empiète sur les temps de pause entre séances",
    ],
    useCases: [
      "transcription_comptes_rendus",
      "chatbot_client",
      "automatisation_admin",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Notes de séance structurées à partir d'une synthèse dictée",
        description:
          "Après chaque séance, vous dictez trois phrases de synthèse. L'IA les structure selon votre trame — thèmes abordés, éléments notables, pistes pour la séance suivante — dans un dossier chiffré. Votre mémoire clinique reste fraîche, vos soirées vous appartiennent.",
        metric: "30 minutes de rédaction économisées par jour",
      },
      {
        title: "Accueil en ligne pour les patients hésitants",
        description:
          "Sur votre site, un assistant répond avec vos mots aux questions qui retiennent les personnes de consulter : comment se passe une première séance, combien ça coûte, est-ce remboursé, quelle approche vous pratiquez. Le premier pas devient moins intimidant.",
        metric: "+35 % de premières demandes de rendez-vous",
      },
      {
        title: "Liste d'attente intelligente contre les créneaux perdus",
        description:
          "En cas d'annulation, l'IA propose automatiquement le créneau libéré aux patients en liste d'attente selon vos règles de priorité, par SMS avec confirmation en un clic. Un créneau annulé le matin est souvent recasé avant midi.",
        metric: "60 % des créneaux annulés recasés",
      },
    ],
    roiStats: [
      {
        label: "de créneaux perdus en moins grâce à la liste d'attente automatisée",
        value: "−50 %",
      },
      {
        label: "des tâches administratives des professionnels du soin sont automatisables",
        value: "~45 %",
        source: "McKinsey Global Institute",
      },
      {
        label: "de demandes de premier rendez-vous en plus avec un accueil en ligne clair",
        value: "+35 %",
      },
    ],
    faqs: [
      {
        question: "La confidentialité de mes patients est-elle garantie (RGPD, HDS) ?",
        answer:
          "C'est la condition sine qua non. Les notes de séance touchent à l'intime : elles exigent un hébergement certifié HDS en France, un chiffrement fort et l'engagement contractuel que rien ne sert à entraîner des modèles publics. Nous refusons tout montage où vos notes transiteraient par un outil d'IA grand public.",
      },
      {
        question: "L'IA peut-elle enregistrer mes séances ?",
        answer:
          "Nous le déconseillons, et ce n'est pas nécessaire : le dispositif repose sur votre synthèse dictée après la séance, jamais sur un enregistrement de l'échange thérapeutique. Le cadre de la séance et la parole du patient restent strictement entre vous et lui.",
      },
      {
        question: "L'IA peut-elle interpréter ce que disent mes patients ?",
        answer:
          "Non, et aucun outil sérieux ne devrait le proposer. L'analyse clinique, l'interprétation et la conduite de la thérapie relèvent exclusivement de votre formation et de votre jugement. L'IA se limite à la mise en forme de vos propres notes et à la logistique du cabinet.",
      },
      {
        question: "Un chatbot ne risque-t-il pas de déshumaniser le premier contact ?",
        answer:
          "Bien conçu, c'est l'inverse : il répond aux questions pratiques que les personnes n'osent pas poser par téléphone, à toute heure, sans jugement. Dès qu'une demande sort du cadre pratique — a fortiori une situation de détresse — il communique vos coordonnées directes et les numéros d'urgence appropriés.",
      },
    ],
  },
  {
    slug: "osteopathe",
    sectorSlug: "osteopathe",
    name: "ostéopathe",
    namePlural: "ostéopathes",
    icon: "HeartPulse",
    category: "sante",
    metaTitle: "IA pour Ostéopathe : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un ostéopathe ? Appels décrochés pendant vos consultations, anamnèses préparées à l'avance, patients fidélisés : cas d'usage, coûts et ROI concrets.",
    headline: "L'IA au service de votre cabinet d'ostéopathie",
    subheadline:
      "Vos mains sont prises pendant les consultations : l'IA décroche le téléphone, prépare les anamnèses, entretient le lien avec vos patients et remplit votre agenda entre deux manipulations.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un ostéopathe ?",
        answer:
          "L'IA répond au téléphone et prend les rendez-vous pendant que vous manipulez, fait remplir un questionnaire d'anamnèse en ligne avant la première consultation, envoie les conseils post-séance et les rappels de suivi saisonniers, et publie vos contenus de prévention. Le bilan ostéopathique et le traitement restent entièrement manuels — et entièrement vôtres.",
      },
      cost: {
        question: "Combien coûte l'IA pour un ostéopathe ?",
        answer:
          "Un standard vocal IA avec prise de rendez-vous coûte entre 60 et 200 € par mois. Un dispositif complet sur mesure — anamnèse en ligne, suivis post-séance automatisés, relances de fidélisation intégrées à votre agenda — représente un projet de 5 000 à 12 000 € pour un cabinet individuel.",
      },
      duration: {
        question: "Combien de temps pour équiper un cabinet d'ostéopathie ?",
        answer:
          "Le standard vocal branché sur votre agenda se déploie en 2 à 3 semaines, scénarios d'appel validés par vos soins. Le questionnaire d'anamnèse en ligne et les séquences de suivi post-séance s'ajoutent en 2 à 4 semaines supplémentaires selon vos protocoles.",
      },
      roi: {
        question: "Quel retour sur investissement pour un ostéopathe ?",
        answer:
          "Un ostéopathe manque 10 à 20 appels par semaine pendant ses consultations ; un standard IA en convertit une bonne partie en rendez-vous. À 55-70 € la consultation, trois rendez-vous récupérés par mois couvrent l'abonnement — le reste, dont la fidélisation, est du gain net.",
      },
    },
    painPoints: [
      "Les appels sonnent dans le vide pendant vos consultations — et filent chez un confrère",
      "La première consultation perd dix minutes sur l'anamnèse administrative",
      "Les patients ne reviennent qu'en cas de douleur, jamais en prévention",
      "Communiquer régulièrement sur votre pratique passe après les journées de soin",
    ],
    useCases: [
      "assistant_vocal",
      "transcription_comptes_rendus",
      "chatbot_client",
      "generation_contenu",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Standard vocal pendant vos consultations",
        description:
          "Vos mains sont occupées 45 minutes par patient : l'assistant vocal décroche à votre place, répond aux questions courantes (tarifs, motifs, déroulement d'une séance), propose vos créneaux libres et réserve directement dans votre agenda. Vous récupérez un résumé écrit de chaque appel.",
        metric: "9 appels sur 10 aboutissent au lieu de 5",
      },
      {
        title: "Anamnèse préparée avant la première consultation",
        description:
          "À la réservation, le nouveau patient reçoit un questionnaire en ligne : motif, antécédents, traitements, activité physique. L'IA en tire une fiche de synthèse que vous parcourez en une minute avant la séance — dix minutes de consultation rendues au soin.",
        metric: "10 minutes gagnées par première consultation",
      },
      {
        title: "Suivi post-séance et rappels de prévention",
        description:
          "48 heures après la séance, le patient reçoit vos conseils personnalisés (hydratation, étirements, réactions normales). Puis l'IA le recontacte au moment pertinent : reprise sportive de septembre, entretien semestriel, suivi de grossesse. Votre agenda se remplit sans prospection.",
        metric: "+25 % de patients revus dans l'année",
      },
    ],
    roiStats: [
      {
        label: "des appels reçus pendant les consultations sont perdus sans standard",
        value: "~40 %",
      },
      {
        label: "des patients choisissent un praticien joignable et réservable immédiatement",
        value: "2 sur 3",
        source: "Baromètre Doctolib de l'accès aux soins",
      },
      {
        label: "de fréquentation en plus grâce aux rappels de suivi personnalisés",
        value: "+25 %",
      },
    ],
    faqs: [
      {
        question: "Les questionnaires d'anamnèse respectent-ils le RGPD et l'hébergement HDS ?",
        answer:
          "Oui : les antécédents et motifs de consultation sont des données de santé et exigent un hébergement certifié HDS en France, le consentement explicite du patient et un accès réservé au praticien. Nous configurons ce cadre dès la conception du questionnaire — c'est non négociable.",
      },
      {
        question: "L'IA peut-elle orienter un patient vers l'ostéopathie ou le médecin ?",
        answer:
          "Elle ne fait aucun tri clinique. Face à des signaux d'alerte que vous aurez définis (traumatisme récent, fièvre, douleur thoracique), l'assistant invite systématiquement à consulter un médecin ou les urgences plutôt que de réserver. En dehors de ces garde-fous, l'évaluation de la pertinence d'une séance vous revient.",
      },
      {
        question: "L'assistant vocal ne va-t-il pas agacer mes patients ?",
        answer:
          "Les patients préfèrent un assistant qui répond et réserve en deux minutes à une messagerie qui ne rappelle jamais. La voix est naturelle, annonce qu'elle est un assistant, et toute personne qui souhaite vous parler directement laisse un message transcrit que vous retrouvez entre deux consultations.",
      },
      {
        question: "Est-ce pertinent pour un ostéopathe qui débute ?",
        answer:
          "Particulièrement : en début d'activité, chaque appel manqué est un patient qui teste un autre cabinet. Un standard IA et un site qui répond aux questions courantes coûtent moins de 150 € par mois — bien moins qu'un secrétariat téléphonique — et professionnalisent l'accueil dès le premier jour.",
      },
    ],
  },
  {
    slug: "coach-sportif",
    sectorSlug: "coach-sportif",
    name: "coach sportif",
    namePlural: "coachs sportifs",
    icon: "Dumbbell",
    category: "sante",
    metaTitle: "IA pour Coach Sportif : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un coach sportif ? Programmes personnalisés en minutes, suivi client entre les séances, prospection automatisée : cas d'usage, coûts et ROI 2026.",
    headline: "L'IA au service de votre activité de coach sportif",
    subheadline:
      "Programmes personnalisés générés en minutes, suivi des clients entre les séances, prospection qui tourne pendant vos entraînements : l'IA démultiplie votre temps de coaching.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un coach sportif ?",
        answer:
          "L'IA assemble des programmes d'entraînement personnalisés à partir de votre méthode et du profil de chaque client, automatise le suivi entre les séances (check-ins, ajustements, encouragements), gère les réservations et relance les prospects qui vous contactent sur les réseaux. Vous restez le coach ; elle industrialise tout ce qui n'est pas la séance.",
      },
      cost: {
        question: "Combien coûte l'IA pour un coach sportif ?",
        answer:
          "Les outils SaaS de programmation et de suivi client se situent entre 50 et 150 € par mois. Une plateforme sur mesure à votre marque — génération de programmes selon votre méthode, espace client, vente de programmes en ligne — représente un projet de 6 000 à 20 000 € selon l'ambition.",
      },
      duration: {
        question: "Combien de temps pour outiller une activité de coaching ?",
        answer:
          "Les automatisations de base (réservations, relances de prospects, check-ins hebdomadaires) se montent en 2 à 3 semaines. Une plateforme de coaching à votre marque avec génération de programmes et espace client demande 8 à 12 semaines de développement.",
      },
      roi: {
        question: "Quel retour sur investissement pour un coach sportif ?",
        answer:
          "Un programme personnalisé produit en 15 minutes au lieu de 2 heures, c'est la capacité de suivre 30 clients au lieu de 15 sans sacrifier la qualité. Ajoutez la vente de programmes en ligne générés selon votre méthode : le chiffre d'affaires ne dépend plus uniquement de vos heures de présence.",
      },
    },
    painPoints: [
      "Chaque programme personnalisé coûte des heures de conception non facturées",
      "Le suivi entre les séances s'improvise par messages éparpillés sur trois applications",
      "Les prospects qui écrivent en DM restent sans réponse pendant vos séances",
      "Votre revenu plafonne au nombre d'heures de coaching que vous pouvez donner",
    ],
    useCases: [
      "crm_ia",
      "generation_contenu",
      "chatbot_client",
      "automatisation_admin",
      "analyse_predictive",
    ],
    concreteExamples: [
      {
        title: "Programmes personnalisés générés selon votre méthode",
        description:
          "Vous renseignez le profil du client — objectif, niveau, matériel, contraintes physiques — et l'IA assemble un programme complet à partir de votre bibliothèque d'exercices et de vos principes de progression. Vous ajustez en quelques minutes ce qui en prenait cent vingt.",
        metric: "2 h de conception ramenées à 15 minutes",
      },
      {
        title: "Suivi automatisé entre les séances",
        description:
          "Chaque semaine, vos clients reçoivent leur check-in : séances réalisées, ressenti, poids, sommeil. L'IA compile les réponses, détecte les signaux de décrochage (séances sautées, motivation en baisse) et vous alerte pour intervenir au bon moment — avant l'abandon.",
        metric: "−40 % d'abandons en cours de programme",
      },
      {
        title: "Réponse instantanée aux prospects sur les réseaux",
        description:
          "Un prospect vous écrit sur Instagram à 21 h : l'assistant répond dans votre ton, présente vos offres, pose les questions de qualification (objectif, budget, disponibilités) et propose un appel découverte dans votre agenda. Vous ne découvrez plus des messages vieux de trois jours.",
        metric: "3 fois plus d'appels découverte réservés",
      },
    ],
    roiStats: [
      {
        label: "de clients suivis en plus à qualité de coaching égale",
        value: "×2",
      },
      {
        label: "des consommateurs attendent une réponse à leur demande en moins d'une heure",
        value: "78 %",
        source: "HubSpot Research",
      },
      {
        label: "d'abandons en moins grâce à la détection précoce du décrochage",
        value: "−40 %",
      },
    ],
    faqs: [
      {
        question: "Un programme généré par IA vaut-il un programme fait main ?",
        answer:
          "L'IA assemble, elle n'invente pas votre méthode : elle pioche dans vos exercices, vos formats de séance et vos règles de progression. Le résultat reflète votre approche, que vous validez avant envoi. La différence n'est pas la qualité, c'est le temps de production.",
      },
      {
        question: "Mes clients vont-ils sentir que le suivi est automatisé ?",
        answer:
          "Les check-ins portent votre ton et vos formulations, et surtout ils déclenchent vos interventions humaines au bon moment : c'est vous qui appelez le client qui décroche, mais vous le savez à temps. La plupart des clients se sentent mieux suivis, pas moins.",
      },
      {
        question: "L'IA peut-elle donner des conseils santé à mes clients ?",
        answer:
          "Non, et nous configurons les garde-fous en ce sens : douleur, blessure, pathologie ou question médicale déclenchent un renvoi systématique vers vous, et vers un professionnel de santé si nécessaire. L'IA s'en tient à la logistique et au suivi de programme — jamais à l'avis médical.",
      },
      {
        question: "Puis-je vendre des programmes en ligne grâce à l'IA ?",
        answer:
          "Oui, c'est le levier de revenu le plus scalable : un questionnaire de profil en ligne, un programme généré selon votre méthode, un paiement automatisé. Vous créez un produit qui se vend pendant vos séances — avec un niveau de personnalisation qu'un PDF statique n'offre pas.",
      },
    ],
  },
  {
    slug: "salon-coiffure",
    relatedBlogSlugs: ["chatbot-ia-commerce-guide"],
    sectorSlug: "salon-coiffure",
    name: "salon de coiffure",
    namePlural: "salons de coiffure",
    icon: "Scissors",
    category: "sante",
    metaTitle: "IA pour Salon de Coiffure : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un salon de coiffure ? Réservations Instagram automatisées, no-show divisés par deux, créneaux creux remplis : cas d'usage, coûts et ROI 2026.",
    headline: "L'IA au service de votre salon de coiffure",
    subheadline:
      "Les demandes Instagram deviennent des réservations, les no-show fondent, les créneaux creux se remplissent : l'IA gère le carnet de rendez-vous pendant que vos mains font le reste.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA dans un salon de coiffure ?",
        answer:
          "L'IA transforme les messages Instagram et les appels en réservations sans mobiliser personne au bac, envoie des rappels qui réduisent les no-show, lance des offres ciblées pour remplir les créneaux creux du mardi et publie vos réalisations sur les réseaux. Le salon tourne plein, l'équipe reste aux ciseaux.",
      },
      cost: {
        question: "Combien coûte l'IA pour un salon de coiffure ?",
        answer:
          "Un assistant de réservation multicanal (Instagram, site, téléphone) se situe entre 60 et 200 € par mois selon les canaux. Un dispositif sur mesure — relances anti-no-show, remplissage automatique des creux, fiches clients enrichies (couleurs, formules) — représente 5 000 à 12 000 €.",
      },
      duration: {
        question: "Combien de temps pour équiper un salon de coiffure ?",
        answer:
          "L'assistant de réservation connecté à votre agenda (Planity, Treatwell ou autre) se met en place en 2 à 3 semaines. Les scénarios anti-no-show et le remplissage des créneaux creux s'ajoutent en 2 semaines supplémentaires, réglés sur vos heures pleines et creuses réelles.",
      },
      roi: {
        question: "Quel retour sur investissement pour un salon de coiffure ?",
        answer:
          "Un no-show sur une couleur, c'est 60 à 120 € perdus et un fauteuil vide une heure et demie. Diviser les no-show par deux et recaser les annulations représente souvent 500 à 1 000 € de chiffre d'affaires mensuel récupéré — pour un abonnement dix fois moindre.",
      },
    },
    painPoints: [
      "Les demandes de rendez-vous en DM Instagram restent sans réponse pendant les coupes",
      "Les no-show laissent des fauteuils vides sur des prestations longues déjà réservées",
      "Les mardis et jeudis après-midi tournent à moitié vides",
      "Personne n'a le temps de poster les réalisations qui font pourtant venir les clientes",
    ],
    useCases: [
      "chatbot_client",
      "analyse_predictive",
      "assistant_vocal",
      "generation_contenu",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Réservations Instagram sans quitter le bac",
        description:
          "Une cliente écrit en DM « vous avez de la place samedi pour un balayage ? » : l'assistant répond en une minute, précise la durée et le prix, propose les créneaux compatibles et confirme la réservation dans votre agenda. Personne n'a lâché ses ciseaux.",
        metric: "+30 % de réservations via Instagram",
      },
      {
        title: "Scénario anti-no-show sur les prestations longues",
        description:
          "Pour une couleur ou un lissage, l'IA applique votre protocole : confirmation à la réservation, rappel à J−2 avec demande de confirmation, empreinte bancaire au-delà d'un certain montant si vous l'activez. Les créneaux libérés partent aussitôt à la liste d'attente.",
        metric: "no-show divisés par 2",
      },
      {
        title: "Remplissage intelligent des créneaux creux",
        description:
          "L'IA repère vos heures creuses récurrentes et propose automatiquement aux bonnes clientes — celles dont le rythme de visite arrive à échéance — une offre sur ces créneaux précis : soin offert le mardi, tarif étudiant le jeudi après-midi. Le planning se lisse sans brader le samedi.",
        metric: "+20 % de taux d'occupation en semaine",
      },
    ],
    roiStats: [
      {
        label: "de no-show en moins avec rappels et confirmation en un clic",
        value: "−50 %",
      },
      {
        label: "des réservations en ligne sont prises en dehors des heures d'ouverture",
        value: "~40 %",
        source: "Étude Planity",
      },
      {
        label: "de chiffre d'affaires mensuel récupéré sur les créneaux sauvés",
        value: "500-1 000 €",
      },
    ],
    faqs: [
      {
        question: "L'assistant peut-il répondre sur Instagram, le site et le téléphone à la fois ?",
        answer:
          "Oui, c'est tout l'intérêt : un même cerveau connecté à votre agenda répond en DM Instagram, sur le site et au téléphone, avec les mêmes disponibilités en temps réel. Fini les doubles réservations entre le cahier, Planity et les messages — tout converge vers un seul planning.",
      },
      {
        question: "Comment l'IA gère-t-elle les prestations aux durées différentes ?",
        answer:
          "Vous paramétrez votre carte : une coupe homme bloque 30 minutes, un balayage 2 h 30 avec temps de pause exploitables entre deux applications. L'assistant pose les bonnes questions (longueur, prestation précise) avant de proposer un créneau, comme le ferait votre réceptionniste.",
      },
      {
        question: "Puis-je garder la main sur ce que l'assistant répond ?",
        answer:
          "Entièrement : tarifs, ton, politique d'annulation, questions auxquelles il ne doit pas répondre — tout est défini avec vous. Face à une demande inhabituelle (réclamation, demande technique pointue), il prévient l'équipe au lieu d'improviser, et vous reprenez la conversation.",
      },
      {
        question: "L'empreinte bancaire ne va-t-elle pas faire fuir les clientes ?",
        answer:
          "Utilisée avec discernement — uniquement au-delà d'un montant que vous fixez, par exemple 80 € — elle est désormais bien acceptée, comme à l'hôtel ou au restaurant. Les salons qui l'activent constatent surtout que les clientes sérieuses réservent pareil, et que les no-show s'effondrent.",
      },
    ],
  },
  {
    slug: "institut-beaute",
    relatedBlogSlugs: ["chatbot-ia-commerce-guide"],
    sectorSlug: "institut-beaute",
    name: "institut de beauté",
    namePlural: "instituts de beauté",
    icon: "Flower2",
    category: "sante",
    metaTitle: "IA pour Institut de Beauté : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA dans un institut de beauté ? Conseil sur la carte des soins 24/7, cures et abonnements relancés au bon moment, panier moyen en hausse : le guide 2026.",
    headline: "L'IA au service de votre institut de beauté",
    subheadline:
      "Un conseil personnalisé sur votre carte des soins à toute heure, des cures suivies jusqu'au bout, des clientes relancées au bon moment : l'IA cultive votre clientèle entre deux cabines.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA dans un institut de beauté ?",
        answer:
          "L'IA conseille vos clientes sur la carte des soins comme le ferait votre esthéticienne — quel soin visage pour quelle peau, que choisir avant un mariage —, réserve la cabine adaptée, suit les cures en plusieurs séances, relance les abonnements qui s'essoufflent et anime vos ventes de cartes cadeaux aux temps forts de l'année.",
      },
      cost: {
        question: "Combien coûte l'IA pour un institut de beauté ?",
        answer:
          "Un assistant de conseil et de réservation se situe entre 60 et 200 € par mois. Un dispositif sur mesure — suivi des cures, marketing automatisé des cartes cadeaux et des abonnements, fiches clientes enrichies (type de peau, soins réalisés) — représente un projet de 5 000 à 15 000 €.",
      },
      duration: {
        question: "Combien de temps pour équiper un institut de beauté ?",
        answer:
          "L'assistant conseil branché sur votre carte des soins et votre agenda se déploie en 3 semaines, réponses validées par votre équipe. Le suivi des cures et les campagnes automatisées (fêtes, anniversaires, réabonnements) s'ajoutent en 3 à 4 semaines supplémentaires.",
      },
      roi: {
        question: "Quel retour sur investissement pour un institut de beauté ?",
        answer:
          "Le gain vient du panier moyen et de la récurrence : une cliente bien conseillée choisit le rituel à 95 € plutôt que le soin découverte à 45 €, et une cure suivie jusqu'au bout se renouvelle. Comptez 15 à 25 % de panier moyen en plus et des cures menées à terme deux fois plus souvent.",
      },
    },
    painPoints: [
      "Les clientes réservent le soin le moins cher faute de comprendre la carte des soins",
      "Les cures en plusieurs séances s'arrêtent à mi-parcours sans relance",
      "Les cartes cadeaux ne se vendent qu'à Noël, jamais le reste de l'année",
      "Les fiches clientes (type de peau, soins reçus, préférences) vivent dans la tête des esthéticiennes",
    ],
    useCases: [
      "chatbot_client",
      "generation_contenu",
      "crm_ia",
      "automatisation_admin",
    ],
    concreteExamples: [
      {
        title: "Conseil personnalisé sur la carte des soins",
        description:
          "À 22 h, une cliente hésite entre trois soins visage : l'assistant l'interroge sur son type de peau et l'occasion, recommande le rituel adapté en expliquant ses bénéfices, mentionne la cure avantageuse et réserve la cabine. Le conseil qui vendait en institut vend désormais aussi en ligne.",
        metric: "+20 % de panier moyen sur les réservations en ligne",
      },
      {
        title: "Suivi des cures jusqu'à la dernière séance",
        description:
          "Une cure minceur ou anti-âge de six séances n'a de résultats que menée au bout. L'IA suit l'avancement de chaque cure, relance au bon rythme (« votre 4e séance vous attend, l'idéal est de la faire sous quinzaine ») et propose le renouvellement à la dernière séance, au moment où la satisfaction est au plus haut.",
        metric: "cures menées à terme ×2",
      },
      {
        title: "Cartes cadeaux animées toute l'année",
        description:
          "Fête des mères, Saint-Valentin, anniversaires des clientes : l'IA déclenche des campagnes ciblées avec des suggestions personnalisées (« offrez-lui son rituel préféré ») et un parcours d'achat en deux clics. La carte cadeau devient une source de revenus régulière, pas un pic de décembre.",
        metric: "+40 % de ventes de cartes cadeaux hors fêtes",
      },
    ],
    roiStats: [
      {
        label: "de panier moyen en plus grâce au conseil personnalisé en ligne",
        value: "+15 à +25 %",
      },
      {
        label: "de revenus supplémentaires pour les marques leaders en personnalisation client",
        value: "+40 %",
        source: "McKinsey & Company",
      },
      {
        label: "de cures renouvelées en plus avec un suivi automatisé des séances",
        value: "+50 %",
      },
    ],
    faqs: [
      {
        question: "L'assistant peut-il vraiment conseiller comme une esthéticienne ?",
        answer:
          "Il conseille comme votre équipe lui a appris : chaque recommandation s'appuie sur votre carte des soins, vos protocoles et vos règles (quel soin pour quelle peau, quelles contre-indications). Pour une demande pointue ou une peau réactive, il propose un diagnostic en cabine plutôt que de trancher seul.",
      },
      {
        question: "Comment l'IA gère-t-elle les contre-indications de certains soins ?",
        answer:
          "Avec prudence systématique : grossesse, traitements dermatologiques, actes récents (peeling, injections) déclenchent les questions de précaution que vous aurez définies et, au moindre doute, un renvoi vers l'équipe. L'assistant ne donne jamais d'avis de nature médicale — il oriente vers les bonnes personnes.",
      },
      {
        question: "Les fiches clientes enrichies sont-elles conformes au RGPD ?",
        answer:
          "Oui, avec le bon cadre : consentement explicite des clientes, données hébergées en Europe, droit d'accès et de suppression respectés. Certaines informations (type de peau, contre-indications) touchent à la santé et exigent une protection renforcée — nous les traitons avec le même sérieux qu'un dossier de soin.",
      },
      {
        question: "Est-ce adapté à un petit institut avec deux cabines ?",
        answer:
          "Oui, c'est même là que l'effet se voit vite : dans un petit institut, personne n'est dédié à l'accueil, et chaque minute passée au téléphone est prise sur une cliente en cabine. Un assistant à moins de 150 € par mois joue le rôle de réceptionniste-conseillère que la structure ne peut pas salarier.",
      },
    ],
  },
]
