import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeComponent } from './pipecomponent/pipe.component';
import { CapitalizePipe } from './custompipe/capitalize.pipe';


@NgModule({
  declarations: [
    PipeComponent, CapitalizePipe
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[PipeComponent, CapitalizePipe]
})
export class PipeModule { }
