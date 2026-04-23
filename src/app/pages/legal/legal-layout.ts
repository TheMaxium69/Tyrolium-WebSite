import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiSubnav } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-layout',
  imports: [TyroUiSubnav, RouterOutlet],
  templateUrl: './legal-layout.html',
  styleUrl: './legal-layout.css',
})
export class LegalLayout {
  public subnavPages: ITyroUiNavbarPages[] = [
    { label: 'Mentions légales', link: '/legal/terms' },
    { label: 'CGU',              link: '/legal/cgu' },
    { label: 'CGV',              link: '/legal/cgv' },
  ];
}
