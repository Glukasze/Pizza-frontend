import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-checkout-navbar',
  templateUrl: './checkout-navbar.component.html',
  styleUrls: ['./checkout-navbar.component.css']
})
export class CheckoutNavbarComponent implements OnInit {

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
