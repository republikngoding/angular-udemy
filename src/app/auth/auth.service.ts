import { Injectable } from '@angular/core';
import { User } from './user';
import { AuthData } from './auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user?: User;

  constructor() { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
  }

  logout() {
    this.user = null!;
  }

  getUser() {
    return { ...this.user };
  }
}
