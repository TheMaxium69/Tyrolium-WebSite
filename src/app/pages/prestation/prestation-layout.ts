import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiSubnav } from 'tyrolium-ui';

@Component({
  selector: 'app-prestation-layout',
  imports: [TyroUiSubnav, RouterOutlet],
  template: `
    <div class="prestation-wrapper">
      <tyro-ui-subnav [pages]="subnavPages" [isFixed]="true" [havePlaceholder]="false"></tyro-ui-subnav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .prestation-wrapper { margin-top: 63px; }
    @media (max-width: 768px) { .prestation-wrapper { margin-top: 57px; } }
  `],
})
export class PrestationLayout {
  public subnavPages: ITyroUiNavbarPages[] = [
    { label: 'Site Web',    link: '/prestation/web', color: '#002080' },
    { label: 'Serveur',     link: '/prestation/server', color: '#006c4f' },
    { label: 'Minecraft',   link: '/prestation/minecraft', color: '#92400e' },
    { label: 'Incubateur',  link: '/prestation/incubateur', color: '#2e1065' },
    { label: 'Formation',   link: '/prestation/formation', color: '#0c4a6e' },
  ];
}
