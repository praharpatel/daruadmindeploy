"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_groups_groups_module_ts"],{

/***/ 74131:
/*!*****************************************************************!*\
  !*** ./src/app/@pages/catalogs/groups/groups-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsRoutingModule": () => (/* binding */ GroupsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.component */ 96956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent
    }
];
class GroupsRoutingModule {
}
GroupsRoutingModule.ɵfac = function GroupsRoutingModule_Factory(t) { return new (t || GroupsRoutingModule)(); };
GroupsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GroupsRoutingModule });
GroupsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GroupsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 79085:
/*!*********************************************************!*\
  !*** ./src/app/@pages/catalogs/groups/groups.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsModule": () => (/* binding */ GroupsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups-routing.module */ 74131);
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.component */ 96956);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/capture-cat/capture-cat.module */ 25278);
/* harmony import */ var _shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/importar/importar.module */ 11894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class GroupsModule {
}
GroupsModule.ɵfac = function GroupsModule_Factory(t) { return new (t || GroupsModule)(); };
GroupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GroupsModule });
GroupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupsRoutingModule,
            src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
            _shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__.ImportarModule,
            src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GroupsModule, { declarations: [_groups_component__WEBPACK_IMPORTED_MODULE_1__.GroupsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupsRoutingModule,
        src_app_shared_capture_cat_capture_cat_module__WEBPACK_IMPORTED_MODULE_3__.CaptureCatModule,
        _shared_importar_importar_module__WEBPACK_IMPORTED_MODULE_4__.ImportarModule,
        src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_groups_groups_module_ts.js.map