import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasDeAtributoModule } from './directivasdeatributo/directivas-de-atributo.module';
import { DirectivasEstructuralesModule } from './directivasestructurales/directivas-estructurales.module';
import { InjectableModule } from './injectable/injectable.module';
import { RootOneModule } from './injectable/root-one/root-one.module';
import { RootTwoModule } from './injectable/root-two/root-two.module';
import { PipeModule } from './pipes/pipe.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivasDeAtributoModule,
    DirectivasEstructuralesModule,
    InjectableModule,
    RootOneModule,
    RootTwoModule,
    PipeModule,
    AngularMaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
