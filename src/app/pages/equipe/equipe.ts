import { Component, ViewEncapsulation, inject, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
  roleEn: string;
  photo: string;
  founder?: boolean;
}

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.html',
  styleUrls: ['./equipe.css'],
  imports: [CommonModule, TyroUiCTA],
  encapsulation: ViewEncapsulation.None,
})
export class Equipe implements AfterViewInit, OnDestroy {

  readonly lang = inject(TyroUiLangService).lang;

  private observer?: IntersectionObserver;

  readonly founder: TeamMember = {
    firstName: 'Maxime',
    lastName: 'Tournier',
    role: 'PDG & Fondateur',
    roleEn: 'CEO & Founder',
    photo: 'assets/teams/Maxime_Tournier.jpg',
    founder: true,
  };

  readonly team: TeamMember[] = [
    {
      firstName: 'Pierre-Louis',
      lastName: 'Devaud',
      role: 'Responsable Projet, Conseiller Technique',
      roleEn: 'Project Manager, Technical Advisor',
      photo: 'assets/teams/Pierre-Louis_Devaud.jpg',
    },
    {
      firstName: 'Mathis',
      lastName: 'Dubief',
      role: 'Journaliste Jeux Vidéo, Modérateur',
      roleEn: 'Video Game Journalist, Moderator',
      photo: 'assets/teams/Mathis_Dubief.jpg',
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Producteur de jeux-vidéo',
      roleEn: 'Video Game Producer',
      photo: 'assets/teams/Mathys_Lacoque.jpg',
    },
    {
      firstName: 'Arnaud',
      lastName: 'Monel',
      role: 'Développeur',
      roleEn: 'Developer',
      photo: 'assets/teams/Arnaud_Monel.jpg',
    },
    {
      firstName: 'Noa',
      lastName: 'Guilhot',
      role: 'Développeur',
      roleEn: 'Developer',
      photo: 'assets/teams/Noa_Guilhot.jpg',
    },
    {
      firstName: 'Esteban',
      lastName: 'Mignotte',
      role: 'Administrateur réseaux',
      roleEn: 'Network Administrator',
      photo: 'assets/teams/Esteban_Mignotte.jpg',
    },
    {
      firstName: 'Kevin',
      lastName: 'Muziak',
      role: 'Développeur Web & Minecraft',
      roleEn: 'Web & Minecraft Developer',
      photo: 'assets/teams/Kevin_Muziak.jpg',
    },
    {
      firstName: 'Clément',
      lastName: 'Charrassier',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Clément_Charrassier.jpg',
    },
    {
      firstName: 'Rayan',
      lastName: 'Quessada',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Rayan_Quessada.jpg',
    },
    {
      firstName: 'Angelo',
      lastName: 'Fernandez',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Angelo_Fernandez.jpg',
    },
    {
      firstName: 'Elias',
      lastName: 'Poder',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Elias_Poder.jpg',
    },
    {
      firstName: 'Maktoum',
      lastName: 'Abdelhak',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Maktoum_Abdelhak.jpg',
    },
    {
      firstName: 'Oscar',
      lastName: 'Boguszewski',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Oscar_Boguszewski.jpg',
    },
    {
      firstName: 'Adèle',
      lastName: 'Jausons',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Adèle_Jausons.jpg',
    },
    {
      firstName: 'Bastien',
      lastName: 'Thiebaut',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Bastien_Thiebaut.jpg',
    },
    {
      firstName: 'Erynn',
      lastName: 'Vandre',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Erynn_Vandre.jpg',
    },
    {
      firstName: 'Luigi',
      lastName: 'Guyot',
      role: 'UX/UI Designer, Modérateur',
      roleEn: 'UX/UI Designer, Moderator',
      photo: 'assets/teams/Luigi_Guyot.jpg',
    },
    {
      firstName: 'Daniel',
      lastName: 'Taniou',
      role: 'Graphiste, Modérateur, Linguiste',
      roleEn: 'Graphic Designer, Moderator, Linguist',
      photo: 'assets/teams/Daniel_Taniou.jpg',
    },
    {
      firstName: 'Ren',
      lastName: 'LIM',
      role: 'Graphiste, Monteur-Vidéo',
      roleEn: 'Graphic Designer, Video Editor',
      photo: 'assets/teams/Ren_Lim.jpg',
    },
    {
      firstName: 'Flavien',
      lastName: 'Dechoz',
      role: 'Support Technique, Modérateur',
      roleEn: 'Technical Support, Moderator',
      photo: 'assets/teams/Flavien_Dechoz.jpg',
    },
  ];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('eq-visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      document.querySelectorAll('.eq-animate').forEach(el => this.observer!.observe(el));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
