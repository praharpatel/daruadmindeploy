"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_groups_groups_component_ts"],{

/***/ 96956:
/*!************************************************************!*\
  !*** ./src/app/@pages/catalogs/groups/groups.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": () => (/* binding */ GroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@core/constants/filters */ 26408);
/* harmony import */ var src_app_graphql_operations_query_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@graphql/operations/query/groups */ 47284);
/* harmony import */ var src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/alert/alerts */ 17775);
/* harmony import */ var src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/alert/toasts */ 30844);
/* harmony import */ var src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/alert/values.config */ 50427);
/* harmony import */ var _core_models_catalog_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/models/catalog.models */ 78195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@core/services/group.service */ 31659);
/* harmony import */ var src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@shared/capture-cat/capture-cat.component */ 37117);
/* harmony import */ var _shared_importar_importar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@shared/importar/importar.component */ 27236);













const _c0 = ["mdCaptureCat"];
const _c1 = ["mdImportCat"];
class GroupsComponent {
    constructor(groupsService, tablePaginationService) {
        this.groupsService = groupsService;
        this.tablePaginationService = tablePaginationService;
        this.query = src_app_graphql_operations_query_groups__WEBPACK_IMPORTED_MODULE_1__.GROUPS_LIST_QUERY;
        this.editMode = false;
        this.title = 'Catálogo de Grupos';
        this.mostrarImport = true;
        this.datosEnviar = new FormData();
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'groups',
            definitionKey: 'groups',
            title: 'Grupos',
            apiExterna: 'grupos'
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
                label: 'Grupo',
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
        this.catalog = new _core_models_catalog_models__WEBPACK_IMPORTED_MODULE_5__.Catalog();
        this.NextId();
    }
    NextId() {
        // Obtiene el siguiente Id del Catálogo
        this.groupsService.next().subscribe(result => {
            this.nextId = result;
        });
    }
    takeAction($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
                case 'import':
                    this.importForm([catalog]);
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
        this.catalog = new _core_models_catalog_models__WEBPACK_IMPORTED_MODULE_5__.Catalog();
        this.NextId();
        this.catalog = {
            id: this.nextId,
            description: '',
            slug: '',
            order: 1000,
            active: true
        };
    }
    addForm(editMode = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            setTimeout(() => {
                this.modal.onOpenModal(this.catalog, editMode);
            }, 2000);
        });
    }
    updateForm(catalog, editMode = true, onlyView = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(catalog, editMode, onlyView);
        });
    }
    importForm(catalog) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.modalImport.onOpenModal(catalog);
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
        this.groupsService.add(catalog).subscribe((res) => {
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
    importaBack(event) {
        if (event.tipo === 'list') {
            this.importados = event.list;
            this.addListCatalog(this.importados, event.suppliersCat);
        }
    }
    addListCatalog(groups, supplier) {
        this.groupsService.addList(groups, supplier).subscribe((res) => {
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
            this.groupsService.update(catalog).subscribe((res) => {
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
    unblockForm(group, unblock) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const result = (unblock) ?
                yield (0,src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.optionsWithDetails)('Desbloquear?', `Si desbloqueas el item seleccionado, se mostrara en la lista`, 450, 'No desbloquear', 'Si desbloquear')
                :
                    yield (0,src_app_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.optionsWithDetails)('Bloquear?', `Si bloqueas el item seleccionado, no se mostrara en la lista`, 430, 'No bloquear', 'Si bloquear');
            if (result === false) { // Si el resultado es falso, queremos bloquear
                this.unblockBrand(group.id, unblock, true);
            }
            this.tablePaginationService.refreshTable();
        });
    }
    unblockBrand(id, unblock = false, admin = false) {
        this.groupsService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,src_app_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(src_app_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_6__.GroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_7__.TablePaginationService)); };
GroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["app-groups"]], viewQuery: function GroupsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.modalImport = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 5, vars: 10, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "mostrarImport", "manageItem"], [3, "catalogChange"], ["mdCaptureCat", ""], [3, "resultData", "importaChange"], ["mdImportCat", ""]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("manageItem", function GroupsComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-capture-cat", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("catalogChange", function GroupsComponent_Template_app_capture_cat_catalogChange_1_listener($event) { return ctx.catalogBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "app-importar", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("importaChange", function GroupsComponent_Template_app_importar_importaChange_3_listener($event) { return ctx.importaBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("mostrarImport", ctx.mostrarImport);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("resultData", ctx.resultData);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_8__.TablePaginationComponent, _shared_capture_cat_capture_cat_component__WEBPACK_IMPORTED_MODULE_9__.CaptureCatComponent, _shared_importar_importar_component__WEBPACK_IMPORTED_MODULE_10__.ImportarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_groups_groups_component_ts.js.map