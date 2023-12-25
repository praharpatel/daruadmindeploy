"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_core_services_config_service_ts-src_app_pages_catalogs_config_config_module_ts"],{

/***/ 75797:
/*!**************************************************!*\
  !*** ./src/app/@core/services/config.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigsService": () => (/* binding */ ConfigsService)
/* harmony export */ });
/* harmony import */ var _graphql_operations_mutation_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql/operations/mutation/configs */ 36885);
/* harmony import */ var _graphql_operations_query_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql/operations/query/config */ 32252);
/* harmony import */ var _graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @graphql/services/api.service */ 59586);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ 60093);







class ConfigsService extends _graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo) {
        super(apollo);
        this.configs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.configs$ = this.configs.asObservable();
    }
    getConfig(id) {
        return this.get(_graphql_operations_query_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG_QUERY, { id })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.config.config;
        }));
    }
    update(config) {
        return this.set(_graphql_operations_mutation_configs__WEBPACK_IMPORTED_MODULE_0__.UPDATE_CONFIG, {
            config
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.updateConfig;
        }));
    }
}
ConfigsService.ɵfac = function ConfigsService_Factory(t) { return new (t || ConfigsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_6__.Apollo)); };
ConfigsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ConfigsService, factory: ConfigsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53447:
/*!********************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/config.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_FRAGMENT": () => (/* binding */ CONFIG_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const CONFIG_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment ConfigObject on Config {
    id
    message
    exchange_rate
    minimum_offer
    offer
  }
`;


/***/ }),

/***/ 36885:
/*!*********************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/configs.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_CONFIG": () => (/* binding */ ADD_CONFIG),
/* harmony export */   "BLOCK_CONFIG": () => (/* binding */ BLOCK_CONFIG),
/* harmony export */   "UPDATE_CONFIG": () => (/* binding */ UPDATE_CONFIG)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/config */ 53447);


const ADD_CONFIG = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addConfig($config: ConfigInput!) {
      addConfig(config: $config) {
         status
         message
         config {
            ...ConfigObject
         }
      }
   }
   ${_fragment_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG_FRAGMENT}
`;
const UPDATE_CONFIG = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateConfig($config: ConfigInput!) {
      updateConfig(config: $config) {
         status
         message
         config {
            ...ConfigObject
         }
      }
   }
   ${_fragment_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG_FRAGMENT}
`;
const BLOCK_CONFIG = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockConfig($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockConfig(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;


/***/ }),

/***/ 32252:
/*!*****************************************************!*\
  !*** ./src/app/@graphql/operations/query/config.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_QUERY": () => (/* binding */ CONFIG_QUERY)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/config */ 53447);


const CONFIG_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
  query config($id: ID!) {
    config(id: $id) {
      status
      message
      config {
        ...ConfigObject
      }
    }
  }
  ${_fragment_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG_FRAGMENT}
`;


/***/ }),

/***/ 181:
/*!*****************************************************************!*\
  !*** ./src/app/@pages/catalogs/config/config-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigRoutingModule": () => (/* binding */ ConfigRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class ConfigRoutingModule {
}
ConfigRoutingModule.ɵfac = function ConfigRoutingModule_Factory(t) { return new (t || ConfigRoutingModule)(); };
ConfigRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfigRoutingModule });
ConfigRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 18184:
/*!*********************************************************!*\
  !*** ./src/app/@pages/catalogs/config/config.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigModule": () => (/* binding */ ConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-routing.module */ 181);
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.component */ 74350);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class ConfigModule {
}
ConfigModule.ɵfac = function ConfigModule_Factory(t) { return new (t || ConfigModule)(); };
ConfigModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConfigModule });
ConfigModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _config_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfigModule, { declarations: [_config_component__WEBPACK_IMPORTED_MODULE_1__.ConfigComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _config_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_core_services_config_service_ts-src_app_pages_catalogs_config_config_module_ts.js.map