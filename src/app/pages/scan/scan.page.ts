import { Component, OnInit } from '@angular/core';

// Servicios
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { ApiCorreosService } from 'src/app/services/api-correos.service';

// Plugins
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  code: any;
  asignaturas: any;

  clase = {
    codigo: " ",
    asignatura : " ",
    seccion : " ",
    profesor: " ",
    fecha: " ",
    hora: " ",
  }

  constructor(
    private scanner: BarcodeScanner,
    private api: ApiService,
    private bdlocal: BdLocalService,
    private sesion: SesionService,
    private apiCorreo: ApiCorreosService) { }
  
  ngOnInit() {
    console.log('ngOnInit')
    this.startScan();

    // solo para prueba -> desde aqui
    // this.bdlocal.guardarAsistencia("MAT230901-10-2022","patricio@duocuc.cl","MAT2309","003X","01-10-2022", "10:00", true)
    // this.bdlocal.guardarAsistencia("LEN781202-10-2022","patricio@duocuc.cl","LEN7812","003X","02-10-2022", "09:00", false)
    // this.bdlocal.guardarAsistencia("MAT230903-10-2022","patricio@duocuc.cl","MAT2309","003X","03-10-2022", "13:00", true)
    // this.bdlocal.guardarAsistencia("LEN781204-10-2022","patricio@duocuc.cl","LEN7812","003X","04-10-2022", "08:00", true)
    // solo para prueba <- hasta aqui

  }

  validarHorario(hra_ini, min_ini, hra_ter, min_ter){
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    if (hora >= hra_ini && min >= min_ini && hora < hra_ter || hora == hra_ter && min <= min_ter) {
      return true;
    } else {
      return false;
    }  
  }

  matchClass(){
    this.api.getAsignaturas().subscribe((data)=>{
      this.asignaturas = data.asignatura 
      console.log(data);

      let hoy = new Date().getDay();
      console.log(hoy);

      for (let i = 0; i < this.asignaturas.length; i++) {
        //for (let j = 0; j < this.asignaturas[i].horario.length; j++) {
          if (this.asignaturas[i].codigo.toUpperCase() == this.code.toUpperCase()) { // && this.asignaturas[i].horario[j].dia == hoy

            //if (this.validarHorario(this.asignaturas[i].horario[0].hra_ini, this.asignaturas[i].horario[0].min_ini, this.asignaturas[i].horario[0].hra_ter, this.asignaturas[i].horario[0].min_ter)) {
              this.clase.codigo = this.asignaturas[i].codigo;
              this.clase.asignatura = this.asignaturas[i].nombre;
              this.clase.seccion = this.asignaturas[i].seccion;
              this.clase.profesor = this.asignaturas[i].profesor;
              this.clase.fecha = new Date().toLocaleDateString();
              this.clase.hora = new Date().toLocaleTimeString();
            //} else {
            // alert("No es el horario de la clase");
            //}
          } 
        //}
      }
    })
  }

  startScan(){
  this.scanner.scan().then(barcodeData => {
    this.code = barcodeData.text;
    this.matchClass();
   }).catch(err => {
       console.log('Error', err);
   });
  }

  mayusPrimeraLetra(palabra:string){
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
  }

  registrarAsistencia(){
    let idAsistencia = this.bdlocal.generarIdAsistencia(this.clase.codigo, this.clase.fecha);
    let alumno = this.sesion.correo;
    this.bdlocal.guardarAsistencia(idAsistencia,alumno, this.clase.codigo, this.clase.seccion, this.clase.fecha, this.clase.hora, true);
    //enviar correo
    this.apiCorreo.enviarCorreo(
      /*from*/'asistencia@duocuc.cl',
      /*to*/'p.cortes@duocuc.cl',
      /*cc*/'',
      /*subject*/'Asistencia registrada '+this.clase.codigo.toUpperCase()+' '+this.clase.seccion.toUpperCase(),
      /*text*/'Se ha registrado asistencia en la asignatura de '+this.mayusPrimeraLetra(this.clase.asignatura)+' ('+this.clase.codigo.toUpperCase()+' '+this.clase.seccion.toUpperCase()+'), para el alumno '+this.mayusPrimeraLetra(this.sesion.nombre)+' '+this.mayusPrimeraLetra(this.sesion.apellido)+', en la fecha '+this.clase.fecha+' a las '+this.clase.hora+'.');
      ///*subject*/'Asistencia registrada '+this.clase.codigo+' '+this.clase.seccion,
      ///*text*/'Se ha registrado asistencia en la asignatura de '+this.clase.asignatura+' ('+this.clase.codigo+' '+this.clase.seccion+'), para el alumno '+this.sesion.nombre+' '+this.sesion.apellido+', en la fecha '+this.clase.fecha+' '+this.clase.hora+' .');
  }

}