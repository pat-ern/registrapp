import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  httpOptions = {
    headers: new HttpHeaders
      ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  } // Se establece la base url del API a consumir
  
 apiURL = 'https://pcortesduoc.github.io/movilApi/clase.json' // Fuente Original funciona solo get
 //apiURL = 'http://192.168.0.6:3000'; // Ejecuta json-server -H ip .\db.json para ejecutar un Fake APIRest

  constructor(private http: HttpClient) { }

  // aun no encuentro la manera de hacer esto con la api de github
  getAsignatura(asigId):Observable<any>{
    return this.http.get(this.apiURL+'/users/'+asigId).pipe(
      retry(3)
    );
  }

  getAsignaturas():Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(3)
    );
  }

  // getUsuarios():Observable<any>{
  //   return this.http.get(this.apiURL+'/users/').pipe(
  //     retry(3)
  //   );
  //  }


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