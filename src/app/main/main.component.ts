import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initializeMap();
  }
  initializeMap() {
    mapboxgl.accessToken = environment.mapboxAcessToken;
    const map = new mapboxgl.Map({
      attributionControl: false,
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    map.addControl(new mapboxgl.AttributionControl({ compact: true }));
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
      })
    );
    map.addControl(new mapboxgl.NavigationControl());
  }
}
