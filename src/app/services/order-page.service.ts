import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderPageService {

  sendMessage = new Subject();

  constructor() { }

  communicateMessage(msg): void {
    this.sendMessage.next(msg);
  }
}
