import {Component, inject, ViewEncapsulation} from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-privacy',
  templateUrl: './legal-privacy.html',
  styleUrl: '../legal-shared.css',
  imports: [],
  encapsulation: ViewEncapsulation.None,
})
export class LegalPrivacy {
  readonly lang = inject(TyroUiLangService).lang;
  readonly currentYear = new Date().getFullYear();

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
