import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';
import { CASE_STUDIES, CaseStudy } from './etudes-data';

@Component({
  selector: 'app-etudes',
  imports: [RouterLink],
  templateUrl: './etudes.html',
  styleUrl: './etudes.css',
  encapsulation: ViewEncapsulation.None,
})
export class Etudes {
  readonly lang = inject(TyroUiLangService).lang;
  readonly studies: CaseStudy[] = CASE_STUDIES;
}
