import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiButtom, TyroUiFooter, TyroUiNavbar } from 'tyrolium-ui';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiButtom, TyroUiNavbar, Header, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /*
   *
   * GLOBAL VARIABLE
   *
   * */

  public APP_ENV = 'DEV';
  public PROJECT_NAME = 'Tyrolium';
  public PROJECT_LOGO = 'https://tyrolium.fr/Contenu/Image/Tyrolium%20Site.png';

  public pages: ITyroUiNavbarPages[] = [
    { label: 'Accueil', link: '/', icon: 'ri-home-line' },
    { label: 'Projet', link: '/project', icon: 'ri-folder-line' },
    {
      label: 'Produit',
      icon: 'ri-briefcase-line',
      children: [
        { label: 'Développement web', link: '/prestation/web', icon: 'ri-code-line' },
        { label: 'Infrastructure', link: '/prestation/infra', icon: 'ri-server-line' },
        { label: 'Conseil', link: '/prestation/conseil' }, // pas d'icône, optionnel
      ],
    },
  ];
}
