import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  addStreetUrl = 'http://localhost:8080/add-street';
  addCityUrl = 'http://localhost:8080/add-city';
  getStreetUrl = 'http://localhost:8080/get-street';
  getCityUrl = 'http://localhost:8080/get-city';


  addStreet(street: string): Observable<string> {
    return this.http.post<string>(this.addStreetUrl, street);
  }

  addCity(city: string): Observable<string> {
    return this.http.post<string>(this.addCityUrl, city);
  }

  getStreet(): Observable<string> {
    return this.http.get<string>(this.getStreetUrl);
  }

  getCity(): Observable<string> {
    return this.http.get<string>(this.getCityUrl);
  }
}
