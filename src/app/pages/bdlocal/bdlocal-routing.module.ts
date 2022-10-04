import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdlocalPage } from './bdlocal.page';

const routes: Routes = [
  {
    path: '',
    component: BdlocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BdlocalPageRoutingModule {}
