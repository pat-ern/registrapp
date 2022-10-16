import { Injectable } from '@angular/core';
import { BdLocalService } from './bd-local.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  id: number;
  nombre: string;
  apellido: string;
  correo: string;

  constructor(private bdlocalservice: BdLocalService) { }

  // solo dentro del servicio se consulta a la base de datos local para obtener los datos del usuario
  consultarUsuario(correo: string) {
    let usuariobd = this.bdlocalservice.obtenerUsuario(correo);
    return usuariobd;
  }

  guardarSesion(id: number, nombre: string, apellido: string, correo: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    console.log('Se almaceno el usuario '+this.correo+' en la sesion');
  }
  
}
