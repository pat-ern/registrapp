(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_acceso_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/acceso.guard */ 2667);




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'reset',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reset_reset_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reset/reset.module */ 7742)).then(m => m.ResetPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_boton-menu_boton-menu_component_ts-node_modules_angular_material_f-52edac"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule),
        canActivate: [_guards_acceso_guard__WEBPACK_IMPORTED_MODULE_0__.AccesoGuard]
    },
    {
        path: 'historial',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_boton-menu_boton-menu_component_ts-node_modules_angular_material_f-52edac"), __webpack_require__.e("src_app_pages_historial_historial_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/historial/historial.module */ 8571)).then(m => m.HistorialPageModule),
        canActivate: [_guards_acceso_guard__WEBPACK_IMPORTED_MODULE_0__.AccesoGuard]
    },
    {
        path: 'cuenta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_boton-menu_boton-menu_component_ts-node_modules_angular_material_f-52edac"), __webpack_require__.e("src_app_pages_cuenta_cuenta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cuenta/cuenta.module */ 4178)).then(m => m.CuentaPageModule),
        canActivate: [_guards_acceso_guard__WEBPACK_IMPORTED_MODULE_0__.AccesoGuard]
    },
    {
        path: 'scan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_scan_scan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scan/scan.module */ 2130)).then(m => m.ScanPageModule),
        canActivate: [_guards_acceso_guard__WEBPACK_IMPORTED_MODULE_0__.AccesoGuard]
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/not-found/not-found.module */ 6470)).then(m => m.NotFoundPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let AppComponent = class AppComponent {
    constructor(menu, router) {
        this.menu = menu;
        this.router = router;
    }
    goToScanPage() {
        this.menu.close();
        this.router.navigate(['/scan']);
    }
    goToHistorialPage() {
        this.menu.close();
        this.router.navigate(['/historial']);
    }
    goToSettingsPage() {
        this.menu.close();
        this.router.navigate(['/settings']);
    }
    goToCuentaPage() {
        this.menu.close();
        this.router.navigate(['/cuenta']);
    }
    goToLoginPage() {
        this.menu.close();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 2154);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/sesion.service */ 2555);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);










// Base de datos sqlite y localstorage


// Servicios locales

// Plugin scanner (ejemplo youtube)

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.IonicStorageModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy },
            _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__.SQLite,
            _services_sesion_service__WEBPACK_IMPORTED_MODULE_3__.SesionService,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
    })
], AppModule);



/***/ }),

/***/ 2667:
/*!****************************************!*\
  !*** ./src/app/guards/acceso.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccesoGuard": () => (/* binding */ AccesoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sesion.service */ 2555);



// servicios

let AccesoGuard = class AccesoGuard {
    constructor(router, sesion) {
        this.router = router;
        this.sesion = sesion;
    }
    canActivate(route, state) {
        if (this.sesion.activa) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            console.log('Debes iniciar sesion');
            return false;
        }
    }
};
AccesoGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_0__.SesionService }
];
AccesoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AccesoGuard);



/***/ }),

/***/ 4028:
/*!*************************************************!*\
  !*** ./src/app/services/api-usuario.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUsuarioService": () => (/* binding */ ApiUsuarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8919);




let ApiUsuarioService = class ApiUsuarioService {
    //apiURL = 'http://192.168.0.6:3000'; // Ejecuta json-server -H ip .\db.json para ejecutar un Fake APIRest
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }; // Se establece la base url del API a consumir
        this.apiURL = 'https://pcortesduoc.github.io/movilApi/usuario.json'; // Fuente Original funciona solo get
        this.usuario = {
            id: null,
            run: null,
            dv: " ",
            nombre: " ",
            apellido: " ",
            carrera: " ",
            correo: " ",
            contrasena: " ",
        };
    }
    getUsuarios() {
        return this.http.get(this.apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    funcionGet() {
        this.getUsuarios().subscribe((data) => {
            this.usuarios = data.usuario;
        });
    }
    consultarUsuario(correo) {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (correo === this.usuarios[i].correo) {
                this.usuario.id = this.usuarios[i].id;
                this.usuario.run = this.usuarios[i].run;
                this.usuario.dv = this.usuarios[i].dv;
                this.usuario.nombre = this.usuarios[i].nombre;
                this.usuario.apellido = this.usuarios[i].apellido;
                this.usuario.carrera = this.usuarios[i].carrera;
                this.usuario.correo = this.usuarios[i].correo;
                this.usuario.contrasena = this.usuarios[i].contrasena;
            }
        }
        return this.usuario;
    }
    // otros metodos
    getPosts() {
        return this.http.get(this.apiURL + '/posts/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getPost(id) {
        return this.http.get(this.apiURL + '/posts/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    createPost(post) {
        return this.http.post(this.apiURL + '/posts', post, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    updatePost(id, post) {
        return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    deletePost(id) {
        return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
    }
};
ApiUsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiUsuarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApiUsuarioService);



/***/ }),

/***/ 1443:
/*!**********************************************!*\
  !*** ./src/app/services/bd-local.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BdLocalService": () => (/* binding */ BdLocalService)
/* harmony export */ });
/* harmony import */ var _Users_patricio_Documents_GitHub_registrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 190);





let BdLocalService = class BdLocalService {
  constructor(storage, toastController) {
    this.storage = storage;
    this.toastController = toastController;
    this.asistencia = [];
    this._storage = null;
    this.init();
    this.cargarAsistencia();
  }

  guardarAsistencia(id, alumno, asignatura, seccion, fecha, hora, presente) {
    const existe = this.asistencia.find(c => c.strIdAsistencia === id);

    if (id.length <= 2) {
      this.presentToast("Error al ingresar asistencia, intentar en el emulador");
    } else {
      if (!existe) {
        this.asistencia.unshift({
          strIdAsistencia: id,
          strAlumno: alumno,
          strAsignatura: asignatura,
          strSeccion: seccion,
          strFecha: fecha,
          strHora: hora,
          estaPresente: presente
        });

        this._storage.set('asistencia', this.asistencia);

        this.presentToast("Asistencia registrada con exito.");
      } else {
        this.presentToast("Error. Asistencia ya fue registrada hoy.");
      }
    }
  }

  obtenerAsistencias() {
    let listaAsistencias = [];

    for (let i = 0; i < this.asistencia.length; i++) {
      listaAsistencias.push(this.asistencia[i]);
    }

    return listaAsistencias;
  }

  generarIdAsistencia(asignatura, fecha) {
    let id = asignatura + fecha;
    return id;
  }

  borrarAsistencias() {
    this.asistencia = [];

    this._storage.set('asistencia', this.asistencia);

    this.presentToast("Historial borrado con exito.");
  } //


  cargarAsistencia() {
    var _this = this;

    return (0,_Users_patricio_Documents_GitHub_registrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const miAsistencia = yield _this.storage.get('asistencia');

      if (miAsistencia) {
        _this.asistencia = miAsistencia;
      }
    })();
  } // genericos


  init() {
    var _this2 = this;

    return (0,_Users_patricio_Documents_GitHub_registrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = yield _this2.storage.create();
      _this2._storage = storage;
    })();
  }

  presentToast(mensaje) {
    var _this3 = this;

    return (0,_Users_patricio_Documents_GitHub_registrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: mensaje,
        translucent: true,
        color: 'medium',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    })();
  }

};

BdLocalService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
}];

BdLocalService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], BdLocalService);


/***/ }),

/***/ 2555:
/*!********************************************!*\
  !*** ./src/app/services/sesion.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionService": () => (/* binding */ SesionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _bd_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bd-local.service */ 1443);
/* harmony import */ var src_app_services_api_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-usuario.service */ 4028);




let SesionService = class SesionService {
    constructor(bdlocalservice, api) {
        this.bdlocalservice = bdlocalservice;
        this.api = api;
        this.activa = false;
        // variables de usuario rescatado de API
        this.usuario = {
            id: null,
            run: null,
            dv: " ",
            nombre: " ",
            apellido: " ",
            carrera: " ",
            correo: " ",
            contrasena: " ",
        };
    }
    // solo dentro del servicio se consulta a la api y se guarda en la variable usuario
    consultarUsuario(correo) {
        this.api.getUsuarios().subscribe((data) => {
            this.usuarios = data.usuario;
            console.log(data.usuario);
            for (let i = 0; i < this.usuarios.length; i++) {
                if (correo === this.usuarios[i].correo) {
                    this.usuario.id = this.usuarios[i].id;
                    this.usuario.run = this.usuarios[i].run;
                    this.usuario.dv = this.usuarios[i].dv;
                    this.usuario.nombre = this.usuarios[i].nombre;
                    this.usuario.apellido = this.usuarios[i].apellido;
                    this.usuario.carrera = this.usuarios[i].carrera;
                    this.usuario.correo = this.usuarios[i].correo;
                    this.usuario.contrasena = this.usuarios[i].contrasena;
                    console.log(this.usuarios[i]);
                }
            }
        });
        console.log(this.usuario);
        return this.usuario;
    }
    // este metodo se llama desde el login para guardar los datos de sesion
    guardarSesion(id, nombre, apellido, correo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.activa = true;
        console.log('Se almaceno el usuario ' + this.correo + ' en la sesion');
    }
};
SesionService.ctorParameters = () => [
    { type: _bd_local_service__WEBPACK_IMPORTED_MODULE_0__.BdLocalService },
    { type: src_app_services_api_usuario_service__WEBPACK_IMPORTED_MODULE_1__.ApiUsuarioService }
];
SesionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SesionService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans\");\n@import url(\"https://fonts.googleapis.com/css2?family=Contrail+One\");\n@import url(\"https://fonts.googleapis.com/css2?family=VT323\");\n@import url(\"https://fonts.googleapis.com/css2?family=Share+Tech+Mono\");\nion-menu > ion-content > ion-list > a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpRUFBQTtBQUNBLG9FQUFBO0FBQ0EsNkRBQUE7QUFDQSx1RUFBQTtBQUVSO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbnRyYWlsK09uZScpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoYXJlK1RlY2grTW9ubycpO1xuXG5pb24tbWVudSA+IGlvbi1jb250ZW50ID4gaW9uLWxpc3QgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSAiXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n\n  <ion-menu contentId=\"main-content\" menuId=\"main-content\" side=\"start\" type=\"overlay\">\n    <ion-header>\n      <ion-toolbar color=\"tertiary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <ion-list>\n        <a (click)=\"goToScanPage()\"><ion-item><ion-icon name=\"qr-code-outline\"></ion-icon>&nbsp;Escanear codigo QR</ion-item></a>\n        <a (click)=\"goToHistorialPage()\"><ion-item><ion-icon name=\"calendar-outline\"></ion-icon>&nbsp;Ultimas clases</ion-item></a>\n        <a (click)=\"goToCuentaPage()\"><ion-item><ion-icon name=\"person-circle-outline\"></ion-icon>&nbsp;Cuenta</ion-item></a>\n        <a (click)=\"goToSettingsPage()\"><ion-item><ion-icon name=\"settings-outline\"></ion-icon>&nbsp;Opciones</ion-item></a>\n        <a (click)=\"goToLoginPage()\"><ion-item><ion-icon name=\"log-in-outline\"></ion-icon>&nbsp;Salir</ion-item></a>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map