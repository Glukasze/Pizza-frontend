import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../../services/checkout.service';
import {Pizza} from '../../models/pizza';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

}
