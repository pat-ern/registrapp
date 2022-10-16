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

    let horaInicio = 18;
    let horaFin = 24;

    if (hora >= horaInicio && hora <= horaFin) {
      this.router.navigate(['home']);
      console.log('AccesoGuard: No puede acceder entre las '+horaInicio+' y las '+horaFin+' horas');
      return false;
    } 

    return true;
  }
  
}
