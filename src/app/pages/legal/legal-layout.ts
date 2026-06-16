import {Component, computed, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiLangService, TyroUiSubnav } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-layout',
  imports: [TyroUiSubnav, RouterOutlet],
  templateUrl: './legal-layout.html',
  styleUrl: './legal-layout.css',
})
export class LegalLayout {
  readonly lang = inject(TyroUiLangService).lang;

  public subnavPages = computed<ITyroUiNavbarPages[]>(() =>
    this.lang() === 'en'
      ? [
          { label: 'Legal notice',  link: '/legal/terms' },
          { label: 'TOS',           link: '/legal/cgu' },
          { label: 'Terms of Sale', link: '/legal/cgv' },
          { label: 'Privacy',       link: '/legal/privacy' },
        ]
      : [
          { label: 'Mentions légales',        link: '/legal/terms' },
          { label: 'CGU',                     link: '/legal/cgu' },
          { label: 'CGV',                     link: '/legal/cgv' },
          { label: 'Confidentialité',         link: '/legal/privacy' },
        ]
  );
}
