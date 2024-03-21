import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasdeatributoModule } from './directivasdeatributo/directivasdeatributo.module';
import { DirectivasestructuralesModule } from './directivasestructurales/directivasestructurales.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivasdeatributoModule,
    DirectivasestructuralesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
