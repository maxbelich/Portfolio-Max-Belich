import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/** Bootstraps the root standalone component with the app-wide providers. */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
