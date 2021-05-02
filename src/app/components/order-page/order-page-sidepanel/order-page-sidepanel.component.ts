import {Component, EventEmitter, OnInit} from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';

@Component({
  selector: 'app-order-page-sidepanel',
  templateUrl: './order-page-sidepanel.component.html',
  styleUrls: ['./order-page-sidepanel.component.css']
})
export class OrderPageSidepanelComponent implements OnInit {

  selectedPizzas: Pizza[];
  total = 0;

  constructor(private orderPageService: OrderPageService) { }

  ngOnInit(): void {
    this.orderPageService.sendMessage.subscribe(
      (pizzas: Pizza[]) => {
        this.selectedPizzas = pizzas;
        this.calculateTotal();
      }
    );
  }

  calculateTotal(): void {
    this.total = 0;
    for (const pizza of this.selectedPizzas) {
      // this.total += pizza
    }
    // this.total = 0;
    // if (this.selectedPizzas.length > 0) {
    //   for (const pizza of this.selectedPizzas) {
    //     this.total += 10;
    //     for (const ingredient of pizza.toppings) {
    //       this.total += ingredient.price;
    //     }
    //   }
    // }
  }

}
