import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';
import { CaseVoice, getCaseStudyBySlug } from '../../pages/etudes/etudes-data';

export interface CaseCardStat {
  value: string;
  valueEn?: string;
  label: string;
  labelEn?: string;
}

/**
 * Carte « Étude de cas » réutilisable : met en avant une étude sur une autre page.
 * Les données (logo, dégradé, chiffre phare, lien) viennent de etudes-data.ts ;
 * titre, texte, chiffres et citation peuvent être personnalisés pour chaque page.
 */
@Component({
  selector: 'app-case-study-card',
  imports: [RouterLink],
  templateUrl: './case-study-card.html',
  styleUrl: './case-study-card.css',
})
export class CaseStudyCard {
  readonly lang = inject(TyroUiLangService).lang;

  readonly slug = input.required<string>();
  /** 'feature' : grande carte horizontale · 'compact' : carte verticale pour les grilles */
  readonly variant = input<'feature' | 'compact'>('feature');

  readonly title = input<string>();
  readonly titleEn = input<string>();
  readonly text = input<string>();
  readonly textEn = input<string>();

  /** chiffre du panneau coloré (par défaut : chiffre phare de l'étude) */
  readonly panel = input<CaseCardStat>();
  /** ligne de chiffres sous le texte */
  readonly stats = input<CaseCardStat[]>([]);
  /** nom d'une personne des témoignages de l'étude, pour afficher sa citation */
  readonly voice = input<string>();
  /** remplace le logo de l'étude (optionnel) */
  readonly logoOverride = input<string>();
  /** remplace le nom affiché après « Étude de cas » (optionnel) */
  readonly brandOverride = input<string>();
  readonly brandOverrideEn = input<string>();

  readonly study = computed(() => getCaseStudyBySlug(this.slug()));

  readonly logo = computed(() => {
    const s = this.study();
    return this.logoOverride() ?? (s ? (s.partnerLogo ?? s.logo) : '');
  });

  readonly brand = computed(() => {
    const b = this.brandOverride();
    return b ? this.t(b, this.brandOverrideEn()) : (this.study()?.brand ?? '');
  });

  readonly panelStat = computed<CaseCardStat | null>(() => {
    const p = this.panel();
    if (p) return p;
    const h = this.study()?.headline;
    return h ? { value: h.value ?? '', valueEn: h.valueEn, label: h.title ?? '', labelEn: h.titleEn } : null;
  });

  readonly quote = computed<CaseVoice | null>(() => {
    const name = this.voice();
    if (!name) return null;
    for (const b of this.study()?.blocks ?? []) {
      const v = b.voices?.find(x => x.name === name);
      if (v) return v;
    }
    return null;
  });

  t(fr?: string, en?: string): string {
    return (this.lang() === 'en' ? (en ?? fr) : fr) ?? '';
  }
}
