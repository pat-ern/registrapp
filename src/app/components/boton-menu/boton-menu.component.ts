import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.scss'],
})
export class BotonMenuComponent implements OnInit {

  nombre = this.sesion.nombre;
  apellido = this.sesion.apellido;

  constructor(private sesion: SesionService, private router: Router) { }

  ngOnInit() { }

  cuenta() {
    this.router.navigate(['/cuenta']);
  }

  
  // subtract(value, mask) {
  //   return value.split('').filter(function (a, i) {
  //       return a !== mask[i];
  //   }).join('');
  // }

  // console.log(subtract("1-000-111", " -   -"));
  // console.log(subtract("foo1-000-111", "foo -   -"));

  // obtenerNombre() {
  //   const url = this.subtract(window.location.href, "http://localhost:8100/");
  //   return url;
  // }

}
