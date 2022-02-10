import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import {ListasService} from './domain/listas.service'
import {ReviewsService} from './domain/reviews.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule as NgRxStoreModule } from "@ngrx/store";
import {
  intializeListasState,
  ListasEffects,
  ListasState,
  reducersListas
} from './domain/listas-state.service'

export interface AppState {
  listas: ListasState;
}

const reducers: ActionReducerMap<AppState> = {
  listas: reducersListas
};

const reducersInitialState = {
  listas: intializeListasState()
};

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule, 
    NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    EffectsModule.forRoot([ListasEffects])
],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ListasService,ReviewsService],


})
export class AppModule {}
