
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
  type: 'text' | 'compare' | 'features' | 'story' | 'stats' | 'bars' | 'steps' | 'showcase' | 'testimonial';
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
    logo: 'assets/tyrolium-ui/projects/Tyrolium-White.png',
    partnerLogo: 'assets/etudes/cabinet-marthelot-white.png',
    gradient: 'linear-gradient(135deg, #0533c8 0%, #7a0b8f 55%, #BF0000 100%)',
    category: 'Web · Partenariat',
    categoryEn: 'Web · Partnership',
    period: 'Depuis juillet 2026',
    periodEn: 'Since July 2026',
    dataAsOf: 'septembre 2026',
    dataAsOfEn: 'September 2026',
    title: 'Un site pro offert, financé par l\'hébergement',
    titleEn: 'A professional website, paid for by hosting',
    summary: "Avec le Cabinet Marthelot, nous offrons à des artisans, indépendants et TPE un site vitrine développé par nos équipes, sans coût de création : seul l'hébergement est payant, en abonnement.",
    summaryEn: 'With Cabinet Marthelot, we give craftspeople, freelancers and small businesses a showcase website built by our team, with no build cost: only the hosting is paid, as a subscription.',
    headline: { value: '0 €', valueEn: '€0', title: 'de création facturée au client', titleEn: 'build cost for the client' },
    heroStats: [
      { value: '0 €',    valueEn: '€0',    title: 'Création du site facturée', titleEn: 'Website build cost' },
      { value: '7 jours', valueEn: '7 days', title: 'Délai de livraison maximum', titleEn: 'Maximum delivery time' },
      { value: '.fr',    title: 'Uniquement des domaines français', titleEn: 'French domains only' },
      { value: '2',      title: 'Entreprises déjà équipées', titleEn: 'Businesses already equipped' },
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
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(c => c.slug === slug);
}
