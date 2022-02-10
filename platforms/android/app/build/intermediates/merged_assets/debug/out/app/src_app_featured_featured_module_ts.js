"use strict";
exports.id = "src_app_featured_featured_module_ts";
exports.ids = ["src_app_featured_featured_module_ts"];
exports.modules = {

/***/ "./src/app/featured/featured-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedRoutingModule": () => (/* binding */ FeaturedRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _featured_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/featured/featured.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _featured_component__WEBPACK_IMPORTED_MODULE_0__.FeaturedComponent }];
class FeaturedRoutingModule {
}
FeaturedRoutingModule.ɵfac = function FeaturedRoutingModule_Factory(t) { return new (t || FeaturedRoutingModule)(); };
FeaturedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturedRoutingModule });
FeaturedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedComponent": () => (/* binding */ FeaturedComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _domain_listas_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/domain/listas-state.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@ngrx/store/fesm2015/ngrx-store.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");







const sqlite = __webpack_require__("./node_modules/nativescript-sqlite/sqlite.js");
var datos;
class FeaturedComponent {
    constructor(store) {
        this.store = store;
        this.people = [];
        this.getDb((db) => {
            db.each("select * from favs", (err, fila) => this.people.push(fila), console.log(this.people), (err, totales) => console.log("Filas totales: ", totales));
        }, () => console.log("error en getDB"));
    }
    getpeople() {
        return this.people;
    }
    mostrarbd() {
        console.log("Los datos son:");
        console.log(this.people);
    }
    /* this.getDb((db) => {
       db.all("select * from favs").then(rows => {
         this.people = [];
         for(var row in rows) {
             this.people.push({
                 "id": rows[row][1],
                 "name": rows[row][2]
             });
       }
   
     }, error => {
       console.log("SELECT ERROR", error);
   }));*/
    getDb(fnOk, fnError) {
        return new sqlite("favoritosDB", (err, db) => {
            if (err) {
                console.error("Error al abrir db!", err);
            }
            else {
                console.log("Está la db abierta: ", db.isOpen() ? "si" : "no");
                db.execSQL("CREATE TABLE IF NOT EXISTS favs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)")
                    .then((id) => {
                    this.database = db;
                    fnOk(db);
                }, (error) => {
                    console.log("CREATE TABLE ERROR", error);
                    fnError(error);
                });
            }
        });
    }
    fetch() {
        this.database.all("SELECT * FROM favs").then(rows => {
            this.people = [];
            for (var row in rows) {
                this.people.push({
                    "id": rows[row][1],
                    "name": rows[row][2]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }
    ngOnInit() {
        this.store.select(state => state.listas.sugerida)
            .subscribe(data => {
            const f = data;
            if (f != null)
                new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.Toasty({ text: 'Sugerimos leer: ' + f.titulo }).setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_0__.ToastDuration.SHORT).show();
        });
    }
    onItemTap(args) {
        this.store.dispatch(new _domain_listas_state_service__WEBPACK_IMPORTED_MODULE_1__.NuevaListaAction(new _domain_listas_state_service__WEBPACK_IMPORTED_MODULE_1__.Lista(args.view.bindingContext)));
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
FeaturedComponent.ɵfac = function FeaturedComponent_Factory(t) { return new (t || FeaturedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
FeaturedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FeaturedComponent, selectors: [["Featured"]], decls: 15, vars: 2, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Favoritos", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], ["xmlns", "http://schemas.nativescript.org/tns.xsd", "loaded", "pageLoaded", "navigatingTo", "onNavigatingTo"], [1, "page__content"], ["flexDirection", "column"], ["text", "A continuaci\u00F3n se muestran tus favoritos", "fontStyle", "italic", "textWrap", "true", "textAlignment", "center", "fontSize", "20"], ["title", "SQL App"], ["text", "Refresh", "ios.position", "left", 3, "tap"], ["marginTop", "50", 1, "list-group", 3, "items", "itemTap"], [3, "text"], ["text", "Cargar de nuevo", 3, "tap"]], template: function FeaturedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function FeaturedComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "Page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "GridLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "FlexboxLayout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ActionBar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ActionItem", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function FeaturedComponent_Template_ActionItem_tap_10_listener() { return ctx.fetch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ListView", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemTap", function FeaturedComponent_Template_ListView_itemTap_12_listener($event) { return ctx.onItemTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "Label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "Button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function FeaturedComponent_Template_Button_tap_14_listener() { return ctx.mostrarbd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.getpeople());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("text", ctx.getpeople());
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.PageDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.ActionItemDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.ListViewComponent], encapsulation: 2 });
class People {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class People2 {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


/***/ }),

/***/ "./src/app/featured/featured.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedModule": () => (/* binding */ FeaturedModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _featured_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/featured/featured-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class FeaturedModule {
}
FeaturedModule.ɵfac = function FeaturedModule_Factory(t) { return new (t || FeaturedModule)(); };
FeaturedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturedModule });
FeaturedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _featured_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeaturedRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9mZWF0dXJlZF9mZWF0dXJlZF9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ1I7QUFDckI7QUFDUTtBQUM1QyxrQkFBa0IscUJBQXFCLGtFQUFpQixFQUFFO0FBQ25EO0FBQ1A7QUFDQSx5RUFBeUU7QUFDekUsMkNBQTJDLDhEQUFtQixHQUFHLDZCQUE2QjtBQUM5RiwyQ0FBMkMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGxHO0FBQ2I7QUFDa0M7QUFDRztBQUNyQztBQUNGO0FBQ1U7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLDhDQUFxQjtBQUM1QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUksR0FBRztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBTSxHQUFHLHFDQUFxQyxtQkFBbUIsOEVBQW1CO0FBQ3hHLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0NBQWdDLDBFQUFnQixLQUFLLCtEQUFLO0FBQzFEO0FBQ0E7QUFDQSwyQkFBMkIsdUVBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxvQ0FBb0MsK0RBQW9CLENBQUMsOENBQVE7QUFDbEksdUNBQXVDLCtEQUFvQixHQUFHLHd5QkFBd3lCO0FBQ3QyQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxxRUFBcUUsaUNBQWlDO0FBQzNILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLDJFQUEyRSxxQkFBcUI7QUFDckgsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsd0RBQWEsdUZBQXVGLCtCQUErQjtBQUMzSSxRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSx1RUFBdUUseUJBQXlCO0FBQ3JILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsTUFBTTtBQUNOLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsbUVBQXdCO0FBQ2hDLE9BQU8sZUFBZSxxRUFBcUIsRUFBRSw0RUFBNEIsRUFBRSxnRUFBZ0IsRUFBRSxzRUFBc0IsRUFBRSxvRUFBb0IscUJBQXFCO0FBQzlKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BJaUU7QUFDQztBQUM5QjtBQUM3QjtBQUNQO0FBQ0EsMkRBQTJEO0FBQzNELG9DQUFvQyw4REFBbUIsR0FBRyxzQkFBc0I7QUFDaEYsb0NBQW9DLDhEQUFtQixHQUFHLFdBQVcsMkVBQXdCLEVBQUUsMkVBQXFCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2ZlYXR1cmVkL2ZlYXR1cmVkLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEZlYXR1cmVkQ29tcG9uZW50IH1dO1xyXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRSb3V0aW5nTW9kdWxlIHtcclxufVxyXG5GZWF0dXJlZFJvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBGZWF0dXJlZFJvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgRmVhdHVyZWRSb3V0aW5nTW9kdWxlKSgpOyB9O1xyXG5GZWF0dXJlZFJvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEZlYXR1cmVkUm91dGluZ01vZHVsZSB9KTtcclxuRmVhdHVyZWRSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSB9KTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgVG9hc3REdXJhdGlvbiwgVG9hc3R5IH0gZnJvbSAnQHRyaW5pd2l6L25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBMaXN0YSwgTnVldmFMaXN0YUFjdGlvbiB9IGZyb20gJy4uL2RvbWFpbi9saXN0YXMtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xyXG52YXIgZGF0b3M7XHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xyXG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcclxuICAgICAgICB0aGlzLnBlb3BsZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0RGIoKGRiKSA9PiB7XHJcbiAgICAgICAgICAgIGRiLmVhY2goXCJzZWxlY3QgKiBmcm9tIGZhdnNcIiwgKGVyciwgZmlsYSkgPT4gdGhpcy5wZW9wbGUucHVzaChmaWxhKSwgY29uc29sZS5sb2codGhpcy5wZW9wbGUpLCAoZXJyLCB0b3RhbGVzKSA9PiBjb25zb2xlLmxvZyhcIkZpbGFzIHRvdGFsZXM6IFwiLCB0b3RhbGVzKSk7XHJcbiAgICAgICAgfSwgKCkgPT4gY29uc29sZS5sb2coXCJlcnJvciBlbiBnZXREQlwiKSk7XHJcbiAgICB9XHJcbiAgICBnZXRwZW9wbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGVvcGxlO1xyXG4gICAgfVxyXG4gICAgbW9zdHJhcmJkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9zIGRhdG9zIHNvbjpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZW9wbGUpO1xyXG4gICAgfVxyXG4gICAgLyogdGhpcy5nZXREYigoZGIpID0+IHtcclxuICAgICAgIGRiLmFsbChcInNlbGVjdCAqIGZyb20gZmF2c1wiKS50aGVuKHJvd3MgPT4ge1xyXG4gICAgICAgICB0aGlzLnBlb3BsZSA9IFtdO1xyXG4gICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKSB7XHJcbiAgICAgICAgICAgICB0aGlzLnBlb3BsZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVsxXSxcclxuICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcm93c1tyb3ddWzJdXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgIH1cclxuICAgXHJcbiAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICB9KSk7Ki9cclxuICAgIGdldERiKGZuT2ssIGZuRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHNxbGl0ZShcImZhdm9yaXRvc0RCXCIsIChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBhYnJpciBkYiFcIiwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXN0w6EgbGEgZGIgYWJpZXJ0YTogXCIsIGRiLmlzT3BlbigpID8gXCJzaVwiIDogXCJub1wiKTtcclxuICAgICAgICAgICAgICAgIGRiLmV4ZWNTUUwoXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBmYXZzIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIHRleHRvIFRFWFQpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZuT2soZGIpO1xyXG4gICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZuRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZldGNoKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUICogRlJPTSBmYXZzXCIpLnRoZW4ocm93cyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyBpbiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVsxXSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcm93c1tyb3ddWzJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubGlzdGFzLnN1Z2VyaWRhKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gZGF0YTtcclxuICAgICAgICAgICAgaWYgKGYgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIG5ldyBUb2FzdHkoeyB0ZXh0OiAnU3VnZXJpbW9zIGxlZXI6ICcgKyBmLnRpdHVsbyB9KS5zZXRUb2FzdER1cmF0aW9uKFRvYXN0RHVyYXRpb24uU0hPUlQpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTnVldmFMaXN0YUFjdGlvbihuZXcgTGlzdGEoYXJncy52aWV3LmJpbmRpbmdDb250ZXh0KSkpO1xyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuRmVhdHVyZWRDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBGZWF0dXJlZENvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBGZWF0dXJlZENvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMS5TdG9yZSkpOyB9O1xyXG5GZWF0dXJlZENvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IEZlYXR1cmVkQ29tcG9uZW50LCBzZWxlY3RvcnM6IFtbXCJGZWF0dXJlZFwiXV0sIGRlY2xzOiAxNSwgdmFyczogMiwgY29uc3RzOiBbWzEsIFwiYWN0aW9uLWJhclwiXSwgW1widmlzaWJpbGl0eVwiLCBcImhpZGRlblwiXSwgW1wiY29sdW1uc1wiLCBcIjUwLCAqXCJdLCBbXCJ0ZXh0XCIsIFwiRmF2b3JpdG9zXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgW1wieG1sbnNcIiwgXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcIiwgXCJsb2FkZWRcIiwgXCJwYWdlTG9hZGVkXCIsIFwibmF2aWdhdGluZ1RvXCIsIFwib25OYXZpZ2F0aW5nVG9cIl0sIFsxLCBcInBhZ2VfX2NvbnRlbnRcIl0sIFtcImZsZXhEaXJlY3Rpb25cIiwgXCJjb2x1bW5cIl0sIFtcInRleHRcIiwgXCJBIGNvbnRpbnVhY2lcXHUwMEYzbiBzZSBtdWVzdHJhbiB0dXMgZmF2b3JpdG9zXCIsIFwiZm9udFN0eWxlXCIsIFwiaXRhbGljXCIsIFwidGV4dFdyYXBcIiwgXCJ0cnVlXCIsIFwidGV4dEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcImZvbnRTaXplXCIsIFwiMjBcIl0sIFtcInRpdGxlXCIsIFwiU1FMIEFwcFwiXSwgW1widGV4dFwiLCBcIlJlZnJlc2hcIiwgXCJpb3MucG9zaXRpb25cIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCAxLCBcImxpc3QtZ3JvdXBcIiwgMywgXCJpdGVtc1wiLCBcIml0ZW1UYXBcIl0sIFszLCBcInRleHRcIl0sIFtcInRleHRcIiwgXCJDYXJnYXIgZGUgbnVldm9cIiwgMywgXCJ0YXBcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gRmVhdHVyZWRDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkFjdGlvbkJhclwiLCAwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIk5hdmlnYXRpb25CdXR0b25cIiwgMSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkdyaWRMYXlvdXRcIiwgMik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMywgXCJMYWJlbFwiLCAzKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDQsIFwiTGFiZWxcIiwgNCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEZlYXR1cmVkQ29tcG9uZW50X1RlbXBsYXRlX0xhYmVsX3RhcF80X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uRHJhd2VyQnV0dG9uVGFwKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNSwgXCJQYWdlXCIsIDUpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNiwgXCJHcmlkTGF5b3V0XCIsIDYpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNywgXCJGbGV4Ym94TGF5b3V0XCIsIDcpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDgsIFwibGFiZWxcIiwgOCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDksIFwiQWN0aW9uQmFyXCIsIDkpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTAsIFwiQWN0aW9uSXRlbVwiLCAxMCk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIEZlYXR1cmVkQ29tcG9uZW50X1RlbXBsYXRlX0FjdGlvbkl0ZW1fdGFwXzEwX2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4LmZldGNoKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDExLCBcIlN0YWNrTGF5b3V0XCIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTIsIFwiTGlzdFZpZXdcIiwgMTEpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIml0ZW1UYXBcIiwgZnVuY3Rpb24gRmVhdHVyZWRDb21wb25lbnRfVGVtcGxhdGVfTGlzdFZpZXdfaXRlbVRhcF8xMl9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5vbkl0ZW1UYXAoJGV2ZW50KTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTMsIFwiTGFiZWxcIiwgMTIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxNCwgXCJCdXR0b25cIiwgMTMpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBGZWF0dXJlZENvbXBvbmVudF9UZW1wbGF0ZV9CdXR0b25fdGFwXzE0X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm1vc3RyYXJiZCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgfSBpZiAocmYgJiAyKSB7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMTIpO1xyXG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIml0ZW1zXCIsIGN0eC5nZXRwZW9wbGUoKSk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5SW50ZXJwb2xhdGUoXCJ0ZXh0XCIsIGN0eC5nZXRwZW9wbGUoKSk7XHJcbiAgICB9IH0sIGRpcmVjdGl2ZXM6IFtpMi5BY3Rpb25CYXJDb21wb25lbnQsIGkyLk5hdmlnYXRpb25CdXR0b25EaXJlY3RpdmUsIGkyLlBhZ2VEaXJlY3RpdmUsIGkyLkFjdGlvbkl0ZW1EaXJlY3RpdmUsIGkyLkxpc3RWaWV3Q29tcG9uZW50XSwgZW5jYXBzdWxhdGlvbjogMiB9KTtcclxuY2xhc3MgUGVvcGxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUGVvcGxlMiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub21icmUpIHtcclxuICAgICAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBGZWF0dXJlZFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2ZlYXR1cmVkLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkTW9kdWxlIHtcclxufVxyXG5GZWF0dXJlZE1vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIEZlYXR1cmVkTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEZlYXR1cmVkTW9kdWxlKSgpOyB9O1xyXG5GZWF0dXJlZE1vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogRmVhdHVyZWRNb2R1bGUgfSk7XHJcbkZlYXR1cmVkTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgRmVhdHVyZWRSb3V0aW5nTW9kdWxlXV0gfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==