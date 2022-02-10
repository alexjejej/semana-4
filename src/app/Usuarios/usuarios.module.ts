import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { UsuariosRoutingModule } from './usuarios-routing.module'
import { UsuariosComponent } from './usuarios.component'

@NgModule({
  imports: [NativeScriptCommonModule, UsuariosRoutingModule],
  declarations: [UsuariosComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UsuariosModule {}
