"use strict";
exports.id = "src_app_home_home_module_ts";
exports.ids = ["src_app_home_home_module_ts"];
exports.modules = {

/***/ "./src/app/home/home-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/dialogs-common.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.android.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");






class HomeComponent {
    constructor() {
    }
    pageLoaded(args) {
        this.displayPromptDialog();
    }
    ngOnInit() {
    }
    displayPromptDialog() {
        const nombreUsuario = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getString("nombreUsuario", "anonimo");
        console.log(nombreUsuario);
        if (nombreUsuario == "anonimo") {
            let options = {
                title: "Bienvenido",
                message: "Ingresa tu nombre",
                okButtonText: "Guardar",
                cancelable: true,
                inputType: _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.inputType.text,
                capitalizationType: _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.capitalizationType.sentences
            };
            _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Dialogs.prompt(options).then((result) => {
                _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setString("nombreUsuario", result.text);
                console.log(result.text);
                new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.Toasty({ text: 'Bienvenido: ' + result.text }).setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastDuration.SHORT).show();
            });
        }
        else {
            new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.Toasty({ text: 'Bienvenido: ' + nombreUsuario }).setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastDuration.SHORT).show();
        }
        // << prompt-dialog-code/*/
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["Home"]], decls: 9, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Inicio", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [3, "loaded"], [1, "page__content"], ["text", "\uF015", 1, "page__content-icon", "fas"], ["text", "Bienvenido  :)", 1, "page__content-placeholder"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function HomeComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "Page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loaded", function HomeComponent_Template_Page_loaded_5_listener($event) { return ctx.pageLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "GridLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.PageDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9ob21lX2hvbWVfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNoQjtBQUNiO0FBQ1E7QUFDNUMsa0JBQWtCLHFCQUFxQiwwREFBYSxFQUFFO0FBQy9DO0FBQ1A7QUFDQSxpRUFBaUU7QUFDakUsdUNBQXVDLDhEQUFtQixHQUFHLHlCQUF5QjtBQUN0Rix1Q0FBdUMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RuRTtBQUMzQjtBQUNzQjtBQUNEO0FBQ2xDO0FBQ1E7QUFDckM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhFQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4REFBYztBQUN6QyxvQ0FBb0MsNEVBQTRCO0FBQ2hFO0FBQ0EsWUFBWSw4REFBYztBQUMxQixnQkFBZ0IsOEVBQXFCO0FBQ3JDO0FBQ0Esb0JBQW9CLGlFQUFNLEdBQUcsb0NBQW9DLG1CQUFtQiw4RUFBbUI7QUFDdkcsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0IsaUVBQU0sR0FBRyxzQ0FBc0MsbUJBQW1CLDhFQUFtQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1RUFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pELG1DQUFtQywrREFBb0IsR0FBRyx5YkFBeWI7QUFDbmYsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsaUVBQWlFLGlDQUFpQztBQUN2SCxRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLDRFQUE0RSxnQ0FBZ0M7QUFDakksUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixPQUFPLGVBQWUscUVBQXFCLEVBQUUsNEVBQTRCLEVBQUUsZ0VBQWdCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDNUQvQztBQUNQO0FBQ3RCO0FBQzdCO0FBQ1A7QUFDQSxtREFBbUQ7QUFDbkQsZ0NBQWdDLDhEQUFtQixHQUFHLGtCQUFrQjtBQUN4RSxnQ0FBZ0MsOERBQW1CLEdBQUcsV0FBVywyRUFBd0IsRUFBRSxtRUFBaUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfV07XHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7XHJcbn1cclxuSG9tZVJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBIb21lUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBIb21lUm91dGluZ01vZHVsZSkoKTsgfTtcclxuSG9tZVJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEhvbWVSb3V0aW5nTW9kdWxlIH0pO1xyXG5Ib21lUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XHJcbiIsImltcG9ydCB7IGNhcGl0YWxpemF0aW9uVHlwZSwgRGlhbG9ncywgaW5wdXRUeXBlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUb2FzdER1cmF0aW9uLCBUb2FzdHkgfSBmcm9tICdAdHJpbml3aXovbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICBwYWdlTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlQcm9tcHREaWFsb2coKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gICAgZGlzcGxheVByb21wdERpYWxvZygpIHtcclxuICAgICAgICBjb25zdCBub21icmVVc3VhcmlvID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibm9tYnJlVXN1YXJpb1wiLCBcImFub25pbW9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9tYnJlVXN1YXJpbyk7XHJcbiAgICAgICAgaWYgKG5vbWJyZVVzdWFyaW8gPT0gXCJhbm9uaW1vXCIpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJCaWVudmVuaWRvXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2EgdHUgbm9tYnJlXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR3VhcmRhclwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsXHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgRGlhbG9ncy5wcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJub21icmVVc3VhcmlvXCIsIHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgICAgIG5ldyBUb2FzdHkoeyB0ZXh0OiAnQmllbnZlbmlkbzogJyArIHJlc3VsdC50ZXh0IH0pLnNldFRvYXN0RHVyYXRpb24oVG9hc3REdXJhdGlvbi5TSE9SVCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5ldyBUb2FzdHkoeyB0ZXh0OiAnQmllbnZlbmlkbzogJyArIG5vbWJyZVVzdWFyaW8gfSkuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDw8IHByb21wdC1kaWFsb2ctY29kZS8qL1xyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuSG9tZUNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIEhvbWVDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSG9tZUNvbXBvbmVudCkoKTsgfTtcclxuSG9tZUNvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IEhvbWVDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIkhvbWVcIl1dLCBkZWNsczogOSwgdmFyczogMCwgY29uc3RzOiBbWzEsIFwiYWN0aW9uLWJhclwiXSwgW1widmlzaWJpbGl0eVwiLCBcImhpZGRlblwiXSwgW1wiY29sdW1uc1wiLCBcIjUwLCAqXCJdLCBbXCJ0ZXh0XCIsIFwiSW5pY2lvXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgWzMsIFwibG9hZGVkXCJdLCBbMSwgXCJwYWdlX19jb250ZW50XCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjAxNVwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtaWNvblwiLCBcImZhc1wiXSwgW1widGV4dFwiLCBcIkJpZW52ZW5pZG8gIDopXCIsIDEsIFwicGFnZV9fY29udGVudC1wbGFjZWhvbGRlclwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBIb21lQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJBY3Rpb25CYXJcIiwgMCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMSwgXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIDEpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMiwgXCJHcmlkTGF5b3V0XCIsIDIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDMsIFwiTGFiZWxcIiwgMyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg0LCBcIkxhYmVsXCIsIDQpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBIb21lQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uRHJhd2VyQnV0dG9uVGFwKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNSwgXCJQYWdlXCIsIDUpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcImxvYWRlZFwiLCBmdW5jdGlvbiBIb21lQ29tcG9uZW50X1RlbXBsYXRlX1BhZ2VfbG9hZGVkXzVfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHgucGFnZUxvYWRlZCgkZXZlbnQpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDYsIFwiR3JpZExheW91dFwiLCA2KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg3LCBcIkxhYmVsXCIsIDcpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDgsIFwiTGFiZWxcIiwgOCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgfSB9LCBkaXJlY3RpdmVzOiBbaTEuQWN0aW9uQmFyQ29tcG9uZW50LCBpMS5OYXZpZ2F0aW9uQnV0dG9uRGlyZWN0aXZlLCBpMS5QYWdlRGlyZWN0aXZlXSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcclxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7XHJcbn1cclxuSG9tZU1vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIEhvbWVNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSG9tZU1vZHVsZSkoKTsgfTtcclxuSG9tZU1vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogSG9tZU1vZHVsZSB9KTtcclxuSG9tZU1vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIEhvbWVSb3V0aW5nTW9kdWxlXV0gfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==