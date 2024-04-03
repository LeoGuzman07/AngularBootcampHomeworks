import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent {
  protected redStyleActive: boolean = false;

  protected buttonHandler(){
    this.redStyleActive = !this.redStyleActive;
  }
}
