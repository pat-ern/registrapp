import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  // Atributos de la sesion
  usuario = {
    id: null,
    run : null,
    dv : " ",
    nombre: " ",
    apellido: " ",
    carrera: " ",
    correo: " ",
  }

  activa: boolean = false;

  constructor() { }

  guardarSesion(usuario: any) {
    this.usuario = usuario;
    // activa la sesion
    this.activa = true;
    console.log('Se almaceno el usuario '+this.usuario.correo+' en la sesion');
  }
  
}
