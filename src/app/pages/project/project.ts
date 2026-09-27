import { Component, inject } from '@angular/core';
import { NavbarMenuCategory, ITyroUiNavbarMenuItem, TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';
import { ProjectCard } from '../../components/project-card/project-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [TyroUiCTA, ProjectCard, RouterLink],
})
export class Project {
  readonly lang = inject(TyroUiLangService).lang;

  public readonly mainProjects: ITyroUiNavbarMenuItem[] =
    NavbarMenuCategory.find(c => c.label === 'Filiales')?.items ?? [];

  /** Regroupement des filiales par pôle du modèle circulaire (voir /vision) */
  public readonly groups: { key: string; icon: string; label: string; labelEn: string; desc: string; descEn: string; names: string[]; extra?: ITyroUiNavbarMenuItem[] }[] = [
    {
      key: 'b2c', icon: 'ri-gamepad-fill',
      label: 'Divertissement & communauté', labelEn: 'Entertainment & community',
      desc: 'Les projets qui font entrer le grand public dans notre écosystème.',
      descEn: 'The projects that bring the general public into our ecosystem.',
      names: ['TyroCiel', 'TyroServ', 'Gamenium'],
    },
    {
      key: 'b2b', icon: 'ri-building-2-fill',
      label: 'Solutions pour les entreprises', labelEn: 'Business solutions',
      desc: 'Hébergement et logiciels : les activités qui financent tout le reste.',
      descEn: 'Hosting and software: the activities that fund everything else.',
      names: ['SolidServ', 'NexiumiaCRM'],
      extra: [{
        name: 'Prestations',
        description: 'Sites web, serveurs, formation',
        descriptionEn: 'Websites, servers, training',
        image: 'assets/tyrolium-ui/projects/Tyrolium.png',
        imageLight: 'assets/tyrolium-ui/projects/Tyrolium-White.png',
        link: '/prestation',
      }],
    },
    {
      key: 'influence', icon: 'ri-megaphone-fill',
      label: 'Influence', labelEn: 'Influence',
      desc: 'Nos agences de créateurs, qui font connaître nos produits.',
      descEn: 'Our creator agencies, which make our products known.',
      names: ['Influnias', 'Vturias'],
    },
    {
      key: 'core', icon: 'ri-fingerprint-fill',
      label: 'Le compte qui relie tout', labelEn: 'The account that connects it all',
      desc: 'Un seul compte pour accéder à toutes nos filiales.',
      descEn: 'One single account to access all our subsidiaries.',
      names: ['Useritium'],
    },
  ];

  /** Filiales d'un groupe, avec leurs sous-filiales toujours affichées à côté (ex. Vturias après Influnias) */
  projectsOf(names: string[], extra: ITyroUiNavbarMenuItem[] = []): ITyroUiNavbarMenuItem[] {
    return names
      .map(n => this.mainProjects.find(p => p.name === n))
      .filter((p): p is ITyroUiNavbarMenuItem => !!p)
      .flatMap(p => [p, ...(p.subItems ?? [])])
      .concat(extra);
  }

  /** Filiales du menu absentes des groupes (sécurité si une filiale est ajoutée) */
  get ungrouped(): ITyroUiNavbarMenuItem[] {
    const all = this.groups.flatMap(g => g.names);
    return this.mainProjects.filter(p => !all.includes(p.name));
  }
}
