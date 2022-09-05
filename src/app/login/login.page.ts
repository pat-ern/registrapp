import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

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

  constructor(private router: Router) { }//debe instanciar router para poder usarlo

  ngOnInit() {
  }

  //funcion para guardar datos del formulario en state, navegar a otra pagina y llevar esos datos con navigation extras
  login(){
    let NavigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/home'],NavigationExtras)
  }

}
