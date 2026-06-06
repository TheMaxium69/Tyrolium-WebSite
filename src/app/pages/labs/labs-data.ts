export interface Lab {
  slug: string;
  name: string;
  icon: string;
  gradient: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  longDesc: string;
  longDescEn: string;
  status: 'active' | 'beta' | 'archived' | 'concept';
  tech: string[];
  github?: string;
  link?: string;
  usedBy?: { name: string; url?: string }[];
  features: string[];
  featuresEn: string[];
}

export const LABS: Lab[] = [
  {
    slug: 'tyrositeframework',
    name: 'TyroSiteFramework',
    icon: 'ri-code-s-slash-line',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #bf0000 100%)',
    tagline: 'Micro-framework PHP sans dépendance',
    taglineEn: 'No-dependency PHP micro-framework',
    description: 'Framework minimaliste développé en interne chez Tyrolium pour créer des sites et APIs sans aucune librairie externe.',
    descriptionEn: 'Minimalist framework developed internally at Tyrolium to build sites and APIs without any external library.',
    longDesc: `TyroSiteFramework est le micro-framework PHP interne de Tyrolium, conçu pour des projets légers et rapides sans dépendance externe. Il fournit un système de routing basé sur des identifiants de page, un moteur de templating basé sur des composants .phtml, un système d'extensions modulaire et une couche API REST simple. L'objectif est de garder un contrôle total sur le code sans introduire de dépendances tierces qui peuvent évoluer ou devenir obsolètes.`,
    longDescEn: `TyroSiteFramework is Tyrolium's internal PHP micro-framework, designed for lightweight and fast projects with no external dependencies. It provides a page ID-based routing system, a .phtml component-based templating engine, a modular extension system and a simple REST API layer. The goal is to maintain full control over the code without introducing third-party dependencies that can evolve or become obsolete.`,
    status: 'archived',
    tech: ['PHP', 'MySQL', 'No-dependency'],
    github: 'https://github.com/tyrolium',
    usedBy: [
      { name: 'Tyrolium Labs', url: 'https://tyrolium.fr/labs' },
    ],
    features: [
      'Routing basé sur des IDs de page',
      'Composants PHP réutilisables (.phtml)',
      'Couche API REST intégrée',
      'Système d\'extensions modulaire',
      'Zéro dépendance externe',
      'Gestion des cookies et sessions',
    ],
    featuresEn: [
      'Page ID-based routing',
      'Reusable PHP components (.phtml)',
      'Built-in REST API layer',
      'Modular extension system',
      'Zero external dependencies',
      'Cookie and session management',
    ],
  },
  {
    slug: 'tyrolium-ui',
    name: 'Tyrolium UI',
    icon: 'ri-layout-masonry-line',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #bf0000 100%)',
    tagline: 'Bibliothèque de composants Angular partagée',
    taglineEn: 'Shared Angular component library',
    description: 'Librairie Angular interne partagée par tous les sites du groupe. Navbar universelle, Auth, CTA, Footer, thèmes et langues.',
    descriptionEn: 'Internal Angular library shared across all group sites. Universal navbar, Auth, CTA, Footer, themes and languages.',
    longDesc: `Tyrolium UI est la bibliothèque de composants Angular développée en interne et partagée entre tous les projets du groupe Tyrolium. Elle fournit la navbar universelle avec gestion des thèmes (clair/sombre/auto), des langues (FR/EN) et du menu d'applications Tyrolium, le composant CTA, le footer, la modal d'authentification Useritium, plusieurs directives utilitaires (gloss effect) et les services de thème et langue. Construite avec Angular standalone components, elle garantit une cohérence visuelle parfaite sur l'ensemble de l'écosystème.`,
    longDescEn: `Tyrolium UI is an internally developed Angular component library shared across all Tyrolium group projects. It provides the universal navbar with theme (light/dark/auto), language (FR/EN) and Tyrolium apps menu management, the CTA component, footer, Useritium authentication modal, several utility directives (gloss effect) and theme/language services. Built with Angular standalone components, it ensures perfect visual consistency across the entire ecosystem.`,
    status: 'active',
    tech: ['Angular', 'TypeScript', 'CSS'],
    usedBy: [
      { name: 'tyrolium.fr',     url: 'https://tyrolium.fr' },
      { name: 'useritium.fr',    url: 'https://useritium.fr' },
      { name: 'gamenium.fr',     url: 'https://gamenium.fr' },
      { name: 'solidserv.fr',    url: 'https://solidserv.fr' },
      { name: 'nexiumiacrm.fr',  url: 'https://nexiumiacrm.fr' },
      { name: 'influnias.fr',    url: 'https://influnias.fr' },
    ],
    features: [
      'Navbar universelle (thème, langues, apps)',
      'Composants standalone Angular',
      'CTA, Footer, Auth Modal',
      'Service de thème dark/light/auto',
      'Service de langue FR/EN',
      'Directive Gloss Effect',
    ],
    featuresEn: [
      'Universal navbar (theme, languages, apps)',
      'Angular standalone components',
      'CTA, Footer, Auth Modal',
      'Dark/light/auto theme service',
      'FR/EN language service',
      'Gloss Effect directive',
    ],
  },
  {
    slug: 'no-framework',
    name: 'No-Framework',
    icon: 'ri-forbid-line',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #bf0000 100%)',
    tagline: 'Construire sans framework, vraiment',
    taglineEn: 'Build without framework, for real',
    description: 'Expérimentation sur la construction de sites web modernes sans aucun framework. Vanilla JS, CSS natif, performance maximale.',
    descriptionEn: 'Experimentation on building modern websites without any framework. Vanilla JS, native CSS, maximum performance.',
    longDesc: `L'expérimentation No-Framework chez Tyrolium explore jusqu'où on peut aller avec uniquement les APIs natives du navigateur. Web Components, CSS custom properties, ES modules natifs, Fetch API — sans React, Angular, Vue ou tout autre abstraction. L'objectif est de comprendre ce que les frameworks nous apportent réellement, et ce qu'ils nous coûtent en performance et en complexité.`,
    longDescEn: `Tyrolium's No-Framework experiment explores how far you can go using only native browser APIs. Web Components, CSS custom properties, native ES modules, Fetch API — without React, Angular, Vue or any abstraction. The goal is to understand what frameworks actually bring us, and what they cost in performance and complexity.`,
    status: 'concept',
    tech: ['Vanilla JS', 'Web Components', 'CSS natif'],
    features: [
      'Web Components natifs',
      'Routing côté client sans librairie',
      'State management vanilla',
      'Performance lighthouse 100/100',
      'Aucune dépendance npm',
    ],
    featuresEn: [
      'Native Web Components',
      'Client-side routing without library',
      'Vanilla state management',
      'Lighthouse 100/100 performance',
      'Zero npm dependencies',
    ],
  },
  {
    slug: 'no-framework2',
    name: 'No-Framework',
    icon: 'ri-forbid-line',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #bf0000 100%)',
    tagline: 'Construire sans framework, vraiment',
    taglineEn: 'Build without framework, for real',
    description: 'Expérimentation sur la construction de sites web modernes sans aucun framework. Vanilla JS, CSS natif, performance maximale.',
    descriptionEn: 'Experimentation on building modern websites without any framework. Vanilla JS, native CSS, maximum performance.',
    longDesc: `L'expérimentation No-Framework chez Tyrolium explore jusqu'où on peut aller avec uniquement les APIs natives du navigateur. Web Components, CSS custom properties, ES modules natifs, Fetch API — sans React, Angular, Vue ou tout autre abstraction. L'objectif est de comprendre ce que les frameworks nous apportent réellement, et ce qu'ils nous coûtent en performance et en complexité.`,
    longDescEn: `Tyrolium's No-Framework experiment explores how far you can go using only native browser APIs. Web Components, CSS custom properties, native ES modules, Fetch API — without React, Angular, Vue or any abstraction. The goal is to understand what frameworks actually bring us, and what they cost in performance and complexity.`,
    status: 'beta',
    tech: ['Vanilla JS', 'Web Components', 'CSS natif'],
    features: [
      'Web Components natifs',
      'Routing côté client sans librairie',
      'State management vanilla',
      'Performance lighthouse 100/100',
      'Aucune dépendance npm',
    ],
    featuresEn: [
      'Native Web Components',
      'Client-side routing without library',
      'Vanilla state management',
      'Lighthouse 100/100 performance',
      'Zero npm dependencies',
    ],
  },
];

export function getLabBySlug(slug: string): Lab | undefined {
  return LABS.find(l => l.slug === slug);
}
