import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  clase = {
    asignatura : "Estadistica",
    seccion : "003D",
    docente: "Lesly Perez",
    fecha: "14-08-2019",
    hora: "08:00-10:00",
  }

}
