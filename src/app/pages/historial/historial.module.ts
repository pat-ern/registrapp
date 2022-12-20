import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// historial page
import { HistorialPageRoutingModule } from './historial-routing.module';
import { HistorialPage } from './historial.page';

// material
import { MatIconModule } from '@angular/material/icon';

// shared module
import { SharedModule } from '../../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    MatIconModule,
    SharedModule // importar el modulo de shared module para que se puedan usar los componentes que contiene
  ],
  declarations: [
    HistorialPage]
})
export class HistorialPageModule {}
