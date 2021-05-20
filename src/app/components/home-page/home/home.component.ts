import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  about = document.getElementById('about-main-div');

  constructor() { }

  ngOnInit(): void {
  }

  scroll(targetId: string): void {
    const target = document.getElementById(targetId);
    target.scrollIntoView();
  }

}
