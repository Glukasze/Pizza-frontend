import {Ingredient} from './ingredient';

export interface Pizza {
  id: number;
  pizzaName: string;
  pictureId: string;
  cheese: boolean;
  sauce: Ingredient;
  toppings: Ingredient[];
  toppingsString: string;
  price: number;
}
