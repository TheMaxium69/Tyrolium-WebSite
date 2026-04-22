import { Component, signal } from '@angular/core';
import { NavbarMenuCategory, ITyroUiNavbarMenuItem, TyroUiCTA } from 'tyrolium-ui';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [TyroUiCTA, ProjectCard],
})
export class Project {
  public readonly mainProjects: ITyroUiNavbarMenuItem[] =
    NavbarMenuCategory.find(c => c.label === 'Projets')?.items ?? [];

  private readonly expandedNames = signal<string[]>([]);

  toggle(name: string): void {
    const current = this.expandedNames();
    this.expandedNames.set(
      current.includes(name)
        ? current.filter(n => n !== name)
        : [...current, name]
    );
  }

  isExpanded(name: string): boolean {
    return this.expandedNames().includes(name);
  }
}
