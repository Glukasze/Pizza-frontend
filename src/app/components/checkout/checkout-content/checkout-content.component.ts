import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Pizza} from '../../../models/pizza';

@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.css']
})
export class CheckoutContentComponent implements OnInit {

  constructor(private cartService: CartService) { }

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

}
