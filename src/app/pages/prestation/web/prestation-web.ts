import { Component, inject } from '@angular/core';
import { CaseStudyCard } from '../../../components/case-study-card/case-study-card';
import { TyroUiCTA, TyroUiLangService } from "tyrolium-ui";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-prestation-web',
    templateUrl: './prestation-web.html',
    styleUrls: ['../prestation-shared.css', './prestation-web.css'],
    imports: [CaseStudyCard, TyroUiCTA, RouterLink]
})
export class PrestationWeb {
    readonly lang = inject(TyroUiLangService).lang;

    scrollToOffres() {
        const element = document.getElementById('offres');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 70;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }
}
