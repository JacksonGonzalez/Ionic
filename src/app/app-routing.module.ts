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
  },
  {
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
  {
    path: 'check',
    loadChildren: () => import('./page/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./page/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./page/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./page/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./page/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./page/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./page/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./page/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./page/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./page/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./page/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./page/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
