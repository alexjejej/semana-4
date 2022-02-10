import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, EventData, Image, Label, Page } from '@nativescript/core'
import { ReviewsService } from "../domain/reviews.service"
import { RouterExtensions } from '@nativescript/angular';
import { ToastDuration, ToastPosition, Toasty } from "@triniwiz/nativescript-toasty"
import * as appSettings from '@nativescript/core/application-settings';
const sqlite = require("nativescript-sqlite");



@Component({
  selector: 'Usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  name: Label;
  descripcion: Label;
  cargo: Label;
  constructor(public review: ReviewsService, private routerExtensions: RouterExtensions) {
    this.getDb((db) => {
			console.dir(db);
			db.each("select * from favs",
			(err, fila) => console.log("fila: ", fila),
			(err, totales) => console.log("Filas totales: ", totales));

		}, () => console.log("error en getDB"));
  }

  public pageLoaded(args: EventData) {
    this.review.newreview();
    var page = <Page>args.object;
    this.name = <Label>page.getViewById("name");
    this.name.text = appSettings.getString('nombre');
    this.cargo = <Label>page.getViewById("cargo");
    this.cargo.text ="Cargo: "+appSettings.getString('cargo');
    this.descripcion = <Label>page.getViewById("descripcion");
    this.descripcion.text ="Descripción: "+appSettings.getString('descripcion');

    const img = page.getViewById("image") as Image;
    img.src = appSettings.getString('imagen');
}

  ngOnInit(): void {
    // Init your component properties here.
  }

  like(){
    new Toasty({ text: 'Te agrada esta persona' })
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#8fce00')
  .show();
    
  }
  getDb(fnOk, fnError) {
		return new sqlite("favoritosDB", (err, db) => {
			if (err) {
				console.error("Error al abrir db!", err);
			} else {
				console.log("Está la db abierta: ", db.isOpen() ? "si" : "no");
				db.execSQL("CREATE TABLE IF NOT EXISTS favs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)")
				.then((id) =>{
					console.log("CREATE TABLE OK");
					fnOk(db);
				}, (error) => {
					console.log("CREATE TABLE ERROR", error);
					fnError(error);
				}
				);
			}
		});
	}
  favoritos(){
    this.getDb((db)=>{
			db.execSQL("insert into favs (texto) values (?)", [appSettings.getString('nombre')],
			(err, id) => this.exito(id));
		}, ()=> console.log("error en getDB"));
  }
  exito(id){
    new Toasty({ text: 'Guardado en favoritos, id:'+id})
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#8fce00')
  .show();
  }
  dislike(){
    new Toasty({ text: 'Te desagrada esta persona' })
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#ff9999')
  .show();
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
  onPull(args){
    this.review.newreview();
    const  pullRefresh = args.object; 
    setTimeout(() => {
    pullRefresh.refreshing = false;
     }, 1000);
     console.log("recargado con exito");
  }
  
}
