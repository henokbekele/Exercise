import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MyColorDirective {

  arraycolor: string[] = [ "red", "yellow", "blue"];
  indexv: number = 0;

  @Output() colorvalue: EventEmitter<string>;
  constructor(private e: ElementRef, private r: Renderer) {

    r.setElementStyle(e.nativeElement, 'font-size', '22px')
    this.colorvalue = new EventEmitter();
  }


  @HostListener('click') collorchange() {


    if (this.arraycolor.length - 1 == this.indexv) {
      this.indexv = 0;
    }
    else {
      this.indexv++;
    };
    this.e.nativeElement.style.color = this.arraycolor[this.indexv];
    this.colorvalue.emit(this.arraycolor[this.indexv])

  }


  ngOnInit() {

  }




}
