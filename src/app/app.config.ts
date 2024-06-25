import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHighlightOptions} from "ngx-highlightjs";

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHighlightOptions({
          coreLibraryLoader: () => import('highlight.js/lib/core'),
          lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, add line numbers if needed
          languages: {
              typescript: () => import('highlight.js/lib/languages/typescript'),
              css: () => import('highlight.js/lib/languages/css'),
              xml: () => import('highlight.js/lib/languages/xml')
          },
          // themePath: 'path-to-theme.css' // Optional, useful for dynamic theme changes
      })
  ]
};
