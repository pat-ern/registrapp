"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cuenta_cuenta_module_ts"],{

/***/ 1162:
/*!*******************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageRoutingModule": () => (/* binding */ CuentaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page */ 7399);
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);



// cuenta page

// componentes


const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_0__.CuentaPage,
        children: [
            {
                path: 'header',
                component: src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent
            },
            {
                path: 'footer',
                component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent
            }
        ]
    }
];
let CuentaPageRoutingModule = class CuentaPageRoutingModule {
};
CuentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], CuentaPageRoutingModule);



/***/ }),

/***/ 4178:
/*!***********************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageModule": () => (/* binding */ CuentaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-routing.module */ 1162);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page */ 7399);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);





// cuenta page


// componentes


// material

let CuentaPageModule = class CuentaPageModule {
};
CuentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaPageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        ],
        declarations: [
            _cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage,
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent
        ]
    })
], CuentaPageModule);



/***/ }),

/***/ 7399:
/*!*********************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPage": () => (/* binding */ CuentaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page.html?ngResource */ 4479);
/* harmony import */ var _cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page.scss?ngResource */ 8347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sesion.service */ 2555);





let CuentaPage = class CuentaPage {
    constructor(sesion) {
        this.sesion = sesion;
        this.nombre = this.sesion.usuario.nombre + " " + this.sesion.usuario.apellido;
        this.rut = this.sesion.usuario.run + "-" + this.sesion.usuario.dv;
        this.correo = this.sesion.usuario.correo;
        this.carrera = this.sesion.usuario.carrera;
    }
    ngOnInit() { }
};
CuentaPage.ctorParameters = () => [
    { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__.SesionService }
];
CuentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cuenta',
        template: _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CuentaPage);



/***/ }),

/***/ 8347:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZGIiwiZmlsZSI6ImN1ZW50YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2F2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEgYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 4479:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-page\" id=\"main-content\">\n\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n  <app-header></app-header>\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n\n  <ion-content class=\"ion-padding wrapper\">\n\n    <ion-card class=\"ion-activatable ripple-parent\">\n\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title>Mis Datos</ion-card-title>\n        <hr>\n        <img src=\"assets/img/avatar.png\" id=\"avatar\" alt=\"avatar\">\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"stacked\">Nombre</ion-label>\n          <ion-input type=\"text\" value=\"{{ nombre | titlecase }}\" readonly></ion-input>\n          <ion-label position=\"stacked\">Rut</ion-label>\n          <ion-input type=\"text\" value=\"{{rut}}\" readonly></ion-input>\n          <ion-label position=\"stacked\">Correo</ion-label>\n          <ion-input type=\"text\" value=\"{{correo}}\" readonly></ion-input>\n          <ion-label position=\"stacked\">Carrera</ion-label>\n          <ion-input type=\"text\" value=\"{{carrera | titlecase }}\" readonly></ion-input>\n        </ion-item>\n      </ion-card-content>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-card>\n\n  </ion-content>\n\n  <!--ACA VA EL COMPONENTE DEL footer-->\n  <app-footer></app-footer>\n  <!--ACA VA EL COMPONENTE DEL footer-->\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuenta_cuenta_module_ts.js.map