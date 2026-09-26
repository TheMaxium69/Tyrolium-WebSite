import { Component, inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';
import { CaseStudy, getCaseStudyBySlug } from '../etudes-data';

@Component({
  selector: 'app-etudes-one',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './etudes-one.html',
  styleUrl: './etudes-one.css',
  encapsulation: ViewEncapsulation.None,
})
export class EtudesOne implements OnInit, OnDestroy {
  readonly lang = inject(TyroUiLangService).lang;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private sub!: Subscription;

  study!: CaseStudy;

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const found = getCaseStudyBySlug(params.get('slug') ?? '');
      if (!found) { this.router.navigate(['/etudes-de-cas']); return; }
      this.study = found;
    });
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }

  /** Texte FR/EN (repli sur le FR si la version EN manque) */
  t(fr?: string, en?: string): string {
    return (this.lang() === 'en' ? (en ?? fr) : fr) ?? '';
  }

  tl(fr?: string[], en?: string[]): string[] {
    return (this.lang() === 'en' ? (en ?? fr) : fr) ?? [];
  }
}
