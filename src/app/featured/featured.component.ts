import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { ToastDuration, Toasty } from '@triniwiz/nativescript-toasty';
import { Lista, NuevaListaAction } from '../domain/listas-state.service';
const sqlite = require("nativescript-sqlite");

var datos: [any];

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
   
})
export class FeaturedComponent implements OnInit {
  
  private people:People[]=[];
  
  
  private database: any;
  constructor(
    private store: Store<AppState>
  ) {

    this.getDb((db) => {
			db.each("select * from favs",
			(err, fila) => this.people.push(fila),console.log(this.people),
			(err, totales) => console.log("Filas totales: ", totales));

		}, () => console.log("error en getDB"));
    
  }
  getpeople():People[]{
    return this.people;
  }

  mostrarbd(){
    console.log("Los datos son:");
    console.log(this.people);
  }
 /* this.getDb((db) => {
    db.all("select * from favs").then(rows => {
      this.people = [];
      for(var row in rows) {
          this.people.push({
              "id": rows[row][1],
              "name": rows[row][2]
          });
    }

  }, error => {
    console.log("SELECT ERROR", error);
}));*/
  
  getDb(fnOk, fnError) {
		return new sqlite("favoritosDB", (err, db) => {
			if (err) {
				console.error("Error al abrir db!", err);
			} else {
				console.log("Está la db abierta: ", db.isOpen() ? "si" : "no");
				db.execSQL("CREATE TABLE IF NOT EXISTS favs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)")
				.then((id) =>{
					this.database = db;
					fnOk(db);
				}, (error) => {
					console.log("CREATE TABLE ERROR", error);
					fnError(error);
				}
				);
			}
		});
	}
  fetch() {
    this.database.all("SELECT * FROM favs").then(rows => {
        this.people = [];
        for(var row in rows) {
            this.people.push({
                "id": rows[row][1],
                "name": rows[row][2]
            });
        }
    }, error => {
        console.log("SELECT ERROR", error);
    });
  }

  ngOnInit(): void {
    this.store.select(state => state.listas.sugerida)
        .subscribe(data => {
            const f = data;
            if(f != null)
                new Toasty({ text: 'Sugerimos leer: '+f.titulo }).setToastDuration(ToastDuration.SHORT).show();
        })

  }
  onItemTap(args): void {
    this.store.dispatch(new NuevaListaAction(new Lista(args.view.bindingContext)));
}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}

class People{
	constructor(public id: string, public name: string){}
}
class People2{
  constructor(public nombre: string){}
}



