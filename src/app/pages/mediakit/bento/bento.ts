import { Component, ViewChild, ElementRef, inject, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyroUiLangService } from 'tyrolium-ui';
import { toPng } from 'html-to-image';

@Component({
  selector: 'app-bento',
  templateUrl: './bento.html',
  styleUrls: ['./bento.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Bento implements AfterViewInit, OnDestroy {

  readonly lang = inject(TyroUiLangService).lang;

  @ViewChild('bentoFrame') frameRef!: ElementRef<HTMLElement>;
  @ViewChild('bentoOuter') outerRef!: ElementRef<HTMLElement>;

  scale = 1;
  exporting = false;

  private ro?: ResizeObserver;

  ngAfterViewInit() {
    this.ro = new ResizeObserver(() => this.updateScale());
    this.ro.observe(this.outerRef.nativeElement);
    this.updateScale();
  }

  ngOnDestroy() {
    this.ro?.disconnect();
  }

  private updateScale() {
    const w = this.outerRef.nativeElement.clientWidth;
    this.scale = w / 1080;
    this.frameRef.nativeElement.style.transform = `scale(${this.scale})`;
  }

  async export() {
    if (this.exporting) return;
    this.exporting = true;
    try {
      const dataUrl = await toPng(this.frameRef.nativeElement, {
        width: 1080,
        height: 1080,
        pixelRatio: 2,
        style: { transform: 'none' },
      });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'global-bento.png';
      a.click();
    } finally {
      this.exporting = false;
    }
  }
}
