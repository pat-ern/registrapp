import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  providers: [SesionService]
})
export class CuentaPage implements OnInit {

  correoUsuario: String;

  constructor(private sesion: SesionService) { }

  rescatarCorreo() {
    this.correoUsuario = this.sesion.correoUsuario;
  }

  ngOnInit() {
    this.rescatarCorreo();
    console.log(this.correoUsuario);
  }

}
