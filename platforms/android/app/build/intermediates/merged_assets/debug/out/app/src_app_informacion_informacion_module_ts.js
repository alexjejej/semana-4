"use strict";
exports.id = "src_app_informacion_informacion_module_ts";
exports.ids = ["src_app_informacion_informacion_module_ts"];
exports.modules = {

/***/ "./src/app/informacion/informacion-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionRoutingModule": () => (/* binding */ InformacionRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _informacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/informacion/informacion.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _informacion_component__WEBPACK_IMPORTED_MODULE_0__.InformacionComponent }];
class InformacionRoutingModule {
}
InformacionRoutingModule.ɵfac = function InformacionRoutingModule_Factory(t) { return new (t || InformacionRoutingModule)(); };
InformacionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InformacionRoutingModule });
InformacionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/informacion/informacion.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionComponent": () => (/* binding */ InformacionComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



class InformacionComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
InformacionComponent.ɵfac = function InformacionComponent_Factory(t) { return new (t || InformacionComponent)(); };
InformacionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InformacionComponent, selectors: [["Informacion"]], decls: 11, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Acerca de", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF2BB", 1, "page__content-icon", "far"], ["text", "Alejandro Garcia Arana", 1, "page__content-placeholder"], ["fontSize", "20", "horizontalAlignment", "center", "top", "30", "text", "Estudiante de la ingenieria en nanotecnolog\u00EDa"], ["fontSize", "15", "horizontalAlignment", "center", "top", "40", "text", "22 a\u00F1os"]], template: function InformacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function InformacionComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "StackLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/informacion/informacion.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionModule": () => (/* binding */ InformacionModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/informacion/informacion-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class InformacionModule {
}
InformacionModule.ɵfac = function InformacionModule_Factory(t) { return new (t || InformacionModule)(); };
InformacionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InformacionModule });
InformacionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformacionRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9pbmZvcm1hY2lvbl9pbmZvcm1hY2lvbl9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ0Y7QUFDM0I7QUFDUTtBQUM1QyxrQkFBa0IscUJBQXFCLHdFQUFvQixFQUFFO0FBQ3REO0FBQ1A7QUFDQSwrRUFBK0U7QUFDL0UsOENBQThDLDhEQUFtQixHQUFHLGdDQUFnQztBQUNwRyw4Q0FBOEMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDVHJHO0FBQ2I7QUFDUTtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkUsMENBQTBDLCtEQUFvQixHQUFHLHFxQkFBcXFCO0FBQ3R1QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSx3RUFBd0UsaUNBQWlDO0FBQzlILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSxvREFBUyxRQUFRO0FBQ3pCLFFBQVEsMERBQWU7QUFDdkIsT0FBTyxlQUFlLHFFQUFxQixFQUFFLDRFQUE0QixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQ2pDN0I7QUFDTztBQUNwQztBQUM3QjtBQUNQO0FBQ0EsaUVBQWlFO0FBQ2pFLHVDQUF1Qyw4REFBbUIsR0FBRyx5QkFBeUI7QUFDdEYsdUNBQXVDLDhEQUFtQixHQUFHLFdBQVcsMkVBQXdCLEVBQUUsaUZBQXdCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvaW5mb3JtYWNpb24vaW5mb3JtYWNpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvaW5mb3JtYWNpb24vaW5mb3JtYWNpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEluZm9ybWFjaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvcm1hY2lvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEluZm9ybWFjaW9uQ29tcG9uZW50IH1dO1xyXG5leHBvcnQgY2xhc3MgSW5mb3JtYWNpb25Sb3V0aW5nTW9kdWxlIHtcclxufVxyXG5JbmZvcm1hY2lvblJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBJbmZvcm1hY2lvblJvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSW5mb3JtYWNpb25Sb3V0aW5nTW9kdWxlKSgpOyB9O1xyXG5JbmZvcm1hY2lvblJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEluZm9ybWFjaW9uUm91dGluZ01vZHVsZSB9KTtcclxuSW5mb3JtYWNpb25Sb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSB9KTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmV4cG9ydCBjbGFzcyBJbmZvcm1hY2lvbkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG5JbmZvcm1hY2lvbkNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIEluZm9ybWFjaW9uQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEluZm9ybWFjaW9uQ29tcG9uZW50KSgpOyB9O1xyXG5JbmZvcm1hY2lvbkNvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IEluZm9ybWFjaW9uQ29tcG9uZW50LCBzZWxlY3RvcnM6IFtbXCJJbmZvcm1hY2lvblwiXV0sIGRlY2xzOiAxMSwgdmFyczogMCwgY29uc3RzOiBbWzEsIFwiYWN0aW9uLWJhclwiXSwgW1widmlzaWJpbGl0eVwiLCBcImhpZGRlblwiXSwgW1wiY29sdW1uc1wiLCBcIjUwLCAqXCJdLCBbXCJ0ZXh0XCIsIFwiQWNlcmNhIGRlXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgWzEsIFwicGFnZV9fY29udGVudFwiXSwgW1widGV4dFwiLCBcIlxcdUYyQkJcIiwgMSwgXCJwYWdlX19jb250ZW50LWljb25cIiwgXCJmYXJcIl0sIFtcInRleHRcIiwgXCJBbGVqYW5kcm8gR2FyY2lhIEFyYW5hXCIsIDEsIFwicGFnZV9fY29udGVudC1wbGFjZWhvbGRlclwiXSwgW1wiZm9udFNpemVcIiwgXCIyMFwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJ0b3BcIiwgXCIzMFwiLCBcInRleHRcIiwgXCJFc3R1ZGlhbnRlIGRlIGxhIGluZ2VuaWVyaWEgZW4gbmFub3RlY25vbG9nXFx1MDBFRGFcIl0sIFtcImZvbnRTaXplXCIsIFwiMTVcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwidG9wXCIsIFwiNDBcIiwgXCJ0ZXh0XCIsIFwiMjIgYVxcdTAwRjFvc1wiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBJbmZvcm1hY2lvbkNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAxKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIsIFwiR3JpZExheW91dFwiLCAyKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJMYWJlbFwiLCA0KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gSW5mb3JtYWNpb25Db21wb25lbnRfVGVtcGxhdGVfTGFiZWxfdGFwXzRfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25EcmF3ZXJCdXR0b25UYXAoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIlN0YWNrTGF5b3V0XCIsIDUpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDYsIFwiTGFiZWxcIiwgNik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoNywgXCJMYWJlbFwiLCA3KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg4LCBcImxhYmVsXCIsIDgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDksIFwibGFiZWxcIiwgOSk7XHJcbiAgICAgICAgaTAuybXJtXRleHQoMTAsIFwiIH1cXG5cIik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEluZm9ybWFjaW9uUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaW5mb3JtYWNpb24tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgSW5mb3JtYWNpb25Nb2R1bGUge1xyXG59XHJcbkluZm9ybWFjaW9uTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gSW5mb3JtYWNpb25Nb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSW5mb3JtYWNpb25Nb2R1bGUpKCk7IH07XHJcbkluZm9ybWFjaW9uTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBJbmZvcm1hY2lvbk1vZHVsZSB9KTtcclxuSW5mb3JtYWNpb25Nb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBJbmZvcm1hY2lvblJvdXRpbmdNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9