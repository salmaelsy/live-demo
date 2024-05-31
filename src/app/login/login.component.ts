import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../trax-services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  invalidData: boolean = false


  constructor(private router: Router, private authService:AuthService) { }

 
  submitForm(form: FormGroup) {
    this.invalidData = !this.authService.login(form.value.userName ,form.value.password)
    if (this.invalidData) {
      return;
    }
    this.router.navigate(['/trax/home']); 
  }

}
