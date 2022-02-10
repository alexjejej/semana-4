import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'personal',
    loadChildren: () => import('~/app/personal/personal.module').then((m) => m.PersonalModule),
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
  },
  {
    path: 'game',
    loadChildren: () => import('~/app/game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'informacion',
    loadChildren: () => import('~/app/informacion/informacion.module').then((m) => m.InformacionModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
  path: 'usuarios',
    loadChildren: () => import('~/app/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'edicion',
      loadChildren: () => import('~/app/edicion/edicion.module').then((m) => m.EdicionModule),
    },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
