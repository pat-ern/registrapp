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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/boton-menu/boton-menu.component */ 5116);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page */ 7399);





const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage,
        children: [
            {
                path: 'boton-menu',
                component: src_app_components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_0__.BotonMenuComponent
            }
        ]
    }
];
let CuentaPageRoutingModule = class CuentaPageRoutingModule {
};
CuentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-routing.module */ 1162);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page */ 7399);
/* harmony import */ var _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/boton-menu/boton-menu.component */ 5116);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);







// Componentes de la página


let CuentaPageModule = class CuentaPageModule {
};
CuentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaPageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        ],
        declarations: [
            _cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage,
            _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_2__.BotonMenuComponent
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page.html?ngResource */ 4479);
/* harmony import */ var _cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page.scss?ngResource */ 8347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sesion.service */ 2555);






let CuentaPage = class CuentaPage {
    constructor(menu, sesion) {
        this.menu = menu;
        this.sesion = sesion;
        this.nombre = this.sesion.nombre;
        this.apellido = this.sesion.apellido;
        this.correo = this.sesion.correo;
    }
    ngOnInit() {
        this.menu.enable(true);
    }
};
CuentaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__.SesionService }
];
CuentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: 2 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZGIiwiZmlsZSI6ImN1ZW50YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2F2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDIgYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 4479:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-page\" id=\"main-content\">\n\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n  <app-boton-menu></app-boton-menu>\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n\n  <ion-content class=\"ion-padding\">\n\n    <ion-card>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title class=\"ion-margin\">Mis Datos</ion-card-title>\n        <img src=\"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200\" id=\"avatar\">\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"stacked\">Nombre</ion-label>\n          <ion-input type=\"text\" value=\"{{ nombre | titlecase }}\" readonly></ion-input>\n          <ion-label position=\"stacked\">Apellido</ion-label>\n          <ion-input type=\"text\" value=\"{{ apellido | titlecase }}\" readonly></ion-input>\n          <ion-label position=\"stacked\">Correo</ion-label>\n          <ion-input type=\"text\" value=\"{{correo}}\" readonly></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button color=\"tertiary\" expand=\"block\" [routerLink]=\"['/home']\">Volver</ion-button>\n\n  </ion-content>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuenta_cuenta_module_ts.js.map