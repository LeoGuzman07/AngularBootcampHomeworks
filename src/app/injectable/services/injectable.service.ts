import { Injectable } from '@angular/core';
import { InjectableModule } from '../injectable.module';

@Injectable({
  providedIn: InjectableModule
})
export class InjectableService {

  public injectableText: String = "Texto injectable";
  constructor() { 
  }
}
