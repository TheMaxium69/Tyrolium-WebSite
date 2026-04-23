import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiLangService, TyroUiSubnav } from 'tyrolium-ui';

@Component({
  selector: 'app-prestation-layout',
  imports: [TyroUiSubnav, RouterOutlet],
  template: `
    <div class="prestation-wrapper">
      <tyro-ui-subnav [pages]="subnavPages()" [isFixed]="true" [havePlaceholder]="false"></tyro-ui-subnav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .prestation-wrapper { margin-top: 63px; }
    @media (max-width: 768px) { .prestation-wrapper { margin-top: 57px; } }
  `],
})
export class PrestationLayout {
  readonly lang = inject(TyroUiLangService).lang;

  public subnavPages = computed<ITyroUiNavbarPages[]>(() =>
    this.lang() === 'en'
      ? [
          { label: 'Website',    link: '/prestation/web' },
          { label: 'Server',     link: '/prestation/server' },
          { label: 'Training',   link: '/prestation/formation' },
          { label: 'Incubator',  link: '/prestation/incubateur' },
          { label: 'Minecraft',  link: '/prestation/minecraft' },
        ]
      : [
          { label: 'Site Web',    link: '/prestation/web' },
          { label: 'Serveur',     link: '/prestation/server' },
          { label: 'Formation',   link: '/prestation/formation' },
          { label: 'Incubateur',  link: '/prestation/incubateur' },
          { label: 'Minecraft',   link: '/prestation/minecraft' },
        ]
  );
}
