import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  loggedIn = false;
  failedAttempt = false;

  tempLogin;
  tempPassword;

  @ViewChild('loginModalClose')
  loginModalClose: ElementRef;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.authorize();
  }

  hideModal(): void {
    this.loginModalClose.nativeElement.click();
  }

  authorize(): void {
    this.authorizationService.loggedIn.subscribe(
      (data: boolean) => {
        this.loggedIn = data;
      }
    );
  }

  getCredentials(): void {
    this.tempLogin = (<HTMLInputElement> document.getElementById('loginInput')).value;
    this.tempPassword = (<HTMLInputElement> document.getElementById('passwordInput')).value;
  }

  clearCredentials(): void {
    this.tempLogin = (<HTMLInputElement> document.getElementById('loginInput')).value = '';
    this.tempPassword = (<HTMLInputElement> document.getElementById('passwordInput')).value = '';
  }

  logIn(): void {
    this.getCredentials();
    if (this.authorizationService.checkUserLogin(this.tempLogin, this.tempPassword)) {
      this.authorizationService.logIn();
      this.hideModal();
    } else {
      this.failedAttempt = true;
    }
    this.clearCredentials();
  }

  logOut(): void {
    this.authorizationService.logOut();
  }

}
