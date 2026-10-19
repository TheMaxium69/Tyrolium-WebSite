import { Routes } from '@angular/router';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'Tyrolium - Holding Technologique', en: 'Tyrolium - Tech Holding Company' },
  description: { fr: "Tyrolium est une holding technologique française fondée en 2017. De la conception web à l'infrastructure cloud, nous accompagnons chaque projet avec expertise et passion. Nous développons notre propre écosystème : hébergement, gaming, CRM et réseaux sociaux. Fondé par Maxime Tournier.", en: 'Tyrolium is a French tech holding company founded in 2017. From web development to cloud infrastructure, we support every project with expertise and passion. We build our own ecosystem: hosting, gaming, CRM and social networks. Founded by Maxime Tournier.' },
};

const SEO_PROJECT: TyroUiSeo = {
  title:       { fr: 'Nos filiales', en: 'Our Subsidiaries' },
  description: { fr: "Découvrez l'écosystème de filiales piloté par Tyrolium : hébergement, gaming, CRM, compte universel et agences de créateurs.", en: 'Discover the ecosystem of subsidiaries driven by Tyrolium: hosting, gaming, CRM, universal account and creator agencies.' },
};

const SEO_CONTACT: TyroUiSeo = {
  title:       { fr: 'Contact', en: 'Contact' },
  description: { fr: "Une question, un projet, une idée ? Contactez l'équipe Tyrolium, nous vous répondons dans les meilleurs délais.", en: 'A question, a project, an idea? Contact the Tyrolium team, we will get back to you as quickly as possible.' },
};

const SEO_MEDIAKIT: TyroUiSeo = {
  title:       { fr: 'Media Kit', en: 'Media Kit' },
  description: { fr: 'Ressources visuelles officielles du groupe Tyrolium : logos, typographies, couleurs et déclinaisons par filiale.', en: 'Official visual resources of the Tyrolium group: logos, typography, colours and variations by subsidiary.' },
};

const SEO_LABS: TyroUiSeo = {
  title:       { fr: 'Labs', en: 'Labs' },
  description: { fr: "Expériences internes, outils et innovations de l'équipe technique Tyrolium, construits en interne et partagés ouvertement.", en: 'Internal experiments, tools and innovations from the Tyrolium engineering team, built in-house and shared openly.' },
};

const SEO_ETUDES: TyroUiSeo = {
  title:       { fr: 'Études de cas', en: 'Case Studies' },
  description: { fr: 'Comment Tyrolium construit, lance et fait grandir ses produits, raconté avec les chiffres, les choix et les galères.', en: 'How Tyrolium builds, launches and grows its products, told with the figures, the choices and the setbacks.' },
};

const SEO_SERVER: TyroUiSeo = {
  title:       { fr: 'Nos serveurs', en: 'Our Servers' },
  description: { fr: "Un aperçu de tous les serveurs de l'infrastructure Tyrolium / SolidServ : VPS, dédiés, internes, cloud et plus encore.", en: 'An overview of all servers in the Tyrolium / SolidServ infrastructure: VPS, dedicated, internal, cloud and more.' },
};

const SEO_PARTENAIRES: TyroUiSeo = {
  title:       { fr: 'Partenaires', en: 'Partners' },
  description: { fr: 'Les organismes, institutions et entreprises qui font confiance à Tyrolium et soutiennent son développement.', en: 'The organisations, institutions and companies that trust Tyrolium and support its development.' },
};

const SEO_CHRONOLOGIE: TyroUiSeo = {
  title:       { fr: 'Chronologie', en: 'Timeline' },
  description: { fr: "D'un serveur Minecraft moddé en 2017 à une holding technologique : l'histoire de Tyrolium à travers ses moments clés.", en: 'From a modded Minecraft server in 2017 to a tech holding: the story of Tyrolium through its key milestones.' },
};

const SEO_EQUIPE: TyroUiSeo = {
  title:       { fr: 'Équipe', en: 'Team' },
  description: { fr: 'Un fondateur, un noyau de membres historiques, des partenaires de confiance : celles et ceux qui construisent Tyrolium depuis 2017.', en: 'A founder, a core of historic members, trusted partners: the people who have been building Tyrolium since 2017.' },
};

const SEO_VISION: TyroUiSeo = {
  title:       { fr: 'Notre vision', en: 'Our Vision' },
  description: { fr: "Bâtir le géant technologique que la France n'a jamais su construire : indépendant, souverain et porté par une nouvelle génération.", en: 'Building the tech giant France never managed to build: independent, sovereign and driven by a new generation.' },
};

const SEO_RSE: TyroUiSeo = {
  title:       { fr: 'RSE', en: 'CSR' },
  description: { fr: "La technologie au service de la nation : l'engagement de Tyrolium pour une France numérique souveraine, méritocratique et responsable.", en: "Technology in service of the nation: Tyrolium's commitment to a sovereign, meritocratic and responsible digital France." },
};

const SEO_PRESTATION_WEB: TyroUiSeo = {
  title:       { fr: 'Création de sites web', en: 'Web Development' },
  description: { fr: "Du site vitrine à l'application métier, Tyrolium conçoit des expériences web modernes, performantes, accessibles et qui génèrent des leads.", en: 'From showcase sites to business applications, Tyrolium designs modern, high-performance, accessible web experiences that generate leads.' },
};

const SEO_PRESTATION_SERVER: TyroUiSeo = {
  title:       { fr: 'Hébergement', en: 'Hosting' },
  description: { fr: 'Hébergement haute disponibilité : infrastructure professionnelle, datacenter en France et supervision 24/7.', en: 'High-availability hosting: professional infrastructure, datacenter in France and 24/7 monitoring.' },
};

const SEO_PRESTATION_MINECRAFT: TyroUiSeo = {
  title:       { fr: 'Serveur Minecraft clé en main', en: 'Turnkey Minecraft Server' },
  description: { fr: 'Création, configuration et administration de serveurs Minecraft moddés ou vanilla, avec notre expérience depuis 2017 sur TyroServ.', en: 'Creation, configuration and administration of modded or vanilla Minecraft servers, backed by our experience with TyroServ since 2017.' },
};

const SEO_PRESTATION_INCUBATEUR: TyroUiSeo = {
  title:       { fr: 'Incubateur', en: 'Incubator' },
  description: { fr: 'Accompagnement, infrastructure, réseau et visibilité : tout ce dont votre idée a besoin pour devenir un produit tech viable et ambitieux.', en: 'Mentoring, infrastructure, network and visibility: everything your idea needs to become a viable and ambitious tech product.' },
};

const SEO_PRESTATION_FORMATION: TyroUiSeo = {
  title:       { fr: 'Formations', en: 'Training' },
  description: { fr: 'Formations pratiques animées par des développeurs actifs, en présentiel ou à distance, individuelles ou en groupe.', en: 'Hands-on training led by active developers, in person or remote, one-on-one or in groups.' },
};

const SEO_LEGAL_TERMS: TyroUiSeo = {
  title:       { fr: 'Mentions légales', en: 'Legal Notice' },
  description: { fr: 'Mentions légales du site Tyrolium : éditeur, hébergement, propriété intellectuelle et responsabilité.', en: 'Legal notice of the Tyrolium website: publisher, hosting, intellectual property and liability.' },
};

const SEO_LEGAL_CGU: TyroUiSeo = {
  title:       { fr: "Conditions générales d'utilisation", en: 'Terms of Use' },
  description: { fr: "Conditions générales d'utilisation des sites et services du groupe Tyrolium.", en: "Terms of use of the Tyrolium group's websites and services." },
};

const SEO_LEGAL_CGV: TyroUiSeo = {
  title:       { fr: 'Conditions générales de vente', en: 'Terms of Sale' },
  description: { fr: 'Conditions générales de vente des prestations et services du groupe Tyrolium.', en: "Terms of sale of the Tyrolium group's services." },
};

const SEO_LEGAL_PRIVACY: TyroUiSeo = {
  title:       { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
  description: { fr: 'Comment Tyrolium collecte, utilise et protège vos données personnelles, et quels sont vos droits.', en: 'How Tyrolium collects, uses and protects your personal data, and what your rights are.' },
};

// Chaque page est chargée à la demande (loadComponent) : le JS initial ne contient que le cadre du site,
// le code d'une page n'est téléchargé que quand on y va (ou préchargé en arrière-plan, voir app.config.ts)
export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), data: { seo: SEO_HOME } },
  { path: 'project', loadComponent: () => import('./pages/project/project').then(m => m.Project), data: { seo: SEO_PROJECT } },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact), data: { seo: SEO_CONTACT } },
  { path: 'mediakit', loadComponent: () => import('./pages/mediakit/mediakit').then(m => m.Mediakit), data: { seo: SEO_MEDIAKIT } },
  { path: 'labs', loadComponent: () => import('./pages/labs/labs').then(m => m.Labs), data: { seo: SEO_LABS } },
  { path: 'labs/:slug', loadComponent: () => import('./pages/labs/labs-one/labs-one').then(m => m.LabsOne) },
  { path: 'etudes-de-cas', loadComponent: () => import('./pages/etudes/etudes').then(m => m.Etudes), data: { seo: SEO_ETUDES } },
  { path: 'etudes-de-cas/:slug', loadComponent: () => import('./pages/etudes/etudes-one/etudes-one').then(m => m.EtudesOne) },
  { path: 'server', loadComponent: () => import('./pages/server/server').then(m => m.Server), data: { seo: SEO_SERVER } },
  { path: 'partenaires', loadComponent: () => import('./pages/partenaires/partenaires').then(m => m.Partenaires), data: { seo: SEO_PARTENAIRES } },
  { path: 'chronologie', loadComponent: () => import('./pages/chronologie/chronologie').then(m => m.Chronologie), data: { seo: SEO_CHRONOLOGIE } },
  { path: 'equipe', loadComponent: () => import('./pages/equipe/equipe').then(m => m.Equipe), data: { seo: SEO_EQUIPE } },
  { path: 'vision', loadComponent: () => import('./pages/vision/vision').then(m => m.Vision), data: { seo: SEO_VISION } },
  { path: 'rse', loadComponent: () => import('./pages/rse/rse').then(m => m.Rse), data: { seo: SEO_RSE } },
  {
    path: 'prestation',
    loadComponent: () => import('./pages/prestation/prestation-layout').then(m => m.PrestationLayout),
    children: [
      { path: '',           redirectTo: 'web', pathMatch: 'full' },
      { path: 'web',        loadComponent: () => import('./pages/prestation/web/prestation-web').then(m => m.PrestationWeb), data: { seo: SEO_PRESTATION_WEB } },
      { path: 'server',     loadComponent: () => import('./pages/prestation/server/prestation-server').then(m => m.PrestationServer), data: { seo: SEO_PRESTATION_SERVER } },
      { path: 'minecraft',  loadComponent: () => import('./pages/prestation/minecraft/prestation-minecraft').then(m => m.PrestationMinecraft), data: { seo: SEO_PRESTATION_MINECRAFT } },
      { path: 'incubateur', loadComponent: () => import('./pages/prestation/incubateur/prestation-incubateur').then(m => m.PrestationIncubateur), data: { seo: SEO_PRESTATION_INCUBATEUR } },
      { path: 'formation',  loadComponent: () => import('./pages/prestation/formation/prestation-formation').then(m => m.PrestationFormation), data: { seo: SEO_PRESTATION_FORMATION } },
    ],
  },
  {
    path: 'legal',
    loadComponent: () => import('./pages/legal/legal-layout').then(m => m.LegalLayout),
    children: [
      { path: '',      redirectTo: 'terms', pathMatch: 'full' },
      { path: 'terms',   loadComponent: () => import('./pages/legal/terms/legal-terms').then(m => m.LegalTerms), data: { seo: SEO_LEGAL_TERMS } },
      { path: 'cgu',    loadComponent: () => import('./pages/legal/cgu/legal-cgu').then(m => m.LegalCgu), data: { seo: SEO_LEGAL_CGU } },
      { path: 'cgv',    loadComponent: () => import('./pages/legal/cgv/legal-cgv').then(m => m.LegalCgv), data: { seo: SEO_LEGAL_CGV } },
      { path: 'privacy', loadComponent: () => import('./pages/legal/privacy/legal-privacy').then(m => m.LegalPrivacy), data: { seo: SEO_LEGAL_PRIVACY } },
    ],
  },
  ...tyroUiErrorRoutes(),
]);
