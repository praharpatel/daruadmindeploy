"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_orders_cva_cva_module_ts"],{

/***/ 84715:
/*!*********************************************************!*\
  !*** ./src/app/@pages/orders/cva/cva-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvaRoutingModule": () => (/* binding */ CvaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_orders_cva_list_orders_cva_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-orders-cva/list-orders-cva.component */ 32002);
/* harmony import */ var _detail_order_cva_detail_order_cva_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-order-cva/detail-order-cva.component */ 85032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'list',
        component: _list_orders_cva_list_orders_cva_component__WEBPACK_IMPORTED_MODULE_0__.ListOrdersCvaComponent
    },
    {
        path: 'detail',
        component: _detail_order_cva_detail_order_cva_component__WEBPACK_IMPORTED_MODULE_1__.DetailOrderCvaComponent
    }
];
class CvaRoutingModule {
}
CvaRoutingModule.ɵfac = function CvaRoutingModule_Factory(t) { return new (t || CvaRoutingModule)(); };
CvaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CvaRoutingModule });
CvaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CvaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 69724:
/*!*************************************************!*\
  !*** ./src/app/@pages/orders/cva/cva.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvaModule": () => (/* binding */ CvaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _cva_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cva-routing.module */ 84715);
/* harmony import */ var _list_orders_cva_list_orders_cva_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-orders-cva/list-orders-cva.component */ 32002);
/* harmony import */ var _detail_order_cva_detail_order_cva_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-order-cva/detail-order-cva.component */ 85032);
/* harmony import */ var _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class CvaModule {
}
CvaModule.ɵfac = function CvaModule_Factory(t) { return new (t || CvaModule)(); };
CvaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CvaModule });
CvaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _cva_routing_module__WEBPACK_IMPORTED_MODULE_0__.CvaRoutingModule,
            _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CvaModule, { declarations: [_list_orders_cva_list_orders_cva_component__WEBPACK_IMPORTED_MODULE_1__.ListOrdersCvaComponent,
        _detail_order_cva_detail_order_cva_component__WEBPACK_IMPORTED_MODULE_2__.DetailOrderCvaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _cva_routing_module__WEBPACK_IMPORTED_MODULE_0__.CvaRoutingModule,
        _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__.TablePaginationModule] }); })();


/***/ }),

/***/ 85032:
/*!**********************************************************************************!*\
  !*** ./src/app/@pages/orders/cva/detail-order-cva/detail-order-cva.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailOrderCvaComponent": () => (/* binding */ DetailOrderCvaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DetailOrderCvaComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailOrderCvaComponent.ɵfac = function DetailOrderCvaComponent_Factory(t) { return new (t || DetailOrderCvaComponent)(); };
DetailOrderCvaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailOrderCvaComponent, selectors: [["app-detail-order-cva"]], decls: 2, vars: 0, template: function DetailOrderCvaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Detalle de la Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtb3JkZXItY3ZhLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 32002:
/*!********************************************************************************!*\
  !*** ./src/app/@pages/orders/cva/list-orders-cva/list-orders-cva.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOrdersCvaComponent": () => (/* binding */ ListOrdersCvaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _graphql_operations_query_suppliers_cva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql/operations/query/suppliers/cva */ 5371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@shared/table-pagination/table-pagination.component */ 93782);






class ListOrdersCvaComponent {
    constructor(tablePaginationService) {
        this.tablePaginationService = tablePaginationService;
        this.query = _graphql_operations_query_suppliers_cva__WEBPACK_IMPORTED_MODULE_1__.ORDERSCVA_LIST_QUERY;
        this.editMode = false;
        this.title = 'Ordenes solicitadas a CVA';
        this.mostrarImport = false;
        this.mostrarAgregar = false;
        this.mostrarActivos = false;
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = -1;
        this.resultData = {
            listKey: 'listOrdersCva',
            definitionKey: 'listOrdersCva',
            title: 'Ordenes CVA',
            apiExterna: 'orderscva'
        };
        this.include = false;
        this.filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_FILTERS.ALL;
        this.columns = [
            {
                property: 'Numero',
                label: 'Numero',
                class: 'clave'
            },
            {
                property: 'Total',
                label: 'Total',
                class: 'numero'
            },
            {
                property: 'Moneda',
                label: 'Moneda',
                class: 'id'
            },
            {
                property: 'NumOC',
                label: 'NumOC',
                class: 'clave'
            },
            {
                property: 'Almacen',
                label: 'Almacen',
                class: 'clave'
            },
            {
                property: 'Asignado',
                label: 'Asignado',
                class: 'clave'
            },
            {
                property: 'FechaAsignado',
                label: 'FechaAsignado',
                class: 'clave'
            }
        ];
    }
    takeAction($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Obtiene la informacion para las acciones
            const action = $event[0];
            const product = $event[1];
            this.mostrarBoton = false;
            switch (action) {
                case 'add': // Agregar elemento
                    console.log('unblock');
                    break;
                case 'edit': // Modificar elemento
                    console.log('unblock');
                    break;
                case 'info': // Mostrar información del elemento
                    console.log('unblock');
                    break;
                case 'import':
                    console.log('unblock');
                    break;
                case 'block': // Bloquear elemento
                    console.log('unblock');
                    break;
                case 'unblock': // Bloquear elemento
                    console.log('unblock');
                    break;
                default:
                    break;
            }
        });
    }
}
ListOrdersCvaComponent.ɵfac = function ListOrdersCvaComponent_Factory(t) { return new (t || ListOrdersCvaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_2__.TablePaginationService)); };
ListOrdersCvaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListOrdersCvaComponent, selectors: [["app-list-orders-cva"]], decls: 1, vars: 11, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "mostrarImport", "mostrarAgregar", "mostrarActivos", "manageItem"]], template: function ListOrdersCvaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("manageItem", function ListOrdersCvaComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("mostrarImport", ctx.mostrarImport)("mostrarAgregar", ctx.mostrarAgregar)("mostrarActivos", ctx.mostrarActivos);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_3__.TablePaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW9yZGVycy1jdmEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_orders_cva_cva_module_ts.js.map