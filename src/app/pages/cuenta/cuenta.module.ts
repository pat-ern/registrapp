import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// cuenta page
import { CuentaPageRoutingModule } from './cuenta-routing.module';
import { CuentaPage } from './cuenta.page';

// material
import { MatIconModule } from '@angular/material/icon';

// shared module
import { SharedModule } from '../../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    MatIconModule,
    SharedModule // importar el modulo de shared module para que se puedan usar los componentes que contiene
  ],
  declarations: [
    CuentaPage]
})

export class CuentaPageModule {}
