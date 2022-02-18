import { Injectable } from "@angular/core";
import { Component } from "@angular/core";
import { getJSON } from "@nativescript/core/http";
const sqlite = require("nativescript-sqlite");

@Injectable()


export class ListasService {
	api: string ="https://d61c-2806-2f0-5480-19be-b862-af53-89d0-797a.ngrok.io"; 
	constructor() {
		this.getDb((db) => {
			console.dir(db);
			db.each("select * from favs",
			(err, fila) => console.log("fila: ", fila),
			(err, totales) => console.log("Filas totales: ", totales));

		}, () => console.log("error en getDB"));

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

	buscar(s: string){

		console.log("Recibi: "+s);
		return getJSON(this.api + "/get?q=" +s);
	}
	mostrartodo(){
		console.log(this.api + "/get?q=");
		return getJSON(this.api + "/get?q=");	
	}
	OnItemTap(args){
	

	}
	
}
class Person{
  
	constructor(public cargo: string, public name: string, public image: string, public descripcion: string){}
}

