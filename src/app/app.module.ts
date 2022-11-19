import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// Base de datos sqlite y localstorage
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';

// Servicios locales
import { SesionService } from './services/sesion.service';

// Plugin scanner (ejemplo youtube)
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

//configuracion android y ios
import { isPlatform } from '@ionic/angular';



const getConfig = () => {
  if (isPlatform('android')){ //recordatorio cambiar desktop a android
    return {
      menuIcon: 'grid-outline',
      //menuType: 'push'
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
    SQLite, 
    SesionService,
    BarcodeScanner],

  bootstrap: [
    AppComponent],

})

export class AppModule {}