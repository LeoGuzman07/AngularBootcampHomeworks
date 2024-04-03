import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  protected redClassActive: boolean = false;

  protected buttonHandler(){
    this.redClassActive = !this.redClassActive;
  }
}
