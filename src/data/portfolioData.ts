import { Project, SkillCategory, ExperienceItem, EducationItem, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'AKOTSE Kokou Patrice Edem',
  shortName: 'Patrice Akotse',
  username: 'geonidas6',
  email: 'patriceakotse61@gmail.com',
  location: 'Lomé, Togo (Disponible en télétravail & international)',
  title: {
    fr: 'Développeur Full-Stack Web & Mobile | Architecte Logiciel',
    en: 'Full-Stack Web & Mobile Developer | Software Architect',
  },
  tagline: {
    fr: 'Je conçois et développe des applications web performantes, des applications mobiles intuitives et des architectures résilientes.',
    en: 'I design and build high-performance web applications, intuitive mobile apps, and resilient software architectures.',
  },
  yearsOfExperience: 5,
  projectsCount: '35+',
  githubRankTogo: 'Top Contributor Togo 🇹🇬',
  githubUrl: 'https://github.com/geonidas6',
  linkedinUrl: 'https://linkedin.com',
  whatsappNumber: '+22890000000', // Template default clickable link
  whatsappUrl: 'https://wa.me/22890000000?text=Bonjour%20Patrice%2C%20je%20vous%20contacte%20concernant%20un%20projet%20de%20d%C3%A9veloppement.',
  availability: {
    fr: 'Disponible pour nouveaux projets & missions',
    en: 'Available for new projects & contracts',
  },
  bio: {
    fr: `Ingénieur logiciel et développeur Full-Stack passionné basé au Togo, je combine expertise technique approfondie et rigueur architecturale pour transformer des besoins métiers complexes en solutions logicielles scalables et sécurisées.

Spécialisé dans l'écosystème PHP (Laravel, Symfony), Python (FastAPI, Django), JavaScript/TypeScript (React, Next.js, Node.js) et le développement mobile (Flutter), j'accorde une importance primordiale à la propreté du code, à la sécurité des flux de données et à l'optimisation des performances.

Auteur du package open-source officiel MoneyFusion pour Laravel (@geonidas6/moneyfusion-laravel), je possède une solide expérience dans l'intégration des passerelles de paiement (Stripe, Mobile Money, MoneyFusion, Flooz, T-Money) et les architectures de microservices.`,
    en: `Passionate software engineer and Full-Stack developer based in Togo, combining deep technical proficiency and architectural rigor to turn complex business requirements into scalable, secure, and intuitive applications.

Specialized in PHP (Laravel, Symfony), Python (FastAPI, Django), JavaScript/TypeScript (React, Next.js, Node.js) and mobile engineering (Flutter), I place maximum value on clean code, transaction security, and system performance.

Author of the open-source MoneyFusion Laravel package (@geonidas6/moneyfusion-laravel), I bring extensive expertise in payment gateway engineering (Stripe, Mobile Money, MoneyFusion) and modern cloud architectures.`
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'moneyfusion-laravel',
    title: 'MoneyFusion Laravel Package',
    subtitle: 'Package Open-Source officiel pour l\'intégration de MoneyFusion',
    description: 'Package open source permettant aux développeurs Laravel d\'intégrer facilement et de manière sécurisée la passerelle de paiement MoneyFusion.',
    fullDescription: 'Un package PHP/Laravel robuste et documenté pour automatiser les transactions, initialiser les checkouts, valider les signatures cryptographiques et gérer les webhooks de notification de paiement MoneyFusion.',
    category: 'package',
    tags: ['PHP', 'Laravel', 'Composer', 'MoneyFusion API', 'FinTech', 'Open Source'],
    featured: true,
    githubUrl: 'https://github.com/geonidas6/moneyfusion-laravel',
    packageUrl: 'https://packagist.org/packages/geonidas6/moneyfusion-laravel',
    role: 'Auteur & Maintainer Principal',
    year: '2024',
    stars: 28,
    highlights: [
      'Gestion native des sessions de paiement et webhooks asynchrones',
      'Validation stricte des payloads et sécurisation des clés API',
      'Architecture extensible avec support des événements Laravel',
      'Testé sur Laravel 9, 10 et 11 avec suite de tests PHPUnit'
    ],
    architecture: [
      'Service Provider & Facade personnalisée',
      'Gestionnaire de requêtes HTTP avec Guzzle',
      'Event Dispatcher pour notifications temps réel de paiement'
    ],
    metrics: [
      { label: 'Téléchargements', value: '1.2k+' },
      { label: 'Couverture Tests', value: '94%' },
      { label: 'Compatibilité', value: 'Laravel 9-11' }
    ],
    imagePlaceholderGradient: 'from-amber-600 via-orange-600 to-red-600',
    iconName: 'Package'
  },
  {
    id: 'afriq-marketplace',
    title: 'AfriqMarket - Plateforme E-Commerce B2B/B2C',
    subtitle: 'Marketplace multi-vendeurs avec paiement hybride & logistique',
    description: 'Plateforme e-commerce complète avec catalogue haute performance, portail vendeurs, gestion d\'inventaire temps réel et intégration multi-devises.',
    fullDescription: 'Conception et développement d\'une marketplace ultra-rapide intégrant le paiement par Mobile Money (T-Money, Flooz), cartes bancaires et suivi des livraisons géolocalisées.',
    category: 'web',
    tags: ['Laravel', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
    featured: true,
    githubUrl: 'https://github.com/geonidas6',
    liveUrl: 'https://afriqmarket-demo.example.com',
    role: 'Lead Full-Stack Developer',
    year: '2024',
    highlights: [
      'Recherche instantanée et filtrage multicritères via index PostgreSQL & Redis',
      'Double système de paiement : Mobile Money local et Cartes internationales',
      'Dashboard vendeur analytique avec statistiques de ventes et export comptable',
      'Architecture conteneurisée sous Docker avec cache optimisé'
    ],
    architecture: [
      'Backend RESTful API sous Laravel 11',
      'Frontend SSR React / Next.js 14 avec Server Components',
      'Cache Redis pour sessions et requêtes fréquentes',
      'Stockage d\'images sur AWS S3 avec CDN CloudFront'
    ],
    metrics: [
      { label: 'Temps de réponse API', value: '< 65ms' },
      { label: 'Transactions gérées', value: '10k+' },
      { label: 'Temps de chargement', value: '0.8s' }
    ],
    imagePlaceholderGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    iconName: 'ShoppingBag'
  },
  {
    id: 'payflow-mobile',
    title: 'PayFlow - Portefeuille Mobile Money & FinTech',
    subtitle: 'Application mobile Flutter de transfert et gestion financière',
    description: 'Application mobile multiplateforme pour les transferts P2P, le paiement de factures (eau, électricité) et l\'épargne automatisée.',
    fullDescription: 'Application mobile élégante développée en Flutter avec architecture Clean/BLoC, sécurisation biométrique, génération de QR codes de paiement et synchronisation hors-ligne.',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'Biométrie', 'WebSockets'],
    featured: true,
    githubUrl: 'https://github.com/geonidas6',
    role: 'Lead Mobile & Backend Developer',
    year: '2023 - 2024',
    highlights: [
      'Authentification biométrique (Face ID / Empreinte digitale) et code PIN chiffré',
      'Génération et scan instantané de QR Codes pour paiements commerçants',
      'Notifications push instantanées lors de la réception de fonds via FCM',
      'Mode hors-ligne avec synchronisation automatique à la reconnexion'
    ],
    architecture: [
      'Flutter avec state management BLoC et Clean Architecture',
      'Backend en microservice Python FastAPI haute vélocité',
      'WebSockets pour le push instantané du solde et des transactions'
    ],
    metrics: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Fluidité', value: '60 FPS stable' },
      { label: 'Note utilisateur', value: '4.8/5' }
    ],
    imagePlaceholderGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    iconName: 'Smartphone'
  },
  {
    id: 'edusuite-saas',
    title: 'EduSuite ERP - Gestion Académique Cloud',
    subtitle: 'Solution SaaS pour universités et instituts de formation',
    description: 'Système complet de gestion des inscriptions, relevés de notes, scolarités, emplois du temps et messagerie parents-professeurs.',
    fullDescription: 'SaaS multi-tenant déployé pour plusieurs établissements scolaires permettant la gestion dématérialisée des flux académiques, paiement en ligne des frais de scolarité et génération automatique de bulletins PDF.',
    category: 'saas',
    tags: ['Symfony', 'PHP 8.3', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    featured: true,
    githubUrl: 'https://github.com/geonidas6',
    role: 'Architecte Logiciel & Développeur',
    year: '2023',
    highlights: [
      'Architecture multi-tenant avec isolation sécurisée des données par établissement',
      'Module de génération de bulletins PDF asynchrone par worker background',
      'Portail interactif pour étudiants et espace comptabilité pour l\'administration',
      'Tableaux de bord interactifs avec graphiques de performances académiques'
    ],
    architecture: [
      'Symfony 6.4 avec Doctrine ORM et Messenger component pour files d\'attente',
      'SPA React avec TypeScript et Tailwind CSS',
      'PostgreSQL avec partitioning de tables pour les historiques de notes'
    ],
    metrics: [
      { label: 'Étudiants gérés', value: '5,000+' },
      { label: 'Documents générés', value: '50k+/an' },
      { label: 'Disponibilité', value: '99.9%' }
    ],
    imagePlaceholderGradient: 'from-purple-600 via-violet-600 to-indigo-800',
    iconName: 'GraduationCap'
  },
  {
    id: 'fastapi-payment-gateway',
    title: 'NexusPay - Moteur de Webhooks & API Passerelle',
    subtitle: 'Microservice de routage et sécurisation des transactions',
    description: 'API haute performance en Python FastAPI orchestrant les échanges entre terminaux de vente, plateformes partenaires et banques.',
    fullDescription: 'Moteur d\'interconnexion transactionnel conçu pour traiter des flux concurrents élevés avec signature HMAC, file d\'attente Redis Queue et alerting automatique en cas d\'anomalie.',
    category: 'fintech',
    tags: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'HMAC Security'],
    featured: false,
    githubUrl: 'https://github.com/geonidas6',
    role: 'Backend Engineer',
    year: '2023',
    highlights: [
      'Débit de traitement supérieur à 1 500 requêtes/seconde par instance',
      'Vérification cryptographique des signatures et rejeu sécurisé des webhooks',
      'Monitoring en direct des temps de réponse et taux de succès des transactions'
    ],
    architecture: [
      'FastAPI async/await avec Uvicorn et Gunicorn',
      'Broker de messages Redis / Celery pour traitement asynchrone',
      'Logs d\'audit immuables pour conformité financière'
    ],
    metrics: [
      { label: 'Latence', value: '< 20ms' },
      { label: 'Throughput', value: '1.5k req/s' }
    ],
    imagePlaceholderGradient: 'from-rose-600 via-pink-600 to-amber-700',
    iconName: 'Server'
  },
  {
    id: 'prestashop-custom-suite',
    title: 'PrestaShop LogiSync & Custom Pay Modules',
    subtitle: 'Modules sur mesure pour synchronisation ERP et paiements locaux',
    description: 'Développement de modules PrestaShop 8 pour l\'interconnexion des stocks d\'entrepôts et l\'acceptation des règlements Mobile Money en direct.',
    fullDescription: 'Suite de modules e-commerce pour commerçants d\'Afrique de l\'Ouest : passerelle de paiement T-Money/Flooz sans redirection abrasive, et connecteur de stock avec les logiciels de caisse physiques.',
    category: 'web',
    tags: ['PHP', 'PrestaShop', 'JavaScript', 'MySQL', 'API REST'],
    featured: false,
    githubUrl: 'https://github.com/geonidas6',
    role: 'Module Developer',
    year: '2022 - 2023',
    highlights: [
      'Intégration transparente dans le tunnel de commande PrestaShop standard',
      'Webhook callback automatique pour changement de statut de commande en temps réel',
      'Documentation complète et installateur en un clic pour les marchands'
    ],
    architecture: [
      'Architecture objet PrestaShop Module SDK',
      'Hooks personnalisés pour panier et checkout',
      'Chiffrement des clés marchands en base de données'
    ],
    metrics: [
      { label: 'Boutiques actives', value: '15+' },
      { label: 'Hausse conversion', value: '+35%' }
    ],
    imagePlaceholderGradient: 'from-teal-600 via-cyan-600 to-blue-700',
    iconName: 'Layers'
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: { fr: 'Backend & Architecture API', en: 'Backend & API Architecture' },
    icon: 'Server',
    skills: [
      {
        name: 'PHP (Laravel & Symfony)',
        level: 95,
        experience: '5 ans',
        description: {
          fr: 'Développement de microservices, packages réutilisables, API RESTful sécurisées, ORM Eloquent/Doctrine, Queues & Events.',
          en: 'Building microservices, reusable packages, secure RESTful APIs, Eloquent/Doctrine ORM, Queues & Events.'
        },
        popularUse: 'Laravel 11, Symfony 6+, Eloquent, Composer Packages',
        highlight: true
      },
      {
        name: 'Python (FastAPI & Django)',
        level: 90,
        experience: '4 ans',
        description: {
          fr: 'Conception d\'APIs asynchrones ultra-rapides, traitement de données, scripts d\'automatisation et webhooks.',
          en: 'Designing ultra-fast async APIs, data pipelines, automation scripts and webhook orchestrators.'
        },
        popularUse: 'FastAPI, Asyncio, Pydantic, SQLAlchemy, Celery',
        highlight: true
      },
      {
        name: 'Node.js & Express / NestJS',
        level: 85,
        experience: '3 ans',
        description: {
          fr: 'Création d\'APIs événementielles, serveurs temps réel WebSockets et microservices légers.',
          en: 'Building event-driven APIs, real-time WebSocket servers, and lightweight microservices.'
        },
        popularUse: 'Express.js, TypeScript, Socket.io, JWT'
      },
      {
        name: 'Conception d\'API & Webhooks',
        level: 95,
        experience: '5 ans',
        description: {
          fr: 'Architecture RESTful, signatures cryptographiques HMAC, idempotence, rate limiting, OpenAPI/Swagger.',
          en: 'RESTful architecture, HMAC cryptographic signing, idempotency, rate limiting, OpenAPI/Swagger.'
        },
        popularUse: 'OpenAPI 3.0, Webhook Handlers, JWT, OAuth2'
      }
    ]
  },
  {
    id: 'frontend',
    title: { fr: 'Frontend & UI Moderne', en: 'Frontend & Modern UI' },
    icon: 'Layout',
    skills: [
      {
        name: 'React & Next.js',
        level: 92,
        experience: '4 ans',
        description: {
          fr: 'Applications modernes SSR/SSG, Server Components, hooks avancés, optimisation de rendu et performance Web Vitals.',
          en: 'Modern SSR/SSG apps, Server Components, advanced hooks, render optimizations, and Core Web Vitals.'
        },
        popularUse: 'React 19, Next.js 14/15, App Router, Zustand, React Query',
        highlight: true
      },
      {
        name: 'TypeScript & JavaScript (ES6+)',
        level: 92,
        experience: '5 ans',
        description: {
          fr: 'Typage strict, interfaces génériques, patterns asynchrones modernes et modularité irréprochable.',
          en: 'Strict typing, generic interfaces, modern asynchronous patterns, and rock-solid modularity.'
        },
        popularUse: 'TypeScript strict mode, Generics, Functional programming'
      },
      {
        name: 'Tailwind CSS & Design Systems',
        level: 95,
        experience: '4 ans',
        description: {
          fr: 'Intégration responsive millimétrée, animations fluides, mode sombre adaptatif et composants accessibles.',
          en: 'Pixel-perfect responsive layout, fluid animations, adaptive dark theme, and accessible UI components.'
        },
        popularUse: 'Tailwind CSS v4, Motion, Lucide Icons, Shadcn UI patterns'
      },
      {
        name: 'HTML5 Sémantique & CSS3',
        level: 98,
        experience: '5+ ans',
        description: {
          fr: 'Respect des standards W3C, accessibilité WCAG, SEO technique et mise en page Flexbox/CSS Grid.',
          en: 'W3C compliance, WCAG accessibility, technical SEO, and advanced Flexbox/CSS Grid layouts.'
        },
        popularUse: 'Semantic Markup, Responsive Web Design, SEO'
      }
    ]
  },
  {
    id: 'mobile',
    title: { fr: 'Développement Mobile', en: 'Mobile Engineering' },
    icon: 'Smartphone',
    skills: [
      {
        name: 'Flutter (Dart)',
        level: 88,
        experience: '3 ans',
        description: {
          fr: 'Applications multiplateformes iOS/Android avec architecture BLoC, persistance locale (Hive/SQLite) et intégrations natives.',
          en: 'Cross-platform iOS/Android apps with BLoC architecture, local caching (Hive/SQLite), and native SDK hooks.'
        },
        popularUse: 'Flutter 3, Dart, BLoC, Provider, Offline First, Push Notifications',
        highlight: true
      },
      {
        name: 'React Native',
        level: 80,
        experience: '2 ans',
        description: {
          fr: 'Développement d\'interfaces natives, gestion d\'état globale et intégration avec APIs REST.',
          en: 'Native mobile user interfaces, state management, and seamless REST backend integration.'
        },
        popularUse: 'React Native, Expo, React Navigation'
      }
    ]
  },
  {
    id: 'database',
    title: { fr: 'Bases de Données & Cache', en: 'Databases & Caching' },
    icon: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        level: 92,
        experience: '4 ans',
        description: {
          fr: 'Modélisation relationnelle avancée, indexation optimisée, JSONB, vues matérialisées et transactions ACID.',
          en: 'Advanced relational modeling, query indexing, JSONB, materialized views, and ACID transactions.'
        },
        popularUse: 'Complex queries, Indexes, Migrations, Supabase'
      },
      {
        name: 'MySQL / MariaDB',
        level: 94,
        experience: '5 ans',
        description: {
          fr: 'Optimisation de requêtes volumineuses, procédures stockées, réplication et administration de bases.',
          en: 'Query optimization, stored procedures, replication, and high-load database administration.'
        },
        popularUse: 'InnoDB, Eloquent / Doctrine ORM, Index tuning'
      },
      {
        name: 'Redis',
        level: 88,
        experience: '3 ans',
        description: {
          fr: 'Mise en cache haute performance, sessions distribuées, rate limiting et queues de messages asynchrones.',
          en: 'High-speed in-memory caching, distributed sessions, rate limiting, and async message queues.'
        },
        popularUse: 'Caching, Pub/Sub, Queue Broker'
      }
    ]
  },
  {
    id: 'devops',
    title: { fr: 'DevOps, Cloud & Outils', en: 'DevOps, Cloud & Tools' },
    icon: 'Cloud',
    skills: [
      {
        name: 'Docker & Conteneurisation',
        level: 88,
        experience: '3 ans',
        description: {
          fr: 'Création d\'environnements de dev et prod reproductibles, Docker Compose, Dockerfiles multi-stage optimisés.',
          en: 'Creating reproducible dev/prod environments, Docker Compose, optimized multi-stage builds.'
        },
        popularUse: 'Docker Compose, Multi-stage builds, Container security'
      },
      {
        name: 'Git & GitHub Workflow',
        level: 96,
        experience: '5 ans',
        description: {
          fr: 'Top contributeur Togo, maîtrise des branches GitFlow, revues de code, releases de packages et GitHub Actions CI/CD.',
          en: 'Top Togo contributor, GitFlow branching, code reviews, semantic package releases, and GitHub Actions CI/CD.'
        },
        popularUse: 'GitHub Actions, CI/CD, GitFlow, Semantic Versioning',
        highlight: true
      },
      {
        name: 'AWS & Hébergement Cloud',
        level: 82,
        experience: '3 ans',
        description: {
          fr: 'Déploiement et gestion d\'infrastructures EC2, S3, RDS, Cloudflare, serveurs Nginx/Linux.',
          en: 'Deploying and managing EC2, S3, RDS, Cloudflare, and Linux/Nginx VPS environments.'
        },
        popularUse: 'EC2, S3, Nginx, SSL Let\'s Encrypt, Linux Ubuntu Server'
      }
    ]
  },
  {
    id: 'fintech',
    title: { fr: 'FinTech & Paiements', en: 'FinTech & Payments' },
    icon: 'CreditCard',
    skills: [
      {
        name: 'MoneyFusion Payment Gateway',
        level: 98,
        experience: 'Expertise Package',
        description: {
          fr: 'Auteur du package Laravel d\'intégration officiel de MoneyFusion. Maîtrise complète de l\'API, flux de checkout et webhooks.',
          en: 'Author of the official MoneyFusion Laravel package. Complete mastery of checkout flows and webhooks.'
        },
        popularUse: 'moneyfusion-laravel package author, Webhooks, Signature validation',
        highlight: true
      },
      {
        name: 'Mobile Money (T-Money / Flooz / Orange Money)',
        level: 95,
        experience: '4 ans',
        description: {
          fr: 'Intégration d\'API de paiement locales pour le marché Ouest-Africain avec confirmation instantanée par SMS/Webhook.',
          en: 'Integrating local African Mobile Money payment APIs with instant webhook/SMS confirmations.'
        },
        popularUse: 'Togo, Benin, Côte d\'Ivoire & Sub-Saharan integrations'
      },
      {
        name: 'Stripe & Passerelles Internationales',
        level: 90,
        experience: '4 ans',
        description: {
          fr: 'Paiements par cartes bancaires, abonnements récurrents, gestion des remboursements et conformité SCA 3D-Secure.',
          en: 'Credit card checkout, recurring SaaS subscriptions, refunds management, and 3D-Secure SCA compliance.'
        },
        popularUse: 'Stripe Elements, Subscriptions, Webhooks, Multi-currency'
      }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: {
      fr: 'Lead Développeur Full-Stack & Consultant Indépendant',
      en: 'Lead Full-Stack Developer & Independent Consultant'
    },
    company: 'Freelance / Consulting Tech',
    location: 'Lomé, Togo (Clients Internationaux & Locaux)',
    period: '2022 - Présent',
    type: { fr: 'Freelance & Contrat', en: 'Freelance & Contract' },
    description: {
      fr: 'Accompagnement de startups, PME et institutions dans la conception et le déploiement d\'applications web et mobiles critiques.',
      en: 'Supporting startups, SMEs, and institutions in designing and deploying mission-critical web and mobile applications.'
    },
    achievements: {
      fr: [
        'Création et publication du package open-source geonidas6/moneyfusion-laravel avec plus de 1 200 téléchargements.',
        'Développement d\'une marketplace e-commerce B2B générant des transactions fluides via Mobile Money et CB.',
        'Mise en place d\'architectures conteneurisées Docker réduisant le temps de déploiement de 60%.',
        'Conseil en sécurité d\'API et conformité des flux de paiement bancaires et mobiles.'
      ],
      en: [
        'Authored and published the open-source geonidas6/moneyfusion-laravel package with over 1,200 downloads.',
        'Engineered a B2B e-commerce marketplace facilitating seamless local Mobile Money & card transactions.',
        'Implemented Docker-based container pipelines decreasing client deployment cycles by 60%.',
        'Consulted on API security hardening and financial webhook transaction integrity.'
      ]
    },
    technologies: ['Laravel', 'React', 'Next.js', 'Flutter', 'Python', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'exp-2',
    role: {
      fr: 'Développeur Web & Ingénieur Logiciel',
      en: 'Web Developer & Software Engineer'
    },
    company: 'Entreprises & Projets Numériques',
    location: 'Lomé, Togo',
    period: '2020 - 2022',
    type: { fr: 'Temps Plein / Missions', en: 'Full-Time / Contract' },
    description: {
      fr: 'Conception de plateformes de gestion d\'entreprise (ERP/SaaS), portails éducatifs et modules e-commerce sur mesure.',
      en: 'Designed enterprise management platforms (ERP/SaaS), academic portals, and tailored e-commerce modules.'
    },
    achievements: {
      fr: [
        'Développement d\'un progiciel de gestion scolaire (EduSuite ERP) utilisé par plus de 5 000 étudiants et enseignants.',
        'Création de modules personnalisés PrestaShop et synchronisation de stocks multi-magasins.',
        'Refonte et optimisation de requêtes SQL réduisant le temps de chargement des pages de 4.2s à 0.9s.',
        'Encadrement de développeurs juniors sur les bonnes pratiques Git et le Clean Code.'
      ],
      en: [
        'Engineered an academic management ERP (EduSuite) serving 5,000+ active students and educators.',
        'Created custom PrestaShop modules and multi-warehouse inventory synchronization systems.',
        'Refactored legacy SQL schemas reducing page loading latency from 4.2s to 0.9s.',
        'Mentored junior developers on Git workflows, testing conventions, and Clean Code principles.'
      ]
    },
    technologies: ['PHP', 'Symfony', 'Laravel', 'PrestaShop', 'JavaScript', 'MySQL', 'Git']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: {
      fr: 'Diplôme / Formation en Génie Logiciel & Informatique de Gestion',
      en: 'Degree in Software Engineering & Information Systems'
    },
    institution: 'Formation Supérieure en Informatique & Développement',
    location: 'Lomé, Togo',
    year: '2019 - 2022',
    description: {
      fr: 'Spécialisation en architectures logicielles, modélisation de bases de données, sécurité web et algorithmique avancée.',
      en: 'Specialized in software architectures, relational database modeling, web application security, and algorithms.'
    }
  },
  {
    id: 'edu-2',
    degree: {
      fr: 'Certifications & Perfectionnement Continu',
      en: 'Certifications & Continuous Learning'
    },
    institution: 'Auto-formation & Formations Spécialisées',
    location: 'En ligne / International',
    year: 'En continu',
    description: {
      fr: 'Certifications et veille active : Laravel Advanced Architecture, Flutter Cross-Platform Mastery, FastAPI Microservices, Cloud & Docker.',
      en: 'Active continuous learning: Laravel Advanced Architecture, Flutter Cross-Platform Mastery, FastAPI Microservices, Cloud & Docker.'
    }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Directeur Technique - Plateforme FinTech',
    role: 'CTO & Co-fondateur',
    company: 'Start-up FinTech Ouest-Africaine',
    content: {
      fr: 'Patrice est un développeur exceptionnel. Son package MoneyFusion pour Laravel nous a fait gagner des semaines de travail. Sa rigueur sur la gestion des webhooks et la sécurité des transactions est exemplaire.',
      en: 'Patrice is an outstanding software engineer. His MoneyFusion Laravel package saved our team weeks of development. His rigor regarding webhook security and payment flows is top tier.'
    },
    avatarInitial: 'M',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Responsable des Opérations E-Commerce',
    role: 'Fondateur',
    company: 'Marketplace Régionale',
    content: {
      fr: 'La refonte de notre plateforme avec Laravel et React réalisée par Patrice a boosté notre vitesse de chargement et a permis d\'intégrer le Mobile Money sans la moindre friction. Très réactif et force de proposition.',
      en: 'The revamp of our platform using Laravel and React built by Patrice drastically reduced load times and enabled flawless Mobile Money checkout. Highly responsive and proactive.'
    },
    avatarInitial: 'A',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Chef de Projet Digital',
    role: 'Directeur de Projet',
    company: 'Agence Digitale',
    content: {
      fr: 'Travailler avec AKOTSE Kokou Patrice est un plaisir. Code propre, documentation claire et respect strict des délais. Je le recommande les yeux fermés pour tout projet web ou mobile ambitieux.',
      en: 'Collaborating with AKOTSE Kokou Patrice is an absolute pleasure. Clean code, crystal-clear documentation, and strict adherence to deadlines. Recommended without hesitation.'
    },
    avatarInitial: 'K',
    rating: 5
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Affiche la liste des commandes disponibles' },
  { cmd: 'about', desc: 'Affiche la biographie et le profil de Patrice' },
  { cmd: 'skills', desc: 'Liste les compétences techniques et stacks' },
  { cmd: 'projects', desc: 'Affiche les projets majeurs & réalisations' },
  { cmd: 'package', desc: 'Détails sur le package open-source MoneyFusion' },
  { cmd: 'contact', desc: 'Affiche les coordonnées (email, github, etc.)' },
  { cmd: 'github', desc: 'Ouvre le profil GitHub de @geonidas6' },
  { cmd: 'status', desc: 'Affiche la disponibilité actuelle pour missions' },
  { cmd: 'sudo hire', desc: 'Déclenche l\'action de recrutement / contact direct' },
  { cmd: 'clear', desc: 'Efface l\'écran du terminal' }
];
