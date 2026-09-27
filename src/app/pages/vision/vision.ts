import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';
import { CaseStudyCard } from '../../components/case-study-card/case-study-card';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.html',
  styleUrls: ['./vision.css'],
  imports: [TyroUiCTA, RouterLink, CaseStudyCard],
  encapsulation: ViewEncapsulation.None,
})
export class Vision {

  readonly lang = inject(TyroUiLangService).lang;

  readonly facts = [
    { value: '2017', label: 'Premier serveur Minecraft', labelEn: 'First Minecraft server' },
    { value: '13',   label: "Ans, l'âge du fondateur au lancement", labelEn: "Years old, the founder's age at launch" },
    { value: '0 €',  label: 'Levés auprès d\'investisseurs', labelEn: 'Raised from investors' },
    { value: '3',    label: 'Offres de rachat sérieuses refusées', labelEn: 'Serious acquisition offers turned down' },
  ];

  readonly poles = [
    {
      icon: 'ri-megaphone-fill',
      title: 'Influence',
      titleEn: 'Influence',
      projects: ['Influnias', 'Vturias'],
      desc: "Nous possédons nos propres créateurs. Un vivier publicitaire maîtrisé, à coût quasi nul et à l'image irréprochable, qui fait connaître nos produits au grand public.",
      descEn: 'We own our creators. A controlled, near-zero-cost advertising pool with a spotless image, which brings our products to the general public.',
    },
    {
      icon: 'ri-gamepad-fill',
      title: 'Grand public',
      titleEn: 'Consumers',
      projects: ['TyroServ', 'TyroCiel', 'Gamenium'],
      desc: "Nos projets B2C font entrer le public dans l'écosystème. Ce public, c'est une génération de joueurs, de créateurs et de futurs entrepreneurs - qui apprend à nous faire confiance.",
      descEn: 'Our consumer projects bring the public into the ecosystem. That public is a generation of gamers, creators and future entrepreneurs - who learn to trust us.',
    },
    {
      icon: 'ri-building-2-fill',
      title: 'Entreprises',
      titleEn: 'Businesses',
      projects: ['SolidServ', 'Prestations', 'Formation', 'NexiumiaCRM'],
      desc: "Les ventes les plus rentables. Hébergement, prestations, formation et logiciels génèrent la liquidité qui finance tout le reste - à commencer par l'influence.",
      descEn: 'The most profitable sales. Hosting, services, training and software generate the cash that funds everything else - starting with influence.',
    },
  ];

  readonly conquests = [
    {
      step: '01',
      brand: 'SolidServ',
      title: "Démonter le marché de l'hébergement",
      titleEn: 'Tear down the hosting market',
      rivals: ['AWS', 'OVHcloud'],
      desc: 'Le premier front, et le plus important. Une infrastructure française maîtrisée de bout en bout, à des prix qui obligent les géants à se justifier.',
      descEn: 'The first front, and the most important one. A French infrastructure controlled end to end, at prices that force the giants to justify theirs.',
    },
    {
      step: '02',
      brand: 'Useritium',
      title: "Reprendre l'identité numérique",
      titleEn: 'Take back digital identity',
      rivals: ['Google Sign-In', 'Apple Sign-In'],
      desc: "Votre identité en ligne n'a pas à appartenir à une multinationale étrangère. Useritium est le compte universel français, sans revente de données.",
      descEn: 'Your online identity should not belong to a foreign multinational. Useritium is the French universal account, with no data resale.',
    },
    {
      step: '03',
      brand: 'TyroCiel',
      title: "Devenir le Japon de l'Occident",
      titleEn: 'Become the Japan of the West',
      rivals: ['Studios AAA', 'Crunch'],
      rivalsEn: ['AAA studios', 'Crunch'],
      desc: "Revenir à l'art du jeu vidéo : des équipes réduites, des projets pensés, des mondes ouverts ambitieux. Sans crunch, sans compromis, financés par nos propres fonds.",
      descEn: 'Back to the art of video games: small teams, well-thought-out projects, ambitious open worlds. No crunch, no compromise, funded with our own money.',
    },
    {
      step: '04',
      brand: 'Influnias · Vturias',
      title: "Redonner ses lettres de noblesse à l'influence",
      titleEn: 'Restore influence to its former glory',
      rivals: ["L'hypocrisie"],
      rivalsEn: ['Hypocrisy'],
      desc: "Un métier trop souvent réduit au placement de produit douteux. Nous en faisons un travail maîtrisé et respecté, au service des créateurs comme des marques.",
      descEn: 'A profession too often reduced to dubious product placement. We make it a well-run, respected craft that serves creators and brands alike.',
    },
  ];

  readonly redLines = [
    {
      icon: 'ri-database-2-fill',
      title: 'Vendre vos données',
      titleEn: 'Sell your data',
      desc: 'Jamais. À personne. À aucun prix.',
      descEn: 'Never. To anyone. At any price.',
    },
    {
      icon: 'ri-map-pin-2-fill',
      title: 'Héberger nos données hors de France',
      titleEn: 'Host our data outside France',
      desc: 'Nos données restent sur le sol français. Sans condition.',
      descEn: 'Our data stays on French soil. No conditions.',
    },
    {
      icon: 'ri-price-tag-3-fill',
      title: 'Être racheté',
      titleEn: 'Be acquired',
      desc: "Tyrolium n'est pas à vendre. Trois offres sérieuses ont déjà été refusées depuis 2017.",
      descEn: 'Tyrolium is not for sale. Three serious offers have already been turned down since 2017.',
    },
    {
      icon: 'ri-hand-coin-fill',
      title: 'Lever des fonds',
      titleEn: 'Raise funds',
      desc: "100 % autofinancé. L'indépendance est la seule façon de pouvoir promettre qu'on concurrencera les géants.",
      descEn: 'Fully self-funded. Independence is the only way to credibly promise we will compete with the giants.',
    },
    {
      icon: 'ri-graduation-cap-fill',
      title: 'Juger sur un diplôme',
      titleEn: 'Judge by a diploma',
      desc: 'La passion, le talent et la résilience passent avant le CV.',
      descEn: 'Passion, talent and resilience come before the résumé.',
    },
    {
      icon: 'ri-time-fill',
      title: 'Imposer le crunch',
      titleEn: 'Impose crunch',
      desc: 'Des équipes réduites, des projets pensés, et le respect de ceux qui créent.',
      descEn: 'Small teams, well-thought-out projects, and respect for those who create.',
    },
  ];
}
