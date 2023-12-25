"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_users_users_module_ts"],{

/***/ 72568:
/*!***************************************************************************!*\
  !*** ./src/app/@pages/catalogs/users/capture-user/capture-user.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureUserModule": () => (/* binding */ CaptureUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _capture_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture-user.component */ 78927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class CaptureUserModule {
}
CaptureUserModule.ɵfac = function CaptureUserModule_Factory(t) { return new (t || CaptureUserModule)(); };
CaptureUserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CaptureUserModule });
CaptureUserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaptureUserModule, { declarations: [_capture_user_component__WEBPACK_IMPORTED_MODULE_0__.CaptureUserComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule], exports: [_capture_user_component__WEBPACK_IMPORTED_MODULE_0__.CaptureUserComponent] }); })();


/***/ }),

/***/ 65347:
/*!***************************************************************!*\
  !*** ./src/app/@pages/catalogs/users/users-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 90334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent
    }
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); };
UsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 51293:
/*!*******************************************************!*\
  !*** ./src/app/@pages/catalogs/users/users.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 65347);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 90334);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var _capture_user_capture_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capture-user/capture-user.module */ 72568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
            src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule,
            _capture_user_capture_user_module__WEBPACK_IMPORTED_MODULE_3__.CaptureUserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
        src_app_shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule,
        _capture_user_capture_user_module__WEBPACK_IMPORTED_MODULE_3__.CaptureUserModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_users_users_module_ts.js.map