import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccesoGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const hora = new Date().getHours();

    /* //este es el ejemplo de guard
    let horaInicio = 18;
    let horaFin = 24;

    if (hora >= horaInicio && hora <= horaFin) {
      this.router.navigate(['home']);
      console.log('AccesoGuard: No puede acceder entre las '+horaInicio+' y las '+horaFin+' horas');
      return false;
    } 
    */


    //podemos hacer que el escaneo qr solo sea accesible por 30 mins o 1 hora desde que empieza la clase
    let horaInicioClase1 = 8;
    let horaFinClase1 = 9; //podria poner 8:30
    // agregar horas para cada clase del dia, quizas hay otra forma msa eficiente

    if (hora < horaInicioClase1 || hora > horaFinClase1) { //agregar todas las horas
      this.router.navigate(['home']);
      //console.log('AccesoGuard: No puede acceder entre las '+horaInicio+' y las '+horaFin+' horas');
      return false;
    } 

    return true;
  }
  
}
