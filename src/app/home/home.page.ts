import { Component, ElementRef, ViewChild  } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('titulo', { read: ElementRef, static: true }) titulo: ElementRef;
  @ViewChild('qr', { read: ElementRef, static: true }) qr: ElementRef;

  data: any; //variable que puede recibir cualquier valor, para recibir email y password

  constructor(private menu: MenuController, private router: Router, private activatedRoute: ActivatedRoute, private animationCtrl: AnimationController) { 

  this.activatedRoute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state){
      this.data = router.getCurrentNavigation().extras.state.user;
      console.log(this.data)
      console.log("^^^^if")
      this.router.navigate(['home/menu'])
    } else{
      console.log(this.data)
      console.log("^^^^else")
      /*
      this.router.navigate(["/login"])
      */
    }
  });
  }

  ngAfterViewInit() {
    const titulo = this.animationCtrl.create()
      .addElement(this.titulo.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1) rotate(0)', opacity: '0.1'  },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    const qr = this.animationCtrl.create()
      .addElement(this.qr.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1.2) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)'},
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    const animacion = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([titulo, qr]);
      //.addAnimation([hola1, squareA, squareB, squareC, otra]);

    animacion.play();
  }

  user={
    email:"",
    password:""
  }

  
  ngOnDestroy(){
    /*
    this.user.email = '';
    this.user.password = '';
    let NavigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    console.log(this.user)
    */
    console.log("home on destroy")
    /*
    this.router.navigate(['/login'],NavigationExtras)
    */
  }
  
}
