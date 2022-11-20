import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCorreosService {

  /* no estoy seguro como funciona el httpOptions, tuve que agregar los headers en la funcion manualmente
  httpOptions = {
    headers: new HttpHeaders
      ({
        'Authorization': 'Basic ' + '9fe0a678d85579ad66c05a7c69689aa5-2de3d545-23ea1fbc',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
  } 
  */

  apiURL = 'https://api.mailgun.net/v3/sandboxf43489a9f7614e84af8f183724d6c85f.mailgun.org/messages'
  apiKey = 'key-a8af3df8a00d2778589ab927646bf223'
  //oldApiKey = '9fe0a678d85579ad66c05a7c69689aa5-2de3d545-23ea1fbc'
  //smtpPass = '7e89d4e1b3eb3d25bc2e5f7f7e47a3ca-2de3d545-ff4afc1d'
  /*
  from = 'asistencia@duocuc.cl'
  to = 'p.cortes@duocuc.cl'
  cc = ''
  subject = 'Asistencia registrada'
  texto = 'Se ha registrado asistencia en la asignatura NOMBRE (CODIGO SECCION), para el alumno NOMBRE o CORREO, en la fecha FECHA y HORA'
  */

  constructor(private http: HttpClient) { }

  //
  enviarCorreo(from:string,to:string,subject:string,text:string) {
    return this.http.post(this.apiURL,
      'from=' + from + '&to=' + to + '&subject=' + subject + '&text=' + text,
      {
        headers: {
          'Authorization': 'Basic ' + btoa('api:' + this.apiKey),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
      }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
      });
  }

}


