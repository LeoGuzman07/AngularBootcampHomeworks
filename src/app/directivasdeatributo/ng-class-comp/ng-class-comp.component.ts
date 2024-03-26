import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-comp',
  templateUrl: './ng-class-comp.component.html',
  styleUrl: './ng-class-comp.component.scss'
})
export class NgClassCompComponent {
  protected redClassActive: boolean = false;

  protected buttonHandler(){
    this.redClassActive = !this.redClassActive;
  }
}
