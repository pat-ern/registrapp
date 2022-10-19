import { Injectable } from '@angular/core';
import { BdLocalService } from './bd-local.service';
import { ApiUsuarioService } from 'src/app/services/api-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  usuarios: any;
  //usuario: any;

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

  constructor(
    private bdlocalservice: BdLocalService,
    private api: ApiUsuarioService) { }

  // solo dentro del servicio se consulta a la base de datos local para obtener los datos del usuario
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

  guardarSesion(id: number, nombre: string, apellido: string, correo: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    console.log('Se almaceno el usuario '+this.correo+' en la sesion');
  }
  
}
