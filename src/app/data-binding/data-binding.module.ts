import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent
  ],
  exports : [DataBindingComponent],
  imports: [
    CommonModule,
  ]
})
export class DataBindingModule { }
