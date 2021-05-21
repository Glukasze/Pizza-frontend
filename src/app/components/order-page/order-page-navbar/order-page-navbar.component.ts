import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-order-page-navbar',
  templateUrl: './order-page-navbar.component.html',
  styleUrls: ['./order-page-navbar.component.css']
})
export class OrderPageNavbarComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  loggedIn = this.authorizationService.loggedInBool;
  loggedUser = this.authorizationService.logedUserObj;


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
