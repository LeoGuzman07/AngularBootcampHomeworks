import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-comp',
  templateUrl: './ng-if-comp.component.html',
  styleUrl: './ng-if-comp.component.scss'
})
export class NgIfCompComponent {
  protected ABCList: Array<String> = ["A","B","C"];
}
