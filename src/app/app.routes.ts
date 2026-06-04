import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Project } from './pages/project/project';
import { Contact } from './pages/contact/contact';
import { PrestationLayout } from './pages/prestation/prestation-layout';
import { PrestationWeb } from './pages/prestation/web/prestation-web';
import { PrestationServer } from './pages/prestation/server/prestation-server';
import { PrestationMinecraft } from './pages/prestation/minecraft/prestation-minecraft';
import { PrestationIncubateur } from './pages/prestation/incubateur/prestation-incubateur';
import { PrestationFormation } from './pages/prestation/formation/prestation-formation';
import { LegalLayout } from './pages/legal/legal-layout';
import { LegalTerms } from './pages/legal/terms/legal-terms';
import { LegalCgu } from './pages/legal/cgu/legal-cgu';
import { LegalCgv } from './pages/legal/cgv/legal-cgv';
import {TyroUiNotFound} from "tyrolium-ui";

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project', component: Project },
  { path: 'contact', component: Contact },
  {
    path: 'prestation',
    component: PrestationLayout,
    children: [
      { path: '',           redirectTo: 'web', pathMatch: 'full' },
      { path: 'web',        component: PrestationWeb },
      { path: 'server',     component: PrestationServer },
      { path: 'minecraft',  component: PrestationMinecraft },
      { path: 'incubateur', component: PrestationIncubateur },
      { path: 'formation',  component: PrestationFormation },
    ],
  },
  {
    path: 'legal',
    component: LegalLayout,
    children: [
      { path: '',      redirectTo: 'terms', pathMatch: 'full' },
      { path: 'terms', component: LegalTerms },
      { path: 'cgu',   component: LegalCgu },
      { path: 'cgv',   component: LegalCgv },
    ],
  },
  { path: '**', component: TyroUiNotFound }
];
