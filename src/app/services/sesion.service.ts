import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  correoUsuario: String = 'Usuario en pagina cuenta';

  constructor() { }

  public guardarCorreo(correo: string) {
    this.correoUsuario = correo;
    console.log('Correo guardado en sesion');
  }
  
}
