import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  nombre = this.sesion.usuario.nombre + " " + this.sesion.usuario.apellido;
  rut = this.sesion.usuario.run + "-" + this.sesion.usuario.dv;
  correo = this.sesion.usuario.correo;
  carrera = this.sesion.usuario.carrera;

  constructor(private sesion: SesionService) { }

  ngOnInit() { }

}
