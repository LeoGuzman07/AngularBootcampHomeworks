import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { Route, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: MyFirstComponentComponent
}]

@NgModule({
  declarations: [
    MyFirstComponentComponent
  ],
  exports: [MyFirstComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MyFirstModuleModule { }
