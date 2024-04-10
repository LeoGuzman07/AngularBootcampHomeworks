import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMaterialComponent } from './button-material/button-material.component';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    ButtonMaterialComponent,
  ],
  imports: [
    CommonModule, MatButtonModule, FormsModule,MatInputModule,MatFormFieldModule
  ],
  exports: [ButtonMaterialComponent,]
})
export class AngularMaterialModule { }
