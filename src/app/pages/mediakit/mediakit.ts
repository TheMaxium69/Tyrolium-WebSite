import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiLangService } from 'tyrolium-ui';
import { toPng } from 'html-to-image';

export interface MkWallpaper {
  name: string;
  nameEn: string;
  slug: string;
  thumb?: string;
  versions: { label: string; url: string; filename: string }[];
}

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
  exportingSquare: Record<string, boolean> = {};
  downloadingAnimLight = false;
  downloadingAnimDark = false;
  downloadingGlitch = false;

  async downloadAnimation(variant: 'light' | 'dark') {
    if (variant === 'light' && this.downloadingAnimLight) return;
    if (variant === 'dark' && this.downloadingAnimDark) return;
    if (variant === 'light') this.downloadingAnimLight = true;
    else this.downloadingAnimDark = true;

    await document.fonts.ready;

    const W = 1200, H = 300, FPS = 30;
    const cycleDuration = 8;
    const totalDuration = 16;
    const totalFrames = totalDuration * FPS;
    const bg = variant === 'dark' ? '#ffffff' : '#0a0a0f';
    const textColor = variant === 'dark' ? '#111111' : '#ffffff';

    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;

    const letters = ['T', 'y', 'r', 'o', 'l', 'i', 'u', 'm'];
    const delays = [0, 0.12, 0.24, 0.36, 0.48, 0.60, 0.72, 0.84];
    const fontSize = 140;

    const getWeight = (t: number, delay: number): number => {
      const local = ((t - delay) % cycleDuration + cycleDuration) % cycleDuration;
      const p = local / cycleDuration;
      if (p < 0.15) return 700 + (400 - 700) * (p / 0.15);
      if (p < 0.30) return 400 + (800 - 400) * ((p - 0.15) / 0.15);
      if (p < 0.45) return 800 + (700 - 800) * ((p - 0.30) / 0.15);
      return 700;
    };

    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9' : 'video/webm';
    const stream = canvas.captureStream(FPS);
    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 8_000_000 });
    const chunks: BlobPart[] = [];

    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = variant === 'dark' ? 'tyrolium-animation-dark.webm' : 'tyrolium-animation-light.webm';
      a.click();
      URL.revokeObjectURL(url);
      if (variant === 'light') this.downloadingAnimLight = false;
      else this.downloadingAnimDark = false;
    };

    recorder.start();

    let frame = 0;
    const drawNext = () => {
      if (frame >= totalFrames) { recorder.stop(); return; }

      const t = frame / FPS;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      ctx.textBaseline = 'alphabetic';

      const weights = letters.map((_, i) => Math.round(getWeight(t, delays[i])));
      const widths = letters.map((l, i) => {
        ctx.font = `${weights[i]} ${fontSize}px Syne, sans-serif`;
        return ctx.measureText(l).width;
      });

      let x = (W - widths.reduce((a, b) => a + b, 0)) / 2;
      for (let i = 0; i < letters.length; i++) {
        ctx.font = `${weights[i]} ${fontSize}px Syne, sans-serif`;
        ctx.fillStyle = textColor;
        ctx.fillText(letters[i], x, H / 2 + fontSize * 0.35);
        x += widths[i];
      }

      frame++;
      setTimeout(drawNext, 1000 / FPS);
    };

    drawNext();
  }

  async downloadGlitch() {
    if (this.downloadingGlitch) return;
    this.downloadingGlitch = true;
    await document.fonts.ready;

    const W = 1200, H = 300, FPS = 30;
    const totalDuration = 12;
    const totalFrames = totalDuration * FPS;
    const glitchStart = 0.86 * 6; // 86% of 6s cycle = where glitch fires

    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d')!;
    const text = 'Useritium';
    const fontSize = 120;

    const drawGradientText = (x: number, y: number, offsetX = 0, alpha = 1, clipY1 = 0, clipY2 = H) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.rect(0, clipY1, W, clipY2 - clipY1);
      ctx.clip();
      const grad = ctx.createLinearGradient(x + offsetX, 0, x + offsetX + ctx.measureText(text).width, 0);
      grad.addColorStop(0, '#7aaeff');
      grad.addColorStop(0.45, '#ffffff');
      grad.addColorStop(1, '#ff8888');
      ctx.fillStyle = grad;
      ctx.fillText(text, x + offsetX, y);
      ctx.restore();
    };

    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9') ? 'video/webm;codecs=vp9' : 'video/webm';
    const stream = canvas.captureStream(FPS);
    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 8_000_000 });
    const chunks: BlobPart[] = [];
    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'useritium-animation.webm'; a.click();
      URL.revokeObjectURL(url);
      this.downloadingGlitch = false;
    };
    recorder.start();

    let frame = 0;
    const drawNext = () => {
      if (frame >= totalFrames) { recorder.stop(); return; }
      const t = frame / FPS;
      const cycle = t % 6;
      const p = cycle / 6;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#06080f';
      ctx.fillRect(0, 0, W, H);
      ctx.font = `800 ${fontSize}px Syne, sans-serif`;
      ctx.textBaseline = 'alphabetic';
      const tw = ctx.measureText(text).width;
      const tx = (W - tw) / 2;
      const ty = H / 2 + fontSize * 0.35;

      const inGlitch1 = p >= 0.90 && p < 0.99;
      const inGlitch2 = p >= 0.86 && p < 0.95;

      // base layer
      drawGradientText(tx, ty);

      // glitch layer 1 (clip top 20–40%)
      if (inGlitch1) {
        const ph = (p - 0.90) / 0.09;
        const offsets = [-4, 4, -2, 2, 0];
        const oi = Math.floor(ph * offsets.length);
        drawGradientText(tx, ty, offsets[oi] ?? 0, 0.6, H * 0.20, H * 0.40);
      }

      // glitch layer 2 (clip 55–75%)
      if (inGlitch2) {
        const ph = (p - 0.86) / 0.09;
        const offsets = [4, -4, 2, -2, 0];
        const oi = Math.floor(ph * offsets.length);
        drawGradientText(tx, ty, offsets[oi] ?? 0, 0.5, H * 0.55, H * 0.75);
      }

      frame++;
      setTimeout(drawNext, 1000 / FPS);
    };
    drawNext();
  }

  async exportSquareLogo(slug: string, logoUrl: string, filename: string) {
    this.exportingSquare[slug] = true;
    try {
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = logoUrl;
      });
      const size = Math.max(img.naturalWidth, img.naturalHeight);
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, (size - img.naturalWidth) / 2, (size - img.naturalHeight) / 2);
      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/png');
    } finally {
      this.exportingSquare[slug] = false;
    }
  }

  logoBlack(logo: string): string {
    return logo.replace('.png', '-Black.png');
  }

  logoWhite(logo: string): string {
    return logo.replace('.png', '-White.png');
  }

  logoPP(logo: string): string {
    return logo.replace('/projects/', '/projects/social/').replace('.png', '-PP.png');
  }

  async exportCombo(slug: string, el: HTMLElement, variant: string) {
    const key = `${slug}-${variant}`;
    this.exportingCombo[key] = true;
    try {
      const dataUrl = await toPng(el, { pixelRatio: 8, style: { background: 'transparent' } });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${slug}-${variant}.png`;
      a.click();
    } finally {
      this.exportingCombo[key] = false;
    }
  }

  async exportGradient(slug: string, el: HTMLElement, variant = 'gradient') {
    const key = `${slug}-${variant}`;
    this.exportingCombo[key] = true;
    try {
      const dataUrl = await toPng(el, { pixelRatio: 6 });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${slug}-logo-${variant}.png`;
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
    { name: 'SolidServ',   slug: 'solidserv',   description: 'Hébergeur de serveurs',  descriptionEn: 'Server hosting',       logo: 'assets/tyrolium-ui/projects/SolidServ.png' },
    { name: 'TyroServ',    slug: 'tyroserv',    description: 'Serveur Minecraft',       descriptionEn: 'Minecraft Server',     logo: 'assets/tyrolium-ui/projects/TyroServ.png' },
    { name: 'TyroCiel',    slug: 'tyrociel',    description: 'Studio de jeu-vidéo',     descriptionEn: 'Video game studio',    logo: 'assets/tyrolium-ui/projects/TyroCiel.png' },
    { name: 'Gamenium',    slug: 'gamenium',    description: "Site d'actu jeu-vidéo",  descriptionEn: 'Gaming news site',     logo: 'assets/tyrolium-ui/projects/Gamenium.png' },
    { name: 'Useritium',   slug: 'useritium',   description: 'Comptes utilisateurs',   descriptionEn: 'User accounts',        logo: 'assets/tyrolium-ui/projects/Useritium.png' },
    { name: 'NexiumiaCRM', slug: 'nexiumiacrm', description: 'CRM',                    descriptionEn: 'CRM',                  logo: 'assets/tyrolium-ui/projects/NexiumiaCRM.png' },
    { name: 'Influnias',   slug: 'influnias',   description: "Agence d'influenceurs",   descriptionEn: 'Influencer agency',    logo: 'assets/tyrolium-ui/projects/Influnias.png' },
    {
      name: 'Vturias', slug: 'vturias',
      description: 'Agence de VTubers',     descriptionEn: 'VTuber agency',
      logo: 'assets/tyrolium-ui/projects/Vturias.png',
      parent: 'Influnias', parentEn: 'Influnias',
      gradient: 'linear-gradient(135deg,#f472b6 0%,#a78bfa 50%,#7dd3fc 100%)',
    },
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

  readonly wallpapers: MkWallpaper[] = [
    {
      name: 'Fond d\'écran Gradient',
      nameEn: 'Gradient Wallpaper',
      slug: 'wallpaper-gradient',
      thumb: 'assets/wallpapers/TyroliumWallpaper-Gradient-1080p.png',
      versions: [
        { label: '4K',     url: 'assets/wallpapers/TyroliumWallpaper-Gradient-4K.png',     filename: 'tyrolium-gradient-4k.png' },
        { label: '1440p',  url: 'assets/wallpapers/TyroliumWallpaper-Gradient-1440p.png',  filename: 'tyrolium-gradient-1440p.png' },
        { label: '1080p',  url: 'assets/wallpapers/TyroliumWallpaper-Gradient-1080p.png',  filename: 'tyrolium-gradient-1080p.png' },
        { label: 'Mobile', url: 'assets/wallpapers/TyroliumWallpaper-Gradient-Mobile.png', filename: 'tyrolium-gradient-mobile.png' },
      ],
    },
    {
      name: 'Fond d\'écran Glass',
      nameEn: 'Glass Wallpaper',
      slug: 'wallpaper-glass',
      thumb: 'assets/wallpapers/TyroliumWallpaper-Glass-1080p.png',
      versions: [
        { label: '4K',    url: 'assets/wallpapers/TyroliumWallpaper-Glass-4K.png',    filename: 'tyrolium-glass-4k.png' },
        { label: '1440p', url: 'assets/wallpapers/TyroliumWallpaper-Glass-1440p.png', filename: 'tyrolium-glass-1440p.png' },
        { label: '1080p', url: 'assets/wallpapers/TyroliumWallpaper-Glass-1080p.png', filename: 'tyrolium-glass-1080p.png' },
      ],
    },
    {
      name: 'Fond d\'écran Atom Sombre',
      nameEn: 'Atom Dark Wallpaper',
      slug: 'wallpaper-atom-dark',
      thumb: 'assets/wallpapers/TyroliumWallpaper-Atom-Dark-1080p.png',
      versions: [
        { label: '4K',    url: 'assets/wallpapers/TyroliumWallpaper-Atom-Dark-4K.png',    filename: 'tyrolium-atom-dark-4k.png' },
        { label: '1440p', url: 'assets/wallpapers/TyroliumWallpaper-Atom-Dark-1440p.png', filename: 'tyrolium-atom-dark-1440p.png' },
        { label: '1080p', url: 'assets/wallpapers/TyroliumWallpaper-Atom-Dark-1080p.png', filename: 'tyrolium-atom-dark-1080p.png' },
      ],
    },
    {
      name: 'Fond d\'écran Atom Clair',
      nameEn: 'Atom White Wallpaper',
      slug: 'wallpaper-atom-white',
      thumb: 'assets/wallpapers/TyroliumWallpaper-Atom-White-1080p.png',
      versions: [
        { label: '4K',    url: 'assets/wallpapers/TyroliumWallpaper-Atom-White-4K.png',    filename: 'tyrolium-atom-white-4k.png' },
        { label: '1440p', url: 'assets/wallpapers/TyroliumWallpaper-Atom-White-1440p.png', filename: 'tyrolium-atom-white-1440p.png' },
        { label: '1080p', url: 'assets/wallpapers/TyroliumWallpaper-Atom-White-1080p.png', filename: 'tyrolium-atom-white-1080p.png' },
      ],
    },
  ];

  readonly brandGradient = 'linear-gradient(135deg, #0000FF 0%, #BF0000 100%)';

  getGradient(p: MkProject): string {
    return p.gradient ?? this.brandGradient;
  }
}
