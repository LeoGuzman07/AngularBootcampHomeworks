import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgForCompComponent } from './ng-for-comp/ng-for-comp.component';
import { NgIfCompComponent } from './ng-if-comp/ng-if-comp.component';
import { NgSwitchCompComponent } from './ng-switch-comp/ng-switch-comp.component';



@NgModule({
  declarations: [
    NgForCompComponent,
    NgIfCompComponent,
    NgSwitchCompComponent
  ],
  exports : [NgForCompComponent,NgIfCompComponent,NgSwitchCompComponent],
  imports: [
    CommonModule
  ]
})
export class DirectivasEstructuralesModule { }
