import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { registerElement } from '@nativescript/angular';
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';
registerElement('PullToRefresh', () => PullToRefresh);
import { AppModule } from './app/app.module';
import { firebase } from "@nativescript/firebase";
import { launchEvent, LaunchEventData } from '@nativescript/core/application';

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

/*
firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
  () => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);*/