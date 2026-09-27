import { Component, inject, AfterViewInit, OnDestroy, NgZone, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TyroUiLangService, TyroUiCTA } from 'tyrolium-ui';

export interface TeamPerson {
  name: string;
  /** pseudo(s) utilisés dans la communauté */
  pseudo?: string;
  role?: string;
  roleEn?: string;
  /** sans photo : initiales affichées */
  photo?: string;
  /** ex. 'TyroStage S2', '2023 – 2024' */
  tags?: string[];
  tagsEn?: string[];
  bio?: string;
  bioEn?: string;
  link?: { label: string; url: string };
  /** carte mise en avant (plus grande) */
  featured?: boolean;
  /** pôle du modèle circulaire (page Vision) */
  pole?: 'b2c' | 'b2b' | 'influence';
}

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.html',
  styleUrls: ['./equipe.css'],
  imports: [CommonModule, RouterLink, TyroUiCTA],
  encapsulation: ViewEncapsulation.None,
})
export class Equipe implements AfterViewInit, OnDestroy {

  readonly lang = inject(TyroUiLangService).lang;

  private observer?: IntersectionObserver;

  // ── À la tête de Tyrolium ──────────────────────────────────────────────

  readonly founder: TeamPerson = {
    name: 'Maxime Tournier',
    role: 'PDG & Fondateur',
    roleEn: 'CEO & Founder',
    photo: 'assets/teams/Maxime_Tournier.jpg',
    bio: "Fondateur de Tyrolium en 2017, Maxime a fait grandir le groupe d'un serveur Minecraft à une holding technologique. Visionnaire, entrepreneur et développeur, il impulse la stratégie et la culture de tout l'écosystème Tyrolium.",
    bioEn: 'Founder of Tyrolium in 2017, Maxime grew the group from a Minecraft server into a tech holding. Visionary, entrepreneur and developer, he drives the strategy and culture of the entire Tyrolium ecosystem.',
  };

  readonly cofounder: TeamPerson = {
    name: 'Pierre-Louis Devaud',
    role: 'Cofondateur historique de TyroServ · Cofondateur de SolidServ',
    roleEn: 'Historic co-founder of TyroServ · Co-founder of SolidServ',
    photo: 'assets/teams/Pierre-Louis_Devaud.jpg',
    bio: "Présent depuis les débuts de TyroServ, Pierre-Louis est le plus grand nom de Tyrolium après son fondateur. Aujourd'hui, il porte la stratégie de SolidServ et reste un conseiller technique de premier plan pour tout le groupe.",
    bioEn: "There since TyroServ's early days, Pierre-Louis is the biggest name at Tyrolium after its founder. Today, he leads SolidServ's strategy and remains a key technical advisor to the whole group.",
  };

  // ── Le noyau ───────────────────────────────────────────────────────────

  readonly core: TeamPerson[] = [
    {
      name: 'Mathys Lacoque',
      role: 'Réalisateur de Rhodotales · Développeur web & jeux vidéo',
      roleEn: 'Director of Rhodotales · Web & video game developer',
      bio: "Pilier créatif de TyroCiel, il est à l'origine de toute la vision du studio. Développeur de formation, il vient aussi en renfort sur nos projets clients.",
      bioEn: "TyroCiel's creative pillar, he is behind the studio's entire vision. A developer by training, he also lends a hand on our client projects.",
      photo: 'assets/teams/Mathys_Lacoque.jpg',
      pole: 'b2c',
      tags: ['TyroCiel', 'TyroStage S6'],
      tagsEn: ['TyroCiel', 'TyroStage S6'],
    },
    {
      name: 'Luigi Guyot',
      role: 'UX/UI Designer · Développeur web',
      roleEn: 'UX/UI Designer · Web developer',
      bio: "Un ancien de Tyrolium, bras droit historique sur toute la partie prestations. Il peaufine et finalise les projets clients quand le fondateur n'est pas disponible.",
      bioEn: "A Tyrolium veteran and long-time right hand on all client services. He polishes and finishes client projects when the founder is unavailable.",
      pole: 'b2b',
      tags: ['Prestations'],
      tagsEn: ['Client services'],
      photo: 'assets/teams/Luigi_Guyot.jpg',
    },
    {
      name: 'Aurore Pluquet--Lanvers',
      photo: 'assets/teams/Aurore_Pluquet--Lanvers.jpg',
      role: 'Cofondatrice de Vturias',
      roleEn: 'Co-founder of Vturias',
      pole: 'influence',
      tags: ['Vturias', 'TyroServ'],
      tagsEn: ['Vturias', 'TyroServ'],
      bio: "Elle porte la vision des projets d'influence de Tyrolium, et la direction artistique et les relations de Vturias. Ancienne responsable de la modération de TyroServ (saison 2).",
      bioEn: "She leads the vision for Tyrolium's influence projects, and Vturias's artistic direction and relationships. Former head of moderation at TyroServ (season 2).",
    },
  ];

  // ── Le réseau ──────────────────────────────────────────────────────────

  readonly network: TeamPerson[] = [
    {
      name: 'Maëwan Marthelot',
      role: "Président du Cabinet Marthelot · Cofondateur d'Influnias",
      roleEn: 'President of Cabinet Marthelot · Co-founder of Influnias',
      photo: 'assets/teams/Maewan_Marthelot.jpg',
      tags: ['Membre 2020 – 2024', 'Partenaire depuis 2023'],
      tagsEn: ['Member 2020 – 2024', 'Partner since 2023'],
      bio: "Cofondateur d'Influnias, longtemps à la tête de la communication de Tyrolium. Son cabinet accompagne aujourd'hui les entrepreneurs, en partenariat avec nous.",
      bioEn: "Co-founder of Influnias, long in charge of Tyrolium's communication. His firm now supports entrepreneurs, in partnership with us.",
      link: { label: 'Étude de cas', url: '/etudes-de-cas/cabinet-marthelot' },
    },
    {
      name: 'Wassim Bouridah',
      photo: 'assets/teams/Wassim_Bouridah.jpg',
      role: 'Entrepreneur, monteur vidéo freelance',
      roleEn: 'Entrepreneur, freelance video editor',
      tags: ['Membre 2020 – 2023', 'Prestataire depuis 2023'],
      tagsEn: ['Member 2020 – 2023', 'Contractor since 2023'],
      bio: "Pilier de la communication de Tyrolium pendant trois ans, il est aujourd'hui entrepreneur et monteur vidéo freelance reconnu, et accompagne toujours le groupe.",
      bioEn: "A pillar of Tyrolium's communication for three years, he is now a well-known entrepreneur and freelance video editor, and still supports the group.",
    },
  ];

  // ── Ils ont construit Tyrolium (anciens marquants, avec photo) ─────────

  readonly alumni: TeamPerson[] = [
    {
      name: 'Norman Jorge des Freitas',
      photo: 'assets/teams/Norman_Jorge_Des_Freitas.jpg',
      role: 'Directeur adjoint de Tyrolium',
      roleEn: 'Deputy director of Tyrolium',
      tags: ['2019 – 2023'],
      bio: "Directeur adjoint de Tyrolium pendant quatre ans, Norman a cofondé de nombreux projets du groupe, dont Wonderlium et Sélémusium.",
      bioEn: 'Deputy director of Tyrolium for four years, Norman co-founded many of the group\'s projects, including Wonderlium and Sélémusium.',
      featured: true,
    },
    {
      name: 'Ethan Cudey',
      photo: 'assets/teams/Ethan_Cudey.jpg',
      role: 'Cofondateur historique de TyroServ',
      roleEn: 'Historic co-founder of TyroServ',
      tags: ['2017 – 2020'],
      bio: "Troisième cofondateur historique de TyroServ, aux côtés de Maxime et Pierre-Louis, il a posé avec eux les bases du serveur qui a donné naissance à Tyrolium.",
      bioEn: 'The third historic co-founder of TyroServ, alongside Maxime and Pierre-Louis, he laid with them the foundations of the server that gave birth to Tyrolium.',
      featured: true,
    },
    { name: 'Grzegorz Kurzeja', role: 'Administrateur de TyroServ', roleEn: 'TyroServ administrator', photo: 'assets/teams/Grzegorz_Kurzeja.jpg', tags: ['TyroServ · Saison 1', '2020'], tagsEn: ['TyroServ · Season 1', '2020'] },
    { name: 'Florian Torrao', role: 'Responsable de la modération de TyroServ', roleEn: 'Head of moderation, TyroServ', photo: 'assets/teams/Florian_Torrao.jpg', tags: ['TyroServ · Saison 1', '2019 – 2020'], tagsEn: ['TyroServ · Season 1', '2019 – 2020'] },
    { name: 'Mathis Dubief', pseudo: 'Hide', role: 'Cofondateur de Gamenium, journaliste jeu vidéo', roleEn: 'Co-founder of Gamenium, video game journalist', photo: 'assets/teams/Mathis_Dubief.jpg', tags: ['2019 – 2023'] },
    { name: 'Kevin Muziak', role: 'Développeur web & Minecraft', roleEn: 'Web & Minecraft developer', photo: 'assets/teams/Kevin_Muziak.jpg', tags: ['TyroStage S2', '2023 – 2024'], tagsEn: ['TyroStage S2', '2023 – 2024'] },
    { name: 'Clément Charrassier', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Clément_Charrassier.jpg', tags: ['TyroStage S2', '2023 – 2024'] },
    { name: 'Rayan Quessada', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Rayan_Quessada.jpg', tags: ['TyroStage S2', '2023 – 2024'] },
    { name: 'Angelo Fernandez', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Angelo_Fernandez.jpg', tags: ['TyroStage S2', '2023 – 2024'] },
    { name: 'Marilyne Naili', role: 'Développeuse web', roleEn: 'Web developer', photo: 'assets/teams/Marilyne_Naili.jpg', tags: ['TyroStage S1', '2023 – 2024'] },
    { name: 'Elias Poder', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Elias_Poder.jpg', tags: ['TyroStage S1', '2023 – 2024'] },
    { name: 'Oscar Boguszewski', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Oscar_Boguszewski.jpg', tags: ['TyroStage S3 · S5', '2023 – 2025'] },
    { name: 'Adèle Jausons', role: 'Développeuse web', roleEn: 'Web developer', photo: 'assets/teams/Adèle_Jausons.jpg', tags: ['TyroStage S5', '2024 – 2025'] },
    { name: 'Bastien Thiebaut', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Bastien_Thiebaut.jpg', tags: ['TyroStage S5', '2024 – 2025'] },
    { name: 'Erynn Vandre', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Erynn_Vandre.jpg', tags: ['TyroStage S5', '2024 – 2025'] },
    { name: 'Maktoum Abdelhak', role: 'Développeur web', roleEn: 'Web developer', photo: 'assets/teams/Maktoum_Abdelhak.jpg', tags: ['TyroStage S5', '2024 – 2025'] },
    { name: 'Arnaud Monel', role: 'Développeur', roleEn: 'Developer', photo: 'assets/teams/Arnaud_Monel.jpg', tags: ['TyroStage S6', '2026'] },
    { name: 'Noa Guilhot', role: 'Développeur', roleEn: 'Developer', photo: 'assets/teams/Noa_Guilhot.jpg', tags: ['TyroStage S6', '2026'] },
    { name: 'Daniel Taniou', pseudo: 'Eroniage', role: 'Vidéaste, graphiste · Wonderlium', roleEn: 'Video creator, graphic designer · Wonderlium', photo: 'assets/teams/Daniel_Taniou.jpg',
      bio: "Fondateur de l'un des deux projets rachetés par Tyrolium pour donner naissance à Wonderlium, le collectif de vidéastes du groupe.",
      bioEn: "Founder of one of the two projects acquired by Tyrolium to create Wonderlium, the group's collective of video creators.",
      tags: ['2019 – 2023'],
      featured: true },
    { name: 'Esteban Mignotte', role: 'Administrateur réseau', roleEn: 'Network administrator', photo: 'assets/teams/Esteban_Mignotte.jpg', tags: ['TyroStage S6', '2026'] },
    { name: 'Dylan Argentino', role: 'Support technique, modération', roleEn: 'Technical support, moderation', photo: 'assets/teams/Dylan_Argentino.jpg', tags: ['TyroServ · Saison 1', '2019 – 2023'], tagsEn: ['TyroServ · Season 1', '2019 – 2023'] },
    { name: 'Flavien Dechoz', role: 'Support technique, modération', roleEn: 'Technical support, moderation', photo: 'assets/teams/Flavien_Dechoz.jpg', tags: ['TyroServ · Saison 1', '2019 – 2023'], tagsEn: ['TyroServ · Season 1', '2019 – 2023'] },
  ];

  // ── Contributeurs (tout le monde, sans photo) ──────────────────────────

  readonly contributors: TeamPerson[] = [
    { name: 'Yanis Berouiche', pseudo: 'TyroStage S1' },
    { name: 'Ren Lim' },
    { name: 'Delphine Rodriguez' },
    { name: 'Léna Chervier' },
    { name: 'Lola Dutouquet', pseudo: 'Yuyu' },
    { name: 'Angelina' },
    { name: 'Enzo Munier', pseudo: 'Sleegzy' },
    { name: 'Denez' },
    { name: 'Steeve Tournier', pseudo: 'OheOhe' },
    { name: 'NesHuw' },
    { name: 'Suzuya' },
    { name: 'LuRoX' },
    { name: 'Muplodoc' },
    { name: 'Nymphapoke' },
    { name: 'GuildPoke' },
    { name: 'Yann Schneider', pseudo: 'Faylen' },
    { name: 'Firuster88' },
    { name: 'Emma Porel' },
    { name: 'Arthur Allegrini' },
    { name: 'Adam Magadur', pseudo: 'insidepvp_off' },
    { name: 'PixelBoy' },
    { name: 'Maxime', pseudo: 'Maxtor' },
    { name: 'Akram Bouridah' },
    { name: 'Amine Nouali' },
    { name: 'Raphaël Heskia', pseudo: 'Néo-pitch' },
    { name: 'Samuel Podymski', pseudo: 'podym' },
    { name: 'Arthur Verschelde', pseudo: 'the_brucelee' },
    { name: 'Théotime Vandevoorde Rostankowski' },
    { name: 'Edward Thouvenin' },
    { name: 'Manon', pseudo: 'Flammes' },
    { name: 'Majikuma' },
    { name: 'Maxime Cointet', pseudo: 'MaxDu53' },
    { name: 'Angélique Herard' },
    { name: 'André Fernandes' },
    { name: 'Maxime Grandidier', pseudo: 'okuni' },
    { name: 'Anas' },
    { name: 'Aimen Laouadi', pseudo: 'TyroStage S4' },
    { name: 'Anaël Payet', pseudo: 'TyroStage S4' },
    { name: 'Nabil Kadouri', pseudo: 'TyroStage S4' },
    { name: 'Jiangshi Noni', pseudo: 'Vturias' },
    { name: 'LéaReinePoulpe', pseudo: 'Vturias' },
    { name: 'Jiyu', pseudo: 'Vturias' },
    { name: 'Manosator', pseudo: 'Vturias' },
    { name: 'Damnyts', pseudo: 'Vturias' },
    { name: 'Mevennuss', pseudo: 'Vturias' },
    { name: 'Noshi', pseudo: 'Vturias' },
    { name: 'Kurai Tsuki', pseudo: 'Vturias' },
  ];

  // ── Galerie (photos à compléter avec celles des locaux) ────────────────

  readonly photos = [
    { src: 'assets/equipe/locaux-reunion-2023.jpg', caption: 'Réunion dans nos locaux, octobre 2023', captionEn: 'Meeting at our offices, October 2023' },
    { src: 'assets/equipe/locaux-ouverture-2023.jpg', caption: 'Nos premiers locaux, octobre 2023', captionEn: 'Our first offices, October 2023' },
    { src: 'assets/equipe/locaux-2024.jpg', caption: 'Dans nos locaux, octobre 2024', captionEn: 'At our offices, October 2024' },
    { src: 'assets/equipe/locaux-bureau.jpg', caption: 'Dans nos locaux', captionEn: 'At our offices' },
    { src: 'assets/equipe/locaux-poste.jpg', caption: 'Dans nos locaux', captionEn: 'At our offices' },
    { src: 'assets/equipe/locaux-selfie.jpg', caption: 'Entre deux lignes de code', captionEn: 'Between two lines of code' },
    { src: 'assets/etudes/tyrostage/groupe-s2-s3-locaux-1.jpg', caption: 'Dans nos locaux', captionEn: 'At our offices' },
    { src: 'assets/etudes/tyrostage/groupe-s5-locaux-2.jpg', caption: 'Dans nos locaux', captionEn: 'At our offices' },
    { src: 'assets/etudes/tyrostage/groupe-s1-s2-cafe.jpg', caption: 'Au café, avec les saisons 1 et 2', captionEn: 'At the café, with seasons 1 and 2' },
    { src: 'assets/etudes/tyrostage/groupe-s6-cafe.jpg', caption: 'Au café, avec la saison 6', captionEn: 'At the café, with season 6' },
  ];

  /** Nombre total de personnes qui ont construit Tyrolium (fondateur compris) */
  readonly totalPeople = 2 + this.core.length + this.network.length + this.alumni.length + this.contributors.length;

  readonly poleLabels = {
    b2c:       { fr: 'Grand public', en: 'Consumers',  icon: 'ri-gamepad-fill' },
    b2b:       { fr: 'Entreprises',  en: 'Businesses', icon: 'ri-building-2-fill' },
    influence: { fr: 'Influence',    en: 'Influence',  icon: 'ri-megaphone-fill' },
  } as const;

  initials(name: string): string {
    return name.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('eq-visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      document.querySelectorAll('.eq-animate').forEach(el => this.observer!.observe(el));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
