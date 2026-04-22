import { Component } from '@angular/core';
import {TyroUiCTA} from "tyrolium-ui";

@Component({
    selector: 'app-prestation-web',
    templateUrl: './prestation-web.html',
    styleUrls: ['../prestation-shared.css', './prestation-web.css'],
    imports: [
        TyroUiCTA
    ]
})
export class PrestationWeb {}
