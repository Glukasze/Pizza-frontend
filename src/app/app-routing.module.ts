import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderPageComponent} from './components/order-page/order-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
  {path: 'order-page', component: OrderPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
