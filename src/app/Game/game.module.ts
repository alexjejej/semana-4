import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { GameRoutingModule } from './game-routing.module'
import { GameComponent } from './game.component'

@NgModule({
  imports: [NativeScriptCommonModule, GameRoutingModule],
  declarations: [GameComponent],
  schemas: [NO_ERRORS_SCHEMA],
  
})
export class GameModule {
  
}



