import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';

// Componentes de la página
import { MenuComponent } from '../../components/menu/menu.component';
import { BotonMenuComponent } from '../../components/boton-menu/boton-menu.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    MatIconModule,
  ],
  declarations: [CuentaPage,MenuComponent,BotonMenuComponent]
})
export class CuentaPageModule {}
