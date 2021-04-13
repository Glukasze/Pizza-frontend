import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../models/pizza';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenu()
      .subscribe(menu => {
        this.pizzas = menu;
        console.log(menu);
      });
  }

}
