import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// historial page
import { HistorialPage } from './historial.page';

// componentes
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HistorialPage,
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
export class HistorialPageRoutingModule {}
