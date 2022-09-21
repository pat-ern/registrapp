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
    console.log(hora);

    if (hora >= 14 && hora <= 24) {
      this.router.navigate(['home']);
      console.log('No puede acceder despues de las '+hora+' horas');
      return false;
    } 

    return true;
  }
  
}
