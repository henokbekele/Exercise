import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { DbService } from "app/db.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-profile-component',
  template: `


    <p>  profile</p>
     <p>  id:{{id2}}</p>
      <p> name: {{name}}</p>
     <p>  email:{{email}}</p>

    
  `,
  styles: []
})
export class ProfileComponentComponent implements OnInit {
  private subscription: Subscription;
  id: number;
  id2: number;
  name: string;
  email: string;

  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {


    this.subscription = activatedRoute.queryParams.subscribe(
      (param: any) => this.id = param['id']

    );

    this.id2 = activatedRoute.snapshot.params['id']

    this.name = this.dbService.getdataname(this.id2);
    this.email = this.dbService.getdataemail(this.id2);
    console.log(this.id2)
    console.log(this.name)
    console.log(this.email)


  }



  // constructor will be used once



  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
