import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// home page
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

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
    HomePageRoutingModule,
    MatIconModule,
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    FooterComponent]
})
export class HomePageModule {}
