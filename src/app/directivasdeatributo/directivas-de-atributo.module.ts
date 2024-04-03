import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassComponent } from './ng-class-comp/ng-class.component';
import { NgStyleComponent } from './ng-style-comp/ng-style.component';



@NgModule({
  declarations: [
    NgClassComponent,
    NgStyleComponent
  ],
  exports: [NgClassComponent,NgStyleComponent],
  imports: [
    CommonModule,
  ]
})
export class DirectivasDeAtributoModule { }
