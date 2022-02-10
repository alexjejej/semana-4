"use strict";
exports.id = "src_app_personal_personal_module_ts";
exports.ids = ["src_app_personal_personal_module_ts"];
exports.modules = {

/***/ "./src/app/personal/minlen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinLenDirective": () => (/* binding */ MinLenDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");


class MinLenDirective {
    constructor() {
        //
    }
    validate(control) {
        return !control.value || control.value.length >= (this.minlen
            || 2) ? null : { minlen: true };
    }
}
MinLenDirective.ɵfac = function MinLenDirective_Factory(t) { return new (t || MinLenDirective)(); };
MinLenDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MinLenDirective, selectors: [["", "minlen", ""]], inputs: { minlen: "minlen" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: MinLenDirective,
                multi: true }])] });


/***/ }),

/***/ "./src/app/personal/personal-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalRoutingModule": () => (/* binding */ PersonalRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/personal/personal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _personal_component__WEBPACK_IMPORTED_MODULE_0__.PersonalComponent }];
class PersonalRoutingModule {
}
PersonalRoutingModule.ɵfac = function PersonalRoutingModule_Factory(t) { return new (t || PersonalRoutingModule)(); };
PersonalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonalRoutingModule });
PersonalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalComponent": () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/color/index.android.js");
/* harmony import */ var _domain_listas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/domain/listas.service.ts");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _minlen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/personal/minlen.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@angular/common/fesm2015/common.mjs");












const _c0 = ["layout"];
function PersonalComponent_Label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "Label", 21);
} }
function PersonalComponent_Label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "Label", 22);
} }
function PersonalComponent_Button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "Button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Button_17_Template_Button_tap_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onButtonTap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PersonalComponent_Button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "Button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Button_18_Template_Button_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.mensajeinvalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PersonalComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "Flexboxlayout", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "Image", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r11.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", item_r11.name);
} }
let count = 0;
class PersonalComponent {
    constructor(people, routerExtensions) {
        this.people = people;
        this.routerExtensions = routerExtensions;
        this.textFieldValue = "";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    onButtonTap(s) {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
            this.buscarAhora(this.textFieldValue);
        }
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Application.getRootView();
        sideDrawer.showDrawer();
    }
    OnItemTap(args) {
        console.log("Index: " + args.index);
        const select = this.resultados[args.index];
        console.log("el cargo es: " + select.cargo);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_5__.setString('cargo', select.cargo);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_5__.setString('nombre', select.name);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_5__.setString('imagen', select.image);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_5__.setString('descripcion', select.descripcion);
        this.routerExtensions.navigate(['/usuarios'], {
            transition: {
                name: 'slideTop',
            },
        });
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Application.getRootView();
        sideDrawer.closeDrawer();
    }
    buscarAhora(s) {
        console.dir("buscarAhora: " + s);
        this.people.buscar(s).then((r) => {
            console.log("resultados buscarAhora: " + JSON.stringify(r));
            this.resultados = r;
        }, (e) => {
            console.log("Error en buscarAhora " + e);
            new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Error en la búsqueda' }).setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT).show();
        });
        const id = this.textFieldValue;
        if (id == "Director") {
            this.animacion();
        }
        else if (id == "Aseo") {
            this.animacion();
        }
        else if (id == "Profesor") {
            this.animacion();
        }
        else if (id == "Estudiante") {
            this.animacion();
        }
        else {
            this.cargonoencontrado();
        }
    }
    cargonoencontrado() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Cargo no encontrado' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("red"),
            duration: 300,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("white"),
            duration: 300,
            delay: 50
        }));
    }
    animacion() {
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("green"),
            duration: 270,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("white"),
            duration: 270,
            delay: 50
        }));
    }
    mostrarTodos() {
        this.animacion();
        this.people.mostrartodo().then((r) => {
            console.log("resultados mostrar todo " + JSON.stringify(r));
            this.resultados = r;
        }, (e) => {
            console.log("Error en mostrar todo " + e);
            new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Error en la búsqueda' }).setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT).show();
        });
    }
    mensajeinvalid() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Ingresa un cargo antes de buscar' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("red"),
            duration: 300,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("white"),
            duration: 300,
            delay: 50
        }));
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_domain_listas_service__WEBPACK_IMPORTED_MODULE_0__.ListasService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.RouterExtensions)); };
PersonalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["Personal"]], viewQuery: function PersonalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.layout = _t.first);
    } }, outputs: { search: "search" }, decls: 25, vars: 6, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Personal", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], ["xmlns", "http://schemas.nativescript.org/tns.xsd", 0, "xmlns", "PullRefresh", "@nativescript-community/ui-pulltorefresh", "loaded", "pageLoaded"], [1, "page__content"], ["layout", ""], ["text", "\uF007", 1, "page__content-icon", "fas"], ["horizontalAlignment", "center", "text", "____________________"], ["flexDirection", "row"], ["horizontalAlignment", "center", "hint", "Cargo a buscar", "width", "70%", "required", "", "minlen", "4", 3, "ngModel", "ngModelChange"], ["texto", "ngModel"], ["width", "25%", "text", "*", 4, "ngIf"], ["width", "25%", "text", "M\u00EDnimo 4 car\u00E1cteres", 4, "ngIf"], ["marginTop", "50", "text", "Buscar", "width", "40%", "horizontalAlignment", "left", 3, "tap", 4, "ngIf"], ["marginTop", "50", "text", "Buscar", "width", "40%", "background", "red", "horizontalAlignment", "left", 3, "tap", 4, "ngIf"], ["marginTop", "50", "text", "Mostrar todos", "width", "40%", "horizontalAlignment", "right", 3, "tap"], ["id", "lbl", "horizontalAlignment", "center", "text", "Clic en la persona para m\u00E1s detalles"], [3, "search"], ["marginTop", "50", 1, "list-group", 2, "height", "1250px", 3, "items", "itemTap"], ["width", "25%", "text", "*"], ["width", "25%", "text", "M\u00EDnimo 4 car\u00E1cteres"], ["marginTop", "50", "text", "Buscar", "width", "40%", "horizontalAlignment", "left", 3, "tap"], ["marginTop", "50", "text", "Buscar", "width", "40%", "background", "red", "horizontalAlignment", "left", 3, "tap"], ["flexDirection", "row", 1, "list-group-item"], [1, "thumb", "img-circle", 3, "src"], ["verticalAlignment", "center", 1, "list-group-item-heading", 2, "width", "60%", 3, "text"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "StackLayout", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "FlexboxLayout", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "TextField", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_TextField_ngModelChange_12_listener($event) { return ctx.textFieldValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PersonalComponent_Label_14_Template, 1, 0, "Label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PersonalComponent_Label_15_Template, 1, 0, "Label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "WrapLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PersonalComponent_Button_17_Template, 1, 0, "Button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PersonalComponent_Button_18_Template, 1, 0, "Button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "Button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Template_Button_tap_19_listener() { return ctx.mostrarTodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "Label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "SearchForm", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("search", function PersonalComponent_Template_SearchForm_search_21_listener($event) { return ctx.buscarAhora($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ListView", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemTap", function PersonalComponent_Template_ListView_itemTap_23_listener($event) { return ctx.OnItemTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PersonalComponent_ng_template_24_Template, 3, 2, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.textFieldValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r1.hasError("required") && _r1.hasError("minlen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.resultados);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _minlen__WEBPACK_IMPORTED_MODULE_2__.MinLenDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.ListViewComponent], encapsulation: 2 });
class Arrayresultados {
    constructor(cargo, name, image, descripcion) {
        this.cargo = cargo;
        this.name = name;
        this.image = image;
        this.descripcion = descripcion;
    }
}


/***/ }),

/***/ "./src/app/personal/personal.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalModule": () => (/* binding */ PersonalModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/personal/personal-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class PersonalModule {
}
PersonalModule.ɵfac = function PersonalModule_Factory(t) { return new (t || PersonalModule)(); };
PersonalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonalModule });
PersonalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptFormsModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wZXJzb25hbF9wZXJzb25hbF9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDNUI7QUFDN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QscUNBQXFDLCtEQUFvQixHQUFHLGtFQUFrRSxrQkFBa0IsYUFBYSxnRUFBcUIsSUFBSSxTQUFTLHlEQUFhO0FBQzVNLDZCQUE2QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNiK0I7QUFDUjtBQUNyQjtBQUNRO0FBQzVDLGtCQUFrQixxQkFBcUIsa0VBQWlCLEVBQUU7QUFDbkQ7QUFDUDtBQUNBLHlFQUF5RTtBQUN6RSwyQ0FBMkMsOERBQW1CLEdBQUcsNkJBQTZCO0FBQzlGLDJDQUEyQyw4REFBbUIsR0FBRyxXQUFXLG9GQUFpQyxXQUFXLDJFQUF3QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDFGO0FBQ29CO0FBQ3BCO0FBQ0E7QUFDNEI7QUFDZDtBQUNuQztBQUNXO0FBQ0g7QUFDUDtBQUNOO0FBQ087QUFDdEM7QUFDQSx3REFBd0Q7QUFDeEQsSUFBSSx1REFBWTtBQUNoQjtBQUNBLHdEQUF3RDtBQUN4RCxJQUFJLHVEQUFZO0FBQ2hCO0FBQ0EseURBQXlEO0FBQ3pELGdCQUFnQiw4REFBbUI7QUFDbkMsSUFBSSw0REFBaUI7QUFDckIsSUFBSSx3REFBYSxzRkFBc0YsMkRBQWdCLE9BQU8sZUFBZSwyREFBZ0IsSUFBSSxvQ0FBb0M7QUFDck0sSUFBSSwwREFBZTtBQUNuQjtBQUNBLHlEQUF5RDtBQUN6RCxpQkFBaUIsOERBQW1CO0FBQ3BDLElBQUksNERBQWlCO0FBQ3JCLElBQUksd0RBQWEsZ0ZBQWdGLDJEQUFnQixRQUFRLGVBQWUsMkRBQWdCLElBQUksaUNBQWlDO0FBQzdMLElBQUksMERBQWU7QUFDbkI7QUFDQSw4REFBOEQ7QUFDOUQsSUFBSSw0REFBaUI7QUFDckIsSUFBSSx1REFB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dWViYS8uL3NyYy9hcHAvcGVyc29uYWwvbWlubGVuLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9wZXJzb25hbC9wZXJzb25hbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9wZXJzb25hbC9wZXJzb25hbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBjbGFzcyBNaW5MZW5EaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHZhbGlkYXRlKGNvbnRyb2wpIHtcclxuICAgICAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgY29udHJvbC52YWx1ZS5sZW5ndGggPj0gKHRoaXMubWlubGVuXHJcbiAgICAgICAgICAgIHx8IDIpID8gbnVsbCA6IHsgbWlubGVuOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuTWluTGVuRGlyZWN0aXZlLsm1ZmFjID0gZnVuY3Rpb24gTWluTGVuRGlyZWN0aXZlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IE1pbkxlbkRpcmVjdGl2ZSkoKTsgfTtcclxuTWluTGVuRGlyZWN0aXZlLsm1ZGlyID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lRGlyZWN0aXZlKHsgdHlwZTogTWluTGVuRGlyZWN0aXZlLCBzZWxlY3RvcnM6IFtbXCJcIiwgXCJtaW5sZW5cIiwgXCJcIl1dLCBpbnB1dHM6IHsgbWlubGVuOiBcIm1pbmxlblwiIH0sIGZlYXR1cmVzOiBbaTAuybXJtVByb3ZpZGVyc0ZlYXR1cmUoW3sgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IE1pbkxlbkRpcmVjdGl2ZSxcclxuICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlIH1dKV0gfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFBlcnNvbmFsQ29tcG9uZW50IH0gZnJvbSAnLi9wZXJzb25hbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFBlcnNvbmFsQ29tcG9uZW50IH1dO1xyXG5leHBvcnQgY2xhc3MgUGVyc29uYWxSb3V0aW5nTW9kdWxlIHtcclxufVxyXG5QZXJzb25hbFJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBQZXJzb25hbFJvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgUGVyc29uYWxSb3V0aW5nTW9kdWxlKSgpOyB9O1xyXG5QZXJzb25hbFJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IFBlcnNvbmFsUm91dGluZ01vZHVsZSB9KTtcclxuUGVyc29uYWxSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSB9KTtcclxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uLCBDb2xvciwgSXRlbUV2ZW50RGF0YSwgVmlldyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XHJcbmltcG9ydCB7IExpc3Rhc1NlcnZpY2UgfSBmcm9tIFwiLi4vZG9tYWluL2xpc3Rhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBUb2FzdER1cmF0aW9uLCBUb2FzdFBvc2l0aW9uLCBUb2FzdHkgfSBmcm9tICdAdHJpbml3aXovbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuLi9kb21haW4vbGlzdGFzLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0ICogYXMgaTQgZnJvbSBcIi4vbWlubGVuXCI7XHJcbmltcG9ydCAqIGFzIGk1IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuY29uc3QgX2MwID0gW1wibGF5b3V0XCJdO1xyXG5mdW5jdGlvbiBQZXJzb25hbENvbXBvbmVudF9MYWJlbF8xNF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGkwLsm1ybVlbGVtZW50KDAsIFwiTGFiZWxcIiwgMjEpO1xyXG59IH1cclxuZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfTGFiZWxfMTVfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudCgwLCBcIkxhYmVsXCIsIDIyKTtcclxufSB9XHJcbmZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xN19UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGNvbnN0IF9yOCA9IGkwLsm1ybVnZXRDdXJyZW50VmlldygpO1xyXG4gICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkJ1dHRvblwiLCAyMyk7XHJcbiAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfQnV0dG9uXzE3X1RlbXBsYXRlX0J1dHRvbl90YXBfMF9saXN0ZW5lcigkZXZlbnQpIHsgaTAuybXJtXJlc3RvcmVWaWV3KF9yOCk7IGNvbnN0IGN0eF9yNyA9IGkwLsm1ybVuZXh0Q29udGV4dCgpOyByZXR1cm4gY3R4X3I3Lm9uQnV0dG9uVGFwKCRldmVudCk7IH0pO1xyXG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxufSB9XHJcbmZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xOF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGNvbnN0IF9yMTAgPSBpMC7Jtcm1Z2V0Q3VycmVudFZpZXcoKTtcclxuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJCdXR0b25cIiwgMjQpO1xyXG4gICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xOF9UZW1wbGF0ZV9CdXR0b25fdGFwXzBfbGlzdGVuZXIoKSB7IGkwLsm1ybVyZXN0b3JlVmlldyhfcjEwKTsgY29uc3QgY3R4X3I5ID0gaTAuybXJtW5leHRDb250ZXh0KCk7IHJldHVybiBjdHhfcjkubWVuc2FqZWludmFsaWQoKTsgfSk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG59IH1cclxuZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfbmdfdGVtcGxhdGVfMjRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiRmxleGJveGxheW91dFwiLCAyNSk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIkltYWdlXCIsIDI2KTtcclxuICAgIGkwLsm1ybVlbGVtZW50KDIsIFwibGFiZWxcIiwgMjcpO1xyXG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxufSBpZiAocmYgJiAyKSB7XHJcbiAgICBjb25zdCBpdGVtX3IxMSA9IGN0eC5pdGVtO1xyXG4gICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJzcmNcIiwgaXRlbV9yMTEuaW1hZ2UpO1xyXG4gICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGl0ZW1fcjExLm5hbWUpO1xyXG59IH1cclxubGV0IGNvdW50ID0gMDtcclxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBlb3BsZSwgcm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucyA9IHJvdXRlckV4dGVuc2lvbnM7XHJcbiAgICAgICAgdGhpcy50ZXh0RmllbGRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uVGFwKHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRleHRGaWVsZFZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy50ZXh0RmllbGRWYWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy50ZXh0RmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVzY2FyQWhvcmEodGhpcy50ZXh0RmllbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbiAgICBPbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5kZXg6IFwiICsgYXJncy5pbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGhpcy5yZXN1bHRhZG9zW2FyZ3MuaW5kZXhdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWwgY2FyZ28gZXM6IFwiICsgc2VsZWN0LmNhcmdvKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2NhcmdvJywgc2VsZWN0LmNhcmdvKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ25vbWJyZScsIHNlbGVjdC5uYW1lKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2ltYWdlbicsIHNlbGVjdC5pbWFnZSk7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdkZXNjcmlwY2lvbicsIHNlbGVjdC5kZXNjcmlwY2lvbik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3VzdWFyaW9zJ10sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICB9XHJcbiAgICBidXNjYXJBaG9yYShzKSB7XHJcbiAgICAgICAgY29uc29sZS5kaXIoXCJidXNjYXJBaG9yYTogXCIgKyBzKTtcclxuICAgICAgICB0aGlzLnBlb3BsZS5idXNjYXIocykudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdGFkb3MgYnVzY2FyQWhvcmE6IFwiICsgSlNPTi5zdHJpbmdpZnkocikpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdGFkb3MgPSByO1xyXG4gICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gYnVzY2FyQWhvcmEgXCIgKyBlKTtcclxuICAgICAgICAgICAgbmV3IFRvYXN0eSh7IHRleHQ6ICdFcnJvciBlbiBsYSBiw7pzcXVlZGEnIH0pLnNldFRvYXN0RHVyYXRpb24oVG9hc3REdXJhdGlvbi5TSE9SVCkuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy50ZXh0RmllbGRWYWx1ZTtcclxuICAgICAgICBpZiAoaWQgPT0gXCJEaXJlY3RvclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWFjaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkID09IFwiQXNlb1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWFjaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkID09IFwiUHJvZmVzb3JcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hY2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpZCA9PSBcIkVzdHVkaWFudGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hY2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJnb25vZW5jb250cmFkbygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhcmdvbm9lbmNvbnRyYWRvKCkge1xyXG4gICAgICAgIG5ldyBUb2FzdHkoeyB0ZXh0OiAnQ2FyZ28gbm8gZW5jb250cmFkbycgfSlcclxuICAgICAgICAgICAgLnNldFRvYXN0RHVyYXRpb24oVG9hc3REdXJhdGlvbi5TSE9SVClcclxuICAgICAgICAgICAgLnNldFRvYXN0UG9zaXRpb24oVG9hc3RQb3NpdGlvbi5CT1RUT00pXHJcbiAgICAgICAgICAgIC5zZXRUZXh0Q29sb3IobmV3IENvbG9yKCd3aGl0ZScpKVxyXG4gICAgICAgICAgICAuc2V0QmFja2dyb3VuZENvbG9yKCcjZmY5OTk5JylcclxuICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmxheW91dC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxheW91dC5hbmltYXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gbGF5b3V0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICAgICAgICBkZWxheTogNTBcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBhbmltYWNpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gdGhpcy5sYXlvdXQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsYXlvdXQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiZ3JlZW5cIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNzAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gbGF5b3V0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjcwLFxyXG4gICAgICAgICAgICBkZWxheTogNTBcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBtb3N0cmFyVG9kb3MoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYWNpb24oKTtcclxuICAgICAgICB0aGlzLnBlb3BsZS5tb3N0cmFydG9kbygpLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRhZG9zIG1vc3RyYXIgdG9kbyBcIiArIEpTT04uc3RyaW5naWZ5KHIpKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRhZG9zID0gcjtcclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIG1vc3RyYXIgdG9kbyBcIiArIGUpO1xyXG4gICAgICAgICAgICBuZXcgVG9hc3R5KHsgdGV4dDogJ0Vycm9yIGVuIGxhIGLDunNxdWVkYScgfSkuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtZW5zYWplaW52YWxpZCgpIHtcclxuICAgICAgICBuZXcgVG9hc3R5KHsgdGV4dDogJ0luZ3Jlc2EgdW4gY2FyZ28gYW50ZXMgZGUgYnVzY2FyJyB9KVxyXG4gICAgICAgICAgICAuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKVxyXG4gICAgICAgICAgICAuc2V0VG9hc3RQb3NpdGlvbihUb2FzdFBvc2l0aW9uLkJPVFRPTSlcclxuICAgICAgICAgICAgLnNldFRleHRDb2xvcihuZXcgQ29sb3IoJ3doaXRlJykpXHJcbiAgICAgICAgICAgIC5zZXRCYWNrZ3JvdW5kQ29sb3IoJyNmZjk5OTknKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMubGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGF5b3V0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICAgICAgZGVsYXk6IDUwXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiBsYXlvdXQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwid2hpdGVcIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5QZXJzb25hbENvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFBlcnNvbmFsQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLkxpc3Rhc1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkyLlJvdXRlckV4dGVuc2lvbnMpKTsgfTtcclxuUGVyc29uYWxDb21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBQZXJzb25hbENvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiUGVyc29uYWxcIl1dLCB2aWV3UXVlcnk6IGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X1F1ZXJ5KHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcclxuICAgIH0gaWYgKHJmICYgMikge1xyXG4gICAgICAgIGxldCBfdDtcclxuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxheW91dCA9IF90LmZpcnN0KTtcclxuICAgIH0gfSwgb3V0cHV0czogeyBzZWFyY2g6IFwic2VhcmNoXCIgfSwgZGVjbHM6IDI1LCB2YXJzOiA2LCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiNTAsICpcIl0sIFtcInRleHRcIiwgXCJQZXJzb25hbFwiLCBcImNvbFNwYW5cIiwgXCIyXCIsIDEsIFwiYWN0aW9uLWJhci10aXRsZVwiXSwgW1widGV4dFwiLCBcIlxcdUYwQzlcIiwgMSwgXCJmYXNcIiwgMywgXCJ0YXBcIl0sIFtcInhtbG5zXCIsIFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXCIsIDAsIFwieG1sbnNcIiwgXCJQdWxsUmVmcmVzaFwiLCBcIkBuYXRpdmVzY3JpcHQtY29tbXVuaXR5L3VpLXB1bGx0b3JlZnJlc2hcIiwgXCJsb2FkZWRcIiwgXCJwYWdlTG9hZGVkXCJdLCBbMSwgXCJwYWdlX19jb250ZW50XCJdLCBbXCJsYXlvdXRcIiwgXCJcIl0sIFtcInRleHRcIiwgXCJcXHVGMDA3XCIsIDEsIFwicGFnZV9fY29udGVudC1pY29uXCIsIFwiZmFzXCJdLCBbXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwidGV4dFwiLCBcIl9fX19fX19fX19fX19fX19fX19fXCJdLCBbXCJmbGV4RGlyZWN0aW9uXCIsIFwicm93XCJdLCBbXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwiaGludFwiLCBcIkNhcmdvIGEgYnVzY2FyXCIsIFwid2lkdGhcIiwgXCI3MCVcIiwgXCJyZXF1aXJlZFwiLCBcIlwiLCBcIm1pbmxlblwiLCBcIjRcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1widGV4dG9cIiwgXCJuZ01vZGVsXCJdLCBbXCJ3aWR0aFwiLCBcIjI1JVwiLCBcInRleHRcIiwgXCIqXCIsIDQsIFwibmdJZlwiXSwgW1wid2lkdGhcIiwgXCIyNSVcIiwgXCJ0ZXh0XCIsIFwiTVxcdTAwRURuaW1vIDQgY2FyXFx1MDBFMWN0ZXJlc1wiLCA0LCBcIm5nSWZcIl0sIFtcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwidGV4dFwiLCBcIkJ1c2NhclwiLCBcIndpZHRoXCIsIFwiNDAlXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIiwgNCwgXCJuZ0lmXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJCdXNjYXJcIiwgXCJ3aWR0aFwiLCBcIjQwJVwiLCBcImJhY2tncm91bmRcIiwgXCJyZWRcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwibGVmdFwiLCAzLCBcInRhcFwiLCA0LCBcIm5nSWZcIl0sIFtcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwidGV4dFwiLCBcIk1vc3RyYXIgdG9kb3NcIiwgXCJ3aWR0aFwiLCBcIjQwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJyaWdodFwiLCAzLCBcInRhcFwiXSwgW1wiaWRcIiwgXCJsYmxcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwidGV4dFwiLCBcIkNsaWMgZW4gbGEgcGVyc29uYSBwYXJhIG1cXHUwMEUxcyBkZXRhbGxlc1wiXSwgWzMsIFwic2VhcmNoXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCAxLCBcImxpc3QtZ3JvdXBcIiwgMiwgXCJoZWlnaHRcIiwgXCIxMjUwcHhcIiwgMywgXCJpdGVtc1wiLCBcIml0ZW1UYXBcIl0sIFtcIndpZHRoXCIsIFwiMjUlXCIsIFwidGV4dFwiLCBcIipcIl0sIFtcIndpZHRoXCIsIFwiMjUlXCIsIFwidGV4dFwiLCBcIk1cXHUwMEVEbmltbyA0IGNhclxcdTAwRTFjdGVyZXNcIl0sIFtcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwidGV4dFwiLCBcIkJ1c2NhclwiLCBcIndpZHRoXCIsIFwiNDAlXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIl0sIFtcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwidGV4dFwiLCBcIkJ1c2NhclwiLCBcIndpZHRoXCIsIFwiNDAlXCIsIFwiYmFja2dyb3VuZFwiLCBcInJlZFwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCJdLCBbXCJmbGV4RGlyZWN0aW9uXCIsIFwicm93XCIsIDEsIFwibGlzdC1ncm91cC1pdGVtXCJdLCBbMSwgXCJ0aHVtYlwiLCBcImltZy1jaXJjbGVcIiwgMywgXCJzcmNcIl0sIFtcInZlcnRpY2FsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIDEsIFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcIiwgMiwgXCJ3aWR0aFwiLCBcIjYwJVwiLCAzLCBcInRleHRcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkFjdGlvbkJhclwiLCAwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkdyaWRMYXlvdXRcIiwgMik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMywgXCJMYWJlbFwiLCAzKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uRHJhd2VyQnV0dG9uVGFwKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNSwgXCJwYWdlXCIsIDUpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNiwgXCJTdGFja0xheW91dFwiLCA2LCA3KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg4LCBcIkxhYmVsXCIsIDgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDksIFwiTGFiZWxcIiwgOSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTAsIFwiTGFiZWxcIiwgOSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxMSwgXCJGbGV4Ym94TGF5b3V0XCIsIDEwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEyLCBcIlRleHRGaWVsZFwiLCAxMSwgMTIpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfVGVtcGxhdGVfVGV4dEZpZWxkX25nTW9kZWxDaGFuZ2VfMTJfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHgudGV4dEZpZWxkVmFsdWUgPSAkZXZlbnQ7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDE0LCBQZXJzb25hbENvbXBvbmVudF9MYWJlbF8xNF9UZW1wbGF0ZSwgMSwgMCwgXCJMYWJlbFwiLCAxMyk7XHJcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDE1LCBQZXJzb25hbENvbXBvbmVudF9MYWJlbF8xNV9UZW1wbGF0ZSwgMSwgMCwgXCJMYWJlbFwiLCAxNCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE2LCBcIldyYXBMYXlvdXRcIik7XHJcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDE3LCBQZXJzb25hbENvbXBvbmVudF9CdXR0b25fMTdfVGVtcGxhdGUsIDEsIDAsIFwiQnV0dG9uXCIsIDE1KTtcclxuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMTgsIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xOF9UZW1wbGF0ZSwgMSwgMCwgXCJCdXR0b25cIiwgMTYpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTksIFwiQnV0dG9uXCIsIDE3KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfVGVtcGxhdGVfQnV0dG9uX3RhcF8xOV9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5tb3N0cmFyVG9kb3MoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDIwLCBcIkxhYmVsXCIsIDE4KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIxLCBcIlNlYXJjaEZvcm1cIiwgMTkpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInNlYXJjaFwiLCBmdW5jdGlvbiBQZXJzb25hbENvbXBvbmVudF9UZW1wbGF0ZV9TZWFyY2hGb3JtX3NlYXJjaF8yMV9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5idXNjYXJBaG9yYSgkZXZlbnQpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybV0ZXh0KDIyLCBcIj4gXCIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMjMsIFwiTGlzdFZpZXdcIiwgMjApO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIml0ZW1UYXBcIiwgZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfVGVtcGxhdGVfTGlzdFZpZXdfaXRlbVRhcF8yM19saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5Pbkl0ZW1UYXAoJGV2ZW50KTsgfSk7XHJcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDI0LCBQZXJzb25hbENvbXBvbmVudF9uZ190ZW1wbGF0ZV8yNF9UZW1wbGF0ZSwgMywgMiwgXCJuZy10ZW1wbGF0ZVwiKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gaWYgKHJmICYgMikge1xyXG4gICAgICAgIGNvbnN0IF9yMSA9IGkwLsm1ybVyZWZlcmVuY2UoMTMpO1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEyKTtcclxuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC50ZXh0RmllbGRWYWx1ZSk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBfcjEuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCAhX3IxLmhhc0Vycm9yKFwicmVxdWlyZWRcIikgJiYgX3IxLmhhc0Vycm9yKFwibWlubGVuXCIpKTtcclxuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcclxuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ0lmXCIsIF9yMS52YWxpZCk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBfcjEuaW52YWxpZCk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoNSk7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwiaXRlbXNcIiwgY3R4LnJlc3VsdGFkb3MpO1xyXG4gICAgfSB9LCBkaXJlY3RpdmVzOiBbaTIuQWN0aW9uQmFyQ29tcG9uZW50LCBpMi5OYXZpZ2F0aW9uQnV0dG9uRGlyZWN0aXZlLCBpMi5UZXh0VmFsdWVBY2Nlc3NvciwgaTMuUmVxdWlyZWRWYWxpZGF0b3IsIGk0Lk1pbkxlbkRpcmVjdGl2ZSwgaTMuTmdDb250cm9sU3RhdHVzLCBpMy5OZ01vZGVsLCBpNS5OZ0lmLCBpMi5MaXN0Vmlld0NvbXBvbmVudF0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbmNsYXNzIEFycmF5cmVzdWx0YWRvcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYXJnbywgbmFtZSwgaW1hZ2UsIGRlc2NyaXBjaW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnbyA9IGNhcmdvO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcGNpb24gPSBkZXNjcmlwY2lvbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgUGVyc29uYWxSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wZXJzb25hbC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hbE1vZHVsZSB7XHJcbn1cclxuUGVyc29uYWxNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBQZXJzb25hbE1vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBQZXJzb25hbE1vZHVsZSkoKTsgfTtcclxuUGVyc29uYWxNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IFBlcnNvbmFsTW9kdWxlIH0pO1xyXG5QZXJzb25hbE1vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIFBlcnNvbmFsUm91dGluZ01vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9