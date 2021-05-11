import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizza} from '../models/pizza';
import {Ingredient} from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl = 'http://localhost:8080/menu';
  ingredientsUrl = 'http://localhost:8080/ingredients';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.menuUrl);
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl);
  }
}
