import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser: boolean = false;

  constructor() { }

  // Method to simulate user login
  login(username: string, password: string): boolean {
    // You might have actual authentication logic here, like calling an API
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticatedUser = true;
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  }

  // Method to simulate user logout
  logout(): void {
    this.isAuthenticatedUser = false;
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
}
