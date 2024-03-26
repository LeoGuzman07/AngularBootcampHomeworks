import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-comp',
  templateUrl: './ng-switch-comp.component.html',
  styleUrl: './ng-switch-comp.component.scss'
})
export class NgSwitchCompComponent {
  protected ABCList: Array<String> = ["A","B","C"];
}
