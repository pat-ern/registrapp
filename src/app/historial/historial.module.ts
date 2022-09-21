import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';

import { HistorialPage } from './historial.page';
import { MenuComponent } from '../menu/menu.component'
import { BotonMenuComponent } from '../boton-menu/boton-menu.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    MatIconModule,
  ],
  declarations: [HistorialPage,MenuComponent,BotonMenuComponent]
})
export class HistorialPageModule {}
