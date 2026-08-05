export interface LocalizedText {
  fr: string;
  en: string;
}

export interface ArchitectureHighlight {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectFeature {
  title: LocalizedText;
  description: LocalizedText;
  tech?: string[];
}

export interface ProjectMetric {
  value: string;
  label: LocalizedText;
}

export interface ProjectDetail {
  id: string;
  name: string;
  tagline: LocalizedText;
  overview: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  platforms: string[];
  tags: string[];
  image: string;
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
    integrations: string[];
  };
  architectureHighlights: ArchitectureHighlight[];
  features: ProjectFeature[];
  metrics: ProjectMetric[];
  links: {
    live: string;
    github: string;
    appStore?: string;
    playStore?: string;
  };
}

export const PROJECTS_DATA: Record<string, ProjectDetail> = {
  "jecontribue-crowdfunding": {
    id: "jecontribue-crowdfunding",
    name: "JE CONTRIBUE",
    tagline: {
      fr: "Plateforme de collecte de fonds multi-tenants avec orchestration de paiements en temps réel et Mobile Money.",
      en: "Multi-tenant crowdfunding platform powering seamless cross-border donations with real-time payment orchestration.",
    },
    overview: {
      fr: "JE CONTRIBUE est un écosystème numérique d'aide humanitaire et de collecte de fonds conçu pour relier la diaspora européenne aux bénéficiaires en Afrique centrale et de l'Ouest. La plateforme combine un frontend éditorial Next.js 16 avec un microservice dédié NestJS pour la réconciliation instantanée des cartes Revolut et du Mobile Money (MTN, Airtel).",
      en: "JE CONTRIBUE is a digital humanitarian crowdfunding ecosystem designed to connect European diaspora donors with beneficiaries in Central and West Africa. The platform pairs an editorial Next.js 16 frontend with a dedicated NestJS payment microservice for instant reconciliation across Revolut cards and local Mobile Money (MTN, Airtel).",
    },
    problem: {
      fr: "Les organisations humanitaires en Afrique sont confrontées à la fragmentation des canaux de paiement, aux frais de conversion élevés et à l'absence de visibilité en temps réel lors des transferts transfrontaliers.",
      en: "Humanitarian organizations operating in Africa struggle with fragmented financial channels, high cross-border conversion fees, and a lack of real-time transaction visibility.",
    },
    solution: {
      fr: "Une architecture fullstack moderne combinant Next.js 16 et NestJS 11. Elle intègre un moteur de paiement unifié gérant les conversions EUR/XAF, la génération automatique de reçus PDF, des téléversements S3 sécurisés et des notifications WebSocket en temps réel.",
      en: "A modern fullstack architecture combining Next.js 16 and NestJS 11. It features a unified payment engine handling EUR/XAF conversions, automated PDF receipt generation, secure S3 presigned uploads, and real-time Socket.IO WebSocket status updates.",
    },
    platforms: ["Web"],
    tags: ["FINTECH", "CROWDFUNDING", "NEXT.JS 16", "NESTJS"],
    image:
      "https://images.unsplash.com/photo-1532629345422-7515fe9d1633?w=900&q=80&auto=format&fit=crop",
    techStack: {
      frontend: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript",
        "TailwindCSS v4",
        "Radix UI",
        "NextAuth.js v5",
        "next-intl",
        "Socket.IO Client",
        "Tiptap Editor",
      ],
      backend: [
        "NestJS 11",
        "Next.js Server Actions",
        "TypeScript",
        "RxJS",
        "Socket.IO Server",
        "Winston Logger",
        "Passport JWT",
      ],
      database: ["PostgreSQL 16", "Prisma ORM v7", "Redis (ioredis)"],
      devops: [
        "Docker",
        "Puppeteer (PDF Generation)",
        "AWS S3 / Cloudflare R2",
        "Swagger / OpenAPI 3.0",
      ],
      integrations: [
        "Revolut Merchant API",
        "PawaPay Gateway (MTN MoMo & Airtel Money)",
        "Nodemailer SMTP",
      ],
    },
    architectureHighlights: [
      {
        title: {
          fr: "Microservice d'orchestration de paiement dédié (NestJS)",
          en: "Dedicated Payment Orchestration Microservice (NestJS)",
        },
        description: {
          fr: "Isolation complète de la logique bancaire dans un service NestJS sécurisé par clés API multi-tenant (x-tenant-id) et limitation de débit Redis.",
          en: "Complete isolation of financial logic into a dedicated NestJS service protected by multi-tenant API key headers (x-tenant-id) and Redis rate limiting.",
        },
      },
      {
        title: {
          fr: "Réconciliation par Webhooks & Notifications Socket.IO",
          en: "Dual-Provider Webhook Reconciliation & Socket.IO Notifications",
        },
        description: {
          fr: "Capture asynchrone des notifications Revolut/PawaPay avec mise à jour instantanée de l'UI via des rooms Socket.IO dédiées sans polling HTTP.",
          en: "Asynchronous callback handling for Revolut/PawaPay payments with real-time UI status updates over Socket.IO room subscriptions, eliminating HTTP polling.",
        },
      },
      {
        title: {
          fr: "Moteur d'exportation de reçus PDF avec Puppeteer",
          en: "Server-Side PDF Receipt & Export Engine with Puppeteer",
        },
        description: {
          fr: "Génération côté serveur de reçus fiscaux et de résumés financiers au format PDF via des instances Chromium headless intégrées.",
          en: "Server-side dynamic PDF generation for official tax receipts and financial reports using headless Chromium instances.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Moteur de Campagnes Multi-Tenants",
          en: "Multi-Tenant Campaign Engine",
        },
        description: {
          fr: "Permet aux associations de publier des campagnes de collecte avec objectifs personnalisés, options de montants et médias stockés sur S3.",
          en: "Enables non-profits to launch campaigns with custom targets, preset amounts, and presigned S3 media storage.",
        },
        tech: [
          "Next.js Server Actions",
          "Prisma ORM",
          "AWS S3 / Cloudflare R2",
          "Tiptap",
        ],
      },
      {
        title: {
          fr: "Guichet de Paiement Unifié EUR / XAF",
          en: "Unified Dual-Currency Checkout (EUR / XAF)",
        },
        description: {
          fr: "Conversion automatique et transparente entre les cartes de la diaspora (EUR) et les portefeuilles Mobile Money locaux (XAF).",
          en: "Automatic, seamless currency normalization between Diaspora card payments (EUR) and local Mobile Money wallets (XAF).",
        },
        tech: ["NestJS", "Revolut API", "PawaPay Gateway", "Zod"],
      },
      {
        title: {
          fr: "Suivi du Statut de Paiement en Temps Réel",
          en: "Real-Time Payment Tracking Modal",
        },
        description: {
          fr: "Affichage interactif de la progression des transactions sans rechargement de page via Socket.IO.",
          en: "Interactive transaction authorization updates streamed directly to the frontend modal via Socket.IO.",
        },
        tech: ["Socket.IO Client", "NestJS WebSockets Gateway", "React"],
      },
      {
        title: {
          fr: "Générateur Automatique de Reçus Fiscaux PDF",
          en: "Automated Tax & Donation PDF Generator",
        },
        description: {
          fr: "Création instantanée et envoi par email de reçu de don officiel au format PDF à la confirmation du règlement.",
          en: "Instant server-side generation and email delivery of official donation receipts upon payment completion.",
        },
        tech: ["Puppeteer", "Nodemailer", "HTML/CSS Templates"],
      },
    ],
    metrics: [
      {
        value: "60%",
        label: {
          fr: "Réduction de la latence de confirmation de paiement grâce aux WebSockets",
          en: "Reduction in payment status confirmation latency via Socket.IO WebSockets",
        },
      },
      {
        value: "100%",
        label: {
          fr: "Transactions idempotentes sans risque de double débit",
          en: "Idempotent transactions with zero double-charge risk",
        },
      },
      {
        value: "2",
        label: {
          fr: "Réseaux de paiement majeurs intégrés (Revolut Card & PawaPay Mobile Money)",
          en: "Major payment channels integrated (Revolut Card & PawaPay Mobile Money)",
        },
      },
    ],
    links: {
      live: "https://jecontribue.com",
      github: "",
    },
  },
  volten: {
    id: "volten",
    name: "Volten AI",
    tagline: {
      fr: "SaaS d'assistance IA omnicanal avec gestion de la vérité et moteur RAG hybride.",
      en: "OmniChannel AI Assistant SaaS with Truth Management & Hybrid RAG Engine."
    },
    overview: {
      fr: "Volten AI est une plateforme SaaS d'assistance virtuelle omnicanale d'entreprise conçue pour automatiser le support client sur WhatsApp, Instagram et Facebook avec une précision supérieure à 99% grâce à un moteur RAG hybride et un système de reprise en main par un agent humain.",
      en: "Volten AI is an enterprise omnichannel virtual assistant SaaS platform designed to automate customer support across WhatsApp, Instagram, and Facebook with 99%+ accuracy using a hybrid RAG engine and real-time human agent takeover."
    },
    problem: {
      fr: "Les entreprises font face à des coûts de support élevés et à des temps de réponse lents sur les canaux de messagerie instantanée, tandis que les chatbots IA génériques hallucinent souvent et manquent d'intégration sécurisée avec la documentation officielle.",
      en: "Businesses face high support costs and slow response times on messaging channels, while generic AI chatbots frequently hallucinate and lack reliable grounding in official company documentation."
    },
    solution: {
      fr: "Une architecture microservices distribuée combinant l'ingestion Go haut débit, la recherche hybride PostgreSQL (pgvector + GIN) et un pipeline RAG basé sur une hiérarchie de gestion de la vérité, avec basculement automatique vers des agents humains via WebSockets.",
      en: "A distributed microservices architecture combining high-throughput Go ingestion, PostgreSQL hybrid search (pgvector + GIN), and a RAG pipeline grounded in a strict Truth Management hierarchy with real-time WebSocket human agent handover."
    },
    platforms: ["Web", "Android", "iOS"],
    tags: ["OMNICHANNEL AI", "HYBRID RAG", "GOLANG GATEWAY", "PGVECTOR"],
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
    techStack: {
      frontend: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript",
        "TailwindCSS v4",
        "TanStack Query v5",
        "Socket.io Client",
        "Zod v4",
        "Shadcn UI"
      ],
      backend: [
        "Golang (Go)",
        "Node.js / Bun",
        "NestJS (BFF)",
        "Meta Graph API",
        "OpenAI API",
        "Anthropic Claude API"
      ],
      database: [
        "PostgreSQL (pgvector)",
        "GIN Full-Text Search",
        "HNSW Vector Indexing",
        "Redis",
        "RabbitMQ"
      ],
      devops: [
        "Docker",
        "Docker Compose",
        "Nginx / Caddy",
        "VPS Deployment",
        "Tenant Isolation Architecture"
      ],
      integrations: [
        "WhatsApp Business API",
        "Instagram DMs",
        "Facebook Messenger",
        "Stripe",
        "Firecrawl Web Parser"
      ]
    },
    architectureHighlights: [
      {
        title: {
          fr: "Moteur RAG Hybride & Gestion de la Vérité (pgvector + GIN)",
          en: "Hybrid Vector & Lexical RAG Engine with Truth Management (pgvector + GIN)"
        },
        description: {
          fr: "Combinaison de la recherche vectorielle HNSW (OpenAI embeddings) et de la recherche textuelle PostgreSQL tsvector avec réordonnancement selon la priorité des sources (FAQ 1.0 > PDF 0.7 > Crawl Web 0.4) pour éliminer les hallucinations.",
          en: "Combination of HNSW vector cosine search (OpenAI embeddings) and PostgreSQL tsvector keyword indexing reranked by source priority hierarchy (FAQ 1.0 > PDF 0.7 > Web Crawl 0.4) to eliminate AI hallucinations."
        }
      },
      {
        title: {
          fr: "Passerelle Webhook Go Haute Concurrence pour Meta Cloud API",
          en: "High-Concurrency Go Webhook Gateway for Meta Cloud APIs"
        },
        description: {
          fr: "Microservice Go dédié pour la vérification de signature HMAC sub-milliseconde et la réponse HTTP 200 instantanée, transmettant les payloads de messages à RabbitMQ pour un traitement asynchrone sans perte.",
          en: "Dedicated Go microservice providing sub-millisecond HMAC signature verification and instant HTTP 200 ACK, pushing raw payloads to RabbitMQ for zero-loss asynchronous processing."
        }
      },
      {
        title: {
          fr: "Passation Agent Humain en Temps Réel & Briefings Neuraux IA",
          en: "Real-Time Human Agent Handover & Neural AI Briefings"
        },
        description: {
          fr: "Architecture WebSocket Socket.io déclenchant l'escalade vers un agent humain dès que la confiance IA baisse, générant automatiquement un résumé synthétique de la conversation pour l'agent.",
          en: "Socket.io WebSocket architecture triggering human escalation when AI confidence drops, automatically generating a concise AI context briefing for human support agents."
        }
      },
      {
        title: {
          fr: "Isolation Multi-Tenant & Audit Transparent des Ressources",
          en: "Multi-Tenant Namespace Isolation & Transparent Resource Auditing"
        },
        description: {
          fr: "Filtrage scalaire strict par tenant_id au niveau de la base et des index vectoriels, couplé à un suivi télémétrique détaillé des jetons d'inférence, du stockage et de la facturation Stripe.",
          en: "Strict scalar tenant_id pre-filtering at database and vector index level, coupled with detailed real-time telemetry for inference token consumption and Stripe metered billing."
        }
      }
    ],
    features: [
      {
        title: {
          fr: "Bibliothèque de Connaissances Multi-Sources (RAG Hybride)",
          en: "Multi-Source Knowledge Library (Hybrid RAG)"
        },
        description: {
          fr: "Ingestion et vectorisation de documents PDF, de documentation technique et de sites web pour créer une base de connaissances privée et sécurisée.",
          en: "Ingestion and vectorization of PDFs, technical docs, and websites to construct a secure private knowledge base for semantic retrieval."
        },
        tech: ["Next.js 16", "Go Ingestion Service", "PostgreSQL pgvector", "Firecrawl"]
      },
      {
        title: {
          fr: "Boîte de Réception Omnicanale Unifiée (WhatsApp, Instagram, FB)",
          en: "OmniChannel Unified Inbox (WhatsApp, Instagram, FB)"
        },
        description: {
          fr: "Tableau de bord unifié pour suivre, inspecter et répondre aux messages clients provenant de tous les canaux Meta en temps réel.",
          en: "Centralized dashboard to monitor, inspect, and respond to customer interactions across all Meta messaging channels in real time."
        },
        tech: ["Go Webhook Gateway", "NestJS BFF", "Meta Graph API", "Socket.io", "React 19"]
      },
      {
        title: {
          fr: "Passation Agent Humain & Résumés Neuraux IA",
          en: "Intelligent Human Handover & AI Neural Briefings"
        },
        description: {
          fr: "Transfert fluide des conversations de l'IA vers les agents humains avec résumés contextuels générés automatiquement.",
          en: "Seamless conversation transfer from AI to human operators with auto-generated contextual conversation summaries."
        },
        tech: ["Node.js Human Agent Service", "Socket.io", "OpenAI GPT-4o", "TanStack Query v5"]
      },
      {
        title: {
          fr: "Audit de Conflits Sémantiques & Intégrité",
          en: "Knowledge Integrity & Semantic Conflict Audit"
        },
        description: {
          fr: "Scanner d'arrière-plan détectant les contradictions et politiques obsolètes au sein de la documentation ingérée.",
          en: "Background engine scanning for contradictory instructions or out-of-date policies within ingested company documentation."
        },
        tech: ["Go Ingestion Engine", "Node.js Orchestration", "PostgreSQL GIN", "TailwindCSS"]
      },
      {
        title: {
          fr: "Terrain d'Essai & Terminal de Latence",
          en: "Real-Time Testing Ground & Latency Terminal"
        },
        description: {
          fr: "Environnement bac à sable pour tester le raisonnement du modèle, la consommation de tokens et la latence avant mise en production.",
          en: "Sandbox environment enabling AI managers to test prompt reasoning, vector retrieval accuracy, and response latency before live deployment."
        },
        tech: ["Next.js App Router", "React 19", "Socket.io", "Shadcn UI"]
      },
      {
        title: {
          fr: "Suivi des Ressources & Facturation à l'Usage",
          en: "Metered Usage & Transparent Resource Billing"
        },
        description: {
          fr: "Analyse détaillée des jetons d'inférence, de l'espace de stockage vectoriel et des volumes de messages avec facturation Stripe.",
          en: "Detailed telemetry and billing breakdown auditing inference tokens, vector storage, and messaging throughput via Stripe."
        },
        tech: ["Node.js Dispatch & Billing Service", "Stripe API", "PostgreSQL", "Recharts"]
      }
    ],
    metrics: [
      {
        value: "< 100ms",
        label: {
          fr: "Temps de réponse webhook Meta (Gateway Go)",
          en: "Meta Webhook ACK Latency (Go Gateway)"
        }
      },
      {
        value: "99%+",
        label: {
          fr: "Précision des réponses sans hallucination",
          en: "Response Accuracy without Hallucinations"
        }
      },
      {
        value: "-65%",
        label: {
          fr: "Réduction de la charge du support client",
          en: "Reduction in Customer Support Overhead"
        }
      },
      {
        value: "< 2s",
        label: {
          fr: "Latence d'inférence RAG de bout en bout",
          en: "End-to-End RAG Inference Latency"
        }
      }
    ],
    links: {
      live: "",
      github: ""
    }
  },
  koyeba: {
    id: "koyeba",
    name: "Koyeba",
    tagline: {
      fr: "Plateforme mobile de quiz multijoueur en temps réel, tournois et défis de culture générale.",
      en: "Real-time multiplayer trivia, gaming tournaments, and brain-battles mobile platform.",
    },
    overview: {
      fr: "Koyeba est une application mobile de quiz et de tournois multijoueurs axée sur la vitesse, l'interactivité et un fonctionnement hybride en ligne/hors-ligne.",
      en: "Koyeba is a high-performance multiplayer trivia and tournament mobile app designed for fast-paced gameplay, real-time match synchronization, and offline accessibility.",
    },
    problem: {
      fr: "Les jeux multijoueurs mobiles souffrent souvent de latences élevées, de coûts d'infrastructure WebSocket importants et de pannes lors de connexions réseau instables.",
      en: "Mobile multiplayer games often suffer from high latency, expensive persistent server setups, and total failure when operating under unreliable mobile connections.",
    },
    solution: {
      fr: "Une architecture moderne combinant React Native/Expo avec stockage SQLite local, synchronisée avec des backend Workers Cloudflare et Durable Objects sur la periphérie (Edge).",
      en: "A state-of-the-art mobile architecture combining Expo/React Native with local SQLite caching, backed by edge Cloudflare Workers and Durable Objects for stateful real-time lobbies.",
    },
    platforms: ["Android", "iOS"],
    tags: ["MULTIPLAYER GAMING", "EXPO SDK 57", "CLOUDFLARE EDGE", "TURSO"],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80&auto=format&fit=crop",
    techStack: {
      frontend: [
        "React Native (0.86)",
        "Expo SDK 57",
        "Expo Router",
        "React Native Unistyles 3.3",
        "React Native Skia",
        "Legend List",
        "Zustand",
        "TanStack Query",
      ],
      backend: [
        "TypeScript",
        "Hono API",
        "Cloudflare Workers",
        "Cloudflare Durable Objects",
        "Zod OpenAPI",
      ],
      database: ["Turso (LibSQL)", "Drizzle ORM", "Expo SQLite", "MMKV"],
      devops: [
        "Wrangler CLI",
        "Cloudflare Edge Engine",
        "EAS (Expo Application Services)",
      ],
      integrations: [
        "Google Sign-In",
        "Apple Authentication",
        "Expo Push Notifications",
      ],
    },
    architectureHighlights: [
      {
        title: {
          fr: "Lobbies Temps Réel avec Cloudflare Durable Objects",
          en: "Real-Time Lobbies via Cloudflare Durable Objects",
        },
        description: {
          fr: "Gestion d'état multijoueur ultra-rapide et économique déployée directement en bordure de réseau (Edge) via des Durable Objects.",
          en: "Ultra-fast stateful WebSocket room management and match synchronization executed globally at the edge with zero traditional server overhead.",
        },
      },
      {
        title: {
          fr: "Architecture Mobile Offline-First avec Drizzle et SQLite Local",
          en: "Offline-First Mobile Architecture with Local SQLite & Drizzle ORM",
        },
        description: {
          fr: "Stockage sur l'appareil des questions et statistiques pour permettre le jeu hors-ligne avec synchronisation transparente une fois reconnecté.",
          en: "On-device caching of user progress, question banks, and scores using Expo SQLite and MMKV with automated cloud background syncing.",
        },
      },
      {
        title: {
          fr: "Rendu Graphique 60 FPS avec React Native Skia & Unistyles",
          en: "60 FPS Visual Rendering with React Native Skia & Unistyles",
        },
        description: {
          fr: "Utilisation du moteur Canvas Skia et de Unistyles pour des animations fluides et adaptatives sans impacter le thread JS.",
          en: "GPU-accelerated custom animations, countdown canvas, and zero-runtime theme engines ensuring maximum frame rates across all mobile hardware.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Matchmaking Multijoueur en Temps Réel",
          en: "Real-Time Multiplayer Matchmaking",
        },
        description: {
          fr: "Création instantanée de salons de jeu publics et privés avec synchronisation en direct des scores et des questions.",
          en: "Instant lobby generation and real-time live scoring synchronized over WebSocket channels.",
        },
        tech: ["Cloudflare Durable Objects", "Hono", "React Native", "Zustand"],
      },
      {
        title: {
          fr: "Mode Entraînement Hors-Ligne",
          en: "Offline Practice Mode",
        },
        description: {
          fr: "Parties solo jouables sans connexion Internet grâce au moteur de base de données SQLite embarqué.",
          en: "Single-player games fully playable offline using on-device SQLite database storage.",
        },
        tech: ["Expo SQLite", "Drizzle ORM", "MMKV"],
      },
      {
        title: {
          fr: "Tournois et Classements Globaux",
          en: "Tournaments & Global Leaderboards",
        },
        description: {
          fr: "Système automatisé de compétition avec distribution de récompenses et mises à jour périodiques via Cron.",
          en: "Scheduled competitions with dynamic leaderboards and automated cron-based rewards distribution.",
        },
        tech: ["Cloudflare Cron Triggers", "Turso", "Drizzle ORM"],
      },
      {
        title: {
          fr: "UI Interactive & Fluidité Graphique",
          en: "Interactive Canvas & Visual Engine",
        },
        description: {
          fr: "Interface dynamique avec effets de particules, jauges chronométrées et retours haptiques.",
          en: "Dynamic gaming interface featuring hardware-accelerated timers, celebration particles, and haptic feedback.",
        },
        tech: ["React Native Skia", "Expo Audio", "Expo Haptics", "Unistyles"],
      },
    ],
    metrics: [
      {
        value: "< 50ms",
        label: {
          fr: "Latence de création et synchro des lobbies en Edge",
          en: "Edge room creation & sync latency",
        },
      },
      {
        value: "60 FPS",
        label: {
          fr: "Taux de rafraîchissement des animations de jeu",
          en: "Game UI and animation rendering frame rate",
        },
      },
      {
        value: "100%",
        label: {
          fr: "Compatibilité et jouabilité hors-ligne",
          en: "Offline gameplay compatibility",
        },
      },
    ],
    links: {
      live: "",
      github: "",
    },
  },
  rhodium: {
    id: "rhodium",
    name: "Rhodium",
    tagline: {
      fr: "Plateforme premium de gestion d'événements et billetterie avec paiement Mobile Money en Afrique Centrale.",
      en: "Premium event management and ticketing platform tailored for Central Africa with real-time Mobile Money checkout.",
    },
    overview: {
      fr: "Rhodium est une application mobile et backend complète de billetterie et de découverte d'événements haut de gamme. Elle permet aux organisateurs d'éditer des billets, de scanner les entrées et de gérer les paiements Mobile Money (MTN, Airtel, Vodacom, Orange) dans plusieurs pays d'Afrique Centrale.",
      en: "Rhodium is a full-stack premium mobile ticketing and event discovery ecosystem. It enables event organizers to publish events, verify passes, and process real-time Mobile Money payments across Central African nations.",
    },
    problem: {
      fr: "La découvrabilité des événements et l'achat de billets en Afrique Centrale manquent de fiabilité à cause de l'hétérogénéité des opérateurs Mobile Money, de l'absence d'outils de vérification hors-ligne et d'interfaces mobiles datées.",
      en: "Event discovery and ticket sales in Central Africa suffer from high friction due to fragmented Mobile Money networks, unreliable venue connectivity, and outdated user interfaces.",
    },
    solution: {
      fr: "Une solution full-stack moderne combinant un feed vertical immersif style TikTok, un système de réconciliation de paiements multi-opérateurs par webhooks, un design système haut de gamme 'Midnight Obsidian' et le contrôle d'accès par QR code.",
      en: "A modern full-stack solution featuring a TikTok-style vertical event feed, an idempotent multi-telco payment reconciliation engine via webhooks, a bespoke 'Midnight Obsidian' design system, and QR gate verification.",
    },
    platforms: ["Android", "iOS", "Web"],
    tags: ["EVENT TICKETING", "REACT NATIVE", "NESTJS FASTIFY", "MOBILE MONEY"],
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop",
    techStack: {
      frontend: [
        "React Native 0.83",
        "Expo 55",
        "Expo Router",
        "Unistyles",
        "Legend State v3",
        "TanStack React Query v5",
        "Shopify FlashList",
        "Reanimated v4",
      ],
      backend: [
        "NestJS v11",
        "Fastify",
        "Bun Runtime",
        "TypeScript",
        "Socket.IO WebSockets",
        "Zod Schema Validation",
      ],
      database: ["PostgreSQL", "Prisma ORM v7"],
      devops: ["AWS S3", "Docker", "EAS OTA Updates", "Puppeteer PDF Engine"],
      integrations: [
        "MTN MoMo API",
        "Airtel Money API",
        "Vodacom M-Pesa",
        "Orange Money",
        "Firebase Admin Push Notifications",
        "Google & Apple Social Auth",
      ],
    },
    architectureHighlights: [
      {
        title: {
          fr: "Moteur de réconciliation de paiements Mobile Money asynchrones",
          en: "Async Multi-Region Mobile Money Reconciliation Engine",
        },
        description: {
          fr: "Architecture d'un service de paiement idempotent dans NestJS qui valide les webhooks des opérateurs telco (MTN, Airtel) et émet instantanément les billets et factures PDF.",
          en: "Idempotent payment reconciliation service built in NestJS handling async telco webhooks (MTN, Airtel) and automatically issuing tickets and PDF invoices upon state verification.",
        },
      },
      {
        title: {
          fr: "Feed d'exploration événementielle vertical à 60 FPS",
          en: "60 FPS Immersive Vertical Event Explorer",
        },
        description: {
          fr: "Conception d'un feed vertical dynamique sous FlashList et React Native Reanimated permettant le parcours fluide de cartes événementielles plein écran avec lecteur vidéo intégré.",
          en: "Built a high-performance TikTok-style full-screen swipe feed utilizing Shopify FlashList and Reanimated worklets with integrated video playback and lazy asset loading.",
        },
      },
      {
        title: {
          fr: "Design System 'Midnight Obsidian' & État Réactif",
          en: "'Midnight Obsidian' Design System & Reactive State",
        },
        description: {
          fr: "Mise en place d'une identité visuelle d'exception basée sur Unistyles et Legend State pour assurer des rendus ciblés et des effets de flou de verre d'une grande fluidité.",
          en: "Created a bespoke design system featuring glassmorphism and deep dark obsidian palettes coupled with Legend State for fine-grained component re-rendering.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Exploration & Feed de Découverte Géolocalisé",
          en: "Geo-Aware Event Discovery & Carousel Feed",
        },
        description: {
          fr: "Navigation par ville et pays avec carrousels d'événements à venir, bannières sponsorisées et catégorisation dynamique.",
          en: "City/country filter selector with upcoming carousels, promoted hero banners, and lifestyle category groupings.",
        },
        tech: ["Expo Router", "React Query", "Unistyles", "NestJS Fastify"],
      },
      {
        title: {
          fr: "Explorer Vertical Style Short-Video",
          en: "Full-Screen TikTok-Style Explorer Feed",
        },
        description: {
          fr: "Feed vertical immersif affichant le nombre de vues, système de likes, commentaires et partage avec lien profond.",
          en: "Full-screen vertical event discovery with live view counter, heart animations, comment discussions, and deep-link shares.",
        },
        tech: ["Shopify FlashList", "Expo Video", "Reanimated", "AWS S3"],
      },
      {
        title: {
          fr: "Paiement Mobile Money & Gestion des Billets",
          en: "Mobile Money Checkout & Ticket Management",
        },
        description: {
          fr: "Achat instantané via MTN MoMo ou Airtel Money, génération de billets électroniques et exportation sous forme d'image HD.",
          en: "Seamless Mobile Money ticket purchasing across multi-currency Telco providers with image/PDF export features.",
        },
        tech: ["NestJS Webhooks", "Prisma ORM", "View Shot", "Puppeteer"],
      },
      {
        title: {
          fr: "Module Scanner pour Organisateurs",
          en: "Organizer Verification Scanner Gate",
        },
        description: {
          fr: "Outil de contrôle d'accès sur le lieu de l'événement permettant aux organisateurs de scanner et valider les codes QR de manière sécurisée.",
          en: "On-site entry verification tool enabling organizers to scan and mark digital tickets as used.",
        },
        tech: ["Expo Camera", "Expo Haptics", "NestJS Guards", "WebSockets"],
      },
    ],
    metrics: [
      {
        value: "< 100ms",
        label: {
          fr: "Temps de réponse API moyen grâce à NestJS Fastify sur Bun",
          en: "Average API response latency with NestJS Fastify on Bun",
        },
      },
      {
        value: "9",
        label: {
          fr: "Opérateurs Mobile Money intégrés sur 5 pays d'Afrique Centrale",
          en: "Mobile Money provider channels across 5 Central African countries",
        },
      },
      {
        value: "60 FPS",
        label: {
          fr: "Fluidité du feed d'exploration plein écran",
          en: "Frame rate stability on vertical full-screen event feed",
        },
      },
    ],
    links: {
      live: "",
      github: "",
    },
  },
  rhopay: {
    id: "rhopay",
    name: "RhoPay",
    tagline: {
      fr: "Solution mobile de paiement et de transfert d'argent multi-opérateurs.",
      en: "Mobile payment and cross-border remittance solution.",
    },
    overview: {
      fr: "RhoPay permet l'émission de cartes virtuelles, le rechargement de compte et l'intégration directe de Mobile Money (MTN MoMo, Airtel Money).",
      en: "RhoPay enables instant card issuance, wallet top-ups, and direct integration with local Mobile Money operators (MTN MoMo, Airtel Money).",
    },
    problem: {
      fr: "Difficulté de transfert d'argent fluide entre cartes bancaires et portefeuilles Mobile Money en Afrique centrale.",
      en: "Friction in moving funds seamlessly between bank cards and local Mobile Money wallets in Central Africa.",
    },
    solution: {
      fr: "Une application mobile Flutter sécurisée connectée à des passerelles de paiement à haute disponibilité.",
      en: "A secure Flutter mobile app backed by high-availability payment routing engines.",
    },
    platforms: ["Android", "iOS"],
    tags: ["FINTECH", "MOBILE", "FLUTTER"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80&auto=format&fit=crop",
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Go", "NestJS"],
      database: ["PostgreSQL", "Redis"],
      devops: ["Docker", "AWS"],
      integrations: [
        "MTN MoMo API",
        "Airtel Money API",
        "Visa/Mastercard Issuer",
      ],
    },
    architectureHighlights: [
      {
        title: {
          fr: "Réconciliation Financière Idempotente",
          en: "Idempotency Transaction Engine",
        },
        description: {
          fr: "Élimination des risques de double débit lors de la perte de réseau mobile.",
          en: "Elimination of double-charge risks during unstable mobile network states.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Émission de Cartes et Rechargement",
          en: "Card Issuance & Wallet Top-up",
        },
        description: {
          fr: "Création instantanée de cartes virtuelles et rechargement par MoMo.",
          en: "Instant virtual card generation and MoMo wallet top-up.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          fr: "Opérateurs Mobile Money majeurs intégrés",
          en: "Major Mobile Money operators integrated",
        },
      },
    ],
    links: {
      live: "",
      github: "",
    },
  },
  sandweiler: {
    id: "sandweiler",
    name: "Sandweiler.lu",
    tagline: {
      fr: "Site web municipal officiel de la Commune de Sandweiler (Luxembourg).",
      en: "Official municipal platform for the Municipality of Sandweiler (Luxembourg).",
    },
    overview: {
      fr: "Site municipal haute-fidélité conçu pour offrir un accès rapide aux démarches administratives, actualités et services de la commune.",
      en: "High-fidelity municipal web application engineered to deliver fast access to administrative services, news, and civic information.",
    },
    problem: {
      fr: "Nécessité de moderniser l'interface publique et de faciliter la publication de contenus par l'équipe administrative.",
      en: "Need for a modern public interface and simplified content workflows for municipal staff.",
    },
    solution: {
      fr: "Architecture web moderne avec intégration CMS sur mesure et conformité d'accessibilité.",
      en: "Modern web architecture with custom CMS integration and accessible responsive layouts.",
    },
    platforms: ["Web"],
    tags: ["WEB", "CMS", "LUXEMBOURG"],
    image:
      "https://images.unsplash.com/photo-1467293622093-9f15c96be70f?w=900&q=80&auto=format&fit=crop",
    techStack: {
      frontend: ["JavaScript", "HTML5", "CSS3", "TailwindCSS"],
      backend: ["CMS Backend", "PHP/Node"],
      database: ["MySQL"],
      devops: ["Hosting Luxembourg"],
      integrations: ["Municipal APIs"],
    },
    architectureHighlights: [
      {
        title: {
          fr: "Intégration CMS Fluide",
          en: "Seamless CMS Workflow Integration",
        },
        description: {
          fr: "Mise à jour dynamique des avis officiels et publications citoyennes.",
          en: "Dynamic content delivery for public notices and municipal publications.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Portail Administratif Citoyen",
          en: "Citizen Administrative Portal",
        },
        description: {
          fr: "Accès structuré aux démarches et documents officiels.",
          en: "Structured navigation for municipal services and forms.",
        },
      },
    ],
    metrics: [
      {
        value: "100%",
        label: {
          fr: "Conformité UI/UX et accessibilité",
          en: "UI/UX fidelity and accessibility compliance",
        },
      },
    ],
    links: {
      live: "https://sandweiler.lu/",
      github: "",
    },
  },
  berdorf: {
    id: "berdorf",
    name: "Berdorf.lu",
    tagline: {
      fr: "Site web municipal officiel de la Commune de Berdorf (Luxembourg).",
      en: "Official municipal platform for the Municipality of Berdorf (Luxembourg).",
    },
    overview: {
      fr: "Plateforme municipale moderne pour la Commune de Berdorf offrant une présentation claire du patrimoine, des services administratifs et des événements.",
      en: "Modern municipal web platform for Berdorf providing a clean interface for local administration, tourism, and community announcements.",
    },
    problem: {
      fr: "Besoin d'un portail numérique rapide, élégant et facilement maintenable pour les citoyens et visiteurs.",
      en: "Requirement for a fast, elegant, and easily maintainable digital portal for citizens and visitors.",
    },
    solution: {
      fr: "Application web optimisée avec CMS personnalisé et expérience utilisateur réactive.",
      en: "Optimized web application featuring tailored CMS capabilities and dynamic UI design.",
    },
    platforms: ["Web"],
    tags: ["WEB", "CMS", "LUXEMBOURG"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80&auto=format&fit=crop",
    techStack: {
      frontend: ["JavaScript", "HTML5", "CSS3"],
      backend: ["CMS Backend"],
      database: ["MySQL"],
      devops: ["Hosting Luxembourg"],
      integrations: ["Municipal Services"],
    },
    architectureHighlights: [
      {
        title: {
          fr: "Design Responsive Haute-Fidélité",
          en: "High-Fidelity Responsive Design",
        },
        description: {
          fr: "Expérience utilisateur optimale sur mobiles, tablettes et ordinateurs.",
          en: "Optimized user experience across mobile, tablet, and desktop viewports.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Gestion Dynamique du Contenu",
          en: "Dynamic Content Management",
        },
        description: {
          fr: "Mise en ligne rapide des évènements locaux et arrêtés communaux.",
          en: "Instant publishing of municipal updates and news feeds.",
        },
      },
    ],
    metrics: [
      {
        value: "100%",
        label: {
          fr: "Haute disponibilité et intégration CMS",
          en: "High availability and CMS integration",
        },
      },
    ],
    links: {
      live: "https://berdorf.lu/",
      github: "",
    },
  },
  rhoptique: {
    id: "rhoptique",
    name: "Belle Vue RHOP",
    tagline: {
      fr: "Plateforme web et CMS headless pour cabinet d'optique, consultations visuelles et boutique de lunetterie.",
      en: "Full-stack web platform & headless CMS for optical clinic management, vision consultations, and eyewear e-commerce.",
    },
    overview: {
      fr: "Belle Vue RHOP est une solution digitale moderne développée pour un cabinet d'optique à Brazzaville. Elle combine la prise de rendez-vous en ligne, la gestion des campagnes de dépistage visuel, un catalogue de montures et verres, et un CMS headless performant.",
      en: "Belle Vue RHOP is a modern digital platform designed for an optical clinic in Brazzaville. It unifies online vision consultation booking, eye screening campaign management, interactive optical catalog, and a high-performance headless CMS.",
    },
    problem: {
      fr: "Les cabinets d'optique en Afrique centrale manquent souvent d'outils numériques pour la prise de rendez-vous en ligne, la présentation de leurs catalogues de verres/montures et la gestion des campagnes de sensibilisation visuelle.",
      en: "Optical clinics in Central Africa often lack digital tools for online consultation scheduling, digital eyewear/lens showcase, and public vision screening campaign management.",
    },
    solution: {
      fr: "Déploiement d'une application Next.js 16 couplée à Payload CMS 3.84 sur base SQLite/Turso et stockage Cloudflare R2, offrant une vitesse extrême, une administration fluide du contenu et la réservation de consultations via WhatsApp.",
      en: "Deployment of a Next.js 16 application coupled with Payload CMS 3.84 on SQLite/Turso edge DB and Cloudflare R2 storage, delivering ultra-fast loading, smooth content management, and consultation bookings integrated with WhatsApp.",
    },
    platforms: ["Web"],
    tags: ["PAYLOAD CMS 3", "NEXT.JS 16", "TURSO SQLITE", "CLOUDFLARE R2"],
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80&auto=format&fit=crop",
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TailwindCSS v4",
        "Headless UI",
        "Radix UI",
        "Shadcn UI",
        "Lucide Icons",
        "Date-fns",
      ],
      backend: [
        "Payload CMS 3.84",
        "Node.js",
        "Next.js Route Handlers",
        "GraphQL API",
        "REST API",
      ],
      database: ["SQLite", "Turso (libSQL)", "Sharp"],
      devops: [
        "Cloudflare R2",
        "Docker",
        "Docker Compose",
        "Vitest",
        "Playwright",
      ],
      integrations: [
        "Cloudflare R2 S3 API",
        "WhatsApp Business API",
        "Google Maps API",
      ],
    },
    architectureHighlights: [
      {
        title: {
          fr: "CMS Headless co-localisé avec Payload 3 & Turso",
          en: "Co-located Headless CMS via Payload 3 & Turso",
        },
        description: {
          fr: "Intégration de Payload CMS 3.84 au sein du runtime Next.js 16 avec la base SQLite/Turso edge pour des temps d'accès aux données inférieurs à 1ms sans latence API externe.",
          en: "Payload CMS 3.84 integrated directly within the Next.js 16 App Router runtime using Turso edge SQLite, eliminating external API roundtrip latency.",
        },
      },
      {
        title: {
          fr: "Stockage Cloudflare R2 et Optimisation d'images Sharp",
          en: "Cloudflare R2 Storage & Sharp Image Processing",
        },
        description: {
          fr: "Stockage d'images haute résolution pour le catalogue de montures sur Cloudflare R2 sans frais d'egress, combiné avec Sharp pour la génération de vignettes WebP à la volée.",
          en: "High-resolution optical frame catalog media stored on zero-egress Cloudflare R2 S3 storage paired with Sharp native WebP optimization.",
        },
      },
      {
        title: {
          fr: "Contrats de données typés de bout en bout",
          en: "End-to-End Type-Safe Data Contracts",
        },
        description: {
          fr: "Génération automatique des types TypeScript synchronisés entre les collections Payload CMS et les composants Next.js pour une sécurité de typage totale.",
          en: "Automated TypeScript interface generation syncing Payload CMS collections with frontend Next.js presentation components.",
        },
      },
    ],
    features: [
      {
        title: {
          fr: "Boutique & Catalogue Optique",
          en: "Eyewear & Optical Catalog",
        },
        description: {
          fr: "Exploration des montures, verres correcteurs, lentilles et accessoires avec filtres par catégorie et fiches détaillées.",
          en: "Interactive browsing of frames, prescription lenses, contact lenses, and accessories with category filtering.",
        },
        tech: ["Next.js 16", "Payload CMS", "TailwindCSS v4", "Cloudflare R2"],
      },
      {
        title: {
          fr: "Réservation de Consultations Visuelles",
          en: "Eye Examination & Consultation Booking",
        },
        description: {
          fr: "Prise de rendez-vous en ligne pour examens de vue (OD/OG) et conseils optiques avec routage vers WhatsApp.",
          en: "Online appointment scheduling for eye exams, vision assessments (OD/OG testing), and follow-ups via WhatsApp routing.",
        },
        tech: ["React 19", "Date-fns", "WhatsApp API"],
      },
      {
        title: {
          fr: "Portail des Campagnes de Dépistage",
          en: "Screening Campaign Portal",
        },
        description: {
          fr: "Présentation des campagnes publiques de santé visuelle et offres promotionnelles du cabinet.",
          en: "Dedicated landing pages for public eye screening drives and seasonal promotional optical bundles.",
        },
        tech: ["Payload CMS", "Lexical RichText", "Next.js Server Components"],
      },
      {
        title: {
          fr: "Studio d'Administration & Gestion du Cabinet",
          en: "Clinic Admin Studio & Content Management",
        },
        description: {
          fr: "Interface d'administration complète pour la gestion des services, catalogues, promotions et horaires d'ouverture.",
          en: "Comprehensive CMS admin portal for clinic operators to manage services, catalog items, promotions, and opening hours.",
        },
        tech: ["Payload CMS 3.84", "Turso libSQL", "French Localization"],
      },
    ],
    metrics: [
      {
        value: "<300ms",
        label: {
          fr: "Temps de chargement des pages rendu serveur (SSR)",
          en: "Server-side page load time (SSR)",
        },
      },
      {
        value: "100%",
        label: {
          fr: "Couverture des types TypeScript CMS & Frontend",
          en: "TypeScript end-to-end type coverage",
        },
      },
      {
        value: "0$",
        label: {
          fr: "Frais de bande passante d'images (Cloudflare R2 Zero-Egress)",
          en: "Image egress bandwidth costs (Cloudflare R2 Zero-Egress)",
        },
      },
    ],
    links: {
      live: "",
      github: "",
    },
  },
};
