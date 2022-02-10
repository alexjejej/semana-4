import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
const _isAndroid = !!Application.android;
const _isIOS = !!Application.ios;
let contador = 0;
@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
  
})
export class BrowseComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }
  tap(){

    if (_isAndroid){
      alert("Tu dispositivo es android");
    }else{
      alert("Tu dispositivo es IOS");
    }
    
  
}

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
