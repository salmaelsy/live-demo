import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

export const routes: Routes = [
    {path:"", redirectTo:"/trax/home",pathMatch:'full'},
    {path:"trax/home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    { path: 'timesheet', component:ContainerComponent },
    { path: 'profile', component:ProfileComponent },
    // , canActivate: [AuthGuard]

];
