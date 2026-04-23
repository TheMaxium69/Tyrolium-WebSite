import {Component, inject, ViewEncapsulation} from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-terms',
  templateUrl: './legal-terms.html',
  styleUrl: '../legal-shared.css',
  imports: [],
  encapsulation: ViewEncapsulation.None,
})
export class LegalTerms {
  readonly lang = inject(TyroUiLangService).lang;
  currentYear = new Date().getFullYear();
}
