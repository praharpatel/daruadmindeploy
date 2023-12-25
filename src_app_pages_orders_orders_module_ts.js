"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_orders_orders_module_ts"],{

/***/ 45502:
/*!********************************************************!*\
  !*** ./src/app/@pages/orders/orders-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRoutingModule": () => (/* binding */ OrdersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'cva',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_orders_cva_cva_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cva/cva.module */ 69724)).then(m => m.CvaModule)
    },
    {
        path: 'ct',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_orders_ct_ct_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ct/ct.module */ 92409)).then(m => m.CtModule)
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); };
OrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 35663:
/*!************************************************!*\
  !*** ./src/app/@pages/orders/orders.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 45502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class OrdersModule {
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrdersModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_orders_orders_module_ts.js.map