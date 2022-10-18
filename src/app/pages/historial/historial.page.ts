import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Servicios
import { ApiService } from 'src/app/services/api.service';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  listaAsistencia: any;

  constructor(
    private router: Router, 
    private api: ApiService,
    private bdlocal: BdLocalService) { 

    this.router.navigate(['historial/menu'])
  }

  borrarHistorial(){
    this.bdlocal.borrarAsistencias();
    this.listaAsistencia = this.bdlocal.obtenerAsistencias();
  }

  ionViewWillEnter(){
    this.listaAsistencia = this.bdlocal.obtenerAsistencias();
  }

  ngOnInit(): void { }

  // getUsuario(userId){
  //   this.api.getUsuario(userId).subscribe((data)=>{
  //     console.log(data)
  //     this.user=data;
  //   });
  // }

  // getPosts(){
  //   this.api.getPosts().subscribe((data)=>{
  //     this.posts=data;
  //     this.posts.reverse();
  //   });
  // }

  // guardarPost(){
  //   if(this.post.userId==null){
  //     if(this.user==undefined){
  //       console.log("Seleccione un usuario");
  //       return;
  //     }
  //     this.post.userId=this.user.id;
  //     this.api.createPost(this.post).subscribe(
  //       ()=>{
  //         console.log("Creado Correctamente");
  //         this.getPosts();
  //       },
  //       error=>{
  //         console.log("Error "+error)
  //       }
  //     );
  //   }
  //   else{
  //     this.api.updatePost(this.post.id,this.post).subscribe(
  //       ()=>{
  //         console.log("Actualzado Correctamente");
  //         this.getPosts();
  //       },
  //       error=>{
  //         console.log("Error "+error)
  //       }
  //    );
  //   }
  // }

  // setPost(_post){
  //   this.post=_post;
  //   this.getUsuario(_post.userId);
  //   this.compareWith = this.compareWithFn;
  // }

  // eleminarPost(_post){
  //   console.log("eeliminar")
  //  this.api.deletePost(_post.id).subscribe(
  //     success=>{
  //       console.log("Eliminado correctamente");
  //       this.getPosts();
  //     },
  //     error=>{
  //       console.log("Error "+error)
  //     }
  //   )
  // }

  // compareWithFn = (o1, o2) => {
  //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
  // };

}
 