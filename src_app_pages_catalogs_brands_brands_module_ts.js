"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_brands_brands_module_ts"],{

/***/ 76217:
/*!*****************************************************************!*\
  !*** ./src/app/@pages/catalogs/brands/brands-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsRoutingModule": () => (/* binding */ BrandsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands.component */ 26086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _brands_component__WEBPACK_IMPORTED_MODULE_0__.BrandsComponent
    }
];
class BrandsRoutingModule {
}
BrandsRoutingModule.ɵfac = function BrandsRoutingModule_Factory(t) { return new (t || BrandsRoutingModule)(); };
BrandsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrandsRoutingModule });
BrandsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrandsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23894:
/*!*********************************************************!*\
  !*** ./src/app/@pages/catalogs/brands/brands.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsModule": () => (/* binding */ BrandsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _brands_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands-routing.module */ 76217);
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands.component */ 26086);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/capture-cat/capture-cat.module */ 25278);
/* harmony import */ var src_app_shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/importar/importar.module */ 11894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class BrandsModule {
}
BrandsModule.ɵfac = function BrandsModule_Factory(t) { return new (t || BrandsModule)(); };
BrandsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BrandsModule });
BrandsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _brands_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrandsRoutingModule,
            src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
            src_app_shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__.ImportarModule,
            src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BrandsModule, { declarations: [_brands_component__WEBPACK_IMPORTED_MODULE_1__.BrandsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _brands_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrandsRoutingModule,
        src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
        src_app_shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__.ImportarModule,
        src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_brands_brands_module_ts.js.map