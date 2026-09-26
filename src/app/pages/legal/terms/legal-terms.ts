import {Component, inject, ViewEncapsulation} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-legal-terms',
  templateUrl: './legal-terms.html',
  styleUrl: '../legal-shared.css',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
})
export class LegalTerms {
  readonly lang = inject(TyroUiLangService).lang;
  currentYear = new Date().getFullYear();
}
