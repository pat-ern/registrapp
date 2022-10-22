import { Component, ElementRef, ViewChild  } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // Decoradores de elementos del DOM
  @ViewChild('titulo', { read: ElementRef, static: true }) titulo: ElementRef;
  @ViewChild('qr', { read: ElementRef, static: true }) qr: ElementRef;

  //variable para almacenar usuario con correo y contraseña que vienen de login
  usuario: any; 

  // correo a mostrar en home
  correo: string = this.sesion.correo;

  constructor(
    private menu: MenuController, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private animationCtrl: AnimationController,
    private sesion: SesionService
    ) { 

  this.activatedRoute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state){
      this.usuario = router.getCurrentNavigation().extras.state.user;
      console.log('Se recibieron los datos del usuario '+this.usuario.correo+' en la pagina home');
      this.router.navigate(['home/menu'])
    } else{
      console.log('No se recibieron datos del usuario en la pagina home');
      this.router.navigate(['home/menu'])
    }
  });

  } // fin constructor

  ngAfterViewInit() {

    

    // Animacion de titulo
    const titulo = this.animationCtrl.create()
      .addElement(this.titulo.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1) rotate(0)', opacity: '0.1'  },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    // Animacion de qr
    const qr = this.animationCtrl.create()
      .addElement(this.qr.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1.2) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)'},
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    // Animacion de titulo y qr
    const animacion = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([titulo, qr]);
      //.addAnimation([hola1, squareA, squareB, squareC, otra]);

    animacion.play();

  }
  
}
