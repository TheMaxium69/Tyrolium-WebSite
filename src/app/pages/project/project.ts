import { Component } from '@angular/core';
import { NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  public readonly mainProjects: ITyroUiNavbarMenuItem[] =
    NavbarMenuCategory.find(c => c.label === 'Projets')?.items ?? [];

  public readonly otherItems: ITyroUiNavbarMenuItem[] =
    NavbarMenuCategory.find(c => c.label === 'Autre')?.items ?? [];
}
