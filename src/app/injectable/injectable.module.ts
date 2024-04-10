import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectableComponent } from './injectable/injectable.component';
import { InjectableService } from './services/injectable.service';


@NgModule({
  declarations: [
    InjectableComponent,
  ],
  exports: [InjectableComponent],

  imports: [
    CommonModule,
  ],
  providers: [InjectableService]
})
export class InjectableModule { 
  public injectableText: String;
  constructor(private injcText:InjectableService){
    this.injectableText = injcText.injectableText;
  }
}
