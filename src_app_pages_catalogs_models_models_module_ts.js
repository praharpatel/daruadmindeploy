"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_models_models_module_ts"],{

/***/ 57947:
/*!*****************************************************************!*\
  !*** ./src/app/@pages/catalogs/models/models-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsRoutingModule": () => (/* binding */ ModelsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.component */ 79498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _models_component__WEBPACK_IMPORTED_MODULE_0__.ModelsComponent
    }
];
class ModelsRoutingModule {
}
ModelsRoutingModule.ɵfac = function ModelsRoutingModule_Factory(t) { return new (t || ModelsRoutingModule)(); };
ModelsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModelsRoutingModule });
ModelsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModelsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63779:
/*!*********************************************************!*\
  !*** ./src/app/@pages/catalogs/models/models.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsModule": () => (/* binding */ ModelsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _models_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models-routing.module */ 57947);
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.component */ 79498);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/capture-cat/capture-cat.module */ 25278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class ModelsModule {
}
ModelsModule.ɵfac = function ModelsModule_Factory(t) { return new (t || ModelsModule)(); };
ModelsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ModelsModule });
ModelsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _models_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModelsRoutingModule,
            src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
            src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ModelsModule, { declarations: [_models_component__WEBPACK_IMPORTED_MODULE_1__.ModelsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _models_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModelsRoutingModule,
        src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
        src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_models_models_module_ts.js.map