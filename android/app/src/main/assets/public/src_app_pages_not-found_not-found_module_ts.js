"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_not-found_not-found_module_ts"],{

/***/ 8578:
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageRoutingModule": () => (/* binding */ NotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page */ 5691);




const routes = [
    {
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage
    }
];
let NotFoundPageRoutingModule = class NotFoundPageRoutingModule {
};
NotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotFoundPageRoutingModule);



/***/ }),

/***/ 6470:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 8578);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page */ 5691);







let NotFoundPageModule = class NotFoundPageModule {
};
NotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageRoutingModule
        ],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_1__.NotFoundPage]
    })
], NotFoundPageModule);



/***/ }),

/***/ 5691:
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPage": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page.html?ngResource */ 8062);
/* harmony import */ var _not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page.scss?ngResource */ 963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let NotFoundPage = class NotFoundPage {
    constructor() { }
    ngOnInit() {
    }
    goBack() {
        window.history.back();
    }
};
NotFoundPage.ctorParameters = () => [];
NotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundPage);



/***/ }),

/***/ 963:
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "#texto {\n  font-family: \"Contrail One\";\n  font-size: 20px;\n  font-weight: bolder;\n  color: #5260ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJub3QtZm91bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RleHRvIHtcbiAgICBmb250LWZhbWlseTogJ0NvbnRyYWlsIE9uZSc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6ICM1MjYwZmY7XG4gIH0iXX0= */";

/***/ }),

/***/ 8062:
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  \n  <div class=\"ion-text-center\">\n    <br><br><br><br><br><br><br>\n    <img src=\"assets/img/404-error.png\" alt=\"404\" width=\"200px\" height=\"auto\">\n    <br>\n    <ion-button color=\"tertiary\" [routerLink]=\"['/home']\"><ion-icon name=\"home-outline\"></ion-icon>&nbsp;Volver a Home</ion-button>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-found_not-found_module_ts.js.map