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
  } 
  
 apiURL = 'https://pcortesduoc.github.io/movilApi/clase.json'

  constructor(private http: HttpClient) { }

  getAsignaturas():Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(3)
    );
  }

}