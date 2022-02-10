import { Component, OnInit } from '@angular/core'
import { Application, GestureEventData, GridLayout } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

let contador = 0;

@Component({
  selector: 'Game',
  templateUrl: './game.component.html',
  
  
})


export class GameComponent implements OnInit {
  constructor() {
  
    // Use the component constructor to inject providers.
  }
  
  tap (){
    contador = contador + 1;
    if (contador==1){
      alert("Primera vez que presiona el logo");
    }else{
      
    alert("Has presionado el logo "+contador+" veces");
  }
}

  ngOnInit(): void {
    // Init your component properties here.
  }
  longpress(args: GestureEventData){
    const grid = <GridLayout>args.object;
    grid.rotate=0;
    grid.animate({
      rotate: 360,
      duration: 2000
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}










