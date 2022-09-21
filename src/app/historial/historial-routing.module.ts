import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { BotonMenuComponent } from '../boton-menu/boton-menu.component';

import { HistorialPage } from './historial.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPage,
    children:[
      {
        path:'menu',
        component: MenuComponent
      },
      {
        path:'boton-menu',
        component: BotonMenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPageRoutingModule {}
