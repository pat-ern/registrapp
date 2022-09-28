import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from './guards/acceso.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'clase',
    loadChildren: () => import('./clase/clase.module').then( m => m.ClasePageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
