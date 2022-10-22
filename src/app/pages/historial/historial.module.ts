import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';

import { HistorialPage } from './historial.page';
import { BotonMenuComponent } from '../../components/boton-menu/boton-menu.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    MatIconModule,
  ],
  declarations: [
    HistorialPage,
    BotonMenuComponent]
})
export class HistorialPageModule {}
