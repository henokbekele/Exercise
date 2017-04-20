import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<div [myvisibility]="true">data to be displayed as visibility directive is true</div>
<div [myvisibility]="false">data to be displayed as visibility directive is false </div>
<div [myvisibility]="true">data to be displayed as visibility directive is true for second time </div>

  `,


})
export class AppComponent {

}
