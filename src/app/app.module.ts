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
import { NavbarComponent } from './components/order-page/navbar/navbar.component';
import { OrderPageMenuComponent } from './components/order-page/order-page-menu/order-page-menu.component';
import { OrderPageSidepanelComponent } from './components/order-page/order-page-sidepanel/order-page-sidepanel.component';
import { OrderPageModalComponent } from './components/order-page/order-page-modal/order-page-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CartMenuComponent } from './components/cart/cart-menu/cart-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomePageComponent,
    OrderPageComponent,
    NavbarComponent,
    OrderPageMenuComponent,
    OrderPageSidepanelComponent,
    OrderPageModalComponent,
    CartComponent,
    CartMenuComponent
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
