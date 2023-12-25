"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_tags_tags_module_ts"],{

/***/ 5923:
/*!*************************************************************!*\
  !*** ./src/app/@pages/catalogs/tags/tags-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsRoutingModule": () => (/* binding */ TagsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.component */ 98043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _tags_component__WEBPACK_IMPORTED_MODULE_0__.TagsComponent
    }
];
class TagsRoutingModule {
}
TagsRoutingModule.ɵfac = function TagsRoutingModule_Factory(t) { return new (t || TagsRoutingModule)(); };
TagsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TagsRoutingModule });
TagsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TagsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 62091:
/*!*****************************************************!*\
  !*** ./src/app/@pages/catalogs/tags/tags.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsModule": () => (/* binding */ TagsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-routing.module */ 5923);
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.component */ 98043);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/capture-cat/capture-cat.module */ 25278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class TagsModule {
}
TagsModule.ɵfac = function TagsModule_Factory(t) { return new (t || TagsModule)(); };
TagsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TagsModule });
TagsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _tags_routing_module__WEBPACK_IMPORTED_MODULE_0__.TagsRoutingModule,
            src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
            src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TagsModule, { declarations: [_tags_component__WEBPACK_IMPORTED_MODULE_1__.TagsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _tags_routing_module__WEBPACK_IMPORTED_MODULE_0__.TagsRoutingModule,
        src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
        src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_tags_tags_module_ts.js.map