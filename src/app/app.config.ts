import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

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
        })
    ),
  ],
};
