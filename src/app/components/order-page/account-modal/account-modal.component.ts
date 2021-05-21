import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.css']
})
export class AccountModalComponent implements OnInit {

  loggedUser;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  setLoggedUser(): void {
    this.authorizationService.loggedUser.subscribe(
      data => {
        this.loggedUser = data;
      }
    );
  }


}
