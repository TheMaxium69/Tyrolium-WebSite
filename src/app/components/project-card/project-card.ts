import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
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
}
