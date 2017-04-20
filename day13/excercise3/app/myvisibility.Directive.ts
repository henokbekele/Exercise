import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class myvisibilityDirective {
  @Input() myvisibility: boolean;
  constructor(private e: ElementRef, private r: Renderer) {
  }

  ngOnInit() {
    if (!this.myvisibility)
      this.r.setElementStyle(this.e.nativeElement, 'display', 'none');
  }




}
