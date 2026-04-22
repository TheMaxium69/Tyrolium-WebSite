import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITyroUiNavbarMenuItem } from 'tyrolium-ui';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: ITyroUiNavbarMenuItem;
  @Input() isSubProject = false;
  @Input() horizontal = false;
  @Input() expanded = false;
  @Output() toggleSub = new EventEmitter<void>();
}
