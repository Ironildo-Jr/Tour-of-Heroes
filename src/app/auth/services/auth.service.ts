import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Credential } from '../models/credentials.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedin = new BehaviorSubject<boolean>(false);
  isLoggedin$ = this.loggedin.asObservable();
  constructor(private route: Router) {}

  login(crendital: Credential) {
    localStorage.setItem('token', crendital.password);
    this.updateLogin();
    this.route.navigate(['/dashboard']);
  }

  logout() {
    localStorage.clear();
    this.updateLogin();
    this.route.navigate(['/login']);
  }

  updateLogin() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedin.next(true);
    } else {
      this.loggedin.next(false);
    }
  }
}
