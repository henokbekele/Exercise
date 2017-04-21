import { Component, OnInit } from '@angular/core';
import { DbService } from "app/db.service";

@Component({
  selector: 'app-students-component',
  template: `
    <p>
      Wellcome Students

      <li *ngFor="let student of items"><a [routerLink]="['/','profile', student.id]"> {{student.name}}</a></li>
    </p>

            <router-outlet></router-outlet>
  `,
  styles: []
})
export class StudentsComponentComponent implements OnInit {
  private items;
  constructor(private dbService: DbService) {
    this.items = dbService.getdata();
    console.log("hhhhhhhhhhhh")
  }

  ngOnInit() {
  }

}
