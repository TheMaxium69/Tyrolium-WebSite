import {Component, inject, ViewEncapsulation} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-privacy',
  templateUrl: './legal-privacy.html',
  styleUrl: '../legal-shared.css',
  imports: [RouterLink],
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
