import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
const _isAndroid = !!Application.android;
const _isIOS = !!Application.ios;

@Component({
  selector: 'Informacion',
  templateUrl: './informacion.component.html',
})
export class InformacionComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
  tap(){

    if (_isAndroid){
      alert("Tu dispositivo es android");
    }else{
      alert("Tu dispositivo es IOS");
    }
    
  
}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
