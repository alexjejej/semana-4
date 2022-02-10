"use strict";
exports.id = "src_app_usuarios_usuarios_module_ts";
exports.ids = ["src_app_usuarios_usuarios_module_ts"];
exports.modules = {

/***/ "./src/app/usuarios/usuarios-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosRoutingModule": () => (/* binding */ UsuariosRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/usuarios/usuarios.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _usuarios_component__WEBPACK_IMPORTED_MODULE_0__.UsuariosComponent }];
class UsuariosRoutingModule {
}
UsuariosRoutingModule.ɵfac = function UsuariosRoutingModule_Factory(t) { return new (t || UsuariosRoutingModule)(); };
UsuariosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsuariosRoutingModule });
UsuariosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/usuarios/usuarios.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosComponent": () => (/* binding */ UsuariosComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/color/index.android.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _domain_reviews_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/domain/reviews.service.ts");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");








function UsuariosComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "FlexboxLayout", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "Image", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.imageR);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", item_r1.nameR);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", item_r1.review);
} }
const sqlite = __webpack_require__("./node_modules/nativescript-sqlite/sqlite.js");
class UsuariosComponent {
    constructor(review, routerExtensions) {
        this.review = review;
        this.routerExtensions = routerExtensions;
        this.getDb((db) => {
            console.dir(db);
            db.each("select * from favs", (err, fila) => console.log("fila: ", fila), (err, totales) => console.log("Filas totales: ", totales));
        }, () => console.log("error en getDB"));
    }
    pageLoaded(args) {
        this.review.newreview();
        var page = args.object;
        this.name = page.getViewById("name");
        this.name.text = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__.getString('nombre');
        this.cargo = page.getViewById("cargo");
        this.cargo.text = "Cargo: " + _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__.getString('cargo');
        this.descripcion = page.getViewById("descripcion");
        this.descripcion.text = "Descripción: " + _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__.getString('descripcion');
        const img = page.getViewById("image");
        img.src = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__.getString('imagen');
    }
    ngOnInit() {
        // Init your component properties here.
    }
    like() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Te agrada esta persona' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color('white'))
            .setBackgroundColor('#8fce00')
            .show();
    }
    getDb(fnOk, fnError) {
        return new sqlite("favoritosDB", (err, db) => {
            if (err) {
                console.error("Error al abrir db!", err);
            }
            else {
                console.log("Está la db abierta: ", db.isOpen() ? "si" : "no");
                db.execSQL("CREATE TABLE IF NOT EXISTS favs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)")
                    .then((id) => {
                    console.log("CREATE TABLE OK");
                    fnOk(db);
                }, (error) => {
                    console.log("CREATE TABLE ERROR", error);
                    fnError(error);
                });
            }
        });
    }
    favoritos() {
        this.getDb((db) => {
            db.execSQL("insert into favs (texto) values (?)", [_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__.getString('nombre')], (err, id) => this.exito(id));
        }, () => console.log("error en getDB"));
    }
    exito(id) {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Guardado en favoritos, id:' + id })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color('white'))
            .setBackgroundColor('#8fce00')
            .show();
    }
    dislike() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Te desagrada esta persona' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.getRootView();
        sideDrawer.showDrawer();
    }
    onPull(args) {
        this.review.newreview();
        const pullRefresh = args.object;
        setTimeout(() => {
            pullRefresh.refreshing = false;
        }, 1000);
        console.log("recargado con exito");
    }
}
UsuariosComponent.ɵfac = function UsuariosComponent_Factory(t) { return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_domain_reviews_service__WEBPACK_IMPORTED_MODULE_0__.ReviewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.RouterExtensions)); };
UsuariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsuariosComponent, selectors: [["Usuarios"]], decls: 22, vars: 1, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "auto,*,auto"], ["text", "Usuario", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [3, "loaded"], [3, "refresh"], ["id", "image", "marginTop", "-10", "width", "50%", "height", "30%", 1, "thumb", "img-circle"], ["id", "name", "horizontalAlignment", "center", "marginTtextWrap", "true", "marginTop", "-20", "fontSize", "30", "text", "xx"], ["id", "cargo", "fontSize", "25", "text", "xx", "textWrap", "true"], ["id", "descripcion", "fontSize", "20"], ["flexDirection", "column"], ["text", "Rese\u00F1as", "textAlignment", "center", "marginTop", "10", "fontSize", "25", "background", "#FF5733", "color", "#ffffff"], ["text", "Recarga la p\u00E1gina para ver mas rese\u00F1as", "fontStyle", "italic", "textAlignment", "center", "marginTop", "10", "fontSize", "15"], ["marginTop", "50", 1, "list-group", 3, "items"], ["horizontalAlignment", "center", "text", "\u00BFConoces a la persona? Calificala"], ["src", "res://like", "marginTop", "50", "width", "30%", "height", "45%", "horizontalAlignment", "left", 3, "tap"], ["src", "res://dislike", "marginTop", "50", "width", "30%", "height", "30%", "horizontalAlignment", "right", 3, "tap"], ["src", "res://fav", "marginTop", "50", "width", "30%", "height", "30%", "horizontalAlignment", "center", 3, "tap"], ["width", "70", "height", "100", 3, "src"], ["textAlignment", "center", "fontSize", "18", 3, "text"], ["fontStyle", "italic", "textWrap", "true", "textAlignment", "center", "fontSize", "15", 3, "text"]], template: function UsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "Page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("loaded", function UsuariosComponent_Template_Page_loaded_5_listener($event) { return ctx.pageLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "PullToRefresh", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("refresh", function UsuariosComponent_Template_PullToRefresh_refresh_6_listener($event) { return ctx.onPull($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "Image", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "FlexboxLayout", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ListView", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, UsuariosComponent_ng_template_16_Template, 4, 3, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "Label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "WrapLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_image_tap_19_listener() { return ctx.like(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "image", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_image_tap_20_listener() { return ctx.dislike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_image_tap_21_listener() { return ctx.favoritos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.review.buscar());
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.PageDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_6__.ListViewComponent], encapsulation: 2 });


/***/ }),

/***/ "./src/app/usuarios/usuarios.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosModule": () => (/* binding */ UsuariosModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class UsuariosModule {
}
UsuariosModule.ɵfac = function UsuariosModule_Factory(t) { return new (t || UsuariosModule)(); };
UsuariosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsuariosModule });
UsuariosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuariosRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYTtBQUNyQixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxzRUFBc0Usb0JBQW9CO0FBQy9HLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxzRUFBc0UsdUJBQXVCO0FBQ2xILFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxzRUFBc0UseUJBQXlCO0FBQ3BILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixNQUFNO0FBQ04sUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLE9BQU8sZUFBZSxxRUFBcUIsRUFBRSw0RUFBNEIsRUFBRSxnRUFBZ0IsRUFBRSxvRUFBb0IscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUN6SnJFO0FBQ0M7QUFDOUI7QUFDN0I7QUFDUDtBQUNBLDJEQUEyRDtBQUMzRCxvQ0FBb0MsOERBQW1CLEdBQUcsc0JBQXNCO0FBQ2hGLG9DQUFvQyw4REFBbUIsR0FBRyxXQUFXLDJFQUF3QixFQUFFLDJFQUFxQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC91c3Vhcmlvcy91c3Vhcmlvcy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBVc3Vhcmlvc0NvbXBvbmVudCB9IGZyb20gJy4vdXN1YXJpb3MuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBVc3Vhcmlvc0NvbXBvbmVudCB9XTtcclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9zUm91dGluZ01vZHVsZSB7XHJcbn1cclxuVXN1YXJpb3NSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gVXN1YXJpb3NSb3V0aW5nTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFVzdWFyaW9zUm91dGluZ01vZHVsZSkoKTsgfTtcclxuVXN1YXJpb3NSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBVc3Vhcmlvc1JvdXRpbmdNb2R1bGUgfSk7XHJcblVzdWFyaW9zUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBDb2xvciB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XHJcbmltcG9ydCB7IFJldmlld3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2RvbWFpbi9yZXZpZXdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFRvYXN0RHVyYXRpb24sIFRvYXN0UG9zaXRpb24sIFRvYXN0eSB9IGZyb20gXCJAdHJpbml3aXovbmF0aXZlc2NyaXB0LXRvYXN0eVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiLi4vZG9tYWluL3Jldmlld3Muc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmZ1bmN0aW9uIFVzdWFyaW9zQ29tcG9uZW50X25nX3RlbXBsYXRlXzE2X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkZsZXhib3hMYXlvdXRcIiwgMTEpO1xyXG4gICAgaTAuybXJtWVsZW1lbnQoMSwgXCJJbWFnZVwiLCAxOSk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudCgyLCBcImxhYmVsXCIsIDIwKTtcclxuICAgIGkwLsm1ybVlbGVtZW50KDMsIFwibGFiZWxcIiwgMjEpO1xyXG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxufSBpZiAocmYgJiAyKSB7XHJcbiAgICBjb25zdCBpdGVtX3IxID0gY3R4Lml0ZW07XHJcbiAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcclxuICAgIGkwLsm1ybVwcm9wZXJ0eShcInNyY1wiLCBpdGVtX3IxLmltYWdlUik7XHJcbiAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcclxuICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgaXRlbV9yMS5uYW1lUik7XHJcbiAgICBpMC7Jtcm1YWR2YW5jZSgxKTtcclxuICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgaXRlbV9yMS5yZXZpZXcpO1xyXG59IH1cclxuY29uc3Qgc3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XHJcbmV4cG9ydCBjbGFzcyBVc3Vhcmlvc0NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZXZpZXcsIHJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLnJldmlldyA9IHJldmlldztcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMgPSByb3V0ZXJFeHRlbnNpb25zO1xyXG4gICAgICAgIHRoaXMuZ2V0RGIoKGRiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGRiKTtcclxuICAgICAgICAgICAgZGIuZWFjaChcInNlbGVjdCAqIGZyb20gZmF2c1wiLCAoZXJyLCBmaWxhKSA9PiBjb25zb2xlLmxvZyhcImZpbGE6IFwiLCBmaWxhKSwgKGVyciwgdG90YWxlcykgPT4gY29uc29sZS5sb2coXCJGaWxhcyB0b3RhbGVzOiBcIiwgdG90YWxlcykpO1xyXG4gICAgICAgIH0sICgpID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgZW4gZ2V0REJcIikpO1xyXG4gICAgfVxyXG4gICAgcGFnZUxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZXZpZXcubmV3cmV2aWV3KCk7XHJcbiAgICAgICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwYWdlLmdldFZpZXdCeUlkKFwibmFtZVwiKTtcclxuICAgICAgICB0aGlzLm5hbWUudGV4dCA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnbm9tYnJlJyk7XHJcbiAgICAgICAgdGhpcy5jYXJnbyA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJjYXJnb1wiKTtcclxuICAgICAgICB0aGlzLmNhcmdvLnRleHQgPSBcIkNhcmdvOiBcIiArIGFwcFNldHRpbmdzLmdldFN0cmluZygnY2FyZ28nKTtcclxuICAgICAgICB0aGlzLmRlc2NyaXBjaW9uID0gcGFnZS5nZXRWaWV3QnlJZChcImRlc2NyaXBjaW9uXCIpO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcGNpb24udGV4dCA9IFwiRGVzY3JpcGNpw7NuOiBcIiArIGFwcFNldHRpbmdzLmdldFN0cmluZygnZGVzY3JpcGNpb24nKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBwYWdlLmdldFZpZXdCeUlkKFwiaW1hZ2VcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnaW1hZ2VuJyk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuICAgIGxpa2UoKSB7XHJcbiAgICAgICAgbmV3IFRvYXN0eSh7IHRleHQ6ICdUZSBhZ3JhZGEgZXN0YSBwZXJzb25hJyB9KVxyXG4gICAgICAgICAgICAuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKVxyXG4gICAgICAgICAgICAuc2V0VG9hc3RQb3NpdGlvbihUb2FzdFBvc2l0aW9uLkJPVFRPTSlcclxuICAgICAgICAgICAgLnNldFRleHRDb2xvcihuZXcgQ29sb3IoJ3doaXRlJykpXHJcbiAgICAgICAgICAgIC5zZXRCYWNrZ3JvdW5kQ29sb3IoJyM4ZmNlMDAnKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGIoZm5PaywgZm5FcnJvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgc3FsaXRlKFwiZmF2b3JpdG9zREJcIiwgKGVyciwgZGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGFicmlyIGRiIVwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFc3TDoSBsYSBkYiBhYmllcnRhOiBcIiwgZGIuaXNPcGVuKCkgPyBcInNpXCIgOiBcIm5vXCIpO1xyXG4gICAgICAgICAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGZhdnMgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgdGV4dG8gVEVYVClcIilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBPS1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmbk9rKGRiKTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBmbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmYXZvcml0b3MoKSB7XHJcbiAgICAgICAgdGhpcy5nZXREYigoZGIpID0+IHtcclxuICAgICAgICAgICAgZGIuZXhlY1NRTChcImluc2VydCBpbnRvIGZhdnMgKHRleHRvKSB2YWx1ZXMgKD8pXCIsIFthcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ25vbWJyZScpXSwgKGVyciwgaWQpID0+IHRoaXMuZXhpdG8oaWQpKTtcclxuICAgICAgICB9LCAoKSA9PiBjb25zb2xlLmxvZyhcImVycm9yIGVuIGdldERCXCIpKTtcclxuICAgIH1cclxuICAgIGV4aXRvKGlkKSB7XHJcbiAgICAgICAgbmV3IFRvYXN0eSh7IHRleHQ6ICdHdWFyZGFkbyBlbiBmYXZvcml0b3MsIGlkOicgKyBpZCB9KVxyXG4gICAgICAgICAgICAuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKVxyXG4gICAgICAgICAgICAuc2V0VG9hc3RQb3NpdGlvbihUb2FzdFBvc2l0aW9uLkJPVFRPTSlcclxuICAgICAgICAgICAgLnNldFRleHRDb2xvcihuZXcgQ29sb3IoJ3doaXRlJykpXHJcbiAgICAgICAgICAgIC5zZXRCYWNrZ3JvdW5kQ29sb3IoJyM4ZmNlMDAnKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgZGlzbGlrZSgpIHtcclxuICAgICAgICBuZXcgVG9hc3R5KHsgdGV4dDogJ1RlIGRlc2FncmFkYSBlc3RhIHBlcnNvbmEnIH0pXHJcbiAgICAgICAgICAgIC5zZXRUb2FzdER1cmF0aW9uKFRvYXN0RHVyYXRpb24uU0hPUlQpXHJcbiAgICAgICAgICAgIC5zZXRUb2FzdFBvc2l0aW9uKFRvYXN0UG9zaXRpb24uQk9UVE9NKVxyXG4gICAgICAgICAgICAuc2V0VGV4dENvbG9yKG5ldyBDb2xvcignd2hpdGUnKSlcclxuICAgICAgICAgICAgLnNldEJhY2tncm91bmRDb2xvcignI2ZmOTk5OScpXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gQXBwbGljYXRpb24uZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuICAgIG9uUHVsbChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZXZpZXcubmV3cmV2aWV3KCk7XHJcbiAgICAgICAgY29uc3QgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjYXJnYWRvIGNvbiBleGl0b1wiKTtcclxuICAgIH1cclxufVxyXG5Vc3Vhcmlvc0NvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIFVzdWFyaW9zQ29tcG9uZW50X0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFVzdWFyaW9zQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLlJldmlld3NTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5Sb3V0ZXJFeHRlbnNpb25zKSk7IH07XHJcblVzdWFyaW9zQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogVXN1YXJpb3NDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIlVzdWFyaW9zXCJdXSwgZGVjbHM6IDIyLCB2YXJzOiAxLCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiYXV0bywqLGF1dG9cIl0sIFtcInRleHRcIiwgXCJVc3VhcmlvXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgWzMsIFwibG9hZGVkXCJdLCBbMywgXCJyZWZyZXNoXCJdLCBbXCJpZFwiLCBcImltYWdlXCIsIFwibWFyZ2luVG9wXCIsIFwiLTEwXCIsIFwid2lkdGhcIiwgXCI1MCVcIiwgXCJoZWlnaHRcIiwgXCIzMCVcIiwgMSwgXCJ0aHVtYlwiLCBcImltZy1jaXJjbGVcIl0sIFtcImlkXCIsIFwibmFtZVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJtYXJnaW5UdGV4dFdyYXBcIiwgXCJ0cnVlXCIsIFwibWFyZ2luVG9wXCIsIFwiLTIwXCIsIFwiZm9udFNpemVcIiwgXCIzMFwiLCBcInRleHRcIiwgXCJ4eFwiXSwgW1wiaWRcIiwgXCJjYXJnb1wiLCBcImZvbnRTaXplXCIsIFwiMjVcIiwgXCJ0ZXh0XCIsIFwieHhcIiwgXCJ0ZXh0V3JhcFwiLCBcInRydWVcIl0sIFtcImlkXCIsIFwiZGVzY3JpcGNpb25cIiwgXCJmb250U2l6ZVwiLCBcIjIwXCJdLCBbXCJmbGV4RGlyZWN0aW9uXCIsIFwiY29sdW1uXCJdLCBbXCJ0ZXh0XCIsIFwiUmVzZVxcdTAwRjFhc1wiLCBcInRleHRBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJtYXJnaW5Ub3BcIiwgXCIxMFwiLCBcImZvbnRTaXplXCIsIFwiMjVcIiwgXCJiYWNrZ3JvdW5kXCIsIFwiI0ZGNTczM1wiLCBcImNvbG9yXCIsIFwiI2ZmZmZmZlwiXSwgW1widGV4dFwiLCBcIlJlY2FyZ2EgbGEgcFxcdTAwRTFnaW5hIHBhcmEgdmVyIG1hcyByZXNlXFx1MDBGMWFzXCIsIFwiZm9udFN0eWxlXCIsIFwiaXRhbGljXCIsIFwidGV4dEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcIm1hcmdpblRvcFwiLCBcIjEwXCIsIFwiZm9udFNpemVcIiwgXCIxNVwiXSwgW1wibWFyZ2luVG9wXCIsIFwiNTBcIiwgMSwgXCJsaXN0LWdyb3VwXCIsIDMsIFwiaXRlbXNcIl0sIFtcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJ0ZXh0XCIsIFwiXFx1MDBCRkNvbm9jZXMgYSBsYSBwZXJzb25hPyBDYWxpZmljYWxhXCJdLCBbXCJzcmNcIiwgXCJyZXM6Ly9saWtlXCIsIFwibWFyZ2luVG9wXCIsIFwiNTBcIiwgXCJ3aWR0aFwiLCBcIjMwJVwiLCBcImhlaWdodFwiLCBcIjQ1JVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCJdLCBbXCJzcmNcIiwgXCJyZXM6Ly9kaXNsaWtlXCIsIFwibWFyZ2luVG9wXCIsIFwiNTBcIiwgXCJ3aWR0aFwiLCBcIjMwJVwiLCBcImhlaWdodFwiLCBcIjMwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJyaWdodFwiLCAzLCBcInRhcFwiXSwgW1wic3JjXCIsIFwicmVzOi8vZmF2XCIsIFwibWFyZ2luVG9wXCIsIFwiNTBcIiwgXCJ3aWR0aFwiLCBcIjMwJVwiLCBcImhlaWdodFwiLCBcIjMwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgMywgXCJ0YXBcIl0sIFtcIndpZHRoXCIsIFwiNzBcIiwgXCJoZWlnaHRcIiwgXCIxMDBcIiwgMywgXCJzcmNcIl0sIFtcInRleHRBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJmb250U2l6ZVwiLCBcIjE4XCIsIDMsIFwidGV4dFwiXSwgW1wiZm9udFN0eWxlXCIsIFwiaXRhbGljXCIsIFwidGV4dFdyYXBcIiwgXCJ0cnVlXCIsIFwidGV4dEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcImZvbnRTaXplXCIsIFwiMTVcIiwgMywgXCJ0ZXh0XCJdXSwgdGVtcGxhdGU6IGZ1bmN0aW9uIFVzdWFyaW9zQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJBY3Rpb25CYXJcIiwgMCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMSwgXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIDEpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMiwgXCJHcmlkTGF5b3V0XCIsIDIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDMsIFwiTGFiZWxcIiwgMyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg0LCBcIkxhYmVsXCIsIDQpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBVc3Vhcmlvc0NvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfNF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkRyYXdlckJ1dHRvblRhcCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwiUGFnZVwiLCA1KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJsb2FkZWRcIiwgZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfVGVtcGxhdGVfUGFnZV9sb2FkZWRfNV9saXN0ZW5lcigkZXZlbnQpIHsgcmV0dXJuIGN0eC5wYWdlTG9hZGVkKCRldmVudCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNiwgXCJQdWxsVG9SZWZyZXNoXCIsIDYpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInJlZnJlc2hcIiwgZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfVGVtcGxhdGVfUHVsbFRvUmVmcmVzaF9yZWZyZXNoXzZfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHgub25QdWxsKCRldmVudCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNywgXCJTdGFja0xheW91dFwiKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg4LCBcIkltYWdlXCIsIDcpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDksIFwiTGFiZWxcIiwgOCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTAsIFwiTGFiZWxcIiwgOSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTEsIFwibGFiZWxcIiwgMTApO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTIsIFwiRmxleGJveExheW91dFwiLCAxMSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTMsIFwibGFiZWxcIiwgMTIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDE0LCBcImxhYmVsXCIsIDEzKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTUsIFwiTGlzdFZpZXdcIiwgMTQpO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgxNiwgVXN1YXJpb3NDb21wb25lbnRfbmdfdGVtcGxhdGVfMTZfVGVtcGxhdGUsIDQsIDMsIFwibmctdGVtcGxhdGVcIik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxNywgXCJMYWJlbFwiLCAxNSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxOCwgXCJXcmFwTGF5b3V0XCIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTksIFwiaW1hZ2VcIiwgMTYpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBVc3Vhcmlvc0NvbXBvbmVudF9UZW1wbGF0ZV9pbWFnZV90YXBfMTlfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgubGlrZSgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMjAsIFwiaW1hZ2VcIiwgMTcpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBVc3Vhcmlvc0NvbXBvbmVudF9UZW1wbGF0ZV9pbWFnZV90YXBfMjBfbGlzdGVuZXIoKSB7IHJldHVybiBjdHguZGlzbGlrZSgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMjEsIFwiaW1hZ2VcIiwgMTgpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBVc3Vhcmlvc0NvbXBvbmVudF9UZW1wbGF0ZV9pbWFnZV90YXBfMjFfbGlzdGVuZXIoKSB7IHJldHVybiBjdHguZmF2b3JpdG9zKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gaWYgKHJmICYgMikge1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDE1KTtcclxuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJpdGVtc1wiLCBjdHgucmV2aWV3LmJ1c2NhcigpKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kyLkFjdGlvbkJhckNvbXBvbmVudCwgaTIuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZSwgaTIuUGFnZURpcmVjdGl2ZSwgaTIuTGlzdFZpZXdDb21wb25lbnRdLCBlbmNhcHN1bGF0aW9uOiAyIH0pO1xyXG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBVc3Vhcmlvc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3VzdWFyaW9zLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9zTW9kdWxlIHtcclxufVxyXG5Vc3Vhcmlvc01vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIFVzdWFyaW9zTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IFVzdWFyaW9zTW9kdWxlKSgpOyB9O1xyXG5Vc3Vhcmlvc01vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogVXN1YXJpb3NNb2R1bGUgfSk7XHJcblVzdWFyaW9zTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgVXN1YXJpb3NSb3V0aW5nTW9kdWxlXV0gfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==