import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiButtom, TyroUiNavbar } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiButtom, TyroUiNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  /*
  *
  * GLOBAL VARIABLE
  *
  * */

  public APP_ENV = "DEV";
  public PROJECT_NAME = "Tyrolium";

  public pages: ITyroUiNavbarPages[] = [
    { label: 'Accueil', link: '/' },
    { label: 'Projet', link: '/project' },
    { label: 'Prestation', link: '/prestation' }
  ]
}
