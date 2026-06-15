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
  version: string;
  contributors: string[];
}

export const LABS: Lab[] = [
  {
    slug: 'tyrositeframework',
    name: 'TyroSiteFramework',
    icon: 'ri-code-s-slash-line',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #bf0000 100%)',
    tagline: 'Framework PHP pour sites clients ultra-rapides',
    taglineEn: 'PHP framework for lightning-fast client websites',
    description: 'Framework PHP interne conçu pour développer des sites et applications web clients très rapidement, avec un système de composants réutilisables et des imports automatisés.',
    descriptionEn: 'Internal PHP framework designed to build client websites and web applications very quickly, with reusable components and automated imports.',
    longDesc: `TyroSiteFramework est le framework PHP interne de Tyrolium, pensé avant tout pour produire des sites et applications web clients de façon rapide et structurée. Son principe central repose sur un système de composants .phtml réutilisables avec imports automatisés, ce qui permet de construire une page entière en assemblant des briques sans configuration fastidieuse. Le routing par identifiants de page simplifie la navigation, tandis que le système d'extensions modulaire permet d'ajouter des fonctionnalités au cas par cas. Il peut également exposer des endpoints API, mais c'est le développement de sites web pour les clients de Tyrolium qui reste son usage principal. Zéro dépendance externe, contrôle total du code.`,
    longDescEn: `TyroSiteFramework is Tyrolium's internal PHP framework, designed primarily to build client websites and web applications quickly and in a structured way. Its core principle is a reusable .phtml component system with automated imports, making it possible to build a full page by assembling blocks without tedious configuration. Page ID-based routing simplifies navigation, while the modular extension system allows features to be added on a per-project basis. It can also expose API endpoints, but building websites for Tyrolium's clients remains its primary use case. Zero external dependencies, full code control.`,
    status: 'active',
    tech: ['PHP', 'MySQL', 'No-dependency'],
    github: 'https://github.com/TheMaxium69/TyroSiteFrameWork',
    usedBy: [
      { name: 'dashboard.useritium.fr', url: 'https://dashboard.useritium.fr' },
      { name: 'batirpositif.fr',  url: 'https://batirpositif.fr' },
      { name: 'cls-habitat.fr',   url: 'https://www.cls-habitat.fr/' },
      { name: 'maximetournier.fr', url: 'https://maximetournier.fr' },
      { name: 'avra-formules.fr', url: 'https://story.avra.tyrolium.fr/' },
    ],
    version: 'V2.0',
    contributors: ['Maxime Tournier'],
    features: [
      'Composants .phtml réutilisables avec imports automatisés',
      'Développement de sites clients ultra-rapide',
      'Routing basé sur des IDs de page',
      'Système d\'extensions modulaire',
      'Zéro dépendance externe',
      'Support API REST en option',
    ],
    featuresEn: [
      'Reusable .phtml components with automated imports',
      'Ultra-fast client website development',
      'Page ID-based routing',
      'Modular extension system',
      'Zero external dependencies',
      'Optional REST API support',
    ],
  },
  {
    slug: 'tyrogit',
    name: 'TyroGit Client',
    icon: 'ri-git-repository-line',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #bf0000 100%)',
    tagline: 'Client Git visuel avec intégration de thèmes',
    taglineEn: 'Visual Git client with theme integration',
    description: 'Alternative à GitHub Desktop développée en interne, avec support multi-remote, logos de dépôt personnalisés via .tyrogit et intégration des thèmes Tyrolium.',
    descriptionEn: 'An internally developed alternative to GitHub Desktop, with multi-remote support, custom repository logos via .tyrogit and Tyrolium theme integration.',
    longDesc: `TyroGit Client est le client Git de bureau de Tyrolium, conçu comme une alternative à GitHub Desktop. Il se connecte aux principaux hébergeurs Git — GitHub, GitLab et repo.tyrolium.fr — avec un support multi-remote natif sur un même dépôt. Sa particularité : la prise en charge des fichiers .tyrogit, qui permettent d'associer un logo et une identité visuelle à chaque dépôt directement dans l'interface. Construit avec Electron.js, il embarque une intégration complète des thèmes clair et sombre pour une expérience cohérente avec l'écosystème Tyrolium.`,
    longDescEn: `TyroGit Client is Tyrolium's desktop Git client, designed as an alternative to GitHub Desktop. It connects to the main Git providers — GitHub, GitLab and repo.tyrolium.fr — with native multi-remote support on a single repository. Its standout feature: .tyrogit file support, which lets you associate a logo and visual identity with each repository directly in the interface. Built with Electron.js, it includes full light and dark theme integration for an experience consistent with the Tyrolium ecosystem.`,
    status: 'beta',
    tech: ['Electron.js', 'Node.js', 'Git'],
    github: 'https://github.com/TheMaxium69/TyroGit',
    version: 'V0.1-beta',
    contributors: ['Maxime Tournier'],
    features: [
      'Interface visuelle type GitHub Desktop',
      'Logos de dépôt personnalisés via .tyrogit',
      'Support multi-remote natif',
      'Compatible GitHub, GitLab, repo.tyrolium.fr',
      'Intégration thèmes clair/sombre',
      'Gestion des dépôts locaux et distants',
    ],
    featuresEn: [
      'GitHub Desktop-style visual interface',
      'Custom repository logos via .tyrogit',
      'Native multi-remote support',
      'Compatible with GitHub, GitLab, repo.tyrolium.fr',
      'Light/dark theme integration',
      'Local and remote repository management',
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
    github: 'https://github.com/TheMaxium69/Tyrolium-UI',
    usedBy: [
      { name: 'tyrolium.fr',     url: 'https://tyrolium.fr' },
      { name: 'solidserv.fr',    url: 'https://solidserv.fr' },
      { name: 'tyroserv.fr',     url: 'https://tyroserv.fr' },
      { name: 'tyrociel.fr',     url: 'https://tyrociel.fr' },
      { name: 'gamenium.fr',     url: 'https://gamenium.fr' },
      { name: 'useritium.fr',    url: 'https://useritium.fr' },
      { name: 'nexiumiacrm.fr',  url: 'https://nexiumiacrm.fr' },
      { name: 'influnias.fr',    url: 'https://influnias.fr' },
      { name: 'vturias.fr',      url: 'https://vturias.fr' },
    ],
    version: 'V1.0',
    contributors: ['Maxime Tournier'],
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
];

export function getLabBySlug(slug: string): Lab | undefined {
  return LABS.find(l => l.slug === slug);
}
