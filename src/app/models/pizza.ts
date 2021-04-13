import {Ingredient} from './ingredient';

export interface Pizza {
  id: number;
  name: string;
  pictureId: string;
  cheese: boolean;
  sauce: Ingredient;
  toppings: Ingredient[];
  toppingsString: string;
}
