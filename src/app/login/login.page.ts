import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

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
   }//debe instanciar router para poder usarlo

  ngOnInit() {
    this.user.email = '';
    this.user.password = '';
    console.log(this.user)
    console.log("^^^^login on init")
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

  ngOnDestroy(){
    console.log("login on destroy")
  }

}
