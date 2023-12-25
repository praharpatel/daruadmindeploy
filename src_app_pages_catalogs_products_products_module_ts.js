"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_products_products_module_ts"],{

/***/ 15321:
/*!*********************************************************************!*\
  !*** ./src/app/@pages/catalogs/products/products-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 96675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent
    }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵfac = function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); };
ProductsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 75904:
/*!*************************************************************!*\
  !*** ./src/app/@pages/catalogs/products/products.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 15321);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component */ 96675);
/* harmony import */ var _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var _shared_capture_prod_capture_prod_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/capture-prod/capture-prod.module */ 7716);
/* harmony import */ var _shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/importar/importar.module */ 11894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule,
            _shared_capture_prod_capture_prod_module__WEBPACK_IMPORTED_MODULE_3__.CaptureProdModule,
            _shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__.ImportarModule,
            _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule,
        _shared_capture_prod_capture_prod_module__WEBPACK_IMPORTED_MODULE_3__.CaptureProdModule,
        _shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__.ImportarModule,
        _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ }),

/***/ 7716:
/*!*************************************************************!*\
  !*** ./src/app/@shared/capture-prod/capture-prod.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureProdModule": () => (/* binding */ CaptureProdModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _capture_prod_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture-prod.component */ 46242);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ 57206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);








class CaptureProdModule {
}
CaptureProdModule.ɵfac = function CaptureProdModule_Factory(t) { return new (t || CaptureProdModule)(); };
CaptureProdModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CaptureProdModule });
CaptureProdModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarouselModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaptureProdModule, { declarations: [_capture_prod_component__WEBPACK_IMPORTED_MODULE_0__.CaptureProdComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarouselModule], exports: [_capture_prod_component__WEBPACK_IMPORTED_MODULE_0__.CaptureProdComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_products_products_module_ts.js.map