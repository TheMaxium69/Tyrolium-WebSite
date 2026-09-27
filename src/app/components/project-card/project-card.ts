import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ITyroUiNavbarMenuItem, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly lang = inject(TyroUiLangService).lang;
  @Input() project!: ITyroUiNavbarMenuItem;
  @Input() isSubProject = false;
  @Input() horizontal = false;
  @Input() expanded = false;
  @Input() noSubProject = false;
  @Output() toggleSub = new EventEmitter<void>();

  private readonly router = inject(Router);

  /** Lien interne (ex. /prestation) : navigation Angular, sans recharger la page */
  onClick(event: MouseEvent): void {
    const link = this.project?.link ?? '';
    if (!link.startsWith('/') || event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    this.router.navigateByUrl(link);
  }
}
