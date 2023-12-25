"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["common"],{

/***/ 390:
/*!**************************************************************!*\
  !*** ./src/app/@pages/catalogs/clients/clients.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql/operations/query/users */ 80232);
/* harmony import */ var _shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/alert/alerts */ 17775);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ 89795);
/* harmony import */ var _shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);










class ClientsComponent {
    constructor(usersService, tablePaginationService) {
        this.usersService = usersService;
        this.tablePaginationService = tablePaginationService;
        this.query = _graphql_operations_query_users__WEBPACK_IMPORTED_MODULE_1__.USERS_LIST_QUERY;
        this.editMode = false;
        this.title = 'Catálogo de Clientes';
        this.role = 'CLIENT';
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
        this.filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_FILTERS.ALL;
        this.role = 'CLIENT';
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // Obtiene la informacion para las acciones
            const action = $event[0];
            const user = $event[1];
            this.mostrarBoton = true;
            switch (action) {
                case 'info': // Mostrar información del elemento
                    this.mostrarBoton = false;
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
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                this.usersService.sendEmailActive(res.user.id, user.email).subscribe(resEmail => {
                    (resEmail.status) ?
                        (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, resEmail.message) :
                        (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, resEmail.message);
                });
                setTimeout(() => {
                    this.tablePaginationService.refreshTable();
                }, 2900);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
    updateCatalog(user) {
        if (user.email !== '') {
            this.usersService.update(user).subscribe((res) => {
                if (res.status) {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                    setTimeout(() => {
                        this.tablePaginationService.refreshTable();
                    }, 2900);
                }
                else {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
                }
            });
        }
    }
    unblockForm(brand, unblock) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const result = (unblock) ?
                yield (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.optionsWithDetails)('Desbloquear?', `Si desbloqueas el item seleccionado, se mostrara en la lista`, 450, 'No desbloquear', 'Si desbloquear')
                :
                    yield (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.optionsWithDetails)('Bloquear?', `Si bloqueas el item seleccionado, no se mostrara en la lista`, 430, 'No bloquear', 'Si bloquear');
            if (result === false) { // Si el resultado es falso, queremos bloquear
                this.unblockBrand(brand.id, unblock, true);
            }
            this.tablePaginationService.refreshTable();
        });
    }
    unblockBrand(id, unblock = false, admin = false) {
        this.usersService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__.TablePaginationService)); };
ClientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], inputs: { datosEnviar: "datosEnviar" }, decls: 1, vars: 9, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "role", "manageItem"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("manageItem", function ClientsComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("role", ctx.role);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__.TablePaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 25278:
/*!***********************************************************!*\
  !*** ./src/app/@shared/capture-cat/capture-cat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureCatModule": () => (/* binding */ CaptureCatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _capture_cat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture-cat.component */ 37117);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ 57206);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);








class CaptureCatModule {
}
CaptureCatModule.ɵfac = function CaptureCatModule_Factory(t) { return new (t || CaptureCatModule)(); };
CaptureCatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CaptureCatModule });
CaptureCatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarouselModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaptureCatModule, { declarations: [_capture_cat_component__WEBPACK_IMPORTED_MODULE_0__.CaptureCatComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarouselModule], exports: [_capture_cat_component__WEBPACK_IMPORTED_MODULE_0__.CaptureCatComponent] }); })();


/***/ }),

/***/ 11894:
/*!*****************************************************!*\
  !*** ./src/app/@shared/importar/importar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportarModule": () => (/* binding */ ImportarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _importar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importar.component */ 27236);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ 25015);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-csv */ 69490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class ImportarModule {
}
ImportarModule.ɵfac = function ImportarModule_Factory(t) { return new (t || ImportarModule)(); };
ImportarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ImportarModule });
ImportarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.LightboxModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule,
            _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__.CsvModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ImportarModule, { declarations: [_importar_component__WEBPACK_IMPORTED_MODULE_0__.ImportarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.LightboxModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__.CsvModule], exports: [_importar_component__WEBPACK_IMPORTED_MODULE_0__.ImportarComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map