"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_core_services_user_service_ts-src_app_pages_catalogs_clients_clients-routing_module_t-686b3d"],{

/***/ 89795:
/*!************************************************!*\
  !*** ./src/app/@core/services/user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_graphql_operations_mutation_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/mutation/user */ 49378);
/* harmony import */ var src_app_graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/users */ 80232);
/* harmony import */ var src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@graphql/services/api.service */ 59586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ 60093);








class UsersService extends src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo) {
        super(apollo);
    }
    getUsers(page = 1, itemsPage = 10, filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_FILTERS.ACTIVE) {
        return this.get(src_app_graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__.USERS_LIST_QUERY, {
            include: true, itemsPage, page, filterActiveValues
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.users;
        }));
    }
    register(user) {
        return this.set(src_app_graphql_operations_mutation_user__WEBPACK_IMPORTED_MODULE_0__.REGISTER_USER, {
            user,
            include: false
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.register;
        }));
    }
    update(user) {
        return this.set(src_app_graphql_operations_mutation_user__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER, {
            user,
            include: false
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.updateUser;
        }));
    }
    active(token, password) {
        const user = JSON.parse(atob(token.split('.')[1])).user;
        return this.set(src_app_graphql_operations_mutation_user__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_USER, {
            id: user.id,
            password
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                Authorization: token
            })
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.activeUserAction;
        }));
    }
    unblock(id, unblock = false, admin = false) {
        return this.set(src_app_graphql_operations_mutation_user__WEBPACK_IMPORTED_MODULE_0__.BLOCK_USER, {
            id,
            unblock,
            admin
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.blockUser;
        }));
    }
    sendEmailActive(id, email) {
        return this.set(src_app_graphql_operations_mutation_user__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_EMAIL_USER, {
            id,
            email
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.activeUserEmail;
        }));
    }
    next() {
        return this.get(src_app_graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__.USERS_ID_QUERY, {}, {}, false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.userId.userId;
        }));
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__.Apollo)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49378:
/*!******************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/user.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIVE_EMAIL_USER": () => (/* binding */ ACTIVE_EMAIL_USER),
/* harmony export */   "ACTIVE_USER": () => (/* binding */ ACTIVE_USER),
/* harmony export */   "BLOCK_USER": () => (/* binding */ BLOCK_USER),
/* harmony export */   "REGISTER_USER": () => (/* binding */ REGISTER_USER),
/* harmony export */   "UPDATE_USER": () => (/* binding */ UPDATE_USER)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var src_app_graphql_operations_fragment_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/fragment/user */ 26308);


const REGISTER_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addUser($user: UserInput!, $include: Boolean!) {
      register(user: $user) {
         status
         message
         user {
            ...UserObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_user__WEBPACK_IMPORTED_MODULE_0__.USER_FRAGMENT}
`;
const UPDATE_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateUser($user: UserInput!, $include: Boolean!) {
      updateUser(user: $user) {
         status
         message
         user {
            ...UserObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_user__WEBPACK_IMPORTED_MODULE_0__.USER_FRAGMENT}
`;
const BLOCK_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockUser($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockUser(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;
const ACTIVE_EMAIL_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation activeUserEmail($id: ID!, $email: String!) {
      activeUserEmail(
         id: $id,
         email: $email
      )  {
            status
            message
      }
   }
`;
const ACTIVE_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation activeUser($id: ID!, $password: String!) {
      activeUserAction(
         id: $id,
         password: $password
      )  {
            status
            message
      }
   }
`;


/***/ }),

/***/ 17827:
/*!*******************************************************************!*\
  !*** ./src/app/@pages/catalogs/clients/clients-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsRoutingModule": () => (/* binding */ ClientsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _clients_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients.module */ 7623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _clients_module__WEBPACK_IMPORTED_MODULE_0__.ClientsModule
    }
];
class ClientsRoutingModule {
}
ClientsRoutingModule.ɵfac = function ClientsRoutingModule_Factory(t) { return new (t || ClientsRoutingModule)(); };
ClientsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientsRoutingModule });
ClientsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7623:
/*!***********************************************************!*\
  !*** ./src/app/@pages/catalogs/clients/clients.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsModule": () => (/* binding */ ClientsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-routing.module */ 17827);
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component */ 390);
/* harmony import */ var _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ClientsModule {
}
ClientsModule.ɵfac = function ClientsModule_Factory(t) { return new (t || ClientsModule)(); };
ClientsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClientsModule });
ClientsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsRoutingModule,
            _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClientsModule, { declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_1__.ClientsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsRoutingModule,
        _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_2__.TablePaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_core_services_user_service_ts-src_app_pages_catalogs_clients_clients-routing_module_t-686b3d.js.map