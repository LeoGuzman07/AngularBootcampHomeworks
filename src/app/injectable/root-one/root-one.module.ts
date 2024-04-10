import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootOneComponent } from './root-one.component';



@NgModule({
  declarations: [RootOneComponent],
  imports: [
    CommonModule,
  ],
  exports: [RootOneComponent],
})
export class RootOneModule { }
