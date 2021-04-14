import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 52.244091542333145;
  lng = 21.0848174024474;
  zoom = 17;

  constructor() { }

  ngOnInit(): void {
  }

}
