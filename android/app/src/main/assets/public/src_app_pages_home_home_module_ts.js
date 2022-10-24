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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/boton-menu/boton-menu.component */ 5116);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        children: [
            {
                path: 'boton-menu',
                component: _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_0__.BotonMenuComponent
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/boton-menu/boton-menu.component */ 5116);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            _components_boton_menu_boton_menu_component__WEBPACK_IMPORTED_MODULE_1__.BotonMenuComponent
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
        // correo a mostrar en home
        this.correo = this.sesion.correo;
        this.activatedRoute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.usuario = router.getCurrentNavigation().extras.state.user;
                console.log('Se recibieron los datos del usuario ' + this.usuario.correo + ' en la pagina home');
            }
            else {
                console.log('No se recibieron datos del usuario en la pagina home');
            }
        });
    } // fin constructor
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

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n/* nuevos */\n\n#bienvenido {\n  font-size: 35px;\n  font-weight: bolder;\n  color: #5260ff;\n}\n\n.mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #5260ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBLFdBQUE7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbnVldm9zICovXG5cbiNiaWVudmVuaWRvIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzUyNjBmZjtcbn1cblxuLm1hdC1pY29ue1xuICBmb250LXNpemU6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAjNTI2MGZmO1xufSJdfQ== */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-page\" id=\"main-content\">\n\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n  <app-boton-menu></app-boton-menu>\n  <!--ACA VA EL COMPONENTE DEL HEADER-->\n\n  <ion-content class=\"ion-padding\">\n\n    <ion-card-title class=\"ion-text-center ion-margin\" #titulo>\n      <ion-text id=\"bienvenido\">¡Bienvenid@!</ion-text>\n    </ion-card-title>\n\n    <br>\n\n    <ion-card [routerLink]=\"['/scan']\" class=\"ion-background-tertiary\">\n      <ion-card-content class=\"ion-text-center\" #qr>\n        <img src=\"assets/img/qr-code.png\" alt=\"qrcode\" width=\"125px\" height=\"auto\">\n      </ion-card-content>\n      <ion-text class=\"ion-text-center\">\n        <h4>Escanear codigo QR</h4>\n      </ion-text>\n    </ion-card>\n\n    <hr>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <a [routerLink]=\"['/historial']\"><mat-icon>spellcheck</mat-icon></a>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <a [routerLink]=\"['/cuenta']\"><mat-icon>person</mat-icon></a>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <a [routerLink]=\"['/settings']\"><mat-icon>settings</mat-icon></a>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <a [routerLink]=\"['/login']\"><mat-icon>logout</mat-icon></a>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-content>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map