import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  protected moneda: number = 666.34;
  protected texto: String = "Pipe Hello World";
}
