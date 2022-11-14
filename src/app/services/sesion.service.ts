import { Injectable } from '@angular/core';
import { ApiUsuarioService } from 'src/app/services/api-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  // variables de sesion
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  usuarios: any;
  activa: boolean = false;

  // variables de usuario rescatado de API
  usuario = {
    id: null,
    run : null,
    dv : " ",
    nombre: " ",
    apellido: " ",
    carrera: " ",
    correo: " ",
    contrasena: " ",
  }

  constructor(private api: ApiUsuarioService) { }

  // solo dentro del servicio se consulta a la api y se guarda en la variable usuario
  consultarUsuario(correo: string) {
    this.api.getUsuarios().subscribe((data)=>{
      this.usuarios = data.usuario
      console.log(data.usuario)
      for (let i = 0; i < this.usuarios.length; i++){
        if (correo===this.usuarios[i].correo){
          this.usuario.id=this.usuarios[i].id;
          this.usuario.run=this.usuarios[i].run;
          this.usuario.dv=this.usuarios[i].dv;
          this.usuario.nombre=this.usuarios[i].nombre;
          this.usuario.apellido=this.usuarios[i].apellido;
          this.usuario.carrera=this.usuarios[i].carrera;
          this.usuario.correo=this.usuarios[i].correo;
          this.usuario.contrasena=this.usuarios[i].contrasena;
          console.log(this.usuarios[i])
        }
      }
    })
    console.log(this.usuario)
    return this.usuario;
  }

  // este metodo se llama desde el login para guardar los datos de sesion
  guardarSesion(id: number, nombre: string, apellido: string, correo: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.activa = true;
    console.log('Se almaceno el usuario '+this.correo+' en la sesion');
  }
  
}
