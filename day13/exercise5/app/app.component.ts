import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div mycolor (colorvalue)="setSelectedColor($event)" >Directives for mycolor</div>
   
   color={{selectedcolor}}
  `,
  styles: ['.myBorder { border: 2px solid red; }',
           '.myColor  { color: green; }']
})
export class AppComponent {
selectedcolor:String="black";
  setSelectedColor(value:string)
  {
    this.selectedcolor=value;
  }

 }
