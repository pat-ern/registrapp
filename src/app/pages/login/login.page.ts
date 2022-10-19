import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AnimationController } from '@ionic/angular';

// Servicios
import { SesionService } from '../../services/sesion.service';
import { ApiUsuarioService } from 'src/app/services/api-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild('logo', { read: ElementRef, static: true }) logo: ElementRef;

  usuario={
    correo:"",
    contrasena:""
  }

  isSubmitted = false;

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
    private sesion: SesionService,
    private api: ApiUsuarioService,) { }

  ngOnInit() {
    this.api.funcionGet();
  }

  ionViewWillEnter(){
    this.usuario={
      correo:"",
      contrasena:""
    }
  }

  ngAfterViewInit() {
    // Animacion logo
    const logo = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(0)', opacity: '0.3'  },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);
    const animacion = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([logo]);
    animacion.play();
  }

  ngOnDestroy(){
    console.log("login on destroy")
  }

  // Login

  datosError="Usuario y contraseña no coinciden"
  errorBoolean=false;

  login(){
    let usuariobd = this.api.consultarUsuario(this.usuario.correo);
      console.log(usuariobd)
    this.errorBoolean=false;
    this.isSubmitted = true;
    if(!this.loginForm.valid){
      return false;
    } else {
      let NavigationExtras: NavigationExtras = {
        state: {
          user: this.usuario
        }
      };

      // se consulta por usuario mediante servicio
      

      if(usuariobd == null){
        this.errorBoolean=true;
        this.datosError="Usuario no existe"
      } else {
        console.log(usuariobd.contrasena)
        console.log(this.usuario.contrasena)
        if(usuariobd.contrasena == this.usuario.contrasena){
          // se guardan datos de usuario en servicio
          this.sesion.guardarSesion(usuariobd.id,usuariobd.nombre,usuariobd.apellido,usuariobd.correo);
          
          // navegar a home
          this.router.navigate(["/home"], NavigationExtras);
        } else {
          this.errorBoolean=true;
          this.datosError="Usuario y contraseña no coinciden"
        }

      }
      
    }
    
  }
  // fin login

}