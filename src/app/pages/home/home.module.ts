import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { BotonMenuComponent } from '../../components/boton-menu/boton-menu.component';

import { HomePageRoutingModule } from './home-routing.module';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatIconModule,
  ],
  declarations: [
    HomePage,
    BotonMenuComponent]
})
export class HomePageModule {}
