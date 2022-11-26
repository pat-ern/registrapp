import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  apiURL = 'https://api.mailgun.net/v3/sandboxf43489a9f7614e84af8f183724d6c85f.mailgun.org/messages'  //hay que agregarle /messages al final del link
  apiKey = 'key-c12bf806897e339e387d0515fd70c89e'

  constructor(private http: HttpClient) { }

  enviarCorreo(from:string,to:string,cc:string,subject:string,text:string) {
    return this.http.post(this.apiURL,
      'from=' + from + '&to=' + to + '&cc=' + cc + '&subject=' + subject + '&text=' + text,
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


