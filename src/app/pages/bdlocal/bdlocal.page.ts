import { Component } from '@angular/core';
import { BdLocalService } from '../../services/bd-local.service';

@Component({
  selector: 'app-bdlocal',
  templateUrl: 'bdlocal.page.html',
  styleUrls: ['bdlocal.page.scss'],
})

export class BdlocalPage {

  nombre:string;
  apellido:string;
  correo:string;
  contrasena:string;

  nombrecompleto:string;

  constructor(public bdlocalservice: BdLocalService) {}

  guardar(){
    let id = this.bdlocalservice.generarIdUsuario();
    this.bdlocalservice.guardarContacto(id,this.nombre, this.apellido, this.correo, this.contrasena)
  }

  obtener(){
    let usuario = this.bdlocalservice.obtenerUsuario(this.correo);
    this.nombrecompleto = usuario.strNombre + " " + usuario.strApellido;
  }

}