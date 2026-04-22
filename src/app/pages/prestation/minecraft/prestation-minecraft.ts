import { Component } from '@angular/core';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';
import { ProjectCard } from '../../../components/project-card/project-card';

@Component({
  selector: 'app-prestation-minecraft',
  templateUrl: './prestation-minecraft.html',
  styleUrls: ['../prestation-shared.css', './prestation-minecraft.css'],
  imports: [TyroUiCTA, ProjectCard],
})
export class PrestationMinecraft {
  readonly tyroServProject: ITyroUiNavbarMenuItem =
    NavbarMenuCategory.find(c => c.label === 'Projets')?.items.find(i => i.name === 'TyroServ') ?? {
      name: 'TyroServ',
      description: 'Serveur Minecraft moddé depuis 2017',
      image: 'https://tyrolium.fr/Contenu/Image/Tyrolium%20ServerMC%20Sword%203D.png',
      link: 'https://tyroserv.fr',
    };
}
