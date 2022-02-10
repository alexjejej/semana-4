import { Injectable } from "@angular/core";
import { Component } from "@angular/core";
let count=-1;
@Injectable()

export class ReviewsService {
	review: Review[];
	constructor(){
		this.review = [{id: 'x',
		imageR: 'res://user1',
		nameR: 'Manuel T.',
		review: 'Buena persona',
}]
}

	buscar(){
		return this.review;
	}
	newreview(){

	if(global.cargoU=="Director"){
		count=count+1;
		console.log("contador:"+count);
		if (count==1){
			console.log
			this.review = [
				{
				id: 'director',
				imageR: 'res://user1',
				nameR: 'Roberto T.',
				review: 'Buen director pero gruñón',
				}];
				console.log("11111");
		}if (count==2){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user2',
				nameR: 'Martin Y.',
				review: 'Me gusta el trabajo que hace',
				}];
				console.log("22222");

		}if (count==3){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user3',
				nameR: 'Luis Q.',
				review: 'No me gusta sus corbatas',
				}];
				console.log("33333");

				count = 0;
		}
	}
	if(global.cargoU=="Estudiante"){
		count=count+1;
		if (count==1){
			console.log
			this.review = [
				{
				id: 'x',
				imageR: 'res://user1',
				nameR: 'Laura G.',
				review: 'Excelente estudiante',
				}];
		}if (count==2){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user2',
				nameR: 'Fabian l.',
				review: 'Le echa ganas el compañero',
				}];
		}if (count==3){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user3',
				nameR: 'Sergio F.',
				review: 'Participa mucho en clase',
				}];
				count = 0;
		}
	}
	if(global.cargoU=="Servicio de limpieza"){
		count=count+1;
		if (count==1){
			console.log
			this.review = [
				{
				id: 'x',
				imageR: 'res://user1',
				nameR: 'Laura G.',
				review: 'Limpia bien los pisos',
				}];
		}if (count==2){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user2',
				nameR: 'Fabian l.',
				review: 'Muy platicador el señor',
				}];
		}if (count==3){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user3',
				nameR: 'Sergio F.',
				review: 'No la conozco',
				}];
				count = 0;
		}
	}
	if(global.cargoU=="Profesora"){
		count=count+1;
		if (count==1){
			console.log
			this.review = [
				{
				id: 'x',
				imageR: 'res://user1',
				nameR: 'Laura G.',
				review: 'No enseña',
				}];
		}if (count==2){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user2',
				nameR: 'Fabian l.',
				review: 'Maestra estricta',
				}];
		}if (count==3){
			this.review = [
				{
				id: 'director',
				imageR: 'res://user3',
				nameR: 'Sergio F.',
				review: 'Me regaña mucho',
				}];
				count = 0;
		}
	}
		return this.review;
	}

	
}
class Review{
	constructor(public id:string, public imageR: string, public nameR: string, public review: string){}
}

