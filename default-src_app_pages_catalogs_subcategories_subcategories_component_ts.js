"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_subcategories_subcategories_component_ts"],{

/***/ 93915:
/*!********************************************************!*\
  !*** ./src/app/@core/services/subcategorie.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoriesService": () => (/* binding */ SubcategoriesService)
/* harmony export */ });
/* harmony import */ var src_app_graphql_operations_mutation_subcategorie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/mutation/subcategorie */ 10145);
/* harmony import */ var src_app_graphql_operations_query_subcategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/subcategories */ 2466);
/* harmony import */ var src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@graphql/services/api.service */ 59586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ 60093);






class SubcategoriesService extends src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo) {
        super(apollo);
    }
    add(subcategorie) {
        return this.set(src_app_graphql_operations_mutation_subcategorie__WEBPACK_IMPORTED_MODULE_0__.ADD_SUBCATEGORIE, {
            subcategorie
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.addSubcategorie;
        }));
    }
    update(subcategorie) {
        return this.set(src_app_graphql_operations_mutation_subcategorie__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SUBCATEGORIE, {
            subcategorie
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.updateSubcategorie;
        }));
    }
    unblock(id, unblock = false, admin = false) {
        return this.set(src_app_graphql_operations_mutation_subcategorie__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SUBCATEGORIE, {
            id,
            unblock,
            admin
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.blockSubcategorie;
        }));
    }
    getSubcategories(page = 1, itemsPage = 10) {
        return this.get(src_app_graphql_operations_query_subcategories__WEBPACK_IMPORTED_MODULE_1__.SUBCATEGORIES_LIST_QUERY, {
            itemsPage, page
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.subcategories;
        }));
    }
    next() {
        return this.get(src_app_graphql_operations_query_subcategories__WEBPACK_IMPORTED_MODULE_1__.SUBCATEGORIE_ID_QUERY, {}, {}, false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            return result.subcategorieId.subcategorieId;
        }));
    }
}
SubcategoriesService.ɵfac = function SubcategoriesService_Factory(t) { return new (t || SubcategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__.Apollo)); };
SubcategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SubcategoriesService, factory: SubcategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80648:
/*!**************************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/subcategorie.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUBCATEGORIE_FRAGMENT": () => (/* binding */ SUBCATEGORIE_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const SUBCATEGORIE_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment SubcategorieObject on Subcategorie {
    id
    description
    slug
    order
    active
  }
`;


/***/ }),

/***/ 10145:
/*!**************************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/subcategorie.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_SUBCATEGORIE": () => (/* binding */ ADD_SUBCATEGORIE),
/* harmony export */   "BLOCK_SUBCATEGORIE": () => (/* binding */ BLOCK_SUBCATEGORIE),
/* harmony export */   "UPDATE_SUBCATEGORIE": () => (/* binding */ UPDATE_SUBCATEGORIE)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var src_app_graphql_operations_fragment_subcategorie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/fragment/subcategorie */ 80648);


const ADD_SUBCATEGORIE = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addSubcategorie($subcategorie: CatalogInput!) {
      addSubcategorie(subcategorie: $subcategorie) {
         status
         message
         subcategorie {
            ...SubcategorieObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_subcategorie__WEBPACK_IMPORTED_MODULE_0__.SUBCATEGORIE_FRAGMENT}
`;
const UPDATE_SUBCATEGORIE = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateSubcategorie($subcategorie: CatalogInput!) {
      updateSubcategorie(subcategorie: $subcategorie) {
         status
         message
         subcategorie {
            ...SubcategorieObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_subcategorie__WEBPACK_IMPORTED_MODULE_0__.SUBCATEGORIE_FRAGMENT}
`;
const BLOCK_SUBCATEGORIE = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockSubcategorie($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockSubcategorie(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;


/***/ }),

/***/ 2466:
/*!************************************************************!*\
  !*** ./src/app/@graphql/operations/query/subcategories.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORIE_DATA_QUERY": () => (/* binding */ CATEGORIE_DATA_QUERY),
/* harmony export */   "SUBCATEGORIES_LIST_QUERY": () => (/* binding */ SUBCATEGORIES_LIST_QUERY),
/* harmony export */   "SUBCATEGORIE_ID_QUERY": () => (/* binding */ SUBCATEGORIE_ID_QUERY)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_subcategorie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/subcategorie */ 80648);
/* harmony import */ var _fragment_result_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragment/result-info */ 75848);



const SUBCATEGORIES_LIST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
  query subcategorieList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum, $filterName: String) {
    subcategories(page: $page, itemsPage: $itemsPage, active: $active, filterName: $filterName) {
      info {
        ...ResultInfoObject
      }
      status
      message
      subcategories {
        ...SubcategorieObject
      }
    }
  }
  ${_fragment_subcategorie__WEBPACK_IMPORTED_MODULE_0__.SUBCATEGORIE_FRAGMENT}
  ${_fragment_result_info__WEBPACK_IMPORTED_MODULE_1__.RESULT_INFO_FRAGMENT}
`;
const CATEGORIE_DATA_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
   query subcategorieData($include: Boolean!) {
    subcategorie{
         status
         message
         subcategorie {
            ...SubcategorieObject
         }
      }
   }
   ${_fragment_subcategorie__WEBPACK_IMPORTED_MODULE_0__.SUBCATEGORIE_FRAGMENT}
`;
const SUBCATEGORIE_ID_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
query {
   subcategorieId{
      status
      message
      subcategorieId
   }
}
`;


/***/ }),

/***/ 15403:
/*!**************************************************************************!*\
  !*** ./src/app/@pages/catalogs/subcategories/subcategories.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoriesComponent": () => (/* binding */ SubcategoriesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@core/constants/filters */ 26408);
/* harmony import */ var src_app_graphql_operations_query_subcategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/subcategories */ 2466);
/* harmony import */ var src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/alert/alerts */ 17775);
/* harmony import */ var src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/alert/toasts */ 30844);
/* harmony import */ var src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_subcategorie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/services/subcategorie.service */ 93915);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/capture-cat/capture-cat.component */ 37117);











const _c0 = ["mdCaptureCat"];
class SubcategoriesComponent {
    constructor(subcategoriesService, tablePaginationService) {
        this.subcategoriesService = subcategoriesService;
        this.tablePaginationService = tablePaginationService;
        this.query = src_app_graphql_operations_query_subcategories__WEBPACK_IMPORTED_MODULE_1__.SUBCATEGORIES_LIST_QUERY;
        this.editMode = false;
        this.datosEnviar = new FormData();
        // Obtiene el siguiente Id del Catálogo
        this.subcategoriesService.next().subscribe(result => {
            this.nextId = result;
        });
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'subcategories',
            definitionKey: 'subcategories',
            title: 'Subcategorias'
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
        this.subcategoriesService.add(catalog).subscribe((res) => {
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
            this.subcategoriesService.update(catalog).subscribe((res) => {
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
        this.subcategoriesService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
SubcategoriesComponent.ɵfac = function SubcategoriesComponent_Factory(t) { return new (t || SubcategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_subcategorie_service__WEBPACK_IMPORTED_MODULE_5__.SubcategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__.TablePaginationService)); };
SubcategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SubcategoriesComponent, selectors: [["app-subcategories"]], viewQuery: function SubcategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 3, vars: 7, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "manageItem"], [3, "catalogChange"], ["mdCaptureCat", ""]], template: function SubcategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("manageItem", function SubcategoriesComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-capture-cat", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("catalogChange", function SubcategoriesComponent_Template_app_capture_cat_catalogChange_1_listener($event) { return ctx.catalogBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__.TablePaginationComponent, _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_8__.CaptureCatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_subcategories_subcategories_component_ts.js.map