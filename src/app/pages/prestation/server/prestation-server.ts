import { Component, inject, computed } from '@angular/core';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem, TyroUiLangService } from 'tyrolium-ui';
import { ProjectCard } from '../../../components/project-card/project-card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-prestation-server',
  templateUrl: './prestation-server.html',
  styleUrls: ['../prestation-shared.css', './prestation-server.css'],
  imports: [TyroUiCTA, ProjectCard, RouterLink],
})
export class PrestationServer {
  readonly lang = inject(TyroUiLangService).lang;

  readonly solidServProject = computed<ITyroUiNavbarMenuItem>(() => ({
    name: 'Powered by SolidServ',
    description: this.lang() === 'en'
      ? 'Our hosting offers are operated via SolidServ, our infrastructure dedicated to communities and demanding tech projects. Reliability, performance and support at the heart of every offer.'
      : "Nos offres d'hébergement sont opérées via SolidServ, notre infrastructure dédiée aux communautés et aux projets tech exigeants. Fiabilité, performance et accompagnement au cœur de chaque offre.",
    image: 'assets/SolidServ.png',
    link: 'https://solidserv.fr',
  }));
}
