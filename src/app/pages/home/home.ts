import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';
import { ProjectCard } from '../../components/project-card/project-card';

const FEATURED = ['TyroServ', 'Useritium', 'SolidServ'];

@Component({
  selector: 'app-home',
  imports: [Header, TyroUiCTA, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly featuredProjects: ITyroUiNavbarMenuItem[] =
    (NavbarMenuCategory.find(c => c.label === 'Projets')?.items ?? [])
      .filter(p => FEATURED.includes(p.name))
      .sort((a, b) => FEATURED.indexOf(a.name) - FEATURED.indexOf(b.name));
}
