"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reset_reset_module_ts"],{

/***/ 31:
/*!*****************************************************!*\
  !*** ./src/app/pages/reset/reset-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageRoutingModule": () => (/* binding */ ResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.page */ 9659);




const routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_0__.ResetPage
    }
];
let ResetPageRoutingModule = class ResetPageRoutingModule {
};
ResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPageRoutingModule);



/***/ }),

/***/ 7742:
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageModule": () => (/* binding */ ResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-routing.module */ 31);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page */ 9659);







let ResetPageModule = class ResetPageModule {
};
ResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_1__.ResetPage]
    })
], ResetPageModule);



/***/ }),

/***/ 9659:
/*!*******************************************!*\
  !*** ./src/app/pages/reset/reset.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPage": () => (/* binding */ ResetPage)
/* harmony export */ });
/* harmony import */ var _Users_patricio_Documents_GitHub_registrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page.html?ngResource */ 1);
/* harmony import */ var _reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset.page.scss?ngResource */ 5563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_api_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-usuario.service */ 4028);









let ResetPage = class ResetPage {
  constructor(toastController, api) {
    this.toastController = toastController;
    this.api = api;
    this.user = {
      email: ""
    };
    this.errores = [{
      tipo: 'required',
      mensaje: 'Campo no debe estar vacio'
    }];
    this.recuperarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      emailForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
    this.datosError = "Ese correo no esta registrado";
    this.errorBoolean = false;
  }

  presentToast(position) {
    var _this = this;

    return (0,_Users_patricio_Documents_GitHub_registrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Se ha enviado código de confirmación a ' + _this.user.email,
        duration: 4000,
        position: position,
        icon: 'mail',
        //cssClass: 'custom-toast',
        color: "dark"
      });
      yield toast.present();
    })();
  }

  verificar() {
    this.errorBoolean = false;

    if (!this.recuperarForm.valid) {
      return false;
    } else {
      if (this.api.usuarioExiste(this.user.email)) {
        this.errorBoolean = true;
      } else {
        this.presentToast('bottom');
      }
    }
  }

  ngOnInit() {
    this.api.getUsuarios();
  }

};

ResetPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _services_api_usuario_service__WEBPACK_IMPORTED_MODULE_3__.ApiUsuarioService
}];

ResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-reset',
  template: _reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ResetPage);


/***/ }),

/***/ 5563:
/*!********************************************************!*\
  !*** ./src/app/pages/reset/reset.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#logo {\n  margin-top: 30%;\n}\n\n#cuadro-texto {\n  border-width: 3px;\n  border-style: solid;\n  border-radius: 5px;\n  border-color: #fafafa;\n  margin-left: 3%;\n  margin-right: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoicmVzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xuICAgIG1hcmdpbi10b3A6MzAlO1xufVxuXG4jY3VhZHJvLXRleHRvIHtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItY29sb3I6ICNmYWZhZmE7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG5cbn0iXX0= */";

/***/ }),

/***/ 1:
/*!********************************************************!*\
  !*** ./src/app/pages/reset/reset.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"logo\" class=\"ion-text-center\">\n    <img src=\"assets/img/lock-light.png\" alt=\"usuario\" width=\"75px\" height=\"auto\">\n  </div>\n  <br>\n  <div id=\"cuadro-texto\">\n    <ion-text id=\"mensaje\" class=\"ion-text-center\" color=\"dark\">\n      <h5>Ingresa tu correo, si está registrado te enviaremos un código de confirmacion para reestablecer la contraseña.</h5>\n    </ion-text>\n  </div>\n\n  <form action=\"\" [formGroup]=\"recuperarForm\">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Correo</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" formControlName=\"emailForm\"></ion-input>\n          <div *ngFor=\"let er of errores\">\n            <ng-container *ngIf=\"recuperarForm.get('emailForm').hasError(er.tipo) && (recuperarForm.get('emailForm').touched || recuperarForm.get('emailForm').dirty)\">\n              <p style=\"color: brown;\">{{er.mensaje}}</p>\n            </ng-container>\n          </div>\n        </ion-item>\n        <br>\n        <ion-button color=\"tertiary\" expand=\"block\" (click)=\"verificar()\">Obtener Código</ion-button>\n        <ng-container *ngIf=\"errorBoolean==true\">\n          <p style=\"color: brown;\">{{datosError}}</p>\n        </ng-container>\n      </ion-card-content>\n    </ion-card>\n  </form>\n\n  <ion-text class=\"ion-text-center\">\n    <a [routerLink]=\"['/login']\"><h4>Volver</h4></a>\n  </ion-text>\n\n</ion-content>\n\n<!--\n<ion-footer>\n      <ion-text style=\"padding:30%;\">\n        Ayuda - Redes Sociales\n      </ion-text>\n</ion-footer> \n-->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reset_reset_module_ts.js.map