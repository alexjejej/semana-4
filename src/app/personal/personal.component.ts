import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, Folder, ItemEventData, knownFolders, Label, path, View } from '@nativescript/core'
import { ListasService } from "../domain/listas.service"
import { RouterExtensions } from '@nativescript/angular';
import { ToastDuration, ToastPosition, Toasty } from '@triniwiz/nativescript-toasty';
import * as appSettings from '@nativescript/core/application-settings';
//import * as SocialShare from "nativescript-social-share";
import * as SocialShare from "@nativescript/social-share";
import { ImageSource } from "@nativescript/core";

@Component({
  selector: 'Personal',
  templateUrl: './personal.component.html',
  

})
export class PersonalComponent implements OnInit {
  
  resultados: Arrayresultados[];
  @ViewChild("layout") layout: ElementRef;
  constructor(public people: ListasService, private routerExtensions: RouterExtensions) {
  }
  
  ngOnInit(): void {

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

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  OnItemTap(args: ItemEventData){

    console.log("Index: "+args.index);
		const select = this.resultados[args.index];
    console.log("el cargo es: "+select.cargo);
    appSettings.setString('cargo',select.cargo);
    appSettings.setString('nombre',select.name);
    appSettings.setString('imagen',select.image);
    appSettings.setString('descripcion',select.descripcion);

    this.routerExtensions.navigate(['/usuarios'], {
      transition: {
        name: 'slideTop',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
  onLongPressImage(s){

    
    if (s.cargo=="Director"){
      ImageSource.fromUrl("https://www.unionjalisco.mx/wp-content/uploads/2021/05/villanueva_2-1024x683.jpg").then((image) => {
            SocialShare.shareImage(image);
            console.log(s.cargo);
        });
    }else if(s.cargo=="Aseo"){
      ImageSource.fromUrl("https://www.todoaseo.com/wp-content/uploads/2020/06/hogar-limpio.png").then((image) => {
            SocialShare.shareImage(image);
            console.log(s.cargo);
        });
    }else if(s.cargo=="Profesor"){
      ImageSource.fromUrl("https://cdn-icons-png.flaticon.com/512/257/257651.png").then((image) => {
            SocialShare.shareImage(image);
            console.log(s.cargo);
        });
    }else if(s.cargo=="Estudiante"){
      ImageSource.fromUrl("https://static.vecteezy.com/system/resources/previews/000/511/962/non_2x/vector-student-glyph-black-icon.jpg").then((image) => {
            SocialShare.shareImage(image);
            console.log(s.cargo);
        });
    }

  }

  buscarAhora(s:string){
  
    console.dir("buscarAhora: "+s);
    this.people.buscar(s).then((r: any) =>{
      console.log("resultados buscarAhora: "+ JSON.stringify(r));
      this.resultados = r;
    }, (e) => {
      console.log("Error en buscarAhora "+e);
      new Toasty({ text: 'Error en la búsqueda' }).setToastDuration(ToastDuration.SHORT).show();
    });
    
    const id = this.textFieldValue;
    if (id=="Director"){
      this.animacion();
    }else if(id=="Aseo"){
      this.animacion();
    }else if(id=="Profesor"){
      this.animacion();
    }else if(id=="Estudiante"){
      this.animacion();
    }else{
      this.cargonoencontrado();
    }
  }
  cargonoencontrado() {
    new Toasty({ text: 'Cargo no encontrado' })
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

animacion(){
  const layout = <View>this.layout.nativeElement;
    layout.animate({
    backgroundColor: new Color("green"),
    duration: 270,
    delay: 50
    }).then(() => layout.animate({
    backgroundColor: new Color("white"),
    duration: 270,
    delay: 50
  }));
}
  mostrarTodos(){
    this.animacion();
    this.people.mostrartodo().then((r: any) =>{
      console.log("resultados mostrar todo "+ JSON.stringify(r));
      this.resultados = r;
    }, (e) => {
      console.log("Error en mostrar todo "+e);
      new Toasty({ text: 'Error en la búsqueda' }).setToastDuration(ToastDuration.SHORT).show();
    });
  }
  mensajeinvalid(){
    new Toasty({ text: 'Ingresa un cargo antes de buscar' })
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

class Arrayresultados{
	constructor(public cargo: string, public name: string, public image: string, public descripcion: string){}
}



