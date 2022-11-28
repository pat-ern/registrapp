import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// home page
import { HomePage } from './home.page';

// componentes
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
