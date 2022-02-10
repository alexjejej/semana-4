import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { InformacionRoutingModule } from './informacion-routing.module'
import { InformacionComponent } from './informacion.component'

@NgModule({
  imports: [NativeScriptCommonModule, InformacionRoutingModule],
  declarations: [InformacionComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InformacionModule {}
