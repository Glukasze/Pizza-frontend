import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  userExists = false;

  tempLogin;
  tempPassword;
  tempEmail;

  @ViewChild('registerModalClose')
  closeModal: ElementRef;


  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.getCredentials();
    if (this.authorizationService.checkUserRegister(this.tempLogin, this.tempPassword)) {
      this.userExists = true;
    } else {
      this.authorizationService.saveUser(this.tempLogin, this.tempPassword, this.tempEmail);
      this.hideModal();
    }
    this.clearCredentials();
  }


  public hideModal(): void {
    this.closeModal.nativeElement.click();
  }

  getCredentials(): void {
    this.tempLogin = (<HTMLInputElement> document.getElementById('registerLoginInput')).value;
    this.tempPassword = (<HTMLInputElement> document.getElementById('registerPasswordInput')).value;
    this.tempEmail = (<HTMLInputElement> document.getElementById('registerEmailInput')).value;
  }

  clearCredentials(): void {
    this.tempLogin = (<HTMLInputElement> document.getElementById('registerLoginInput')).value = '';
    this.tempPassword = (<HTMLInputElement> document.getElementById('registerPasswordInput')).value = '';
    this.tempEmail = (<HTMLInputElement> document.getElementById('registerEmailInput')).value = '';
  }

}
