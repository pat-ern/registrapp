import { Component, OnInit } from '@angular/core';

// Servicios
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { ApiCorreosService } from 'src/app/services/api-correos.service';

// Plugins
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { browser } from 'protractor';


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
    correoProf: " ",
  }

  codigoComparable: string = "";
  codigoBase: string = "reg_app_cod";
  pageState: number = 1;

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
          this.codigoComparable = this.codigoBase+"*"+this.asignaturas[i].codigo+"*"+this.asignaturas[i].seccion;
          if (this.codigoComparable.toUpperCase() == this.code.toUpperCase()) { // && this.asignaturas[i].horario[j].dia == hoy

            //if (this.validarHorario(this.asignaturas[i].horario[0].hra_ini, this.asignaturas[i].horario[0].min_ini, this.asignaturas[i].horario[0].hra_ter, this.asignaturas[i].horario[0].min_ter)) {
              this.clase.codigo = this.asignaturas[i].codigo;
              this.clase.asignatura = this.asignaturas[i].nombre;
              this.clase.seccion = this.asignaturas[i].seccion;
              this.clase.profesor = this.asignaturas[i].profesor;
              this.clase.fecha = new Date().toLocaleDateString();
              this.clase.hora = new Date().toLocaleTimeString();
              this.clase.correoProf = this.asignaturas[i].correoProf;
            //} else {
            // alert("No es el horario de la clase");
            //}
          } 
        //}
      }
    })
  }

  startScan(){
    this.pageState = 1;
    this.scanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      if  (this.code.substring(0,11) == this.codigoBase) {
        this.pageState = 2;
        this.matchClass();
      } else {
        this.pageState = 3;
      }
    }).catch(err => {
        console.log('Error', err);
    });
  }

  mayusPrimeraLetra(palabra:string){
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
  }

  mayusPalabras(palabras:string){
    //esta funcion toma un string, los separa en un array por cada espacio, en el for le pone mayuscula a la primera letra de cada una y luego las vuelve a unir con un espacio entremedio
    let palSeparadas = palabras.split(" ");
    for(let i = 0; i < palSeparadas.length; i++){
      palSeparadas[i] = palSeparadas[i][0].toUpperCase()+palSeparadas[i].slice(1);
    }
    return palSeparadas.join(" ");
  }

  registrarAsistencia(){
    let idAsistencia = this.bdlocal.generarIdAsistencia(this.clase.codigo, this.clase.fecha);
    let alumno = this.sesion.correo;
    let enviar = this.bdlocal.guardarAsistencia(idAsistencia,alumno, this.clase.codigo, this.clase.seccion, this.clase.fecha, this.clase.hora, true);
    //enviar correo
    if(enviar){ //solo se envia correo si la asistencia no ha sido tomada hoy, segun la validacion de guardarAsistencia()
      this.apiCorreo.enviarCorreo(
        /*from*/'asistencia@duocuc.cl', 
        /*to*/this.clase.correoProf, //El recipiente es el correo del profesor. Ej: ya.villegas@profesor.duoc.cl
        ///*to*/'p.cortes@duocuc.cl', //Para probar, se puede escribir un correo manualmente aqui
        /*cc*/'', //para agregar mas destinatarios, se deben agregar a los Authorized Recipients en MailGun
        /*subject*/'Asistencia registrada '+this.clase.codigo.toUpperCase()+' '+this.clase.seccion.toUpperCase(),
        /*text*/'Se ha registrado asistencia en la asignatura de '+this.mayusPalabras(this.clase.asignatura)+' ('+this.clase.codigo.toUpperCase()+' '+this.clase.seccion.toUpperCase()+'), para el alumno '+this.mayusPrimeraLetra(this.sesion.nombre)+' '+this.mayusPrimeraLetra(this.sesion.apellido)+', en la fecha '+this.clase.fecha+' a las '+this.clase.hora+'.');
       }
    }

}