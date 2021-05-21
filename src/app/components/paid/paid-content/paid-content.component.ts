import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {CheckoutService} from '../../../services/checkout.service';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-paid-content',
  templateUrl: './paid-content.component.html',
  styleUrls: ['./paid-content.component.css']
})
export class PaidContentComponent implements OnInit {


  order: Pizza[];
  total = 0;
  street: string;
  city: string;

  timeStamp = new Date();


  constructor(private checkoutService: CheckoutService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    this.cartService.getOrder().subscribe(
      data => {
        this.order = data;
        this.calculateTotal();
        this.getStreet();
        this.getCity();
        this.clearOrder();
      }
    );
  }

  calculateTotal(): void {
    for (const pizza of this.order) {
      this.total += pizza.price;
    }
  }

  getStreet(): void {
    this.checkoutService.getStreet().subscribe(
      data => {
        this.street = data;
      }
    );
  }

  getCity(): void {
    this.checkoutService.getCity().subscribe(
      data => {
        this.city = data;
      }
    );
  }

  clearOrder(): void {
    for (const pizza of this.order) {
      this.cartService.deleteFromOrder(pizza.id).subscribe();
    }
  }

}
