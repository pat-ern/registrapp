import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Asistencia } from '../interfaces/modelo-local';


@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  asistencia: Asistencia[]=[];

  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarAsistencia();
  }

  guardarAsistencia(id:string, alumno:string, asignatura:string, codigo: string, seccion:string, fecha:string, hora:string, presente:boolean){
    const existe= this.asistencia.find(c=>c.strIdAsistencia===id);
    if (id.length <= 2) {
      this.presentToast("Error al ingresar asistencia, intentar en el emulador")
    } else {
      if (!existe) {
        this.asistencia.unshift({strIdAsistencia:id,strAlumno:alumno, strAsignatura:asignatura, strCodigo:codigo, strSeccion:seccion,strFecha:fecha, strHora:hora, estaPresente:presente})
        this._storage.set('asistencia',this.asistencia);
        this.presentToast("Asistencia registrada con exito.")
        return true;
      } else {
        this.presentToast("Error. Asistencia ya fue registrada hoy.")
        return false;
      }
    }
  }

  obtenerAsistencias(){
    let listaAsistencias: any[] = [];
    for (let i = 0; i < this.asistencia.length; i++) {
      listaAsistencias.push(this.asistencia[i]);
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