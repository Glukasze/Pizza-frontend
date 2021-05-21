import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-cart-navbar',
  templateUrl: './cart-navbar.component.html',
  styleUrls: ['./cart-navbar.component.css']
})
export class CartNavbarComponent implements OnInit {

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
