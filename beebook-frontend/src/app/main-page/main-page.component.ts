import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = {lat:0, lng:0};
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  };

  constructor() {}

  ngOnInit(){
    this.center = {
      lat: 48.210620182261614,
      lng: 16.382568366027126
    };
  }
}
