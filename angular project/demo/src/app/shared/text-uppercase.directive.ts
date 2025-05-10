import { Directive, ElementRef, HostListener, Injectable } from "@angular/core";

@Directive({
    selector:'[upperCase]'
})

export class  TextUppercase {

    constructor(private el:ElementRef){}

    @HostListener('blur') onBlur(){
        let uppercase=this.el.nativeElement.value.toUpperCase()

        this.el.nativeElement.value=uppercase
    }
}