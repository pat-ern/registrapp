import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonMenuComponent } from '../../components/boton-menu/boton-menu.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
