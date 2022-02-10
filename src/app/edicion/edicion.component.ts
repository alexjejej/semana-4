import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, ItemEventData, EventData, Image, Label, Page, TextField, View } from '@nativescript/core'
import * as appSettings from '@nativescript/core/application-settings';
import { ToastDuration, ToastPosition, Toasty } from '@triniwiz/nativescript-toasty';
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'Edicion',
  templateUrl: './edicion.component.html',
})


export class EdicionComponent implements OnInit {
  @ViewChild("layout") layout: ElementRef;

  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }
  nombre(EventData): void{
    console.log('Valor inicial: '+ this.nombre);
    console.log('Valor de nuestro evento: '+ EventData.target.value);
    this.nombre = EventData.target.value;
    console.log('Nuevo valor: '+ this.nombre);

  }
  

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
  textFieldValue: string ="";
    @Output() search: EventEmitter<string> = new EventEmitter();
  onButtonTap(s: string){
    console.log(this.textFieldValue);
    if (this.textFieldValue.length > 2 ){
        this.search.emit(this.textFieldValue);
        this.buscarAhora(this.textFieldValue);
    }
  }
  buscarAhora(s:string){
    console.dir("nuevo nombre: "+s);
    appSettings.setString("nombreUsuario",s);
    new Toasty({ text: 'Se guardó con éxito tu nombre, '+s })
    .setToastDuration(ToastDuration.SHORT)
    .setToastPosition(ToastPosition.BOTTOM)
    .setTextColor(new Color('white'))
    .setBackgroundColor('#ff9999')
    .show();
    this.routerExtensions.navigate(['/settings'], {
      transition: {
        name: 'slideTop',
      },
    })
  }

  mensajeinvalid(){
    new Toasty({ text: 'Ingresa un nombre valido' })
    .setToastDuration(ToastDuration.SHORT)
    .setToastPosition(ToastPosition.BOTTOM)
    .setTextColor(new Color('white'))
    .setBackgroundColor('#ff9999')
    .show();
  const layout = <View>this.layout.nativeElement;
  layout.animate({
    backgroundColor: new Color("red"),
    duration: 300,
    delay: 50
  }).then(() => layout.animate({
    backgroundColor: new Color("white"),
    duration: 300,
    delay: 50
  }));
  }

  
}
