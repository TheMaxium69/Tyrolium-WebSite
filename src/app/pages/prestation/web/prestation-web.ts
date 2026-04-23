import { Component } from '@angular/core';
import {TyroUiCTA} from "tyrolium-ui";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-prestation-web',
    templateUrl: './prestation-web.html',
    styleUrls: ['../prestation-shared.css', './prestation-web.css'],
    imports: [
        TyroUiCTA,
        RouterLink
    ]
})
export class PrestationWeb {

    scrollToOffres() {
        const element = document.getElementById('offres');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 70;
            window.scrollTo({top: offsetPosition, behavior: 'smooth'});
        }
    }

}
