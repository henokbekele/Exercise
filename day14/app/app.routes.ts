import { RouterModule, Routes } from "@angular/router";
import { HomeComponentComponent } from "app/home-component.component";
import { StudentsComponentComponent } from "app/students-component.component";
import { ProfileComponentComponent } from "app/profile-component.component";


const MY_ROUTES: Routes = [
    { path: 'homepage', component: HomeComponentComponent },
    { path: 'students', component: StudentsComponentComponent },
  { path: 'profile/:id', component: ProfileComponentComponent },
    { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
