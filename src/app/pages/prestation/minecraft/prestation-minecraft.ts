import { Component } from '@angular/core';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';
import { ProjectCard } from '../../../components/project-card/project-card';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-prestation-minecraft',
  templateUrl: './prestation-minecraft.html',
  styleUrls: ['../prestation-shared.css', './prestation-minecraft.css'],
    imports: [TyroUiCTA, ProjectCard, RouterLink],
})
export class PrestationMinecraft {
  readonly tyroServProject: ITyroUiNavbarMenuItem = {
      name: 'TyroServ - Notre référence depuis 2017',
      description: 'TyroServ est notre propre serveur Minecraft moddé, actif depuis 2017. PVP-Faction moddé (saison 3), système de comptes custom, anti-cheat maison. La preuve concrète de notre expertise Minecraft.',
      image: 'https://tyrolium.fr/Contenu/Image/Tyrolium%20ServerMC%20Sword%203D.png',
      link: 'https://tyroserv.fr',
    };
}
