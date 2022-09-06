import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  ngOnInit() {
  }

}
