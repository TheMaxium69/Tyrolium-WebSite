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
    { label: 'Site Web',    link: '/prestation/web' },
    { label: 'Serveur',     link: '/prestation/server' },
    { label: 'Minecraft',   link: '/prestation/minecraft' },
    { label: 'Incubateur',  link: '/prestation/incubateur' },
    { label: 'Formation',   link: '/prestation/formation'},
  ];
}
