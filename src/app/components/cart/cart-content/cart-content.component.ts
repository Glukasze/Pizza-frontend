import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  order: Pizza[];
  totalPrice: number;


  constructor(private orderPageService: OrderPageService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    this.cartService.getOrder().subscribe(
      (data: Pizza[]) => {
        this.order = data;
        this.calculateTotal();
      }
    );
  }

  calculateTotal(): void {
    this.totalPrice = 0;
    for (const pizza of this.order) {
      this.totalPrice += pizza.price;
    }
  }

  removeFromOrder(pizza: Pizza): void {
    this.cartService.deleteFromOrder(pizza.id).subscribe();
    this.order.forEach( (item, index) => {
      if (item === pizza) {
        this.order.splice(index, 1);
      }
    });
    this.calculateTotal();
  }

}
