import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  nombre: string;
  apellido: string;
  correo: String;

  constructor(private sesion: SesionService, private router: Router) { }

  rescatarDatos() {
    this.nombre = this.sesion.nombre;
    this.apellido = this.sesion.apellido;
    this.correo = this.sesion.correo;
  }

  ngOnInit() {
    this.rescatarDatos();
  }

  volver(){
    this.router.navigate(["/home"]);
  }

}
