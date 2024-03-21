import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassCompComponent } from './ng-class-comp/ng-class-comp.component';
import { NgStyleCompComponent } from './ng-style-comp/ng-style-comp.component';



@NgModule({
  declarations: [
    NgClassCompComponent,
    NgStyleCompComponent
  ],
  exports: [NgClassCompComponent,NgStyleCompComponent],
  imports: [
    CommonModule,
  ]
})
export class DirectivasdeatributoModule { }
