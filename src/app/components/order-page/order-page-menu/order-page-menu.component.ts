import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {MenuComponent} from '../../home-page/menu/menu.component';
import {MenuService} from '../../../services/menu.service';
import {OrderPageSidepanelComponent} from '../order-page-sidepanel/order-page-sidepanel.component';
import {OrderPageService} from '../../../services/order-page.service';

@Component({
  selector: 'app-order-page-menu',
  templateUrl: './order-page-menu.component.html',
  styleUrls: ['./order-page-menu.component.css']
})
export class OrderPageMenuComponent implements OnInit {

  pizzas: Pizza[] = [];
  row1: Pizza[] = [];
  row2: Pizza[] = [];
  row3: Pizza[] = [];
  row4: Pizza[] = [];

  productsPerColumn = 3;

  activePizza: Pizza;


  constructor(private menuService: MenuService,
              private orderPageService: OrderPageService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenu()
      .subscribe(menu => {
        this.pizzas = menu;
        if (this.pizzas.length > 0) {
          this.sortMenu();
        }
      });
  }

  sortMenu(): void {
    for (let i = 0; i < this.pizzas.length; i++) {
      if (i < this.productsPerColumn) {
        this.row1.push(this.pizzas[i]);
      } else if (i < (this.productsPerColumn * 2)) {
        this.row2.push(this.pizzas[i]);
      }
      else if (i < (this.productsPerColumn * 3)) {
        this.row3.push(this.pizzas[i]);
      }
      else if (i < (this.productsPerColumn * 4)) {
        this.row4.push(this.pizzas[i]);
      }
    }
  }

  addPizza(pizza: Pizza): void {
    this.orderPageService.sendSelectedPizza(pizza);
  }

}
