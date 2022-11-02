import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// historial page
import { HistorialPageRoutingModule } from './historial-routing.module';
import { HistorialPage } from './historial.page';

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
    HistorialPageRoutingModule,
    MatIconModule,
  ],
  declarations: [
    HistorialPage,
    HeaderComponent,
    FooterComponent]
})
export class HistorialPageModule {}
