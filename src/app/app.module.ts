import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasDeAtributoModule } from './directivasdeatributo/directivas-de-atributo.module';
import { DirectivasEstructuralesModule } from './directivasestructurales/directivas-estructurales.module';
import { CapitalizeDirectiveDirective } from './directivas-custom/capitalize-directive.directive';
import { DataBindingModule } from './data-binding/data-binding.module';
import { MyFirstModuleModule } from './modulos/my-first-module/my-first-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivasDeAtributoModule,
    DirectivasEstructuralesModule,
    DataBindingModule,
    MyFirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
