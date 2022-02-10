import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { UsuariosComponent } from './usuarios.component'

const routes: Routes = [{ path: '', component: UsuariosComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class UsuariosRoutingModule {}
