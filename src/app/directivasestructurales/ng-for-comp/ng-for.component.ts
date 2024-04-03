import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {
  protected abcList: Array<String> = ["A","B","C"];
}
