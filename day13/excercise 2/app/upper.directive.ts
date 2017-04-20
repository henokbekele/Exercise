import { Directive, ElementRef, Renderer, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private element: ElementRef,
              private renderer: Renderer,
              
              ) { 
               // element.nativeElement.style.texttransform= 'uppercase';
                renderer.setElementStyle(element.nativeElement, 'text-transform','uppercase');
               // viewContainer.clear();
               // viewContainer.createEmbeddedView(templateRef);
              }
//private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef
}
