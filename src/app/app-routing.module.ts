import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderPageComponent} from './components/order-page/order-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {PaidComponent} from './components/paid/paid.component';

const routes: Routes = [
  {path: 'order-page', component: OrderPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'paid', component: PaidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
