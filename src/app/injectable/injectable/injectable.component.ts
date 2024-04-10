import { Component} from '@angular/core';
import { InjectableModule } from '../injectable.module';

@Component({
  selector: 'app-injectable',
  templateUrl: './injectable.component.html',
  styleUrl: './injectable.component.scss'
})
export class InjectableComponent {
  constructor(public injectableModuleText: InjectableModule){
  }
}
