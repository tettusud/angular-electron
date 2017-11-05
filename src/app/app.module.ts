import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";
import { AppComponent } from './app.component';

import {rootRouterConfig} from './app.routes';

import {AndroidHomeComponent} from './pages/android/android.component';
import {IosHomeComponent} from './pages/ios/ios.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig)    
  ],
  declarations: [
    AppComponent,
    MaterializeDirective,
    AndroidHomeComponent,
    IosHomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 