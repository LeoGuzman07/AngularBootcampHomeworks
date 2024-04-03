import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgForComponent } from './ng-for-comp/ng-for.component';
import { NgIfComponent } from './ng-if-comp/ng-if.component';
import { NgSwitchComponent } from './ng-switch-comp/ng-switch.component';



@NgModule({
  declarations: [
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent
  ],
  exports : [NgForComponent,NgIfComponent,NgSwitchComponent],
  imports: [
    CommonModule
  ]
})
export class DirectivasEstructuralesModule { }
