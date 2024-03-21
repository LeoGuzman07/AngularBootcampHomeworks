import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-comp',
  templateUrl: './ng-class-comp.component.html',
  styleUrl: './ng-class-comp.component.scss'
})
export class NgClassCompComponent {
  protected redClassBool: boolean = false;

  protected buttonHandler(){
    this.redClassBool = !this.redClassBool;
  }
}
