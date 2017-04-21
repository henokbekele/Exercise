import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponentComponent } from "app/home-component.component";
import { StudentsComponentComponent } from "app/students-component.component";
import { DbService } from "app/db.service";
import { ProfileComponentComponent } from './profile-component.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponentComponent,
  
    StudentsComponentComponent,
  
    ProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
