import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotonMenuComponent } from '../../components/boton-menu/boton-menu.component';

import { HistorialPage } from './historial.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPage,
    children:[
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
