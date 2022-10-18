import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuarios, Asistencia } from '../interfaces/modelo-local';


@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  agenda: Usuarios[]=[];
  asistencia: Asistencia[]=[];

  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarContactos();
    this.cargarAsistencia();
  }

  guardarContacto(id:number,nombre:string, apellido:string, correo:string, contrasena:string, ){
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

  guardarAsistencia(id:string,alumno:string, asignatura:string, seccion:string, fecha:string, hora:string, presente:boolean){
    const existe= this.asistencia.find(c=>c.strIdAsistencia===id);
    if (!existe) {
      this.asistencia.unshift({strIdAsistencia:id,strAlumno:alumno,strAsignatura:asignatura,strSeccion:seccion,strFecha:fecha, strHora:hora, estaPresente:presente})
      this._storage.set('asistencia',this.asistencia);
      this.presentToast("Asistencia registrada con exito.")
    } else {
      this.presentToast("Error. Asistencia ya fue registrada hoy.")
    }
  }

  obtenerAsistencias(){
    let listaAsistencias: any[] = [];
    for (let i = 0; i < this.asistencia.length; i++) {
      listaAsistencias.push(this.asistencia[i]);
      console.log(listaAsistencias);
    }
    return listaAsistencias;
  }

  generarIdAsistencia(asignatura, fecha){
    let id: string = asignatura + fecha;
    return id;
  }

  borrarAsistencias(){
    this.asistencia = [];
    this._storage.set('asistencia',this.asistencia);
    this.presentToast("Historial borrado con exito.")
  }
  //

  async cargarContactos() {
    const miAgenda=await this.storage.get('agenda');
    if (miAgenda) {
      this.agenda=miAgenda;
    }
  }

  async cargarAsistencia() {
    const miAsistencia=await this.storage.get('asistencia');
    if (miAsistencia) {
      this.asistencia=miAsistencia;
    }
  }

  // genericos

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
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
}