import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// cuenta page
import { CuentaPageRoutingModule } from './cuenta-routing.module';
import { CuentaPage } from './cuenta.page';

// componentes
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

// material
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    MatIconModule,
  ],
  declarations: [
    CuentaPage,
    HeaderComponent,
    FooterComponent]
})
export class CuentaPageModule {}
