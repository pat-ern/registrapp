import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(private toastController: ToastController) { }

  user={
    email:""
  }

  usuario1={
    email:"p.cortes@duocuc.cl",
    password:"123456789"
  }

  usuario2={
    email:"correo@correo.com",
    password:"asdf"
  }

  errores=[
    {tipo: 'required', mensaje: 'Campo no debe estar vacio'},
  ]
  recuperarForm= new FormGroup({
    emailForm: new FormControl('',[Validators.required]),
  });

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Se ha enviado código de confirmación a '+this.user.email,
      duration: 4000,
      position: position,
      icon: 'mail',
      //cssClass: 'custom-toast',
      color: "dark"
    });

    await toast.present();
  }

  datosError="Ese correo no esta registrado"
  errorBoolean=false;
  verificar(){
    this.errorBoolean=false;
    if(!this.recuperarForm.valid){
      return false;
    } else {
      if(this.user.email==this.usuario1.email || this.user.email==this.usuario2.email){
        this.presentToast('bottom');
      } else {
        this.errorBoolean=true;
      }
    }
  }

  

  ngOnInit() {
  }

}
