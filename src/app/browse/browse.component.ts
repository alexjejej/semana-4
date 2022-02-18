import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { registerElement } from '@nativescript/angular';

let contador = 0;

registerElement("MapView", ()=> require("nativescript-google-maps-sdk").MapView);
var gmaps = require("nativescript-google-maps-sdk");
@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
  
})
export class BrowseComponent implements OnInit {
  @ViewChild("MapView") mapView: ElementRef;
  constructor() {
    // Use the component constructor to inject providers.
  }

onMapReady(args){
  console.log("Map ready");
  var mapView = args.object;
  var marker = new gmaps.Marker();
  marker.position = gmaps.Position.positionFromLatLng(20.567753, -103.228499);
  marker.title = "Poderoso CUT";
  marker.snippet = "Universidad de Guadalajara";
  marker.userData = {index:1};
  mapView.addMarker(marker);

}

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
