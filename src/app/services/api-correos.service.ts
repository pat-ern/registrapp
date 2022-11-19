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
  apiKey = '9fe0a678d85579ad66c05a7c69689aa5-2de3d545-23ea1fbc'
  from = 'asistencia@duocuc.cl'
  to = 'p.cortes@duocuc.cl'
  cc = ''
  subject = 'Asistencia registrada'
  texto = 'Se ha registrado asistencia en la asignatura NOMBRE (CODIGO SECCION), para el alumno NOMBRE o CORREO, en la fecha FECHA y HORA'

  constructor(private http: HttpClient) { }

  enviarCorreo(){
    return this.http.post(this.apiURL,
      'from='+this.from + '&to=' + this.to + '&subject=' + this.subject + '&text=' + this.texto, 
      {
          headers: {'Authorization': 'Basic ' + btoa('api:9fe0a678d85579ad66c05a7c69689aa5-2de3d545-23ea1fbc'),
          'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
    }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
    });
      //"from=test@example.com&to=" + "recipient@example.com" + "&subject=" + "test subject" + "&text=" + "test message sent",)
  }

}


