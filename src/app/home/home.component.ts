import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { capitalizationType, Dialogs, EventData, inputType, PromptOptions, PromptResult } from '@nativescript/core'
import { Application } from '@nativescript/core';
import * as appSettings from '@nativescript/core/application-settings';
import { ToastDuration, Toasty } from '@triniwiz/nativescript-toasty';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  
  
})
export class HomeComponent implements OnInit {

  public pageLoaded(args: EventData) {
    this.displayPromptDialog(); 
  }
  constructor() {

  }
  
  ngOnInit(): void {   
  }

  displayPromptDialog() {
    const nombreUsuario = appSettings.getString("nombreUsuario","anonimo"); 
    console.log(nombreUsuario);
    if(nombreUsuario=="anonimo"){
    
    let options: PromptOptions = {
        title: "Bienvenido",
        message: "Ingresa tu nombre",
        okButtonText: "Guardar",
        cancelable: true,
        inputType: inputType.text, 
        capitalizationType: capitalizationType.sentences 
    };

    Dialogs.prompt(options).then((result: PromptResult) => {
      appSettings.setString("nombreUsuario",result.text);
      console.log(result.text);
      new Toasty({ text: 'Bienvenido: ' +result.text}).setToastDuration(ToastDuration.SHORT).show();
    });}else{
      new Toasty({ text: 'Bienvenido: ' +nombreUsuario}).setToastDuration(ToastDuration.SHORT).show();
    }
    
    // << prompt-dialog-code/*/
    }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}

