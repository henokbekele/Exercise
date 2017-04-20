import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public names:string[];
  constructor(){
    this.names= ["frist item","second item","third item"];
  }
 

}
