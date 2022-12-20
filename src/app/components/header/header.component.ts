import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  nombre = this.sesion.usuario.nombre;
  apellido = this.sesion.usuario.apellido;

  constructor(private sesion: SesionService, private router: Router) { }

  ngOnInit() { }

  cuenta() {
    this.router.navigate(['/cuenta']);
  }

}
