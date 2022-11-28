"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);



// home page

// componentes


const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'header',
                component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent
            },
            {
                path: 'footer',
                component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);





// home page


// componentes


// material

let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent
        ]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sesion.service */ 2555);







let HomePage = class HomePage {
    constructor(router, activatedRoute, animationCtrl, sesion) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.animationCtrl = animationCtrl;
        this.sesion = sesion;
        this.correo = this.sesion.usuario.correo;
        this.activatedRoute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.usuario = router.getCurrentNavigation().extras.state.user;
            }
        });
    }
    ngAfterViewInit() {
        // Animacion de titulo
        const titulo = this.animationCtrl.create()
            .addElement(this.titulo.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1) rotate(0)' },
            { offset: 0.5, transform: 'scale(1) rotate(0)', opacity: '0.1' },
            { offset: 1, transform: 'scale(1) rotate(0)' }
        ]);
        // Animacion de qr
        const qr = this.animationCtrl.create()
            .addElement(this.qr.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1.2) rotate(0)' },
            { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
            { offset: 1, transform: 'scale(1) rotate(0)' }
        ]);
        // Animacion de titulo y qr
        const animacion = this.animationCtrl
            .create()
            .duration(2000)
            .iterations(1)
            .addAnimation([titulo, qr]);
        //.addAnimation([hola1, squareA, squareB, squareC, otra]);
        animacion.play();
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__.SesionService }
];
HomePage.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['titulo', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef, static: true },] }],
    qr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['qr', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef, static: true },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#titulo {\n  margin-top: 10%;\n  text-align: center;\n}\n\n#imagen-logo {\n  width: 80%;\n  height: 80%;\n}\n\n#qr-card {\n  padding-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiN0aXR1bG8ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2ltYWdlbi1sb2dvIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbiNxci1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDclO1xufSJdfQ== */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-page\" id=\"main-content\">\n\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n  <app-header></app-header>\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n\n  <ion-content class=\"ion-padding\">\n\n    <div id=\"titulo\" class=\"ion-margin\" #titulo>\n      <img id=\"imagen-logo\" src=\"assets/img/app-name-light.png\">\n    </div>\n\n    <hr>\n\n    <ion-card id=\"qr-card\" [routerLink]=\"['/scan']\" class=\"ion-margin\">\n      <ion-card-content class=\"ion-text-center\" #qr>\n        <img src=\"assets/img/qr-code.png\" alt=\"qrcode\" width=\"125px\" height=\"auto\">\n      </ion-card-content>\n      <ion-text class=\"ion-text-center\">\n        <h4>Escanea el c&oacute;digo QR de tu clase</h4>\n      </ion-text>\n    </ion-card>\n\n    <hr>\n\n    <div class=\"ion-text-center ion-margin\">\n      <ion-button [routerLink]=\"['/historial']\" color=\"tertiary\" expand=\"block\">\n        <ion-icon name=\"calendar-outline\" ></ion-icon>&nbsp;\n        <ion-label>&Uacute;ltimas clases</ion-label>\n      </ion-button>\n    </div>\n\n  </ion-content>\n\n  <!--ACA VA EL COMPONENTE DEL footer-->\n  <app-footer></app-footer>\n  <!--ACA VA EL COMPONENTE DEL footer-->\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map