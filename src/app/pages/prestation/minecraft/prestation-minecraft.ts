import { Component, inject, computed } from '@angular/core';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem, TyroUiLangService } from 'tyrolium-ui';
import { ProjectCard } from '../../../components/project-card/project-card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-prestation-minecraft',
  templateUrl: './prestation-minecraft.html',
  styleUrls: ['../prestation-shared.css', './prestation-minecraft.css'],
  imports: [TyroUiCTA, ProjectCard, RouterLink],
})
export class PrestationMinecraft {
  readonly lang = inject(TyroUiLangService).lang;

  currentYear: number = new Date().getFullYear();

  readonly tyroServProject = computed<ITyroUiNavbarMenuItem>(() => ({
    name: this.lang() === 'en' ? 'TyroServ - Our reference since 2017' : 'TyroServ - Notre référence depuis 2017',
    description: this.lang() === 'en'
      ? 'TyroServ is our own modded Minecraft server, active since 2017. Modded PVP-Faction (season 3), custom account system, in-house anti-cheat. Concrete proof of our Minecraft expertise.'
      : 'TyroServ est notre propre serveur Minecraft moddé, actif depuis 2017. un PVP-Faction en saison 3, système de comptes custom, mod orignal, anti-cheat maison. La preuve concrète de notre expertise sur Minecraft.',
    image: 'assets/tyrolium-ui/projects/TyroServ.png',
    link: 'https://tyroserv.fr',
  }));
}
