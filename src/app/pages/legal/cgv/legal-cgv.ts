import { Component, inject } from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-cgv',
  templateUrl: './legal-cgv.html',
  styleUrl: '../legal-shared.css',
  imports: [],
})
export class LegalCgv {
  readonly lang = inject(TyroUiLangService).lang;
}
