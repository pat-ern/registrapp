import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  nombre = this.sesion.nombre;
  apellido = this.sesion.apellido;
  correo = this.sesion.correo;

  constructor(private sesion: SesionService) { }

  ngOnInit() { }

}
