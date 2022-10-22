import { Component, OnInit } from '@angular/core';

// Servicios
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  listaAsistencia: any;

  constructor(
    private bdlocal: BdLocalService) { 
  }

  borrarHistorial(){
    this.bdlocal.borrarAsistencias();
    this.listaAsistencia = this.bdlocal.obtenerAsistencias();
  }

  ionViewWillEnter() {
    this.listaAsistencia = this.bdlocal.obtenerAsistencias();
  }

  ngOnInit() {
  }

}
 