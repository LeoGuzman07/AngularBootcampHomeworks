import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-comp',
  templateUrl: './ng-for-comp.component.html',
  styleUrl: './ng-for-comp.component.scss'
})
export class NgForCompComponent {
  protected ABCList: Array<String> = ["A","B","C"];
}
