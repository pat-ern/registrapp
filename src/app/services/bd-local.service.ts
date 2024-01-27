import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { RegistroAsistencia } from '../models/asistencia.model';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  asistencia: RegistroAsistencia[] = [];
  private store: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarAsistencia();
  }

  guardarAsistencia(a: RegistroAsistencia) {

    const existe = this.asistencia.find(c => c.id === a.id);

    if (a.id.length <= 2) {
      this.presentToast('Error al ingresar asistencia, intentar en el emulador');
    } else {
      if (!existe) {
        this.asistencia.unshift({
          id: a.id,
          alumno: a.alumno,
          asignatura: a.asignatura,
          codigo: a.codigo,
          seccion: a.seccion,
          fecha: a.fecha,
          hora: a.hora,
          presente: a.presente
        });

        this.store.set('asistencia', this.asistencia);
        this.presentToast('Asistencia registrada con exito.');
        return true;

      } else {
        this.presentToast('Error. Asistencia ya fue registrada hoy.');
        return false;
      }
    }
  }

  obtenerAsistencias(): RegistroAsistencia[] {
    return this.asistencia;
  }

  generarIdAsistencia(asignatura: string, fecha: string) {
    return asignatura + fecha;
  }

  borrarAsistencias() {
    this.asistencia = [];
    this.store.set('asistencia', this.asistencia);
    this.presentToast('Historial borrado con exito.');
  }

  async cargarAsistencia() {
    const miAsistencia = await this.storage.get('asistencia');
    if (miAsistencia) {
      this.asistencia = miAsistencia;
    }
  }

  async init() {
    const storage = await this.storage.create();
    this.store = storage;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent: false,
      color: 'medium',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  };

}
