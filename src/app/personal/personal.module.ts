import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { PersonalRoutingModule } from './personal-routing.module'
import { PersonalComponent } from './personal.component'
import { PersonalFormComponent } from './personal-form.component'
import { MinLenDirective } from './minlen'



@NgModule({
  imports: [NativeScriptCommonModule, PersonalRoutingModule, NativeScriptFormsModule],
  declarations: [PersonalComponent, PersonalFormComponent, MinLenDirective],
  schemas: [NO_ERRORS_SCHEMA],
  //providers: [NoticiasService],
})
export class PersonalModule {}
