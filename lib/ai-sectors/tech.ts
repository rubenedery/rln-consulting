import type { AiSectorProfile } from "@/types/ai-sectors"

// Profils IA — catégorie "tech"
// Règle : les exemples concrets, painPoints et FAQ sont propres à chaque métier,
// jamais réutilisés ni reformulés d'un métier à l'autre.

export const aiSectorProfilesTech: AiSectorProfile[] = [
  {
    slug: "developpeur-freelance",
    sectorSlug: "developpeur-freelance",
    name: "développeur freelance",
    namePlural: "développeurs freelances",
    icon: "Code",
    category: "tech",
    metaTitle: "IA pour Développeur Freelance : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un développeur freelance ? Prospection automatisée, devis chiffrés en minutes, veille technique : cas d'usage concrets, coûts réels et ROI mesuré.",
    headline: "L'IA au service de votre activité de développeur freelance",
    subheadline:
      "Vous facturez votre temps de code, pas vos heures de prospection ni vos devis du dimanche soir. Automatisez tout ce qui n'est pas facturable pour défendre votre TJM.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un développeur freelance ?",
        answer:
          "Au-delà des assistants de code que vous utilisez déjà, l'IA automatise le non-facturable : réponses personnalisées aux appels d'offres, chiffrage des devis à partir de votre historique de missions, relances de prospects, rédaction d'études de cas techniques. Vous vendez plus de missions sans rogner sur vos jours facturés.",
      },
      cost: {
        question: "Combien coûte l'IA pour un développeur freelance ?",
        answer:
          "Les outils SaaS (assistant de code, CRM avec IA, rédaction assistée) coûtent 20 à 100 € par mois au total. Une automatisation sur mesure de votre tunnel de prospection — qualification des demandes, devis semi-automatique, relances — représente un projet de 1 500 à 6 000 € selon vos outils existants.",
      },
      duration: {
        question: "Combien de temps pour mettre l'IA en place ?",
        answer:
          "Les outils SaaS s'adoptent en quelques jours. Une automatisation de la prospection branchée sur votre boîte mail et votre CRM demande 2 à 4 semaines. Le plus long est de formaliser votre grille de chiffrage : c'est elle qui rend les devis générés réellement fiables.",
      },
      roi: {
        question: "Quel retour sur investissement pour un développeur freelance ?",
        answer:
          "Un freelance consacre en moyenne un jour par semaine à la prospection et à l'administratif. En récupérer la moitié représente 2 jours facturables par mois : à 500 € de TJM, environ 12 000 € par an. Une automatisation à 3 000 € est rentabilisée en un trimestre.",
      },
    },
    painPoints: [
      "La prospection et les devis dévorent des journées entières non facturables",
      "Chaque réponse à un appel d'offres repart de zéro alors que 80 % du contenu se répète",
      "Justifier votre TJM demande des études de cas que vous n'avez jamais le temps de rédiger",
      "L'intercontrat vous oblige à relancer dans l'urgence un réseau laissé en jachère",
    ],
    useCases: [
      "crm_ia",
      "automatisation_admin",
      "chatbot_client",
      "analyse_predictive",
      "generation_contenu",
    ],
    concreteExamples: [
      {
        title: "Réponses aux appels d'offres semi-automatiques",
        description:
          "L'IA lit la demande entrante (Malt, LinkedIn, email), la croise avec vos missions passées et génère une proposition personnalisée : stack pertinente, références comparables, estimation de charge. Vous relisez, ajustez le TJM et envoyez en dix minutes au lieu de deux heures.",
        metric: "−80 % de temps par proposition",
      },
      {
        title: "Chiffrage de devis appuyé sur votre historique",
        description:
          "À partir de vos anciens projets (fonctionnalités livrées, jours réellement passés), l'IA propose une fourchette de charge pour chaque nouvelle demande et signale les zones de risque à cadrer. Fini les devis sous-estimés qui plombent votre rentabilité.",
        metric: "Écart devis/réalisé divisé par deux",
      },
      {
        title: "Pipeline de prospects entretenu automatiquement",
        description:
          "Chaque échange avec un prospect ou un ancien client est résumé dans votre CRM ; l'IA suggère les relances au bon moment — fin de mission chez un client, technologie qui matche votre profil. Votre intercontrat se prépare trois mois à l'avance, pas dans la panique.",
        metric: "Intercontrat réduit de plusieurs semaines",
      },
    ],
    roiStats: [
      {
        label: "des développeurs utilisent ou prévoient d'utiliser des outils d'IA dans leur travail",
        value: "76 %",
        source: "Stack Overflow Developer Survey 2024",
      },
      {
        label: "de tâches accomplies plus vite par les développeurs assistés par IA",
        value: "jusqu'à 55 %",
        source: "GitHub, étude Copilot",
      },
      {
        label: "de temps non facturable récupérable sur la prospection et les devis",
        value: "≈ 2 jours/mois",
      },
    ],
    faqs: [
      {
        question: "L'IA va-t-elle remplacer les développeurs freelances ?",
        answer:
          "Elle remplace les tâches, pas le métier : le code standard se génère, mais la compréhension du besoin client, l'architecture et la responsabilité de la mise en production restent humaines. Les freelances qui livrent plus vite grâce à l'IA gagnent en compétitivité ; ceux qui l'ignorent se battent sur les prix.",
      },
      {
        question: "Utiliser l'IA pour mes devis ne va-t-il pas standardiser mes propositions ?",
        answer:
          "C'est l'inverse si l'IA s'appuie sur vos données : vos missions passées, votre ton, vos références. La proposition générée est plus personnalisée qu'un modèle Word recyclé, car elle cite les projets réellement comparables de votre portfolio. Vous gardez la relecture finale.",
      },
      {
        question: "Puis-je automatiser ma prospection sans passer pour un robot ?",
        answer:
          "Oui, à condition d'automatiser la préparation, pas l'envoi massif. L'IA identifie les bons contacts, rédige un brouillon contextualisé (leur stack, leur actualité) et vous validez chaque message. Dix messages ciblés et relus valent mieux que cent messages génériques.",
      },
      {
        question: "Que dire à mes clients sur mon usage des assistants de code ?",
        answer:
          "Soyez transparent : précisez dans vos contrats l'usage d'outils d'IA, vérifiez les clauses de confidentialité du client et privilégiez les offres professionnelles qui n'entraînent pas leurs modèles sur votre code. La responsabilité du code livré reste la vôtre, IA ou pas.",
      },
      {
        question: "Quel est le premier investissement le plus rentable ?",
        answer:
          "L'automatisation des réponses aux demandes entrantes : c'est là que se joue votre taux de conversion. Un prospect qui reçoit une proposition solide en une heure plutôt qu'en trois jours signe beaucoup plus souvent — avant même que vos concurrents aient répondu.",
      },
    ],
  },
  {
    slug: "photographe",
    sectorSlug: "photographe",
    name: "photographe",
    namePlural: "photographes",
    icon: "Camera",
    category: "tech",
    metaTitle: "IA pour Photographe : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un photographe ? Tri automatique de milliers de photos, retouche par lot, galeries livrées plus vite : cas d'usage concrets, coûts et ROI mesuré.",
    headline: "L'IA au service de votre activité de photographe",
    subheadline:
      "Un mariage, c'est une journée de prise de vue et une semaine derrière l'écran. Confiez le tri et la retouche répétitive à l'IA, gardez la direction artistique.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un photographe ?",
        answer:
          "L'IA trie automatiquement vos milliers de clichés (yeux fermés, flous, doublons écartés), applique votre style de retouche à un reportage complet, répond aux demandes de devis avec vos tarifs et automatise l'envoi des galeries clients. Le temps de post-production fond, le temps de prise de vue et de vente augmente.",
      },
      cost: {
        question: "Combien coûte l'IA pour un photographe ?",
        answer:
          "Les outils de culling et de retouche par lot coûtent 20 à 60 € par mois, souvent moins que le temps qu'ils économisent sur un seul reportage. Une automatisation complète de votre parcours client — devis, contrats, galeries, relances de vente de tirages — représente 1 500 à 5 000 € sur mesure.",
      },
      duration: {
        question: "Combien de temps pour intégrer l'IA dans mon activité photo ?",
        answer:
          "Un outil de tri s'utilise dès le premier reportage. Entraîner un profil de retouche fidèle à votre style demande quelques centaines de photos éditées, soit 2 à 3 semaines d'ajustements. Une automatisation du parcours client se met en place en 3 à 5 semaines.",
      },
      roi: {
        question: "Quel retour sur investissement pour un photographe ?",
        answer:
          "Sur un mariage de 4 000 photos, le tri passe de 6 heures à moins d'une heure et la retouche de base est divisée par trois. À raison de deux reportages par mois, vous récupérez plusieurs jours — de quoi accepter des séances supplémentaires ou livrer en trois jours quand vos concurrents annoncent six semaines.",
      },
    },
    painPoints: [
      "Le tri de 3 000 à 5 000 photos après chaque reportage engloutit vos soirées",
      "La retouche répétitive (exposition, balance des blancs, peau) laisse peu de place à la création",
      "Les délais de livraison s'allongent en haute saison et les clients s'impatientent",
      "Les demandes de devis arrivent le week-end, pendant que vous shootez",
    ],
    useCases: [
      "chatbot_client",
      "automatisation_admin",
      "generation_contenu",
      "extraction_documents",
      "crm_ia",
    ],
    concreteExamples: [
      {
        title: "Culling automatique des reportages",
        description:
          "Après un mariage, l'IA analyse les 4 000 clichés : elle écarte les yeux fermés et les images floues, regroupe les rafales quasi identiques et présélectionne les meilleurs visages et instants. Vous validez une sélection de 600 photos au lieu de tout passer en revue une à une.",
        metric: "6 heures de tri ramenées à 45 minutes",
      },
      {
        title: "Retouche par lot dans votre style",
        description:
          "Un profil IA entraîné sur vos éditions passées applique votre signature — tons, contraste, rendu de peau — à l'ensemble d'un reportage. Vous ne reprenez à la main que les images phares de l'album, pas les 600 photos de la galerie.",
        metric: "Temps de retouche divisé par 3",
      },
      {
        title: "Parcours client sans friction",
        description:
          "Demande de devis le samedi soir ? L'assistant répond avec vos formules et vos disponibilités, envoie le contrat de prestation à signer, encaisse l'acompte, puis relance automatiquement la galerie pour la vente de tirages. Vous découvrez lundi une séance déjà réservée.",
        metric: "Réponse en 2 minutes au lieu de 48 h",
      },
    ],
    roiStats: [
      {
        label: "de la semaine d'un photographe professionnel absorbée par la post-production et l'administratif",
        value: "> 40 %",
        source: "Zenfolio, State of the Photography Industry",
      },
      {
        label: "de temps de tri économisé sur un reportage avec le culling assisté par IA",
        value: "−85 %",
      },
      {
        label: "de délai de livraison en moins, un argument de vente décisif face à la concurrence",
        value: "−50 %",
      },
    ],
    faqs: [
      {
        question: "Les photos retouchées par IA restent-elles mes œuvres ?",
        answer:
          "Oui : le droit d'auteur protège vos prises de vue, et une retouche assistée par IA appliquant votre style ne change pas la titularité, pas plus qu'un preset Lightroom. La vigilance porte sur la génération pure (arrière-plans créés de toutes pièces), à distinguer contractuellement de la photographie et à signaler au client.",
      },
      {
        question: "Mes clients verront-ils la différence avec ma retouche manuelle ?",
        answer:
          "Sur la correction de base (exposition, colorimétrie, homogénéité), non : le profil est entraîné sur vos propres éditions. Votre valeur se déplace vers ce que l'IA ne fait pas — le choix des instants, la direction des modèles, les retouches créatives des images d'album.",
      },
      {
        question: "L'IA de tri peut-elle écarter une photo importante ?",
        answer:
          "Elle présélectionne, elle ne supprime rien : les images écartées restent consultables dans un dossier séparé. En pratique, on ajuste la sensibilité sur vos deux premiers reportages ; ensuite, un survol rapide des rejets suffit pour vérifier qu'aucun moment clé n'y dort.",
      },
      {
        question: "Dois-je le mentionner dans mes contrats de prestation ?",
        answer:
          "C'est recommandé : une clause précisant que le tri et la retouche s'appuient sur des outils assistés par IA, sous votre contrôle artistique, protège des malentendus. Elle rassure aussi les clients sensibles à l'authenticité, de plus en plus nombreux depuis la généralisation des images générées.",
      },
      {
        question: "Par quel outil commencer si je débute avec l'IA ?",
        answer:
          "Par le culling : c'est le gain le plus immédiat et le moins risqué artistiquement. Une fois le tri fluidifié, ajoutez la retouche par lot, puis l'automatisation du parcours client — devis, contrats et galeries — qui transforme le temps gagné en séances vendues.",
      },
    ],
  },
  {
    slug: "videaste",
    sectorSlug: "videaste",
    name: "vidéaste",
    namePlural: "vidéastes",
    icon: "Scissors",
    category: "tech",
    metaTitle: "IA pour Vidéaste : Cas d'Usage, Coûts & ROI 2026",
    metaDescription:
      "Que peut faire l'IA pour un vidéaste ? Dérushage automatique, transcription des interviews, sous-titrage multilingue : cas d'usage concrets, coûts réels et ROI mesuré.",
    headline: "L'IA au service de votre activité de vidéaste",
    subheadline:
      "Le tournage fait 20 % du projet, le dérushage et le montage 80 %. Laissez l'IA indexer vos rushes, transcrire vos interviews et sous-titrer vos livrables.",
    answerFirst: {
      what: {
        question: "Que peut faire l'IA pour un vidéaste ?",
        answer:
          "L'IA transcrit vos rushes et les rend cherchables par mot-clé, repère les meilleures prises d'une interview, génère les sous-titres en plusieurs langues et décline un format long en extraits verticaux pour les réseaux. Le dérushage, poste le plus chronophage de la production, se compte en heures au lieu de jours.",
      },
      cost: {
        question: "Combien coûte l'IA pour un vidéaste ?",
        answer:
          "Les outils de transcription, sous-titrage et montage assisté reviennent à 20 à 80 € par mois. Un flux de production sur mesure — ingestion des rushes, indexation, pré-montage des interviews, livraison client — se construit entre 2 000 et 8 000 € selon le volume et vos logiciels de montage.",
      },
      duration: {
        question: "Combien de temps pour intégrer l'IA dans ma production vidéo ?",
        answer:
          "Transcription et sous-titrage automatiques s'utilisent dès le prochain projet. Structurer un vrai pipeline — nommage, indexation des rushes, modèles de déclinaisons par format — demande 3 à 6 semaines, le temps de le caler sur deux ou trois productions réelles sans perturber vos livraisons en cours.",
      },
      roi: {
        question: "Quel retour sur investissement pour un vidéaste ?",
        answer:
          "Sur un film corporate avec 3 heures d'interviews, le dérushage passe d'une journée et demie à une demi-journée, et le sous-titrage bilingue de 4 heures à 30 minutes de relecture. Sur dix projets par an, ce sont des semaines récupérées — ou des déclinaisons réseaux vendues en supplément sans surcharge.",
      },
    },
    painPoints: [
      "Le dérushage de plusieurs heures d'interviews prend plus de temps que le tournage lui-même",
      "Retrouver « la prise où le client parle du lancement » oblige à tout revisionner",
      "Le sous-titrage manuel, désormais exigé partout, n'est presque jamais facturé à sa vraie valeur",
      "Les clients réclament des déclinaisons verticales pour les réseaux sans rallonger le budget",
    ],
    useCases: [
      "transcription_comptes_rendus",
      "generation_contenu",
      "automatisation_admin",
      "chatbot_client",
    ],
    concreteExamples: [
      {
        title: "Dérushage par transcription indexée",
        description:
          "Chaque carte mémoire déchargée est transcrite et horodatée : vous cherchez « chiffre d'affaires » ou « témoignage client » et tombez sur les prises exactes, avec repérage des hésitations et des faux départs. Le bout-à-bout d'une interview d'une heure se construit en vingt minutes.",
        metric: "Dérushage 4 fois plus rapide",
      },
      {
        title: "Sous-titrage multilingue en un passage",
        description:
          "L'IA génère les sous-titres synchronisés, les traduit en anglais ou en espagnol et les exporte aux formats attendus (SRT, incrustation stylée pour les réseaux). Vous relisez et corrigez la terminologie du client au lieu de tout saisir à la main.",
        metric: "30 minutes au lieu de 4 heures par film",
      },
      {
        title: "Déclinaisons verticales vendues en option",
        description:
          "À partir du film principal, l'IA propose des extraits courts recadrés en 9:16, sous-titrés et rythmés pour les réseaux sociaux. Ce qui était une demande gratuite de dernière minute devient une ligne de devis rentable, livrée en même temps que le master.",
        metric: "+3 à 5 livrables par projet sans tournage",
      },
    ],
    roiStats: [
      {
        label: "des professionnels de la création utilisent déjà l'IA générative dans leur flux de travail",
        value: "83 %",
        source: "Adobe, Future of Creativity",
      },
      {
        label: "du temps de post-production consacré au dérushage et à la préparation des rushes",
        value: "≈ 30 %",
      },
      {
        label: "de temps gagné sur le sous-titrage et les transcriptions d'interviews",
        value: "−85 %",
      },
    ],
    faqs: [
      {
        question: "Utiliser l'IA pose-t-il un problème de droits d'auteur sur mes films ?",
        answer:
          "Non pour les outils d'assistance (transcription, sous-titrage, montage) : la création reste la vôtre et le droit d'auteur n'est pas affecté. La prudence s'impose sur les plans générés par IA — vérifiez les licences commerciales de l'outil et mentionnez leur usage au client, surtout en publicité.",
      },
      {
        question: "Mes clients accepteront-ils des contenus produits avec l'IA ?",
        answer:
          "Ils l'exigent déjà sans le savoir : sous-titres systématiques, déclinaisons multiformats, délais courts sont devenus la norme, et seuls les outils IA les rendent tenables aux budgets actuels. Ce qui compte pour le client, c'est que le regard d'auteur — cadre, rythme, narration — reste le vôtre.",
      },
      {
        question: "La transcription automatique est-elle fiable sur du son de tournage ?",
        answer:
          "Sur une interview bien enregistrée, la fiabilité dépasse 95 % en français ; les noms propres et le jargon métier demandent une relecture. Sur du son d'ambiance dégradé, la transcription reste utile pour se repérer dans les rushes, même imparfaite — c'est un index, pas un livrable.",
      },
      {
        question: "L'IA peut-elle monter un film à ma place ?",
        answer:
          "Elle assemble un bout-à-bout à partir des meilleures prises, ce qui est précieux pour les formats standardisés (interviews, aftermovies). Mais le montage qui fait votre réputation — le rythme, les respirations, l'émotion — reste un travail d'auteur. L'IA prépare la matière, vous la sculptez.",
      },
      {
        question: "Faut-il facturer différemment les projets où l'IA m'assiste ?",
        answer:
          "Gardez une facturation à la valeur livrée, pas au temps passé : le client paie un film et ses déclinaisons, peu importe vos outils. Le temps gagné se monétise autrement — plus de projets, des options (versions multilingues, formats réseaux) autrefois refusées faute de temps.",
      },
    ],
  },
]
