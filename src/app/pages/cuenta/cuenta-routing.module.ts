import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// cuenta page
import { CuentaPage } from './cuenta.page';

// componentes
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: CuentaPage,
    children:[
      {
        path:'header',
        component: HeaderComponent
      },
      {
        path:'footer',
        component: FooterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaPageRoutingModule {}
