import { SERVERS } from '../server/server';


export interface CaseItem {
  icon?: string;
  value?: string;
  valueEn?: string;
  title?: string;
  titleEn?: string;
  desc?: string;
  descEn?: string;
  pct?: number;
}

export interface CaseCompareColumn {
  name: string;
  nameEn: string;
  highlight?: boolean;
}

export interface CaseCompareRow {
  label: string;
  labelEn: string;
  values: boolean[];
}

export interface CaseBlock {
  type: 'text' | 'compare' | 'features' | 'story' | 'stats' | 'bars' | 'steps' | 'showcase' | 'testimonial' | 'voices' | 'gallery';
  label?: string;
  labelEn?: string;
  title?: string;
  titleEn?: string;
  paragraphs?: string[];
  paragraphsEn?: string[];
  items?: CaseItem[];
  columns?: CaseCompareColumn[];
  rows?: CaseCompareRow[];
  author?: string;
  authorRole?: string;
  authorRoleEn?: string;
  note?: string;
  noteEn?: string;
  /** showcase : capture et lien du site */
  image?: string;
  imageAlt?: string;
  url?: string;
  urlLabel?: string;
  /** testimonial : citation (bloc masqué tant qu'elle est vide) */
  quote?: string;
  quoteEn?: string;
  photo?: string;
  /** lien interne affiché sous le bloc */
  linkLabel?: string;
  linkLabelEn?: string;
  linkRouter?: string;
  /** voices : témoignages (audio + transcription). Bloc masqué tant que la liste est vide */
  voices?: CaseVoice[];
  /** gallery : photos (la première est affichée en grand) */
  photos?: { src: string; caption: string; captionEn?: string }[];
}

export interface CaseVoice {
  name: string;
  role: string;
  roleEn?: string;
  /** ex. 'TyroStage S2 · Human Booster' */
  tag?: string;
  tagEn?: string;
  /** false = passé par la formation sans être recruté */
  recruited?: boolean;
  photo?: string;
  /** fichier audio servi par le site, ex. 'assets/etudes/audio/kevin.mp3' */
  audio?: string;
  /** citation courte mise en avant */
  quote?: string;
  quoteEn?: string;
  /** transcription complète (dépliable) : masquée tant qu'elle est vide */
  transcript?: string;
  transcriptEn?: string;
}

export interface CaseFact {
  label: string;
  labelEn: string;
  value: string;
  valueEn?: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  /** nom avec article pour « Étude de cas sur … » dans la liste (ex. « le Cabinet Marthelot ») */
  brandFr?: string;
  logo: string;
  /** logo du partenaire (version blanche), affiché dans l'encadré « En bref » */
  partnerLogo?: string;
  /** ou logo + typo façon mediakit (« White + Typo »), affiché dans l'encadré « En bref » */
  partnerCombo?: { logo: string; group?: string; name: string };
  gradient: string;
  category: string;
  categoryEn: string;
  period: string;
  periodEn?: string;
  dataAsOf: string;
  dataAsOfEn: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  headline: CaseItem;
  heroStats: CaseItem[];
  facts: CaseFact[];
  link?: { label: string; url: string };
  blocks: CaseBlock[];
  cta: {
    title: string;
    titleEn: string;
    content: string;
    contentEn: string;
    btn: string;
    btnEn: string;
    btnIcon: string;
    routerLink: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'tyroserv',
    brand: 'TyroServ',
    logo: 'assets/tyrolium-ui/projects/TyroServ-White.png',
    partnerCombo: { logo: 'assets/tyrolium-ui/projects/TyroServ-White.png', group: 'Tyrolium', name: 'TyroServ' },
    gradient: 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)',
    category: 'Gaming · Minecraft',
    categoryEn: 'Gaming · Minecraft',
    period: '2020 – 2024',
    dataAsOf: 'septembre 2026',
    dataAsOfEn: 'September 2026',
    title: 'Le serveur Minecraft qui a financé un groupe',
    titleEn: 'The Minecraft server that funded a group',
    summary: "Comment un serveur semi-crack lancé en plein confinement a converti 21,8 % de ses joueurs, réuni 110 000 joueurs uniques et financé le démarrage de Tyrolium.",
    summaryEn: 'How a semi-crack server launched in the middle of lockdown converted 21.8% of its players, gathered 110,000 unique players and funded the start of Tyrolium.',
    headline: { value: '21,8 %', valueEn: '21.8%', title: 'de joueurs convertis', titleEn: 'of players converted' },
    heroStats: [
      { value: '110 000', valueEn: '110,000', title: 'Joueurs uniques', titleEn: 'Unique players' },
      { value: '21,8 %',  valueEn: '21.8%',   title: 'Taux de conversion', titleEn: 'Conversion rate' },
      { value: '160 k€',  valueEn: '€160k',   title: "Chiffre d'affaires 2020-2024 (environ)", titleEn: 'Revenue 2020-2024 (approx.)' },
      { value: '8 M',     valueEn: '8M',      title: 'Téléchargements du TyroMod et du launcher', titleEn: 'TyroMod and launcher downloads' },
    ],
    facts: [
      { label: 'Filiale',  labelEn: 'Subsidiary', value: 'TyroServ' },
      { label: 'Période',  labelEn: 'Period',     value: '2020 – 2024' },
      { label: 'Saisons',  labelEn: 'Seasons',    value: 'S1 · S2 · S2.5' },
      { label: 'Modèle',   labelEn: 'Model',      value: 'Freemium semi-crack' },
      { label: 'Briques',  labelEn: 'Building blocks', value: 'Launcher, TyroMod, comptes Useritium, boutique intégrée', valueEn: 'Launcher, TyroMod, Useritium accounts, built-in store' },
    ],
    link: { label: 'tyroserv.fr', url: 'https://tyroserv.fr' },
    blocks: [
      {
        type: 'text',
        label: 'Le contexte',
        labelEn: 'The context',
        title: 'Printemps 2020. Des millions de jeunes enfermés chez eux.',
        titleEn: 'Spring 2020. Millions of young people locked indoors.',
        paragraphs: [
          "Le confinement vient de tomber. Minecraft devient la cour de récré d'une génération entière. Mais pour rejoindre la plupart des grands serveurs moddés, il faut un compte officiel Mojang ou Microsoft, payant.",
          "Les serveurs premium dominent le marché, et laissent à la porte des milliers de joueurs qui n'ont pas ce compte. À l'autre extrême, les serveurs « crack » sont gratuits mais sans contrôle : pas d'identité, de la triche partout, aucune boutique sérieuse.",
          "Entre les deux, il y avait une place. Personne ne la prenait.",
        ],
        paragraphsEn: [
          'Lockdown has just been announced. Minecraft becomes the playground of an entire generation. But to join most of the big modded servers, you need an official, paid Mojang or Microsoft account.',
          'Premium servers dominate the market and leave thousands of players without that account at the door. At the other extreme, "cracked" servers are free but uncontrolled: no identity, cheating everywhere, no serious store.',
          'There was a gap in between. Nobody was taking it.',
        ],
      },
      {
        type: 'compare',
        label: 'Le pari',
        labelEn: 'The bet',
        title: 'Le semi-crack : le meilleur des deux mondes.',
        titleEn: 'Semi-crack: the best of both worlds.',
        paragraphs: [
          "« Crack », parce que TyroServ est gratuit : pas besoin d'acheter de compte Mojang ou Microsoft pour jouer.",
          "« Semi », parce que ce n'est pas un serveur ouvert à n'importe qui sans contrôle : chaque joueur se connecte avec un compte maison, via notre propre launcher. Ce système de comptes deviendra plus tard Useritium.",
        ],
        paragraphsEn: [
          '"Crack", because TyroServ is free: no need to buy a Mojang or Microsoft account to play.',
          '"Semi", because it is not a server open to anyone with no control: every player logs in with an in-house account, through our own launcher. That account system would later become Useritium.',
        ],
        columns: [
          { name: 'Serveur crack', nameEn: 'Cracked server' },
          { name: 'Serveur premium', nameEn: 'Premium server' },
          { name: 'TyroServ semi-crack', nameEn: 'TyroServ semi-crack', highlight: true },
        ],
        rows: [
          { label: 'Accès gratuit',              labelEn: 'Free access',               values: [true,  false, true] },
          { label: 'Comptes joueurs vérifiés',   labelEn: 'Verified player accounts',  values: [false, true,  true] },
          { label: 'Anti-triche sérieux',        labelEn: 'Serious anti-cheat',        values: [false, true,  true] },
          { label: 'Boutique liée au compte',    labelEn: 'Store tied to the account', values: [false, true,  true] },
        ],
      },
      {
        type: 'features',
        label: 'Ce que ça a permis',
        labelEn: 'What it made possible',
        title: 'Un serveur gratuit, mais haut de gamme.',
        titleEn: 'A free server, but a premium one.',
        paragraphs: [
          "Maîtriser les comptes, c'est maîtriser tout le reste. Le semi-crack n'était pas un raccourci : c'est ce qui nous a permis de construire un serveur du niveau des meilleurs.",
        ],
        paragraphsEn: [
          'Owning the accounts means owning everything else. Semi-crack was not a shortcut: it is what allowed us to build a server on par with the best.',
        ],
        items: [
          { icon: 'ri-shield-check-fill', title: 'Une vraie protection anti-triche', titleEn: 'Real anti-cheat protection', desc: 'Le launcher et le TyroMod sont les nôtres : on contrôle le client, pas seulement le serveur.', descEn: 'The launcher and TyroMod are ours: we control the client, not just the server.' },
          { icon: 'ri-shopping-bag-3-fill', title: 'Une boutique ultra intégrée', titleEn: 'A deeply integrated store', desc: 'Chaque achat est lié au compte du joueur et activé automatiquement en jeu.', descEn: "Every purchase is tied to the player's account and activated automatically in game." },
          { icon: 'ri-user-settings-fill', title: 'Joueur et compte ne font qu\'un', titleEn: 'Player and account as one', desc: 'Un compte, des statistiques, des sanctions qui tiennent : la gestion utilisateur et Minecraft sont reliées.', descEn: 'One account, real stats, sanctions that stick: user management and Minecraft are linked.' },
          { icon: 'ri-palette-fill', title: 'Une UX/UI soignée', titleEn: 'A polished UX/UI', desc: 'Launcher, site, maps personnalisées : une expérience pensée de bout en bout.', descEn: 'Launcher, website, custom maps: an experience designed end to end.' },
        ],
      },
      {
        type: 'story',
        label: "L'anecdote",
        labelEn: 'The anecdote',
        title: 'Un lancement en pleine guerre.',
        titleEn: 'A launch in the middle of a war.',
        paragraphs: [
          "Le 26 avril 2020, TyroServ ouvre ses portes. Une semaine plus tôt, je venais de me séparer de deux fondateurs historiques. Le serveur démarre avec une avalanche de bugs.",
          "Trois jours après l'ouverture, l'un d'eux s'introduit dans notre base de données, alors bien trop mal sécurisée, et menace de s'en servir. Il n'ira pas plus loin. La faille est corrigée dans la foulée, sans aucun impact pour les joueurs. Ce même jour, TyroServ passe les 4 000 joueurs.",
          "La fin de l'histoire ? Cet ancien fondateur travaille aujourd'hui encore pour Tyrolium. Il a fini par revenir, et il est cofondateur de SolidServ, dont il porte la stratégie.",
        ],
        paragraphsEn: [
          'On 26 April 2020, TyroServ opens its doors. A week earlier, I had just parted ways with two of the historical founders. The server launches with an avalanche of bugs.',
          'Three days after opening, one of them breaks into our database, far too poorly secured at the time, and threatens to use it. He goes no further. The flaw is fixed right away, with no impact on players. That same day, TyroServ passes 4,000 players.',
          "The end of the story? That former founder still works for Tyrolium today. He eventually came back, and he is the co-founder of SolidServ, whose strategy he leads.",
        ],
        author: 'Maxime Tournier',
        authorRole: 'PDG & Fondateur de Tyrolium, fondateur de TyroServ',
        authorRoleEn: 'CEO & Founder of Tyrolium, founder of TyroServ',
      },
      {
        type: 'stats',
        label: 'Les résultats',
        labelEn: 'The results',
        title: 'Une traction immédiate.',
        titleEn: 'Immediate traction.',
        items: [
          { value: '4 000',  valueEn: '4,000',  title: 'Joueurs uniques en 4 jours', titleEn: 'Unique players in 4 days' },
          { value: '160',    title: 'Joueurs connectés en permanence, en moyenne', titleEn: 'Players online at all times, on average' },
          { value: '10 000', valueEn: '10,000', title: 'Joueurs uniques en 5 mois', titleEn: 'Unique players in 5 months' },
          { value: '8 M',    valueEn: '8M',     title: 'Téléchargements cumulés sur CurseForge et GitHub', titleEn: 'Cumulative downloads on CurseForge and GitHub' },
        ],
        note: "Le TyroMod est rendu open-source à la fermeture de chaque saison et publié sur CurseForge et GitHub. La grande majorité de ces 8 millions de téléchargements vient de joueurs qui l'utilisent en dehors de TyroServ.",
        noteEn: 'TyroMod is made open source when each season closes and published on CurseForge and GitHub. The vast majority of these 8 million downloads come from players who use it outside TyroServ.',
      },
      {
        type: 'bars',
        label: 'Sur trois saisons',
        labelEn: 'Over three seasons',
        title: '110 000 joueurs uniques.',
        titleEn: '110,000 unique players.',
        note: "La saison 1 a duré d'avril 2020 à février 2021. Après 10 000 joueurs en 5 mois, le deuxième confinement, à partir d'octobre 2020, a fait exploser la fréquentation.",
        noteEn: 'Season 1 ran from April 2020 to February 2021. After 10,000 players in 5 months, the second lockdown, from October 2020, sent attendance soaring.',
        items: [
          { title: 'Saison 1', titleEn: 'Season 1',   pct: 38, value: '~41 800', valueEn: '~41,800' },
          { title: 'Saison 2', titleEn: 'Season 2',   pct: 40, value: '~44 000', valueEn: '~44,000' },
          { title: 'Saison 2.5', titleEn: 'Season 2.5', pct: 22, value: '~24 200', valueEn: '~24,200' },
        ],
      },
      {
        type: 'features',
        label: 'Pourquoi 21,8 %',
        labelEn: 'Why 21.8%',
        title: 'Plus d\'un joueur sur cinq est passé à la boutique.',
        titleEn: 'More than one player in five made a purchase.',
        paragraphs: [
          "Un taux rarement atteint dans le secteur. Il ne tient pas à une astuce, mais à un ensemble de choix.",
        ],
        paragraphsEn: [
          'A rate rarely reached in the industry. It is not down to one trick, but to a set of choices.',
        ],
        items: [
          { icon: 'ri-gift-fill', title: 'Le modèle freemium', titleEn: 'The freemium model', desc: "Entrer ne coûtait rien. Payer devenait un choix, pas une barrière.", descEn: 'Getting in cost nothing. Paying became a choice, not a barrier.' },
          { icon: 'ri-price-tag-3-fill', title: 'Des prix bas', titleEn: 'Low prices', desc: 'Un panier moyen autour de 5 € : un achat accessible, même pour un adolescent.', descEn: 'An average basket around €5: an affordable purchase, even for a teenager.' },
          { icon: 'ri-discord-fill', title: 'Une équipe proche', titleEn: 'A close team', desc: 'Une équipe accessible sur Discord, qui donnait envie de soutenir un petit projet.', descEn: 'A team reachable on Discord, which made people want to support a small project.' },
          { icon: 'ri-group-fill', title: 'La communauté et le Covid', titleEn: 'Community and Covid', desc: 'Un lieu de rendez-vous pendant le confinement, où les amis se retrouvaient.', descEn: 'A meeting place during lockdown, where friends got together.' },
          { icon: 'ri-refresh-fill', title: 'Une vraie continuité', titleEn: 'Real continuity', desc: "Un serveur suivi et mis à jour : ce qu'on achetait avait de la valeur dans la durée.", descEn: 'A maintained, updated server: what you bought kept its value over time.' },
          { icon: 'ri-shield-star-fill', title: 'Anti-triche et UX', titleEn: 'Anti-cheat and UX', desc: 'Un environnement propre et agréable, où on a envie de rester.', descEn: 'A clean, pleasant environment you want to stay in.' },
        ],
      },
      {
        type: 'stats',
        label: "L'argent",
        labelEn: 'The money',
        title: 'Et où il est allé.',
        titleEn: 'And where it went.',
        items: [
          { value: '160 k€', valueEn: '€160k', title: "Chiffre d'affaires cumulé de 2020 à 2024, environ", titleEn: 'Cumulative revenue from 2020 to 2024, approx.' },
          { value: '5 €',     valueEn: '€5',     title: 'Panier moyen par vente, environ', titleEn: 'Average basket per sale, approx.' },
          { value: '33 k€',   valueEn: '€33k',   title: 'En un seul mois : le record absolu de Tyrolium', titleEn: "In a single month: Tyrolium's all-time record" },
        ],
        paragraphs: [
          "Les développeurs de la première heure ont été rémunérés en pourcentage de la réussite de la saison 1 : ils ont été bien payés.",
          "Et surtout, cet argent a financé SolidServ : des serveurs achetés cash, qui ont ensuite porté la saison 2, la saison 2.5 et le démarrage de tous les projets de Tyrolium.",
        ],
        paragraphsEn: [
          'The early developers were paid a percentage of season 1\'s success: they were paid well.',
          'Above all, that money funded SolidServ: servers bought outright, which then powered season 2, season 2.5 and the start of every Tyrolium project.',
        ],
      },
      {
        type: 'features',
        label: "L'héritage",
        labelEn: 'The legacy',
        title: 'Ce que TyroServ a fait naître.',
        titleEn: 'What TyroServ gave birth to.',
        items: [
          { icon: 'ri-server-fill', title: 'SolidServ', titleEn: 'SolidServ', desc: "Grâce à TyroServ, nos serveurs ont été achetés cash au lieu d'être loués. Nous étions déjà chez OVH, en France : l'indépendance n'était pas qu'idéologique, elle est devenue économique. Des serveurs à très bas coût, qui nous permettent d'ouvrir de nombreux projets.", descEn: "Thanks to TyroServ, our servers were bought outright instead of rented. We were already with OVH, in France: independence was not only ideological, it became economic. Very low-cost servers that let us launch many projects." },
          { icon: 'ri-fingerprint-fill', title: 'Useritium', titleEn: 'Useritium', desc: 'Le système de comptes maison du semi-crack est devenu Useritium, les comptes universels de tout le groupe.', descEn: "The semi-crack's in-house account system became Useritium, the universal accounts of the whole group." },
          { icon: 'ri-tools-fill', title: 'Les prestations', titleEn: 'Our services', desc: "Le savoir-faire acquis sur TyroServ est aujourd'hui vendu aux autres serveurs Minecraft.", descEn: 'The know-how gained on TyroServ is now sold to other Minecraft servers.' },
          { icon: 'ri-restart-fill', title: 'Un serveur prêt à repartir', titleEn: 'A server ready to relaunch', desc: "Infrastructure, outils, équipe : aujourd'hui, relancer TyroServ ne nous coûte presque plus rien.", descEn: 'Infrastructure, tools, team: today, relaunching TyroServ costs us almost nothing.' },
        ],
      },
      {
        type: 'features',
        label: 'Les leçons',
        labelEn: 'The lessons',
        title: 'Ce que nous en retenons.',
        titleEn: 'What we take away.',
        items: [
          { icon: 'ri-lightbulb-flash-fill', title: 'Le gratuit bien fait vend', titleEn: 'Free done right sells', desc: "Ouvrir les portes n'empêche pas de vendre. Ça multiplie ceux qui peuvent acheter.", descEn: 'Opening the doors does not stop you selling. It multiplies the people who can buy.' },
          { icon: 'ri-hand-heart-fill', title: 'La proximité est un avantage', titleEn: 'Closeness is an advantage', desc: 'Une équipe accessible crée une communauté qui a envie de vous voir réussir.', descEn: 'An accessible team builds a community that wants to see you succeed.' },
          { icon: 'ri-key-2-fill', title: 'Posséder, plutôt que louer', titleEn: 'Own, rather than rent', desc: "Comptes, launcher, serveurs : tout ce que l'on possède, on le contrôle et on le rentabilise.", descEn: 'Accounts, launcher, servers: whatever you own, you control and make pay off.' },
        ],
      },
    ],
    cta: {
      title: 'Vous lancez un serveur Minecraft ?',
      titleEn: 'Launching a Minecraft server?',
      content: "Tout ce que nous avons appris sur TyroServ, nous le mettons au service de votre projet : infrastructure, launcher, boutique, communauté.",
      contentEn: 'Everything we learned on TyroServ, we put to work for your project: infrastructure, launcher, store, community.',
      btn: 'Découvrir nos prestations Minecraft',
      btnEn: 'Discover our Minecraft services',
      btnIcon: 'ri-sword-line',
      routerLink: '/prestation/minecraft',
    },
  },
  {
    slug: 'cabinet-marthelot',
    brand: 'Cabinet Marthelot',
    brandFr: 'le Cabinet Marthelot',
    logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png',
    partnerLogo: 'assets/etudes/cabinet-marthelot-white.png',
    gradient: 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)',
    category: 'Web · Partenariat',
    categoryEn: 'Web · Partnership',
    period: 'Depuis juillet 2026',
    periodEn: 'Since July 2026',
    dataAsOf: 'octobre 2026',
    dataAsOfEn: 'October 2026',
    title: 'Un site pro offert, financé par l\'hébergement',
    titleEn: 'A professional website, paid for by hosting',
    summary: "Avec le Cabinet Marthelot, nous offrons à des artisans, indépendants et TPE un site vitrine développé par nos équipes, sans coût de création : seul l'hébergement est payant, en abonnement.",
    summaryEn: 'With Cabinet Marthelot, we give craftspeople, freelancers and small businesses a showcase website built by our team, with no build cost: only the hosting is paid, as a subscription.',
    headline: { value: '0 €', valueEn: '€0', title: 'de création facturée au client', titleEn: 'build cost for the client' },
    heroStats: [
      { value: '0 €',    valueEn: '€0',    title: 'Création du site facturée', titleEn: 'Website build cost' },
      { value: '7 jours', valueEn: '7 days', title: 'Délai de livraison maximum', titleEn: 'Maximum delivery time' },
      { value: '.fr',    title: 'Uniquement des domaines français', titleEn: 'French domains only' },
      { value: '4',      title: 'Entreprises déjà équipées', titleEn: 'Businesses already equipped' },
    ],
    facts: [
      { label: 'Partenaire', labelEn: 'Partner', value: 'Cabinet Marthelot' },
      { label: 'Pour qui', labelEn: 'For whom', value: 'Professions libérales, artisans, auto-entrepreneurs, TPE et PME', valueEn: 'Liberal professions, craftspeople, sole traders, small businesses' },
      { label: 'Offre', labelEn: 'Offer', value: 'Site vitrine offert + hébergement SolidServ', valueEn: 'Free showcase website + SolidServ hosting' },
      { label: 'Délai', labelEn: 'Delivery', value: '5 à 7 jours', valueEn: '5 to 7 days' },
      { label: 'Domaines', labelEn: 'Domains', value: '.fr uniquement', valueEn: '.fr only' },
      { label: 'Depuis', labelEn: 'Since', value: 'Juillet 2026', valueEn: 'July 2026' },
    ],
    link: { label: 'fernando-paysagiste.fr', url: 'https://fernando-paysagiste.fr' },
    blocks: [
      {
        type: 'text',
        label: 'Le constat',
        labelEn: 'The problem',
        title: 'Un site coûte cher, surtout quand on se lance.',
        titleEn: 'A website is expensive, especially when you are starting out.',
        paragraphs: [
          "Un artisan, un paysagiste, une profession libérale : tous ont besoin d'être trouvés en ligne. Mais un site réalisé par des professionnels se paie entre 450 et 1 200 €, d'un coup, au moment même où chaque euro compte.",
          "Résultat : beaucoup s'en passent, ou bricolent un site qui ne leur ressemble pas. Ils perdent des clients sans le savoir.",
        ],
        paragraphsEn: [
          'A craftsperson, a landscaper, a liberal professional: they all need to be found online. But a professionally built website costs between €450 and €1,200, all at once, at the very moment every euro counts.',
          'The result: many go without, or cobble together a site that does not look like them. They lose customers without knowing it.',
        ],
      },
      {
        type: 'steps',
        label: 'Le modèle',
        labelEn: 'The model',
        title: 'Le site est offert. L\'hébergement fait tourner le modèle.',
        titleEn: 'The website is free. Hosting keeps the model running.',
        items: [
          { title: 'Le client rejoint le Cabinet Marthelot', titleEn: 'The client joins Cabinet Marthelot', desc: "Il choisit l'option site web dans l'offre d'accompagnement du cabinet.", descEn: "They pick the website option in the firm's support package." },
          { title: 'Le premier mois est réglé', titleEn: 'The first month is paid', desc: 'Dès réception, notre équipe lance le développement.', descEn: 'As soon as it is received, our team starts building.' },
          { title: 'Le site est livré en 5 à 7 jours', titleEn: 'The site is delivered in 5 to 7 days', desc: 'Design sur mesure, domaine en .fr, hébergé sur les serveurs SolidServ en France.', descEn: 'Custom design, .fr domain, hosted on SolidServ servers in France.' },
          { title: 'Le site vit avec l\'abonnement', titleEn: 'The site lives with the subscription', desc: "Tant que l'abonnement court, le site reste en ligne et maintenu. S'il s'arrête, le site est coupé après un délai d'une semaine.", descEn: 'As long as the subscription runs, the site stays online and maintained. If it stops, the site is taken down after a one-week grace period.' },
        ],
        note: 'La facturation passe par le cabinet : client final → Cabinet Marthelot → Tyrolium. Le cabinet fixe librement son prix, Tyrolium se rémunère sur l\'hébergement.',
        noteEn: 'Billing goes through the firm: end client → Cabinet Marthelot → Tyrolium. The firm sets its own price; Tyrolium is paid through hosting.',
      },
      {
        type: 'text',
        label: 'Pourquoi on peut l\'offrir',
        labelEn: 'Why we can offer it',
        title: 'Parce que nous possédons nos serveurs.',
        titleEn: 'Because we own our servers.',
        paragraphs: [
          "Grâce à TyroServ, SolidServ a acheté ses machines au lieu de les louer. Héberger un site vitrine de plus ne nous coûte presque rien.",
          "Un hébergeur qui loue ses serveurs ne peut pas offrir le développement : chaque site lui coûte chaque mois. Nous, l'abonnement rembourse la création sur la durée, puis devient un revenu récurrent. C'est un modèle que seule une infrastructure maîtrisée rend possible.",
        ],
        paragraphsEn: [
          'Thanks to TyroServ, SolidServ bought its machines instead of renting them. Hosting one more showcase site costs us almost nothing.',
          'A host that rents its servers cannot give away the build: every site costs it money every month. For us, the subscription pays back the build over time, then becomes recurring revenue. It is a model only an infrastructure you control makes possible.',
        ],
        linkLabel: 'Lire l\'étude de cas TyroServ',
        linkLabelEn: 'Read the TyroServ case study',
        linkRouter: '/etudes-de-cas/tyroserv',
      },
      {
        type: 'compare',
        label: 'Pour le client',
        labelEn: 'For the client',
        paragraphs: [
          "Sans budget, beaucoup se tournent vers un site fait soi-même : pas de coût de création, mais un modèle générique, des heures perdues, et des mises à jour, de la sécurité et des extensions à gérer seul. Le site finit souvent à l'abandon.",
        ],
        paragraphsEn: [
          'Without a budget, many turn to a do-it-yourself site: no build cost, but a generic template, hours lost, and updates, security and plugins to manage alone. The site often ends up abandoned.',
        ],
        title: 'Trois façons d\'avoir un site.',
        titleEn: 'Three ways to get a website.',
        columns: [
          { name: 'Site fait soi-même (WordPress, Wix…)', nameEn: 'DIY website (WordPress, Wix…)' },
          { name: 'Site sur devis (450 à 1 200 €)', nameEn: 'Quoted website (€450 to €1,200)' },
          { name: 'Site offert (partenariat)', nameEn: 'Free website (partnership)', highlight: true },
        ],
        rows: [
          { label: 'Aucun coût de création', labelEn: 'No build cost', values: [true, false, true] },
          { label: 'Réalisé par des développeurs professionnels', labelEn: 'Built by professional developers', values: [false, true, true] },
          { label: 'Design sur mesure', labelEn: 'Custom design', values: [false, true, true] },
          { label: 'Hébergement et maintenance compris', labelEn: 'Hosting and maintenance included', values: [false, false, true] },
        ],
      },
      {
        type: 'features',
        label: 'Le cadre',
        labelEn: 'The scope',
        title: 'Simple, par choix.',
        titleEn: 'Simple, by design.',
        paragraphs: [
          "Pour livrer en moins d'une semaine sans rien facturer à la création, le périmètre est volontairement clair : des sites vitrines, sans back-office complexe.",
        ],
        paragraphsEn: [
          'To deliver in under a week without charging for the build, the scope is deliberately clear: showcase websites, with no complex back office.',
        ],
        items: [
          { icon: 'ri-palette-fill', title: 'Un design sur mesure', titleEn: 'A custom design', desc: "Une interface pensée pour le métier du client, pas un modèle générique.", descEn: "An interface designed for the client's trade, not a generic template." },
          { icon: 'ri-links-fill', title: 'Liens et redirections', titleEn: 'Links and redirects', desc: 'Réseaux sociaux, téléphone, avis, prise de rendez-vous.', descEn: 'Social networks, phone, reviews, bookings.' },
          { icon: 'ri-mail-send-fill', title: 'Un formulaire de contact', titleEn: 'A contact form', desc: 'Pour recevoir les demandes de devis, sans développement complexe.', descEn: 'To receive quote requests, without complex development.' },
          { icon: 'ri-flag-2-fill', title: 'Un domaine en .fr', titleEn: 'A .fr domain', desc: 'Uniquement des domaines français, hébergés en France.', descEn: 'French domains only, hosted in France.' },
        ],
      },
      {
        type: 'showcase',
        label: 'Réalisation',
        labelEn: 'Showcase',
        title: 'Fernando Paysagiste.',
        titleEn: 'Fernando Paysagiste.',
        paragraphs: [
          "Auto-entreprise de proximité spécialisée dans la création et l'entretien d'espaces verts, sur le secteur de Nancy et ses alentours. Le site met en avant les services et les chantiers réalisés, et permet de demander un devis en deux clics.",
        ],
        paragraphsEn: [
          'A local sole-trader business specialising in creating and maintaining green spaces, in and around Nancy. The site showcases services and completed projects, and lets visitors request a quote in two clicks.',
        ],
        image: 'assets/etudes/fernando-paysagiste.jpg',
        imageAlt: "Page d'accueil du site fernando-paysagiste.fr",
        url: 'https://fernando-paysagiste.fr',
        urlLabel: 'fernando-paysagiste.fr',
      },
      {
        type: 'testimonial',
        quote: "Après ces quelques jours de boulot, le rendu est vraiment propre. L'offre est claire, les chantiers sont mis en valeur, et si un client veut un devis, il nous trouve en deux clics. C'est pro, c'est efficace, exactement ce qu'il nous fallait. Merci au Cabinet Marthelot et à sa collaboration avec Tyrolium pour ce site vitrine qui a su représenter mon domaine et mon entreprise !",
        quoteEn: "After just a few days of work, the result is really clean. The offer is clear, our projects are showcased, and if a customer wants a quote, they find us in two clicks. It's professional, it's effective, exactly what we needed. Thanks to Cabinet Marthelot and its partnership with Tyrolium for this showcase website, which truly represents my trade and my business!",
        author: 'Fernando',
        authorRole: 'Fernando Paysagiste, Nancy et alentours',
        authorRoleEn: 'Fernando Paysagiste, Nancy area · translated from French',
      },
      {
        type: 'story',
        label: "L'anecdote",
        labelEn: 'The anecdote',
        title: 'Un partenaire qui vient de la maison.',
        titleEn: 'A partner who grew up with us.',
        paragraphs: [
          "Avant le Cabinet Marthelot, il y avait MA3WAN : la chaîne YouTube de Maëwan, son tout premier projet. Puis il a rejoint Tyrolium, et il y est resté des années.",
          "Chez nous, il a cofondé Influnias, toujours active aujourd'hui, et Duo-Gramme, une ancienne filiale du groupe. Surtout, il a porté une grande partie de la communication de Tyrolium et de sa stratégie.",
          "Quand il a fondé sa propre société pour accompagner les entrepreneurs, travailler ensemble était une évidence. Lui connaît ses clients et leur métier, nous savons construire et héberger leur site : chacun fait ce qu'il sait faire de mieux.",
        ],
        paragraphsEn: [
          "Before Cabinet Marthelot, there was MA3WAN: Maëwan's YouTube channel, his very first project. Then he joined Tyrolium, and stayed for years.",
          'With us, he co-founded Influnias, still active today, and Duo-Gramme, a former subsidiary of the group. Above all, he drove a large part of Tyrolium\'s communication and strategy.',
          'When he founded his own company to support entrepreneurs, working together was obvious. He knows his clients and their trades; we know how to build and host their website: everyone does what they do best.',
        ],
        author: 'Maxime Tournier',
        authorRole: 'PDG & Fondateur de Tyrolium',
        authorRoleEn: 'CEO & Founder of Tyrolium',
      },
      {
        // À compléter : coller ici le témoignage de Maëwan (le bloc reste masqué tant que "quote" est vide)
        type: 'testimonial',
        quote: '',
        quoteEn: '',
        author: 'Maëwan Marthelot',
        authorRole: 'Président du Cabinet Marthelot',
        authorRoleEn: 'President of Cabinet Marthelot',
        photo: 'assets/teams/Maewan_Marthelot.jpg',
      },
      {
        type: 'features',
        label: 'Gagnant-gagnant',
        labelEn: 'Win-win',
        title: 'Trois gagnants, zéro perdant.',
        titleEn: 'Three winners, no losers.',
        items: [
          { icon: 'ri-store-2-fill', title: 'Le client', titleEn: 'The client', desc: 'Un site professionnel, sans avancer le prix de la création, hébergé et maintenu.', descEn: 'A professional website, without paying for the build upfront, hosted and maintained.' },
          { icon: 'ri-briefcase-4-fill', title: 'Le cabinet', titleEn: 'The firm', desc: "Une offre d'accompagnement plus complète, avec un vrai site intégré à la formule.", descEn: 'A more complete support package, with a real website built into it.' },
          { icon: 'ri-server-fill', title: 'Tyrolium', titleEn: 'Tyrolium', desc: 'Des clients apportés par le cabinet, un revenu récurrent et des serveurs rentabilisés.', descEn: 'Clients brought in by the firm, recurring revenue and servers that pay for themselves.' },
        ],
      },
      {
        type: 'features',
        label: 'Les leçons',
        labelEn: 'The lessons',
        title: 'Ce que nous en retenons.',
        titleEn: 'What we take away.',
        items: [
          { icon: 'ri-door-open-fill', title: 'Le prix d\'entrée est le premier frein', titleEn: 'The entry price is the first barrier', desc: 'Supprimer le coût de départ change tout pour un entrepreneur qui se lance.', descEn: 'Removing the upfront cost changes everything for an entrepreneur starting out.' },
          { icon: 'ri-team-fill', title: 'Un bon partenaire vaut une équipe commerciale', titleEn: 'A good partner is worth a sales team', desc: 'Le cabinet connaît ses clients et leur confiance lui appartient : nous nous concentrons sur la technique.', descEn: 'The firm knows its clients and owns their trust: we focus on the technology.' },
          { icon: 'ri-key-2-fill', title: 'Posséder son infrastructure ouvre des modèles', titleEn: 'Owning your infrastructure unlocks models', desc: 'Offrir le développement n\'est possible que parce que nos serveurs nous appartiennent.', descEn: 'Giving away the build is only possible because we own our servers.' },
        ],
      },
    ],
    cta: {
      title: 'Vous accompagnez des entrepreneurs ?',
      titleEn: 'Do you support entrepreneurs?',
      content: "Cabinet de conseil, expert-comptable, réseau d'indépendants : proposez un site professionnel à vos clients, sans rien développer vous-même.",
      contentEn: 'Consulting firm, accountant, network of freelancers: offer your clients a professional website, without building anything yourself.',
      btn: 'Devenir partenaire',
      btnEn: 'Become a partner',
      btnIcon: 'ri-shake-hands-line',
      routerLink: '/contact',
    },
  },
  {
    slug: 'tyrostage',
    brand: 'TyroStage',
    logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png',
    partnerCombo: { logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png', name: 'Tyrolium' },
    gradient: 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)',
    category: 'Recrutement · Formation',
    categoryEn: 'Recruitment · Training',
    period: 'Saisons 1 à 6',
    periodEn: 'Seasons 1 to 6',
    dataAsOf: 'septembre 2026',
    dataAsOfEn: 'September 2026',
    title: 'Nous ne lisons pas les CV. Nous regardons les gens travailler.',
    titleEn: 'We don\'t read CVs. We watch people work.',
    summary: "TyroStage, c'est notre méthode de recrutement : repérer les talents pendant nos formations en école, sur des semaines de pratique réelle, plutôt que sur un CV et un entretien d'une heure.",
    summaryEn: 'TyroStage is our recruitment method: spotting talent during our school training sessions, over weeks of real practice, rather than from a CV and a one-hour interview.',
    headline: { value: '19', title: 'stagiaires formés sur 6 saisons', titleEn: 'interns trained over 6 seasons' },
    heroStats: [
      { value: '6',   title: 'Saisons TyroStage', titleEn: 'TyroStage seasons' },
      { value: '19',  title: 'Stagiaires accueillis', titleEn: 'Interns welcomed' },
      { value: '2',   title: 'Écoles partenaires', titleEn: 'Partner schools' },
      { value: '0',   title: 'Recrutement sur la base du diplôme', titleEn: 'Hires based on a diploma' },
    ],
    facts: [
      { label: 'Programme', labelEn: 'Programme', value: 'TyroStage' },
      { label: 'Écoles', labelEn: 'Schools', value: 'Human Booster, IPSSI' },
      { label: 'Format', labelEn: 'Format', value: 'Formation en école, puis stage en groupe', valueEn: 'School training, then group internship' },
      { label: 'Par saison', labelEn: 'Per season', value: '3 à 5 stagiaires, souvent un groupe d\'amis', valueEn: '3 to 5 interns, often a group of friends' },
      { label: 'Critère n°1', labelEn: 'Criterion #1', value: 'La soif d\'apprendre', valueEn: 'Hunger to learn' },
    ],
    blocks: [
      {
        type: 'text',
        label: 'Le constat',
        labelEn: 'The problem',
        title: 'Un CV dit ce qu\'on a fait. Pas ce qu\'on vaut.',
        titleEn: 'A CV says what you have done. Not what you are worth.',
        paragraphs: [
          "Dans la tech, le diplôme certifie un parcours. Il ne garantit ni la passion, ni la résilience face à un problème qui résiste. Et un entretien d'une heure en dit encore moins : on y juge surtout la capacité à bien parler de soi.",
          "Nous avons pris le problème à l'envers. Plutôt que de lire des CV, nous observons des gens travailler, pendant des semaines, sur de vrais problèmes.",
        ],
        paragraphsEn: [
          'In tech, a diploma certifies a path. It guarantees neither passion nor resilience against a problem that will not give in. And a one-hour interview says even less: it mostly judges how well someone talks about themselves.',
          'We flipped the problem. Instead of reading CVs, we watch people work, for weeks, on real problems.',
        ],
      },
      {
        type: 'features',
        label: 'Le terrain',
        labelEn: 'The ground',
        title: 'La formation comme une vraie entreprise.',
        titleEn: 'Training run like a real company.',
        paragraphs: [
          "Le fondateur de Tyrolium est aussi formateur en développement et en administration système dans des écoles supérieures. Ses cours ne sont pas de la théorie : chaque promotion fonctionne comme une mini-entreprise, avec des clients, des responsabilités et un patron, le formateur.",
        ],
        paragraphsEn: [
          "Tyrolium's founder is also a trainer in development and system administration at higher-education schools. His courses are not theory: each class runs as a mini-company, with clients, responsibilities and a boss, the trainer.",
        ],
        items: [
          { icon: 'ri-stack-fill', title: 'Des produits réels', titleEn: 'Real products', desc: "Les exercices reprennent des produits que nous avons développés. Une fois l'exercice rendu, on montre la version sortie par Tyrolium.", descEn: 'Exercises are based on products we have built. Once the exercise is handed in, we show the version Tyrolium actually shipped.' },
          { icon: 'ri-timer-flash-fill', title: 'Des délais serrés', titleEn: 'Tight deadlines', desc: "Des échéances parfois difficiles à tenir, comme sur le terrain. C'est sous la pression qu'on voit vraiment les gens.", descEn: 'Deadlines that are sometimes hard to meet, like in the field. Pressure is where you really see people.' },
          { icon: 'ri-user-voice-fill', title: 'Un client à convaincre', titleEn: 'A client to convince', desc: 'À chaque présentation de projet, le formateur joue le rôle du client : exigences, retours, changements de dernière minute.', descEn: 'At every project presentation, the trainer plays the client: demands, feedback, last-minute changes.' },
          { icon: 'ri-eye-fill', title: 'Des semaines d\'observation', titleEn: 'Weeks of observation', desc: "Là où un entretien dure une heure, la formation montre chacun pendant des semaines : code, déploiement, débogage, travail d'équipe.", descEn: 'Where an interview lasts an hour, training shows everyone for weeks: code, deployment, debugging, teamwork.' },
        ],
      },
      {
        type: 'steps',
        label: 'La méthode',
        labelEn: 'The method',
        title: 'Du cours au contrat, en cinq étapes.',
        titleEn: 'From class to contract, in five steps.',
        items: [
          { title: 'Comprendre chaque objectif', titleEn: 'Understand each goal', desc: "Dès le début, le formateur demande à chacun ce qu'il vise. Ça sert à adapter la pédagogie, et à repérer les projets qui rejoignent ceux de Tyrolium.", descEn: "From day one, the trainer asks everyone what they are aiming for. It helps tailor the teaching, and spot goals that align with Tyrolium's." },
          { title: 'Observer en situation réelle', titleEn: 'Observe in real conditions', desc: 'Pendant toute la formation : la curiosité, la logique, la résilience, et la façon de traiter les autres.', descEn: 'Throughout the training: curiosity, logic, resilience, and how people treat others.' },
          { title: 'Former un groupe', titleEn: 'Build a group', desc: "Après l'intervention, 3 à 5 personnes d'une promotion de 15 à 30 rejoignent l'aventure, souvent un groupe d'amis. La proposition vient de nous, ou d'un étudiant qui ose demander.", descEn: 'After the course, 3 to 5 people from a class of 15 to 30 join the adventure, often a group of friends. The offer comes from us, or from a student bold enough to ask.' },
          { title: 'Une saison TyroStage', titleEn: 'A TyroStage season', desc: "Chaque groupe forme une saison : plusieurs mois de stage sur les vrais projets du groupe, encadrés par le fondateur, qui leur permettent de valider leur diplôme.", descEn: "Each group becomes a season: several months of internship on the group's real projects, supervised by the founder, which let them complete their degree." },
          { title: 'Recruter, ou lancer', titleEn: 'Hire, or launch', desc: "À la fin, on garde généralement une personne, rarement deux, selon la suite de leurs études et leur envie de start-up. D'autres lancent leur activité, accompagnés par Tyrolium.", descEn: 'At the end, we usually keep one person, rarely two, depending on their further studies and appetite for a start-up. Others launch their own business, supported by Tyrolium.' },
        ],
      },
      {
        type: 'features',
        label: 'Ce que nous cherchons',
        labelEn: 'What we look for',
        title: 'La soif avant le niveau.',
        titleEn: 'Hunger before skill level.',
        paragraphs: [
          "Nous ne cherchons pas des brutes techniques. La technique, nous savons la transmettre : nous le faisons à chaque saison. Ce qui ne s'apprend pas, c'est le reste.",
        ],
        paragraphsEn: [
          'We are not looking for technical prodigies. Technique is something we know how to teach: we do it every season. What cannot be taught is everything else.',
        ],
        items: [
          { icon: 'ri-fire-fill', title: 'La soif', titleEn: 'Hunger', desc: "L'envie d'apprendre, de comprendre, d'aller plus loin que ce qu'on demande.", descEn: 'The drive to learn, to understand, to go further than what is asked.' },
          { icon: 'ri-bug-fill', title: 'La résilience', titleEn: 'Resilience', desc: 'Être capable de passer huit heures d\'affilée sur le même bug, sans lâcher.', descEn: 'Being able to spend eight hours straight on the same bug, without giving up.' },
          { icon: 'ri-heart-3-fill', title: 'La bienveillance', titleEn: 'Kindness', desc: 'Aider les autres, respecter l\'équipe. Non négociable.', descEn: 'Helping others, respecting the team. Non-negotiable.' },
          { icon: 'ri-gamepad-fill', title: 'La passion', titleEn: 'Passion', desc: 'Une culture geek sincère. La tech comme passion, pas comme simple emploi.', descEn: 'A genuine geek culture. Tech as a passion, not just a job.' },
          { icon: 'ri-compass-3-fill', title: 'Une vision commune', titleEn: 'A shared vision', desc: 'Partager notre façon de voir la technologie, et l\'envie d\'une structure à taille humaine plutôt qu\'un grand groupe.', descEn: 'Sharing our view of technology, and wanting a human-sized company rather than a large corporation.' },
          { icon: 'ri-history-fill', title: 'Le respect de l\'histoire', titleEn: 'Respect for our history', desc: 'Comprendre d\'où vient Tyrolium, et ce que Minecraft représente pour nous.', descEn: 'Understanding where Tyrolium comes from, and what Minecraft means to us.' },
        ],
      },
      {
        type: 'compare',
        label: 'La différence',
        labelEn: 'The difference',
        title: 'CV et entretien, ou TyroStage.',
        titleEn: 'CV and interview, or TyroStage.',
        columns: [
          { name: 'CV et entretien', nameEn: 'CV and interview' },
          { name: 'TyroStage', nameEn: 'TyroStage', highlight: true },
        ],
        rows: [
          { label: 'Observation sur plusieurs semaines', labelEn: 'Observation over several weeks', values: [false, true] },
          { label: 'Compétences vues en situation réelle', labelEn: 'Skills seen in real situations', values: [false, true] },
          { label: 'Comportement sous pression', labelEn: 'Behaviour under pressure', values: [false, true] },
          { label: 'Travail en équipe observé', labelEn: 'Teamwork observed', values: [false, true] },
          { label: 'Accessible sans diplôme prestigieux', labelEn: 'Open without a prestigious degree', values: [false, true] },
        ],
      },
      {
        type: 'stats',
        label: 'Les saisons',
        labelEn: 'The seasons',
        title: 'Six saisons, deux écoles.',
        titleEn: 'Six seasons, two schools.',
        items: [
          { value: 'S1', title: '3 stagiaires · Human Booster', titleEn: '3 interns · Human Booster' },
          { value: 'S2', title: '4 stagiaires · Human Booster', titleEn: '4 interns · Human Booster' },
          { value: 'S3', title: '1 stagiaire · Human Booster', titleEn: '1 intern · Human Booster' },
          { value: 'S4', title: '3 stagiaires · Human Booster', titleEn: '3 interns · Human Booster' },
          { value: 'S5', title: '5 stagiaires · Human Booster', titleEn: '5 interns · Human Booster' },
          { value: 'S6', title: '4 stagiaires · IPSSI', titleEn: '4 interns · IPSSI' },
        ],
        note: '19 stagiaires au total : une personne a fait deux saisons, en S3 puis en S5.',
        noteEn: '19 interns in total: one person did two seasons, S3 then S5.',
      },
      {
        type: 'features',
        label: 'Et après',
        labelEn: 'What came next',
        title: 'Où ils en sont aujourd\'hui.',
        titleEn: 'Where they are today.',
        paragraphs: [
          "Recruter n'est pas le seul résultat. Chaque saison forme 3 à 5 personnes et leur permet de valider leur diplôme, qu'elles restent chez nous ou non.",
        ],
        paragraphsEn: [
          'Hiring is not the only outcome. Each season trains 3 to 5 people and lets them complete their degree, whether they stay with us or not.',
        ],
        items: [
          { icon: 'ri-code-s-slash-fill', title: 'Kevin · Saison 2', titleEn: 'Kevin · Season 2', desc: "Développeur web et Minecraft chez Tyrolium de 2023 à 2024. Et, au fil des années, un ami.", descEn: 'Web and Minecraft developer at Tyrolium from 2023 to 2024. And, over the years, a friend.' },
          { icon: 'ri-gamepad-fill', title: 'Mathys · Saison 6', titleEn: 'Mathys · Season 6', desc: "Réalisateur de Rhodotales, le jeu de TyroCiel. Il a fondé son propre studio, partenaire de TyroCiel.", descEn: "Director of Rhodotales, TyroCiel's game. He founded his own studio, a TyroCiel partner." },
          { icon: 'ri-rocket-2-fill', title: 'Adèle · Saison 5', titleEn: 'Adèle · Season 5', desc: 'Freelance. Nous lui avons transmis tout ce que nous savons, puis accompagnée dans le lancement de son activité.', descEn: 'Freelancer. We passed on everything we know, then supported her in launching her business.' },
          { icon: 'ri-building-4-fill', title: 'Marilyne · Saison 1', titleEn: 'Marilyne · Season 1', desc: "Partie rejoindre un grand groupe du conseil numérique, avec une lettre de recommandation de Tyrolium.", descEn: 'Went on to join a major digital consulting group, with a recommendation letter from Tyrolium.' },
        ],
      },
      {
        type: 'gallery',
        label: 'En images',
        labelEn: 'In pictures',
        title: 'Les saisons, dans nos locaux et ailleurs.',
        titleEn: 'The seasons, at our offices and beyond.',
        photos: [
          { src: 'assets/etudes/tyrostage/groupe-s1-s2-cafe.jpg', caption: 'Saisons 1 et 2, au café', captionEn: 'Seasons 1 and 2, at the café' },
          { src: 'assets/etudes/tyrostage/groupe-s2-s3-locaux-1.jpg', caption: 'Saisons 2 et 3, dans nos locaux', captionEn: 'Seasons 2 and 3, at our offices' },
          { src: 'assets/etudes/tyrostage/groupe-s2-s3-locaux-2.jpg', caption: 'Saisons 2 et 3, dans nos locaux', captionEn: 'Seasons 2 and 3, at our offices' },
          { src: 'assets/etudes/tyrostage/groupe-s5-locaux-1.jpg', caption: 'Saison 5, dans nos locaux', captionEn: 'Season 5, at our offices' },
          { src: 'assets/etudes/tyrostage/groupe-s5-locaux-2.jpg', caption: 'Saison 5, dans nos locaux', captionEn: 'Season 5, at our offices' },
          { src: 'assets/etudes/tyrostage/groupe-s5-locaux-3.jpg', caption: 'Saison 5, dans nos locaux', captionEn: 'Season 5, at our offices' },
          { src: 'assets/etudes/tyrostage/groupe-s6-cafe.jpg', caption: 'Saison 6, au café', captionEn: 'Season 6, at the café' },
        ],
      },
      {
        // À compléter : ajouter les témoignages (audio + transcription). Bloc masqué tant que "voices" est vide.
        // Exemple :
        // { name: 'Prénom Nom', role: 'Développeur chez Tyrolium', roleEn: 'Developer at Tyrolium',
        //   tag: 'TyroStage S2 · Human Booster', tagEn: 'TyroStage S2 · Human Booster', recruited: true,
        //   photo: 'assets/teams/Prenom_Nom.jpg', audio: 'assets/etudes/audio/prenom.mp3',
        //   transcript: '…', transcriptEn: '…' },
        type: 'voices',
        label: 'Leurs voix',
        labelEn: 'Their voices',
        title: 'Ce sont eux qui en parlent le mieux.',
        titleEn: 'They tell it best.',
        paragraphs: [
          "Des stagiaires recrutés, d'autres partis ailleurs, et même des étudiants que nous n'avons pas recrutés : tous racontent leur expérience.",
        ],
        paragraphsEn: [
          'Interns we hired, others who moved on, and even students we did not hire: they all share their experience.',
        ],
        voices: [
          { name: 'Kevin Muziak', role: 'Développeur chez Tyrolium de 2023 à 2024', roleEn: 'Developer at Tyrolium, 2023–2024',
            tag: 'TyroStage S2 · Human Booster', tagEn: 'TyroStage S2 · Human Booster', recruited: true,
            photo: 'assets/etudes/tyrostage/kevin-muziak.jpg', audio: 'assets/etudes/tyrostage/kevin-muziak.m4a',
            quote: "Ensemble, même avec peu ou pas d'expérience, on a pu faire des choses très élaborées, qui avaient du sens.",
            quoteEn: "Together, even with little or no experience, we were able to build highly elaborate things that made sense.",
            transcript: "Bonjour, je suis ici pour témoigner de mes activités passées avec Maxime Tournier au sein de l'entreprise Tyrolium. J'ai été recruté pour mon stage au sein de cette entreprise. Nous avons fait, entre autres, des sites web, et travaillé sur plusieurs projets internes, en apprenant diverses technologies et diverses manières de fonctionner. Nous avons découvert des outils internes créés par l'entreprise, par Maxime Tournier lui-même. Maxime a su faire preuve de patience, de pédagogie, et surtout nous montrer toutes ces petites techniques qu'il a apprises au fil de ses années d'expérience, dans le code comme ailleurs. Nous avons été capables d'être productifs alors que nous n'avions que quelques mois de développement web derrière nous, parfois seuls, parfois en petit ou moyen groupe. Nous avons vu qu'ensemble, même avec peu ou pas d'expérience, on pouvait faire des choses très élaborées, qui avaient du sens, et qui nous valorisaient vraiment une fois nos tâches quotidiennes, hebdomadaires et mensuelles terminées. C'était une très belle expérience, qui m'a beaucoup appris sur moi et sur le métier. Maxime est quelqu'un que je suis content d'avoir rencontré, et qui a beaucoup à apprendre et à faire découvrir aux autres.",
            transcriptEn: "Hello, I'm here to talk about my past work with Maxime Tournier at Tyrolium. I was recruited for my internship at the company. Among other things, we built websites and worked on several internal projects, learning various technologies and ways of working. We discovered internal tools created by the company, by Maxime Tournier himself. Maxime showed patience and teaching skills, and above all shared all the little techniques he has picked up over his years of experience, in code and beyond. We managed to be productive with only a few months of web development behind us, sometimes alone, sometimes in small or medium groups. We saw that together, even with little or no experience, we could build highly elaborate things that made sense, and that truly rewarded us once our daily, weekly and monthly tasks were done. It was a wonderful experience that taught me a lot about myself and the job. Maxime is someone I'm glad I met, and who has a lot to teach and share with others." },
          { name: 'Bastien Thiebaut', role: 'Développeur chez Tyrolium de 2024 à 2025', roleEn: 'Developer at Tyrolium, 2024–2025',
            tag: 'TyroStage S5 · Human Booster', tagEn: 'TyroStage S5 · Human Booster', recruited: true,
            photo: 'assets/etudes/tyrostage/bastien-thiebaut.jpg', audio: 'assets/etudes/tyrostage/bastien-thiebaut.m4a',
            quote: "Maxime était toujours disponible pour nous aider. On n'était jamais délaissés.",
            quoteEn: "Maxime was always available to help us. We were never left on our own.",
            transcript: "Je m'appelle Bastien Thiebaut, j'ai 26 ans, je suis développeur web et ancien stagiaire de Tyrolium. J'ai rencontré Maxime pendant ma formation de développeur web : c'était tout simplement l'un de mes formateurs. Le courant est tout de suite passé. Pour valider ma formation, je devais trouver un stage en entreprise ; j'ai demandé à Maxime s'il cherchait un stagiaire, et c'était le cas. C'est comme ça que j'ai intégré Tyrolium, pour quatre mois. La collaboration était vraiment très agréable : toujours dans la bonne humeur, tout en gardant un vrai professionnalisme. Ce qui a rendu cette expérience si agréable, c'est que Maxime était toujours disponible pour nous aider. On n'était jamais délaissés. On travaillait principalement sur Discord et, dès qu'on avait un problème, on arrivait très vite à le joindre et à trouver une solution, que ce soit pour une consigne mal comprise ou un bug dans le code. Nous avons travaillé sur un projet assez gros pour des développeurs débutants : Gamenium, un projet interne. Même si c'était son projet et qu'il avait déjà beaucoup d'idées, il restait très ouvert au débat et à l'écoute de nos propositions. Il tenait aussi à ce qu'on obtienne notre diplôme : il nous a accordé beaucoup de temps en fin de stage, et je n'aurais peut-être pas été aussi bien préparé à l'examen final sans lui. Merci à lui. Maxime est avant tout un passionné, ça se ressent quand il explique les choses. Il est énormément à l'écoute, prend toujours en compte les avis avant de se prononcer, et ne compte pas ses heures. Je le remercie pour cette expérience à la fois professionnelle et très humaine.",
            transcriptEn: "My name is Bastien Thiebaut, I'm 26, a web developer and a former Tyrolium intern. I met Maxime during my web developer training: he was simply one of my trainers. We clicked straight away. To complete my training, I needed to find a company internship; I asked Maxime if he was looking for an intern, and he was. That's how I joined Tyrolium, for four months. Working together was really enjoyable: always in a good mood, while staying genuinely professional. What made this experience so good was that Maxime was always available to help us. We were never left on our own. We mostly worked on Discord and, whenever we had a problem, we could reach him quickly and find a solution, whether it was a misunderstood instruction or a bug in the code. We worked on a fairly big project for beginner developers: Gamenium, an internal project. Even though it was his project and he already had lots of ideas, he stayed very open to debate and listened to our suggestions. He also cared about us getting our degree: he gave us a lot of time at the end of the internship, and I might not have been as well prepared for my final exam without him. Thanks to him. Maxime is above all passionate, and you can feel it when he explains things. He listens a lot, always takes opinions into account before deciding, and never counts his hours. I thank him for an experience that was both professional and deeply human." },
          { name: 'Adèle Jausons', role: 'Développeuse chez Tyrolium de 2024 à 2025, aujourd\'hui freelance', roleEn: 'Developer at Tyrolium, 2024–2025, now a freelancer',
            tag: 'TyroStage S5 · Human Booster', tagEn: 'TyroStage S5 · Human Booster', recruited: true,
            photo: 'assets/etudes/tyrostage/adele-jausons.jpg', audio: 'assets/etudes/tyrostage/adele-jausons.m4a',
            quote: "On ne m'a pas juste donné des petites tâches à faire dans mon coin : on m'a impliquée dans un projet, et accompagnée.",
            quoteEn: "I wasn't just handed small tasks to do on my own: I was involved in a project, and supported.",
            transcript: "Salut, moi c'est Adèle, je suis développeuse web et je vais vous parler de mon stage chez Tyrolium. Quand j'ai commencé, l'objectif était de passer de la théorie à la pratique. J'ai travaillé sur trois projets : un site vitrine, une application web complexe et ambitieuse mais passionnante, et un outil interne à Tyrolium. Ce que j'ai beaucoup aimé, c'est qu'on ne m'a pas juste donné des petites tâches à faire dans mon coin, du genre « fais-le et reviens quand tu as fini ». On m'a vraiment impliquée dans un projet et accompagnée : on m'a laissé de l'autonomie, tout en étant toujours présent si besoin. J'ai principalement travaillé à distance, ce qui aurait pu compliquer les choses, mais Maxime était toujours là pour répondre aux questions. Il est aussi très rodé côté communication et outils, y compris les outils clients pour montrer où en est le projet. C'était super pratique. J'ai vraiment adoré : un stage structuré, accompagné, organisé. Et pourtant nous étions pas mal de stagiaires, et Maxime s'occupait de tout seul. Techniquement, j'ai énormément progressé : lire du code, le comprendre, le modifier ; j'ai découvert de nouvelles technologies et je me suis beaucoup améliorée sur celles que je connaissais. J'ai suivi des projets de A à Z, et repris des projets existants. L'ambiance était hyper sympa. Maxime est avenant, bienveillant, à l'écoute, très professionnel, et il veut toujours comprendre : le client, le problème, ce qui se passe. Je trouve ça essentiel dans ce métier, et c'est ce qui fait que Tyrolium vaut le coup. Je recommande à 100 %, que ce soit pour un stage, un travail, un site ou autre. Allez-y les yeux fermés : moi, je ne regrette pas du tout.",
            transcriptEn: "Hi, I'm Adèle, a web developer, and I'm going to talk about my internship at Tyrolium. When I started, the goal was to move from theory to practice. I worked on three projects: a showcase website, a complex, ambitious but fascinating web application, and an internal Tyrolium tool. What I really liked was that I wasn't just handed small tasks to do on my own, the \"do it and come back when you're done\" kind. I was truly involved in a project and supported: given autonomy, with someone always there if needed. I mostly worked remotely, which could have made things harder, but Maxime was always there to answer questions. He's also very well organised with communication and tools, including client tools to show how a project is progressing. It was really convenient. I absolutely loved it: a structured, well-supported, organised internship. And yet there were quite a few of us interns, and Maxime handled everything on his own. Technically, I made huge progress: reading code, understanding it, changing it; I discovered new technologies and got much better at the ones I knew. I followed projects from A to Z, and took over existing ones. The atmosphere was really friendly. Maxime is approachable, kind, attentive, very professional, and he always wants to understand: the client, the problem, what's going on. I think that's essential in this job, and it's what makes Tyrolium worth it. I recommend it 100%, whether for an internship, a job, a website or anything else. Go for it with your eyes closed: I don't regret it one bit." },
          { name: 'Maxence Emery', role: 'Développeur et intégrateur, apprenant en formation', roleEn: 'Developer and integrator, former trainee',
            tag: 'Human Booster', tagEn: 'Human Booster', recruited: false,
            photo: 'assets/etudes/tyrostage/maxence-emery.jpg', audio: 'assets/etudes/tyrostage/maxence-emery.m4a',
            quote: "Si ma présentation était bonne, c'est notamment grâce à lui et à son écoute attentive.",
            quoteEn: "If my presentation went well, it was largely thanks to him and how closely he listened.",
            transcript: "Je m'appelle Maxence Emery, je suis intégrateur WordPress. J'ai obtenu en février 2025 mon diplôme de développeur web et web mobile. J'ai rencontré Maxime Tournier pendant mes études : c'était l'un de mes professeurs. J'ai tout de suite été séduit par son approche : toujours extrêmement disponible et professionnel, il nous parlait de ses expériences et nous aidait chaque fois qu'il le pouvait. Il m'a été d'une aide précieuse en fin d'année. Je devais présenter mon dossier projet devant un jury, et il m'a permis de faire une sorte d'examen blanc avec lui, avec beaucoup de conseils et d'axes d'amélioration. J'ai énormément travaillé pour obtenir ce diplôme, mais si ma présentation était bonne, c'est notamment grâce à lui et à son écoute attentive. Je devais aussi déployer un site sur un serveur, ce qui était particulièrement compliqué avec les technologies imposées. Sans Maxime pour m'aiguiller, je ne suis pas sûr que j'aurais pu réaliser ce déploiement dans de bonnes conditions. Il a toujours été force de proposition. C'est un professeur d'une grande maturité malgré son jeune âge, et je suis très heureux de l'avoir eu.",
            transcriptEn: "My name is Maxence Emery, I'm a WordPress integrator. In February 2025 I earned my web and mobile web developer diploma. I met Maxime Tournier during my studies: he was one of my teachers. I was immediately won over by his approach: always extremely available and professional, he shared his experience and helped us whenever he could. He was a huge help at the end of the year. I had to present my project file to a jury, and he let me do a kind of mock exam with him, with lots of advice and areas for improvement. I worked extremely hard for this diploma, but if my presentation went well, it was largely thanks to him and how closely he listened. I also had to deploy a website on a server, which was particularly tricky with the technologies we were required to use. Without Maxime guiding me, I'm not sure I could have done that deployment properly. He always came up with ideas. He's a teacher with great maturity despite his young age, and I'm very glad I had him." },
        ],
      },
      {
        type: 'features',
        label: 'Nos règles',
        labelEn: 'Our rules',
        title: 'Former d\'abord. Recruter ensuite.',
        titleEn: 'Teach first. Hire second.',
        paragraphs: [
          "Être à la fois formateur et recruteur impose des règles claires. Les voici, et nous les appliquons à chaque intervention.",
        ],
        paragraphsEn: [
          'Being both trainer and recruiter requires clear rules. Here they are, and we apply them at every course.',
        ],
        items: [
          { icon: 'ri-megaphone-fill', title: 'Transparence dès le premier jour', titleEn: 'Transparency from day one', desc: 'Les étudiants savent dès le début que Tyrolium recrute ses stagiaires ainsi.', descEn: 'Students know from the start that this is how Tyrolium recruits its interns.' },
          { icon: 'ri-scales-3-fill', title: 'Des notes indépendantes', titleEn: 'Independent grades', desc: "Personne n'est noté par préférence. Le recrutement ne change rien à l'évaluation.", descEn: 'No one is graded by preference. Recruitment has no bearing on assessment.' },
          { icon: 'ri-time-fill', title: 'Aucune proposition pendant le cours', titleEn: 'No offers during the course', desc: "Les propositions arrivent toujours après l'intervention, et nous refusons toute demande pendant.", descEn: 'Offers always come after the course, and we decline any request during it.' },
          { icon: 'ri-hand-heart-fill', title: 'Aider aussi ceux qu\'on ne recrute pas', titleEn: 'Helping those we do not hire', desc: 'Conseils, mentorat, recommandations : la formation profite à toute la promotion.', descEn: 'Advice, mentoring, recommendations: the training benefits the whole class.' },
        ],
      },
      {
        type: 'features',
        label: 'Gagnant-gagnant',
        labelEn: 'Win-win',
        title: 'Trois gagnants.',
        titleEn: 'Three winners.',
        items: [
          { icon: 'ri-graduation-cap-fill', title: 'L\'étudiant', titleEn: 'The student', desc: 'Une formation concrète, un stage qui valide son diplôme, et une porte ouverte sur la suite.', descEn: 'Hands-on training, an internship that completes their degree, and an open door for what comes next.' },
          { icon: 'ri-school-fill', title: 'L\'école', titleEn: 'The school', desc: 'Un formateur issu du terrain, et des débouchés réels pour ses étudiants.', descEn: 'A trainer from the field, and real opportunities for its students.' },
          { icon: 'ri-team-fill', title: 'Tyrolium', titleEn: 'Tyrolium', desc: 'Des talents passionnés, qui connaissent déjà notre exigence et notre culture.', descEn: 'Passionate talent who already know our standards and our culture.' },
        ],
      },
      {
        type: 'features',
        label: 'Les leçons',
        labelEn: 'The lessons',
        title: 'Ce que nous en retenons.',
        titleEn: 'What we take away.',
        items: [
          { icon: 'ri-search-eye-fill', title: 'Observer vaut mieux que questionner', titleEn: 'Watching beats questioning', desc: 'Des semaines de travail réel révèlent plus qu\'un entretien parfaitement préparé.', descEn: 'Weeks of real work reveal more than a perfectly rehearsed interview.' },
          { icon: 'ri-seedling-fill', title: 'La technique s\'apprend, pas la soif', titleEn: 'Skills can be taught, hunger cannot', desc: 'Recruter la motivation et former ensuite, c\'est notre pari, et il fonctionne.', descEn: 'Hiring for motivation and training afterwards is our bet, and it works.' },
          { icon: 'ri-group-fill', title: 'Un groupe soudé apprend plus vite', titleEn: 'A close group learns faster', desc: 'Accueillir des personnes qui s\'apprécient déjà crée une dynamique immédiate.', descEn: 'Welcoming people who already get along creates instant momentum.' },
        ],
      },
    ],
    cta: {
      title: 'Vous êtes une école ?',
      titleEn: 'Are you a school?',
      content: "Faites intervenir un formateur issu du terrain, et offrez à vos étudiants des projets réels et des débouchés concrets.",
      contentEn: 'Bring in a trainer from the field, and give your students real projects and concrete opportunities.',
      btn: 'Proposer une intervention',
      btnEn: 'Invite us to teach',
      btnIcon: 'ri-graduation-cap-line',
      routerLink: '/contact',
    },
  },
  {
    slug: 'timeclaw',
    brand: 'TimeClaw',
    logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png',
    partnerLogo: 'assets/etudes/timeclaw-white.png',
    gradient: 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)',
    category: 'Incubation · Jeu vidéo',
    categoryEn: 'Incubation · Video games',
    period: 'De TyroStage à TimeClaw',
    periodEn: 'From TyroStage to TimeClaw',
    dataAsOf: 'octobre 2026',
    dataAsOfEn: 'October 2026',
    title: 'Il voulait son propre studio. Nous l\'avons aidé à le créer.',
    titleEn: 'He wanted his own studio. We helped him build it.',
    summary: "Mathys est arrivé chez nous en stage. Il est devenu le réalisateur de Rhodotales, puis l'une des têtes pensantes de TyroCiel. Quand il a voulu créer ses propres jeux, nous ne l'avons pas retenu : nous avons incubé son studio, TimeClaw. Et il n'a jamais quitté Rhodotales.",
    summaryEn: "Mathys joined us as an intern. He became the director of Rhodotales, then one of TyroCiel's leading minds. When he wanted to make his own games, we did not hold him back: we incubated his studio, TimeClaw. And he never left Rhodotales.",
    headline: { value: '2', title: 'studios réunis sur un même jeu', titleEn: 'studios united on one game' },
    heroStats: [
      { value: '2', title: 'Studios sur un même jeu', titleEn: 'Studios on one game' },
      { value: '6 mois', valueEn: '6 months', title: 'De stagiaire à fondateur de studio', titleEn: 'From intern to studio founder' },
      { value: '4', title: 'Piliers d\'accompagnement par Tyrolium', titleEn: 'Areas of support from Tyrolium' },
      { value: '0', title: 'Investisseur extérieur', titleEn: 'Outside investors' },
    ],
    facts: [
      { label: 'Studio', labelEn: 'Studio', value: 'TimeClaw' },
      { label: 'Fondateur', labelEn: 'Founder', value: 'Mathys Lacoque' },
      { label: 'Arrivée chez Tyrolium', labelEn: 'Joined Tyrolium', value: 'Avril 2026', valueEn: 'April 2026' },
      { label: 'Fondation de TimeClaw', labelEn: 'TimeClaw founded', value: 'Octobre 2026', valueEn: 'October 2026' },
      { label: 'Parcours', labelEn: 'Path', value: 'TyroStage S6 (IPSSI) → réalisateur chez TyroCiel → fondateur de TimeClaw', valueEn: 'TyroStage S6 (IPSSI) → director at TyroCiel → founder of TimeClaw' },
      { label: 'Projet commun', labelEn: 'Joint project', value: 'Rhodotales, avec TyroCiel', valueEn: 'Rhodotales, with TyroCiel' },
      { label: 'Apport de Tyrolium', labelEn: "Tyrolium's support", value: 'Administratif, communication, site web, incubation', valueEn: 'Admin, communication, website, incubation' },
    ],
    link: { label: 'tyrociel.fr', url: 'https://tyrociel.fr' },
    blocks: [
      {
        type: 'text',
        label: 'Le point de départ',
        labelEn: 'Where it started',
        title: 'Un stagiaire parmi quatre.',
        titleEn: 'One intern out of four.',
        paragraphs: [
          "Tout commence en janvier 2026, à l'IPSSI : notre fondateur rencontre Mathys lors de son premier cours avec sa promotion. De janvier à avril, il leur donne cours pendant environ six semaines, de 9 h à 17 h, tous les jours.",
          "En avril 2026, Mathys rejoint Tyrolium avec la saison 6 de TyroStage, aux côtés de trois autres étudiants de sa promotion. Comme toujours, nous ne l'avons pas choisi sur un CV : nous l'avons regardé travailler pendant six semaines.",
          "Développeur de formation, il commence sur Rhodotales, le jeu de TyroCiel, le studio de jeu vidéo du groupe. Très vite, il ne se contente plus de coder ce qu'on lui demande : il propose, il imagine, il tranche.",
        ],
        paragraphsEn: [
          'It all starts in January 2026, at IPSSI: our founder meets Mathys during his first class with his cohort. From January to April, he teaches them for about six weeks, from 9 a.m. to 5 p.m., every day.',
          'In April 2026, Mathys joins Tyrolium with season 6 of TyroStage, alongside three other students from his cohort. As always, we did not pick him from a CV: we watched him work for six weeks.',
          "A developer by training, he starts on Rhodotales, the game of TyroCiel, the group's video game studio. Very quickly, he no longer just codes what he is asked: he suggests, imagines, decides.",
        ],
        linkLabel: "Lire l'étude de cas TyroStage",
        linkLabelEn: 'Read the TyroStage case study',
        linkRouter: '/etudes-de-cas/tyrostage',
      },
      {
        type: 'steps',
        label: 'Le parcours',
        labelEn: 'The path',
        title: 'De stagiaire à tête pensante.',
        titleEn: 'From intern to leading mind.',
        items: [
          { title: 'Avril 2026 · Stagiaire sur Rhodotales', titleEn: 'April 2026 · Intern on Rhodotales', desc: "Il rejoint l'équipe du jeu pendant son stage, et apprend sur un vrai projet de studio.", descEn: 'He joins the game team during his internship and learns on a real studio project.' },
          { title: 'Août 2026 · Réalisateur de Rhodotales', titleEn: 'August 2026 · Director of Rhodotales', desc: "On lui laisse de la place, il la prend : il devient le réalisateur du jeu et en porte la vision.", descEn: 'We give him room, and he takes it: he becomes the director of the game and carries its vision.' },
          { title: 'Août – octobre 2026 · Une tête pensante de TyroCiel', titleEn: 'August – October 2026 · A leading mind at TyroCiel', desc: "Au-delà de Rhodotales, il pèse sur la direction créative et la marque de toute une filiale. Et il a envie de créer aussi ses propres petits jeux, avec sa propre identité.", descEn: 'Beyond Rhodotales, he shapes the creative direction and brand of an entire subsidiary. And he also wants to make his own small games, with his own identity.' },
          { title: 'Octobre 2026 · La fondation de TimeClaw', titleEn: 'October 2026 · Founding TimeClaw', desc: "Plutôt que de le perdre, nous incubons son studio. TimeClaw devient partenaire de TyroCiel.", descEn: 'Rather than lose him, we incubate his studio. TimeClaw becomes a TyroCiel partner.' },
        ],
      },
      {
        type: 'story',
        label: 'La discussion',
        labelEn: 'The conversation',
        title: '« Ton talent est trop important. »',
        titleEn: '"Your talent matters too much."',
        paragraphs: [
          "Quand Mathys m'a dit qu'il voulait créer ses propres jeux, je lui ai répondu franchement : ça ne me dérange pas. Qu'il veuille son indépendance, je le respecte.",
          "Mais je lui ai dit aussi ce que je pensais : ton talent est trop important. Je t'ai laissé de la place, et tu l'as prise. Tu n'es plus un simple développeur de Rhodotales : tu es devenu l'une des têtes pensantes de toute une filiale de Tyrolium.",
          "Le perdre aurait été une erreur, le retenir aussi. Après plusieurs discussions, nous sommes tombés d'accord : il crée son studio, nous l'aidons à le monter, et il reste avec nous sur Rhodotales.",
        ],
        paragraphsEn: [
          'When Mathys told me he wanted to make his own games, I answered honestly: I do not mind. If he wants his independence, I respect that.',
          'But I also told him what I thought: your talent matters too much. I gave you room, and you took it. You are no longer just a developer on Rhodotales: you have become one of the leading minds of an entire Tyrolium subsidiary.',
          'Losing him would have been a mistake; so would holding him back. After several conversations, we agreed: he founds his studio, we help him set it up, and he stays with us on Rhodotales.',
        ],
        author: 'Maxime Tournier',
        authorRole: 'PDG & Fondateur de Tyrolium',
        authorRoleEn: 'CEO & Founder of Tyrolium',
      },
      {
        type: 'features',
        label: "L'accord",
        labelEn: 'The deal',
        title: 'Ce que Tyrolium apporte à TimeClaw.',
        titleEn: 'What Tyrolium brings to TimeClaw.',
        paragraphs: [
          "Créer un studio, ce n'est pas seulement faire des jeux. Tout ce qui n'est pas le jeu, nous le prenons en charge, pour que Mathys puisse se concentrer sur la création.",
        ],
        paragraphsEn: [
          'Running a studio is not just making games. We take care of everything that is not the game, so Mathys can focus on creating.',
        ],
        items: [
          { icon: 'ri-file-list-3-fill', title: 'L\'administratif', titleEn: 'The paperwork', desc: "Création de la structure et démarches : nous l'aidons à monter son studio dans les règles.", descEn: 'Setting up the company and the formalities: we help him found his studio properly.' },
          { icon: 'ri-megaphone-fill', title: 'La communication', titleEn: 'Communication', desc: 'Nous portons la communication de TimeClaw, avec les mêmes outils que pour nos filiales.', descEn: "We run TimeClaw's communication, with the same tools we use for our subsidiaries." },
          { icon: 'ri-window-fill', title: 'Le site web', titleEn: 'The website', desc: 'Son site est conçu et hébergé par nos équipes.', descEn: 'His website is designed and hosted by our teams.' },
          { icon: 'ri-rocket-2-fill', title: "L'incubation", titleEn: 'Incubation', desc: "Conseils, mentorat et l'appui de tout un groupe pour faire grandir le studio.", descEn: 'Advice, mentoring and the backing of a whole group to grow the studio.' },
        ],
      },
      {
        type: 'features',
        label: 'En échange',
        labelEn: 'In return',
        title: 'Ce que TimeClaw apporte à TyroCiel.',
        titleEn: 'What TimeClaw brings to TyroCiel.',
        items: [
          { icon: 'ri-movie-2-fill', title: 'Rhodotales garde son réalisateur', titleEn: 'Rhodotales keeps its director', desc: 'Mathys reste aux commandes du jeu, désormais à la tête de son propre studio.', descEn: 'Mathys stays at the helm of the game, now heading his own studio.' },
          { icon: 'ri-lightbulb-flash-fill', title: 'Un pied dans tous les projets', titleEn: 'A foot in every project', desc: 'Il garde un rôle sur l\'ensemble des projets de TyroCiel, pas seulement sur Rhodotales.', descEn: "He keeps a role across all of TyroCiel's projects, not just Rhodotales." },
          { icon: 'ri-gamepad-fill', title: 'Ses propres jeux en parallèle', titleEn: 'His own games alongside', desc: "TimeClaw développe ses projets librement, sans que TyroCiel perde son talent.", descEn: 'TimeClaw builds its own projects freely, without TyroCiel losing his talent.' },
        ],
      },
      {
        type: 'testimonial',
        quote: "En arrivant en stage, je voulais juste gagner de l'expérience en développement de jeux vidéo. Très vite, on m'a confié la réalisation de Rhodotales. Je ne pensais pas être à la hauteur, et je me suis prouvé le contraire. Quand j'ai voulu créer mon studio, Tyrolium ne m'a pas retenu : ils m'ont encouragé à me lancer. Aujourd'hui, TimeClaw est une entité à part entière : j'aide TyroCiel à développer Rhodotales, tout en menant mes propres projets.",
        quoteEn: "When I started my internship, I just wanted to gain experience in video game development. Very quickly, I was given the direction of Rhodotales. I did not think I was up to it, and I proved myself wrong. When I wanted to start my own studio, Tyrolium did not hold me back: they encouraged me to go for it. Today, TimeClaw is an entity in its own right: I help TyroCiel develop Rhodotales, while running my own projects.",
        author: 'Mathys Lacoque',
        authorRole: 'Fondateur de TimeClaw · Réalisateur de Rhodotales',
        authorRoleEn: 'Founder of TimeClaw · Director of Rhodotales',
        photo: 'assets/teams/Mathys_Lacoque.jpg',
      },
      {
        type: 'features',
        label: 'Plus loin',
        labelEn: 'Going further',
        title: 'Deux studios, un jeu, une même force de frappe.',
        titleEn: 'Two studios, one game, the same reach.',
        paragraphs: [
          "Rhodotales est un jeu de plateforme HD-2D dans un monde médiéval fantastique. Sa mécanique signature : naviguer entre 3 plans distincts. Le jeu est en développement.",
          "Le partenariat ne s'arrête pas au code. Les outils de communication de Tyrolium, qui portent tout TyroCiel, sont partagés pour Rhodotales : le jeu est porté à la fois sur les profils de TyroCiel et sur ceux de TimeClaw.",
        ],
        paragraphsEn: [
          'Rhodotales is an HD-2D platformer set in a medieval fantasy world. Its signature mechanic: moving between 3 distinct planes. The game is in development.',
          "The partnership does not stop at the code. Tyrolium's communication tools, which power all of TyroCiel, are shared for Rhodotales: the game is promoted on both TyroCiel's and TimeClaw's profiles.",
        ],
        items: [
          { icon: 'ri-share-forward-fill', title: 'Deux vitrines pour un jeu', titleEn: 'Two showcases for one game', desc: 'Chaque studio parle de Rhodotales à sa propre communauté.', descEn: 'Each studio talks about Rhodotales to its own community.' },
          { icon: 'ri-tools-fill', title: 'Les outils de communication de Tyrolium', titleEn: "Tyrolium's communication tools", desc: "La même boîte à outils de communication, au service des deux studios.", descEn: 'The same communication toolkit, serving both studios.' },
          { icon: 'ri-hand-coin-fill', title: 'Financé en fonds propres', titleEn: 'Self-funded', desc: "Comme tous les projets de TyroCiel, Rhodotales est financé par les fonds du groupe, sans investisseur.", descEn: "Like every TyroCiel project, Rhodotales is funded by the group's own money, with no investors." },
        ],
      },
      {
        type: 'features',
        label: 'Gagnant-gagnant',
        labelEn: 'Win-win',
        title: 'Trois gagnants.',
        titleEn: 'Three winners.',
        items: [
          { icon: 'ri-user-star-fill', title: 'Mathys', titleEn: 'Mathys', desc: "Son indépendance et ses propres jeux, sans repartir de zéro ni porter seul l'administratif et la communication.", descEn: 'His independence and his own games, without starting from scratch or carrying the paperwork and communication alone.' },
          { icon: 'ri-gamepad-fill', title: 'TyroCiel', titleEn: 'TyroCiel', desc: "Le studio garde son réalisateur et l'une de ses têtes pensantes.", descEn: 'The studio keeps its director and one of its leading minds.' },
          { icon: 'ri-building-4-fill', title: 'Tyrolium', titleEn: 'Tyrolium', desc: "Un studio partenaire de plus dans l'écosystème, né d'un talent que nous avons formé.", descEn: 'One more partner studio in the ecosystem, born from a talent we trained.' },
        ],
      },
      {
        type: 'features',
        label: 'Les leçons',
        labelEn: 'The lessons',
        title: 'Ce que nous en retenons.',
        titleEn: 'What we take away.',
        items: [
          { icon: 'ri-seedling-fill', title: 'Laisser de la place révèle les talents', titleEn: 'Giving room reveals talent', desc: "Mathys n'était pas recruté pour diriger un jeu. Il l'est devenu parce qu'on l'a laissé faire.", descEn: 'Mathys was not hired to direct a game. He became its director because we let him.' },
          { icon: 'ri-door-open-fill', title: "Retenir n'est pas enfermer", titleEn: 'Keeping is not caging', desc: "Un talent qui veut son indépendance la prendra. Autant l'aider à la construire avec nous.", descEn: 'A talent who wants independence will take it. Better to help them build it with us.' },
          { icon: 'ri-shake-hands-fill', title: 'Un départ peut devenir un partenariat', titleEn: 'A departure can become a partnership', desc: "Le lien ne se coupe pas : il change de forme, et il renforce les deux côtés.", descEn: 'The bond is not cut: it changes shape, and it strengthens both sides.' },
        ],
        linkLabel: 'Découvrir notre vision',
        linkLabelEn: 'Discover our vision',
        linkRouter: '/vision',
      },
    ],
    cta: {
      title: 'Vous voulez créer votre studio ?',
      titleEn: 'Want to start your own studio?',
      content: "L'incubateur Tyrolium accompagne les porteurs de projet, de l'idée jusqu'à l'entreprise.",
      contentEn: 'The Tyrolium incubator supports project founders, from the idea to the company.',
      btn: "Découvrir l'incubateur",
      btnEn: 'Discover the incubator',
      btnIcon: 'ri-rocket-2-line',
      routerLink: '/prestation/incubateur',
    },
  },
  {
    slug: 'solidserv',
    brand: 'SolidServ',
    logo: 'assets/tyrolium-ui/projects/SolidServ-White.png',
    partnerCombo: { logo: 'assets/tyrolium-ui/projects/SolidServ-White.png', group: 'Tyrolium', name: 'SolidServ' },
    gradient: 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)',
    category: 'Hébergement · Infrastructure',
    categoryEn: 'Hosting · Infrastructure',
    period: '2022 – aujourd\'hui',
    periodEn: '2022 – today',
    dataAsOf: 'octobre 2026',
    dataAsOfEn: 'October 2026',
    title: 'L\'hébergeur né dans la galère, devenu le moteur du groupe',
    titleEn: 'The host born in hard times that became the group\'s engine',
    summary: "SolidServ est né en 2022 d'une idée de Pierre-Louis, avec des serveurs achetés grâce à TyroServ et très peu de moyens. Un faux départ avec la crypto, une explosion en 2025, et en 2026, tout Tyrolium se réorganise autour de ses revenus récurrents.",
    summaryEn: "SolidServ was born in 2022 from an idea by Pierre-Louis, with servers bought thanks to TyroServ and very few resources. A false start with crypto, a boom in 2025, and in 2026 all of Tyrolium reorganises around its recurring revenue.",
    headline: { value: 'MRR', title: 'devenu le moteur financier du groupe', titleEn: "now the group's financial engine" },
    heroStats: [
      { value: '2022', title: 'Lancement de SolidServ', titleEn: 'SolidServ launch' },
      { value: '2025', title: 'L\'année de l\'explosion', titleEn: 'The breakout year' },
      { value: String(SERVERS.length), title: 'Serveurs et instances déployés par le groupe', titleEn: 'Servers and instances deployed by the group' },
      { value: '2,99 €', valueEn: '€2.99', title: 'Premier prix, par mois', titleEn: 'Entry price, per month' },
    ],
    facts: [
      { label: 'Filiale', labelEn: 'Subsidiary', value: 'SolidServ' },
      { label: 'Lancement', labelEn: 'Launch', value: 'Mai 2022', valueEn: 'May 2022' },
      { label: 'L\'idée', labelEn: 'The idea', value: 'Pierre-Louis, ancien d\'un petit hébergeur', valueEn: 'Pierre-Louis, formerly at a small host' },
      { label: 'Offres', labelEn: 'Offers', value: 'VPS, serveurs dédiés, Minecraft, FiveM, hébergement web', valueEn: 'VPS, dedicated servers, Minecraft, FiveM, web hosting' },
      { label: 'Modèle', labelEn: 'Model', value: 'Abonnement mensuel (MRR)', valueEn: 'Monthly subscription (MRR)' },
      { label: 'Machines', labelEn: 'Hardware', value: 'Achetées, pas louées', valueEn: 'Bought, not rented' },
    ],
    link: { label: 'solidserv.fr', url: 'https://solidserv.fr' },
    blocks: [
      {
        type: 'text',
        label: 'Le contexte',
        labelEn: 'The context',
        title: 'Une idée venue de l\'intérieur d\'un hébergeur.',
        titleEn: 'An idea from inside a hosting company.',
        paragraphs: [
          "En 2022, TyroServ a permis d'acheter nos propres serveurs. Restait une question : que faire de cette infrastructure en dehors de nos projets ?",
          "L'idée vient de Pierre-Louis, l'un des cofondateurs historiques. Il avait travaillé quelque temps chez un petit hébergeur : il savait comment ce métier fonctionne de l'intérieur, ce qu'il coûte et ce qu'il rapporte. Le 24 mars 2022, le projet SolidServ est créé. Le 7 mai, les premiers serveurs sont en ligne.",
        ],
        paragraphsEn: [
          'In 2022, TyroServ had paid for our own servers. One question remained: what to do with that infrastructure beyond our own projects?',
          'The idea came from Pierre-Louis, one of the historical co-founders. He had worked for a while at a small hosting company: he knew how the business works from the inside, what it costs and what it earns. On 24 March 2022, the SolidServ project was created. On 7 May, the first servers went live.',
        ],
        linkLabel: 'Lire l\'étude de cas TyroServ',
        linkLabelEn: 'Read the TyroServ case study',
        linkRouter: '/etudes-de-cas/tyroserv',
      },
      {
        type: 'story',
        label: 'L\'anecdote',
        labelEn: 'The story',
        title: 'Au début, on acceptait la crypto.',
        titleEn: 'At first, we accepted crypto.',
        paragraphs: [
          "Pour se démarquer au lancement, notre stratégie était simple : proposer des serveurs payables en cryptomonnaie. Sur le papier, c'était un argument que peu d'hébergeurs avaient.",
          "Dans les faits, ça ne nous a ramené que des clients dont nous ne voulions pas. Nous avons arrêté. Aujourd'hui, SolidServ n'accepte plus la crypto, et nous choisissons nos clients autant qu'ils nous choisissent.",
        ],
        paragraphsEn: [
          'To stand out at launch, our strategy was simple: offer servers payable in cryptocurrency. On paper, it was a selling point few hosts had.',
          'In practice, it only brought us customers we did not want. We stopped. Today, SolidServ no longer accepts crypto, and we choose our customers as much as they choose us.',
        ],
        author: 'Maxime Tournier',
        authorRole: 'PDG & Fondateur de Tyrolium',
        authorRoleEn: 'CEO & Founder of Tyrolium',
      },
      {
        type: 'features',
        label: 'Dans la galère',
        labelEn: 'In hard times',
        title: 'Construit sans levée de fonds.',
        titleEn: 'Built without raising funds.',
        paragraphs: [
          "SolidServ ne s'est pas construit avec un gros budget. Il s'est construit avec ce que nous avions : les machines achetées grâce à TyroServ, une équipe réduite, et l'envie de ne dépendre de personne.",
        ],
        paragraphsEn: [
          'SolidServ was not built on a big budget. It was built with what we had: the machines bought thanks to TyroServ, a small team, and the will to depend on no one.',
        ],
        items: [
          { icon: 'ri-server-fill', title: 'Des machines à nous', titleEn: 'Our own machines', desc: 'Achetées, pas louées : au siège de Décines, et en baies dans des datacenters en France.', descEn: 'Bought, not rented: at our Décines headquarters, and in racks in French datacenters.' },
          { icon: 'ri-hand-coin-fill', title: 'Aucun investisseur', titleEn: 'No investors', desc: 'Chaque nouvelle capacité a été financée par les revenus du groupe.', descEn: "Every new bit of capacity was funded by the group's own revenue." },
          { icon: 'ri-stack-fill', title: 'Une montée progressive', titleEn: 'Step-by-step growth', desc: 'Nous avons augmenté notre capacité au rythme des clients, jamais avant.', descEn: 'We grew our capacity at the pace of our customers, never ahead of it.' },
        ],
      },
      {
        type: 'steps',
        label: 'La trajectoire',
        labelEn: 'The trajectory',
        title: 'Lancement, explosion, stratégie.',
        titleEn: 'Launch, breakout, strategy.',
        items: [
          { title: '2022 · Le lancement', titleEn: '2022 · The launch', desc: "SolidServ ouvre avec nos premières machines. Les débuts sont modestes, et marqués par le faux départ de la crypto.", descEn: 'SolidServ opens with our first machines. The start is modest, and marked by the crypto false start.' },
          { title: '2023 – 2024 · La montée en capacité', titleEn: '2023 – 2024 · Scaling up', desc: "Nous augmentons progressivement notre infrastructure, au rythme de la demande.", descEn: 'We gradually grow our infrastructure, at the pace of demand.' },
          { title: '2025 · L\'explosion', titleEn: '2025 · The breakout', desc: "La demande décolle. SolidServ cesse d'être un projet annexe et devient une activité à part entière.", descEn: 'Demand takes off. SolidServ stops being a side project and becomes a business in its own right.' },
          { title: '2026 · Tout Tyrolium passe au MRR', titleEn: '2026 · All of Tyrolium moves to MRR', desc: "Le revenu mensuel récurrent devient l'objectif de tout le groupe, et SolidServ en est le cœur.", descEn: 'Monthly recurring revenue becomes the goal of the whole group, with SolidServ at its core.' },
        ],
      },
      {
        type: 'features',
        label: 'Le virage',
        labelEn: 'The shift',
        title: 'Du chiffre ponctuel au revenu récurrent.',
        titleEn: 'From one-off revenue to recurring revenue.',
        paragraphs: [
          "Pendant des années, ce qui finançait Tyrolium, c'étaient les prestations web et la formation : des missions qui rapportent une fois, puis qu'il faut retrouver. Aujourd'hui, c'est le revenu mensuel récurrent de SolidServ.",
        ],
        paragraphsEn: [
          'For years, what funded Tyrolium was web services and training: jobs that pay once, and then have to be found again. Today, it is the monthly recurring revenue of SolidServ.',
        ],
        items: [
          { icon: 'ri-history-fill', title: 'Hier : la prestation', titleEn: 'Yesterday: one-off jobs', desc: 'Sites web et formations, facturés à la mission. Un bon mois ne garantit pas le suivant.', descEn: 'Websites and training, billed per job. A good month does not guarantee the next.' },
          { icon: 'ri-repeat-fill', title: 'Aujourd\'hui : l\'abonnement', titleEn: 'Today: subscriptions', desc: 'Chaque client hébergé rapporte chaque mois. Le revenu s\'additionne au lieu de repartir de zéro.', descEn: 'Every hosted customer pays every month. Revenue adds up instead of starting from zero.' },
          { icon: 'ri-links-fill', title: 'La prestation diluée dans le serveur', titleEn: 'Services folded into hosting', desc: 'Nos prestations web ne sont plus vendues seules : elles sont intégrées à un abonnement d\'hébergement.', descEn: 'Our web services are no longer sold on their own: they are bundled into a hosting subscription.' },
        ],
      },
      {
        type: 'text',
        label: 'En pratique',
        labelEn: 'In practice',
        title: 'Le site est offert, l\'hébergement fait le reste.',
        titleEn: 'The website is free; hosting does the rest.',
        paragraphs: [
          "Diluer la prestation dans le serveur, c'est par exemple notre partenariat avec le Cabinet Marthelot : le site vitrine est offert au client, et c'est l'abonnement d'hébergement SolidServ qui rembourse la création, puis devient un revenu récurrent.",
          "Ce modèle n'est possible que parce que nos machines nous appartiennent. Un hébergeur qui loue ses serveurs paie chaque site chaque mois : il ne peut pas se permettre d'offrir le développement.",
        ],
        paragraphsEn: [
          'Folding services into hosting means, for example, our partnership with Cabinet Marthelot: the showcase website is free for the client, and the SolidServ hosting subscription pays back the build, then becomes recurring revenue.',
          'This model only works because we own our machines. A host that rents its servers pays for every site every month: it cannot afford to give the build away.',
        ],
        linkLabel: 'Lire l\'étude de cas Cabinet Marthelot',
        linkLabelEn: 'Read the Cabinet Marthelot case study',
        linkRouter: '/etudes-de-cas/cabinet-marthelot',
      },
      {
        type: 'features',
        label: 'Les leçons',
        labelEn: 'The lessons',
        title: 'Ce que nous en retenons.',
        titleEn: 'What we take away.',
        items: [
          { icon: 'ri-user-search-fill', title: 'L\'expérience terrain vaut un business plan', titleEn: 'Field experience beats a business plan', desc: 'SolidServ est né de quelqu\'un qui avait vu le métier de l\'intérieur.', descEn: 'SolidServ was born from someone who had seen the trade from the inside.' },
          { icon: 'ri-forbid-2-fill', title: 'Un mauvais client coûte plus qu\'il ne rapporte', titleEn: 'A bad customer costs more than they pay', desc: 'La crypto nous a appris à choisir nos clients plutôt qu\'à les accumuler.', descEn: 'Crypto taught us to choose our customers rather than pile them up.' },
          { icon: 'ri-repeat-fill', title: 'Le récurrent finance l\'avenir', titleEn: 'Recurring revenue funds the future', desc: 'Un revenu qui revient chaque mois permet de planifier, d\'investir et de dire non.', descEn: 'Revenue that comes back every month lets you plan, invest and say no.' },
        ],
        linkLabel: 'Voir notre infrastructure',
        linkLabelEn: 'See our infrastructure',
        linkRouter: '/server',
      },
    ],
    cta: {
      title: 'Vous cherchez un hébergement ?',
      titleEn: 'Looking for hosting?',
      content: "VPS, serveurs dédiés, serveurs de jeu ou sites web : hébergez vos projets sur des machines qui nous appartiennent, en France.",
      contentEn: 'VPS, dedicated servers, game servers or websites: host your projects on machines we own, in France.',
      btn: 'Découvrir nos offres serveurs',
      btnEn: 'Discover our server offers',
      btnIcon: 'ri-server-line',
      routerLink: '/prestation/server',
    },
  },
  {
    slug: 'tyrolium-ui',
    brand: 'Tyrolium UI',
    logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png',
    partnerCombo: { logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png', group: 'Tyrolium', name: 'Design System' },
    gradient: 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)',
    category: 'Design · Identité',
    categoryEn: 'Design · Identity',
    period: '2017 – 2026',
    dataAsOf: 'octobre 2026',
    dataAsOfEn: 'October 2026',
    title: 'Nous avons fusionné nos identités. Presque tout le monde était contre.',
    titleEn: 'We merged our identities. Almost everyone was against it.',
    summary: "Pendant des années, chaque idée de Tyrolium avait son site, sa charte et son back-office. En juillet 2026, pour nos 9 ans, tout a convergé : une API, un back-office, une identité forte et une librairie de composants partagée par toutes les filiales. Le choix le plus critiqué de notre histoire.",
    summaryEn: "For years, every Tyrolium idea had its own website, brand guidelines and back office. In July 2026, for our 9th anniversary, everything converged: one API, one back office, one strong identity and a component library shared by every subsidiary. The most criticised choice in our history.",
    headline: { value: '1', title: 'identité pour tout le groupe', titleEn: 'identity for the whole group' },
    heroStats: [
      { value: '9 ans', valueEn: '9 years', title: 'Pour arriver à une seule identité', titleEn: 'To reach a single identity' },
      { value: '5', title: 'Projets maintenus après 2023', titleEn: 'Projects kept after 2023' },
      { value: '4', title: 'Piliers : API, back-office, identité, librairie', titleEn: 'Pillars: API, back office, identity, library' },
      { value: '1', title: 'Compte Useritium pour tous les services', titleEn: 'Useritium account for every service' },
    ],
    facts: [
      { label: 'Sujet', labelEn: 'Topic', value: 'Unification de l\'identité du groupe', valueEn: "Unifying the group's identity" },
      { label: 'Aboutissement', labelEn: 'Milestone', value: 'Juillet 2026, pour les 9 ans', valueEn: 'July 2026, for the 9th anniversary' },
      { label: 'Socle', labelEn: 'Foundation', value: 'Une API, un back-office, une librairie, une identité', valueEn: 'One API, one back office, one library, one identity' },
      { label: 'Comptes', labelEn: 'Accounts', value: 'Useritium, partout', valueEn: 'Useritium, everywhere' },
      { label: 'Documentation', labelEn: 'Documentation', value: 'design.tyrolium.fr' },
    ],
    link: { label: 'design.tyrolium.fr', url: 'https://design.tyrolium.fr' },
    blocks: [
      {
        type: 'text',
        label: 'Avant',
        labelEn: 'Before',
        title: 'Une idée, un site, une charte, un back-office.',
        titleEn: 'One idea, one website, one brand, one back office.',
        paragraphs: [
          "Pendant des années, chaque nouvelle idée de Tyrolium devenait un projet à part : son propre site, sa propre direction artistique, son propre back-office. C'était rapide pour démarrer, et impossible à maintenir.",
          "Les logos en sont la meilleure preuve. Le premier logo de Tyrolium dure presque trois ans avant d'être remplacé en 2021, en même temps que le nom passe de « Tyrolium Entertainment » à « Tyrolium ». TyroMusic change de logo en 2020, devient Sélémusium en 2021 avec une toute nouvelle charte, puis change encore de logo en 2022. En août 2021, trois projets changent de logo le même jour. TyroStudio passe d'un phénix en 2020 à un nouveau logo en 2025, avant de devenir TyroCiel en 2026.",
        ],
        paragraphsEn: [
          'For years, every new Tyrolium idea became a separate project: its own website, its own art direction, its own back office. It was quick to start, and impossible to maintain.',
          'The logos are the best proof. Tyrolium\'s first logo lasted almost three years before being replaced in 2021, when the name went from "Tyrolium Entertainment" to "Tyrolium". TyroMusic changed its logo in 2020, became Sélémusium in 2021 with brand-new guidelines, then changed its logo again in 2022. In August 2021, three projects changed their logos on the same day. TyroStudio went from a phoenix in 2020 to a new logo in 2025, before becoming TyroCiel in 2026.',
        ],
        linkLabel: 'Voir la chronologie',
        linkLabelEn: 'See the timeline',
        linkRouter: '/chronologie',
      },
      {
        type: 'story',
        label: '2023',
        labelEn: '2023',
        title: 'L\'année où tout s\'est arrêté.',
        titleEn: 'The year everything stopped.',
        paragraphs: [
          "En janvier 2023, j'ai restructuré toute la holding. Nous nous sommes séparés d'énormément de personnes, et nous avons fermé une grande partie de nos filiales. Seuls TyroServ, Influnias, SolidServ, TyroCiel et Gamenium ont été maintenus.",
          "La dispersion avait un coût. Chaque projet avait sa charte, son site, ses outils, et plus personne ne pouvait tout faire tenir. C'est de là qu'est partie l'idée d'un socle commun.",
        ],
        paragraphsEn: [
          'In January 2023, I restructured the entire holding. We parted ways with a great many people, and we closed a large share of our subsidiaries. Only TyroServ, Influnias, SolidServ, TyroCiel and Gamenium were kept.',
          'Spreading ourselves thin had a cost. Every project had its own brand, website and tools, and no one could hold it all together anymore. That is where the idea of a common foundation came from.',
        ],
        author: 'Maxime Tournier',
        authorRole: 'PDG & Fondateur de Tyrolium',
        authorRoleEn: 'CEO & Founder of Tyrolium',
      },
      {
        type: 'features',
        label: 'Aujourd\'hui',
        labelEn: 'Today',
        title: 'Un socle, quatre piliers.',
        titleEn: 'One foundation, four pillars.',
        paragraphs: [
          "Plutôt que de multiplier les outils, nous avons tout uniformisé. Chaque filiale s'appuie désormais sur la même base.",
        ],
        paragraphsEn: [
          'Instead of multiplying tools, we standardised everything. Every subsidiary now relies on the same foundation.',
        ],
        items: [
          { icon: 'ri-git-merge-fill', title: 'Une seule API', titleEn: 'One API', desc: 'Toutes les filiales parlent à la même API, au lieu d\'un serveur par projet.', descEn: 'Every subsidiary talks to the same API, instead of one server per project.' },
          { icon: 'ri-dashboard-3-fill', title: 'Un seul back-office', titleEn: 'One back office', desc: 'Offres, clients, sites, comptes : tout se gère depuis un back-office interne unique.', descEn: 'Offers, customers, websites, accounts: everything is managed from a single internal back office.' },
          { icon: 'ri-fingerprint-fill', title: 'Une identité forte', titleEn: 'A strong identity', desc: 'Une charte commune et un compte Useritium unique, de TyroServ à NexiumiaCRM.', descEn: 'Shared brand guidelines and a single Useritium account, from TyroServ to NexiumiaCRM.' },
          { icon: 'ri-layout-masonry-fill', title: 'Une librairie partagée', titleEn: 'A shared library', desc: 'Tyrolium UI, nos composants communs, documentés et disponibles sur design.tyrolium.fr.', descEn: 'Tyrolium UI, our shared components, documented and available on design.tyrolium.fr.' },
        ],
      },
      {
        type: 'text',
        label: 'Juillet 2026',
        labelEn: 'July 2026',
        title: 'Les 9 ans : l\'aboutissement.',
        titleEn: 'The 9th anniversary: the culmination.',
        paragraphs: [
          "Pour les 9 ans de Tyrolium, nous avons refait toute l'identité visuelle : nouveau design system, nouveaux logos et nouvelle charte pour Tyrolium et l'ensemble de ses filiales. C'est l'aboutissement de tout ce que le groupe a construit depuis 2017.",
          "Un mois plus tôt, en juin 2026, Tyrolium avait abandonné l'étiquette d'« entreprise multisectorielle » pour se présenter officiellement comme une holding technologique. Une holding, une identité.",
        ],
        paragraphsEn: [
          "For Tyrolium's 9th anniversary, we rebuilt the entire visual identity: a new design system, new logos and new guidelines for Tyrolium and all its subsidiaries. It is the culmination of everything the group has built since 2017.",
          'A month earlier, in June 2026, Tyrolium had dropped the "multi-sector company" label to officially present itself as a tech holding. One holding, one identity.',
        ],
      },
      {
        type: 'story',
        label: 'Le choix critiqué',
        labelEn: 'The criticised choice',
        title: 'La plupart des têtes pensantes n\'en voulaient pas.',
        titleEn: 'Most of our leading minds did not want it.',
        paragraphs: [
          "Il faut l'avouer : ce choix a été très critiqué, au sein même de Tyrolium. La plupart des têtes pensantes du groupe n'en voulaient pas. Fusionner les identités d'un studio de jeu vidéo, d'un hébergeur, d'une agence de VTubers et d'un CRM, sur le papier, ça ne va pas ensemble.",
          "Je l'ai fait quand même, et je pense avoir trouvé un bon équilibre. Le socle est commun : la typographie, les composants, la structure des sites. Mais chaque filiale garde son logo, sa couleur et son ton. On reconnaît Tyrolium partout, sans confondre TyroCiel avec SolidServ.",
        ],
        paragraphsEn: [
          "We have to admit it: this choice was heavily criticised, even inside Tyrolium. Most of the group's leading minds did not want it. Merging the identities of a video game studio, a hosting company, a VTuber agency and a CRM does not, on paper, fit together.",
          'I did it anyway, and I think I found a good balance. The foundation is shared: the typography, the components, the structure of the websites. But each subsidiary keeps its logo, its colour and its tone. You recognise Tyrolium everywhere, without mistaking TyroCiel for SolidServ.',
        ],
        author: 'Maxime Tournier',
        authorRole: 'PDG & Fondateur de Tyrolium',
        authorRoleEn: 'CEO & Founder of Tyrolium',
      },
      {
        type: 'features',
        label: 'Le résultat',
        labelEn: 'The result',
        title: 'Moins à maintenir, plus de synergie.',
        titleEn: 'Less to maintain, more synergy.',
        paragraphs: [
          "Le vrai gain n'est pas visible de l'extérieur. Il est dans tout ce que nous n'avons plus à faire en double, et dans tout ce que les filiales peuvent désormais faire ensemble.",
        ],
        paragraphsEn: [
          'The real gain is not visible from the outside. It lies in everything we no longer have to do twice, and in everything the subsidiaries can now do together.',
        ],
        items: [
          { icon: 'ri-tools-fill', title: 'Corriger une fois, partout', titleEn: 'Fix once, everywhere', desc: "Une correction ou une amélioration sur un composant profite immédiatement à tous les sites du groupe.", descEn: "A fix or an improvement to a component instantly benefits every website in the group." },
          { icon: 'ri-time-fill', title: 'Du temps rendu aux projets', titleEn: 'Time given back to projects', desc: "Moins de sites, de chartes et de back-offices à maintenir, c'est plus de temps pour développer les produits.", descEn: 'Fewer websites, guidelines and back offices to maintain means more time to build the products.' },
          { icon: 'ri-team-fill', title: 'Des équipes qui circulent', titleEn: 'Teams that move freely', desc: "Mêmes outils, même structure : passer d'une filiale à l'autre ne demande plus de tout réapprendre.", descEn: 'Same tools, same structure: moving from one subsidiary to another no longer means relearning everything.' },
          { icon: 'ri-share-forward-fill', title: 'Des filiales qui se renforcent', titleEn: 'Subsidiaries that strengthen each other', desc: "Un compte Useritium, une identité reconnaissable : un utilisateur d'une filiale découvre naturellement les autres.", descEn: 'One Useritium account, one recognisable identity: a user of one subsidiary naturally discovers the others.' },
        ],
      },
      {
        type: 'features',
        label: 'Les leçons',
        labelEn: 'The lessons',
        title: 'Ce que nous en retenons.',
        titleEn: 'What we take away.',
        items: [
          { icon: 'ri-focus-3-fill', title: 'Une marque forte vaut mieux que dix faibles', titleEn: 'One strong brand beats ten weak ones', desc: 'Chaque logo changé, chaque charte abandonnée était de l\'énergie perdue.', descEn: 'Every changed logo, every abandoned guideline was wasted energy.' },
          { icon: 'ri-contrast-2-fill', title: 'Uniformiser n\'est pas effacer', titleEn: 'Standardising is not erasing', desc: 'Un socle commun laisse à chaque filiale son logo, sa couleur et sa personnalité.', descEn: 'A shared foundation leaves each subsidiary its logo, colour and personality.' },
          { icon: 'ri-compass-3-fill', title: 'Un choix impopulaire peut être le bon', titleEn: 'An unpopular choice can be the right one', desc: 'Écouter les critiques, oui. Renoncer à une vision parce qu\'elle dérange, non.', descEn: 'Listen to criticism, yes. Give up on a vision because it is uncomfortable, no.' },
        ],
        linkLabel: 'Découvrir notre vision',
        linkLabelEn: 'Discover our vision',
        linkRouter: '/vision',
      },
    ],
    cta: {
      title: 'Votre marque se disperse ?',
      titleEn: 'Is your brand spreading thin?',
      content: "Site, identité, outils : nous construisons des projets web sur un socle solide, pensé pour durer.",
      contentEn: 'Website, identity, tools: we build web projects on a solid foundation, designed to last.',
      btn: 'Découvrir nos prestations web',
      btnEn: 'Discover our web services',
      btnIcon: 'ri-palette-line',
      routerLink: '/prestation/web',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(c => c.slug === slug);
}
