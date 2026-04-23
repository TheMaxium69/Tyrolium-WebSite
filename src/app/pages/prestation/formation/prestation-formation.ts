import { Component } from '@angular/core';
import {TyroUiCTA} from "tyrolium-ui";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-prestation-formation',
    templateUrl: './prestation-formation.html',
    styleUrls: ['../prestation-shared.css', './prestation-formation.css'],
    imports: [
        TyroUiCTA,
        RouterLink
    ]
})
export class PrestationFormation {
    scrollToFormations() {
        const element = document.getElementById('formations');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 70;
            window.scrollTo({top: offsetPosition, behavior: 'smooth'});
        }
    }
}
