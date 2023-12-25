"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_welcomes_welcomes_module_ts"],{

/***/ 13596:
/*!*********************************************************************!*\
  !*** ./src/app/@pages/catalogs/welcomes/welcomes-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomesRoutingModule": () => (/* binding */ WelcomesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _welcomes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomes.component */ 70860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _welcomes_component__WEBPACK_IMPORTED_MODULE_0__.WelcomesComponent
    }
];
class WelcomesRoutingModule {
}
WelcomesRoutingModule.ɵfac = function WelcomesRoutingModule_Factory(t) { return new (t || WelcomesRoutingModule)(); };
WelcomesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WelcomesRoutingModule });
WelcomesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 44309:
/*!*************************************************************!*\
  !*** ./src/app/@pages/catalogs/welcomes/welcomes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomesModule": () => (/* binding */ WelcomesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _welcomes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomes-routing.module */ 13596);
/* harmony import */ var _welcomes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomes.component */ 70860);
/* harmony import */ var _shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/capture-cat/capture-cat.module */ 25278);
/* harmony import */ var _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class WelcomesModule {
}
WelcomesModule.ɵfac = function WelcomesModule_Factory(t) { return new (t || WelcomesModule)(); };
WelcomesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WelcomesModule });
WelcomesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _welcomes_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomesRoutingModule,
            _shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_2__.CaptureCatModule,
            _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WelcomesModule, { declarations: [_welcomes_component__WEBPACK_IMPORTED_MODULE_1__.WelcomesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _welcomes_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomesRoutingModule,
        _shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_2__.CaptureCatModule,
        _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_welcomes_welcomes_module_ts.js.map