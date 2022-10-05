import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Animation, AnimationController } from '@ionic/angular';

import { BdLocalService } from '../../services/bd-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('logo', { read: ElementRef, static: true }) logo: ElementRef;

  //Inicializar los datos a guardar de la pagina, con un valor inicial vacio
  user={
    email:"",
    password:""
  }

  usuario1={
    email:"p.cortes@duocuc.cl",
    password:"123456789"
  }

  usuario2={
    email:"correo@correo.com",
    password:"asdf"
  }

  isSubmitted = false;

  /*
  data: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.data = router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }else{
        this.router.navigate(["/login"])
      }
    });
   }*/

  errores=[
    {tipo: 'required', mensaje: 'Campo no debe estar vacio'},
    {tipo: 'maxLength', mensaje: 'Maximo 15 caracteres'},
  ]
  loginForm= new FormGroup({
    emailForm: new FormControl('',[Validators.required]),
    passForm: new FormControl('',[Validators.required]),
  });

  constructor(
    private router: Router, 
    private animationCtrl: AnimationController,
    private bdlocalservice: BdLocalService) { }

  ngOnInit() {
    
    /*
    this.user.email = '';
    this.user.password = '';
    console.log(this.user)
    console.log("^^^^login on init")
    */
  }

  ngAfterViewInit() {
    /*
    const otra = this.animationCtrl.create()
      .addElement(this.otra.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(150px)')
      .fromTo('opacity', '1', '0.5');
    */

    const logo = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(0)', opacity: '0.3'  },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

      /*
    const squareB = this.animationCtrl.create()
      .addElement(this.squareB.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);

    const squareC = this.animationCtrl.create()
      .addElement(this.squareC.nativeElement)
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' }
      ]);

    const hola1 = this.animationCtrl
      .create()
      .addElement(this.hola1.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, background: 'yellow' },
        { offset: 0.72, background: 'var(--background)' },
        { offset: 1, background: 'purple' }
      ]);
      */

    const animacion = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([logo]);
      //.addAnimation([hola1, squareA, squareB, squareC, otra]);

    animacion.play();
  }

  ionViewWillEnter(){
    this.user={
      email:"",
      password:""
    }
  }

  datosError="Usuario y contraseña no coinciden"
  errorBoolean=false;
  //funcion para guardar datos del formulario en state, navegar a otra pagina y llevar esos datos con navigation extras
  login(){
    this.errorBoolean=false;
    this.isSubmitted = true;
    if(!this.loginForm.valid){
      return false;
    } else {
      let NavigationExtras: NavigationExtras = {
        state: {
          user: this.user
        }
      };

      let usuario = this.bdlocalservice.obtenerUsuario(this.user.email);

      if(usuario == null){
        this.errorBoolean=true;
        this.datosError="Usuario no existe"
      } else {
        if(usuario.strContrasena == this.user.password){
          this.router.navigate(["/home"], NavigationExtras);
        } else {
          this.errorBoolean=true;
          this.datosError="Usuario y contraseña no coinciden"
        }

      //if(this.user.email==this.usuario1.email && this.user.password==this.usuario1.password || this.user.email==this.usuario2.email && this.user.password==this.usuario2.password){
      //  this.router.navigate(['/home'],NavigationExtras)
      //} else {
      //  this.errorBoolean=true;
      //  //console.log("error")
      }
      
    }
    
  }

  ngOnDestroy(){
    console.log("login on destroy")
  }

}
