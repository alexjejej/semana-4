import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, EventData, Label, Page } from '@nativescript/core'
import * as appSettings from '@nativescript/core/application-settings';
import { RouterExtensions } from '@nativescript/angular';
import { FeaturedComponent } from '../featured/featured.component';



@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  name: Label;

  constructor(private routerExtensions: RouterExtensions) {

    // Use the component constructor to inject providers.
  }
  
  
   pageLoaded(args: EventData) {
    var page = <Page>args.object;
    this.name = <Label>page.getViewById("name");
    this.name.text = "Que tal, "+appSettings.getString("nombreUsuario");
}
  btn(){
    this.routerExtensions.navigate(['/edicion'], {
      transition: {
        name: 'slideTop',
      },
    })
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
  cambiarnombre(){
    const nombreUsuario = appSettings.getString("nombreUsuario");
  }
}
