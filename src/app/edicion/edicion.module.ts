import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { EdicionRoutingModule } from './edicion-routing.module'
import { EdicionComponent } from './edicion.component'
import { EdicionFormComponent } from './edicion-form.component'


@NgModule({
  imports: [NativeScriptCommonModule, EdicionRoutingModule, NativeScriptFormsModule],
  declarations: [EdicionComponent, EdicionFormComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EdicionModule {}
