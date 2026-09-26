import {Component, inject, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import { filter, take } from 'rxjs';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-cgv',
  templateUrl: './legal-cgv.html',
  styleUrl: '../legal-shared.css',
  imports: [],
  encapsulation: ViewEncapsulation.None,
})
export class LegalCgv {
  readonly lang = inject(TyroUiLangService).lang;
  readonly currentYear = new Date().getFullYear();

  constructor() {
    // Arrivée via un lien #fragment (ex. depuis /vision) : décalage sous la navbar + la barre d'onglets
    const fragment = inject(ActivatedRoute).snapshot.fragment;
    if (fragment) {
      inject(Router).events
        .pipe(filter(e => e instanceof Scroll), take(1))
        .subscribe(() => setTimeout(() => this.scrollTo(fragment, 160, 'instant'), 50));
    }
  }

  scrollTo(id: string, offset = 80, behavior: ScrollBehavior = 'smooth') {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior });
    }
  }
}
