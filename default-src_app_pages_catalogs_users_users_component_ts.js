"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_users_users_component_ts"],{

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

/***/ 78927:
/*!******************************************************************************!*\
  !*** ./src/app/@pages/catalogs/users/capture-user/capture-user.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureUserComponent": () => (/* binding */ CaptureUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);





const _c0 = ["content"];
function CaptureUserComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Introduzca un correo electronico v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El corrreo electronico no tiene el formato correcto. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureUserComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CaptureUserComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors && _r4.errors.pattern);
} }
function CaptureUserComponent_ng_template_0_div_16_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Teclea el Password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_16_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureUserComponent_ng_template_0_div_16_div_5_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.required);
} }
const _c1 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function CaptureUserComponent_ng_template_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaptureUserComponent_ng_template_0_div_16_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CaptureUserComponent_ng_template_0_div_16_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.user.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, !_r14.invalid, _r14.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r6.editMode ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched));
} }
function CaptureUserComponent_ng_template_0_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Introduzca su nombre/s por favor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se aceptan numeros, ni caracteres speciales. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureUserComponent_ng_template_0_div_39_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CaptureUserComponent_ng_template_0_div_39_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && _r7.errors.pattern);
} }
function CaptureUserComponent_ng_template_0_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Introduzca su/s apellido/s por favor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_45_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se aceptan numeros, ni caracteres speciales. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureUserComponent_ng_template_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureUserComponent_ng_template_0_div_45_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CaptureUserComponent_ng_template_0_div_45_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors && _r9.errors.pattern);
} }
function CaptureUserComponent_ng_template_0_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureUserComponent_ng_template_0_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Grabar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
} }
function CaptureUserComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureUserComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onCloseModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CaptureUserComponent_ng_template_0_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaptureUserComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CaptureUserComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CaptureUserComponent_ng_template_0_div_16_Template, 6, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17)(18, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role/Permisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19)(21, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22)(25, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureUserComponent_ng_template_0_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.asignRol("SELLER", "Ventas"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureUserComponent_ng_template_0_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.asignRol("ADMIN", "Administrador"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Estatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9)(34, "div", 26)(35, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nombre(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaptureUserComponent_ng_template_0_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CaptureUserComponent_ng_template_0_div_39_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26)(41, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Apellido(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaptureUserComponent_ng_template_0_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.user.lastname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CaptureUserComponent_ng_template_0_div_45_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33)(47, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureUserComponent_ng_template_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onCloseModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CaptureUserComponent_ng_template_0_button_49_Template, 2, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, !_r4.invalid, _r4.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r1.editMode ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r1.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rol ", ctx_r1.roleView, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.estatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r1.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r1.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.onlyView);
} }
class CaptureUserComponent {
    constructor(formBuilder, modal) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.titulo = 'Capturando usuario';
        this.role = 'ADMIN';
        this.datosEnviar = new FormData();
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.user = {
            id: '',
            name: '',
            lastname: '',
            email: '',
            password: '',
            role: this.role,
            active: false
        };
        this.submitted = false;
        this.editMode = false;
        this.onlyView = false;
    }
    ngOnInit() {
        this.roleView = 'ADMIN';
        this.estatus = 'Inactivo';
    }
    onSetCatalog(user) {
        // this.captureForm.controls.email.setValue(user.email);
        // if (!this.editMode) {
        //   this.captureForm.controls.password.setValue(user.password);
        // }
        // this.captureForm.controls.name.setValue(user.name);
        // this.captureForm.controls.lastname.setValue(user.lastname);
        // this.captureForm.controls.role.setValue(user.role);
        // this.captureForm.controls.active.setValue(user.active);
    }
    onSubmit() {
        this.submitted = true;
        // if (this.captureForm.invalid) {
        //   basicAlert(TYPE_ALERT.WARNING, 'Verificar campos');
        //   return;
        // }
        this.onSetCatalog(this.user);
        this.userChange.emit(this.user);
    }
    onOpenModal(user, editMode = false, onlyView = false) {
        this.user = user;
        if (!editMode) {
            this.user.role = 'ADMIN';
        }
        this.editMode = editMode;
        this.onlyView = onlyView;
        // Cambia el título de acuerdo a si es solo vista, edición o nuevo.
        this.titulo = this.editMode ? onlyView ? 'Consultar' : 'Modificar' : 'Agregar';
        // Campos para editar
        const valorEditar = this.editMode ? this.user.active ? 'Activo' : 'Inactivo' : 'Activo';
        // this.captureForm.controls.email.setValue(this.user.email);
        // this.captureForm.controls.estatus.setValue(valorEditar);
        // this.captureForm.controls.name.setValue(this.user.name);
        // this.captureForm.controls.lastname.setValue(this.user.lastname);
        // this.captureForm.controls.role.setValue(this.user.role);
        console.log('this.user.role: ', this.user.role);
        this.roleView = this.asignaRolView(this.user.role);
        this.modal.open(this.content, { size: 'lg' });
    }
    onCloseModal() {
        this.modal.dismissAll();
    }
    asignRol(role, roleView) {
        this.user.role = role;
        // this.captureForm.controls.role.setValue(role);
        this.roleView = roleView;
    }
    asignaRolView(role) {
        switch (role) {
            case 'ADMIN':
                return 'Administrador';
            case 'SELLER':
                return 'Ventas';
            default:
                return '';
        }
    }
}
CaptureUserComponent.ɵfac = function CaptureUserComponent_Factory(t) { return new (t || CaptureUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
CaptureUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptureUserComponent, selectors: [["app-capture-user"]], viewQuery: function CaptureUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { role: "role", user: "user" }, outputs: { datosEnviar: "datosEnviar", userChange: "userChange" }, decls: 2, vars: 0, consts: [["role", "document"], ["content", ""], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], ["forma", "ngForm"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-4", "form-group"], ["for", "email"], ["type", "text", "id", "email", "name", "email", "placeholder", "email", "pattern", "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-2", "form-group"], [4, "ngIf"], [1, "col-3", "form-group"], ["for", "role"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "name", "role", "id", "role", "ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["for", "estatus"], ["type", "text", "id", "estatus", "name", "estatus", 1, "form-control", 3, "value"], [1, "col-6", "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Teclea el nombre", "pattern", "[ A-Za-z\u00E4\u00C4\u00EB\u00CB\u00EF\u00CF\u00F6\u00D6\u00FC\u00DC\u00E1\u00E9\u00ED\u00F3\u00FA\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00C2\u00CA\u00CE\u00D4\u00DB\u00E2\u00EA\u00EE\u00F4\u00FB\u00E0\u00E8\u00EC\u00F2\u00F9\u00C0\u00C8\u00CC\u00D2\u00D9.-]+", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "lastname"], ["type", "text", "id", "lastname", "name", "lastname", "placeholder", "Teclea los apellidos", "required", "", "pattern", "[ A-Za-z\u00E4\u00C4\u00EB\u00CB\u00EF\u00CF\u00F6\u00D6\u00FC\u00DC\u00E1\u00E9\u00ED\u00F3\u00FA\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00C2\u00CA\u00CE\u00D4\u00DB\u00E2\u00EA\u00EE\u00F4\u00FB\u00E0\u00E8\u00EC\u00F2\u00F9\u00C0\u00C8\u00CC\u00D2\u00D9.-]+", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "alert", "alert-danger"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function CaptureUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CaptureUserComponent_ng_template_0_Template, 50, 20, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0dXJlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 90334:
/*!**********************************************************!*\
  !*** ./src/app/@pages/catalogs/users/users.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@core/constants/filters */ 26408);
/* harmony import */ var src_app_graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/users */ 80232);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _shared_alert_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert/alerts */ 17775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/services/user.service */ 89795);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _capture_user_capture_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capture-user/capture-user.component */ 78927);











const _c0 = ["mdCaptureCat"];
class UsersComponent {
    constructor(usersService, tablePaginationService) {
        this.usersService = usersService;
        this.tablePaginationService = tablePaginationService;
        this.query = src_app_graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__.USERS_LIST_QUERY;
        this.editMode = false;
        this.title = 'Catálogo de Usuarios';
        this.role = 'ADMIN';
        this.datosEnviar = new FormData();
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'users',
            definitionKey: 'users',
            title: 'Usuarios'
        };
        this.include = false;
        this.filterActiveValues = src_app_core_constants_filters__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_FILTERS.ALL;
        this.columns = [
            {
                property: 'id',
                label: '#',
                class: 'clave'
            },
            {
                property: 'name',
                label: 'Nombre',
                class: ''
            },
            {
                property: 'lastname',
                label: 'Apellido',
                class: ''
            },
            {
                property: 'email',
                label: 'Correo',
                class: ''
            },
            {
                property: 'role',
                label: 'Permisos',
                class: ''
            },
            {
                property: 'active',
                label: 'Activo?',
                class: 'clave'
            }
        ];
    }
    takeAction($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Obtiene la informacion para las acciones
            const action = $event[0];
            const user = $event[1];
            this.mostrarBoton = true;
            switch (action) {
                case 'add': // Agregar elemento
                    this.addForm(this.onNewCatalog());
                    break;
                case 'edit': // Modificar elemento
                    this.updateForm(user);
                    break;
                case 'info': // Mostrar información del elemento
                    this.mostrarBoton = false;
                    this.updateForm(user, true, true);
                    break;
                case 'block': // Bloquear elemento
                    this.unblockForm(user, false);
                    break;
                case 'unblock': // Bloquear elemento
                    this.unblockForm(user, true);
                    break;
                default:
                    break;
            }
        });
    }
    onNewCatalog() {
        let user;
        return user = {
            id: this.nextId,
            email: '',
            password: '',
            name: '',
            lastname: '',
            active: false
        };
    }
    addForm(user, editMode = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(user, editMode);
        });
    }
    updateForm(user, editMode = true, onlyView = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(user, editMode, onlyView);
        });
    }
    userBack(event) {
        this.user = event;
        if (this.editMode) { // Si es un  para editar
            this.updateCatalog(this.user);
        }
        else { // Si es un usero nuevo
            this.addCatalog(this.user);
        }
    }
    addCatalog(user) {
        this.usersService.register(user).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.SUCCESS, res.message);
                this.usersService.sendEmailActive(res.user.id, user.email).subscribe(resEmail => {
                    (resEmail.status) ?
                        (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.SUCCESS, resEmail.message) :
                        (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.WARNING, resEmail.message);
                });
                setTimeout(() => {
                    this.tablePaginationService.refreshTable();
                    this.modal.onCloseModal();
                }, 2900);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
    updateCatalog(user) {
        if (user.email !== '') {
            this.usersService.update(user).subscribe((res) => {
                if (res.status) {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.SUCCESS, res.message);
                    setTimeout(() => {
                        this.modal.onCloseModal();
                        this.tablePaginationService.refreshTable();
                    }, 2900);
                }
                else {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.WARNING, res.message);
                }
            });
        }
    }
    unblockForm(brand, unblock) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const result = (unblock) ?
                yield (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_4__.optionsWithDetails)('Desbloquear?', `Si desbloqueas el item seleccionado, se mostrara en la lista`, 450, 'No desbloquear', 'Si desbloquear')
                :
                    yield (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_4__.optionsWithDetails)('Bloquear?', `Si bloqueas el item seleccionado, no se mostrara en la lista`, 430, 'No bloquear', 'Si bloquear');
            if (result === false) { // Si el resultado es falso, queremos bloquear
                this.unblockBrand(brand.id, unblock, true);
            }
            this.tablePaginationService.refreshTable();
        });
    }
    unblockBrand(id, unblock = false, admin = false) {
        this.usersService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_2__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_3__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__.TablePaginationService)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 3, vars: 9, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "role", "manageItem"], [3, "userChange"], ["mdCaptureCat", ""]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("manageItem", function UsersComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-capture-user", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("userChange", function UsersComponent_Template_app_capture_user_userChange_1_listener($event) { return ctx.userBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("role", ctx.role);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__.TablePaginationComponent, _capture_user_capture_user_component__WEBPACK_IMPORTED_MODULE_8__.CaptureUserComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_users_users_component_ts.js.map