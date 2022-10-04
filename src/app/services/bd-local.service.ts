import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IAgenda } from '../interfaces/iagenda';


@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  agenda: IAgenda[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    //cargo el contenido de localStorage en agenda
    this.cargarContactos();
  }

  guardarContacto(nombre:string, nro:string){
    //creo una consulta lambda para saber si este nuevo contacto no existe ya
    const existe= this.agenda.find(c=>c.strNumero===nro);
    if (!existe) {
      this.agenda.unshift({strNombre:nombre,strNumero:nro})
      this._storage.set('agenda',this.agenda);
      this.presentToast("Contacto Agregado con Exito!!")
    } else {
      this.presentToast("Error: Contacto YA Existe!!")
    }
  }
  async cargarContactos() {
    const miAgenda=await this.storage.get('agenda');
    if (miAgenda) {
      this.agenda=miAgenda;
    }
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}