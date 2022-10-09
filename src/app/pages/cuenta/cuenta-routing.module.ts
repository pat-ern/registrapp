import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotonMenuComponent } from 'src/app/components/boton-menu/boton-menu.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';

import { CuentaPage } from './cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaPage,
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
export class CuentaPageRoutingModule {}
