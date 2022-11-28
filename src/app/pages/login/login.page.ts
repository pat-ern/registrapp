import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AnimationController, MenuController } from '@ionic/angular';

// Servicios
import { SesionService } from '../../services/sesion.service';
import { ApiUsuarioService } from 'src/app/services/api-usuario.service';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild('logo', { read: ElementRef, static: true }) logo: ElementRef;

  usuario = {
    correo: "",
    contrasena: ""
  }

  isSubmitted = false;

  errores = [
    {tipo: 'required', mensaje: 'Campo no debe estar vacio'},
    {tipo: 'maxLength', mensaje: 'Maximo 15 caracteres'},
  ]
  
  loginForm = new FormGroup({
    emailForm: new FormControl('',[Validators.required]),
    passForm: new FormControl('',[Validators.required]),
  });

  constructor(
    private router: Router, 
    private animationCtrl: AnimationController,
    private sesion: SesionService,
    private api: ApiUsuarioService,
    private platform: Platform,
    private menuCtrl: MenuController
    ) { }

  ngOnInit() {
    this.api.getUsuarios();
  }

  ionViewWillEnter(){
    this.usuario = {
      correo: "",
      contrasena: ""
    }
    this.menuCtrl.enable(false);
    console.log("Menu deshabilitado");
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

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
    console.log("Menu habilitado");
  }

  // Login
  datosError = "Usuario y contraseña no coinciden"
  errorBoolean = false;

  login(){
    this.reinicioErrores();
    this.validarFormulario();
  }

  validarFormulario(){
    if(!this.loginForm.valid){
      return false;
    } else {
      this.validarUsuario();
    }
  }

  validarUsuario(){
    if(this.api.usuarioExiste(this.usuario.correo)){
      this.validarContrasena();
    } else {
      this.errorUsuario();
    }
  }

  validarContrasena(){
    let pass = this.api.consultarContrasena(this.usuario.correo);
    if(pass == this.usuario.contrasena){
      this.generarSesion();
      this.navigateHome();
    } else {
      this.errorContrasena();
    }
  }

  generarSesion(){
    let user = this.api.consultarUsuario(this.usuario.correo);
    this.sesion.guardarSesion(user);
  }

  navigateHome(){
    this.router.navigate(["/home"]);
  }

  reinicioErrores(){
    this.errorBoolean = false;
    this.isSubmitted = true;
  }

  errorUsuario(){
    this.errorBoolean = true;
    this.datosError = "Usuario no existe"
  }

  errorContrasena(){
    this.errorBoolean = true;
    this.datosError = "Usuario y contraseña no coinciden"
  }

}