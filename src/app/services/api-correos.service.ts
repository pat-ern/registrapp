import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCorreosService {

  apiURL = 'https://api.mailgun.net/v3/sandboxf43489a9f7614e84af8f183724d6c85f.mailgun.org/messages';
  apiKey = 'key-c12bf806897e339e387d0515fd70c89e';

  constructor(private http: HttpClient) { }

  enviarCorreo(from: string, to: string, cc: string, subject: string, text: string) {
    return this.http.post(this.apiURL,
      'from=' + from + '&to=' + to + '&cc=' + cc + '&subject=' + subject + '&text=' + text,
      {
        headers: {
          'Authorization': 'Basic ' + btoa('api:' + this.apiKey),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).subscribe(success => {
        console.log('SUCCESS -> ' + JSON.stringify(success));
      }, error => {
        console.log('ERROR -> ' + JSON.stringify(error));
      });
  }

}
