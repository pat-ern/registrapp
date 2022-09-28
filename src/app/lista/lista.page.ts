import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  usuarios: any = [
    {
      titulo: "correo del usuario",
      texto: "contrasena del usuario"
    }
  ]

  constructor(private router: Router, private servicioBD: DbserviceService) { }

  ngOnInit(){
    //this.servicioBD.presentAlert("1");
    this.servicioBD.dbState().subscribe((res) =>{
      //this.servicioBD.presentAlert("2");
      if(res){
        //this.servicioBD.presentAlert("3");
        this.servicioBD.fetchUsuarios().subscribe(item =>{
          this.usuarios = item;
        })
      }
      //this.servicioBD.presentAlert("4");
    });
  }


  getItem($event) {
    const valor = $event.target.value;
    console.log('valor del control: ' + valor);

  }

  agregar() {

  }

  editar(item) {
    this.servicioBD.presentToast("Hola");
    let navigationextras: NavigationExtras = {
      state : {
        idEnviado : item.id,
        tituloEnviado : item.titulo,
        textoEnviado : item.texto
      }
    }
    this.servicioBD.presentToast("Aqui");
    this.router.navigate(['/modificar'],navigationextras);

  }

  eliminar(item) {
    this.servicioBD.deleteUsuario(item.id);
    this.servicioBD.presentToast("Noticia Eliminada");
  }

}
