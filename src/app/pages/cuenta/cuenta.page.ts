import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  nombre: string;
  apellido: string;
  correo: String;

  constructor(private sesion: SesionService) { }

  rescatarDatos() {
    this.nombre = this.sesion.nombre;
    this.apellido = this.sesion.apellido;
    this.correo = this.sesion.correo;
  }

  ngOnInit() {
    this.rescatarDatos();
  }

}
