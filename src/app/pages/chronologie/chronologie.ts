import { Component, ViewEncapsulation, inject, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiLangService } from 'tyrolium-ui';

export type EventStatus = 'past' | 'present' | 'future';

export interface TimelineEvent {
  date: string;
  dateEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  status: EventStatus;
  tags?: string[];
}

@Component({
  selector: 'app-chronologie',
  templateUrl: './chronologie.html',
  styleUrls: ['./chronologie.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Chronologie implements AfterViewInit, OnDestroy {

  readonly lang = inject(TyroUiLangService).lang;

  private observer?: IntersectionObserver;

  readonly events: TimelineEvent[] = [
    {
      date: '9 juillet 2017',
      dateEn: 'July 9, 2017',
      title: 'Naissance de Tyrolium',
      titleEn: 'Birth of Tyrolium',
      description: "Lancement du serveur Minecraft moddé, point de départ d'une aventure qui allait bien dépasser le jeu vidéo.",
      descriptionEn: 'Launch of the modded Minecraft server — the starting point of an adventure that would grow far beyond gaming.',
      icon: 'ri-rocket-2-fill',
      status: 'past',
      tags: ['Minecraft', 'Origine'],
    },
    {
      date: 'Mars 2019',
      dateEn: 'March 2019',
      title: 'Structuration en Holding',
      titleEn: 'Holding structure',
      description: "Tyrolium se structure en holding technologique, posant les bases d'un groupe capable de porter plusieurs projets simultanément.",
      descriptionEn: 'Tyrolium restructures as a tech holding, laying the foundation for a group capable of running multiple projects.',
      icon: 'ri-building-2-fill',
      status: 'past',
      tags: ['Corporate', 'Stratégie'],
    },
    {
      date: '2020',
      dateEn: '2020',
      title: 'Premières prestations professionnelles',
      titleEn: 'First professional services',
      description: 'Lancement des services de développement web et de création de jeux-vidéo. Tyrolium s\'ouvre aux clients extérieurs.',
      descriptionEn: 'Launch of web development and video game creation services. Tyrolium opens its doors to external clients.',
      icon: 'ri-code-box-fill',
      status: 'past',
      tags: ['Web', 'Jeux-vidéo'],
    },
    {
      date: '2022',
      dateEn: '2022',
      title: 'Expansion infrastructure & cloud',
      titleEn: 'Infrastructure & cloud expansion',
      description: 'Déploiement des offres d\'hébergement serveur et cloud avec SolidServ. Tyrolium devient un acteur de l\'infrastructure numérique.',
      descriptionEn: 'Launch of server and cloud hosting with SolidServ. Tyrolium becomes an infrastructure provider.',
      icon: 'ri-server-fill',
      status: 'past',
      tags: ['Cloud', 'SolidServ'],
    },
    {
      date: '2023 — 2024',
      dateEn: '2023 — 2024',
      title: 'Croissance de l\'écosystème',
      titleEn: 'Ecosystem growth',
      description: 'Lancement de NexiumiaCRM, Useritium et Influnias. L\'écosystème Tyrolium s\'élargit avec des outils métier et une agence d\'influence.',
      descriptionEn: 'Launch of NexiumiaCRM, Useritium and Influnias. The Tyrolium ecosystem expands with business tools and an influencer agency.',
      icon: 'ri-git-branch-fill',
      status: 'past',
      tags: ['NexiumiaCRM', 'Influnias', 'Useritium'],
    },
    {
      date: '2025',
      dateEn: '2025',
      title: 'Entrée dans le gaming',
      titleEn: 'Entering the gaming world',
      description: 'Création de TyroCiel, notre studio de jeux-vidéo, et de Gamenium, site d\'actualité gaming. Tyrolium investit pleinement l\'industrie du jeu.',
      descriptionEn: 'Creation of TyroCiel, our video game studio, and Gamenium, a gaming news site. Tyrolium fully enters the gaming industry.',
      icon: 'ri-gamepad-fill',
      status: 'present',
      tags: ['TyroCiel', 'Gamenium'],
    },
    {
      date: 'Juillet 2026',
      dateEn: 'July 2026',
      title: 'Refonte totale du design system',
      titleEn: 'Full design system overhaul',
      description: 'Refonte complète de l\'identité visuelle du groupe : nouveau design system, nouveaux logos et nouvelle charte graphique pour l\'ensemble des filiales.',
      descriptionEn: 'Complete visual identity overhaul for the group: new design system, new logos and new brand guidelines across all subsidiaries.',
      icon: 'ri-palette-fill',
      status: 'future',
      tags: ['Design', 'Branding', 'À venir'],
    },
  ];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('tl-visible');
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      document.querySelectorAll('.tl-item').forEach(el => this.observer!.observe(el));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
