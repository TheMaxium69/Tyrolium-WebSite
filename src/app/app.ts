import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public PROJECT_NAME = 'Tyrolium';
  public PROJECT_LOGO = 'assets/Tyrolium.png';
  public PROJECT_CONTENT = `<strong>TyroServ</strong>, un serveur <strong>Minecraft moddé</strong> depuis <strong>2017</strong>,
                propose du <strong>PVP-Faction moddés</strong> (actuellement en saison 3) et bientôt des
                <strong>mini-jeux moddés</strong>. <strong>Gratuit</strong> et semi-crack, il offre une sécurité
                renforcée contre les tricheurs grâce à la création de comptes spécifiques.`

  public pages: ITyroUiNavbarPages[] = [
    { label: 'Accueil', link: '/', icon: 'ri-home-line' },
    { label: 'Projet', link: '/project', icon: 'ri-folder-line' },
    {
      label: 'Prestation',
      icon: 'ri-briefcase-line',
      children: [
        { label: 'Site Web',    link: '/prestation/web',        icon: 'ri-global-line' },
        { label: 'Serveur',     link: '/prestation/server',     icon: 'ri-server-line' },
        { label: 'Formation',   link: '/prestation/formation',  icon: 'ri-graduation-cap-line' },
        { label: 'Incubateur',  link: '/prestation/incubateur', icon: 'ri-rocket-2-line' },
        { label: 'Minecraft',   link: '/prestation/minecraft',  icon: 'ri-gamepad-line' },
      ],
    },
  ];

  public socials: ITyroUiNavbarPages[] = [
    {label: 'facebook', link: 'https://www.facebook.com/tyrolium/', icon: 'ri-facebook-fill'},
    {label: 'instagram', link: 'https://www.instagram.com/tyroliumentertainment/', icon: 'ri-instagram-line'},
    {label: 'x', link: 'https://x.com/TyroliumE', icon: 'ri-twitter-x-fill'},
    {label: 'youtube', link: 'https://www.youtube.com/@tyrolium', icon: 'ri-youtube-fill'},
    {label: 'discord', link: 'https://discord.com/invite/km8h5jHezt', icon: 'ri-discord-fill'},
    {label: 'linkedin', link: 'https://www.linkedin.com/company/tyrolium/', icon: 'ri-linkedin-fill'},
    {label: 'tiktok', link: 'https://www.tiktok.com/@tyrolium', icon: 'ri-tiktok-fill'},
    {label: 'twitch', link: 'https://www.twitch.tv/tyrolium', icon: 'ri-twitch-fill'},
    {label: 'github', link: 'https://github.com/tyrolium', icon: 'ri-github-fill'},
    {label: 'telegram', link: 'https://t.me/tyrolium', icon: 'ri-telegram-fill'},
    {label: 'thread', link: 'https://www.threads.com/@tyroliumentertainment', icon: 'ri-threads-fill'},
  ];
}
