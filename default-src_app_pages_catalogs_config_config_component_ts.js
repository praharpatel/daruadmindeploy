"use strict";
(self["webpackChunkdaru"] = self["webpackChunkdaru"] || []).push([["default-src_app_pages_catalogs_config_config_component_ts"],{

/***/ 93026:
/*!***********************************************!*\
  !*** ./src/app/@core/models/config.models.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": () => (/* binding */ Config)
/* harmony export */ });
class Config {
}


/***/ }),

/***/ 74350:
/*!************************************************************!*\
  !*** ./src/app/@pages/catalogs/config/config.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigComponent": () => (/* binding */ ConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_models_config_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/config.models */ 93026);
/* harmony import */ var _shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/alert/toasts */ 30844);
/* harmony import */ var _shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/alert/values.config */ 50427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 75797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);









function ConfigComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El valor debe ser de formato 00.00 y no puede superar los 5 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfigComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigComponent_div_47_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onCancelar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigComponent_div_47_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onGrabar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Grabar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.captureConfig.invalid);
} }
class ConfigComponent {
    constructor(formBuilder, modal, configsService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.configsService = configsService;
        this.submitted = false;
        this.exchangeRatePattern = '^[0-9]{1,2}(?:\\.[0-9]{1,2})?$';
    }
    get f() { return this.captureConfig.controls; }
    ngOnInit() {
        this.title = 'Configuraciones del MarketPlance';
        this.config = new _core_models_config_models__WEBPACK_IMPORTED_MODULE_0__.Config();
        this.configTemp = new _core_models_config_models__WEBPACK_IMPORTED_MODULE_0__.Config();
        this.onlyView = true;
        this.habilitaGuardar = false;
        this.visualizarBotones = false;
        this.captureConfig = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            exchange_rate: [0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.exchangeRateValidator]],
            minimum_offer: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            offer: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
        this.configsService.getConfig('1').subscribe((result) => {
            this.configTemp.id = result.id;
            this.configTemp.message = result.message;
            this.configTemp.exchange_rate = result.exchange_rate;
            this.configTemp.minimum_offer = result.minimum_offer;
            this.configTemp.offer = result.offer;
            this.config = this.configTemp;
            this.onSetConfig(this.config);
        });
    }
    exchangeRateValidator(control) {
        const value = control.value;
        // Expresión regular para validar 2 enteros y 2 decimales
        const pattern = /^[0-9]{1,2}(?:\.[0-9]{1,2})?$/;
        if (!pattern.test(value)) {
            return { invalidExchangeRateFormat: true };
        }
        return null;
    }
    // tslint:disable-next-line: no-unnecessary-initializer
    onSetConfig(config = undefined) {
        if (config) {
            this.captureConfig.controls.id.setValue(config.id);
            this.captureConfig.controls.message.setValue(config.message);
            this.captureConfig.controls.exchange_rate.setValue(config.exchange_rate);
            this.captureConfig.controls.minimum_offer.setValue(config.minimum_offer);
            this.captureConfig.controls.offer.setValue(config.offer);
            return;
        }
        this.config.id = this.captureConfig.controls.id.value;
        this.config.message = this.captureConfig.controls.message.value;
        this.config.exchange_rate = parseFloat(this.captureConfig.controls.exchange_rate.value);
        this.config.minimum_offer = parseInt(this.captureConfig.controls.minimum_offer.value);
        this.config.offer = this.captureConfig.controls.offer.value;
    }
    onModificar() {
        this.onlyView = false;
        this.visualizarBotones = true;
    }
    onCancelar() {
        this.onSetConfig(this.configTemp);
        this.onlyView = true;
        this.visualizarBotones = false;
    }
    onGrabar() {
        this.submitted = true;
        if (this.captureConfig.invalid) {
            (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.WARNING, 'Verificar campos');
            return;
        }
        this.onSetConfig();
        this.onlyView = true;
        this.visualizarBotones = false;
        this.updateCatalog(this.config);
    }
    updateCatalog(config) {
        if (config.message !== '') {
            this.configsService.update(config).subscribe((res) => {
                if (res.status) {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.SUCCESS, res.message);
                    setTimeout(() => {
                        this.onSetConfig(config);
                    }, 2900);
                }
                else {
                    (0,_shared_alert_toasts__WEBPACK_IMPORTED_MODULE_1__.basicAlert)(_shared_alert_values_config__WEBPACK_IMPORTED_MODULE_2__.TYPE_ALERT.WARNING, res.message);
                }
            });
        }
    }
}
ConfigComponent.ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigsService)); };
ConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConfigComponent, selectors: [["app-config"]], decls: 48, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-sub-title"], [1, "d-flex", "flex-row", "justify-content-end", "p-1"], ["type", "button", "title", "Modifcar Configuraciones", 1, "btn", "btn-light", "mb-2", 3, "click"], [1, "fas", "fa-edit"], [3, "formGroup"], [1, "container-fluid", "p-0"], [1, "col-3"], ["for", "id"], ["type", "text", "id", "id", "formControlName", "id", "placeholder", "ID", 1, "form-control", "text-end"], ["for", "exchange_rate"], ["type", "text", "id", "exchange_rate", "formControlName", "exchange_rate", 1, "form-control", "text-end", 3, "pattern"], [4, "ngIf"], ["for", "minimum_offer"], ["type", "number", "id", "minimum_offer", "formControlName", "minimum_offer", "min", "1", "pattern", "^[0-9]+", "data-reverse", "true", 1, "form-control", "text-end"], ["for", "offer"], [1, "form-check", "form-switch", "form-switch-md", "mb-3"], ["type", "checkbox", "id", "offer", "formControlName", "offer", 1, "form-check-input"], ["for", "message"], ["type", "text", "id", "message", "formControlName", "message", "placeholder", "Teclea la descripci\u00F3n", 1, "form-control"], [1, "row", "col-12"], ["class", "col-12 d-flex flex-row justify-content-end", 4, "ngIf"], [1, "col-12", "d-flex", "flex-row", "justify-content-end"], ["type", "button", 1, "btn", "btn-danger", "btn-label", "waves-light", 3, "click"], [1, "bx", "bx-x", "t", "label-icon"], ["type", "button", 1, "btn", "btn-success", "btn-label", "waves-light", 3, "disabled", "click"], [1, "bx", "bx-check-double", "label-icon"]], template: function ConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "header")(6, "h2")(7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigComponent_Template_button_click_12_listener() { return ctx.onModificar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Modificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "form", 9)(17, "div", 10)(18, "div", 1)(19, "div", 11)(20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Clave");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Tipo de Cambio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ConfigComponent_div_27_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 11)(29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Cantidad Minima Ofertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11)(33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Habilitar Ofertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 1)(38, "div", 2)(39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 1)(43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 1)(46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ConfigComponent_div_47_Template, 7, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.captureConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pattern", ctx.exchangeRatePattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.onlyView ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.captureConfig.get("exchange_rate").hasError("invalidExchangeRateFormat"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.onlyView ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.onlyView ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.onlyView ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visualizarBotones);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_catalogs_config_config_component_ts.js.map