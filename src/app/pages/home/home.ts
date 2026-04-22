import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import {TyroUiCTA} from "tyrolium-ui";

@Component({
  selector: 'app-home',
    imports: [Header, TyroUiCTA],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
