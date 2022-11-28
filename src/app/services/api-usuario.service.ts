import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiUsuarioService {

  httpOptions = {
    headers: new HttpHeaders
      ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  } 
  
  apiURL = 'https://pcortesduoc.github.io/movilApi/usuario.json' 

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

  usuarios: any;

  constructor(private http: HttpClient) { }

  fetchApi():Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(3)
    );
  }

  getUsuarios(){
    this.fetchApi().subscribe((data)=>{
      this.usuarios = data.usuario;
    })
  }

  usuarioExiste(correo: string) {
    for (let i = 0; i < this.usuarios.length; i++){
      if (correo===this.usuarios[i].correo){
        return true;
      } 
    }
  }

  consultarContrasena(correo: string){
    for (let i = 0; i < this.usuarios.length; i++){
      if (correo===this.usuarios[i].correo){
        return this.usuarios[i].contrasena;
      }
    }
  }

  consultarUsuario(correo: string) {
    for (let i = 0; i < this.usuarios.length; i++){
      if (correo===this.usuarios[i].correo){
        return this.usuario = this.usuarios[i];
      }
    }
  }

}