import { Component } from '@angular/core';
import { RootInjectableService } from '../services/root-injectable.service';

@Component({
  selector: 'app-root-one',
  templateUrl: './root-one.component.html',
  styleUrl: './root-one.component.scss'
})
export class RootOneComponent {

  constructor(public rootOne:RootInjectableService){
    
  }

}
