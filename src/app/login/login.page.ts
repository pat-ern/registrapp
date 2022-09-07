import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Inicializar los datos a guardar de la pagina, con un valor inicial vacio
  user={
    email:"",
    password:""
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
    {tipo: 'maxLength', mensaje: 'Maximo 15 caracteres'}
  ]
  loginForm= new FormGroup({
    emailForm: new FormControl('',[Validators.required]),
    passForm: new FormControl('',[Validators.required,Validators.maxLength(5)]),
  });

  constructor(private router: Router) { }

  ngOnInit() {
    /*
    this.user.email = '';
    this.user.password = '';
    console.log(this.user)
    console.log("^^^^login on init")
    */
  }

  ionViewWillEnter(){
    this.user={
      email:"",
      password:""
    }
  }

  //funcion para guardar datos del formulario en state, navegar a otra pagina y llevar esos datos con navigation extras
  login(){
    this.isSubmitted = true;
    if(!this.loginForm.valid){
      return false;
    } else {
      let NavigationExtras: NavigationExtras = {
        state: {
          user: this.user
        }
      };
      this.router.navigate(['/home'],NavigationExtras)
    }
    
  }

  ngOnDestroy(){
    console.log("login on destroy")
  }

}
