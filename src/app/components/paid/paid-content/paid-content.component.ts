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

  mockPizzas = [
    {
      name: 'Rozano',
      pictureId: 9,
      ingredients: 'salami, mushrooms, onion',
      price: 15
    },
    {
      name: 'Angela',
      pictureId: 1,
      ingredients: 'mushrooms',
      price: 12
    },
    {
      name: 'Bianca',
      pictureId: 2,
      ingredients: 'corn, ham, onion',
      price: 16
    },
    {
      name: 'Gabriela',
      pictureId: 4,
      ingredients: 'corn, jalapeno, onion, salami',
      price: 18
    }
  ];

  order: Pizza[];
  total: number = 0;
  street: string;
  city: string;


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
