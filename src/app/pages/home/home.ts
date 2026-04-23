import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { TyroUiCTA, NavbarMenuCategory, ITyroUiNavbarMenuItem, TyroUiLangService } from 'tyrolium-ui';
import { ProjectCard } from '../../components/project-card/project-card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Header, TyroUiCTA, ProjectCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly lang = inject(TyroUiLangService).lang;

  readonly featuredProjects: ITyroUiNavbarMenuItem[] =
    (NavbarMenuCategory.find(c => c.label === 'Projets')?.items ?? [])
}
