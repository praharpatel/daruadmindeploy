"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_charges_charges_module_ts"],{

/***/ 50078:
/*!**********************************************************!*\
  !*** ./src/app/@pages/charges/charges-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargesRoutingModule": () => (/* binding */ ChargesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'openpay',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_charges_openpay_openpay_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./openpay/openpay.module */ 44780)).then(m => m.OpenpayModule)
    },
    {
        path: 'stripe',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_charges_stripe_stripe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stripe/stripe.module */ 14185)).then(m => m.StripeModule)
    }
];
class ChargesRoutingModule {
}
ChargesRoutingModule.ɵfac = function ChargesRoutingModule_Factory(t) { return new (t || ChargesRoutingModule)(); };
ChargesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChargesRoutingModule });
ChargesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChargesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 57015:
/*!**************************************************!*\
  !*** ./src/app/@pages/charges/charges.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargesModule": () => (/* binding */ ChargesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _charges_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charges-routing.module */ 50078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ChargesModule {
}
ChargesModule.ɵfac = function ChargesModule_Factory(t) { return new (t || ChargesModule)(); };
ChargesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChargesModule });
ChargesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _charges_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChargesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChargesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _charges_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChargesRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_charges_charges_module_ts.js.map