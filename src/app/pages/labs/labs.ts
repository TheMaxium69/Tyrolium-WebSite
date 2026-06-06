import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';
import { LABS, Lab } from './labs-data';

@Component({
  selector: 'app-labs',
  imports: [RouterLink],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
  encapsulation: ViewEncapsulation.None,
})
export class Labs {
  readonly lang = inject(TyroUiLangService).lang;
  readonly labs: Lab[] = LABS;

  statusColor(status: Lab['status']): string {
    const map: Record<Lab['status'], string> = {
      active:   '#16a34a',
      beta:     '#ea580c',
      archived: '#64748b',
      concept:  '#9333ea',
    };
    return map[status];
  }

  statusLabel(lab: Lab): string {
    const map: Record<Lab['status'], [string, string]> = {
      active:   ['Actif',    'Active'],
      beta:     ['Bêta',     'Beta'],
      archived: ['Archivé',  'Archived'],
      concept:  ['Concept',  'Concept'],
    };
    return this.lang() === 'en' ? map[lab.status][1] : map[lab.status][0];
  }
}
