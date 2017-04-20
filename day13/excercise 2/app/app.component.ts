import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private names = ["frist item", "second item", "third item"];
  /*constructor(public items:string[]){
  items= ["frist item","second item","third item"];
  }*/
}
