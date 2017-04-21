import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <p>
      wellcome home page!
    </p>
  `,
  styles: []
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
