import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { capitalizationType, Dialogs, EventData, inputType, PromptOptions, PromptResult } from '@nativescript/core'
import { Application } from '@nativescript/core';
import * as appSettings from '@nativescript/core/application-settings';
import { ToastDuration, Toasty } from '@triniwiz/nativescript-toasty';
import { Image } from "@nativescript/core";
import * as camera from "@nativescript/camera";
import * as SocialShare from "@nativescript/social-share";
import { ImageSource } from "@nativescript/core";
import { Device, Screen, isAndroid, isIOS } from "@nativescript/core";
import {
  connectionType,
  getConnectionType,
  startMonitoring,
  stopMonitoring
  } from "@nativescript/core/connectivity"; 
  
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  
  
})
export class HomeComponent implements OnInit {
  monitoreando: boolean;

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
  camara() {
    const options = {
      width: 300,
      height: 300,
      keepAspectRatio: false,
      saveToGallery: true
  };
  camera.requestPermissions().then(
    function success(){
    camera.takePicture(options).then((imageAsset) => {
        console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
        console.log("Fotografia guardada con éxito");
        ImageSource.fromAsset(imageAsset).then((imageSource) => {
          SocialShare.shareImage(imageSource, "Asunto: compartido desde mi app");
        }).catch((err) => {
        console.log("Error en la imagensource -> " + err.message);
    });
  }).catch((err)=> {
    console.log("Error -> " + err.message);
  })
  },
  function failure(){
    console.log("Permiso no aceptado");
  }
  );

}
dispositivo(){
  console.log("modelo", Device.model);
    console.log("tipo dispositivo", Device.deviceType);
    console.log("Sistema operativo", Device.os);
    console.log("versión sist operativo", Device.osVersion);
    console.log("Versión sdk", Device.sdkVersion);
    console.log("lenguaje", Device.language);
    console.log("fabricante", Device.manufacturer);
    console.log("código único de dispositivo", Device.uuid);
    console.log("altura en pixels normalizados", Screen.mainScreen.heightDIPs); // DIP
    console.log("altura pixels", Screen.mainScreen.heightPixels);
    console.log("escala pantalla", Screen.mainScreen.scale);
    console.log("ancho pixels normalizados", Screen.mainScreen.widthDIPs);
    console.log("ancho pixels",Screen.mainScreen.widthPixels);
}
monitorar(): void{

      const myConnectionType = getConnectionType();
      switch (myConnectionType) {
      case connectionType.none:
      console.log("Sin Conexion");
      break;
      case connectionType.wifi:
      console.log("WiFi");
      break;
      case connectionType.mobile:
      console.log("Mobile");
      break;
      case connectionType.ethernet:
      console.log("Ethernet"); // es decir, cableada
      break;
      case connectionType.bluetooth:
      console.log("Bluetooth");
      break;
      default:
      break;
      }
      this.monitoreando = !this.monitoreando;
      if (this.monitoreando) {
      startMonitoring((newConnectionType) => {
      switch (newConnectionType) {
      case connectionType.none:
      console.log("Cambió a sin conexión.");
      break;
      case connectionType.wifi:
      console.log("Cambió a WiFi.");
      break;
      case connectionType.mobile:
      console.log("Cambió a mobile.");
      break;
      case connectionType.ethernet:
      console.log("Cambió a ethernet.");
      break;
      case connectionType.bluetooth:
      console.log("Cambió a bluetooth.");
      break;
      default:
      break;
      }
      });
      } else {
      stopMonitoring();
      }
      } 
      
}

