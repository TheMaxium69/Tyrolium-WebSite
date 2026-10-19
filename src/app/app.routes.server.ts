import { RenderMode, ServerRoute } from '@angular/ssr';
import { LABS } from './pages/labs/labs-data';
import { CASE_STUDIES } from './pages/etudes/etudes-data';

// Pré-rendu (SSG) : chaque route est générée en HTML statique au build (en français et en /en/)
export const serverRoutes: ServerRoute[] = [
  {
    path: 'labs/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => LABS.map(l => ({ slug: l.slug })),
  },
  {
    path: 'en/labs/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => LABS.map(l => ({ slug: l.slug })),
  },
  {
    path: 'etudes-de-cas/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => CASE_STUDIES.map(c => ({ slug: c.slug })),
  },
  {
    path: 'en/etudes-de-cas/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => CASE_STUDIES.map(c => ({ slug: c.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
