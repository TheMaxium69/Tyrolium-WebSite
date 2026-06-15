import { Component, ViewEncapsulation, inject, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export type TeamPole = 'management' | 'technique' | 'graphisme' | 'moderation';

export interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
  roleEn: string;
  photo: string;
  founder?: boolean;
  pole: TeamPole;
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
    pole: 'management'
  };

  readonly poles: { key: TeamPole; label: string; labelEn: string }[] = [
    { key: 'management',  label: 'Management',       labelEn: 'Management'            },
    { key: 'technique',   label: 'Technique',        labelEn: 'Technical'             },
    { key: 'graphisme',   label: 'Graphisme',        labelEn: 'Graphic Design'        },
    { key: 'moderation',  label: 'Modération / SAV', labelEn: 'Moderation / Support'  },
  ];

  readonly team: TeamMember[] = [
    {
      firstName: 'Pierre-Louis',
      lastName: 'Devaud',
      role: 'Chef de Projet, Conseiller Technique',
      roleEn: 'Project Manager, Technical Advisor',
      photo: 'assets/teams/Pierre-Louis_Devaud.jpg',
      pole: 'management',
    },
    {
      firstName: 'Mathis',
      lastName: 'Dubief',
      role: 'Co-fondateur, Journaliste Jeux Vidéo',
      roleEn: 'Co-founder, Video Game Journalist',
      photo: 'assets/teams/Mathis_Dubief.jpg',
      pole: 'management',
    },
    {
      firstName: 'Maewan',
      lastName: 'Marthelot',
      role: 'Co-fondateur, Graphiste',
      roleEn: 'Co-founder, Graphic Designer',
      photo: 'assets/teams/Maewan_Marthelot.jpg',
      pole: 'management',
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Réalisateur de jeux-vidéo, Développeur',
      roleEn: 'Video Game Director & Developer',
      photo: 'assets/teams/Mathys_Lacoque.jpg',
      pole: 'management',
    },
    {
      firstName: 'Kevin',
      lastName: 'Muziak',
      role: 'Développeur Web & Minecraft',
      roleEn: 'Web & Minecraft Developer',
      photo: 'assets/teams/Kevin_Muziak.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Clément',
      lastName: 'Charrassier',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Clément_Charrassier.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Rayan',
      lastName: 'Quessada',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Rayan_Quessada.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Angelo',
      lastName: 'Fernandez',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Angelo_Fernandez.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Elias',
      lastName: 'Poder',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Elias_Poder.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Maktoum',
      lastName: 'Abdelhak',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Maktoum_Abdelhak.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Oscar',
      lastName: 'Boguszewski',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Oscar_Boguszewski.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Adèle',
      lastName: 'Jausons',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Adèle_Jausons.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Bastien',
      lastName: 'Thiebaut',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Bastien_Thiebaut.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Erynn',
      lastName: 'Vandre',
      role: 'Développeur Web',
      roleEn: 'Web Developer',
      photo: 'assets/teams/Erynn_Vandre.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Arnaud',
      lastName: 'Monel',
      role: 'Développeur',
      roleEn: 'Developer',
      photo: 'assets/teams/Arnaud_Monel.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Noa',
      lastName: 'Guilhot',
      role: 'Développeur',
      roleEn: 'Developer',
      photo: 'assets/teams/Noa_Guilhot.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Esteban',
      lastName: 'Mignotte',
      role: 'Administrateur réseau',
      roleEn: 'Network Administrator',
      photo: 'assets/teams/Esteban_Mignotte.jpg',
      pole: 'technique',
    },
    {
      firstName: 'Luigi',
      lastName: 'Guyot',
      role: 'UX/UI Designer, Support Technique',
      roleEn: 'UX/UI Designer, Technical Support',
      photo: 'assets/teams/Luigi_Guyot.jpg',
      pole: 'graphisme',
    },
    {
      firstName: 'Daniel',
      lastName: 'Taniou',
      role: 'Graphiste, Linguiste',
      roleEn: 'Graphic Designer, Linguist',
      photo: 'assets/teams/Daniel_Taniou.jpg',
      pole: 'graphisme',
    },
    {
      firstName: 'Ren',
      lastName: 'LIM',
      role: 'Graphiste, Monteur-Vidéo',
      roleEn: 'Graphic Designer, Video Editor',
      photo: 'assets/teams/Ren_Lim.jpg',
      pole: 'graphisme',
    },
    {
      firstName: 'Dylan',
      lastName: 'Argentino',
      role: 'Support Technique, Modérateur',
      roleEn: 'Technical Support, Moderator',
      photo: 'assets/teams/Dylan_Argentino.jpg',
      pole: 'moderation',
    },
    {
      firstName: 'Flavien',
      lastName: 'Dechoz',
      role: 'Support Technique, Modérateur',
      roleEn: 'Technical Support, Moderator',
      photo: 'assets/teams/Flavien_Dechoz.jpg',
      pole: 'moderation',
    },
  ];

  membersOf(pole: TeamPole): TeamMember[] {
    return this.team.filter(m => m.pole === pole);
  }

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
