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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.page.html?ngResource */ 7985);
/* harmony import */ var _scan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page.scss?ngResource */ 5128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sesion.service */ 2555);
/* harmony import */ var src_app_services_bd_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bd-local.service */ 1443);
/* harmony import */ var src_app_services_api_correos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-correos.service */ 9990);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);




// Servicios




// Plugins

let ScanPage = class ScanPage {
    constructor(scanner, api, bdlocal, sesion, apiCorreo) {
        this.scanner = scanner;
        this.api = api;
        this.bdlocal = bdlocal;
        this.sesion = sesion;
        this.apiCorreo = apiCorreo;
        this.clase = {
            codigo: " ",
            asignatura: " ",
            seccion: " ",
            profesor: " ",
            fecha: " ",
            hora: " ",
            correoProf: " ",
        };
        this.codigoComparable = "";
        this.codigoBase = "reg_app_cod";
        this.pageState = 1;
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
                this.codigoComparable = this.codigoBase + "*" + this.asignaturas[i].codigo + "*" + this.asignaturas[i].seccion;
                if (this.codigoComparable.toUpperCase() == this.code.toUpperCase()) { // && this.asignaturas[i].horario[j].dia == hoy
                    //if (this.validarHorario(this.asignaturas[i].horario[0].hra_ini, this.asignaturas[i].horario[0].min_ini, this.asignaturas[i].horario[0].hra_ter, this.asignaturas[i].horario[0].min_ter)) {
                    this.clase.codigo = this.asignaturas[i].codigo;
                    this.clase.asignatura = this.asignaturas[i].nombre;
                    this.clase.seccion = this.asignaturas[i].seccion;
                    this.clase.profesor = this.asignaturas[i].profesor;
                    this.clase.fecha = new Date().toLocaleDateString();
                    this.clase.hora = new Date().toLocaleTimeString();
                    this.clase.correoProf = this.asignaturas[i].correoProf;
                    //} else {
                    // alert("No es el horario de la clase");
                    //}
                }
                //}
            }
        });
    }
    startScan() {
        // force camera permission
        this.pageState = 1;
        this.scanner.scan().then(barcodeData => {
            this.code = barcodeData.text;
            if (this.code.substring(0, 11) == this.codigoBase) {
                this.pageState = 2;
                this.matchClass();
            }
            else {
                this.pageState = 3;
            }
        }).catch(err => {
            console.log('Error', err);
        });
    }
    mayusPrimeraLetra(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }
    mayusPalabras(palabras) {
        //esta funcion toma un string, los separa en un array por cada espacio, en el for le pone mayuscula a la primera letra de cada una y luego las vuelve a unir con un espacio entremedio
        let palSeparadas = palabras.split(" ");
        for (let i = 0; i < palSeparadas.length; i++) {
            palSeparadas[i] = palSeparadas[i][0].toUpperCase() + palSeparadas[i].slice(1);
        }
        return palSeparadas.join(" ");
    }
    registrarAsistencia() {
        let idAsistencia = this.bdlocal.generarIdAsistencia(this.clase.codigo, this.clase.fecha);
        let alumno = this.sesion.usuario.correo;
        let enviar = this.bdlocal.guardarAsistencia(idAsistencia, alumno, this.clase.asignatura, this.clase.codigo, this.clase.seccion, this.clase.fecha, this.clase.hora, true);
        //enviar correo
        if (enviar) { //solo se envia correo si la asistencia no ha sido tomada hoy, segun la validacion de guardarAsistencia()
            this.apiCorreo.enviarCorreo(
            /*from*/ 'asistencia@duocuc.cl', 
            /*to*/ this.clase.correoProf, //El recipiente es el correo del profesor. Ej: ya.villegas@profesor.duoc.cl
            ///*to*/'p.cortes@duocuc.cl', //Para probar, se puede escribir un correo manualmente aqui
            /*cc*/ '', //para agregar mas destinatarios, se deben agregar a los Authorized Recipients en MailGun
            /*subject*/ 'Asistencia registrada ' + this.clase.codigo.toUpperCase() + ' ' + this.clase.seccion.toUpperCase(), 
            /*text*/ 'Se ha registrado asistencia en la asignatura de ' + this.mayusPalabras(this.clase.asignatura) + ' (' + this.clase.codigo.toUpperCase() + ' ' + this.clase.seccion.toUpperCase() + '), para el alumno ' + this.mayusPrimeraLetra(this.sesion.usuario.nombre) + ' ' + this.mayusPrimeraLetra(this.sesion.usuario.apellido) + ', en la fecha ' + this.clase.fecha + ' a las ' + this.clase.hora + '.');
        }
    }
};
ScanPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__.BarcodeScanner },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_bd_local_service__WEBPACK_IMPORTED_MODULE_4__.BdLocalService },
    { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_3__.SesionService },
    { type: src_app_services_api_correos_service__WEBPACK_IMPORTED_MODULE_5__.ApiCorreosService }
];
ScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-scan',
        template: _scan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanPage);



/***/ }),

/***/ 9990:
/*!*************************************************!*\
  !*** ./src/app/services/api-correos.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCorreosService": () => (/* binding */ ApiCorreosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let ApiCorreosService = class ApiCorreosService {
    constructor(http) {
        this.http = http;
        /* no estoy seguro como funciona el httpOptions, tuve que agregar los headers en la funcion manualmente
        httpOptions = {
          headers: new HttpHeaders
            ({
              'Authorization': 'Basic ' + '9fe0a678d85579ad66c05a7c69689aa5-2de3d545-23ea1fbc',
              'Content-Type': 'application/x-www-form-urlencoded'
            })
        }
        */
        this.apiURL = 'https://api.mailgun.net/v3/sandboxf43489a9f7614e84af8f183724d6c85f.mailgun.org/messages'; //hay que agregarle /messages al final del link
        this.apiKey = 'key-c12bf806897e339e387d0515fd70c89e';
    }
    enviarCorreo(from, to, cc, subject, text) {
        return this.http.post(this.apiURL, 'from=' + from + '&to=' + to + '&cc=' + cc + '&subject=' + subject + '&text=' + text, {
            headers: {
                'Authorization': 'Basic ' + btoa('api:' + this.apiKey),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }
};
ApiCorreosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiCorreosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApiCorreosService);



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
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.apiURL = 'https://pcortesduoc.github.io/movilApi/clase.json';
    }
    getAsignaturas() {
        return this.http.get(this.apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
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

module.exports = "ion-card {\n  margin-top: 5%;\n}\n\nion-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUYiLCJmaWxlIjoic2Nhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6NSU7XG59XG5cbi8vIGNlbnRlciBpb24tc3Bpbm5lciBcbmlvbi1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7985:
/*!******************************************************!*\
  !*** ./src/app/pages/scan/scan.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <!--centered spinner-->\n  <ion-spinner *ngIf=\"pageState == 1\" color=\"tertiary\" name=\"circles\"></ion-spinner>\n\n  <ion-card *ngIf=\"pageState == 2\">\n    <ion-card-header class=\"ion-text-center\">\n      <ion-icon name=\"book-outline\" size=\"large\"></ion-icon>\n      <ion-card-title>\n        <h2>Tu clase</h2>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-center\">\n      <ion-item>\n        <ion-label position=\"stacked\">Asignatura:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.asignatura | titlecase }}\" readonly></ion-input>\n        <ion-label position=\"stacked\">Secci&oacute;n:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.seccion | uppercase }}\" readonly></ion-input>\n        <ion-label position=\"stacked\"> Docente:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.profesor | titlecase }}\" readonly></ion-input>\n        <ion-label position=\"stacked\"> Fecha:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.fecha }}\" readonly></ion-input>\n        <ion-label position=\"stacked\"> Hora:</ion-label>\n        <ion-input type=\"text\" value=\"{{ clase.hora }}\" readonly></ion-input>\n      </ion-item>\n      <hr>\n\n      <div class=\"ion-text-center\">\n        <ion-button color=\"tertiary\" (click)=\"registrarAsistencia()\" [routerLink]=\"['/home']\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>&nbsp;\n          ¡Presente!\n        </ion-button>\n        <ion-button color=\"medium\" [routerLink]=\"['/home']\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"pageState == 3\" style=\"margin-top: 50%;\">\n    <ion-card-header class=\"ion-text-center\">\n      <ion-icon name=\"alert-circle-outline\" size=\"large\"></ion-icon>\n      <ion-card-title>\n        Error al escanear\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-center\">\n      <ion-text>\n        <p>Este no es un c&oacute;digo de Registrapp. Por favor, escanee una fuente v&aacute;lida.</p>\n      </ion-text>\n      <hr>\n\n      <div class=\"ion-text-center\">\n        <ion-button color=\"tertiary\" (click)=\"startScan()\">\n          <ion-icon name=\"qr-code-outline\"></ion-icon>&nbsp;\n          Reintentar\n        </ion-button>\n        <ion-button color=\"medium\" [routerLink]=\"['/home']\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_scan_scan_module_ts.js.map