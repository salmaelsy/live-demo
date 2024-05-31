import { Component } from '@angular/core';
import { ProfileSideBarComponent } from '../profile-side-bar/profile-side-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from '../profile/profile.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProfileSideBarComponent,NavbarComponent,ProfileComponent,TimesheetComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
