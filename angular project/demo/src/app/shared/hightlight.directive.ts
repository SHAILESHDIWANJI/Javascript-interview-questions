import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[higlight]'
})
export class HightlightDirective{
  

    constructor(private el:ElementRef) {
    }

    @HostListener('blur') onBlur(){
   const upperText= this.el.nativeElement.value.toUpperCase()  
 this.el.nativeElement.value=upperText
  }
 
}