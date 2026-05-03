import { Component, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  private readonly langService = inject(TyroUiLangService);

  /*
  *
  * GLOBAL VARIABLE
  *
  * */

  public APP_ENV = 'DEV';
  public currentUser: any = [];

  public debugLoginUser() {
    if (this.currentUser.length === 0) {
      this.currentUser = [{id: 1, name: 'Maxime Tournier', email: 'maxime.tournier@tyrolium.fr', urlPictureProfil: 'https://ui-avatars.com/api/?name=Maxime+Tournier&background=00065c&color=fff&size=128'}];
    } else {
      this.currentUser = [];
    }
    console.log(this.currentUser);
  }


  /*
  *
  * PROJECT VARIABLE
  *
  * */

  public PROJECT_NAME = 'Tyrolium';
  public PROJECT_LOGO = 'assets/Tyrolium.png';
  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>Tyrolium</strong> is a <strong>French tech holding company</strong> founded in <strong>2017</strong> by digital enthusiasts. From <strong>web development</strong> to <strong>cloud infrastructure</strong>, we support every project with expertise and passion. In parallel, we build our <strong>own ecosystem of projects</strong>: from hosting to gaming, CRM and social networks. <em>Founded by Maxime Tournier</em>`
      : `<strong>Tyrolium</strong> est une <strong>holding technologique française</strong> fondée en <strong>2017</strong> par des passionnés du numérique. De la <strong>conception web</strong> à l'<strong>infrastructure cloud</strong>, nous accompagnons chaque projet avec expertise et passion. En parallèle, nous développons notre <strong>propre écosystème de projets</strong> : de l'hébergement au gaming, en passant par le CRM et les réseaux sociaux. <em>Fondé par Maxime Tournier</em>`
  );

  /*
  *
  * PAGES
  *
  * */

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Home',     labelEn: 'Home',     link: '/',        icon: 'ri-home-line' },
          { label: 'Projects', labelEn: 'Projects', link: '/project', icon: 'ri-folder-line' },
          {
            label: 'Services', labelEn: 'Services',
            icon: 'ri-briefcase-line',
            children: [
              { label: 'Website',    labelEn: 'Website',   link: '/prestation/web',        icon: 'ri-global-line' },
              { label: 'Server',     labelEn: 'Server',    link: '/prestation/server',     icon: 'ri-server-line' },
              { label: 'Training',   labelEn: 'Training',  link: '/prestation/formation',  icon: 'ri-graduation-cap-line' },
              { label: 'Incubator',  labelEn: 'Incubator', link: '/prestation/incubateur', icon: 'ri-rocket-2-line' },
              { label: 'Minecraft',  labelEn: 'Minecraft', link: '/prestation/minecraft',  icon: 'ri-gamepad-line' },
            ],
          },
        ]
      : [
          { label: 'Accueil',    link: '/',        icon: 'ri-home-line' },
          { label: 'Projet',     link: '/project', icon: 'ri-folder-line' },
          {
            label: 'Prestation',
            icon: 'ri-briefcase-line',
            link: '/prestation',
            children: [
              { label: 'Site Web',   link: '/prestation/web',        icon: 'ri-global-line' },
              { label: 'Serveur',    link: '/prestation/server',     icon: 'ri-server-line' },
              { label: 'Formation',  link: '/prestation/formation',  icon: 'ri-graduation-cap-line' },
              { label: 'Incubateur', link: '/prestation/incubateur', icon: 'ri-rocket-2-line' },
              { label: 'Minecraft',  link: '/prestation/minecraft',  icon: 'ri-gamepad-line' },
            ],
          },
        ]
  );
  public socials: ITyroUiNavbarPages[] = [
    { label: 'facebook',  link: 'https://www.facebook.com/tyrolium/',              icon: 'ri-facebook-fill' },
    { label: 'instagram', link: 'https://www.instagram.com/tyroliumentertainment/', icon: 'ri-instagram-line' },
    { label: 'x',         link: 'https://x.com/TyroliumE',                         icon: 'ri-twitter-x-fill' },
    { label: 'youtube',   link: 'https://www.youtube.com/@tyrolium',               icon: 'ri-youtube-fill' },
    { label: 'discord',   link: 'https://discord.com/invite/km8h5jHezt',           icon: 'ri-discord-fill' },
    { label: 'linkedin',  link: 'https://www.linkedin.com/company/tyrolium/',      icon: 'ri-linkedin-fill' },
    { label: 'tiktok',    link: 'https://www.tiktok.com/@tyrolium',                icon: 'ri-tiktok-fill' },
    { label: 'twitch',    link: 'https://www.twitch.tv/tyrolium',                  icon: 'ri-twitch-fill' },
    { label: 'github',    link: 'https://github.com/tyrolium',                     icon: 'ri-github-fill' },
    { label: 'telegram',  link: 'https://t.me/tyrolium',                           icon: 'ri-telegram-fill' },
    { label: 'thread',    link: 'https://www.threads.com/@tyroliumentertainment',  icon: 'ri-threads-fill' },
  ];


}
