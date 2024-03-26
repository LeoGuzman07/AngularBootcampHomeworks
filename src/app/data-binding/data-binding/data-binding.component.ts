import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  protected bindingText: string = "Hello World";

  protected buttonHandler(){
    alert("I was triggered by an event");
  }

  protected inputHandler(inputValue: string){
    console.log(inputValue);
    this.bindingText= inputValue;
  }
}
