"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_welcomes_welcomes_component_ts"],{

/***/ 44672:
/*!***************************************************!*\
  !*** ./src/app/@core/services/welcome.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomesService": () => (/* binding */ WelcomesService)
/* harmony export */ });
/* harmony import */ var src_app_graphql_operations_mutation_welcomes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/mutation/welcomes */ 86717);
/* harmony import */ var src_app_graphql_operations_query_welcomes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/welcomes */ 28390);
/* harmony import */ var src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@graphql/services/api.service */ 59586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ 60093);







class WelcomesService extends src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo) {
        super(apollo);
    }
    add(welcome) {
        return this.set(src_app_graphql_operations_mutation_welcomes__WEBPACK_IMPORTED_MODULE_0__.ADD_WELCOME, {
            welcome
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.addWelcome;
        }));
    }
    update(welcome) {
        return this.set(src_app_graphql_operations_mutation_welcomes__WEBPACK_IMPORTED_MODULE_0__.UPDATE_WELCOME, {
            welcome
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.updateWelcome;
        }));
    }
    unblock(id, unblock = false, admin = false) {
        return this.set(src_app_graphql_operations_mutation_welcomes__WEBPACK_IMPORTED_MODULE_0__.BLOCK_WELCOME, {
            id,
            unblock,
            admin
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.blockWelcome;
        }));
    }
    getWelcomes(page = 1, itemsPage = 10, filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_FILTERS.ACTIVE) {
        return this.get(src_app_graphql_operations_query_welcomes__WEBPACK_IMPORTED_MODULE_1__.WELCOME_LIST_QUERY, {
            itemsPage, page, filterActiveValues
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.welcomes;
        }));
    }
    next() {
        return this.get(src_app_graphql_operations_query_welcomes__WEBPACK_IMPORTED_MODULE_1__.WELCOME_ID_QUERY, {}, {}, false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.welcomeId.welcomeId;
        }));
    }
}
WelcomesService.ɵfac = function WelcomesService_Factory(t) { return new (t || WelcomesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_6__.Apollo)); };
WelcomesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WelcomesService, factory: WelcomesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85753:
/*!*********************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/welcome.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WELCOME_FRAGMENT": () => (/* binding */ WELCOME_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const WELCOME_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment WelcomeObject on Welcome {
    id
    email
    name
    cupon
  }
`;


/***/ }),

/***/ 86717:
/*!**********************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/welcomes.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_WELCOME": () => (/* binding */ ADD_WELCOME),
/* harmony export */   "BLOCK_WELCOME": () => (/* binding */ BLOCK_WELCOME),
/* harmony export */   "DELETE_WELCOME": () => (/* binding */ DELETE_WELCOME),
/* harmony export */   "UPDATE_WELCOME": () => (/* binding */ UPDATE_WELCOME)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/welcome */ 85753);


const ADD_WELCOME = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addWelcome($welcome: WelcomeInput!) {
      addWelcome(welcome: $welcome) {
         status
         message
         welcome {
            ...WelcomeObject
         }
      }
   }
   ${_fragment_welcome__WEBPACK_IMPORTED_MODULE_0__.WELCOME_FRAGMENT}
`;
const UPDATE_WELCOME = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateWelcome($welcome: WelcomeInput!) {
      updateWelcome(welcome: $welcome) {
         status
         message
         welcome {
            ...WelcomeObject
         }
      }
   }
   ${_fragment_welcome__WEBPACK_IMPORTED_MODULE_0__.WELCOME_FRAGMENT}
`;
const BLOCK_WELCOME = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockWelcome($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockWelcome(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;
const DELETE_WELCOME = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation deleteWelcome($id: ID!) {
      deleteWelcome(id: $id) {
         status
         message
      }
   }
`;


/***/ }),

/***/ 28390:
/*!*******************************************************!*\
  !*** ./src/app/@graphql/operations/query/welcomes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WELCOME_ID_QUERY": () => (/* binding */ WELCOME_ID_QUERY),
/* harmony export */   "WELCOME_LIST_QUERY": () => (/* binding */ WELCOME_LIST_QUERY),
/* harmony export */   "WELCOME_QUERY": () => (/* binding */ WELCOME_QUERY)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/welcome */ 85753);
/* harmony import */ var _fragment_result_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragment/result-info */ 75848);



const WELCOME_LIST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
  query welcomes($page: Int, $itemsPage: Int, $active: ActiveFilterEnum, $filterName: String) {
    welcomes(page: $page, itemsPage: $itemsPage, active: $active, filterName: $filterName) {
      info {
        ...ResultInfoObject
      }
      status
      message
      welcomes {
        ...WelcomeObject
      }
    }
  }
  ${_fragment_welcome__WEBPACK_IMPORTED_MODULE_0__.WELCOME_FRAGMENT}
  ${_fragment_result_info__WEBPACK_IMPORTED_MODULE_1__.RESULT_INFO_FRAGMENT}
`;
const WELCOME_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
   query welcome($include: Boolean!) {
      welcome{
         status
         message
         welcome {
            ...WelcomeObject
         }
      }
   }
   ${_fragment_welcome__WEBPACK_IMPORTED_MODULE_0__.WELCOME_FRAGMENT}
`;
const WELCOME_ID_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
query {
   welcomeId{
      status
      message
      welcomeId
   }
}
`;


/***/ }),

/***/ 70860:
/*!****************************************************************!*\
  !*** ./src/app/@pages/catalogs/welcomes/welcomes.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomesComponent": () => (/* binding */ WelcomesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _core_models_catalog_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/catalog.models */ 78195);
/* harmony import */ var _graphql_operations_query_welcomes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @graphql/operations/query/welcomes */ 28390);
/* harmony import */ var _shared_alert_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/alert/alerts */ 17775);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_welcome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/welcome.service */ 44672);
/* harmony import */ var _shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@shared/capture-cat/capture-cat.component */ 37117);












const _c0 = ["mdCaptureCat"];
class WelcomesComponent {
    constructor(welcomesService, tablePaginationService) {
        this.welcomesService = welcomesService;
        this.tablePaginationService = tablePaginationService;
        this.query = _graphql_operations_query_welcomes__WEBPACK_IMPORTED_MODULE_2__.WELCOME_LIST_QUERY;
        this.editMode = false;
        this.title = 'Catálogo de Cupones';
        this.mostrarImport = false;
        this.mostrarAgregar = false;
        this.mostrarActivos = false;
        this.datosEnviar = new FormData();
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'welcomes',
            definitionKey: 'welcomes',
            title: 'Bienvenidos',
            apiExterna: ''
        };
        this.include = false;
        this.filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_FILTERS.ALL;
        this.columns = [
            {
                property: 'id',
                label: '#',
                class: 'clave'
            },
            {
                property: 'email',
                label: 'Correo',
                class: 'descriptionShort'
            },
            {
                property: 'name',
                label: 'Nombre',
                class: 'descriptionShort'
            },
            {
                property: 'cupon',
                label: 'Cupon',
                class: 'descriptionShort'
            }
        ];
        this.catalog = new _core_models_catalog_models__WEBPACK_IMPORTED_MODULE_1__.Catalog();
        this.NextId();
    }
    NextId() {
        // Obtiene el siguiente Id del Catálogo
        this.welcomesService.next().subscribe(result => {
            console.log('welcomesService/result: ', result);
            this.nextId = result;
        });
    }
    takeAction($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Obtiene la informacion para las acciones
            const action = $event[0];
            const catalog = $event[1];
            this.mostrarBoton = true;
            switch (action) {
                case 'add': // Agregar elemento
                    this.onNewCatalog();
                    this.addForm();
                    break;
                case 'edit': // Modificar elemento
                    this.updateForm(catalog);
                    break;
                case 'info': // Mostrar información del elemento
                    this.mostrarBoton = false;
                    this.updateForm(catalog, true, true);
                    break;
                case 'block': // Bloquear elemento
                    this.unblockForm(catalog, false);
                    break;
                case 'unblock': // Bloquear elemento
                    this.unblockForm(catalog, true);
                    break;
                default:
                    break;
            }
        });
    }
    onNewCatalog() {
        this.catalog = new _core_models_catalog_models__WEBPACK_IMPORTED_MODULE_1__.Catalog();
        this.NextId();
        this.catalog = {
            id: this.nextId,
            description: '',
            name: '',
            cupon: '',
            active: true
        };
    }
    addForm(editMode = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            setTimeout(() => {
                this.modal.onOpenModal(this.catalog, editMode);
            }, 2000);
        });
    }
    updateForm(catalog, editMode = true, onlyView = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(catalog, editMode, onlyView);
        });
    }
    catalogBack(event) {
        if (event.tipo === 'item') {
            if (this.editMode) { // Si es un  para editar
                this.updateCatalog(event.item);
            }
            else { // Si es un catalogo nuevo
                this.addCatalog(event.item);
            }
        }
    }
    addCatalog(catalog) {
        this.welcomesService.add(catalog).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.SUCCESS, res.message);
                setTimeout(() => {
                    this.modal.onCloseModal();
                    this.tablePaginationService.refreshTable();
                }, 2900);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
    updateCatalog(catalog) {
        if (catalog.description !== '') {
            this.welcomesService.update(catalog).subscribe((res) => {
                if (res.status) {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.SUCCESS, res.message);
                    setTimeout(() => {
                        this.modal.onCloseModal();
                        this.tablePaginationService.refreshTable();
                    }, 2900);
                }
                else {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.WARNING, res.message);
                }
            });
        }
    }
    unblockForm(cupon, unblock) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const result = (unblock) ?
                yield (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_3__.optionsWithDetails)('Desbloquear?', `Si desbloqueas el item seleccionado, se mostrara en la lista`, 450, 'No desbloquear', 'Si desbloquear')
                :
                    yield (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_3__.optionsWithDetails)('Bloquear?', `Si bloqueas el item seleccionado, no se mostrara en la lista`, 430, 'No bloquear', 'Si bloquear');
            if (result === false) { // Si el resultado es falso, queremos bloquear
                this.unblockCupon(cupon.id, unblock, true);
            }
            this.tablePaginationService.refreshTable();
        });
    }
    unblockCupon(id, unblock = false, admin = false) {
        this.welcomesService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
WelcomesComponent.ɵfac = function WelcomesComponent_Factory(t) { return new (t || WelcomesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_welcome_service__WEBPACK_IMPORTED_MODULE_6__.WelcomesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_7__.TablePaginationService)); };
WelcomesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: WelcomesComponent, selectors: [["app-welcomes"]], viewQuery: function WelcomesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 3, vars: 11, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "mostrarImport", "mostrarAgregar", "mostrarActivos", "manageItem"], [3, "catalogChange"], ["mdCaptureCat", ""]], template: function WelcomesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("manageItem", function WelcomesComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-capture-cat", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("catalogChange", function WelcomesComponent_Template_app_capture_cat_catalogChange_1_listener($event) { return ctx.catalogBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("mostrarImport", ctx.mostrarImport)("mostrarAgregar", ctx.mostrarAgregar)("mostrarActivos", ctx.mostrarActivos);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_8__.TablePaginationComponent, _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_9__.CaptureCatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_welcomes_welcomes_component_ts.js.map