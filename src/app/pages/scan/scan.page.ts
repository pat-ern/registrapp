import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { ApiCorreosService } from 'src/app/services/api-correos.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { RegistroAsistencia } from 'src/app/models/asistencia.model';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  code: any;
  asignaturas: any;

  clase = {
    codigo: ' ',
    asignatura: ' ',
    seccion: ' ',
    profesor: ' ',
    fecha: ' ',
    hora: ' ',
    correoProf: ' ',
  };

  codigoComparable = '';
  codigoBase = 'reg_app_cod';
  pageState = 1;

  constructor(
    private scanner: BarcodeScanner,
    private api: ApiService,
    private bdlocal: BdLocalService,
    private sesion: SesionService,
    private apiCorreo: ApiCorreosService) { }

  ngOnInit() {
    this.startScan();
  }

  validarHorario(horaInicio: number, minutoInicio: number, horaTermino: number, minutoTermino: number) {
    const fecha = new Date();
    const hora = fecha.getHours();
    const min = fecha.getMinutes();
    if (hora >= horaInicio && min >= minutoInicio && hora < horaTermino || hora === horaTermino && min <= minutoTermino) {
      return true;
    } else {
      return false;
    };
  };

  matchClass() {
    this.api.getAsignaturas().subscribe((data) => {
      this.asignaturas = data.asignatura;
      this.asignaturas.forEach((asignatura) => {
        this.codigoComparable = this.codigoBase + '*' + asignatura.codigo + '*' + asignatura.seccion;
        if (this.codigoComparable.toUpperCase() === this.code.toUpperCase()) {
          this.clase.codigo = asignatura.codigo;
          this.clase.asignatura = asignatura.nombre;
          this.clase.seccion = asignatura.seccion;
          this.clase.profesor = asignatura.profesor;
          this.clase.fecha = new Date().toLocaleDateString();
          this.clase.hora = new Date().toLocaleTimeString();
          this.clase.correoProf = asignatura.correoProf;
        }
      });
    });
  }

  startScan() {
    this.pageState = 1;
    this.scanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      if (this.code.substring(0, 11) === this.codigoBase) {
        this.pageState = 2;
        this.matchClass();
      } else {
        this.pageState = 3;
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

  mayusPrimeraLetra(palabra: string) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }

  mayusPalabras(palabras: string) {
    const palSeparadas = palabras.split(' ');
    for (let i = 0; i < palSeparadas.length; i++) {
      palSeparadas[i] = palSeparadas[i][0].toUpperCase() + palSeparadas[i].slice(1);
    }
    return palSeparadas.join(' ');
  }

  registrarAsistencia() {
    const id = this.bdlocal.generarIdAsistencia(this.clase.codigo, this.clase.fecha);
    const registroAsistencia: RegistroAsistencia = {
      id,
      alumno: this.sesion.usuario.correo,
      asignatura: this.clase.asignatura,
      codigo: this.clase.codigo,
      seccion: this.clase.seccion,
      fecha: this.clase.fecha,
      hora: this.clase.hora,
      presente: true
    };

    const enviar = this.bdlocal.guardarAsistencia(registroAsistencia);
    const from = 'asistencia@duocuc.cl';
    const to = this.clase.correoProf;
    const subject = 'Asistencia registrada ' + this.clase.codigo.toUpperCase() + ' ' + this.clase.seccion.toUpperCase();

    const text = 'Se ha registrado asistencia en la asignatura de '
      + this.mayusPalabras(this.clase.asignatura)
      + ' (' + this.clase.codigo.toUpperCase() + ' '
      + this.clase.seccion.toUpperCase() + '), para el alumno '
      + this.mayusPrimeraLetra(this.sesion.usuario.nombre) + ' '
      + this.mayusPrimeraLetra(this.sesion.usuario.apellido)
      + ', en la fecha ' + this.clase.fecha + ' a las ' + this.clase.hora + '.';

    if (enviar) {
      this.apiCorreo.enviarCorreo(from, to, '', subject, text);
    }
  }

}
