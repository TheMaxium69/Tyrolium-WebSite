import { Component, inject } from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-cgu',
  templateUrl: './legal-cgu.html',
  styleUrl: '../legal-shared.css',
  imports: [],
})
export class LegalCgu {
  readonly lang = inject(TyroUiLangService).lang;
}
