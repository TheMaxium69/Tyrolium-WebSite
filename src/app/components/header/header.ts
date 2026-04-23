import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  NgZone,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────────────────────
// 🎨 COULEURS DU DÉGRADÉ — modifie ces valeurs pour changer les couleurs
// ─────────────────────────────────────────────────────────────────────────────

const GRADIENT_COLOR_1    = '#0000FF'; // Bleu pur
const GRADIENT_COLOR_2    = '#8B0000'; // Rouge foncé
const GRADIENT_COLOR_3    = '#0000FF'; // Bleu pur (alterne avec couleur 1)
const GRADIENT_COLOR_4    = '#CC0022'; // Rouge vif
const GRADIENT_COLOR_5    = '#0033CC'; // Bleu légèrement plus doux
const GRADIENT_COLOR_6    = '#8B0000'; // Rouge foncé (alterne avec couleur 2)
const GRADIENT_BASE_COLOR = '#002080'; // Couleur de fond (zones à faible intensité)

const GRADIENT_SPEED = 1.5;  // Vitesse d'animation (plus grand = plus rapide)
const GRADIENT_SIZE  = 0.8;  // Taille des zones de dégradé (0.3 = petit, 2.0 = grand)
const GRADIENT_COUNT = 12.0; // Nombre de centres de dégradé (6 ou 12)

// ─────────────────────────────────────────────────────────────────────────────

function hexToVec3(hex: string): THREE.Vector3 {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return new THREE.Vector3(r, g, b);
}

// ─── TouchTexture ─────────────────────────────────────────────────────────────

class TouchTexture {
  size = 64;
  width: number;
  height: number;
  maxAge = 64;
  radius: number;
  speed: number;
  trail: any[] = [];
  last: any = null;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  texture!: THREE.Texture;

  constructor() {
    this.width = this.height = this.size;
    this.radius = 0.25 * this.size;
    this.speed = 1 / this.maxAge;
    this.initTexture();
  }

  initTexture() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d')!;
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new THREE.Texture(this.canvas);
  }

  update() {
    this.clear();
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const point = this.trail[i];
      const f = point.force * this.speed * (1 - point.age / this.maxAge);
      point.x += point.vx * f;
      point.y += point.vy * f;
      point.age++;
      if (point.age > this.maxAge) this.trail.splice(i, 1);
      else this.drawPoint(point);
    }
    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addTouch(point: { x: number; y: number }) {
    let force = 0, vx = 0, vy = 0;
    if (this.last) {
      const dx = point.x - this.last.x;
      const dy = point.y - this.last.y;
      if (dx === 0 && dy === 0) return;
      const d = Math.sqrt(dx * dx + dy * dy);
      vx = dx / d;
      vy = dy / d;
      force = Math.min((dx * dx + dy * dy) * 20000, 2.0);
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  drawPoint(point: any) {
    const pos = { x: point.x * this.width, y: (1 - point.y) * this.height };
    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = Math.sin((point.age / (this.maxAge * 0.3)) * (Math.PI / 2));
    } else {
      const t = 1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7);
      intensity = -t * (t - 2);
    }
    intensity *= point.force;
    const color = `${((point.vx + 1) / 2) * 255}, ${((point.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = this.radius;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(255,0,0,1)';
    this.ctx.arc(pos.x - offset, pos.y - offset, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  dispose() { this.texture.dispose(); }
}

// ─── GradientBackground ───────────────────────────────────────────────────────

class GradientBackground {
  mesh: THREE.Mesh | null = null;
  uniforms: Record<string, THREE.IUniform>;

  constructor(private sceneManager: AppScene) {
    this.uniforms = {
      uTime:          { value: 0 },
      uResolution:    { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uColor1:        { value: hexToVec3(GRADIENT_COLOR_1) },
      uColor2:        { value: hexToVec3(GRADIENT_COLOR_2) },
      uColor3:        { value: hexToVec3(GRADIENT_COLOR_3) },
      uColor4:        { value: hexToVec3(GRADIENT_COLOR_4) },
      uColor5:        { value: hexToVec3(GRADIENT_COLOR_5) },
      uColor6:        { value: hexToVec3(GRADIENT_COLOR_6) },
      uSpeed:         { value: GRADIENT_SPEED },
      uTouchTexture:  { value: null },
      uGrainIntensity:{ value: 0.06 },
      uDarkNavy:      { value: hexToVec3(GRADIENT_BASE_COLOR) },
      uGradientSize:  { value: GRADIENT_SIZE },
      uGradientCount: { value: GRADIENT_COUNT },
    };
  }

  init() {
    const viewSize = this.sceneManager.getViewSize();
    const geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
          vUv = uv;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2  uResolution;
        uniform vec3  uColor1, uColor2, uColor3, uColor4, uColor5, uColor6;
        uniform float uSpeed;
        uniform sampler2D uTouchTexture;
        uniform float uGrainIntensity;
        uniform vec3  uDarkNavy;
        uniform float uGradientSize, uGradientCount;
        varying vec2 vUv;

        float grain(vec2 uv, float t) {
          vec2 g = uv * uResolution * 0.5;
          return fract(sin(dot(g + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
        }

        float influence(vec2 uv, vec2 center, float radius) {
          float d = length(uv - center);
          return exp(-d * d / (radius * radius * 0.3));
        }

        vec3 getGradientColor(vec2 uv, float t) {
          float r = uGradientSize;

          vec2 c0  = vec2(0.5+sin(t*uSpeed*0.40)*0.40, 0.5+cos(t*uSpeed*0.50)*0.40);
          vec2 c1  = vec2(0.5+cos(t*uSpeed*0.60)*0.50, 0.5+sin(t*uSpeed*0.45)*0.50);
          vec2 c2  = vec2(0.5+sin(t*uSpeed*0.35)*0.45, 0.5+cos(t*uSpeed*0.55)*0.45);
          vec2 c3  = vec2(0.5+cos(t*uSpeed*0.50)*0.40, 0.5+sin(t*uSpeed*0.40)*0.40);
          vec2 c4  = vec2(0.5+sin(t*uSpeed*0.70)*0.35, 0.5+cos(t*uSpeed*0.60)*0.35);
          vec2 c5  = vec2(0.5+cos(t*uSpeed*0.45)*0.50, 0.5+sin(t*uSpeed*0.65)*0.50);
          vec2 c6  = vec2(0.5+sin(t*uSpeed*0.55)*0.38, 0.5+cos(t*uSpeed*0.48)*0.42);
          vec2 c7  = vec2(0.5+cos(t*uSpeed*0.65)*0.36, 0.5+sin(t*uSpeed*0.52)*0.44);
          vec2 c8  = vec2(0.5+sin(t*uSpeed*0.42)*0.41, 0.5+cos(t*uSpeed*0.58)*0.39);
          vec2 c9  = vec2(0.5+cos(t*uSpeed*0.48)*0.37, 0.5+sin(t*uSpeed*0.62)*0.43);
          vec2 c10 = vec2(0.5+sin(t*uSpeed*0.68)*0.33, 0.5+cos(t*uSpeed*0.44)*0.46);
          vec2 c11 = vec2(0.5+cos(t*uSpeed*0.38)*0.39, 0.5+sin(t*uSpeed*0.56)*0.41);

          float a0  = 0.55 + 0.45 * sin(t * uSpeed * 0.80);
          float a1  = 0.55 + 0.45 * cos(t * uSpeed * 1.20);
          float a2  = 0.55 + 0.45 * sin(t * uSpeed * 0.70);
          float a3  = 0.55 + 0.45 * cos(t * uSpeed * 1.30);
          float a4  = 0.55 + 0.45 * sin(t * uSpeed * 1.10);
          float a5  = 0.55 + 0.45 * cos(t * uSpeed * 0.90);
          float a6  = 0.55 + 0.45 * sin(t * uSpeed * 1.40);
          float a7  = 0.55 + 0.45 * cos(t * uSpeed * 1.50);
          float a8  = 0.55 + 0.45 * sin(t * uSpeed * 1.60);
          float a9  = 0.55 + 0.45 * cos(t * uSpeed * 1.70);
          float a10 = 0.55 + 0.45 * sin(t * uSpeed * 1.80);
          float a11 = 0.55 + 0.45 * cos(t * uSpeed * 1.90);

          float w0  = influence(uv, c0,  r) * a0;
          float w1  = influence(uv, c1,  r) * a1;
          float w2  = influence(uv, c2,  r) * a2;
          float w3  = influence(uv, c3,  r) * a3;
          float w4  = influence(uv, c4,  r) * a4;
          float w5  = influence(uv, c5,  r) * a5;
          float w6  = influence(uv, c6,  r) * a6  * step(6.0, uGradientCount);
          float w7  = influence(uv, c7,  r) * a7  * step(6.0, uGradientCount);
          float w8  = influence(uv, c8,  r) * a8  * step(6.0, uGradientCount);
          float w9  = influence(uv, c9,  r) * a9  * step(6.0, uGradientCount);
          float w10 = influence(uv, c10, r) * a10 * step(10.0, uGradientCount);
          float w11 = influence(uv, c11, r) * a11 * step(10.0, uGradientCount);

          vec3  num = uColor1*w0 + uColor2*w1 + uColor3*w2 + uColor4*w3
                    + uColor5*w4 + uColor6*w5 + uColor1*w6 + uColor2*w7
                    + uColor3*w8 + uColor4*w9 + uColor5*w10+ uColor6*w11;
          float den = w0+w1+w2+w3+w4+w5+w6+w7+w8+w9+w10+w11;

          float coverage = clamp(den * 1.5, 0.0, 1.0);
          vec3 blended = den > 0.0001 ? num / den : uDarkNavy;
          vec3 col = mix(uDarkNavy, blended, coverage);

          float lum = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(vec3(lum), col, 1.25);
          col = pow(clamp(col, 0.0, 1.0), vec3(0.88));
          return col;
        }

        void main() {
          vec2 uv = vUv;
          vec4 tt = texture2D(uTouchTexture, uv);
          float vx = -(tt.r * 2.0 - 1.0);
          float vy = -(tt.g * 2.0 - 1.0);
          float ti = tt.b;
          uv.x += vx * 0.5 * ti;
          uv.y += vy * 0.5 * ti;
          float d = length(uv - 0.5);
          uv += vec2(sin(d * 20.0 - uTime * 3.0) * 0.025 + sin(d * 15.0 - uTime * 2.0) * 0.02) * ti;

          vec3 col = getGradientColor(uv, uTime);
          col += grain(uv, uTime) * uGrainIntensity;
          float ts = uTime * 0.3;
          col.r += sin(ts) * 0.012;
          col.g += cos(ts * 1.4) * 0.008;
          col.b += sin(ts * 1.2) * 0.012;
          gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
        }
      `,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.sceneManager.scene.add(this.mesh);
  }

  update(delta: number) { this.uniforms['uTime'].value += delta; }

  onResize(w: number, h: number) {
    const vs = this.sceneManager.getViewSize();
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.geometry = new THREE.PlaneGeometry(vs.width, vs.height, 1, 1);
    }
    this.uniforms['uResolution'].value.set(w, h);
  }

  dispose() {
    if (this.mesh) {
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
    }
  }
}

// ─── AppScene ─────────────────────────────────────────────────────────────────

class AppScene {
  renderer!: THREE.WebGLRenderer;
  camera!: THREE.PerspectiveCamera;
  scene!: THREE.Scene;
  clock!: THREE.Clock;
  touchTexture!: TouchTexture;
  gradientBackground!: GradientBackground;
  private animFrameId = 0;
  private destroyed = false;

  constructor(private container: HTMLElement) {}

  init() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
      stencil: false,
      depth: false,
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setAnimationLoop(null);
    Object.assign(this.renderer.domElement.style, {
      position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    });
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      45, this.container.clientWidth / this.container.clientHeight, 0.1, 10000
    );
    this.camera.position.z = 50;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(GRADIENT_BASE_COLOR);
    this.clock = new THREE.Clock();

    this.touchTexture = new TouchTexture();
    this.gradientBackground = new GradientBackground(this);
    this.gradientBackground.uniforms['uTouchTexture'].value = this.touchTexture.texture;
    this.gradientBackground.init();
    this.tick();
  }

  getViewSize() {
    const fovRad = (this.camera.fov * Math.PI) / 180;
    const h = Math.abs(this.camera.position.z * Math.tan(fovRad / 2) * 2);
    return { width: h * this.camera.aspect, height: h };
  }

  onMouseMove(ev: { clientX: number; clientY: number }) {
    const rect = this.container.getBoundingClientRect();
    this.touchTexture.addTouch({
      x: (ev.clientX - rect.left) / rect.width,
      y: 1 - (ev.clientY - rect.top) / rect.height,
    });
  }

  onResize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.gradientBackground.onResize(w, h);
  }

  private render() {
    const delta = Math.min(this.clock.getDelta(), 0.1);
    this.touchTexture.update();
    this.gradientBackground.update(delta);
    this.renderer.render(this.scene, this.camera);
  }

  private tick() {
    if (this.destroyed) return;
    this.render();
    this.animFrameId = requestAnimationFrame(() => this.tick());
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.animFrameId);
    this.gradientBackground.dispose();
    this.touchTexture.dispose();
    this.renderer.dispose();
    this.renderer.domElement.parentNode?.removeChild(this.renderer.domElement);
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Header implements AfterViewInit, OnDestroy {
  readonly lang = inject(TyroUiLangService).lang;

  @ViewChild('canvasContainer') canvasContainerRef!: ElementRef<HTMLDivElement>;

  private appScene!: AppScene;
  private boundMouseMove!: (e: MouseEvent) => void;
  private boundResize!: () => void;
  private boundTouchMove!: (e: TouchEvent) => void;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.appScene = new AppScene(this.canvasContainerRef.nativeElement);
      this.appScene.init();

      this.boundMouseMove = (e: MouseEvent) => this.appScene.onMouseMove(e);
      this.boundResize    = () => this.appScene.onResize();
      this.boundTouchMove = (e: TouchEvent) => {
        const t = e.touches[0];
        this.appScene.onMouseMove({ clientX: t.clientX, clientY: t.clientY });
      };

      window.addEventListener('mousemove', this.boundMouseMove);
      window.addEventListener('resize',    this.boundResize);
      window.addEventListener('touchmove', this.boundTouchMove);
    });
  }

  ngOnDestroy(): void {
    this.appScene?.destroy();
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('resize',    this.boundResize);
    window.removeEventListener('touchmove', this.boundTouchMove);
  }
}
