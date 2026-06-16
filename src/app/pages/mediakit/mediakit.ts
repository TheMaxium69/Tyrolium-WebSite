import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiLangService } from 'tyrolium-ui';
import { toPng } from 'html-to-image';

export interface MkProject {
  name: string;
  slug: string;
  description: string;
  descriptionEn: string;
  logo: string;
  parent?: string;
  parentEn?: string;
  gradient?: string;
}

@Component({
  selector: 'app-mediakit',
  templateUrl: './mediakit.html',
  styleUrls: ['./mediakit.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Mediakit {

  readonly lang = inject(TyroUiLangService).lang;

  exportingCombo: Record<string, boolean> = {};

  logoBlack(logo: string): string {
    return logo.replace('.png', '-Black.png');
  }

  logoWhite(logo: string): string {
    return logo.replace('.png', '-White.png');
  }

  async exportCombo(slug: string, el: HTMLElement, variant: 'light' | 'dark') {
    const key = `${slug}-${variant}`;
    this.exportingCombo[key] = true;
    try {
      const dataUrl = await toPng(el, { pixelRatio: 3, style: { background: 'transparent' } });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${slug}-typo-${variant}.png`;
      a.click();
    } finally {
      this.exportingCombo[key] = false;
    }
  }

  readonly tyrolium: MkProject = {
    name: 'Tyrolium',
    slug: 'tyrolium',
    description: 'Maison mère · Holding technologique',
    descriptionEn: 'Parent company · Tech holding',
    logo: 'assets/tyrolium-ui/projects/Tyrolium.png',
  };

  readonly projects: MkProject[] = [
    { name: 'TyroServ',    slug: 'tyroserv',    description: 'Serveur Minecraft',       descriptionEn: 'Minecraft Server',     logo: 'assets/tyrolium-ui/projects/TyroServ.png' },
    { name: 'SolidServ',   slug: 'solidserv',   description: 'Hébergement de serveur',  descriptionEn: 'Server hosting',       logo: 'assets/tyrolium-ui/projects/SolidServ.png' },
    { name: 'TyroCiel',    slug: 'tyrociel',    description: 'Studio de jeu-vidéo',     descriptionEn: 'Video game studio',    logo: 'assets/tyrolium-ui/projects/TyroCiel.png' },
    { name: 'Influnias',   slug: 'influnias',   description: "Agence d'influenceurs",   descriptionEn: 'Influencer agency',    logo: 'assets/tyrolium-ui/projects/Influnias.png' },
    {
      name: 'Vturias', slug: 'vturias',
      description: 'Agence de VTubers',     descriptionEn: 'VTuber agency',
      logo: 'assets/tyrolium-ui/projects/Vturias.png',
      parent: 'Influnias', parentEn: 'Influnias',
      gradient: 'linear-gradient(135deg,#f472b6 0%,#a78bfa 50%,#7dd3fc 100%)',
    },
    { name: 'Gamenium',    slug: 'gamenium',    description: "Site d'actu jeu-vidéo",  descriptionEn: 'Gaming news site',     logo: 'assets/tyrolium-ui/projects/Gamenium.png' },
    { name: 'NexiumiaCRM', slug: 'nexiumiacrm', description: 'CRM',                    descriptionEn: 'CRM',                  logo: 'assets/tyrolium-ui/projects/NexiumiaCRM.png' },
    { name: 'Useritium',   slug: 'useritium',   description: 'Comptes utilisateurs',   descriptionEn: 'User accounts',        logo: 'assets/tyrolium-ui/projects/Useritium.png' },
  ];

  readonly gradientColors = [
    { hex: '#0000FF', name: 'Bleu pur', nameEn: 'Pure blue', role: 'Début dégradé', roleEn: 'Gradient start' },
    { hex: '#BF0000', name: 'Rouge',    nameEn: 'Red',       role: 'Fin dégradé',   roleEn: 'Gradient end'   },
  ];

  readonly uiColors = [
    { hex: '#111827', name: 'Texte principal', nameEn: 'Primary text',  role: 'Text'    },
    { hex: '#0533c8', name: 'Bleu label',      nameEn: 'Label blue',    role: 'Label'   },
    { hex: '#f6f7fb', name: 'Fond clair',      nameEn: 'Light surface', role: 'Surface' },
    { hex: '#0f1117', name: 'Fond sombre',     nameEn: 'Dark BG',       role: 'Dark BG' },
  ];

  readonly fonts = [
    {
      name: 'Syne',
      role: 'Titres & Displays', roleEn: 'Headings & Displays',
      weight: '700 - Bold',
      family: "'Syne', sans-serif",
      sample: 'Tyrolium',
      desc: 'Police principale pour les grandes typographies. Utilisée sur les H1, H2 et les héros.',
      descEn: 'Primary typeface for large typography. Used on H1, H2 and hero sections.',
    },
    {
      name: 'Inter',
      role: 'Corps de texte & UI', roleEn: 'Body text & UI',
      weight: '300 / 400 / 700',
      family: "'Inter', sans-serif",
      sample: 'Tyrolium',
      desc: "Police système de l'interface. Utilisée partout dans le body, labels, boutons et navigation.",
      descEn: 'System interface typeface. Used throughout body text, labels, buttons and navigation.',
    },
    {
      name: 'Noto Sans Display',
      role: 'Sous-marque / Labels', roleEn: 'Sub-brand / Labels',
      weight: '400 - Regular',
      family: "'Noto Sans Display', sans-serif",
      sample: 'TYROLIUM',
      desc: 'Police des identifiants secondaires. Utilisée dans la navbar pour le label "Tyrolium" sous-marque.',
      descEn: 'Secondary identifier typeface. Used in the navbar for the "Tyrolium" sub-brand label.',
    },
  ];

  copied = '';

  copyHex(hex: string) {
    navigator.clipboard.writeText(hex).then(() => {
      this.copied = hex;
      setTimeout(() => { if (this.copied === hex) this.copied = ''; }, 1800);
    });
  }

  readonly brandGradient = 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)';

  getGradient(p: MkProject): string {
    return p.gradient ?? this.brandGradient;
  }
}
