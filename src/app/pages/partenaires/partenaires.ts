import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiLangService } from 'tyrolium-ui';

export interface Partner {
  name: string;
  logo: string;
  link?: string;
  description?: string;
  descriptionEn?: string;
}

export interface PartnerCategory {
  label: string;
  labelEn: string;
  icon: string;
  partners: Partner[];
}

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.html',
  styleUrls: ['./partenaires.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Partenaires {

  readonly lang = inject(TyroUiLangService).lang;

  readonly categories: PartnerCategory[] = [
    {
      label: 'Partenaires Académiques',
      labelEn: 'Academic Partners',
      icon: 'ri-graduation-cap-fill',
      partners: [
        { name: 'Human Booster',  logo: 'assets/partners/human-booster.png',  link: 'https://www.humanbooster.com',  description: 'École & accélérateur tech',          descriptionEn: 'Tech school & accelerator' },
        { name: 'Simplon',        logo: 'assets/partners/simplon.png',         link: 'https://simplon.co',            description: 'Formation numérique inclusive',      descriptionEn: 'Inclusive digital training' },
        { name: 'Ynov Connect',   logo: 'assets/partners/ynov-connect.png',    link: 'https://www.ynov.com',          description: 'Réseau des campus Ynov',             descriptionEn: 'Ynov campus network' },
        { name: 'IPSSI',          logo: 'assets/partners/ipssi.png',           link: 'https://www.ipssi.net',         description: 'École informatique & cybersécurité', descriptionEn: 'IT & cybersecurity school' },
      ],
    },
    {
      label: 'Partenaires Institutionnels',
      labelEn: 'Institutional Partners',
      icon: 'ri-bank-fill',
      partners: [
        { name: 'Région Auvergne-Rhône-Alpes', logo: 'assets/partners/region-aura.png',    link: 'https://www.auvergnerhonealpes.fr', description: 'Région AuRA', descriptionEn: 'AuRA Region' },
        { name: 'Région Grand-Est',             logo: 'assets/partners/region-grand-est.png', link: 'https://www.grandest.fr',         description: 'Région Grand-Est', descriptionEn: 'Grand-Est Region' },
        { name: 'French Tech St-Étienne/Lyon',  logo: 'assets/partners/french-tech.png',   link: 'https://lafrenchtech.com',          description: 'Écosystème startup', descriptionEn: 'Startup ecosystem' },
      ],
    },
    {
      label: 'Partenaires Technologiques',
      labelEn: 'Technology Partners',
      icon: 'ri-cpu-fill',
      partners: [
        { name: 'Proxmox', logo: 'assets/partners/proxmox.png', link: 'https://www.proxmox.com',   description: 'Virtualisation & conteneurs',  descriptionEn: 'Virtualisation & containers' },
        { name: 'Stripe',  logo: 'assets/partners/stripe.png',  link: 'https://stripe.com',        description: 'Paiement en ligne',           descriptionEn: 'Online payment' },
        { name: 'OVH',     logo: 'assets/partners/ovh.png',     link: 'https://www.ovhcloud.com',  description: 'Cloud & hébergement',         descriptionEn: 'Cloud & hosting' },
        { name: 'Tebex',   logo: 'assets/partners/tebex.png',   link: 'https://www.tebex.io',      description: 'Monétisation gaming',         descriptionEn: 'Gaming monetisation' },
      ],
    },
    {
      label: 'Partenaires Professionnels',
      labelEn: 'Professional Partners',
      icon: 'ri-suitcase-fill',
      partners: [
        { name: 'Bâtir Positif', logo: 'assets/partners/batir-positif.png', description: 'Construction & RSE',     descriptionEn: 'Construction & CSR' },
        { name: 'Graphic Nook',  logo: 'assets/partners/graphic-nook.png',  description: 'Design & identité',     descriptionEn: 'Design & identity' },
        { name: 'Evogue',        logo: 'assets/partners/evogue.png',         description: 'Communication',         descriptionEn: 'Communication' },
        { name: 'Ascentia',      logo: 'assets/partners/ascentia.png',       description: 'Projets Minecraft',     descriptionEn: 'Minecraft projects' },
      ],
    },
    {
      label: 'Partenaires Associatifs',
      labelEn: 'Association Partners',
      icon: 'ri-group-fill',
      partners: [
        { name: 'Génération IUM', logo: 'assets/partners/generation-ium.png', description: "Association d'entrepreneurs", descriptionEn: 'Entrepreneurs association' },
        { name: 'MO5',            logo: 'assets/partners/mo5.png',             link: 'https://www.mo5.com',             description: 'Patrimoine du jeu vidéo', descriptionEn: 'Video game heritage' },
      ],
    },
  ];
}
