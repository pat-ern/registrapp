import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

// material
import { MatIconModule } from '@angular/material/icon';

// shared module
import { SharedModule } from '../../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatIconModule,
    SharedModule, // importar el modulo de shared module para que se puedan usar los componentes que contiene 
  ],
  declarations: [
    HomePage,
  ]
})

export class HomePageModule {}
