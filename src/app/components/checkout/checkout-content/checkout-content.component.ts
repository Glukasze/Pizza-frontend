import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Pizza} from '../../../models/pizza';
import {CheckoutService} from '../../../services/checkout.service';

@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.css']
})
export class CheckoutContentComponent implements OnInit {

  constructor(private cartService: CartService,
              private checkoutService: CheckoutService) { }

  street: string;
  city: string;
  zip: string;

  order: Pizza[] = [];
  total = 0;

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    this.cartService.getOrder().subscribe(
      data => {
        this.order = data;
        this.calculateTotal();
      }
    );
  }

  calculateTotal(): void {
    this.total = 0;
    for (const pizza of this.order) {
      this.total += pizza.price;
    }
    this.total += 5;
  }

  getAddress(): void {
    this.street = (<HTMLInputElement> document.getElementById('street')).value;
    this.city = (<HTMLInputElement> document.getElementById('city')).value;
    this.zip = (<HTMLInputElement> document.getElementById('zip')).value;

    this.checkoutService.addStreet(this.street).subscribe();
    this.checkoutService.addCity(this.zip + ' ' + this.city).subscribe();

  }

}
