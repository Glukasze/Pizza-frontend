import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pizza} from '../models/pizza';
import {Observable} from 'rxjs';
import {Test} from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  saveUrl = 'http://localhost:8080/save-pizza';

  testUrl = 'http://localhost:8080/test';
  getTestUrl = 'http://localhost:8080/test';

  testObject: Test;


  constructor(private http: HttpClient) { }

  postPizza(pizza: Pizza): void {
    console.log(JSON.stringify(pizza));
    this.http.post(this.saveUrl, JSON.stringify(pizza)).subscribe(data => console.log(data));
  }

  getTest(): Observable<Test> {
    return this.http.get<Test>(this.testUrl);
  }

  postTest(test: Test): void {
    const obj = {
      name: 'dupsko',
      age: 1
    };
    this.http.post(this.testUrl, 'testing');
  }

}
