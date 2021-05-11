import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';
import {Ingredient} from '../../../models/ingredient';
import {MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-order-page-modal',
  templateUrl: './order-page-modal.component.html',
  styleUrls: ['./order-page-modal.component.css']
})
export class OrderPageModalComponent implements OnInit {

  selectedPizza: Pizza;
  savedPizza: Pizza;
  savedPizzaTotal;
  savedPizzaIngredients: Ingredient[] = [];

  allIngredients: Ingredient[] = [];




  constructor(private orderPageService: OrderPageService,
              private menuService: MenuService) { }

  ngOnInit(): void {

    this.menuService.getIngredients().subscribe(
      ingredients => {
        this.allIngredients = ingredients;
      }
    );

    this.orderPageService.selectedPizza.subscribe(
      (pizza: Pizza) => {
        this.selectedPizza = pizza;
        this.savedPizza = pizza;
        this.calculateSavedPizzaTotal();
        this.setSavedPizzaIngredients();
      }
    );
  }

  addPizza(): void {
    this.orderPageService.sendSavedPizza(this.savedPizza);
  }

  calculateSavedPizzaTotal(): void {
    this.savedPizzaTotal = 10;
    for (const ingredient of this.savedPizza.toppings) {
      this.savedPizzaTotal += ingredient.price;
    }
  }

  setSavedPizzaIngredients(): void {
    this.savedPizzaIngredients = [];
    for (const ingredient of this.savedPizza.toppings) {
      this.savedPizzaIngredients.push(ingredient);
    }
  }

  ingredientSaved(ingredient: Ingredient): boolean {
    for (const item of this.savedPizzaIngredients) {
      if (item.name === ingredient.name) {
        return true;
      }
    }
    return false;
  }

}
