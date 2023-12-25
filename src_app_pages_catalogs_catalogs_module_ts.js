"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["src_app_pages_catalogs_catalogs_module_ts"],{

/***/ 34885:
/*!************************************************************!*\
  !*** ./src/app/@pages/catalogs/catalogs-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogsRoutingModule": () => (/* binding */ CatalogsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'config',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_pages_catalogs_config_config_component_ts"), __webpack_require__.e("src_app_core_services_config_service_ts-src_app_pages_catalogs_config_config_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./config/config.module */ 18184)).then(m => m.ConfigModule),
        data: { pageTitle: 'Configuraciones' }
    },
    {
        path: 'cupons',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_pages_catalogs_cupons_cupons_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_cupons_cupons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cupons/cupons.module */ 21469)).then(m => m.CuponsModule),
        data: { pageTitle: 'Cupones' }
    },
    {
        path: 'brands',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_shared_importar_importar_component_ts-node_modules_ngx-lightbox___ivy_ngcc___-a21730"), __webpack_require__.e("default-src_app_pages_catalogs_brands_brands_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_brands_brands_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./brands/brands.module */ 23894)).then(m => m.BrandsModule),
        data: { pageTitle: 'Marcas' }
    },
    {
        path: 'models',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_pages_catalogs_models_models_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_models_models_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./models/models.module */ 63779)).then(m => m.ModelsModule),
        data: { pageTitle: 'Modelos' }
    },
    {
        path: 'groups',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_shared_importar_importar_component_ts-node_modules_ngx-lightbox___ivy_ngcc___-a21730"), __webpack_require__.e("default-src_app_pages_catalogs_groups_groups_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_groups_groups_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./groups/groups.module */ 79085)).then(m => m.GroupsModule),
        data: { pageTitle: 'Grupos' }
    },
    {
        path: 'categories',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_shared_importar_importar_component_ts-node_modules_ngx-lightbox___ivy_ngcc___-a21730"), __webpack_require__.e("default-src_app_pages_catalogs_categories_categories_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categories/categories.module */ 7832)).then(m => m.CategoriesModule),
        data: { pageTitle: 'Categorias' }
    },
    {
        path: 'subcategories',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_pages_catalogs_subcategories_subcategories_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_subcategories_subcategories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./subcategories/subcategories.module */ 23756)).then(m => m.SubcategoriesModule),
        data: { pageTitle: 'SubCategorias' }
    },
    {
        path: 'tags',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_pages_catalogs_tags_tags_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_tags_tags_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tags/tags.module */ 62091)).then(m => m.TagsModule),
        data: { pageTitle: 'Etiquetas' }
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_importar_importar_component_ts-node_modules_ngx-lightbox___ivy_ngcc___-a21730"), __webpack_require__.e("default-src_app_pages_catalogs_products_products_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 75904)).then(m => m.ProductsModule),
        data: { pageTitle: 'Productos' }
    },
    {
        path: 'users',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_pages_catalogs_users_users_component_ts"), __webpack_require__.e("src_app_pages_catalogs_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 51293)).then(m => m.UsersModule),
        data: { pageTitle: 'Usuarios' }
    },
    {
        path: 'clients',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_services_user_service_ts-src_app_pages_catalogs_clients_clients-routing_module_t-686b3d")]).then(__webpack_require__.bind(__webpack_require__, /*! ./clients/clients.module */ 7623)).then(m => m.ClientsModule),
        data: { pageTitle: 'Clientes' }
    },
    {
        path: 'welcomes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_alert_toasts_ts"), __webpack_require__.e("default-src_app_shared_table-pagination_table-pagination_module_ts"), __webpack_require__.e("default-src_app_core_models_catalog_models_ts-node_modules_ng-select_ng-select___ivy_ngcc___f-a73ed1"), __webpack_require__.e("default-src_app_shared_capture-cat_capture-cat_component_ts"), __webpack_require__.e("default-src_app_pages_catalogs_welcomes_welcomes_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogs_welcomes_welcomes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcomes/welcomes.module */ 44309)).then(m => m.WelcomesModule),
        data: { pageTitle: 'Bienvenidos' }
    }
];
class CatalogsRoutingModule {
}
CatalogsRoutingModule.ɵfac = function CatalogsRoutingModule_Factory(t) { return new (t || CatalogsRoutingModule)(); };
CatalogsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogsRoutingModule });
CatalogsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 32610:
/*!****************************************************!*\
  !*** ./src/app/@pages/catalogs/catalogs.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogsModule": () => (/* binding */ CatalogsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _catalogs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogs-routing.module */ 34885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CatalogsModule {
}
CatalogsModule.ɵfac = function CatalogsModule_Factory(t) { return new (t || CatalogsModule)(); };
CatalogsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CatalogsModule });
CatalogsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _catalogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CatalogsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _catalogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogs_catalogs_module_ts.js.map