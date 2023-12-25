"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_cupons_cupons_component_ts"],{

/***/ 81859:
/*!**********************************************!*\
  !*** ./src/app/@core/models/cupon.models.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cupon": () => (/* binding */ Cupon)
/* harmony export */ });
class Cupon {
}


/***/ }),

/***/ 58291:
/*!*************************************************!*\
  !*** ./src/app/@core/services/cupon.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuponsService": () => (/* binding */ CuponsService)
/* harmony export */ });
/* harmony import */ var src_app_graphql_operations_mutation_cupons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/mutation/cupons */ 63267);
/* harmony import */ var src_app_graphql_operations_query_cupons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/cupons */ 30145);
/* harmony import */ var src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@graphql/services/api.service */ 59586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ 60093);







class CuponsService extends src_app_graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo) {
        super(apollo);
    }
    add(cupon) {
        return this.set(src_app_graphql_operations_mutation_cupons__WEBPACK_IMPORTED_MODULE_0__.ADD_CUPON, {
            cupon
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.addCupon;
        }));
    }
    update(cupon) {
        return this.set(src_app_graphql_operations_mutation_cupons__WEBPACK_IMPORTED_MODULE_0__.UPDATE_CUPON, {
            cupon
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.updateCupon;
        }));
    }
    unblock(id, unblock = false, admin = false) {
        return this.set(src_app_graphql_operations_mutation_cupons__WEBPACK_IMPORTED_MODULE_0__.BLOCK_CUPON, {
            id,
            unblock,
            admin
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.blockCupon;
        }));
    }
    getCupons(page = 1, itemsPage = 10, filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_FILTERS.ACTIVE) {
        return this.get(src_app_graphql_operations_query_cupons__WEBPACK_IMPORTED_MODULE_1__.CUPONS_LIST_QUERY, {
            itemsPage, page, filterActiveValues
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.cupons;
        }));
    }
    next() {
        return this.get(src_app_graphql_operations_query_cupons__WEBPACK_IMPORTED_MODULE_1__.CUPON_ID_QUERY, {}, {}, false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.cuponId.cuponId;
        }));
    }
}
CuponsService.ɵfac = function CuponsService_Factory(t) { return new (t || CuponsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_6__.Apollo)); };
CuponsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CuponsService, factory: CuponsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 39704:
/*!*******************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/cupon.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CUPON_FRAGMENT": () => (/* binding */ CUPON_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const CUPON_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment CuponObject on Cupon {
    id
    cupon
    description
    typeDiscount
    amountDiscount
    minimumPurchase
    active
  }
`;


/***/ }),

/***/ 63267:
/*!********************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/cupons.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_CUPON": () => (/* binding */ ADD_CUPON),
/* harmony export */   "BLOCK_CUPON": () => (/* binding */ BLOCK_CUPON),
/* harmony export */   "UPDATE_CUPON": () => (/* binding */ UPDATE_CUPON)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var src_app_graphql_operations_fragment_cupon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/fragment/cupon */ 39704);


const ADD_CUPON = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addCupon($cupon: CuponInput!) {
      addCupon(cupon: $cupon) {
         status
         message
         cupon {
            ...CuponObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_cupon__WEBPACK_IMPORTED_MODULE_0__.CUPON_FRAGMENT}
`;
const UPDATE_CUPON = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateCupon($cupon: CuponInput!) {
      updateCupon(cupon: $cupon) {
         status
         message
         cupon {
            ...CuponObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_cupon__WEBPACK_IMPORTED_MODULE_0__.CUPON_FRAGMENT}
`;
const BLOCK_CUPON = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockCupon($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockCupon(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;


/***/ }),

/***/ 30145:
/*!*****************************************************!*\
  !*** ./src/app/@graphql/operations/query/cupons.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CUPONS_LIST_QUERY": () => (/* binding */ CUPONS_LIST_QUERY),
/* harmony export */   "CUPON_DATA_QUERY": () => (/* binding */ CUPON_DATA_QUERY),
/* harmony export */   "CUPON_ID_QUERY": () => (/* binding */ CUPON_ID_QUERY)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_cupon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/cupon */ 39704);
/* harmony import */ var _fragment_result_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragment/result-info */ 75848);



const CUPONS_LIST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
  query cuponList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum, $filterName: String) {
    cupons(page: $page, itemsPage: $itemsPage, active: $active, filterName: $filterName) {
      info {
        ...ResultInfoObject
      }
      status
      message
      cupons {
        ...CuponObject
      }
    }
  }
  ${_fragment_cupon__WEBPACK_IMPORTED_MODULE_0__.CUPON_FRAGMENT}
  ${_fragment_result_info__WEBPACK_IMPORTED_MODULE_1__.RESULT_INFO_FRAGMENT}
`;
const CUPON_DATA_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
   query cuponData($include: Boolean!) {
      cupons{
         status
         message
         cupons {
            ...CuponObject
         }
      }
   }
   ${_fragment_cupon__WEBPACK_IMPORTED_MODULE_0__.CUPON_FRAGMENT}
`;
const CUPON_ID_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"] `
query {
   cuponId{
      status
      message
      cuponId
   }
}
`;


/***/ }),

/***/ 16158:
/*!************************************************************!*\
  !*** ./src/app/@pages/catalogs/cupons/cupons.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuponsComponent": () => (/* binding */ CuponsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _core_models_cupon_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/cupon.models */ 81859);
/* harmony import */ var _graphql_operations_query_cupons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @graphql/operations/query/cupons */ 30145);
/* harmony import */ var _shared_alert_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/alert/alerts */ 17775);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_cupon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/cupon.service */ 58291);
/* harmony import */ var _shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@shared/capture-cat/capture-cat.component */ 37117);












const _c0 = ["mdCaptureCat"];
class CuponsComponent {
    constructor(cuponsService, tablePaginationService) {
        this.cuponsService = cuponsService;
        this.tablePaginationService = tablePaginationService;
        this.query = _graphql_operations_query_cupons__WEBPACK_IMPORTED_MODULE_2__.CUPONS_LIST_QUERY;
        this.editMode = false;
        this.title = 'Catálogo de Cupones';
        this.onlyCupons = true;
        this.datosEnviar = new FormData();
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'cupons',
            definitionKey: 'cupons',
            title: 'Cupones',
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
                property: 'cupon',
                label: 'Cupon',
                class: 'descriptionShort'
            },
            {
                property: 'description',
                label: 'Descripcion',
                class: 'descriptionShort'
            },
            {
                property: 'typeDiscount',
                label: 'Tipo Descuento',
                class: 'clave'
            },
            {
                property: 'amountDiscount',
                label: 'Descuento',
                class: 'importe'
            },
            {
                property: 'active',
                label: 'Activo?',
                class: 'number'
            }
        ];
        this.cupon = new _core_models_cupon_models__WEBPACK_IMPORTED_MODULE_1__.Cupon();
        this.NextId();
    }
    NextId() {
        // Obtiene el siguiente Id del Catálogo
        this.cuponsService.next().subscribe(result => {
            this.nextId = result;
        });
    }
    takeAction($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Obtiene la informacion para las acciones
            const action = $event[0];
            const cupon = $event[1];
            this.mostrarBoton = true;
            switch (action) {
                case 'add': // Agregar elemento
                    this.onNewCatalog();
                    this.addForm();
                    break;
                case 'edit': // Modificar elemento
                    this.updateForm(cupon);
                    break;
                case 'info': // Mostrar información del elemento
                    this.mostrarBoton = false;
                    this.updateForm(cupon, true, true);
                    break;
                case 'block': // Bloquear elemento
                    this.unblockForm(cupon, false);
                    break;
                case 'unblock': // Bloquear elemento
                    this.unblockForm(cupon, true);
                    break;
                default:
                    break;
            }
        });
    }
    onNewCatalog() {
        this.cupon = new _core_models_cupon_models__WEBPACK_IMPORTED_MODULE_1__.Cupon();
        this.NextId();
        this.cupon = {
            id: this.nextId,
            cupon: '',
            description: '',
            typeDiscount: '',
            amountDiscount: 0,
            minimumPurchase: 0,
            active: true
        };
    }
    addForm(editMode = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            setTimeout(() => {
                this.modal.onOpenModal(undefined, editMode, false, this.cupon);
            }, 2000);
        });
    }
    updateForm(cupon, editMode = true, onlyView = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(undefined, editMode, onlyView, cupon);
        });
    }
    cuponBack(event) {
        if (event.tipo === 'item') {
            if (this.editMode) { // Si es un  para editar
                this.updateCatalog(event.item);
            }
            else { // Si es un catalogo nuevo
                this.addCatalog(event.item);
            }
        }
    }
    addCatalog(cupon) {
        this.cuponsService.add(cupon).subscribe((res) => {
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
    updateCatalog(cupon) {
        if (cupon.description !== '') {
            this.cuponsService.update(cupon).subscribe((res) => {
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
        this.cuponsService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_4__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_5__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
CuponsComponent.ɵfac = function CuponsComponent_Factory(t) { return new (t || CuponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_cupon_service__WEBPACK_IMPORTED_MODULE_6__.CuponsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_7__.TablePaginationService)); };
CuponsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: CuponsComponent, selectors: [["app-cupons"]], viewQuery: function CuponsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 3, vars: 10, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "onlyCupons", "manageItem"], [3, "onlyCupons", "cuponChange"], ["mdCaptureCat", ""]], template: function CuponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("manageItem", function CuponsComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-capture-cat", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("cuponChange", function CuponsComponent_Template_app_capture_cat_cuponChange_1_listener($event) { return ctx.cuponBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("onlyCupons", ctx.onlyCupons);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("onlyCupons", ctx.onlyCupons);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_8__.TablePaginationComponent, _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_9__.CaptureCatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXBvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_cupons_cupons_component_ts.js.map