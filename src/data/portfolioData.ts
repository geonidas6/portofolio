import { Project, SkillCategory, ExperienceItem, EducationItem, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'PATRICE ATCU',
  shortName: 'Patrice Atcu',
  username: 'geonidas6',
  email: 'patriceakotse61@gmail.com',
  location: 'Lomé, Togo 🇹🇬 (Disponible en télétravail international)',
  title: {
    fr: 'Développeur Full Stack & Créateur de Solutions Web / Mobile',
    en: 'Full Stack Developer & Web / Mobile Solutions Creator',
  },
  tagline: {
    fr: 'Conception et déploiement de bout en bout de solutions web, applications mobiles (iOS / Flutter), packages backend et plateformes e-commerce.',
    en: 'End-to-end design and deployment of web solutions, mobile applications (iOS / Flutter), backend packages, and e-commerce platforms.',
  },
  yearsOfExperience: 8,
  projectsCount: '15+',
  githubRankTogo: 'Top Contributor Togo 🇹🇬',
  githubUrl: 'https://github.com/geonidas6',
  codeurUrl: 'https://www.codeur.com/-patriceakotse',
  itSefakoUrl: 'https://it-sefako.com',
  whatsappNumber: '+22890000000',
  whatsappUrl: 'https://wa.me/22890000000?text=Bonjour%20Patrice%2C%20je%20vous%20contacte%20concernant%20un%20projet%20de%20d%C3%A9veloppement.',
  availability: {
    fr: 'Disponible pour missions freelance & nouveaux projets',
    en: 'Available for freelance missions & new projects',
  },
  bio: {
    fr: `Développeur passionné et polyvalent avec une solide expérience dans la conception et le déploiement de solutions web, d'applications mobiles, de packages backend et de plateformes e-commerce.

Capable de gérer un projet de A à Z : de l'analyse des besoins client à la mise en production, en passant par le développement front-end/back-end, la création d'outils/packages open-source, l'intégration de systèmes de paiement et la publication d'applications sur les stores (App Store & Google Play).

Auteur du package Laravel open-source MoneyFusion (@geonidas6/moneyfusion-laravel) et fondateur de la vitrine technologique IT Sefako.`,
    en: `Passionate and versatile developer with extensive experience designing and deploying web solutions, mobile apps, backend packages, and e-commerce platforms.

Capable of managing projects from A to Z: from client requirements analysis to production release, encompassing front-end/back-end engineering, open-source tool/package creation, payment gateway integration, and app store deployment (App Store & Google Play).

Author of the open-source MoneyFusion Laravel package (@geonidas6/moneyfusion-laravel) and founder of the IT Sefako technology hub.`
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'moneyfusion-laravel',
    title: 'MoneyFusion Laravel Package',
    subtitle: 'Package Open-Source Laravel d\'automatisation des paiements',
    description: 'Conception et développement d\'un package Laravel sur-mesure facilitant l\'intégration et l\'automatisation des paiements via l\'API MoneyFusion pour les applications PHP/Laravel.',
    fullDescription: 'Package PHP/Laravel officiel conçu pour automatiser les checkouts, valider cryptographiquement les signatures des webhooks et traiter les encaissements mobiles et bancaires en direct.',
    category: 'package',
    tags: ['PHP', 'Laravel', 'Composer', 'MoneyFusion API', 'FinTech', 'Open Source'],
    featured: true,
    githubUrl: 'https://github.com/geonidas6/moneyfusion-laravel',
    packageUrl: 'https://packagist.org/packages/geonidas6/moneyfusion-laravel',
    role: 'Auteur & Maintainer Principal',
    year: '2024',
    stars: 32,
    highlights: [
      'Automatisation de l\'intégration de la passerelle de paiement MoneyFusion',
      'Validation sécurisée des signatures cryptographiques et gestion des webhooks',
      'Compatibilité avec Laravel 9, 10 et 11 avec suite de tests unitaires',
      'Plus de 1 200 téléchargements sur Packagist'
    ],
    architecture: [
      'Service Provider & Facade personnalisée pour Laravel',
      'Gestionnaire de requêtes HTTP avec client Guzzle optimisé',
      'Event Dispatcher pour les notifications transactionnelles temps réel'
    ],
    metrics: [
      { label: 'Téléchargements', value: '1.2k+' },
      { label: 'Licence', value: 'MIT Open-Source' },
      { label: 'Compatibilité', value: 'Laravel 9-11' }
    ],
    imagePlaceholderGradient: 'from-amber-600 via-orange-600 to-emerald-700',
    iconName: 'Package'
  },
  {
    id: 'miva',
    title: 'Miva — Plateforme Marketing Interactive & Chasses au Trésor',
    subtitle: 'Publicité géolocalisée et chasses au trésor interactives',
    description: 'Développement d\'une solution innovante de publicité géolocalisée et ludique permettant aux entreprises d\'attirer des clients en boutique via des chasses au trésor, des indices interactifs, du scan de QR Codes et de la distribution de récompenses.',
    fullDescription: 'Plateforme marketing interactive combinant géolocalisation, gamification, génération et scan de QR Codes sécurisés et attribution de récompenses commerciales pour dynamiser le trafic en point de vente.',
    category: 'saas',
    tags: ['Laravel', 'Vue.js/React', 'Géolocalisation', 'QR Code', 'Gamification', 'Marketing'],
    featured: true,
    liveUrl: 'https://miva.it-sefako.com',
    role: 'Lead Developer & Architecte',
    year: '2024',
    highlights: [
      'Chasses au trésor géolocalisées avec indices progressifs pour les consommateurs',
      'Moteur de scan et validation de QR Codes instantané pour attribution de lots',
      'Dashboard commerçants pour créer des campagnes promotionnelles ciblées',
      'Intégration d\'un système de récompenses interactif stimulant les visites en magasin'
    ],
    architecture: [
      'Backend API Laravel haute performance avec index géospatiaux',
      'Interface utilisateur fluide et responsive avec interactions temps réel',
      'Système d\'authentification et sécurisation anti-fraude des QR Codes'
    ],
    metrics: [
      { label: 'Concept', value: 'Gamification Retail' },
      { label: 'Technologie', value: 'Géoloc & QR' },
      { label: 'Statut', value: 'En Ligne' }
    ],
    imagePlaceholderGradient: 'from-emerald-700 via-teal-600 to-amber-600',
    iconName: 'Sparkles'
  },
  {
    id: 'petitnid-app',
    title: 'PetitNid App — Gestion de Garde Alternée (App Store & Google Play)',
    subtitle: 'Application mobile iOS & Android publiée sur l\'App Store et Google Play Store',
    description: 'Conception et développement complet d\'une application mobile publiée sur l\'App Store et Google Play destinée aux parents séparés/divorcés. Intégration d\'outils d\'organisation, de communication et de modules d\'achats in-app / paiements sécurisés.',
    fullDescription: 'Application mobile développée avec soin pour simplifier le quotidien des familles en garde alternée : plannings partagés, journal de dépenses, messagerie interne et abonnements premium via In-App Purchases. Disponible officiellement sur iOS (Apple App Store) et Android (Google Play Store).',
    category: 'mobile',
    tags: ['iOS', 'Android', 'Swift', 'App Store', 'Google Play', 'In-App Purchases', 'Mobile'],
    featured: true,
    liveUrl: 'https://apps.apple.com/us/app/petitnid-app/id6762980886',
    appStoreUrl: 'https://apps.apple.com/us/app/petitnid-app/id6762980886',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.petitnid.petitnid',
    role: 'Concepteur & Développeur Mobile (iOS & Android)',
    year: '2023 - 2024',
    highlights: [
      'Publication officielle et validation sur l\'Apple App Store et Google Play Store',
      'Outils de synchronisation de calendrier et plannings de garde alternée',
      'Gestion financière partagée des dépenses de santé, scolarité et loisirs des enfants',
      'Intégration des achats in-app (In-App Purchases / StoreKit / Google Play Billing) et abonnements sécurisés'
    ],
    architecture: [
      'Architecture mobile performante et réactive avec gestion fine des états',
      'Intégration StoreKit et Google Play Billing pour abonnements et paiements in-app sécurisés',
      'Chiffrement de bout en bout des communications familiales et des données personnelles'
    ],
    metrics: [
      { label: 'Stores', value: 'App Store & Play' },
      { label: 'Plateformes', value: 'iOS & Android' },
      { label: 'Paiements', value: 'In-App Purchases' }
    ],
    imagePlaceholderGradient: 'from-blue-600 via-indigo-600 to-purple-700',
    iconName: 'Smartphone'
  },
  {
    id: 'zenads',
    title: 'ZenAds — Plateforme de Publication d\'Annonces',
    subtitle: 'SaaS complet de publication et de modération d\'annonces publicitaires',
    description: 'Conception et développement de A à Z avec Laravel d\'un SaaS/application web complet de publication et de gestion d\'annonces publicitaires.',
    fullDescription: 'Plateforme SaaS web complète développée pour la diffusion, le filtrage multicritères, le paiement et la mise en avant payante d\'annonces publicitaires avec espace annonceurs et console d\'administration.',
    category: 'saas',
    tags: ['Laravel', 'PHP', 'MySQL', 'SaaS', 'Paiements', 'REST API', 'Tailwind CSS'],
    featured: true,
    liveUrl: 'https://zenads.fr',
    role: 'Développeur Full-Stack Principal',
    year: '2023 - 2024',
    highlights: [
      'Développement de bout en bout (A à Z) avec le framework Laravel',
      'Moteur de recherche multicritères et filtrage géographique rapide',
      'Tunnel de paiement sécurisé pour options de sponsoring et mise en avant',
      'Console d\'administration complète avec modération automatique et manuelle'
    ],
    architecture: [
      'Architecture MVC Laravel avec modularité de code',
      'Base relationnelle MySQL optimisée avec indexation des annonces',
      'Intégration des webhooks de facturation et notification par email transactionnel'
    ],
    metrics: [
      { label: 'Développement', value: 'De A à Z' },
      { label: 'Domaine', value: 'zenads.fr' },
      { label: 'Type', value: 'SaaS Annonces' }
    ],
    imagePlaceholderGradient: 'from-emerald-600 via-teal-700 to-slate-900',
    iconName: 'Layers'
  },
  {
    id: 'iramis',
    title: 'Iramis & Delivery Iramis — Gestion de Livraison',
    subtitle: 'Plateforme & Système de Gestion de Pipeline Logistique',
    description: 'Développement d\'un outil complet de gestion du pipeline de livraison pour une société logistique (suivi des colis, affectations, états des livraisons).',
    fullDescription: 'Suite logicielle logistique composée d\'un portail central (iramis.com) et d\'un outil opérationnel de distribution (delivery.iramis.com) pour piloter les tournées, assigner les coursiers et notifier les clients en temps réel.',
    category: 'web',
    tags: ['Laravel', 'Vue/React', 'Logistique', 'Tracking', 'Gestion de Flotte', 'REST API'],
    featured: true,
    liveUrl: 'https://iramis.com',
    role: 'Développeur Full-Stack & Intégrateur Logistique',
    year: '2023',
    highlights: [
      'Suivi en direct du statut des colis à chaque étape du pipeline',
      'Attribution intelligente des courses aux livreurs selon leurs zones',
      'Portail opérationnel dédié (delivery.iramis.com) avec interface mobile pour les équipes terrain',
      'Historique complet des expéditions et génération de bordereaux de livraison'
    ],
    architecture: [
      'Backend centralisé avec API REST sous Laravel',
      'Gestion d\'états de commandes temps réel et synchronisation',
      'Interfaces légères adaptées aux connexions mobiles sur le terrain'
    ],
    metrics: [
      { label: 'Plateformes', value: 'iramis.com & delivery' },
      { label: 'Secteur', value: 'Logistique & Transport' },
      { label: 'Suivi', value: 'Temps Réel' }
    ],
    imagePlaceholderGradient: 'from-amber-600 via-orange-600 to-slate-900',
    iconName: 'Server'
  },
  {
    id: 'it-sefako',
    title: 'IT Sefako — Site d\'Entreprise & Portfolio',
    subtitle: 'Vitrine numérique des services, projets et compétences informatiques',
    description: 'Conception et vitrine numérique présentant l\'ensemble de mes services, projets et compétences informatiques.',
    fullDescription: 'Portail vitrine moderne présentant l\'offre de services d\'ingénierie logicielle, les études de cas et les expertises technologiques développées pour les entreprises et partenaires.',
    category: 'web',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Portfolio', 'Agence Numérique', 'UI/UX'],
    featured: false,
    liveUrl: 'https://it-sefako.com',
    role: 'Fondateur & Lead Développeur',
    year: '2023 - 2024',
    highlights: [
      'Design épuré et moderne valorisant l\'expertise technologique',
      'Catalogue interactif des prestations web, mobiles et e-commerce',
      'Formulaires de contact intelligents et qualification des demandes de devis',
      'Optimisation SEO et performance Web Vitals irréprochable'
    ],
    architecture: [
      'Frontend moderne et réactif avec typage strict',
      'Optimisation des assets et score Lighthouse 95+',
      'Déploiement continu et hébergement sécurisé'
    ],
    metrics: [
      { label: 'Site officiel', value: 'it-sefako.com' },
      { label: 'Design', value: 'Sur-mesure' },
      { label: 'Vitesse', value: 'Ultra-rapide' }
    ],
    imagePlaceholderGradient: 'from-emerald-800 via-slate-900 to-amber-700',
    iconName: 'Globe'
  },
  {
    id: 'jmo-transport',
    title: 'JMO Transport — Logistique & Fret',
    subtitle: 'Création sur-mesure de A à Z d\'un site WordPress complet',
    description: 'Création sur-mesure de A à Z d\'un site WordPress complet pour une entreprise de transport et logistique.',
    fullDescription: 'Site d\'entreprise complet conçu sur-mesure avec formulaire d\'estimation de fret, présentation de la flotte de véhicules, garanties de livraison et conformité aux standards internationaux.',
    category: 'ecommerce',
    tags: ['WordPress', 'PHP', 'Transport', 'Logistique', 'Responsive Web Design', 'SEO'],
    featured: false,
    liveUrl: 'https://jmo-transport.com',
    role: 'Développeur Web & Concepteur',
    year: '2023',
    highlights: [
      'Développement sur-mesure du thème sans surcharge inutile',
      'Formulaire de demande de cotation fret et transport express',
      'Architecture optimisée pour le référencement naturel (SEO local et international)',
      'Interface responsive fluide sur smartphones et ordinateurs'
    ],
    architecture: [
      'Structure WordPress personnalisée avec Custom Post Types',
      'Optimisation des temps de chargement et mise en cache serveur',
      'Sécurisation des formulaires contre le spam et protection SSL'
    ],
    metrics: [
      { label: 'Domaine', value: 'jmo-transport.com' },
      { label: 'CMS', value: 'WordPress Sur-Mesure' },
      { label: 'Secteur', value: 'Transport' }
    ],
    imagePlaceholderGradient: 'from-blue-700 via-slate-800 to-emerald-700',
    iconName: 'Globe'
  },
  {
    id: 'transinbel',
    title: 'Transinbel — Transport & Livraison Express',
    subtitle: 'Site vitrine entreprise de transport et logistique européenne',
    description: 'Création et mise en place du site vitrine d\'entreprise de transport, logistique et livraison express.',
    fullDescription: 'Plateforme institutionnelle pour une entreprise européenne de transport et messagerie express, valorisant le réseau de distribution et facilitant la prise de contact pour affrètement.',
    category: 'web',
    tags: ['WordPress', 'PHP', 'Logistique Européenne', 'Livraison Express', 'UI/UX'],
    featured: false,
    liveUrl: 'https://transinbel.eu',
    role: 'Développeur Web',
    year: '2023',
    highlights: [
      'Création et mise en ligne complète du site vitrine',
      'Présentation claire des services de fret routier et logistique contractuelle',
      'Formulaires de contact et d\'appel d\'offres dédiés aux professionnels',
      'Conception ergonomique soignée adaptée aux clients B2B'
    ],
    architecture: [
      'Thème léger et optimisé pour une navigation rapide',
      'Intégration d\'outils analytiques et respect du RGPD',
      'Hébergement haute disponibilité en Europe'
    ],
    metrics: [
      { label: 'Domaine', value: 'transinbel.eu' },
      { label: 'Portée', value: 'Union Européenne' },
      { label: 'Activité', value: 'Fret Express' }
    ],
    imagePlaceholderGradient: 'from-slate-800 via-emerald-800 to-amber-600',
    iconName: 'Globe'
  },
  {
    id: 'aux-bonnes-senteurs',
    title: 'Aux Bonnes Senteurs — Boutique E-Commerce Suisse',
    subtitle: 'Refonte globale et modernisation ergonomique boutique WordPress',
    description: 'Refonte globale et modernisation ergonomique d\'une boutique e-commerce WordPress.',
    fullDescription: 'Projet de refonte d\'envergure pour une boutique en ligne suisse : modernisation du design, simplification du tunnel de commande WooCommerce, paiement sécurisé multi-devises (CHF/EUR) et optimisation de la conversion.',
    category: 'ecommerce',
    tags: ['WordPress', 'WooCommerce', 'E-Commerce', 'Paiements Sécurisés', 'Refonte UI/UX', 'Suisse'],
    featured: true,
    liveUrl: 'https://aux-bonnes-senteurs.ch',
    role: 'Lead Développeur E-Commerce & Refonte',
    year: '2023',
    highlights: [
      'Refonte ergonomique intégrale de la boutique pour rehausser le panier moyen',
      'Simplification drastique du processus de paiement et réduction des abandons de panier',
      'Configuration des moyens de paiement sécurisés et gestion des taxes suisses',
      'Catalogue de produits avec filtres dynamiques et navigation intuitive'
    ],
    architecture: [
      'WooCommerce avec thème customisé pour performances élevées',
      'Optimisation des requêtes de catalogue et compression d\'images WebP',
      'Sécurisation des transactions clients et conformité bancaire'
    ],
    metrics: [
      { label: 'Marché', value: 'Suisse (.ch)' },
      { label: 'CMS', value: 'WooCommerce' },
      { label: 'Action', value: 'Refonte Globale' }
    ],
    imagePlaceholderGradient: 'from-amber-600 via-rose-700 to-emerald-800',
    iconName: 'ShoppingBag'
  },
  {
    id: 'editions-tanibis',
    title: 'Éditions Tanibis — Librairie & Édition Indépendante',
    subtitle: 'Refonte, optimisation UX et améliorations fonctionnelles continues',
    description: 'Refonte, optimisation de l\'expérience utilisateur et améliorations fonctionnelles continues.',
    fullDescription: 'Accompagnement technique continu pour une maison d\'édition renommée : refonte du catalogue d\'ouvrages, amélioration de la lisibilité des fiches livres, optimisation du panier et intégration d\'options d\'expédition soignée.',
    category: 'web',
    tags: ['Web Design', 'E-Commerce', 'Édition & Culture', 'Optimisation UX', 'Performance'],
    featured: false,
    liveUrl: 'https://tanibis.net',
    role: 'Consultant & Développeur Web',
    year: '2022 - 2024',
    highlights: [
      'Refonte esthétique respectant la charte graphique artistique de l\'éditeur',
      'Amélioration de l\'expérience utilisateur sur les fiches de livres et extraits',
      'Résolution des lenteurs de chargement et maintenance évolutive continue',
      'Optimisation du parcours d\'achat pour les lecteurs et libraires'
    ],
    architecture: [
      'Architecture web sur-mesure avec gestion d\'inventaire littéraire',
      'Cache avancé pour supporter les pics de trafic lors des sorties littéraires',
      'Interface responsive épurée mettant en avant les visuels grand format'
    ],
    metrics: [
      { label: 'Site', value: 'tanibis.net' },
      { label: 'Mission', value: 'UX & Évolution' },
      { label: 'Focus', value: 'Culture & Édition' }
    ],
    imagePlaceholderGradient: 'from-purple-800 via-indigo-900 to-slate-900',
    iconName: 'Layers'
  },
  {
    id: 'alepia',
    title: 'Alepia — Boutique PrestaShop à Fort Trafic',
    subtitle: 'Diagnostic technique, résolution de bugs & optimisation haute performance',
    description: 'Intervention technique sur boutique PrestaShop à fort trafic : diagnostic, résolution de bugs et optimisation.',
    fullDescription: 'Intervention experte sur un site e-commerce PrestaShop à volumétrie de commandes élevée : identification des goulots d\'étranglement en base de données, élimination des erreurs PHP/JavaScript et fiabilisation des passerelles de paiement.',
    category: 'ecommerce',
    tags: ['PrestaShop', 'PHP', 'High Traffic', 'Bug Fixing', 'Optimisation Base de Données', 'Performance'],
    featured: true,
    liveUrl: 'https://alepia.com',
    role: 'Expert PrestaShop & Dépanneur Technique',
    year: '2023',
    highlights: [
      'Diagnostic approfondi des ralentissements et des anomalies d\'encaissement',
      'Résolution de conflits complexes entre modules et override du cœur PrestaShop',
      'Optimisation des requêtes MySQL critiques pour réduire le Time To First Byte (TTFB)',
      'Rétablissement de la fiabilité du tunnel d\'achat lors des périodes de soldes'
    ],
    architecture: [
      'Audit du code PHP PrestaShop et suppression des requêtes redondantes',
      'Mise en place de logs d\'erreurs précis pour monitoring préventif',
      'Amélioration de la stabilité du serveur sous forte charge d\'utilisateurs simultanés'
    ],
    metrics: [
      { label: 'Site', value: 'alepia.com' },
      { label: 'Trafic', value: 'Fort Trafic' },
      { label: 'Plateforme', value: 'PrestaShop' }
    ],
    imagePlaceholderGradient: 'from-emerald-700 via-teal-800 to-amber-700',
    iconName: 'ShoppingBag'
  },
  {
    id: 'bad-sexy-girl',
    title: 'Bad Sexy Girl — E-Commerce Mode & Prêt-à-Porter',
    subtitle: 'Diagnostic technique, correction de bugs & saisie catalogue',
    description: 'Diagnostic technique, correction de bugs, saisie de produits et optimisations e-commerce.',
    fullDescription: 'Prise en charge technique et opérationnelle d\'une boutique e-commerce de mode : fiabilisation des fonctionnalités d\'affichage, correction des dysfonctionnements du panier, intégration des variations de tailles/coloris et saisie de produits.',
    category: 'ecommerce',
    tags: ['E-Commerce', 'Boutique Mode', 'Maintenance Technique', 'Saisie Catalogue', 'Optimisation'],
    featured: false,
    liveUrl: 'https://badsexygirl.fr',
    role: 'Technicien & Développeur E-Commerce',
    year: '2023',
    highlights: [
      'Correction des bugs graphiques et fonctionnels bloquant la commande',
      'Intégration et structuration efficace des variations de stock',
      'Optimisation des pages produits pour améliorer le taux de conversion',
      'Assistance technique continue et mise à jour du catalogue'
    ],
    architecture: [
      'Gestion structurée des flux de données produits',
      'Correction des scripts JavaScript conflictuels sur les options de déclinaisons',
      'Assurance qualité sur mobile et desktop'
    ],
    metrics: [
      { label: 'Site', value: 'badsexygirl.fr' },
      { label: 'Secteur', value: 'Mode & Retail' },
      { label: 'Intervention', value: 'Maintenance & Optimisation' }
    ],
    imagePlaceholderGradient: 'from-rose-700 via-pink-800 to-slate-900',
    iconName: 'ShoppingBag'
  },
  {
    id: 'transillan',
    title: 'Transillan — Plateforme de Services & Transport',
    subtitle: 'Site vitrine d\'entreprise et plateforme de services',
    description: 'Site vitrine d\'entreprise et plateforme de services.',
    fullDescription: 'Conception d\'un site d\'entreprise ergonomique valorisant les prestations de services spécialisées et permettant l\'acquisition de nouveaux clients via un formulaire interactif de demande de devis.',
    category: 'web',
    tags: ['Site Vitrine', 'Services Professionnels', 'PHP', 'WordPress', 'Formulaires Intelligents'],
    featured: false,
    liveUrl: 'https://transillan.com',
    role: 'Développeur Web',
    year: '2022',
    highlights: [
      'Présentation claire des gammes de services et références clients',
      'Formulaire interactif de contact et qualification des prospects',
      'Design responsive optimisé pour tous les écrans',
      'Hébergement et configuration des certificats de sécurité'
    ],
    architecture: [
      'Architecture légère et rapide à charger',
      'Normes de sécurité web et protection des données',
      'Référencement naturel optimisé'
    ],
    metrics: [
      { label: 'Site', value: 'transillan.com' },
      { label: 'Type', value: 'Site Vitrine' },
      { label: 'Objectif', value: 'Génération de Leads' }
    ],
    imagePlaceholderGradient: 'from-slate-800 via-blue-900 to-emerald-800',
    iconName: 'Globe'
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: { 
      fr: 'Front-End & Frameworks JS', 
      en: 'Front-End & JS Frameworks' 
    },
    icon: 'Layout',
    skills: [
      {
        name: 'React & Next.js',
        level: 95,
        experience: 'Production',
        description: {
          fr: 'Applications modernes SPA et SSR, Server Components, gestion d\'état réactive et optimisation des performances Web Vitals.',
          en: 'Modern SPA and SSR apps, Server Components, reactive state management, and Core Web Vitals optimization.'
        },
        popularUse: 'React, Next.js, Hooks, SSR/SSG',
        highlight: true
      },
      {
        name: 'Angular',
        level: 85,
        experience: 'Production',
        description: {
          fr: 'Développement d\'applications d\'entreprise modulaires avec RxJS, TypeScript et injection de dépendances.',
          en: 'Building modular enterprise web apps with RxJS, TypeScript, and dependency injection.'
        },
        popularUse: 'Angular, RxJS, Enterprise SPAs'
      },
      {
        name: 'JavaScript (ES6+) & TypeScript',
        level: 95,
        experience: 'Quotidien',
        description: {
          fr: 'Maîtrise approfondie des standards ECMAScript modernes, typage strict, programmation asynchrone et design patterns.',
          en: 'In-depth mastery of modern ECMAScript standards, strict typing, async patterns, and design patterns.'
        },
        popularUse: 'ES6+, Async/Await, Strict TypeScript',
        highlight: true
      },
      {
        name: 'HTML5, CSS3, Tailwind CSS & Bootstrap',
        level: 98,
        experience: 'Quotidien',
        description: {
          fr: 'Intégration responsive millimétrée, design systems, accessibilité WCAG, Flexbox/Grid et animations fluides.',
          en: 'Pixel-perfect responsive integration, design systems, WCAG accessibility, Flexbox/Grid, and smooth animations.'
        },
        popularUse: 'Tailwind CSS, Bootstrap, CSS Grid, Responsive Design'
      },
      {
        name: 'jQuery & Bibliothèques JS',
        level: 90,
        experience: 'Production',
        description: {
          fr: 'Maintenance, modernisation et intégration de plugins dynamiques sur des bases de code historiques.',
          en: 'Maintenance, modernization, and dynamic plugin integration on existing codebases.'
        },
        popularUse: 'DOM manipulation, legacy migrations'
      }
    ]
  },
  {
    id: 'backend',
    title: { 
      fr: 'Back-End & Frameworks PHP / Python / Java', 
      en: 'Back-End & PHP / Python / Java Frameworks' 
    },
    icon: 'Server',
    skills: [
      {
        name: 'Laravel (PHP)',
        level: 98,
        experience: 'Expertise / Packages',
        description: {
          fr: 'Développement de microservices, architectures MVC/Clean, créateur de packages réutilisables, ORM Eloquent, Queues et événements.',
          en: 'Building microservices, MVC/Clean architectures, reusable package creator, Eloquent ORM, queues and events.'
        },
        popularUse: 'Laravel 10/11, Eloquent, Package Author',
        highlight: true
      },
      {
        name: 'Symfony (PHP)',
        level: 90,
        experience: 'Production',
        description: {
          fr: 'Architecture robuste d\'entreprise avec Doctrine ORM, composants réutilisables, injection de dépendances et sécurité avancée.',
          en: 'Robust enterprise architecture with Doctrine ORM, reusable components, DI, and advanced security.'
        },
        popularUse: 'Symfony 6+, Doctrine, Twig'
      },
      {
        name: 'FastAPI & Django (Python)',
        level: 90,
        experience: 'Production',
        description: {
          fr: 'Conception d\'APIs asynchrones haute vélocité avec FastAPI, traitement de données, Pydantic et applications Django complètes.',
          en: 'High-speed async APIs with FastAPI, data processing, Pydantic, and comprehensive Django applications.'
        },
        popularUse: 'FastAPI, Django, Asyncio, REST APIs',
        highlight: true
      },
      {
        name: 'Spring Boot (Java)',
        level: 80,
        experience: 'Production',
        description: {
          fr: 'Développement de services backend Java robustes avec Spring Boot, JPA/Hibernate et architecture en couches.',
          en: 'Building robust Java backend services with Spring Boot, JPA/Hibernate, and layered architecture.'
        },
        popularUse: 'Spring Boot, Java, JPA, REST'
      },
      {
        name: 'Node.js & APIs REST',
        level: 88,
        experience: 'Production',
        description: {
          fr: 'Création d\'APIs RESTful sécurisées, gestion des webhooks HMAC, rate limiting, JWT et microservices événementiels.',
          en: 'Building secure RESTful APIs, HMAC webhook handlers, rate limiting, JWT, and event-driven microservices.'
        },
        popularUse: 'Node.js, Express, RESTful APIs, Webhooks',
        highlight: true
      }
    ]
  },
  {
    id: 'mobile',
    title: { 
      fr: 'Développement Mobile & Cross-Platform', 
      en: 'Mobile & Cross-Platform Engineering' 
    },
    icon: 'Smartphone',
    skills: [
      {
        name: 'iOS & Android (App Store & Google Play)',
        level: 94,
        experience: 'Stores Officiels',
        description: {
          fr: 'Conception et publication d\'applications mobiles sur l\'App Store Apple et Google Play Store (ex: PetitNid), intégration d\'achats in-app (StoreKit / Google Billing) et notifications push.',
          en: 'Building and publishing mobile apps on the Apple App Store and Google Play Store (e.g. PetitNid), In-App Purchases (StoreKit / Google Billing), and push notifications.'
        },
        popularUse: 'Swift, Flutter, StoreKit, Google Play Billing, App Store & Google Play Publishing',
        highlight: true
      },
      {
        name: 'Flutter (Dart)',
        level: 90,
        experience: 'Production',
        description: {
          fr: 'Applications cross-platform iOS et Android fluides (60fps), architecture BLoC/Provider, persistance locale et intégrations natives.',
          en: 'Smooth cross-platform iOS & Android apps (60fps), BLoC/Provider architecture, local storage, and native integrations.'
        },
        popularUse: 'Flutter, Dart, Clean Architecture, Cross-platform',
        highlight: true
      },
      {
        name: 'Ionic Framework',
        level: 85,
        experience: 'Production',
        description: {
          fr: 'Développement d\'applications hybrides performantes avec technologies web et accès aux fonctionnalités matérielles de l\'appareil.',
          en: 'Building high-performance hybrid mobile apps using web technologies and device hardware access.'
        },
        popularUse: 'Ionic, Capacitor, Cordova, Web Mobile'
      }
    ]
  },
  {
    id: 'ecommerce',
    title: { 
      fr: 'E-Commerce & CMS', 
      en: 'E-Commerce & CMS Solutions' 
    },
    icon: 'ShoppingBag',
    skills: [
      {
        name: 'WordPress / WooCommerce',
        level: 96,
        experience: 'Production Avancée',
        description: {
          fr: 'Création de sites de A à Z, refonte ergonomique, thèmes sur-mesure, optimisation du tunnel d\'achat et intégrations de paiements.',
          en: 'A-to-Z custom site creation, UI redesign, bespoke themes, checkout optimization, and payment gateways.'
        },
        popularUse: 'WooCommerce, Custom Themes, JMO Transport, Aux Bonnes Senteurs',
        highlight: true
      },
      {
        name: 'PrestaShop',
        level: 94,
        experience: 'Boutiques Fort Trafic',
        description: {
          fr: 'Interventions techniques sur boutiques à fort trafic, diagnostic, résolution de bugs complexes, optimisation des requêtes et modules sur mesure.',
          en: 'Technical interventions on high-traffic stores, diagnostics, complex bug fixes, query optimization, and custom modules.'
        },
        popularUse: 'PrestaShop 1.7/8, Alepia, Bug Fixing, High Traffic',
        highlight: true
      }
    ]
  },
  {
    id: 'devops',
    title: { 
      fr: 'DevOps & Outils', 
      en: 'DevOps & Tools' 
    },
    icon: 'Cloud',
    skills: [
      {
        name: 'Création de Packages Laravel & Open-Source',
        level: 98,
        experience: 'Auteur Package',
        description: {
          fr: 'Conception, packaging et maintenance de bibliothèques Composer réutilisables (auteur de geonidas6/moneyfusion-laravel avec 1.2k+ downloads).',
          en: 'Design, packaging, and maintenance of reusable Composer packages (author of geonidas6/moneyfusion-laravel with 1.2k+ downloads).'
        },
        popularUse: 'Composer, Packagist, Semantic Versioning, Open Source',
        highlight: true
      },
      {
        name: 'Git & GitHub Workflow',
        level: 96,
        experience: 'Top Contributor Togo',
        description: {
          fr: 'Maîtrise de GitFlow, gestion de branches, revues de code rigoureuses, releases automatisées et contributions open-source.',
          en: 'Mastery of GitFlow, branching strategies, rigorous code reviews, automated releases, and open-source contributions.'
        },
        popularUse: 'Git, GitHub Actions, CI/CD, Releases',
        highlight: true
      },
      {
        name: 'Gestion de Serveurs Web, Hébergement & CI/CD',
        level: 90,
        experience: 'Production',
        description: {
          fr: 'Configuration de serveurs Linux/Nginx/Apache, certificats SSL, déploiement continu, monitoring de performance et gestion DNS.',
          en: 'Linux/Nginx/Apache server configuration, SSL certificates, continuous deployment, performance monitoring, and DNS.'
        },
        popularUse: 'Linux, Nginx, Apache, VPS, SSL Let\'s Encrypt, Deployments'
      }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-freelance',
    role: {
      fr: 'Développeur Full Stack & Indépendant / Freelance',
      en: 'Full Stack Developer & Independent Freelancer'
    },
    company: 'Codeur.com & Projets Clients Directs (IT Sefako)',
    location: 'Lomé, Togo 🇹🇬 (Clients Internationaux : France, Suisse, Belgique, Afrique)',
    period: '2017 - Présent',
    type: { fr: 'Freelance & Missions Sur-Mesure', en: 'Freelance & Custom Projects' },
    description: {
      fr: 'Conception et déploiement de solutions logicielles complètes pour startups, PME et entreprises : web, mobile, e-commerce et open-source.',
      en: 'Designing and deploying complete software solutions for startups, SMEs, and enterprises: web, mobile, e-commerce, and open source.'
    },
    achievements: {
      fr: [
        'Analyse des besoins des clients et rédaction détaillée des cahiers des charges fonctionnels et techniques.',
        'Développement sur-mesure de sites vitrines et boutiques e-commerce haute conversion (WordPress, WooCommerce, PrestaShop : Alepia, Aux Bonnes Senteurs, JMO Transport, Transinbel).',
        'Conception d\'applications web et mobiles de pointe (Laravel, iOS Swift, Flutter : ZenAds, Miva, PetitNid sur l\'App Store & Google Play, Iramis Delivery).',
        'Création et publication du package open-source geonidas6/moneyfusion-laravel facilitant l\'automatisation des paiements pour les développeurs.',
        'Résolution de bugs complexes, refonte d\'architectures logicielles existantes et optimisation drastique des performances web.',
        'Maintenance corrective et évolutive des projets livrés avec un taux de satisfaction client maximal (100% sur Codeur.com).'
      ],
      en: [
        'Client needs analysis and writing of comprehensive technical & functional specifications.',
        'Custom development of showcase sites and high-conversion e-commerce stores (WordPress, WooCommerce, PrestaShop: Alepia, Aux Bonnes Senteurs, JMO Transport, Transinbel).',
        'Engineering cutting-edge web & mobile applications (Laravel, iOS Swift, Flutter: ZenAds, Miva, PetitNid on the App Store & Google Play, Iramis Delivery).',
        'Creation and maintenance of the open-source geonidas6/moneyfusion-laravel package streamlining payments for PHP/Laravel teams.',
        'Troubleshooting complex system bugs, refactoring legacy codebases, and drastically optimizing load times.',
        'Corrective and continuous evolutionary maintenance with flawless 100% client satisfaction on Codeur.com.'
      ]
    },
    technologies: [
      'Laravel',
      'PHP',
      'React',
      'Next.js',
      'Angular',
      'iOS (Swift)',
      'Flutter',
      'WordPress',
      'PrestaShop',
      'FastAPI (Python)',
      'Git',
      'Serveurs Web'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-bca',
    degree: {
      fr: 'Bachelor of Computer Applications (BCA)',
      en: 'Bachelor of Computer Applications (BCA)'
    },
    institution: 'CIFOP',
    location: 'Lomé, Togo',
    year: '2015 – 2017',
    description: {
      fr: 'Formation universitaire approfondie en informatique, algorithmique, développement logiciel, modélisation de bases de données relationnelles et architectures web.',
      en: 'In-depth university education in computer science, algorithms, software development, relational database modeling, and web architectures.'
    }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Directeur Technique',
    role: 'Client Codeur.com',
    company: 'Plateforme E-Commerce',
    content: {
      fr: 'Patrice est un développeur exceptionnel. Capable de gérer un projet de A à Z avec une rigueur remarquable. Son package MoneyFusion pour Laravel nous a permis d\'automatiser nos paiements rapidement et en toute sécurité.',
      en: 'Patrice is an outstanding software engineer. Capable of managing projects from A to Z with remarkable rigor. His MoneyFusion Laravel package allowed us to automate payments smoothly and securely.'
    },
    avatarInitial: 'D',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Fondateur',
    role: 'Client Suisse E-Commerce',
    company: 'Aux Bonnes Senteurs (aux-bonnes-senteurs.ch)',
    content: {
      fr: 'La refonte de notre boutique en ligne réalisée par Patrice a dépassé nos attentes. Le tunnel de commande est fluide, rapide et les ventes ont immédiatement progressé. Un professionnel fiable que je recommande vivement.',
      en: 'The overhaul of our online store executed by Patrice exceeded our expectations. The checkout is smooth, fast, and sales grew right away. A reliable professional I highly recommend.'
    },
    avatarInitial: 'F',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Responsable Opérations',
    role: 'Fondateur',
    company: 'Société Logistique & Transport (Iramis / JMO)',
    content: {
      fr: 'Excellente collaboration avec Patrice pour notre outil logistique et notre site web. Grande réactivité, maîtrise technique complète et respect irréprochable des délais.',
      en: 'Excellent collaboration with Patrice on our logistics tool and website. Great responsiveness, total technical mastery, and strict adherence to deadlines.'
    },
    avatarInitial: 'R',
    rating: 5
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Affiche la liste des commandes disponibles' },
  { cmd: 'about', desc: 'Affiche le profil professionnel de Patrice Atcu' },
  { cmd: 'skills', desc: 'Liste les compétences techniques (Front, Back, Mobile, E-Commerce, DevOps)' },
  { cmd: 'projects', desc: 'Affiche la liste des réalisations et projets majeurs' },
  { cmd: 'package', desc: 'Détails sur le package open-source MoneyFusion Laravel' },
  { cmd: 'ios', desc: 'Détails sur l\'application mobile PetitNid publiée sur l\'App Store' },
  { cmd: 'codeur', desc: 'Lien direct vers le profil certifié Codeur.com (100% satisfaction)' },
  { cmd: 'sefako', desc: 'Lien vers IT Sefako (it-sefako.com)' },
  { cmd: 'contact', desc: 'Affiche les coordonnées directes (Email, GitHub, etc.)' },
  { cmd: 'clear', desc: 'Efface l\'écran du terminal' }
];
