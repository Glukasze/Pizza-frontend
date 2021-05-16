import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

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

  pizzasInCart: Pizza[] = [];

  constructor(private orderPageService: OrderPageService) { }

  ngOnInit(): void {

    this.orderPageService.savedPizza.subscribe(
      (pizza: Pizza) => {
        this.pizzasInCart.push(pizza);
      }
    );
  }

}
