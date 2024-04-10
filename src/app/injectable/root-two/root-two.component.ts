import { Component } from '@angular/core';
import { RootInjectableService } from '../services/root-injectable.service';

@Component({
  selector: 'app-root-two',
  templateUrl: './root-two.component.html',
  styleUrl: './root-two.component.scss'
})
export class RootTwoComponent {
  constructor(public rootTwo: RootInjectableService){

  }
}
