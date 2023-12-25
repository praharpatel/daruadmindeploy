"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_products_products_component_ts"],{

/***/ 95005:
/*!****************************************************!*\
  !*** ./src/app/@core/services/products.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _graphql_operations_mutation_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql/operations/mutation/product */ 80154);
/* harmony import */ var _graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql/operations/query/product */ 16821);
/* harmony import */ var _graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @graphql/services/api.service */ 59586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ 60093);










class ProductsService extends _graphql_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService {
    constructor(apollo, http) {
        super(apollo);
        this.http = http;
    }
    add(product) {
        console.log('producto: ', product);
        return this.set(_graphql_operations_mutation_product__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT, {
            product
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.addProduct;
        }));
    }
    addList(products) {
        return this.set(_graphql_operations_mutation_product__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT_LIST, {
            products
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.addProducts;
        }));
    }
    update(product) {
        return this.set(_graphql_operations_mutation_product__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PRODUCT, {
            product
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.updateProduct;
        }));
    }
    unblock(id, unblock = false, admin = false) {
        return this.set(_graphql_operations_mutation_product__WEBPACK_IMPORTED_MODULE_0__.BLOCK_PRODUCT, {
            id,
            unblock,
            admin
        }, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.blockProduct;
        }));
    }
    getProducts(page = 1, itemsPage = 10, filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_FILTERS.ACTIVE) {
        return this.get(_graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_LIST_QUERY, {
            itemsPage, page, filterActiveValues
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.products;
        }));
    }
    getProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.get(_graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_QUERY, {}, {}).subscribe((result) => {
                    resolve(result.product);
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
    getProductField(partNumber) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.get(_graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_FIELD_QUERY, { partNumber }, {}).subscribe((result) => {
                    console.log('result: ', result);
                    resolve(result.product);
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
    getIcecatProduct(brandIcecat, productIcecat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.get(_graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ICECAT_QUERY, { brandIcecat, productIcecat }, {}).subscribe((result) => {
                    console.log('result: ', result);
                    resolve(result.icecatProductLocal);
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
    next() {
        return this.get(_graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ID_QUERY, {}, {}, false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
            return result.productId.productId;
        }));
    }
    addImages(formData) {
        const boundary = '---------------------------' + Date.now();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders();
        headers = headers.set('Content-Type', 'multipart/form-data; boundary=' + boundary);
        const options = { headers };
        console.log('options: ', options);
        console.log('service.addImages/formData. ', formData);
        return this.http.post('http://localhost:3000/uploadFile', formData, options)
            .subscribe({
            next: (response) => console.log('response: ', response),
            error: (error) => console.log('error: ', error)
        });
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_8__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
ProductsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 87554:
/*!*********************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/product.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_FRAGMENT": () => (/* binding */ PRODUCT_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const PRODUCT_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment ProductObject on Product {
    id
    name
    slug
    short_desc
    price
    sale_price
    exchangeRate
    review
    ratings
    until
    stock
    top
    featured
    new
    author
    sold
    partnumber
    sku
    upc
    category {
      name
      slug
      pivot {
        product_id
        product_category_id
      }
    }
    subCategory {
      name
      slug
      pivot {
        product_id
        product_category_id
      }
    }
    brand
    brands {
      name
      slug
      pivot {
        product_id
        brand_id
      }
    }
    model
    peso
    pictures {
      width
      height
      url
      pivot {
        related_id
        upload_file_id
      }
    }
    sm_pictures {
      width
      height
      url
      pivot {
        related_id
        upload_file_id
      }
    }
    variants {
      id
      color
      color_name
      price
      pivot {
        product_id
        component_id
      }
      size {
        id
        name
        slug
        pivot {
          components_variants_variant_id
          component_id
        }
      }
    }
    unidadDeMedida {
      id
      name
      slug
    }
    active
    suppliersProd {
      idProveedor
      codigo
      price
      moneda
      branchOffices {
        name
        estado
        cantidad
      }
    }
    descuentos {
      total_descuento
      moneda_descuento
      precio_descuento
    }
    promociones {
      clave_promocion
      descripcion_promocion
      vencimiento_promocion
      disponible_en_promocion
      porciento
    }
    especificaciones {
      tipo
      valor
    }
  }
`;


/***/ }),

/***/ 39478:
/*!***************************************************************!*\
  !*** ./src/app/@graphql/operations/fragment/productIcecat.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_ICECAT_FRAGMENT": () => (/* binding */ PRODUCT_ICECAT_FRAGMENT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ 16804);

const PRODUCT_ICECAT_FRAGMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0__["default"] `
  fragment ProductIcecatObject on ProductIcecatObject {
      Requested_prod_id
      Requested_GTIN_EAN_UPC
      Requested_Icecat_id
      Supplier
      Prod_id
      Icecat_id
      GTIN_EAN_UPC
      Category
      CatId
      Model
      Updated
      Quality
      On_Market
      Product_Views
      HighPic
      HighPic_Resolution
      LowPic
      Pic500x500
      ThumbPic
      Folder_PDF
      ProductTitle
      ShortDesc
      ShortSummaryDescription
      LongSummaryDescription
      LongDesc
      ProductGallery
      ProductGallery_Resolution
      ProductGallery_ExpirationDate
      BulletPoints
      Your_product_ID
  }
`;


/***/ }),

/***/ 80154:
/*!*********************************************************!*\
  !*** ./src/app/@graphql/operations/mutation/product.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PRODUCT": () => (/* binding */ ADD_PRODUCT),
/* harmony export */   "ADD_PRODUCT_LIST": () => (/* binding */ ADD_PRODUCT_LIST),
/* harmony export */   "BLOCK_PRODUCT": () => (/* binding */ BLOCK_PRODUCT),
/* harmony export */   "UPDATE_PRODUCT": () => (/* binding */ UPDATE_PRODUCT)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var src_app_graphql_operations_fragment_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@graphql/operations/fragment/product */ 87554);


const ADD_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addProduct($product: ProductInput!) {
      addProduct(product: $product) {
         status
         message
         product {
            ...ProductObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
`;
const ADD_PRODUCT_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation addProducts($products: [ProductInput!]!) {
      addProducts(products: $products) {
         status
         message
         products {
            ...ProductObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
`;
const UPDATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation updateProduct($product: ProductInput!) {
      updateProduct(product: $product) {
         status
         message
         product {
            ...ProductObject
         }
      }
   }
   ${src_app_graphql_operations_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
`;
const BLOCK_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
   mutation blockProduct($id: ID!, $unblock: Boolean, $admin: Boolean) {
      blockProduct(id: $id, unblock: $unblock, admin: $admin) {
         status
         message
      }
   }
`;


/***/ }),

/***/ 16821:
/*!******************************************************!*\
  !*** ./src/app/@graphql/operations/query/product.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCTS_LIST_QUERY": () => (/* binding */ PRODUCTS_LIST_QUERY),
/* harmony export */   "PRODUCT_DATA_QUERY": () => (/* binding */ PRODUCT_DATA_QUERY),
/* harmony export */   "PRODUCT_FIELD_QUERY": () => (/* binding */ PRODUCT_FIELD_QUERY),
/* harmony export */   "PRODUCT_ICECAT_QUERY": () => (/* binding */ PRODUCT_ICECAT_QUERY),
/* harmony export */   "PRODUCT_ID_QUERY": () => (/* binding */ PRODUCT_ID_QUERY),
/* harmony export */   "PRODUCT_QUERY": () => (/* binding */ PRODUCT_QUERY)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ 16804);
/* harmony import */ var _fragment_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fragment/product */ 87554);
/* harmony import */ var _fragment_result_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragment/result-info */ 75848);
/* harmony import */ var _fragment_productIcecat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fragment/productIcecat */ 39478);




const PRODUCTS_LIST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"] `
  query productList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum, $filterName: String) {
    products(page: $page, itemsPage: $itemsPage, active: $active, filterName: $filterName) {
      info {
        ...ResultInfoObject
      }
      status
      message
      products {
        ...ProductObject
      }
    }
  }
  ${_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
  ${_fragment_result_info__WEBPACK_IMPORTED_MODULE_1__.RESULT_INFO_FRAGMENT}
`;
const PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"] `
  query product($id: ID) {
    product(id: $id) {
      status
      message
      product {
        ...ProductObject
      }
    }
  }
  ${_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
`;
const PRODUCT_FIELD_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"] `
  query productField($partNumber: String) {
    productField(partNumber: $partNumber) {
      status
      message
      productField {
        ...ProductObject
      }
    }
  }
  ${_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
`;
const PRODUCT_ICECAT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"] `
  query icecatProductLocal($brandIcecat: String, $productIcecat: String) {
    icecatProductLocal(brandIcecat: $brandIcecat, productIcecat: $productIcecat) {
      status
      message
      icecatProductLocal {
        ...ProductIcecatObject
      }
    }
  }
  ${_fragment_productIcecat__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_ICECAT_FRAGMENT}
`;
const PRODUCT_DATA_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"] `
   query productData($include: Boolean!) {
      product{
         status
         message
         product {
            ...ProductObject
         }
      }
   }
   ${_fragment_product__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FRAGMENT}
`;
const PRODUCT_ID_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"] `
query {
   productId{
      status
      message
      productId
   }
}
`;


/***/ }),

/***/ 96675:
/*!****************************************************************!*\
  !*** ./src/app/@pages/catalogs/products/products.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/filters */ 26408);
/* harmony import */ var _graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql/operations/query/product */ 16821);
/* harmony import */ var _shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/alert/alerts */ 17775);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/products.service */ 95005);
/* harmony import */ var _shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/table-pagination/table-pagination.service */ 35759);
/* harmony import */ var _shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/table-pagination/table-pagination.component */ 93782);
/* harmony import */ var _shared_capture_prod_capture_prod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/capture-prod/capture-prod.component */ 46242);
/* harmony import */ var _shared_importar_importar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@shared/importar/importar.component */ 27236);












const _c0 = ["mdCaptureProd"];
const _c1 = ["mdImportProd"];
class ProductsComponent {
    constructor(productsService, tablePaginationService) {
        this.productsService = productsService;
        this.tablePaginationService = tablePaginationService;
        this.query = _graphql_operations_query_product__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_LIST_QUERY;
        this.editMode = false;
        this.title = 'Catálogo de Productos';
        this.mostrarImport = true;
        this.datosEnviar = new FormData();
        // Obtiene el siguiente Id del Catálogo
        this.productsService.next().subscribe(result => {
            this.nextId = result;
        }, error => {
            (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.ERROR, error.message);
        });
    }
    ngOnInit() {
        this.context = {};
        this.itemsPage = 10;
        this.resultData = {
            listKey: 'products',
            definitionKey: 'products',
            title: 'Productos',
            apiExterna: 'productos'
        };
        this.include = false;
        this.filterActiveValues = _core_constants_filters__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_FILTERS.ALL;
        this.columns = [
            {
                property: 'id',
                label: '#',
                class: 'id'
            },
            {
                property: 'suppliersProd.idProveedor',
                label: 'Proveedor',
                class: 'clave'
            },
            {
                property: 'brand',
                label: 'Marca',
                class: 'clave'
            },
            {
                property: 'sku',
                label: 'SKU',
                class: 'clave'
            },
            {
                property: 'name',
                label: 'Producto',
                class: 'descriptionShort'
            },
            {
                property: 'featured',
                label: 'Promo',
                class: 'id'
            },
            {
                property: 'top',
                label: 'Top',
                class: 'id'
            },
            {
                property: 'price',
                label: 'Precio',
                class: 'numero'
            }
        ];
    }
    takeAction($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Obtiene la informacion para las acciones
            const action = $event[0];
            const product = $event[1];
            this.mostrarBoton = true;
            switch (action) {
                case 'add': // Agregar elemento
                    this.addForm(this.onNewProduct());
                    break;
                case 'edit': // Modificar elemento
                    if (product.price <= 0 || product.price === undefined) {
                        product.price = 0;
                    }
                    if (product.sale_price <= 0 || product.sale_price === undefined) {
                        product.sale_price = 0;
                    }
                    console.log('product: ', product);
                    this.updateForm(product);
                    break;
                case 'info': // Mostrar información del elemento
                    this.mostrarBoton = false;
                    console.log('product: ', product);
                    this.updateForm(product, true, true);
                    break;
                case 'import':
                    this.importForm([product]);
                    break;
                case 'block': // Bloquear elemento
                    this.unblockForm(product, false);
                    break;
                case 'unblock': // Bloquear elemento
                    this.unblockForm(product, true);
                    break;
                default:
                    break;
            }
        });
    }
    onNewProduct() {
        let product;
        return product = {
            id: parseInt(this.nextId, 10),
            name: '',
            slug: '',
            short_desc: '',
            price: 0,
            sale_price: 0,
            exchangeRate: 0,
            review: 0,
            ratings: 0,
            until: '',
            stock: 0,
            top: false,
            featured: false,
            new: false,
            author: '',
            sold: '',
            partnumber: '',
            sku: '',
            upc: '',
            category: [],
            subCategory: [],
            brand: '',
            brands: [],
            model: '',
            peso: 0,
            pictures: [],
            sm_pictures: [],
            variants: [],
            active: true,
            suppliersProd: null,
            descuentos: null,
            promociones: null,
            especificaciones: []
        };
    }
    addForm(product, editMode = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(product, editMode);
        });
    }
    updateForm(product, editMode = true, onlyView = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.editMode = editMode;
            this.modal.onOpenModal(product, editMode, onlyView);
        });
    }
    importForm(product) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.modalImport.onOpenModalProduct(product);
        });
    }
    productBack(event) {
        if (event.tipo === 'item') {
            if (this.editMode) { // Si es un  para editar
                console.log('product/event.item: ', event.item);
                // this.updateProduct(event.item);
            }
            else { // Si es un producto nuevo
                this.addProduct(event.item, event.files);
            }
        }
        else {
        }
    }
    addProduct(product, files) {
        this.productsService.add(product).subscribe((res) => {
            if (res.status) {
                // console.log('addProduct/files: ', files);
                const formData = new FormData();
                files.forEach(file => {
                    formData.append('files', file, file.name);
                    // console.log('file: ', file);
                });
                // console.log('addProduct/formData: ', formData);
                const result = this.productsService.addImages(formData);
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                setTimeout(() => {
                    this.modal.onCloseModal();
                    this.tablePaginationService.refreshTable();
                }, 2900);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
    importaBackProduct(event) {
        if (event.tipo === 'list') {
            (0,_shared_alert_alerts__WEBPACK_IMPORTED_MODULE_2__.loadData)('Guardando el catalogo de Productos', 'Espera la finalización del proceso.');
            this.importados = event.list;
            this.addListProduct(this.importados);
        }
    }
    addListProduct(products) {
        this.productsService.addList(products).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                setTimeout(() => {
                    this.modal.onCloseModal();
                    this.tablePaginationService.refreshTable();
                }, 2900);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
    updateProduct(product) {
        if (product.name !== '') {
            this.productsService.update(product).subscribe((res) => {
                if (res.status) {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
                    setTimeout(() => {
                        this.modal.onCloseModal();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        this.productsService.unblock(id, unblock, admin).subscribe((res) => {
            if (res.status) {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.SUCCESS, res.message);
            }
            else {
                (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_3__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_4__.TYPE_ALERT.WARNING, res.message);
            }
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_products_service__WEBPACK_IMPORTED_MODULE_5__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_table_pagination_table_pagination_service__WEBPACK_IMPORTED_MODULE_6__.TablePaginationService)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], viewQuery: function ProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalImport = _t.first);
    } }, inputs: { datosEnviar: "datosEnviar" }, decls: 5, vars: 10, consts: [[3, "query", "context", "itemsPage", "resultData", "include", "tableColumns", "filterActiveValues", "title", "mostrarImport", "manageItem"], [3, "productChange"], ["mdCaptureProd", ""], [3, "resultData", "importaChangeProduct"], ["mdImportProd", ""]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("manageItem", function ProductsComponent_Template_app_table_pagination_manageItem_0_listener($event) { return ctx.takeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-capture-prod", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("productChange", function ProductsComponent_Template_app_capture_prod_productChange_1_listener($event) { return ctx.productBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "app-importar", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("importaChangeProduct", function ProductsComponent_Template_app_importar_importaChangeProduct_3_listener($event) { return ctx.importaBackProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("query", ctx.query)("context", ctx.context)("itemsPage", ctx.itemsPage)("resultData", ctx.resultData)("include", ctx.include)("tableColumns", ctx.columns)("filterActiveValues", ctx.filterActiveValues)("title", ctx.title)("mostrarImport", ctx.mostrarImport);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("resultData", ctx.resultData);
    } }, directives: [_shared_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__.TablePaginationComponent, _shared_capture_prod_capture_prod_component__WEBPACK_IMPORTED_MODULE_8__.CaptureProdComponent, _shared_importar_importar_component__WEBPACK_IMPORTED_MODULE_9__.ImportarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 46242:
/*!****************************************************************!*\
  !*** ./src/app/@shared/capture-prod/capture-prod.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureProdComponent": () => (/* binding */ CaptureProdComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/product.models */ 55247);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _core_services_brand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/brand.service */ 62088);
/* harmony import */ var _core_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/categorie.service */ 1657);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone */ 57206);













const _c0 = ["content"];
function CaptureProdComponent_ng_template_0_ng_template_17_ng_template_0_Template(rf, ctx) { }
function CaptureProdComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CaptureProdComponent_ng_template_0_ng_template_17_ng_template_0_Template, 0, 0, "ng-template", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function CaptureProdComponent_ng_template_0_ng_template_24_ng_template_0_Template(rf, ctx) { }
function CaptureProdComponent_ng_template_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CaptureProdComponent_ng_template_0_ng_template_24_ng_template_0_Template, 0, 0, "ng-template", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function CaptureProdComponent_ng_template_0_ng_template_31_ng_template_0_Template(rf, ctx) { }
function CaptureProdComponent_ng_template_0_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CaptureProdComponent_ng_template_0_ng_template_31_ng_template_0_Template, 0, 0, "ng-template", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function CaptureProdComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CaptureProdComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onCloseModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8)(5, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CaptureProdComponent_ng_template_0_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 11)(8, "div", 12)(9, "ul", 13, 14)(11, "li", 15)(12, "a", 16)(13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Generales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CaptureProdComponent_ng_template_0_ng_template_17_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 15)(19, "a", 16)(20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Imagenes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CaptureProdComponent_ng_template_0_ng_template_24_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li", 15)(26, "a", 16)(27, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Adicionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CaptureProdComponent_ng_template_0_ng_template_31_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 23)(34, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CaptureProdComponent_ng_template_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.onCloseModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CaptureProdComponent_ng_template_0_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Grabar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeId", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavOutlet", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.captureGeneral.invalid);
} }
function CaptureProdComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "form", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 12)(6, "div", 33)(7, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Clave");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 36)(11, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "N\u00FAmero de Parte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 39)(15, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 39)(19, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Estatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 44)(23, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 39)(27, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 39)(31, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Precio M\u00EDnimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 51)(35, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 39)(39, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 56)(43, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 39)(45, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Destacado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 59)(49, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 39)(51, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 62)(55, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 39)(57, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Se vende desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 44)(62, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ng-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CaptureProdComponent_ng_template_2_Template_ng_select_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.brandsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 44)(66, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Categor\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ng-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CaptureProdComponent_ng_template_2_Template_ng_select_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.categorySelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.captureGeneral);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r3.editMode ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r3.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r3.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r3.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r3.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r3.onlyView ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r3.brands)("multiple", false)("ngModel", ctx_r3.brandsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r3.category)("multiple", true)("ngModel", ctx_r3.categorySelected);
} }
function CaptureProdComponent_ng_template_4_ngx_dropzone_preview_17_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngx-dropzone-preview", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function CaptureProdComponent_ng_template_4_ngx_dropzone_preview_17_Template_ngx_dropzone_preview_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const f_r27 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r28.onRemove(f_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const f_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](f_r27.name);
} }
function CaptureProdComponent_ng_template_4_ngb_carousel_19_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", picture_r31.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", picture_r31.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CaptureProdComponent_ng_template_4_ngb_carousel_19_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CaptureProdComponent_ng_template_4_ngb_carousel_19_1_ng_template_0_Template, 2, 2, "ng-template", 76);
} }
function CaptureProdComponent_ng_template_4_ngb_carousel_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CaptureProdComponent_ng_template_4_ngb_carousel_19_1_Template, 1, 0, null, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r26.pictures);
} }
function CaptureProdComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "form")(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 12)(6, "div", 70)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Cargar im\u00E1genes del producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 39)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Visor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12)(13, "div", 70)(14, "ngx-dropzone", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CaptureProdComponent_ng_template_4_Template_ngx_dropzone_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Click o arrastrar la imagen a cargar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CaptureProdComponent_ng_template_4_ngx_dropzone_preview_17_Template, 3, 2, "ngx-dropzone-preview", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CaptureProdComponent_ng_template_4_ngb_carousel_19_Template, 2, 1, "ngb-carousel", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("accept", "image/*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.pictures);
} }
function CaptureProdComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 12)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Adicionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} }
class CaptureProdComponent {
    constructor(formBuilder, brandsService, categoriesService, modal) {
        this.formBuilder = formBuilder;
        this.brandsService = brandsService;
        this.categoriesService = categoriesService;
        this.modal = modal;
        this.editMode = false;
        this.onlyView = false;
        this.submitted = false;
        this.titulo = 'Capturando producto';
        this.files = [];
        this.datosEnviar = new FormData();
        this.productChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    // convenience getter for easy access to form fields
    get f() { return this.captureGeneral.controls; }
    get f1() { return this.captureVariants.controls; }
    ngOnInit() {
        this.captureGeneral = this.formBuilder.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            slug: [''],
            short_desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            sale_price: [0],
            exchangeRate: [0],
            review: [0],
            ratings: [0],
            until: [null],
            stock: [0],
            top: [false],
            featured: [false],
            new: [false],
            author: [''],
            sold: [''],
            category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            subCategory: [null],
            brands: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            active: [true],
            estatus: ['Activos'],
            sku: [''],
            upc: [''],
            partnumber: [''],
        });
        this.captureVariants = this.formBuilder.group({
            variants: [[]],
        });
        this.brands = [];
        this.category = [];
        this.subCategory = [];
    }
    onSubmit() {
        this.submitted = true;
        if (this.captureGeneral.invalid) {
            (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.WARNING, 'Verificar campos');
            return;
        }
        if (typeof (this.product.price) === 'string') {
            this.product.price = parseFloat(this.product.price);
        }
        if (typeof (this.product.sale_price) === 'string') {
            this.product.sale_price = parseFloat(this.product.sale_price);
        }
        let i = 0;
        if (this.brandsSelected !== '') {
            this.brands.forEach(brand => {
                if (brand.slug === this.brandsSelected) {
                    if (this.product.brands.length === 0) {
                        const newBrand = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.Brands();
                        newBrand.name = brand.description;
                        newBrand.slug = brand.slug;
                        this.brand = brand.slug;
                        const newPivot = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.PivotBrand();
                        newPivot.brand_id = brand.id;
                        newPivot.product_id = this.product.id.toString();
                        newBrand.pivot = newPivot;
                        this.product.brands.push(newBrand);
                    }
                    else {
                        this.product.brands.forEach(b => {
                            i += 1;
                            if (i = 1) {
                                this.brand = brand.slug;
                            }
                            if (b.slug !== brand.slug) {
                                const newBrand = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.Brands();
                                newBrand.name = brand.description;
                                newBrand.slug = brand.slug;
                                const newPivot = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.PivotBrand();
                                newPivot.brand_id = brand.id;
                                newPivot.product_id = this.product.id.toString();
                                newBrand.pivot = newPivot;
                                this.product.brands.push(newBrand);
                            }
                        });
                    }
                }
                // });
            });
        }
        if (this.categorySelected.length > 0) {
            this.category.forEach(categorie => {
                this.categorySelected.forEach(categorieSel => {
                    if (categorie.slug === categorieSel) {
                        const newCategorie = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.Categorys();
                        newCategorie.name = categorie.name;
                        newCategorie.slug = categorie.slug;
                        const newPivot = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.PivotCategory();
                        newPivot.product_id = this.product.id.toString();
                        newPivot.product_category_id = categorie.slug;
                        newCategorie.pivot = newPivot;
                        this.product.category.push(newCategorie);
                    }
                });
            });
        }
        // Asignar producto
        this.product.brand = this.brand;
        this.onSetProduct();
        const addProduct = new _core_models_product_models__WEBPACK_IMPORTED_MODULE_0__.AddProduct();
        addProduct.tipo = 'item';
        addProduct.item = this.product;
        addProduct.list = [];
        // addProduct.suppliersCat = [{ idProveedor: '', name: '', slug: '' }];
        addProduct.files = this.files;
        this.productChange.emit(addProduct);
    }
    onSetProduct(product = undefined) {
        if (product) {
            this.pictures = [];
            this.pictures = product.pictures;
            this.captureGeneral.controls.id.setValue(product.id);
            this.captureGeneral.controls.name.setValue(product.name);
            this.captureGeneral.controls.slug.setValue(product.slug);
            this.captureGeneral.controls.short_desc.setValue(product.short_desc);
            this.captureGeneral.controls.price.setValue(product.price);
            this.captureGeneral.controls.sale_price.setValue(product.sale_price);
            this.captureGeneral.controls.exchangeRate.setValue(product.exchangeRate);
            this.captureGeneral.controls.review.setValue(product.review);
            this.captureGeneral.controls.ratings.setValue(product.ratings);
            this.captureGeneral.controls.until.setValue(product.until);
            this.captureGeneral.controls.stock.setValue(product.stock);
            this.captureGeneral.controls.top.setValue(product.top);
            this.captureGeneral.controls.featured.setValue(product.featured);
            this.captureGeneral.controls.new.setValue(product.new);
            this.captureGeneral.controls.author.setValue(product.author);
            this.captureGeneral.controls.sold.setValue(product.sold);
            this.captureGeneral.controls.category.setValue(product.category);
            this.captureGeneral.controls.subCategory.setValue(product.subCategory);
            this.captureGeneral.controls.brands.setValue(product.brands);
            this.captureGeneral.controls.sku.setValue(product.sku);
            this.captureGeneral.controls.upc.setValue(product.upc);
            this.captureGeneral.controls.partnumber.setValue(product.partnumber);
            if (product.variants) {
                if (product.variants.length > 0) {
                    this.captureGeneral.controls.variants.setValue(product.variants);
                }
            }
            this.captureGeneral.controls.active.setValue(product.active);
            this.brandsSelected = product.brand;
            this.categorySelected = [];
            this.subCategorySelected = [];
            if (product.category) {
                product.category.forEach(cat => {
                    this.categorySelected.push(cat.slug);
                });
            }
            if (product.subCategory) {
                product.subCategory.forEach(cat => {
                    this.subCategorySelected.push(cat.slug);
                });
            }
            return;
        }
        // this.catalog.id = this.captureForm.controls.clave.value;
        // Cargar Imagenes en Dropzone
        // this.onInitDropzone();
    }
    onOpenModal(product, editMode = false, onlyView = false) {
        this.product = product;
        this.editMode = editMode;
        this.onlyView = onlyView;
        // Cambia el título de acuerdo a si es solo vista, edición o nuevo.
        this.titulo = this.editMode ? onlyView ? 'Consultar' : 'Modificar' : 'Agregar';
        // Campos para editar
        const valorEditar = this.editMode ? this.product.active ? 'Activo' : 'Inactivo' : 'Activo';
        this.onSetProduct(this.product);
        // Campos particulares
        this.captureGeneral.controls.estatus.setValue(valorEditar);
        // Abrir el modals
        this.modal.open(this.content, { size: 'lg' });
        // Cargar los catálogos
        this.brandsService.getBrands(1, -1).subscribe(result => {
            this.brands = result.brands;
        }, error => {
            (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.ERROR, error.message);
        });
        this.categoriesService.getCategories(1, -1).subscribe(result => {
            this.category = result.categories;
        }, error => {
            (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.ERROR, error.message);
        });
    }
    onCloseModal() {
        this.modal.dismissAll();
    }
    onInitDropzone() {
        this.files = [];
        this.pictures.forEach(picture => {
            fetch(picture.url, {
                'mode': 'cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then(res => res.blob())
                .then(blob => {
                const splitUrl = picture.url.split('/');
                const iSplit = splitUrl.length;
                const fileName = splitUrl[iSplit - 1];
                const splitName = fileName.split('.');
                const name = splitName[0];
                const file = new File([blob], name, { type: blob.type });
                this.files.push(file);
                this.readFile(blob);
            }).catch((error) => {
                console.log('Request failed', error);
            });
        });
    }
    readFile(input) {
        const fr = new FileReader();
        fr.readAsDataURL(input);
        fr.addEventListener('load', () => {
            const res = fr.result;
        });
    }
    onSelect(event) {
        let existFile = false;
        if (this.files.length > 0) {
            this.files.forEach(file => {
                event.addedFiles.forEach(newFile => {
                    if (file.name === newFile.name) {
                        existFile = true;
                        (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.WARNING, 'Ya existe en la lista un archivo con el mismo nombre. Verificar');
                    }
                });
            });
        }
        if (!existFile) {
            this.files.push(...event.addedFiles);
        }
    }
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
        this.pictures.splice(this.pictures.indexOf(event), 1);
    }
    onUploadError(args) {
        this.logger(args);
    }
    logger(info) {
        console.log(info);
    }
}
CaptureProdComponent.ɵfac = function CaptureProdComponent_Factory(t) { return new (t || CaptureProdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_brand_service__WEBPACK_IMPORTED_MODULE_3__.BrandsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
CaptureProdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CaptureProdComponent, selectors: [["app-capture-prod"]], viewQuery: function CaptureProdComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { product: "product" }, outputs: { datosEnviar: "datosEnviar", productChange: "productChange" }, decls: 8, vars: 0, consts: [["role", "document"], ["content", ""], ["TabContent", ""], ["TabContent1", ""], ["TabContent2", ""], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], ["forma", "ngForm"], [1, "container-fluid", "p-0"], [1, "row"], ["ngbNav", "", 1, "nav-pills", "nav-justified", 3, "activeId"], ["justifiednav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "far", "fa-user"], [3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", "btn-label", "waves-light", 3, "click"], [1, "bx", "bx-x", "t", "label-icon"], ["type", "button", 1, "btn", "btn-success", "btn-label", "waves-light", 3, "disabled", "click"], [1, "bx", "bx-check-double", "label-icon"], [3, "ngTemplateOutlet"], [3, "formGroup"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-2"], ["for", "id"], ["type", "text", "id", "id", "formControlName", "id", 1, "form-control"], [1, "col-4"], ["for", "partnumber"], ["type", "text", "id", "partnumber", "formControlName", "partnumber", 1, "form-control"], [1, "col-3"], ["for", "sku"], ["type", "text", "id", "sku", "formControlName", "sku", 1, "form-control"], ["for", "estatus"], ["type", "text", "id", "estatus", "formControlName", "estatus", 1, "form-control"], [1, "col-6"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Teclea el nombre del producto", 1, "form-control"], ["for", "price"], ["type", "text", "id", "price", "formControlName", "price", 1, "form-control"], ["for", "sale_price"], ["type", "text", "id", "sale_price", "formControlName", "sale_price", "mask", "000.000.000.000.000,00", "data-reverse", "true", 1, "form-control"], [1, "col-12"], ["for", "short_desc"], ["type", "text", "id", "short_desc", "formControlName", "short_desc", "placeholder", "Teclea la descripci\u00F3n", 1, "form-control"], ["for", "top"], [1, "form-check", "form-switch", "form-switch-lg", "mb-3"], ["type", "checkbox", "id", "top", "formControlName", "top", 1, "form-check-input"], ["for", "top", 1, "form-check-label"], ["for", "featured"], ["type", "checkbox", "id", "featured", "formControlName", "featured", 1, "form-check-input"], ["for", "featured", 1, "form-check-label"], ["for", "new"], ["type", "checkbox", "id", "new", "formControlName", "new", 1, "form-check-input"], ["for", "new", 1, "form-check-label"], ["for", "until"], [1, "col-md-10"], ["type", "date", "value", "2019-08-19", "id", "until", 1, "form-control"], [1, "mt-3"], ["bindLabel", "description", "bindValue", "slug", "formControlName", "brands", 3, "items", "multiple", "ngModel", "ngModelChange"], ["bindLabel", "description", "bindValue", "slug", "formControlName", "category", 3, "items", "multiple", "ngModel", "ngModelChange"], [1, "col-9"], [1, "dropzone", 3, "accept", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "removable", "removed"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["referrerpolicy", "no-referrer", "alt", "200x200", "width", "200", 1, "img-thumbnail", 3, "src", "alt"]], template: function CaptureProdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CaptureProdComponent_ng_template_0_Template, 40, 7, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CaptureProdComponent_ng_template_2_Template, 69, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CaptureProdComponent_ng_template_4_Template, 20, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CaptureProdComponent_ng_template_6_Template, 7, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__.NgxDropzonePreviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbSlide], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0dXJlLXByb2QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_products_products_component_ts.js.map