import { Component, OnInit } from '@angular/core';
// import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // initMap(): void {
  //   const coordinates = {lat: 52.24437281019297, lng: 21.08537738826455};
  //   const map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: coordinates});
  // }

}
