import { Component } from '@angular/core';
import { NavbarMenuCategory, ITyroUiNavbarMenuItem } from 'tyrolium-ui';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  private readonly gradientBg = 'linear-gradient(135deg, #001a6e 0%, #ee2b2b 100%)';

  public readonly mainProjects: ITyroUiNavbarMenuItem[] =
    (NavbarMenuCategory.find(c => c.label === 'Projets')?.items ?? []).map(item => ({
      ...item,
      iconBg: this.gradientBg,
      subItems: item.subItems?.map(sub => ({ ...sub, iconBg: this.gradientBg }))
    }));

  public readonly otherItems: ITyroUiNavbarMenuItem[] =
    (NavbarMenuCategory.find(c => c.label === 'Autre')?.items ?? []).map(item => ({
      ...item,
      iconBg: this.gradientBg,
      subItems: item.subItems?.map(sub => ({ ...sub, iconBg: this.gradientBg }))
    }));
}
