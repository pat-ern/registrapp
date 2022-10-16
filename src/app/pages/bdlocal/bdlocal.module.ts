import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdlocalPageRoutingModule } from './bdlocal-routing.module';

import { BdlocalPage } from './bdlocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdlocalPageRoutingModule
  ],
  declarations: [BdlocalPage]
})
export class BdlocalPageModule {}
