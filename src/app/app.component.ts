import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { registerElement, RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application } from '@nativescript/core'
import { firebase } from '@nativescript/firebase'
import { ToastDuration, Toasty } from '@triniwiz/nativescript-toasty'


@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase

  
  constructor(private router: Router, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {

    firebase.init({
      onMessageReceivedCallback: (message: firebase.Message) => {
        console.log(`titulo: ${message.title}`);
        console.log(`cuerpo: ${message.body}`);
        console.log(`data': ${JSON.stringify(message.data)}`);
        new Toasty({ text: 'Notificacion: ' +message.title}).setToastDuration(ToastDuration.SHORT).show();
      },
      onPushTokenReceivedCallback: (token) => console.log(`Firebase push token: ` + token)
    }).then(
      ()=> console.log(`firebase.init done`),
      (error) => console.log(`firebase.init error: ${error}`)
    );

    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))
    
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
}
