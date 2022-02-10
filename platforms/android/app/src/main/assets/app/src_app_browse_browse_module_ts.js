"use strict";
exports.id = "src_app_browse_browse_module_ts";
exports.ids = ["src_app_browse_browse_module_ts"];
exports.modules = {

/***/ "./src/app/browse/browse-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowseRoutingModule": () => (/* binding */ BrowseRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/browse/browse.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _browse_component__WEBPACK_IMPORTED_MODULE_0__.BrowseComponent }];
class BrowseRoutingModule {
}
BrowseRoutingModule.ɵfac = function BrowseRoutingModule_Factory(t) { return new (t || BrowseRoutingModule)(); };
BrowseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrowseRoutingModule });
BrowseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/browse/browse.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowseComponent": () => (/* binding */ BrowseComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



const _isAndroid = !!_nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.android;
const _isIOS = !!_nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.ios;
let contador = 0;
class BrowseComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    tap() {
        if (_isAndroid) {
            alert("Tu dispositivo es android");
        }
        else {
            alert("Tu dispositivo es IOS");
        }
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
BrowseComponent.ɵfac = function BrowseComponent_Factory(t) { return new (t || BrowseComponent)(); };
BrowseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BrowseComponent, selectors: [["Browse"]], decls: 9, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Browse", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF1EA", 1, "page__content-icon", "far"], ["Size", "20", "horizontalAlignment", "center", "marginTop", "100", "text", "\u00BFDeseas conocer tu plataforma?"], ["text", "Clic aqui", 1, "boton", 3, "tap"]], template: function BrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function BrowseComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "StackLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function BrowseComponent_Template_button_tap_8_listener() { return ctx.tap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/browse/browse.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowseModule": () => (/* binding */ BrowseModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _browse_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/browse/browse-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class BrowseModule {
}
BrowseModule.ɵfac = function BrowseModule_Factory(t) { return new (t || BrowseModule)(); };
BrowseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrowseModule });
BrowseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _browse_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrowseRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9icm93c2VfYnJvd3NlX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDWjtBQUNqQjtBQUNRO0FBQzVDLGtCQUFrQixxQkFBcUIsOERBQWUsRUFBRTtBQUNqRDtBQUNQO0FBQ0EscUVBQXFFO0FBQ3JFLHlDQUF5Qyw4REFBbUIsR0FBRywyQkFBMkI7QUFDMUYseUNBQXlDLDhEQUFtQixHQUFHLFdBQVcsb0ZBQWlDLFdBQVcsMkVBQXdCLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ1RoRztBQUNiO0FBQ1E7QUFDNUMscUJBQXFCLG1FQUFtQjtBQUN4QyxpQkFBaUIsK0RBQWU7QUFDaEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1RUFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdELHFDQUFxQywrREFBb0IsR0FBRyxxaEJBQXFoQjtBQUNqbEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsbUVBQW1FLGlDQUFpQztBQUN6SCxRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxvRUFBb0UsbUJBQW1CO0FBQzVHLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixPQUFPLGVBQWUscUVBQXFCLEVBQUUsNEVBQTRCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDNUM3QjtBQUNIO0FBQzFCO0FBQzdCO0FBQ1A7QUFDQSx1REFBdUQ7QUFDdkQsa0NBQWtDLDhEQUFtQixHQUFHLG9CQUFvQjtBQUM1RSxrQ0FBa0MsOERBQW1CLEdBQUcsV0FBVywyRUFBd0IsRUFBRSx1RUFBbUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvYnJvd3NlL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2Jyb3dzZS9icm93c2UuY29tcG9uZW50LnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvYnJvd3NlL2Jyb3dzZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSAnLi9icm93c2UuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfV07XHJcbmV4cG9ydCBjbGFzcyBCcm93c2VSb3V0aW5nTW9kdWxlIHtcclxufVxyXG5Ccm93c2VSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gQnJvd3NlUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBCcm93c2VSb3V0aW5nTW9kdWxlKSgpOyB9O1xyXG5Ccm93c2VSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBCcm93c2VSb3V0aW5nTW9kdWxlIH0pO1xyXG5Ccm93c2VSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSB9KTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IF9pc0FuZHJvaWQgPSAhIUFwcGxpY2F0aW9uLmFuZHJvaWQ7XHJcbmNvbnN0IF9pc0lPUyA9ICEhQXBwbGljYXRpb24uaW9zO1xyXG5sZXQgY29udGFkb3IgPSAwO1xyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcbiAgICB0YXAoKSB7XHJcbiAgICAgICAgaWYgKF9pc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJUdSBkaXNwb3NpdGl2byBlcyBhbmRyb2lkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJUdSBkaXNwb3NpdGl2byBlcyBJT1NcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG5Ccm93c2VDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBCcm93c2VDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgQnJvd3NlQ29tcG9uZW50KSgpOyB9O1xyXG5Ccm93c2VDb21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBCcm93c2VDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIkJyb3dzZVwiXV0sIGRlY2xzOiA5LCB2YXJzOiAwLCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiNTAsICpcIl0sIFtcInRleHRcIiwgXCJCcm93c2VcIiwgXCJjb2xTcGFuXCIsIFwiMlwiLCAxLCBcImFjdGlvbi1iYXItdGl0bGVcIl0sIFtcInRleHRcIiwgXCJcXHVGMEM5XCIsIDEsIFwiZmFzXCIsIDMsIFwidGFwXCJdLCBbMSwgXCJwYWdlX19jb250ZW50XCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjFFQVwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtaWNvblwiLCBcImZhclwiXSwgW1wiU2l6ZVwiLCBcIjIwXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcIm1hcmdpblRvcFwiLCBcIjEwMFwiLCBcInRleHRcIiwgXCJcXHUwMEJGRGVzZWFzIGNvbm9jZXIgdHUgcGxhdGFmb3JtYT9cIl0sIFtcInRleHRcIiwgXCJDbGljIGFxdWlcIiwgMSwgXCJib3RvblwiLCAzLCBcInRhcFwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBCcm93c2VDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkFjdGlvbkJhclwiLCAwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkdyaWRMYXlvdXRcIiwgMik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMywgXCJMYWJlbFwiLCAzKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEJyb3dzZUNvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfNF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkRyYXdlckJ1dHRvblRhcCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwiU3RhY2tMYXlvdXRcIiwgNSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoNiwgXCJMYWJlbFwiLCA2KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg3LCBcIkxhYmVsXCIsIDcpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoOCwgXCJidXR0b25cIiwgOCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEJyb3dzZUNvbXBvbmVudF9UZW1wbGF0ZV9idXR0b25fdGFwXzhfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgudGFwKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEJyb3dzZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBjbGFzcyBCcm93c2VNb2R1bGUge1xyXG59XHJcbkJyb3dzZU1vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIEJyb3dzZU1vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBCcm93c2VNb2R1bGUpKCk7IH07XHJcbkJyb3dzZU1vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogQnJvd3NlTW9kdWxlIH0pO1xyXG5Ccm93c2VNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBCcm93c2VSb3V0aW5nTW9kdWxlXV0gfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==