import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  clase = {
    asignatura : "Estadistica",
    seccion : "003D",
    docente: "Lesly Perez",
    fecha: "14-08-2019",
    hora: "08:00-10:00",
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Tu asistencia ha sido registrada',
      duration: 4000,
      position: position,
      icon: 'checkmark-circle-outline',
      //cssClass: 'custom-toast',
      color: "dark"
    });

    await toast.present();
  }

}
