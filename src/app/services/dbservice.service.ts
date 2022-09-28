import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './modelo';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public database: SQLiteObject;

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS Usuario(correo VARCHAR(30) NOT NULL, contrasena VARCHAR(30) NOT NUL);";
  registro: string = "INSERT or IGNORE INTO Usuario(usuario, contrasena) VALUES ('correo Usuario', 'contrasena de la Usuarios que se quiere mostrar');";
  listaUsuarios = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();

  }

  addUsuarios(correo,contrasena){
    let data=[correo,contrasena];
    return this.database.executeSql('INSERT INTO Usuario(correo,contrasena) VALUES(?,?)',data)
    .then(res =>{
      this.buscarUsuario();
    })

  }

  updateUsuario(correo, contrasena, id){
    let data = [correo, contrasena, id];
    return this.database.executeSql('UPDATE Usuario SET correo = ?, contrasena = ? WHERE id = ?', data)
    .then(data2 =>{
      this.buscarUsuario();
    })

  }

  deleteUsuario(id){
    return this.database.executeSql('DELETE FROM Usuario WHERE id = ?', [id])
    .then(a =>{
      this.buscarUsuario();
    })
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Usuarios3.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD Creada");
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.registro, []);
      this.presentToast("Tabla Creada");
      this.buscarUsuario();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentToast("error creartabla " + e);
    }
  }

  buscarUsuario() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM Usuario', []).then(res => {
      let items: Usuario[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) {
          //this.presentAlert("d");
          items.push({
            //id: res.rows.item(i).id,
            correo: res.rows.item(i).correo,
            contrasena: res.rows.item(i).contrasena
          });
        }
      }
      //this.presentAlert("d");
      this.listaUsuarios.next(items);
    });
  }

  fetchUsuarios(): Observable<Usuario[]> {
    return this.listaUsuarios.asObservable();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}