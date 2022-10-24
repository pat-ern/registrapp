"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_historial_historial_module_ts"],{

/***/ 5863:
/*!*************************************************************!*\
  !*** ./src/app/pages/historial/historial-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialPageRoutingModule": () => (/* binding */ HistorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/boton-menu/boton-menu.component */ 5116);
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historial.page */ 4650);





const routes = [
    {
        path: '',
        component: _historial_page__WEBPACK_IMPORTED_MODULE_1__.HistorialPage,
        children: [
            {
                path: 'boton-menu',
                component: _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_0__.BotonMenuComponent
            }
        ]
    }
];
let HistorialPageRoutingModule = class HistorialPageRoutingModule {
};
HistorialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HistorialPageRoutingModule);



/***/ }),

/***/ 8571:
/*!*****************************************************!*\
  !*** ./src/app/pages/historial/historial.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialPageModule": () => (/* binding */ HistorialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historial-routing.module */ 5863);
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historial.page */ 4650);
/* harmony import */ var _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/boton-menu/boton-menu.component */ 5116);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);









let HistorialPageModule = class HistorialPageModule {
};
HistorialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _historial_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistorialPageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        ],
        declarations: [
            _historial_page__WEBPACK_IMPORTED_MODULE_1__.HistorialPage,
            _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_2__.BotonMenuComponent
        ]
    })
], HistorialPageModule);



/***/ }),

/***/ 4650:
/*!***************************************************!*\
  !*** ./src/app/pages/historial/historial.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialPage": () => (/* binding */ HistorialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _historial_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historial.page.html?ngResource */ 3845);
/* harmony import */ var _historial_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historial.page.scss?ngResource */ 1471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_bd_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bd-local.service */ 1443);




// Servicios

let HistorialPage = class HistorialPage {
    constructor(bdlocal) {
        this.bdlocal = bdlocal;
    }
    borrarHistorial() {
        this.bdlocal.borrarAsistencias();
        this.listaAsistencia = this.bdlocal.obtenerAsistencias();
    }
    ionViewWillEnter() {
        this.listaAsistencia = this.bdlocal.obtenerAsistencias();
    }
    ngOnInit() {
    }
};
HistorialPage.ctorParameters = () => [
    { type: src_app_services_bd_local_service__WEBPACK_IMPORTED_MODULE_2__.BdLocalService }
];
HistorialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-historial',
        template: _historial_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_historial_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistorialPage);



/***/ }),

/***/ 1471:
/*!****************************************************************!*\
  !*** ./src/app/pages/historial/historial.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3845:
/*!****************************************************************!*\
  !*** ./src/app/pages/historial/historial.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-page\" id=\"main-content\">\n\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n  <app-boton-menu></app-boton-menu>\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n\n  <ion-content class=\"ion-padding\">\n  \n      <ion-content class=\"ion-margin\">\n        <ion-list>\n          <ion-item *ngFor=\"let a of listaAsistencia\">\n            <!--Mostrar asignaturas del lunes-->\n            <ion-label>{{ a.strAsignatura | uppercase }}</ion-label>\n            <ion-label>{{ a.strFecha }}</ion-label>\n            <ion-label>{{ a.strHora }}</ion-label>\n            <mat-icon *ngIf=\"a.estaPresente\">check_circle</mat-icon>\n            <mat-icon *ngIf=\"!a.estaPresente\">cancel</mat-icon>\n          </ion-item>\n        </ion-list>\n        <ion-button color=\"tertiary\" expand=\"block\" [routerLink]=\"['/home']\">Volver</ion-button> <!--(click)=\"login()\"-->\n        <ion-button color=\"danger\" expand=\"block\" (click)=\"borrarHistorial()\">Borrar Historial</ion-button>\n      </ion-content>\n\n</ion-content>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_historial_historial_module_ts.js.map