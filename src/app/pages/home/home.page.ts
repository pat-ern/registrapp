import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('titulo', { read: ElementRef, static: true }) titulo: ElementRef;
  @ViewChild('qr', { read: ElementRef, static: true }) qr: ElementRef;

  usuario: any;
  // correo: string = this.sesion.usuario.correo;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animationCtrl: AnimationController
  ) {

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = router.getCurrentNavigation().extras.state.user;
      }
    });

  }

  ngAfterViewInit() {

    const titulo = this.animationCtrl.create()
      .addElement(this.titulo.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1) rotate(0)', opacity: '0.1' },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    const qr = this.animationCtrl.create()
      .addElement(this.qr.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1.2) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    const animacion = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([titulo, qr]);

    animacion.play();

  }

}
