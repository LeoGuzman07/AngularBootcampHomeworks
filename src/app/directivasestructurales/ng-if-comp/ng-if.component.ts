import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {
  protected abcList: Array<String> = ["A","B","C"];
}
