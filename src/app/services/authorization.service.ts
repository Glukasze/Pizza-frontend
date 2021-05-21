import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  loggedIn = new Subject();
  loggedInBool: boolean;
  registeredUsers = [];
  user = {
    login: 'rozan',
    password: 'admin',
    email: 'rozan@wp.pl'
  };
  loggedUser = new Subject();
  logedUserObj;

  constructor() {
    this.registeredUsers.push(this.user);
  }

  logIn(): void {
    this.loggedIn.next(true);
    this.loggedInBool = true;
  }

  logOut(): void {
    this.loggedIn.next(false);
    this.loggedInBool = false;
  }

  checkUserLogin(login, password): boolean {
    for (const user of this.registeredUsers) {
      if (user.login === login && user.password === password) {
        this.setLoggedUser(user);
        return true;
      }
    }
    return false;
  }

  checkUserRegister(login, password): boolean {
    for (const user of this.registeredUsers) {
      if (user.login === login && user.password === password) {
        return true;
      }
    }
    return false;
  }

  setLoggedUser(user): void {
    this.loggedUser.next(user);
    this.logedUserObj = user;
  }

  saveUser(login, password, email): void {
    const tempUser = {
      login: '',
      password: '',
      email: ''
    };
    tempUser.login = login;
    tempUser.password = password;
    tempUser.email = email;
    this.registeredUsers.push(tempUser);
  }

  addStreet(user): void {
    for (const registeredUser of this.registeredUsers) {
      if (user.login === 'jan' && user.password === 'jan') {
        registeredUser.street = 'prosta';
      }
    }
  }

}
