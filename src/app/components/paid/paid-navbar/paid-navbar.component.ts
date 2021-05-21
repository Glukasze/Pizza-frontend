import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-paid-navbar',
  templateUrl: './paid-navbar.component.html',
  styleUrls: ['./paid-navbar.component.css']
})
export class PaidNavbarComponent implements OnInit {

  loggedIn = this.authorizationService.loggedInBool;
  loggedUser = this.authorizationService.logedUserObj;

  constructor(private authorizationService: AuthorizationService) { }


  ngOnInit(): void {
    this.authorize();
    this.setLoggedUser();
  }

  authorize(): void {
    this.authorizationService.loggedIn.subscribe(
      (data: boolean) => {
        this.loggedIn = data;
      }
    );
  }

  logOut(): void {
    this.authorizationService.logOut();
  }

  setLoggedUser(): void {

    this.authorizationService.loggedUser.subscribe(
      data => {
        this.loggedUser = data;
      }
    );
  }


}
