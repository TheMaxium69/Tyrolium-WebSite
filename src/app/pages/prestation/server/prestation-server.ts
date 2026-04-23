import { Component } from '@angular/core';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';
import { ProjectCard } from '../../../components/project-card/project-card';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-prestation-server',
  templateUrl: './prestation-server.html',
  styleUrls: ['../prestation-shared.css', './prestation-server.css'],
    imports: [TyroUiCTA, ProjectCard, RouterLink],
})
export class PrestationServer {
  readonly solidServProject: ITyroUiNavbarMenuItem = {
      name: 'Powered by SolidServ',
      description: 'Nos offres d\'hébergement sont opérées via SolidServ, notre infrastructure dédiée aux communautés et aux projets tech exigeants. Fiabilité, performance et accompagnement au cœur de chaque offre.',
      image: 'https://tyrolium.fr/Contenu/Image/SolidServ%20Site.png',
      link: 'https://solidserv.fr',
    };
}
