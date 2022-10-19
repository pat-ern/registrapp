import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
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
  } // Se establece la base url del API a consumir
  
 apiURL = 'https://pcortesduoc.github.io/movilApi/usuario.json' // Fuente Original funciona solo get
 //apiURL = 'http://192.168.0.6:3000'; // Ejecuta json-server -H ip .\db.json para ejecutar un Fake APIRest

  constructor(private http: HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(3)
    );
  }


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
  funcionGet(){
    this.getUsuarios().subscribe((data)=>{
      this.usuarios = data.usuario
      console.log(data.usuario)
    })
  }

  consultarUsuario(correo: string) {
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
    console.log(this.usuario)
    return this.usuario;
  }



  

  // otros metodos

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(retry(3));
  }

  getPost(id): Observable<any> {
    return this.http.get(this.apiURL + '/posts/' + id).pipe(retry(3));
  }

  createPost(post): Observable<any> {
    return this.http.post(this.apiURL + '/posts', post, this.httpOptions).pipe(retry(3));
  }

  updatePost(id, post): Observable<any> {
    return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions).pipe(retry(3));
  }

  deletePost(id): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
  }

}