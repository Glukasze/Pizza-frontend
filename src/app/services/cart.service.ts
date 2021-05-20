import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pizza} from '../models/pizza';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  savePizzaUrl = 'http://localhost:8080/save-pizza';
  addToOrderUrl = 'http://localhost:8080/add-to-order';
  deleteFromOrderUrl = 'http://localhost:8080/delete-from-order';
  deletePizzaUrl = 'http://localhost:8080/delete-pizza';
  getOrderUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) { }

  // postPizza(pizza: Pizza): Observable<Pizza> {
  //   return this.http.post<Pizza>(this.savePizzaUrl, pizza);
  // }

  deletePizza(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(this.deletePizzaUrl + '/' + id);
  }

  addToOrder(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.addToOrderUrl, pizza);
  }

  deleteFromOrder(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(this.deleteFromOrderUrl + '/' + id);
  }

  getOrder(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.getOrderUrl);
  }



}
