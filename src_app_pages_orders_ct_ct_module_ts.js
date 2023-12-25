"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_orders_ct_ct_module_ts"],{

/***/ 19456:
/*!*******************************************************!*\
  !*** ./src/app/@pages/orders/ct/ct-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtRoutingModule": () => (/* binding */ CtRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _detail_order_ct_detail_order_ct_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-order-ct/detail-order-ct.component */ 88999);
/* harmony import */ var _list_orders_ct_list_orders_ct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-orders-ct/list-orders-ct.component */ 70747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'list',
        component: _list_orders_ct_list_orders_ct_component__WEBPACK_IMPORTED_MODULE_1__.ListOrdersCtComponent
    },
    {
        path: 'detail',
        component: _detail_order_ct_detail_order_ct_component__WEBPACK_IMPORTED_MODULE_0__.DetailOrderCtComponent
    }
];
class CtRoutingModule {
}
CtRoutingModule.ɵfac = function CtRoutingModule_Factory(t) { return new (t || CtRoutingModule)(); };
CtRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CtRoutingModule });
CtRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CtRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 92409:
/*!***********************************************!*\
  !*** ./src/app/@pages/orders/ct/ct.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtModule": () => (/* binding */ CtModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ct-routing.module */ 19456);
/* harmony import */ var _list_orders_ct_list_orders_ct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-orders-ct/list-orders-ct.component */ 70747);
/* harmony import */ var _detail_order_ct_detail_order_ct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-order-ct/detail-order-ct.component */ 88999);
/* harmony import */ var _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.module */ 85355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class CtModule {
}
CtModule.ɵfac = function CtModule_Factory(t) { return new (t || CtModule)(); };
CtModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CtModule });
CtModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ct_routing_module__WEBPACK_IMPORTED_MODULE_0__.CtRoutingModule,
            _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__.TablePaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CtModule, { declarations: [_list_orders_ct_list_orders_ct_component__WEBPACK_IMPORTED_MODULE_1__.ListOrdersCtComponent,
        _detail_order_ct_detail_order_ct_component__WEBPACK_IMPORTED_MODULE_2__.DetailOrderCtComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ct_routing_module__WEBPACK_IMPORTED_MODULE_0__.CtRoutingModule,
        _shared_table_pagination_table_pagination_module__WEBPACK_IMPORTED_MODULE_3__.TablePaginationModule] }); })();


/***/ }),

/***/ 88999:
/*!*******************************************************************************!*\
  !*** ./src/app/@pages/orders/ct/detail-order-ct/detail-order-ct.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailOrderCtComponent": () => (/* binding */ DetailOrderCtComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DetailOrderCtComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailOrderCtComponent.ɵfac = function DetailOrderCtComponent_Factory(t) { return new (t || DetailOrderCtComponent)(); };
DetailOrderCtComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailOrderCtComponent, selectors: [["app-detail-order-ct"]], decls: 2, vars: 0, template: function DetailOrderCtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "detail-order-ct works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtb3JkZXItY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 70747:
/*!*****************************************************************************!*\
  !*** ./src/app/@pages/orders/ct/list-orders-ct/list-orders-ct.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOrdersCtComponent": () => (/* binding */ ListOrdersCtComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _graphql_operations_query_suppliers_ct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql/operations/query/suppliers/ct */ 9234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@shared/table-pagination/table-pagination.component */ 93782);






class ListOrdersCtComponent {
    constructor(tablePaginationService) {
        this.tablePaginationService = tablePaginationService;
        this.query = _graphql_operations_query_suppliers_ct__WEBPACK_IMPORTED_MODULE_1__.ORDERSCT_LIST_QUERY;
        this.editMode = false;
        this.title = 'Ordenes solicitadas a CT';
        this.mostrarImport = false;
        this.mostrarAgregar = false;
        this.mostrarActivos = false;
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = -1;
        this.resultData = {
            listKey: 'listOrdersCt',
            definitionKey: 'listOrdersCt',
            title: 'Ordenes CT',
            apiExterna: 'ordersct'
        };
        this.include = false;
        this.filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_FILTERS.ALL;
        this.columns = [
            {
                property: 'idPedido',
                label: 'Pedido DARU',
                class: 'clave'
            },
            {
                property: 'tipoPago',
                label: 'Tipo de Pago',
                class: 'clave'
            },
            {
                property: 'respuestaCT.pedidoWeb',
                label: 'Pedido CT',
                class: 'clave'
            },
            {
                property: 'respuestaCT.fecha',
                label: 'Fecha',
                class: 'clave'
            },
            {
                property: 'respuestaCT.estatus',
                label: 'Estatus',
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
ListOrdersCtComponent.ɵfac = function ListOrdersCtComponent_Factory(t) { return new (t || ListOrdersCtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_2__.TablePaginationService)); };
ListOrdersCtComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListOrdersCtComponent, selectors: [["app-list-orders-ct"]], decls: 1, vars: 11, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "mostrarImport", "mostrarAgregar", "mostrarActivos", "manageItem"]], template: function ListOrdersCtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("manageItem", function ListOrdersCtComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("mostrarImport", ctx.mostrarImport)("mostrarAgregar", ctx.mostrarAgregar)("mostrarActivos", ctx.mostrarActivos);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_3__.TablePaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW9yZGVycy1jdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_orders_ct_ct_module_ts.js.map