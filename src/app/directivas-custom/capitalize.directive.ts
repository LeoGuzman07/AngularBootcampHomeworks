import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(public element: ElementRef) { 
    this.element.nativeElement.style = 'text-transform: capitalize';
  }

}
