import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  usuario: Usuario = {
    id: null,
    run : null,
    dv : '',
    nombre: '',
    apellido: '',
    carrera: '',
    correo: '',
  };

  activa = false;

  constructor() { }

  guardarSesion(usuario: any) {
    this.usuario = usuario;
    this.activa = true;
  };

};
