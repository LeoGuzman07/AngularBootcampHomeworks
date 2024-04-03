import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasDeAtributoModule } from './directivasdeatributo/directivas-de-atributo.module';
import { DirectivasEstructuralesModule } from './directivasestructurales/directivas-estructurales.module';
import { CapitalizeDirective } from './directivas-custom/capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivasDeAtributoModule,
    DirectivasEstructuralesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
