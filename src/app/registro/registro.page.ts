import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = "";
  contrasena = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.dbservice.addUsuarios(this.usuario,this.contrasena);
    this.dbservice.presentToast("Usuario Agregado");
    this.router.navigate(['/login']);
    console.log('Formulario enviado');

  }

}
