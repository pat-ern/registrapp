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
  
  tamanoLista: number;
  

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
    this.tamanoLista = this.calcularTamanoLista();
  }

  calcularTamanoLista(){
    if (this.listaAsistencia == null){
      this.listaAsistencia = [];
    }
    return this.listaAsistencia.length;
  }


}
 