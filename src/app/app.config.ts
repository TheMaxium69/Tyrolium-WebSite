import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  PreloadAllModules, provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideTyroUiSeo } from 'tyrolium-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideTyroUiSeo(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
        routes,
        withInMemoryScrolling({
          scrollPositionRestoration: 'enabled',
          anchorScrolling: 'enabled'
        }),
        // Une fois la page affichée, les autres pages sont téléchargées en arrière-plan : navigation instantanée
        withPreloading(PreloadAllModules),
        // Pages chargées à la demande : Angular attend que la 1re page soit prête avant de remplacer
        // le HTML pré-rendu (sinon la zone de contenu clignoterait à vide le temps de télécharger son code)
        withEnabledBlockingInitialNavigation(),
    ),
  ],
};
