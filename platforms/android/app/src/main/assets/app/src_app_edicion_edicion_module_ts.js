"use strict";
exports.id = "src_app_edicion_edicion_module_ts";
exports.ids = ["src_app_edicion_edicion_module_ts"];
exports.modules = {

/***/ "./src/app/edicion/edicion-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdicionRoutingModule": () => (/* binding */ EdicionRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _edicion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/edicion/edicion.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _edicion_component__WEBPACK_IMPORTED_MODULE_0__.EdicionComponent }];
class EdicionRoutingModule {
}
EdicionRoutingModule.ɵfac = function EdicionRoutingModule_Factory(t) { return new (t || EdicionRoutingModule)(); };
EdicionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EdicionRoutingModule });
EdicionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/edicion/edicion.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdicionComponent": () => (/* binding */ EdicionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/color/index.android.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@angular/common/fesm2015/common.mjs");









const _c0 = ["layout"];
function EdicionComponent_Label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "Label", 16);
} }
function EdicionComponent_Label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "Label", 17);
} }
function EdicionComponent_Button_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "Button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function EdicionComponent_Button_15_Template_Button_tap_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onButtonTap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EdicionComponent_Button_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "Button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function EdicionComponent_Button_16_Template_Button_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.mensajeinvalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EdicionComponent {
    constructor(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.textFieldValue = "";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // Use the component constructor to inject providers.
    }
    nombre(EventData) {
        console.log('Valor inicial: ' + this.nombre);
        console.log('Valor de nuestro evento: ' + EventData.target.value);
        this.nombre = EventData.target.value;
        console.log('Nuevo valor: ' + this.nombre);
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Application.getRootView();
        sideDrawer.showDrawer();
    }
    onButtonTap(s) {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
            this.buscarAhora(this.textFieldValue);
        }
    }
    buscarAhora(s) {
        console.dir("nuevo nombre: " + s);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__.setString("nombreUsuario", s);
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.Toasty({ text: 'Se guardó con éxito tu nombre, ' + s })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
        this.routerExtensions.navigate(['/settings'], {
            transition: {
                name: 'slideTop',
            },
        });
    }
    mensajeinvalid() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.Toasty({ text: 'Ingresa un nombre valido' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color("red"),
            duration: 300,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color("white"),
            duration: 300,
            delay: 50
        }));
    }
}
EdicionComponent.ɵfac = function EdicionComponent_Factory(t) { return new (t || EdicionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.RouterExtensions)); };
EdicionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EdicionComponent, selectors: [["Edicion"]], viewQuery: function EdicionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.layout = _t.first);
    } }, outputs: { search: "search" }, decls: 17, vars: 5, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Edici\u00F3n de nombre", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], ["xmlns", "http://schemas.nativescript.org/tns.xsd", 0, "xmlns", "PullRefresh", "@nativescript-community/ui-pulltorefresh", "loaded", "pageLoaded"], [1, "page__content"], ["layout", ""], ["text", "\uF044", 1, "page__content-icon", "fas"], ["flexDirection", "row"], ["marginTop", "50", "horizontalAlignment", "center", "hint", "Nuevo nombre", "width", "100%", "required", "", "minlen", "4", 3, "ngModel", "ngModelChange"], ["texto", "ngModel"], ["width", "25%", "text", "*", 4, "ngIf"], ["width", "25%", "text", "Muy corto", 4, "ngIf"], ["text", "Cambiar nombre", "width", "100%", "horizontalAlignment", "left", 3, "tap", 4, "ngIf"], ["text", "Cambiar nombre", "width", "100%", "background", "red", "horizontalAlignment", "left", 3, "tap", 4, "ngIf"], ["width", "25%", "text", "*"], ["width", "25%", "text", "Muy corto"], ["text", "Cambiar nombre", "width", "100%", "horizontalAlignment", "left", 3, "tap"], ["text", "Cambiar nombre", "width", "100%", "background", "red", "horizontalAlignment", "left", 3, "tap"]], template: function EdicionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function EdicionComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "StackLayout", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "FlexboxLayout", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "TextField", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EdicionComponent_Template_TextField_ngModelChange_10_listener($event) { return ctx.textFieldValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EdicionComponent_Label_12_Template, 1, 0, "Label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EdicionComponent_Label_13_Template, 1, 0, "Label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "WrapLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EdicionComponent_Button_15_Template, 1, 0, "Button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EdicionComponent_Button_16_Template, 1, 0, "Button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.textFieldValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r1.hasError("required") && _r1.hasError("minlen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], encapsulation: 2 });


/***/ }),

/***/ "./src/app/edicion/edicion.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdicionModule": () => (/* binding */ EdicionModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _edicion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/edicion/edicion-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class EdicionModule {
}
EdicionModule.ɵfac = function EdicionModule_Factory(t) { return new (t || EdicionModule)(); };
EdicionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EdicionModule });
EdicionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _edicion_routing_module__WEBPACK_IMPORTED_MODULE_0__.EdicionRoutingModule, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptFormsModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkIsUUFBUSwwREFBZTtBQUN2QixNQUFNO0FBQ04sb0JBQW9CLHlEQUFjO0FBQ2xDLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsT0FBTyxlQUFlLHFFQUFxQixFQUFFLDRFQUE0QixFQUFFLG9FQUFvQixFQUFFLDZEQUFvQixFQUFFLDJEQUFrQixFQUFFLG1EQUFVLEVBQUUsaURBQU8scUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUNySXpGO0FBQzFCO0FBQzVCO0FBQzdCO0FBQ1A7QUFDQSx5REFBeUQ7QUFDekQsbUNBQW1DLDhEQUFtQixHQUFHLHFCQUFxQjtBQUM5RSxtQ0FBbUMsOERBQW1CLEdBQUcsV0FBVywyRUFBd0IsRUFBRSx5RUFBb0IsRUFBRSwwRUFBdUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvZWRpY2lvbi9lZGljaW9uLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvZWRpY2lvbi9lZGljaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2VkaWNpb24vZWRpY2lvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgRWRpY2lvbkNvbXBvbmVudCB9IGZyb20gJy4vZWRpY2lvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEVkaWNpb25Db21wb25lbnQgfV07XHJcbmV4cG9ydCBjbGFzcyBFZGljaW9uUm91dGluZ01vZHVsZSB7XHJcbn1cclxuRWRpY2lvblJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBFZGljaW9uUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBFZGljaW9uUm91dGluZ01vZHVsZSkoKTsgfTtcclxuRWRpY2lvblJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEVkaWNpb25Sb3V0aW5nTW9kdWxlIH0pO1xyXG5FZGljaW9uUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XHJcbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQ29sb3IsIFZpZXcgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUb2FzdER1cmF0aW9uLCBUb2FzdFBvc2l0aW9uLCBUb2FzdHkgfSBmcm9tICdAdHJpbml3aXovbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmNvbnN0IF9jMCA9IFtcImxheW91dFwiXTtcclxuZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9MYWJlbF8xMl9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGkwLsm1ybVlbGVtZW50KDAsIFwiTGFiZWxcIiwgMTYpO1xyXG59IH1cclxuZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9MYWJlbF8xM19UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGkwLsm1ybVlbGVtZW50KDAsIFwiTGFiZWxcIiwgMTcpO1xyXG59IH1cclxuZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9CdXR0b25fMTVfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICBjb25zdCBfcjcgPSBpMC7Jtcm1Z2V0Q3VycmVudFZpZXcoKTtcclxuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJCdXR0b25cIiwgMTgpO1xyXG4gICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEVkaWNpb25Db21wb25lbnRfQnV0dG9uXzE1X1RlbXBsYXRlX0J1dHRvbl90YXBfMF9saXN0ZW5lcigkZXZlbnQpIHsgaTAuybXJtXJlc3RvcmVWaWV3KF9yNyk7IGNvbnN0IGN0eF9yNiA9IGkwLsm1ybVuZXh0Q29udGV4dCgpOyByZXR1cm4gY3R4X3I2Lm9uQnV0dG9uVGFwKCRldmVudCk7IH0pO1xyXG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxufSB9XHJcbmZ1bmN0aW9uIEVkaWNpb25Db21wb25lbnRfQnV0dG9uXzE2X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgY29uc3QgX3I5ID0gaTAuybXJtWdldEN1cnJlbnRWaWV3KCk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQnV0dG9uXCIsIDE5KTtcclxuICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBFZGljaW9uQ29tcG9uZW50X0J1dHRvbl8xNl9UZW1wbGF0ZV9CdXR0b25fdGFwXzBfbGlzdGVuZXIoKSB7IGkwLsm1ybVyZXN0b3JlVmlldyhfcjkpOyBjb25zdCBjdHhfcjggPSBpMC7Jtcm1bmV4dENvbnRleHQoKTsgcmV0dXJuIGN0eF9yOC5tZW5zYWplaW52YWxpZCgpOyB9KTtcclxuICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbn0gfVxyXG5leHBvcnQgY2xhc3MgRWRpY2lvbkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zID0gcm91dGVyRXh0ZW5zaW9ucztcclxuICAgICAgICB0aGlzLnRleHRGaWVsZFZhbHVlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgbm9tYnJlKEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBpbmljaWFsOiAnICsgdGhpcy5ub21icmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBkZSBudWVzdHJvIGV2ZW50bzogJyArIEV2ZW50RGF0YS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMubm9tYnJlID0gRXZlbnREYXRhLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTnVldm8gdmFsb3I6ICcgKyB0aGlzLm5vbWJyZSk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSBBcHBsaWNhdGlvbi5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG4gICAgb25CdXR0b25UYXAocykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dEZpZWxkVmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnRleHRGaWVsZFZhbHVlLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2guZW1pdCh0aGlzLnRleHRGaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5idXNjYXJBaG9yYSh0aGlzLnRleHRGaWVsZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidXNjYXJBaG9yYShzKSB7XHJcbiAgICAgICAgY29uc29sZS5kaXIoXCJudWV2byBub21icmU6IFwiICsgcyk7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibm9tYnJlVXN1YXJpb1wiLCBzKTtcclxuICAgICAgICBuZXcgVG9hc3R5KHsgdGV4dDogJ1NlIGd1YXJkw7MgY29uIMOpeGl0byB0dSBub21icmUsICcgKyBzIH0pXHJcbiAgICAgICAgICAgIC5zZXRUb2FzdER1cmF0aW9uKFRvYXN0RHVyYXRpb24uU0hPUlQpXHJcbiAgICAgICAgICAgIC5zZXRUb2FzdFBvc2l0aW9uKFRvYXN0UG9zaXRpb24uQk9UVE9NKVxyXG4gICAgICAgICAgICAuc2V0VGV4dENvbG9yKG5ldyBDb2xvcignd2hpdGUnKSlcclxuICAgICAgICAgICAgLnNldEJhY2tncm91bmRDb2xvcignI2ZmOTk5OScpXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3NldHRpbmdzJ10sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1lbnNhamVpbnZhbGlkKCkge1xyXG4gICAgICAgIG5ldyBUb2FzdHkoeyB0ZXh0OiAnSW5ncmVzYSB1biBub21icmUgdmFsaWRvJyB9KVxyXG4gICAgICAgICAgICAuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKVxyXG4gICAgICAgICAgICAuc2V0VG9hc3RQb3NpdGlvbihUb2FzdFBvc2l0aW9uLkJPVFRPTSlcclxuICAgICAgICAgICAgLnNldFRleHRDb2xvcihuZXcgQ29sb3IoJ3doaXRlJykpXHJcbiAgICAgICAgICAgIC5zZXRCYWNrZ3JvdW5kQ29sb3IoJyNmZjk5OTknKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMubGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGF5b3V0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICAgICAgZGVsYXk6IDUwXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiBsYXlvdXQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwid2hpdGVcIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5FZGljaW9uQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBFZGljaW9uQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLlJvdXRlckV4dGVuc2lvbnMpKTsgfTtcclxuRWRpY2lvbkNvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IEVkaWNpb25Db21wb25lbnQsIHNlbGVjdG9yczogW1tcIkVkaWNpb25cIl1dLCB2aWV3UXVlcnk6IGZ1bmN0aW9uIEVkaWNpb25Db21wb25lbnRfUXVlcnkocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICAgICAgaTAuybXJtXZpZXdRdWVyeShfYzAsIDUpO1xyXG4gICAgfSBpZiAocmYgJiAyKSB7XHJcbiAgICAgICAgbGV0IF90O1xyXG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgubGF5b3V0ID0gX3QuZmlyc3QpO1xyXG4gICAgfSB9LCBvdXRwdXRzOiB7IHNlYXJjaDogXCJzZWFyY2hcIiB9LCBkZWNsczogMTcsIHZhcnM6IDUsIGNvbnN0czogW1sxLCBcImFjdGlvbi1iYXJcIl0sIFtcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIl0sIFtcImNvbHVtbnNcIiwgXCI1MCwgKlwiXSwgW1widGV4dFwiLCBcIkVkaWNpXFx1MDBGM24gZGUgbm9tYnJlXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgW1wieG1sbnNcIiwgXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcIiwgMCwgXCJ4bWxuc1wiLCBcIlB1bGxSZWZyZXNoXCIsIFwiQG5hdGl2ZXNjcmlwdC1jb21tdW5pdHkvdWktcHVsbHRvcmVmcmVzaFwiLCBcImxvYWRlZFwiLCBcInBhZ2VMb2FkZWRcIl0sIFsxLCBcInBhZ2VfX2NvbnRlbnRcIl0sIFtcImxheW91dFwiLCBcIlwiXSwgW1widGV4dFwiLCBcIlxcdUYwNDRcIiwgMSwgXCJwYWdlX19jb250ZW50LWljb25cIiwgXCJmYXNcIl0sIFtcImZsZXhEaXJlY3Rpb25cIiwgXCJyb3dcIl0sIFtcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcImhpbnRcIiwgXCJOdWV2byBub21icmVcIiwgXCJ3aWR0aFwiLCBcIjEwMCVcIiwgXCJyZXF1aXJlZFwiLCBcIlwiLCBcIm1pbmxlblwiLCBcIjRcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1widGV4dG9cIiwgXCJuZ01vZGVsXCJdLCBbXCJ3aWR0aFwiLCBcIjI1JVwiLCBcInRleHRcIiwgXCIqXCIsIDQsIFwibmdJZlwiXSwgW1wid2lkdGhcIiwgXCIyNSVcIiwgXCJ0ZXh0XCIsIFwiTXV5IGNvcnRvXCIsIDQsIFwibmdJZlwiXSwgW1widGV4dFwiLCBcIkNhbWJpYXIgbm9tYnJlXCIsIFwid2lkdGhcIiwgXCIxMDAlXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIiwgNCwgXCJuZ0lmXCJdLCBbXCJ0ZXh0XCIsIFwiQ2FtYmlhciBub21icmVcIiwgXCJ3aWR0aFwiLCBcIjEwMCVcIiwgXCJiYWNrZ3JvdW5kXCIsIFwicmVkXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIiwgNCwgXCJuZ0lmXCJdLCBbXCJ3aWR0aFwiLCBcIjI1JVwiLCBcInRleHRcIiwgXCIqXCJdLCBbXCJ3aWR0aFwiLCBcIjI1JVwiLCBcInRleHRcIiwgXCJNdXkgY29ydG9cIl0sIFtcInRleHRcIiwgXCJDYW1iaWFyIG5vbWJyZVwiLCBcIndpZHRoXCIsIFwiMTAwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCJdLCBbXCJ0ZXh0XCIsIFwiQ2FtYmlhciBub21icmVcIiwgXCJ3aWR0aFwiLCBcIjEwMCVcIiwgXCJiYWNrZ3JvdW5kXCIsIFwicmVkXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAxKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIsIFwiR3JpZExheW91dFwiLCAyKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJMYWJlbFwiLCA0KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfNF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkRyYXdlckJ1dHRvblRhcCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwicGFnZVwiLCA1KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDYsIFwiU3RhY2tMYXlvdXRcIiwgNiwgNyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoOCwgXCJMYWJlbFwiLCA4KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDksIFwiRmxleGJveExheW91dFwiLCA5KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEwLCBcIlRleHRGaWVsZFwiLCAxMCwgMTEpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gRWRpY2lvbkNvbXBvbmVudF9UZW1wbGF0ZV9UZXh0RmllbGRfbmdNb2RlbENoYW5nZV8xMF9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC50ZXh0RmllbGRWYWx1ZSA9ICRldmVudDsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMTIsIEVkaWNpb25Db21wb25lbnRfTGFiZWxfMTJfVGVtcGxhdGUsIDEsIDAsIFwiTGFiZWxcIiwgMTIpO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgxMywgRWRpY2lvbkNvbXBvbmVudF9MYWJlbF8xM19UZW1wbGF0ZSwgMSwgMCwgXCJMYWJlbFwiLCAxMyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE0LCBcIldyYXBMYXlvdXRcIik7XHJcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDE1LCBFZGljaW9uQ29tcG9uZW50X0J1dHRvbl8xNV9UZW1wbGF0ZSwgMSwgMCwgXCJCdXR0b25cIiwgMTQpO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgxNiwgRWRpY2lvbkNvbXBvbmVudF9CdXR0b25fMTZfVGVtcGxhdGUsIDEsIDAsIFwiQnV0dG9uXCIsIDE1KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gaWYgKHJmICYgMikge1xyXG4gICAgICAgIGNvbnN0IF9yMSA9IGkwLsm1ybVyZWZlcmVuY2UoMTEpO1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEwKTtcclxuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC50ZXh0RmllbGRWYWx1ZSk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBfcjEuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCAhX3IxLmhhc0Vycm9yKFwicmVxdWlyZWRcIikgJiYgX3IxLmhhc0Vycm9yKFwibWlubGVuXCIpKTtcclxuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcclxuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ0lmXCIsIF9yMS52YWxpZCk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBfcjEuaW52YWxpZCk7XHJcbiAgICB9IH0sIGRpcmVjdGl2ZXM6IFtpMS5BY3Rpb25CYXJDb21wb25lbnQsIGkxLk5hdmlnYXRpb25CdXR0b25EaXJlY3RpdmUsIGkxLlRleHRWYWx1ZUFjY2Vzc29yLCBpMi5SZXF1aXJlZFZhbGlkYXRvciwgaTIuTmdDb250cm9sU3RhdHVzLCBpMi5OZ01vZGVsLCBpMy5OZ0lmXSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcclxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEVkaWNpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9lZGljaW9uLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGNsYXNzIEVkaWNpb25Nb2R1bGUge1xyXG59XHJcbkVkaWNpb25Nb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBFZGljaW9uTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEVkaWNpb25Nb2R1bGUpKCk7IH07XHJcbkVkaWNpb25Nb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEVkaWNpb25Nb2R1bGUgfSk7XHJcbkVkaWNpb25Nb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBFZGljaW9uUm91dGluZ01vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9