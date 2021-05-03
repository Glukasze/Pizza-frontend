import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderPageService {

  selectedPizza = new Subject();
  savedPizza = new Subject();

  constructor() { }

  sendSelectedPizza(pizza): void {
    this.selectedPizza.next(pizza);
  }

  sendSavedPizza(pizza): void {
    this.savedPizza.next(pizza);
  }
}
