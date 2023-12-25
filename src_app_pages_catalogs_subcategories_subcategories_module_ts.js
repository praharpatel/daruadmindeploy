"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_subcategories_subcategories_module_ts"],{

/***/ 87144:
/*!*******************************************************************************!*\
  !*** ./src/app/@pages/catalogs/subcategories/subcategories-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoriesRoutingModule": () => (/* binding */ SubcategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _subcategories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcategories.component */ 15403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _subcategories_component__WEBPACK_IMPORTED_MODULE_0__.SubcategoriesComponent
    }
];
class SubcategoriesRoutingModule {
}
SubcategoriesRoutingModule.ɵfac = function SubcategoriesRoutingModule_Factory(t) { return new (t || SubcategoriesRoutingModule)(); };
SubcategoriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SubcategoriesRoutingModule });
SubcategoriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubcategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23756:
/*!***********************************************************************!*\
  !*** ./src/app/@pages/catalogs/subcategories/subcategories.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoriesModule": () => (/* binding */ SubcategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _subcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcategories-routing.module */ 87144);
/* harmony import */ var _subcategories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategories.component */ 15403);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/capture-cat/capture-cat.module */ 25278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class SubcategoriesModule {
}
SubcategoriesModule.ɵfac = function SubcategoriesModule_Factory(t) { return new (t || SubcategoriesModule)(); };
SubcategoriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SubcategoriesModule });
SubcategoriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _subcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubcategoriesRoutingModule,
            src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
            src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SubcategoriesModule, { declarations: [_subcategories_component__WEBPACK_IMPORTED_MODULE_1__.SubcategoriesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _subcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubcategoriesRoutingModule,
        src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
        src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_subcategories_subcategories_module_ts.js.map