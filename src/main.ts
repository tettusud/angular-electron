import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import "materialize-css";
import "angular2-materialize";
import 'materializecss';
import 'materialize';
import './assets/css/styles.css';
import 'fontawesomecss';

import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);