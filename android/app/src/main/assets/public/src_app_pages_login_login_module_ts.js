"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sesion.service */ 2555);
/* harmony import */ var src_app_services_api_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-usuario.service */ 4028);








// Servicios



let LoginPage = class LoginPage {
    constructor(router, animationCtrl, sesion, api, platform, menuCtrl) {
        this.router = router;
        this.animationCtrl = animationCtrl;
        this.sesion = sesion;
        this.api = api;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.usuario = {
            correo: "",
            contrasena: ""
        };
        this.isSubmitted = false;
        this.errores = [
            { tipo: 'required', mensaje: 'Campo no debe estar vacio' },
            { tipo: 'maxLength', mensaje: 'Maximo 15 caracteres' },
        ];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            emailForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            passForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
        // Login
        this.datosError = "Usuario y contraseña no coinciden";
        this.errorBoolean = false;
    }
    ngOnInit() {
        this.api.getUsuarios();
    }
    ionViewWillEnter() {
        this.usuario = {
            correo: "",
            contrasena: ""
        };
        this.menuCtrl.enable(false);
        console.log("Menu deshabilitado");
    }
    ngAfterViewInit() {
        // Animacion logo
        const logo = this.animationCtrl.create()
            .addElement(this.logo.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1) rotate(0)' },
            { offset: 0.5, transform: 'scale(1.5) rotate(0)', opacity: '0.3' },
            { offset: 1, transform: 'scale(1) rotate(0)' }
        ]);
        const animacion = this.animationCtrl
            .create()
            .duration(2000)
            .iterations(1)
            .addAnimation([logo]);
        animacion.play();
    }
    ionViewWillLeave() {
        this.menuCtrl.enable(true);
        console.log("Menu habilitado");
    }
    login() {
        this.reinicioErrores();
        this.validarFormulario();
    }
    validarFormulario() {
        if (!this.loginForm.valid) {
            return false;
        }
        else {
            this.validarUsuario();
        }
    }
    validarUsuario() {
        if (this.api.usuarioExiste(this.usuario.correo)) {
            this.validarContrasena();
        }
        else {
            this.errorUsuario();
        }
    }
    validarContrasena() {
        let pass = this.api.consultarContrasena(this.usuario.correo);
        if (pass == this.usuario.contrasena) {
            this.generarSesion();
            this.navigateHome();
        }
        else {
            this.errorContrasena();
        }
    }
    generarSesion() {
        let user = this.api.consultarUsuario(this.usuario.correo);
        this.sesion.guardarSesion(user);
    }
    navigateHome() {
        this.router.navigate(["/home"]);
    }
    reinicioErrores() {
        this.errorBoolean = false;
        this.isSubmitted = true;
    }
    errorUsuario() {
        this.errorBoolean = true;
        this.datosError = "Usuario no existe";
    }
    errorContrasena() {
        this.errorBoolean = true;
        this.datosError = "Usuario y contraseña no coinciden";
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AnimationController },
    { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_2__.SesionService },
    { type: src_app_services_api_usuario_service__WEBPACK_IMPORTED_MODULE_3__.ApiUsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
LoginPage.propDecorators = {
    logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['logo', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, static: true },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#logo {\n  margin-top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XG4gICAgbWFyZ2luLXRvcDozMCU7XG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content class=\"wrapper\">\n  <div id=\"logo\" class=\"ion-text-center\" #logo>\n    <img src=\"assets/img/logo2-light.png\" alt=\"logo\" width=\"125px\" height=\"auto\">\n  </div>\n\n  <ion-card class=\"ion-activatable ripple-parent\">\n    <ion-card-content>\n      <form action=\"\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <ion-item>\n\n          <!-- input email -->\n          <ion-label name=\"emailinputlabel\" position=\"floating\">Usuario</ion-label>\n          <ion-input type=\"email\" name=\"email\" email [(ngModel)]=\"usuario.correo\" required formControlName=\"emailForm\"></ion-input><!--required solo funciona a medias, lo muestra rojo pero igual deja enviarlo-->\n          \n          <!-- mensaje de error -->\n          <div *ngFor=\"let er of errores\">\n            <ng-container *ngIf=\"loginForm.get('emailForm').hasError(er.tipo) && (loginForm.get('emailForm').touched || loginForm.get('emailForm').dirty)\">\n              <p style=\"color: brown;\">{{er.mensaje}}</p>\n            </ng-container>\n          </div>\n\n        </ion-item>\n        <ion-item>\n\n          <!-- input contrasena -->\n          <ion-label name=\"passwordinputlabel\" position=\"floating\">Contraseña</ion-label>\n          <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.contrasena\" required formControlName=\"passForm\"></ion-input>\n          \n          <!-- mensaje de error -->\n          <div *ngFor=\"let er of errores\">\n            <ng-container *ngIf=\"loginForm.get('passForm').hasError(er.tipo) && (loginForm.get('passForm').touched || loginForm.get('passForm').dirty)\">\n              <p style=\"color: brown;\">{{er.mensaje}}</p>\n            </ng-container>\n          </div>\n\n        </ion-item>\n        <br>\n\n        <!-- [disabled]=\"!this.loginForm.valid\" -->\n        <ion-button id=\"login-button\" color=\"tertiary\" expand=\"block\" type=\"submit\" [disabled]=\"!this.loginForm.valid\">Ingresar</ion-button>\n\n          <ng-container *ngIf=\"errorBoolean==true\">\n            <p style=\"color: brown;\">{{datosError}}</p>\n          </ng-container>\n\n      </form>\n    </ion-card-content>\n    <ion-ripple-effect></ion-ripple-effect>\n  </ion-card>\n\n  <ion-text class=\"ion-text-center\">\n    <a [routerLink]=\"['/reset']\"><h4>¿Olvidaste tu contraseña?</h4></a>\n  </ion-text>\n\n  <br>  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map