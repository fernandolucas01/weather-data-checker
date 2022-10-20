import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = !!localStorage.getItem('loggedIn') || false;

  constructor(private readonly router: Router) { }

  login(user: User): void {
    this.loggedInStatus =
      user.username === environment.USER &&
      user.password === environment.PASSWORD;

    if (this.loggedInStatus) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['weather-panel']);
    }
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
  }

  get isLoggedIn() {
    return !!localStorage.getItem('loggedIn') || this.loggedInStatus;
  }

}
