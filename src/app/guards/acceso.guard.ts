import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// servicios

import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})

export class AccesoGuard implements CanActivate {

  constructor(
    private router: Router,
    private sesion: SesionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.sesion.activa) {
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Debes iniciar sesion');
      return false;
    }
    
  }
  
}
