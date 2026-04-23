import { Component, inject } from '@angular/core';
import { TyroUiCTA, TyroUiLangService } from "tyrolium-ui";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-prestation-incubateur',
    templateUrl: './prestation-incubateur.html',
    styleUrls: ['../prestation-shared.css', './prestation-incubateur.css'],
    imports: [TyroUiCTA, RouterLink]
})
export class PrestationIncubateur {
    readonly lang = inject(TyroUiLangService).lang;

    scrollToProgramme() {
        const element = document.getElementById('programme');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 70;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }
}
