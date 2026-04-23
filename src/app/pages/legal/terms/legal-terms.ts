import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-terms',
  templateUrl: './legal-terms.html',
  styleUrl: '../legal-shared.css',
  imports: [],
})
export class LegalTerms {
  currentYear = new Date().getFullYear();
}
