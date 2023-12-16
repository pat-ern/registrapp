import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent, // declarar los componentes que se van a usar en el modulo
    FooterComponent
  ],
  imports: [
    IonicModule, // importar el modulo de Ionic para que se habiliten los tag de Ionic en los componentes
    CommonModule
  ],
  exports: [
    HeaderComponent, // tambien exportar los componentes para que puedan ser usados en otros modulos
    FooterComponent
  ]
})

export class SharedModule { };
