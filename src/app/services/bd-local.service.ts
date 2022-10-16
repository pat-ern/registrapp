import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuarios } from '../interfaces/usuarios';


@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  agenda: Usuarios[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    //cargo el contenido de localStorage en agenda
    this.cargarContactos();
  }

  guardarContacto(id:number,nombre:string, apellido:string, correo:string, contrasena:string, ){
    //creo una consulta lambda para saber si este nuevo contacto no existe ya
    const existe= this.agenda.find(c=>c.strCorreo===correo);
    if (!existe) {
      this.agenda.unshift({numIdUsuario:id,strNombre:nombre,strApellido:apellido,strCorreo:correo,strContrasena:contrasena})
      this._storage.set('agenda',this.agenda);
      this.presentToast("Usuario agregado con exito.")
    } else {
      this.presentToast("Error. Usuario ya existe.")
    }
  }

  obtenerUsuario(correo:string){
    return this.agenda.find(c=>c.strCorreo===correo);
  }

  generarIdUsuario(){
    if (this.agenda.length>0) {
      return this.agenda[0].numIdUsuario+1;
    } else {
      return 1;
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