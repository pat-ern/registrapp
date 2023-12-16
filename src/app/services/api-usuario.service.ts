import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

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
  };

  apiURL = 'https://pcortesduoc.github.io/movilApi/usuario.json';

  usuario: Usuario = {
    id: null,
    run : null,
    dv : '',
    nombre: '',
    apellido: '',
    carrera: '',
    correo: '',
    contrasena: '',
  };

  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) { }

  fetchApi(): Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(3)
    );
  };

  getUsuarios(){
    this.fetchApi().subscribe((data)=>{
      this.usuarios = data.usuario;
    });
  };

  usuarioExiste(correo: string): boolean {
    let existe = false;
    this.usuarios.forEach(usuario => {
      if (correo === usuario.correo) {
        existe = true;
      }
    });
    return existe;
  };

  consultarContrasena(correo: string): string {
    let contrasena: string;
    this.usuarios.forEach(usuario => {
      if (correo === usuario.correo) {
        contrasena = usuario.contrasena;
      }
    });
    return contrasena;
  };

  consultarUsuario(correo: string): Usuario | null {
    const usuarioEncontrado = this.usuarios.find(usuario => correo === usuario.correo);
    if (usuarioEncontrado) {
      return usuarioEncontrado;
    }
    return null;
  }

};
