import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-comp',
  templateUrl: './ng-style-comp.component.html',
  styleUrl: './ng-style-comp.component.scss'
})
export class NgStyleCompComponent {
  protected redStyleBool: boolean = false;

  protected buttonHandler(){
    this.redStyleBool = !this.redStyleBool;
  }
}
