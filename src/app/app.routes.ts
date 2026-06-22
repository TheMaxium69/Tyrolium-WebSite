import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Project } from './pages/project/project';
import { Contact } from './pages/contact/contact';
import { Mediakit } from './pages/mediakit/mediakit';
import { Partenaires } from './pages/partenaires/partenaires';
import { Chronologie } from './pages/chronologie/chronologie';
import { Equipe } from './pages/equipe/equipe';
import { Rse } from './pages/rse/rse';
import { Labs } from './pages/labs/labs';
import { LabsOne } from './pages/labs/labs-one/labs-one';
import { Server } from './pages/server/server';
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
import { LegalPrivacy } from './pages/legal/privacy/legal-privacy';
import {TyroUiForbidden, TyroUiNotFound} from "tyrolium-ui";

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project', component: Project },
  { path: 'contact', component: Contact },
  { path: 'mediakit', component: Mediakit },
  { path: 'labs', component: Labs },
  { path: 'labs/:slug', component: LabsOne },
  { path: 'server', component: Server },
  { path: 'partenaires', component: Partenaires },
  { path: 'chronologie', component: Chronologie },
  { path: 'equipe', component: Equipe },
  { path: 'rse', component: Rse },
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
      { path: 'terms',   component: LegalTerms },
      { path: 'cgu',    component: LegalCgu },
      { path: 'cgv',    component: LegalCgv },
      { path: 'privacy', component: LegalPrivacy },
    ],
  },
  { path: '403', component: TyroUiForbidden },
  { path: '**', component: TyroUiNotFound }
];
