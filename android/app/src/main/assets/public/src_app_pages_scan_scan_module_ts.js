"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_scan_scan_module_ts"],{

/***/ 5451:
/*!***************************************************!*\
  !*** ./src/app/pages/scan/scan-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageRoutingModule": () => (/* binding */ ScanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.page */ 8749);




const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_0__.ScanPage
    }
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ 2130:
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageModule": () => (/* binding */ ScanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-routing.module */ 5451);
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page */ 8749);







let ScanPageModule = class ScanPageModule {
};
ScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanPageRoutingModule
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_1__.ScanPage]
    })
], ScanPageModule);



/***/ }),

/***/ 8749:
/*!*****************************************!*\
  !*** ./src/app/pages/scan/scan.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPage": () => (/* binding */ ScanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.page.html?ngResource */ 7985);
/* harmony import */ var _scan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page.scss?ngResource */ 5128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sesion.service */ 2555);
/* harmony import */ var src_app_services_bd_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bd-local.service */ 1443);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);




// Servicios



// Plugins

let ScanPage = class ScanPage {
    constructor(scanner, api, bdlocal, sesion) {
        this.scanner = scanner;
        this.api = api;
        this.bdlocal = bdlocal;
        this.sesion = sesion;
        this.clase = {
            codigo: " ",
            asignatura: " ",
            seccion: " ",
            profesor: " ",
            fecha: " ",
            hora: " ",
        };
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.startScan();
    }
    validarHorario(hra_ini, min_ini, hra_ter, min_ter) {
        let fecha = new Date();
        let hora = fecha.getHours();
        let min = fecha.getMinutes();
        if (hora >= hra_ini && min >= min_ini && hora < hra_ter || hora == hra_ter && min <= min_ter) {
            return true;
        }
        else {
            return false;
        }
    }
    matchClass() {
        this.api.getAsignaturas().subscribe((data) => {
            this.asignaturas = data.asignatura;
            console.log(data);
            let hoy = new Date().getDay();
            console.log(hoy);
            for (let i = 0; i < this.asignaturas.length; i++) {
                //for (let j = 0; j < this.asignaturas[i].horario.length; j++) {
                if (this.asignaturas[i].codigo.toUpperCase() == this.code.toUpperCase()) { // && this.asignaturas[i].horario[j].dia == hoy
                    //if (this.validarHorario(this.asignaturas[i].horario[0].hra_ini, this.asignaturas[i].horario[0].min_ini, this.asignaturas[i].horario[0].hra_ter, this.asignaturas[i].horario[0].min_ter)) {
                    this.clase.codigo = this.asignaturas[i].codigo;
                    this.clase.asignatura = this.asignaturas[i].nombre;
                    this.clase.seccion = this.asignaturas[i].seccion;
                    this.clase.profesor = this.asignaturas[i].profesor;
                    this.clase.fecha = new Date().toLocaleDateString();
                    this.clase.hora = new Date().toLocaleTimeString();
                    //} else {
                    // alert("No es el horario de la clase");
                    //}
                }
                //}
            }
        });
    }
    startScan() {
        this.scanner.scan().then(barcodeData => {
            this.code = barcodeData.text;
            this.matchClass();
        }).catch(err => {
            console.log('Error de this.scanner.scan() linea 87', err);
        });
    }
    registrarAsistencia() {
        let idAsistencia = this.bdlocal.generarIdAsistencia(this.clase.codigo, this.clase.fecha);
        let alumno = this.sesion.correo;
        this.bdlocal.guardarAsistencia(idAsistencia, alumno, this.clase.codigo, this.clase.seccion, this.clase.fecha, this.clase.hora, true);
    }
};
ScanPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__.BarcodeScanner },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_bd_local_service__WEBPACK_IMPORTED_MODULE_4__.BdLocalService },
    { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_3__.SesionService }
];
ScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-scan',
        template: _scan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanPage);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8919);




let ApiService = class ApiService {
    //apiURL = 'http://192.168.0.6:3000'; // Ejecuta json-server -H ip .\db.json para ejecutar un Fake APIRest
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }; // Se establece la base url del API a consumir
        this.apiURL = 'https://pcortesduoc.github.io/movilApi/clase.json'; // Fuente Original funciona solo get
    }
    getAsignaturas() {
        return this.http.get(this.apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
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
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 5128:
/*!******************************************************!*\
  !*** ./src/app/pages/scan/scan.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin-top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNjYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOjMwJTtcbn0iXX0= */";

/***/ }),

/***/ 7985:
/*!******************************************************!*\
  !*** ./src/app/pages/scan/scan.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        Tu clase es:\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-center\">\n      <ion-item>\n        <ion-label position=\"stacked\">Asignatura:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.asignatura | titlecase }}\" readonly></ion-input>\n        <ion-label position=\"stacked\">Secci&oacute;n:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.seccion | uppercase }}\" readonly></ion-input>\n        <ion-label position=\"stacked\"> Docente:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.profesor | titlecase }}\" readonly></ion-input>\n        <ion-label position=\"stacked\"> Fecha:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.fecha }}\" readonly></ion-input>\n        <ion-label position=\"stacked\"> Hora:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.hora }}\" readonly></ion-input>\n      </ion-item>\n    </ion-card-content>\n    <ion-button color=\"tertiary\" expand=\"block\" (click)=\"registrarAsistencia()\" [routerLink]=\"['/home']\">Registrar Asistencia</ion-button>\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"startScan()\">Escanear Nuevamente</ion-button>\n    <ion-button color=\"medium\" expand=\"block\" [routerLink]=\"['/home']\">Cancelar</ion-button>\n  </ion-card>\n</ion-content>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_scan_scan_module_ts.js.map