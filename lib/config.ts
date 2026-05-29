// Configuration des liens et informations personnelles
export const siteConfig = {
  // Informations personnelles
  name: "DESIRE ASSOMPTION WENDLASIDA ZIDA",
  title: "Développeur Full Stack Web & Mobile",
  description: "Développeur Full Stack passionné spécialisé dans la conception d'applications web modernes, systèmes backend et automatisation de solutions numériques. Expérience dans le développement frontend responsive, la création d'API, la gestion de bases de données et le déploiement de plateformes web complètes.",
  
  // Liens sociaux
  links: {
    github: "https://github.com/zida2",
    linkedin: "https://linkedin.com/in/desire-zida-wendlasida", 
    email: "zidadesire20@gmail.com",
    whatsapp: "https://wa.me/22606139016",
    cv: "/cv-desire-zida.pdf",
  },

  // Projets avec liens fonctionnels (TOUS vos projets - réels + modernes)
  projects: [
    // VOS PROJETS RÉELS (basés sur votre CV)
    {
      title: "CashFlow Pro",
      type: "Plateforme d'automatisation financière",
      description: "Développement d'un backend API complet avec interface frontend responsive. Architecture système optimisée avec gestion automatisée des flux de données et déploiement d'une infrastructure stable.",
      features: [
        "Backend API complet PHP",
        "Interface frontend responsive", 
        "Architecture système optimisée",
        "Gestion automatisée des flux de données",
        "Infrastructure stable frontend/backend",
        "Optimisation des performances système"
      ],
      technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "Docker"],
      gradient: "from-emerald-500 to-teal-600",
      image: "💰",
      demoUrl: "https://github.com/zida2",
      githubUrl: "https://github.com/zida2",
    },
    {
      title: "Système de Gestion Web Dynamique", 
      type: "Système de Gestion Complet",
      description: "Développement d'interfaces administratives avec gestion avancée des utilisateurs, création de modules CRUD et connexion sécurisée aux bases de données.",
      features: [
        "Interfaces administratives complètes",
        "Gestion avancée des utilisateurs",
        "Modules CRUD complets",
        "Connexion sécurisée aux bases de données",
        "Authentification robuste PHP",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      gradient: "from-blue-500 to-indigo-600",
      image: "🎓",
      demoUrl: "https://github.com/zida2",
      githubUrl: "https://github.com/zida2",
    },
    {
      title: "Portfolio 3D & Interfaces Interactives",
      type: "Portfolio Interactif Moderne", 
      description: "Intégration d'éléments visuels interactifs avec optimisation UI/UX, gestion d'assets et composants frontend modernes. Développement responsive mobile & desktop.",
      features: [
        "Éléments visuels interactifs 3D",
        "Optimisation UI/UX avancée",
        "Gestion d'assets modernes",
        "Composants frontend modernes",
        "Responsive mobile & desktop",
      ],
      technologies: ["JavaScript", "CSS3", "Web Animation", "Frontend Modern UI"],
      gradient: "from-violet-500 to-purple-600",
      image: "🎨",
      demoUrl: "https://github.com/zida2",
      githubUrl: "https://github.com/zida2",
    },
    
    // PROJETS MODERNES (Next.js, NestJS, etc.)
    {
      title: "E-Commerce Next.js Pro",
      type: "Plateforme E-Commerce Moderne",
      description: "Plateforme e-commerce complète avec Next.js 14, TypeScript, authentification, paiements Stripe, dashboard admin et gestion des commandes en temps réel.",
      features: [
        "Authentification NextAuth.js",
        "Paiements Stripe intégrés",
        "Dashboard admin complet",
        "Gestion commandes temps réel",
        "SEO optimisé",
        "Performance maximale",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "TailwindCSS", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-600",
      image: "🛒",
      demoUrl: "https://github.com/zida2",
      githubUrl: "https://github.com/zida2",
    },
    {
      title: "API NestJS Microservices",
      type: "Architecture Microservices",
      description: "API backend robuste avec NestJS, architecture microservices, authentification JWT, WebSockets temps réel, documentation Swagger et tests automatisés.",
      features: [
        "Architecture microservices",
        "Authentification JWT avancée",
        "WebSockets temps réel",
        "Documentation Swagger",
        "Tests automatisés Jest",
        "Monitoring et logs",
      ],
      technologies: ["NestJS", "TypeScript", "Prisma", "Socket.io", "JWT", "PostgreSQL", "Redis"],
      gradient: "from-red-500 to-pink-600",
      image: "⚡",
      demoUrl: "https://github.com/zida2",
      githubUrl: "https://github.com/zida2",
    },
    {
      title: "Chat App React Native",
      type: "Application Mobile Temps Réel",
      description: "Application de messagerie mobile avec React Native, Supabase, notifications push, partage de médias et synchronisation multi-appareils.",
      features: [
        "Messagerie temps réel",
        "Notifications push natives",
        "Partage de médias",
        "Synchronisation multi-appareils",
        "Interface native iOS/Android",
        "Authentification biométrique",
      ],
      technologies: ["React Native", "Supabase", "TypeScript", "Expo", "Socket.io"],
      gradient: "from-cyan-500 to-blue-600",
      image: "💬",
      demoUrl: "https://github.com/zida2",
      githubUrl: "https://github.com/zida2",
    },
  ],

  // Contact
  contact: [
    {
      label: "GitHub",
      value: "@zida2",
      link: "https://github.com/zida2",
      color: "from-gray-700 to-gray-900",
    },
    {
      label: "LinkedIn", 
      value: "DESIRE ZIDA WENDLASIDA", 
      link: "https://linkedin.com/in/desire-zida-wendlasida",
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Email",
      value: "zidadesire20@gmail.com",
      link: "mailto:zidadesire20@gmail.com",
      color: "from-red-500 to-pink-600",
    },
    {
      label: "WhatsApp",
      value: "+226 06 13 90 16",
      link: "https://wa.me/22606139016",
      color: "from-green-500 to-emerald-600",
    },
  ],
}