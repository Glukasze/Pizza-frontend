import {Component, EventEmitter, OnInit} from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-order-page-sidepanel',
  templateUrl: './order-page-sidepanel.component.html',
  styleUrls: ['./order-page-sidepanel.component.css']
})
export class OrderPageSidepanelComponent implements OnInit {

  order: Pizza[] = [];
  savedPizzas: Pizza[] = [];
  savedTotal = 0;
  orderTotal = 0;
  total = 0;
  temporaryOrder: Pizza[] = [];

  constructor(private orderPageService: OrderPageService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getOrder().subscribe(
      (data: Pizza[]) => {
        this.order = data;
        this.calculateTotal();
      }
    );

    this.orderPageService.savedPizza.subscribe(
      (pizza: Pizza) => {
        this.savedPizzas.push(pizza);
        this.calculateTotal();
      }
    );



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
    this.savedTotal = this.savedPizzas.reduce((accumulator, current) => {
      accumulator += current.price;
      return accumulator;
    }, 0);

    this.orderTotal = this.order.reduce((accumulator, current) => {
      accumulator += current.price;
      return accumulator;
    }, 0);

    this.total = this.savedTotal + this.orderTotal;

  }

  removePizza(pizza: Pizza): void {
    this.savedPizzas.forEach( (item, index) => {
      if (item === pizza) {
        this.savedPizzas.splice(index, 1);
      }
    });

    this.cartService.deleteFromOrder(pizza.id).subscribe();

    this.order.forEach( (item, index) => {
      if (item === pizza) {
        this.order.splice(index, 1);
      }
    });


    this.calculateTotal();
  }

}
