import { Component, OnInit } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  listaAsistencia: any;
  tamanoLista: number;

  constructor(
    private bdlocal: BdLocalService) {
  }

  borrarHistorial(){
    this.bdlocal.borrarAsistencias();
    this.listaAsistencia = this.bdlocal.obtenerAsistencias();
    this.tamanoLista = this.calcularTamanoLista();
  }

  ionViewWillEnter() {
    this.listaAsistencia = this.bdlocal.obtenerAsistencias();
    this.tamanoLista = this.calcularTamanoLista();
  }

  ngOnInit() {

  }

  calcularTamanoLista(){
    if (this.listaAsistencia == null){
      this.listaAsistencia = [];
    }
    return this.listaAsistencia.length;
  }


}
