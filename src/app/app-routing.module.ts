import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('.page/inicio/inicio.module'').then( m => m.InicioPageModule)
  // },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./page/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./page/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },  {
    path: 'avatar',
    loadChildren: () => import('./page/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./page/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./page/card/card.module').then( m => m.CardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
