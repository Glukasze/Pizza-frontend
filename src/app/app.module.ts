import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/home-page/menu/menu.component';
import { HomeComponent } from './components/home-page/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './components/home-page/about/about.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {OrderPageComponent} from './components/order-page/order-page.component';
import { OrderPageNavbarComponent } from './components/order-page/order-page-navbar/order-page-navbar.component';
import { OrderPageMenuComponent } from './components/order-page/order-page-menu/order-page-menu.component';
import { OrderPageSidepanelComponent } from './components/order-page/order-page-sidepanel/order-page-sidepanel.component';
import { OrderPageModalComponent } from './components/order-page/order-page-modal/order-page-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CartContentComponent } from './components/cart/cart-content/cart-content.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutContentComponent } from './components/checkout/checkout-content/checkout-content.component';
import { PaidComponent } from './components/paid/paid.component';
import { PaidContentComponent } from './components/paid/paid-content/paid-content.component';
import { LoginModalComponent } from './components/order-page/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/order-page/register-modal/register-modal.component';
import { AccountModalComponent } from './components/order-page/account-modal/account-modal.component';
import { CartNavbarComponent } from './components/cart/cart-navbar/cart-navbar.component';
import { CheckoutNavbarComponent } from './components/checkout/checkout-navbar/checkout-navbar.component';
import { PaidNavbarComponent } from './components/paid/paid-navbar/paid-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomePageComponent,
    OrderPageComponent,
    OrderPageNavbarComponent,
    OrderPageMenuComponent,
    OrderPageSidepanelComponent,
    OrderPageModalComponent,
    CartComponent,
    CartContentComponent,
    CheckoutComponent,
    CheckoutContentComponent,
    PaidComponent,
    PaidContentComponent,
    LoginModalComponent,
    RegisterModalComponent,
    AccountModalComponent,
    CartNavbarComponent,
    CheckoutNavbarComponent,
    PaidNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCAmiLoVVpd8u_TcBGHGQRV0FpyCIU8reo'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
