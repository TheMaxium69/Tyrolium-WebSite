import { Component, inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';
import { LABS, Lab, getLabBySlug } from '../labs-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-labs-one',
  imports: [RouterLink],
  templateUrl: './labs-one.html',
  styleUrl: './labs-one.css',
  encapsulation: ViewEncapsulation.None,
})
export class LabsOne implements OnInit, OnDestroy {
  readonly lang = inject(TyroUiLangService).lang;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private sub!: Subscription;

  lab!: Lab;
  prevLab: Lab | null = null;
  nextLab: Lab | null = null;

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      const found = getLabBySlug(slug);
      if (!found) { this.router.navigate(['/labs']); return; }

      this.lab = found;
      const idx = LABS.indexOf(found);
      this.prevLab = LABS[idx - 1] ?? null;
      this.nextLab = LABS[idx + 1] ?? null;
    });
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }

  statusColor(): string {
    const map: Record<Lab['status'], string> = {
      active:   '#16a34a',
      beta:     '#ea580c',
      archived: '#64748b',
      concept:  '#9333ea',
    };
    return map[this.lab.status];
  }

  statusLabel(): string {
    const map: Record<Lab['status'], [string, string]> = {
      active:   ['Actif',    'Active'],
      beta:     ['Bêta',     'Beta'],
      archived: ['Archivé',  'Archived'],
      concept:  ['Concept',  'Concept'],
    };
    return this.lang() === 'en' ? map[this.lab.status][1] : map[this.lab.status][0];
  }
}
