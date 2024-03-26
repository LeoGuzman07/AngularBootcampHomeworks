import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirectiveDirective {

  constructor(public element: ElementRef) { 
    this.element.nativeElement.style = 'text-transform: capitalize';
  }

}
