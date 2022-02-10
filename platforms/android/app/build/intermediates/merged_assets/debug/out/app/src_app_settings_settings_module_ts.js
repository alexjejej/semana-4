"use strict";
exports.id = "src_app_settings_settings_module_ts";
exports.ids = ["src_app_settings_settings_module_ts"];
exports.modules = {

/***/ "./src/app/settings/settings-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent }];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");





class SettingsComponent {
    constructor(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject providers.
    }
    pageLoaded(args) {
        var page = args.object;
        this.name = page.getViewById("name");
        this.name.text = "Que tal, " + _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__.getString("nombreUsuario");
    }
    btn() {
        this.routerExtensions.navigate(['/edicion'], {
            transition: {
                name: 'slideTop',
            },
        });
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Application.getRootView();
        sideDrawer.showDrawer();
    }
    cambiarnombre() {
        const nombreUsuario = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__.getString("nombreUsuario");
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.RouterExtensions)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["Settings"]], decls: 13, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Settings", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [3, "loaded"], [1, "page__content"], ["text", "\uF013", 1, "page__content-icon", "fas"], ["id", "name", "marginTop", "50", "marginTop", "270", "horizontalAlignment", "center", "text", ""], ["textWrap", "true", "marginTop", "50", "marginTop", "300", "horizontalAlignment", "center"], ["text", "\u00BFQuieres cambiar tu nombre de usuario?"], ["marginTop", "50", "text", "Clic aqui", "width", "40%", "horizontalAlignment", "center", 3, "tap"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function SettingsComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "Page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("loaded", function SettingsComponent_Template_Page_loaded_5_listener($event) { return ctx.pageLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "GridLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "FormattedString");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "Button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function SettingsComponent_Template_Button_tap_12_listener() { return ctx.btn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__.PageDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9zZXR0aW5nc19zZXR0aW5nc19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ1I7QUFDckI7QUFDUTtBQUM1QyxrQkFBa0IscUJBQXFCLGtFQUFpQixFQUFFO0FBQ25EO0FBQ1A7QUFDQSx5RUFBeUU7QUFDekUsMkNBQTJDLDhEQUFtQixHQUFHLDZCQUE2QjtBQUM5RiwyQ0FBMkMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RsRztBQUNzQjtBQUNkO0FBQ3JCO0FBQ1E7QUFDckM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4RUFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1RUFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhFQUFxQjtBQUNuRDtBQUNBO0FBQ0EsaUVBQWlFLG9DQUFvQywrREFBb0IsQ0FBQyxtRUFBbUI7QUFDN0ksdUNBQXVDLCtEQUFvQixHQUFHLDR1QkFBNHVCO0FBQzF5QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxxRUFBcUUsaUNBQWlDO0FBQzNILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsZ0ZBQWdGLGdDQUFnQztBQUNySSxRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSx1RUFBdUUsbUJBQW1CO0FBQy9HLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLE9BQU8sZUFBZSxxRUFBcUIsRUFBRSw0RUFBNEIsRUFBRSxnRUFBZ0IscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUMzRC9DO0FBQ0M7QUFDOUI7QUFDN0I7QUFDUDtBQUNBLDJEQUEyRDtBQUMzRCxvQ0FBb0MsOERBQW1CLEdBQUcsc0JBQXNCO0FBQ2hGLG9DQUFvQyw4REFBbUIsR0FBRyxXQUFXLDJFQUF3QixFQUFFLDJFQUFxQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9XTtcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzUm91dGluZ01vZHVsZSB7XHJcbn1cclxuU2V0dGluZ3NSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NSb3V0aW5nTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFNldHRpbmdzUm91dGluZ01vZHVsZSkoKTsgfTtcclxuU2V0dGluZ3NSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBTZXR0aW5nc1JvdXRpbmdNb2R1bGUgfSk7XHJcblNldHRpbmdzUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMgPSByb3V0ZXJFeHRlbnNpb25zO1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcbiAgICBwYWdlTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJuYW1lXCIpO1xyXG4gICAgICAgIHRoaXMubmFtZS50ZXh0ID0gXCJRdWUgdGFsLCBcIiArIGFwcFNldHRpbmdzLmdldFN0cmluZyhcIm5vbWJyZVVzdWFyaW9cIik7XHJcbiAgICB9XHJcbiAgICBidG4oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2VkaWNpb24nXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuICAgIGNhbWJpYXJub21icmUoKSB7XHJcbiAgICAgICAgY29uc3Qgbm9tYnJlVXN1YXJpbyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcIm5vbWJyZVVzdWFyaW9cIik7XHJcbiAgICB9XHJcbn1cclxuU2V0dGluZ3NDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBTZXR0aW5nc0NvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBTZXR0aW5nc0NvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMS5Sb3V0ZXJFeHRlbnNpb25zKSk7IH07XHJcblNldHRpbmdzQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogU2V0dGluZ3NDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIlNldHRpbmdzXCJdXSwgZGVjbHM6IDEzLCB2YXJzOiAwLCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiNTAsICpcIl0sIFtcInRleHRcIiwgXCJTZXR0aW5nc1wiLCBcImNvbFNwYW5cIiwgXCIyXCIsIDEsIFwiYWN0aW9uLWJhci10aXRsZVwiXSwgW1widGV4dFwiLCBcIlxcdUYwQzlcIiwgMSwgXCJmYXNcIiwgMywgXCJ0YXBcIl0sIFszLCBcImxvYWRlZFwiXSwgWzEsIFwicGFnZV9fY29udGVudFwiXSwgW1widGV4dFwiLCBcIlxcdUYwMTNcIiwgMSwgXCJwYWdlX19jb250ZW50LWljb25cIiwgXCJmYXNcIl0sIFtcImlkXCIsIFwibmFtZVwiLCBcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwibWFyZ2luVG9wXCIsIFwiMjcwXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcInRleHRcIiwgXCJcIl0sIFtcInRleHRXcmFwXCIsIFwidHJ1ZVwiLCBcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwibWFyZ2luVG9wXCIsIFwiMzAwXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiXSwgW1widGV4dFwiLCBcIlxcdTAwQkZRdWllcmVzIGNhbWJpYXIgdHUgbm9tYnJlIGRlIHVzdWFyaW8/XCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJDbGljIGFxdWlcIiwgXCJ3aWR0aFwiLCBcIjQwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMywgXCJ0YXBcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gU2V0dGluZ3NDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkFjdGlvbkJhclwiLCAwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkdyaWRMYXlvdXRcIiwgMik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMywgXCJMYWJlbFwiLCAzKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFNldHRpbmdzQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uRHJhd2VyQnV0dG9uVGFwKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNSwgXCJQYWdlXCIsIDUpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcImxvYWRlZFwiLCBmdW5jdGlvbiBTZXR0aW5nc0NvbXBvbmVudF9UZW1wbGF0ZV9QYWdlX2xvYWRlZF81X2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LnBhZ2VMb2FkZWQoJGV2ZW50KTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg2LCBcIkdyaWRMYXlvdXRcIiwgNik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoNywgXCJMYWJlbFwiLCA3KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg4LCBcIkxhYmVsXCIsIDgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoOSwgXCJMYWJlbFwiLCA5KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEwLCBcIkZvcm1hdHRlZFN0cmluZ1wiKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxMSwgXCJzcGFuXCIsIDEwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxMiwgXCJCdXR0b25cIiwgMTEpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBTZXR0aW5nc0NvbXBvbmVudF9UZW1wbGF0ZV9CdXR0b25fdGFwXzEyX2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4LmJ0bigpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZSwgaTEuUGFnZURpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFNldHRpbmdzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2V0dGluZ3Mtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NNb2R1bGUge1xyXG59XHJcblNldHRpbmdzTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgU2V0dGluZ3NNb2R1bGUpKCk7IH07XHJcblNldHRpbmdzTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBTZXR0aW5nc01vZHVsZSB9KTtcclxuU2V0dGluZ3NNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBTZXR0aW5nc1JvdXRpbmdNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9