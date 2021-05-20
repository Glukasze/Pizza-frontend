import {Ingredient} from './ingredient';

export interface Pizza {
  id: number;
  pizzaName: string;
  pictureId: number;
  cheese: boolean;
  sauce: Ingredient;
  toppings: Ingredient[];
  toppingsString: string;
  price: number;
}
