import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  map: mapboxgl.Map;
  style = 'https://www.mapbox.com/';
  lat = 13.0569951;
  lng = 80.20929129999999;
  message = 'Hello World!';

}