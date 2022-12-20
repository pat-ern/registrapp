import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modulos de Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { isPlatform } from '@ionic/angular';

// Plugins de Ionic
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// Modulos compartidos
import { SharedModule } from './shared-module/shared-module.module';

// Servicios locales
import { SesionService } from './services/sesion.service';

const getConfig = () => {
  if (isPlatform('ios')){ 
    return {
      menuIcon: 'list-outline',
      menuType: 'reveal',
      animated: false,
      rippleEffect: false, 
    }
  } else if (isPlatform('desktop')) {
    return {
      menuIcon: 'grid-outline',
      menuType: 'overlay',
      animated: true,
      rippleEffect: true, 
    }
  } else if (isPlatform('android')) {
    return {
      menuIcon: 'menu-outline',
      menuType: 'push',
      animated: true,
      rippleEffect: true, 
    }
  }
}

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(getConfig()), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  
    SesionService,
    BarcodeScanner,
    SharedModule],
  bootstrap: [
    AppComponent],
})
export class AppModule {}