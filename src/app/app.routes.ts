import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Project } from './pages/project/project';
import { PrestationLayout } from './pages/prestation/prestation-layout';
import { PrestationWeb } from './pages/prestation/web/prestation-web';
import { PrestationServer } from './pages/prestation/server/prestation-server';
import { PrestationMinecraft } from './pages/prestation/minecraft/prestation-minecraft';
import { PrestationIncubateur } from './pages/prestation/incubateur/prestation-incubateur';
import { PrestationFormation } from './pages/prestation/formation/prestation-formation';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project', component: Project },
  {
    path: 'prestation',
    component: PrestationLayout,
    children: [
      { path: '',            redirectTo: 'web', pathMatch: 'full' },
      { path: 'web',         component: PrestationWeb },
      { path: 'server',      component: PrestationServer },
      { path: 'minecraft',   component: PrestationMinecraft },
      { path: 'incubateur',  component: PrestationIncubateur },
      { path: 'formation',   component: PrestationFormation },
    ],
  },
];
