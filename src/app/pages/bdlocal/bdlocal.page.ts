import { Component } from '@angular/core';
import { BdLocalService } from '../../services/bd-local.service';

@Component({
  selector: 'app-bdlocal',
  templateUrl: 'bdlocal.page.html',
  styleUrls: ['bdlocal.page.scss'],
})

export class BdlocalPage {

  nombre:string;
  nro:string;

  constructor(public bdlocalservice: BdLocalService) {}

  guardar(){
    this.bdlocalservice.guardarContacto(this.nombre,this.nro)
  }

}