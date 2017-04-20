import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div mycolor >Directives for mycolor</div>
   
  `,
  styles: ['.myBorder { border: 2px solid red; }',
           '.myColor  { color: green; }']
})
export class AppComponent {
 }
