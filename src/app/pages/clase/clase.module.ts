import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasePageRoutingModule } from './clase-routing.module';

import { ClasePage } from './clase.page';

// qr code 
import { QRCodeModule } from 'angular2-qrcode';

// import mat-select 
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasePageRoutingModule,
    QRCodeModule,
    MatSelectModule],
    
  declarations: [ClasePage]
})
export class ClasePageModule {}
