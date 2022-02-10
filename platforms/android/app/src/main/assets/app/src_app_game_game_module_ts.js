"use strict";
exports.id = "src_app_game_game_module_ts";
exports.ids = ["src_app_game_game_module_ts"];
exports.modules = {

/***/ "./src/app/game/game-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRoutingModule": () => (/* binding */ GameRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent }];
class GameRoutingModule {
}
GameRoutingModule.ɵfac = function GameRoutingModule_Factory(t) { return new (t || GameRoutingModule)(); };
GameRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GameRoutingModule });
GameRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



let contador = 0;
class GameComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    tap() {
        contador = contador + 1;
        if (contador == 1) {
            alert("Primera vez que presiona el logo");
        }
        else {
            alert("Has presionado el logo " + contador + " veces");
        }
    }
    ngOnInit() {
        // Init your component properties here.
    }
    longpress(args) {
        const grid = args.object;
        grid.rotate = 0;
        grid.animate({
            rotate: 360,
            duration: 2000
        });
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["Game"]], decls: 10, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Game", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF11B", 1, "page__content-icon", "fas", 3, "longPress"], ["horizontalAlignment", "center", "fontSize", "20", "marginTop", "50", "text", "Haga clic en el logo o deja precionado"], ["id", "img", "width", "50%", "marginTop", "50", "src", "~/imagenes/udg.png", 3, "longPress", "tap"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function GameComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("longPress", function GameComponent_Template_Label_longPress_7_listener($event) { return ctx.longpress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "image", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("longPress", function GameComponent_Template_image_longPress_9_listener($event) { return ctx.longpress($event); })("tap", function GameComponent_Template_image_tap_9_listener() { return ctx.tap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/game/game.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModule": () => (/* binding */ GameModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/game/game-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class GameModule {
}
GameModule.ɵfac = function GameModule_Factory(t) { return new (t || GameModule)(); };
GameModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9nYW1lX2dhbWVfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNoQjtBQUNiO0FBQ1E7QUFDNUMsa0JBQWtCLHFCQUFxQiwwREFBYSxFQUFFO0FBQy9DO0FBQ1A7QUFDQSxpRUFBaUU7QUFDakUsdUNBQXVDLDhEQUFtQixHQUFHLHlCQUF5QjtBQUN0Rix1Q0FBdUMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDVDlGO0FBQ2I7QUFDUTtBQUM1QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsdUVBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxtQ0FBbUMsK0RBQW9CLEdBQUcsNmxCQUE2bEI7QUFDdnBCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLGlFQUFpRSxpQ0FBaUM7QUFDdkgsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxtRkFBbUYsK0JBQStCO0FBQ3ZJLFFBQVEsMERBQWU7QUFDdkIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLG1GQUFtRiwrQkFBK0Isa0VBQWtFLG1CQUFtQjtBQUM1TixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixPQUFPLGVBQWUscUVBQXFCLEVBQUUsNEVBQTRCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDdkQ3QjtBQUNQO0FBQ3RCO0FBQzdCO0FBQ1A7QUFDQSxtREFBbUQ7QUFDbkQsZ0NBQWdDLDhEQUFtQixHQUFHLGtCQUFrQjtBQUN4RSxnQ0FBZ0MsOERBQW1CLEdBQUcsV0FBVywyRUFBd0IsRUFBRSxtRUFBaUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvZ2FtZS9nYW1lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2dhbWUvZ2FtZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgR2FtZUNvbXBvbmVudCB9IGZyb20gJy4vZ2FtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEdhbWVDb21wb25lbnQgfV07XHJcbmV4cG9ydCBjbGFzcyBHYW1lUm91dGluZ01vZHVsZSB7XHJcbn1cclxuR2FtZVJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBHYW1lUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBHYW1lUm91dGluZ01vZHVsZSkoKTsgfTtcclxuR2FtZVJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEdhbWVSb3V0aW5nTW9kdWxlIH0pO1xyXG5HYW1lUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5sZXQgY29udGFkb3IgPSAwO1xyXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgdGFwKCkge1xyXG4gICAgICAgIGNvbnRhZG9yID0gY29udGFkb3IgKyAxO1xyXG4gICAgICAgIGlmIChjb250YWRvciA9PSAxKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJpbWVyYSB2ZXogcXVlIHByZXNpb25hIGVsIGxvZ29cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIkhhcyBwcmVzaW9uYWRvIGVsIGxvZ28gXCIgKyBjb250YWRvciArIFwiIHZlY2VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgbG9uZ3ByZXNzKGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBncmlkID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgZ3JpZC5yb3RhdGUgPSAwO1xyXG4gICAgICAgIGdyaWQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHJvdGF0ZTogMzYwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIEdhbWVDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgR2FtZUNvbXBvbmVudCkoKTsgfTtcclxuR2FtZUNvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IEdhbWVDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIkdhbWVcIl1dLCBkZWNsczogMTAsIHZhcnM6IDAsIGNvbnN0czogW1sxLCBcImFjdGlvbi1iYXJcIl0sIFtcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIl0sIFtcImNvbHVtbnNcIiwgXCI1MCwgKlwiXSwgW1widGV4dFwiLCBcIkdhbWVcIiwgXCJjb2xTcGFuXCIsIFwiMlwiLCAxLCBcImFjdGlvbi1iYXItdGl0bGVcIl0sIFtcInRleHRcIiwgXCJcXHVGMEM5XCIsIDEsIFwiZmFzXCIsIDMsIFwidGFwXCJdLCBbMSwgXCJwYWdlX19jb250ZW50XCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjExQlwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtaWNvblwiLCBcImZhc1wiLCAzLCBcImxvbmdQcmVzc1wiXSwgW1wiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcImZvbnRTaXplXCIsIFwiMjBcIiwgXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJIYWdhIGNsaWMgZW4gZWwgbG9nbyBvIGRlamEgcHJlY2lvbmFkb1wiXSwgW1wiaWRcIiwgXCJpbWdcIiwgXCJ3aWR0aFwiLCBcIjUwJVwiLCBcIm1hcmdpblRvcFwiLCBcIjUwXCIsIFwic3JjXCIsIFwifi9pbWFnZW5lcy91ZGcucG5nXCIsIDMsIFwibG9uZ1ByZXNzXCIsIFwidGFwXCJdXSwgdGVtcGxhdGU6IGZ1bmN0aW9uIEdhbWVDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkFjdGlvbkJhclwiLCAwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkdyaWRMYXlvdXRcIiwgMik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMywgXCJMYWJlbFwiLCAzKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEdhbWVDb21wb25lbnRfVGVtcGxhdGVfTGFiZWxfdGFwXzRfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25EcmF3ZXJCdXR0b25UYXAoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIkdyaWRMYXlvdXRcIiwgNSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg2LCBcIlN0YWNrTGF5b3V0XCIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNywgXCJMYWJlbFwiLCA2KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJsb25nUHJlc3NcIiwgZnVuY3Rpb24gR2FtZUNvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF9sb25nUHJlc3NfN19saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5sb25ncHJlc3MoJGV2ZW50KTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg4LCBcImxhYmVsXCIsIDcpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoOSwgXCJpbWFnZVwiLCA4KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJsb25nUHJlc3NcIiwgZnVuY3Rpb24gR2FtZUNvbXBvbmVudF9UZW1wbGF0ZV9pbWFnZV9sb25nUHJlc3NfOV9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5sb25ncHJlc3MoJGV2ZW50KTsgfSkoXCJ0YXBcIiwgZnVuY3Rpb24gR2FtZUNvbXBvbmVudF9UZW1wbGF0ZV9pbWFnZV90YXBfOV9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC50YXAoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICB9IH0sIGRpcmVjdGl2ZXM6IFtpMS5BY3Rpb25CYXJDb21wb25lbnQsIGkxLk5hdmlnYXRpb25CdXR0b25EaXJlY3RpdmVdLCBlbmNhcHN1bGF0aW9uOiAyIH0pO1xyXG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBHYW1lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZ2FtZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lTW9kdWxlIHtcclxufVxyXG5HYW1lTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gR2FtZU1vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBHYW1lTW9kdWxlKSgpOyB9O1xyXG5HYW1lTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBHYW1lTW9kdWxlIH0pO1xyXG5HYW1lTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgR2FtZVJvdXRpbmdNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9