import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza';
import {OrderPageService} from '../../../services/order-page.service';
import {Ingredient} from '../../../models/ingredient';
import {MenuService} from '../../../services/menu.service';
import {CartService} from '../../../services/cart.service';

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
              private menuService: MenuService,
              private cartService: CartService) { }

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
    // this.cartService.postPizza(this.savedPizza).subscribe();
    this.cartService.addToOrder(this.savedPizza).subscribe();
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

  setSavedPizzaToppingsString(): void {
    this.savedPizza.toppingsString = '';
    for (let i = 0; i < this.savedPizza.toppings.length; i++) {
      this.savedPizza.toppingsString += this.savedPizza.toppings[i].name;
      if (i < this.savedPizza.toppings.length - 1) {
        this.savedPizza.toppingsString += ', ';
      }
    }
  }

  setCustom(): void {
    this.savedPizza.toppings = this.savedPizzaIngredients;
    this.calculateSavedPizzaTotal();
    this.savedPizza.price = this.savedPizzaTotal;
    this.setSavedPizzaToppingsString();

  }

  toggleSelectedIngredient(ingredient: Ingredient): void {
    if (this.selectedPizza.pizzaName === 'Custom') {
      const ingredientIndex = this.savedPizzaIngredients.indexOf(ingredient);
      if (ingredientIndex !== -1) {
        this.savedPizzaIngredients.splice(ingredientIndex, 1);
      } else {
        this.savedPizzaIngredients.push(ingredient);
      }
      this.setCustom();
    }
  }

}
