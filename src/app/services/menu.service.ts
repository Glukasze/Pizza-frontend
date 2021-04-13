import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizza} from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl = 'http://localhost:8080/menu';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.menuUrl);
  }
}
