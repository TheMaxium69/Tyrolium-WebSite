import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-rse',
  templateUrl: './rse.html',
  styleUrls: ['./rse.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Rse {

  readonly lang = inject(TyroUiLangService).lang;

  readonly commitments = [
    {
      icon: 'ri-flag-2-fill',
      title: 'Souveraineté numérique',
      titleEn: 'Digital sovereignty',
      desc: "Nos serveurs, nos données, notre code : tout reste sur le territoire français. Chez Tyrolium, refuser la dépendance aux géants étrangers n'est pas une posture - c'est une conviction.",
      descEn: "Our servers, our data, our code - everything stays on French soil. At Tyrolium, refusing dependency on foreign tech giants is not a stance, it's a conviction.",
    },
    {
      icon: 'ri-award-fill',
      title: 'Mérite & excellence',
      titleEn: 'Merit & excellence',
      desc: "Nous croyons que la qualité prime sur la quantité, et que l'excellence se construit par le travail et l'exigence. Chaque projet porte la marque d'un savoir-faire forgé dans la durée.",
      descEn: "We believe quality outweighs quantity, and that excellence is built through hard work and high standards. Every project carries the hallmark of long-standing expertise.",
    },
    {
      icon: 'ri-map-pin-2-fill',
      title: 'Ancrage territorial',
      titleEn: 'Regional roots',
      desc: "Tyrolium est né en France, grandit en France et investit dans les régions françaises. Nos partenariats avec Auvergne-Rhône-Alpes et le Grand-Est témoignent d'un engagement concret pour les territoires.",
      descEn: "Tyrolium was born in France, grows in France and invests in French regions. Our partnerships with Auvergne-Rhône-Alpes and Grand-Est reflect a concrete commitment to local territories.",
    },
    {
      icon: 'ri-user-star-fill',
      title: 'Emploi & formation locale',
      titleEn: 'Local jobs & training',
      desc: "Nous privilégions le recrutement local et les partenariats avec des écoles françaises. Former les talents de demain sur notre sol, c'est renforcer l'indépendance technologique du pays.",
      descEn: "We prioritise local recruitment and partnerships with French schools. Training tomorrow's talent on home soil strengthens the country's technological independence.",
    },
    {
      icon: 'ri-seedling-fill',
      title: 'Entrepreneuriat & transmission',
      titleEn: 'Entrepreneurship & transmission',
      desc: "À travers notre incubateur, nous accompagnons des entrepreneurs qui veulent bâtir quelque chose de solide et de durable. Transmettre une culture du travail bien fait, c'est aussi notre mission.",
      descEn: "Through our incubator, we support entrepreneurs who want to build something solid and lasting. Passing on a culture of craftsmanship is also part of our mission.",
    },
    {
      icon: 'ri-money-euro-circle-fill',
      title: 'Pérennité & indépendance',
      titleEn: 'Longevity & independence',
      desc: "Tyrolium se finance par son activité, pas par des subventions. Notre indépendance financière est une garantie de liberté : pas d'investisseur étranger, pas de pression externe, pas de compromis sur nos convictions.",
      descEn: "Tyrolium finances itself through its activity, not subsidies. Our financial independence guarantees freedom: no foreign investor, no external pressure, no compromise on our convictions.",
    },
  ];

  readonly metrics = [
    { value: '2017', label: 'Fondée en', labelEn: 'Founded in', icon: 'ri-calendar-fill' },
    { value: '100%',  label: 'Données hébergées en France', labelEn: 'Data hosted in France', icon: 'ri-flag-2-fill' },
    { value: '5+',    label: 'Partenaires académiques', labelEn: 'Academic partners', icon: 'ri-graduation-cap-fill' },
    { value: '8+',    label: 'Filiales & projets', labelEn: 'Subsidiaries & projects', icon: 'ri-git-branch-fill' },
  ];

  readonly initiatives = [
    {
      icon: 'ri-lightbulb-fill',
      title: 'Incubateur Tyrolium',
      titleEn: 'Tyrolium Incubator',
      desc: "Un programme d'accompagnement destiné aux porteurs de projets tech qui partagent nos valeurs : exigence, indépendance et ambition française. Nous apportons réseau, expertise et infrastructure.",
      descEn: "A support programme for tech project holders who share our values: high standards, independence and French ambition. We provide network, expertise and infrastructure.",
      badge: 'Actif',
      badgeEn: 'Active',
    },
    {
      icon: 'ri-code-box-fill',
      title: 'Formation & mentorat',
      titleEn: 'Training & mentoring',
      desc: "En partenariat avec Simplon, Ynov et Human Booster, Tyrolium ouvre ses portes aux étudiants et aux reconvertis. Parce qu'une nation forte en technologie se construit par ses hommes et ses femmes.",
      descEn: "In partnership with Simplon, Ynov and Human Booster, Tyrolium opens its doors to students and career changers. Because a technologically strong nation is built by its people.",
      badge: 'Partenariats',
      badgeEn: 'Partnerships',
    },
    {
      icon: 'ri-server-fill',
      title: 'Infrastructure souveraine',
      titleEn: 'Sovereign infrastructure',
      desc: "SolidServ, notre branche hébergement, propose des solutions 100% françaises pour les entreprises qui refusent de confier leurs données à des plateformes étrangères soumises à des législations extérieures.",
      descEn: "SolidServ, our hosting branch, offers 100% French solutions for companies that refuse to entrust their data to foreign platforms subject to external legislation.",
      badge: 'SolidServ',
      badgeEn: 'SolidServ',
    },
    {
      icon: 'ri-user-fill',
      title: 'Des comptes universels français',
      titleEn: 'Universal French accounts',
      desc: "Développé en France, hébergé en France, conçu pour les Français : Useritium est notre réponse souveraine aux comptes universels imposés par les grandes plateformes étrangères. Vos données vous appartiennent - et elles restent sur notre sol.",
      descEn: "Built in France, hosted in France, designed for French users: Useritium is our sovereign answer to the universal accounts pushed by foreign tech platforms. Your data belongs to you - and it stays on French soil.",
      badge: 'Useritium',
      badgeEn: 'Useritium',
    },
  ];
}
