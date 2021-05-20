import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-content',
  templateUrl: './paid-content.component.html',
  styleUrls: ['./paid-content.component.css']
})
export class PaidContentComponent implements OnInit {

  mockPizzas = [
    {
      name: 'Rozano',
      pictureId: 9,
      ingredients: 'salami, mushrooms, onion',
      price: 15
    },
    {
      name: 'Angela',
      pictureId: 1,
      ingredients: 'mushrooms',
      price: 12
    },
    {
      name: 'Bianca',
      pictureId: 2,
      ingredients: 'corn, ham, onion',
      price: 16
    },
    {
      name: 'Gabriela',
      pictureId: 4,
      ingredients: 'corn, jalapeno, onion, salami',
      price: 18
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
