import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuarios } from './modelo';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public database: SQLiteObject;

  tablaUsuarios: string = "CREATE TABLE IF NOT EXISTS Usuarios(id INTEGER PRIMARY KEY autoincrement, usuario VARCHAR(50) NOT NULL, contrasena TEXT NOT NULL);";
  registro: string = "INSERT or IGNORE INTO Usuarios(usuario, contrasena) VALUES ('usuario Usuarios', 'contrasena de la Usuarios que se quiere mostrar');";
  listaUsuarios = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();

  }

  addUsuarios(usuario,contrasena){
    let data=[usuario,contrasena];
    return this.database.executeSql('INSERT INTO Usuarios(usuario,contrasena) VALUES(?,?)',data)
    .then(res =>{
      this.buscarUsuarios();
    })

  }

  updateUsuarios(usuario, contrasena){
    let data = [usuario, contrasena];
    return this.database.executeSql('UPDATE Usuarios SET usuario = ?, contrasena = ? WHERE id = ?', data)
    .then(data2 =>{
      this.buscarUsuarios();
    })

  }

  deleteUsuarios(id){
    return this.database.executeSql('DELETE FROM Usuarios WHERE id = ?', [id])
    .then(a =>{
      this.buscarUsuarios();
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
      await this.database.executeSql(this.tablaUsuarios, []);
      await this.database.executeSql(this.registro, []);
      this.presentToast("Tabla Creada");
      this.buscarUsuarios();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentToast("error creartabla " + e);
    }
  }

  buscarUsuarios() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM Usuarios', []).then(res => {
      let items: Usuarios[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) {
          //this.presentAlert("d");
          items.push({
            //id: res.rows.item(i).id,
            usuario: res.rows.item(i).usuario,
            contrasena: res.rows.item(i).contrasena
          });
        }
      }
      //this.presentAlert("d");
      this.listaUsuarios.next(items);
    });
  }

  fetchUsuarios(): Observable<Usuarios[]> {
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