import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pizzas: Pizza[] = [];
  row1: Pizza[] = [];
  row2: Pizza[] = [];

  productsPerColumn = 6;

  constructor(private menuService: MenuService) { }

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
      } else {
        this.row2.push(this.pizzas[i]);
      }
    }
  }

}
