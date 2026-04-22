import { Component } from '@angular/core';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';
import { ProjectCard } from '../../../components/project-card/project-card';

@Component({
  selector: 'app-prestation-server',
  templateUrl: './prestation-server.html',
  styleUrls: ['../prestation-shared.css', './prestation-server.css'],
  imports: [TyroUiCTA, ProjectCard],
})
export class PrestationServer {
  readonly solidServProject: ITyroUiNavbarMenuItem =
    NavbarMenuCategory.find(c => c.label === 'Projets')?.items.find(i => i.name === 'SolidServ') ?? {
      name: 'SolidServ',
      description: 'Hébergeur de serveurs haute disponibilité',
      image: 'https://tyrolium.fr/Contenu/Image/SolidServ%20Site.png',
      link: 'https://solidserv.fr',
    };
}
