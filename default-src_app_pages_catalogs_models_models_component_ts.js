"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_models_models_component_ts"],{

/***/ 83383:
/*!*************************************************!*\
  !*** ./src/app/@core/services/model.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsService": () => (/* binding */ ModelsService)
/* harmony export */ });
/* harmony import */ var src_app_graphql_operations_mutation_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/mutation/models */ 60600);
/* harmony import */ var src_app_graphql_operations_query_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/models */ 14157);
/* harmony import */ var src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@graphql/services/api.service */ 59586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ 60093);






class ModelsService extends src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo) {
        super(apollo);
    }
    add(model) {
        return this.set(src_app_graphql_operations_mutation_models__WEBPACK_IMPORTED_MODULE_0__.ADD_MODEL, {
            model
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.addModel;
        }));
    }
    update(model) {
        return this.set(src_app_graphql_operations_mutation_models__WEBPACK_IMPORTED_MODULE_0__.UPDATE_MODEL, {
            model
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.updateModel;
        }));
    }
    unblock(id, unblock = false, admin = false) {
        return this.set(src_app_graphql_operations_mutation_models__WEBPACK_IMPORTED_MODULE_0__.BLOCK_MODEL, {
            id,
            unblock,
            admin
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.blockModel;
        }));
    }
    getModels(page = 1, itemsPage = 10) {
        return this.get(src_app_graphql_operations_query_models__WEBPACK_IMPORTED_MODULE_1__.MODELS_LIST_QUERY, {
            itemsPage, page
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.models;
        }));
    }
    next() {
        return this.get(src_app_graphql_operations_query_models__WEBPACK_IMPORTED_MODULE_1__.MODEL_ID_QUERY, {}, {}, false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.modelId.modelId;
        }));
    }
}
ModelsService.ɵfac = function ModelsService_Factory(t) { return new (t || ModelsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__.Apollo)); };
ModelsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ModelsService, factory: ModelsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94711:
/*!*******************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_FRAGMENT": () => (/* binding */ MODEL_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const MODEL_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment ModelObject on Model {
    id
    description
    slug
    order
    active
  }
`;


/***/ }),

/***/ 60600:
/*!********************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/models.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_MODEL": () => (/* binding */ ADD_MODEL),
/* harmony export */   "BLOCK_MODEL": () => (/* binding */ BLOCK_MODEL),
/* harmony export */   "UPDATE_MODEL": () => (/* binding */ UPDATE_MODEL)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var src_app_graphql_operations_fragment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/fragment/model */ 94711);


const ADD_MODEL = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addModel($model: CatalogInput!) {
      addModel(model: $model) {
         status
         message
         model {
            ...ModelObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_FRAGMENT}
`;
const UPDATE_MODEL = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateModel($model: CatalogInput!) {
      updateModel(model: $model) {
         status
         message
         model {
            ...ModelObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_FRAGMENT}
`;
const BLOCK_MODEL = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockModel($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockModel(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;


/***/ }),

/***/ 14157:
/*!*****************************************************!*\
  !*** ./src/app/@graphql/operations/query/models.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODELS_LIST_QUERY": () => (/* binding */ MODELS_LIST_QUERY),
/* harmony export */   "MODEL_DATA_QUERY": () => (/* binding */ MODEL_DATA_QUERY),
/* harmony export */   "MODEL_ID_QUERY": () => (/* binding */ MODEL_ID_QUERY)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/model */ 94711);
/* harmony import */ var _fragment_result_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragment/result-info */ 75848);



const MODELS_LIST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
  query modelList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum, $filterName: String) {
    models(page: $page, itemsPage: $itemsPage, active: $active, filterName: $filterName) {
      info {
        ...ResultInfoObject
      }
      status
      message
      models {
        ...ModelObject
      }
    }
  }
  ${_fragment_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_FRAGMENT}
  ${_fragment_result_info__WEBPACK_IMPORTED_MODULE_1__.RESULT_INFO_FRAGMENT}
`;
const MODEL_DATA_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
   query modelData($include: Boolean!) {
      model{
         status
         message
         model {
            ...ModelObject
         }
      }
   }
   ${_fragment_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_FRAGMENT}
`;
const MODEL_ID_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
query {
   modelId{
      status
      message
      modelId
   }
}
`;


/***/ }),

/***/ 79498:
/*!************************************************************!*\
  !*** ./src/app/@pages/catalogs/models/models.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsComponent": () => (/* binding */ ModelsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@core/constants/filters */ 26408);
/* harmony import */ var src_app_graphql_operations_query_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/models */ 14157);
/* harmony import */ var src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/alert/alerts */ 17775);
/* harmony import */ var src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/alert/toasts */ 30844);
/* harmony import */ var src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/services/model.service */ 83383);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/capture-cat/capture-cat.component */ 37117);











const _c0 = ["mdCaptureCat"];
class ModelsComponent {
    constructor(modelsService, tablePaginationService) {
        this.modelsService = modelsService;
        this.tablePaginationService = tablePaginationService;
        this.query = src_app_graphql_operations_query_models__WEBPACK_IMPORTED_MODULE_1__.MODELS_LIST_QUERY;
        this.editMode = false;
        this.datosEnviar = new FormData();
        // Obtiene el siguiente Id del Catálogo
        this.modelsService.next().subscribe(result => {
            this.nextId = result;
        });
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'models',
            definitionKey: 'models',
            title: 'Modelos'
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
                property: 'order',
                label: 'Orden',
                class: 'clave'
            },
            {
                property: 'description',
                label: 'Marca',
                class: 'descriptionShort'
            },
            {
                property: 'slug',
                label: 'Slug',
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
            const catalog = $event[1];
            this.mostrarBoton = true;
            switch (action) {
                case 'add': // Agregar elemento
                    this.addForm(this.onNewCatalog());
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
        let catalog;
        return catalog = {
            id: this.nextId,
            description: '',
            slug: '',
            order: 1000,
            active: true
        };
    }
    addForm(catalog, editMode = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(catalog, editMode);
        });
    }
    updateForm(catalog, editMode = true, onlyView = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        else {
        }
    }
    addCatalog(catalog) {
        this.modelsService.add(catalog).subscribe((res) => {
            if (res.status) {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                setTimeout(() => {
                    this.modal.onCloseModal();
                    this.tablePaginationService.refreshTable();
                }, 2900);
            }
            else {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
    updateCatalog(catalog) {
        if (catalog.description !== '') {
            this.modelsService.update(catalog).subscribe((res) => {
                if (res.status) {
                    (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                    setTimeout(() => {
                        this.modal.onCloseModal();
                        this.tablePaginationService.refreshTable();
                    }, 2900);
                }
                else {
                    (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
                }
            });
        }
    }
    unblockForm(brand, unblock) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const result = (unblock) ?
                yield (0,src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.optionsWithDetails)('Desbloquear?', `Si desbloqueas el item seleccionado, se mostrara en la lista`, 450, 'No desbloquear', 'Si desbloquear')
                :
                    yield (0,src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.optionsWithDetails)('Bloquear?', `Si bloqueas el item seleccionado, no se mostrara en la lista`, 430, 'No bloquear', 'Si bloquear');
            if (result === false) { // Si el resultado es falso, queremos bloquear
                this.unblockBrand(brand.id, unblock, true);
            }
            this.tablePaginationService.refreshTable();
        });
    }
    unblockBrand(id, unblock = false, admin = false) {
        this.modelsService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
ModelsComponent.ɵfac = function ModelsComponent_Factory(t) { return new (t || ModelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_model_service__WEBPACK_IMPORTED_MODULE_5__.ModelsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__.TablePaginationService)); };
ModelsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ModelsComponent, selectors: [["app-models"]], viewQuery: function ModelsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 3, vars: 7, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "manageItem"], [3, "catalogChange"], ["mdCaptureCat", ""]], template: function ModelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("manageItem", function ModelsComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-capture-cat", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("catalogChange", function ModelsComponent_Template_app_capture_cat_catalogChange_1_listener($event) { return ctx.catalogBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__.TablePaginationComponent, _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_8__.CaptureCatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_models_models_component_ts.js.map