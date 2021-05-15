import {Component, EventEmitter, OnInit} from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';

@Component({
  selector: 'app-order-page-sidepanel',
  templateUrl: './order-page-sidepanel.component.html',
  styleUrls: ['./order-page-sidepanel.component.css']
})
export class OrderPageSidepanelComponent implements OnInit {

  selectedPizzas: Pizza[] = [];
  total = 0;

  constructor(private orderPageService: OrderPageService) { }

  ngOnInit(): void {
    this.orderPageService.savedPizza.subscribe(
      (pizza: Pizza) => {
        console.log(pizza.toppings);
        this.selectedPizzas.push(pizza);
        this.calculateTotal();
      }
    );
  }

  calculateTotal(): void {
    this.total = this.selectedPizzas.reduce((accumulator, current) => {
      accumulator += current.price;
      return accumulator;
    }, 0);
  }

  removePizza(pizza: Pizza): void{
    this.selectedPizzas.forEach( (item, index) => {
      if (item === pizza) {
        this.selectedPizzas.splice(index, 1);
      }
    });
    this.calculateTotal();
  }

}
