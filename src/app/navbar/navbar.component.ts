import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AuthService } from '../trax-services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  hideProfileLinks:boolean = false
  constructor(private authService: AuthService,private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideProfileLinks= this.router.url.includes('/timesheet');
        console.log('true',  this.router.url.includes('/timesheet'));
        
      }
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  showSideNav() {
    const sideNav = document.querySelector(".side-nav");
    if (sideNav && sideNav.classList.contains('active')) {
      document.querySelector(".side-nav")?.classList.remove('active')
      document.querySelector(".overlay")?.classList.remove('active')
    } else if (sideNav) {
      document.querySelector(".side-nav")?.classList.toggle('active');
      document.querySelector(".overlay")?.classList.toggle('active')
    }
   
  }
  Logout(){
    this.authService.logout();
    this.isLoggedIn= false;
    if(this.hideProfileLinks){
      this.router.navigateByUrl('/trax/home');
    }
  }
}
