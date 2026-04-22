import { Component } from '@angular/core';
import { NavbarMenuCategory, ITyroUiNavbarMenuItem, TyroUiCTA } from 'tyrolium-ui';

@Component({
    selector: 'app-project',
    templateUrl: './project.html',
    styleUrl: './project.css',
    imports: [TyroUiCTA]
})
export class Project {
  public readonly mainProjects: ITyroUiNavbarMenuItem[] =
    NavbarMenuCategory.find(c => c.label === 'Projets')?.items ?? [];
}
