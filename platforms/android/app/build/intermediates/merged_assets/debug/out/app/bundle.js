(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./node_modules/@nativescript/unit-test-runner/app sync recursive .*\\.(js|css|xml)":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-root.xml": "./node_modules/@nativescript/unit-test-runner/app/app-root.xml",
	"./app.css": "./node_modules/@nativescript/unit-test-runner/app/app.css",
	"./app.js": "./node_modules/@nativescript/unit-test-runner/app/app.js",
	"./bundle-app-root.xml": "./node_modules/@nativescript/unit-test-runner/app/bundle-app-root.xml",
	"./bundle-app.js": "./node_modules/@nativescript/unit-test-runner/app/bundle-app.js",
	"./bundle-main-page.js": "./node_modules/@nativescript/unit-test-runner/app/bundle-main-page.js",
	"./bundle-main-page.xml": "./node_modules/@nativescript/unit-test-runner/app/bundle-main-page.xml",
	"./main-page.js": "./node_modules/@nativescript/unit-test-runner/app/main-page.js",
	"./main-page.xml": "./node_modules/@nativescript/unit-test-runner/app/main-page.xml",
	"./main-view-model.js": "./node_modules/@nativescript/unit-test-runner/app/main-view-model.js",
	"./main.js": "./node_modules/@nativescript/unit-test-runner/app/main.js",
	"./run-details.js": "./node_modules/@nativescript/unit-test-runner/app/run-details.js",
	"./run-details.xml": "./node_modules/@nativescript/unit-test-runner/app/run-details.xml",
	"./services/karma-files-service.js": "./node_modules/@nativescript/unit-test-runner/app/services/karma-files-service.js",
	"./services/karma-host-resolver.js": "./node_modules/@nativescript/unit-test-runner/app/services/karma-host-resolver.js",
	"./services/test-execution-service.js": "./node_modules/@nativescript/unit-test-runner/app/services/test-execution-service.js",
	"./services/webpack-test-runner.js": "./node_modules/@nativescript/unit-test-runner/app/services/webpack-test-runner.js",
	"./stop-process.android.js": "./node_modules/@nativescript/unit-test-runner/app/stop-process.android.js",
	"./stop-process.ios.js": "./node_modules/@nativescript/unit-test-runner/app/stop-process.ios.js",
	"./stop-process.js": "./node_modules/@nativescript/unit-test-runner/app/stop-process.android.js",
	"./test-run-page.js": "./node_modules/@nativescript/unit-test-runner/app/test-run-page.js",
	"./test-run-page.xml": "./node_modules/@nativescript/unit-test-runner/app/test-run-page.xml",
	"@nativescript/unit-test-runner/app/app-root.xml": "./node_modules/@nativescript/unit-test-runner/app/app-root.xml",
	"@nativescript/unit-test-runner/app/app.css": "./node_modules/@nativescript/unit-test-runner/app/app.css",
	"@nativescript/unit-test-runner/app/app.js": "./node_modules/@nativescript/unit-test-runner/app/app.js",
	"@nativescript/unit-test-runner/app/bundle-app-root.xml": "./node_modules/@nativescript/unit-test-runner/app/bundle-app-root.xml",
	"@nativescript/unit-test-runner/app/bundle-app.js": "./node_modules/@nativescript/unit-test-runner/app/bundle-app.js",
	"@nativescript/unit-test-runner/app/bundle-main-page.js": "./node_modules/@nativescript/unit-test-runner/app/bundle-main-page.js",
	"@nativescript/unit-test-runner/app/bundle-main-page.xml": "./node_modules/@nativescript/unit-test-runner/app/bundle-main-page.xml",
	"@nativescript/unit-test-runner/app/main-page.js": "./node_modules/@nativescript/unit-test-runner/app/main-page.js",
	"@nativescript/unit-test-runner/app/main-page.xml": "./node_modules/@nativescript/unit-test-runner/app/main-page.xml",
	"@nativescript/unit-test-runner/app/main-view-model.js": "./node_modules/@nativescript/unit-test-runner/app/main-view-model.js",
	"@nativescript/unit-test-runner/app/main.js": "./node_modules/@nativescript/unit-test-runner/app/main.js",
	"@nativescript/unit-test-runner/app/run-details.js": "./node_modules/@nativescript/unit-test-runner/app/run-details.js",
	"@nativescript/unit-test-runner/app/run-details.xml": "./node_modules/@nativescript/unit-test-runner/app/run-details.xml",
	"@nativescript/unit-test-runner/app/services/karma-files-service.js": "./node_modules/@nativescript/unit-test-runner/app/services/karma-files-service.js",
	"@nativescript/unit-test-runner/app/services/karma-host-resolver.js": "./node_modules/@nativescript/unit-test-runner/app/services/karma-host-resolver.js",
	"@nativescript/unit-test-runner/app/services/test-execution-service.js": "./node_modules/@nativescript/unit-test-runner/app/services/test-execution-service.js",
	"@nativescript/unit-test-runner/app/services/webpack-test-runner.js": "./node_modules/@nativescript/unit-test-runner/app/services/webpack-test-runner.js",
	"@nativescript/unit-test-runner/app/stop-process.android.js": "./node_modules/@nativescript/unit-test-runner/app/stop-process.android.js",
	"@nativescript/unit-test-runner/app/stop-process.ios.js": "./node_modules/@nativescript/unit-test-runner/app/stop-process.ios.js",
	"@nativescript/unit-test-runner/app/test-run-page.js": "./node_modules/@nativescript/unit-test-runner/app/test-run-page.js",
	"@nativescript/unit-test-runner/app/test-run-page.xml": "./node_modules/@nativescript/unit-test-runner/app/test-run-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/@nativescript/unit-test-runner/app sync recursive .*\\.(js|css|xml)";

/***/ }),

/***/ "./src/test.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_unit_test_runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/unit-test-runner/app/main.js");

(0,_nativescript_unit_test_runner__WEBPACK_IMPORTED_MODULE_0__.runTestApp)({
    runTests: () => {
        const tests = __webpack_require__("./src sync recursive \\.spec\\.ts$");
        tests.keys().map(tests);
    },
});


/***/ }),

/***/ "./src/tests/example.spec.ts":
/***/ (() => {

// A sample Jasmine test
describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});


/***/ }),

/***/ "./src sync recursive \\.spec\\.ts$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./tests/example.spec.ts": "./src/tests/example.spec.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.spec\\.ts$";

/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

"use strict";
module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./src/test.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEU0RDtBQUs1RCwwRUFBVSxDQUFDO0lBQ1YsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNkLE1BQU0sS0FBSyxHQUFHLHlEQUEwQyxDQUFDO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNELENBQUMsQ0FBQzs7Ozs7Ozs7QUNWSCx3QkFBd0I7QUFDeEIsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNsQixFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztBQ0xIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYS8uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwfHN5bmN8Ly4qLy4oanN8Y3NzfHhtbCkiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL3Rlc3QudHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL3Rlc3RzL2V4YW1wbGUuc3BlYy50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmN8c3luY3wvLnNwZWMvLnRzJCIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgY29tbW9uanMgXCJ+L3BhY2thZ2UuanNvblwiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9hcHAuanNcIixcblx0XCIuL2J1bmRsZS1hcHAtcm9vdC54bWxcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2J1bmRsZS1hcHAtcm9vdC54bWxcIixcblx0XCIuL2J1bmRsZS1hcHAuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2J1bmRsZS1hcHAuanNcIixcblx0XCIuL2J1bmRsZS1tYWluLXBhZ2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2J1bmRsZS1tYWluLXBhZ2UuanNcIixcblx0XCIuL2J1bmRsZS1tYWluLXBhZ2UueG1sXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi1wYWdlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLXBhZ2UuanNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvbWFpbi12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLmpzXCIsXG5cdFwiLi9ydW4tZGV0YWlscy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvcnVuLWRldGFpbHMuanNcIixcblx0XCIuL3J1bi1kZXRhaWxzLnhtbFwiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvcnVuLWRldGFpbHMueG1sXCIsXG5cdFwiLi9zZXJ2aWNlcy9rYXJtYS1maWxlcy1zZXJ2aWNlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9zZXJ2aWNlcy9rYXJtYS1maWxlcy1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9rYXJtYS1ob3N0LXJlc29sdmVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9zZXJ2aWNlcy9rYXJtYS1ob3N0LXJlc29sdmVyLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy90ZXN0LWV4ZWN1dGlvbi1zZXJ2aWNlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9zZXJ2aWNlcy90ZXN0LWV4ZWN1dGlvbi1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy93ZWJwYWNrLXRlc3QtcnVubmVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9zZXJ2aWNlcy93ZWJwYWNrLXRlc3QtcnVubmVyLmpzXCIsXG5cdFwiLi9zdG9wLXByb2Nlc3MuYW5kcm9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc3RvcC1wcm9jZXNzLmFuZHJvaWQuanNcIixcblx0XCIuL3N0b3AtcHJvY2Vzcy5pb3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL3N0b3AtcHJvY2Vzcy5pb3MuanNcIixcblx0XCIuL3N0b3AtcHJvY2Vzcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc3RvcC1wcm9jZXNzLmFuZHJvaWQuanNcIixcblx0XCIuL3Rlc3QtcnVuLXBhZ2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL3Rlc3QtcnVuLXBhZ2UuanNcIixcblx0XCIuL3Rlc3QtcnVuLXBhZ2UueG1sXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC90ZXN0LXJ1bi1wYWdlLnhtbFwiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLXJvb3QueG1sXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9hcHAtcm9vdC54bWxcIixcblx0XCJAbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5jc3NcIixcblx0XCJAbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtYXBwLXJvb3QueG1sXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtYXBwLXJvb3QueG1sXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtYXBwLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtYXBwLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtbWFpbi1wYWdlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtbWFpbi1wYWdlLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9idW5kbGUtbWFpbi1wYWdlLnhtbFwiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLW1haW4tcGFnZS54bWxcIixcblx0XCJAbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL21haW4tcGFnZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvbWFpbi1wYWdlLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLXBhZ2UueG1sXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLXZpZXctbW9kZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL21haW4tdmlldy1tb2RlbC5qc1wiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvbWFpbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvbWFpbi5qc1wiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvcnVuLWRldGFpbHMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL3J1bi1kZXRhaWxzLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9ydW4tZGV0YWlscy54bWxcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL3J1bi1kZXRhaWxzLnhtbFwiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMva2FybWEtZmlsZXMtc2VydmljZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMva2FybWEtZmlsZXMtc2VydmljZS5qc1wiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMva2FybWEtaG9zdC1yZXNvbHZlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMva2FybWEtaG9zdC1yZXNvbHZlci5qc1wiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMvdGVzdC1leGVjdXRpb24tc2VydmljZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMvdGVzdC1leGVjdXRpb24tc2VydmljZS5qc1wiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMvd2VicGFjay10ZXN0LXJ1bm5lci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc2VydmljZXMvd2VicGFjay10ZXN0LXJ1bm5lci5qc1wiLFxuXHRcIkBuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvc3RvcC1wcm9jZXNzLmFuZHJvaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXIvYXBwL3N0b3AtcHJvY2Vzcy5hbmRyb2lkLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9zdG9wLXByb2Nlc3MuaW9zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC9zdG9wLXByb2Nlc3MuaW9zLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC90ZXN0LXJ1bi1wYWdlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC90ZXN0LXJ1bi1wYWdlLmpzXCIsXG5cdFwiQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcC90ZXN0LXJ1bi1wYWdlLnhtbFwiOiBcIi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvdW5pdC10ZXN0LXJ1bm5lci9hcHAvdGVzdC1ydW4tcGFnZS54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC91bml0LXRlc3QtcnVubmVyL2FwcCBzeW5jIHJlY3Vyc2l2ZSAuKlxcXFwuKGpzfGNzc3x4bWwpXCI7IiwiaW1wb3J0IHsgcnVuVGVzdEFwcCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L3VuaXQtdGVzdC1ydW5uZXJcIjtcbi8vIGltcG9ydCBvdGhlciBwb2x5ZmlsbHMgaGVyZVxuXG5kZWNsYXJlIGxldCByZXF1aXJlOiBhbnk7XG5cbnJ1blRlc3RBcHAoe1xuXHRydW5UZXN0czogKCkgPT4ge1xuXHRcdGNvbnN0IHRlc3RzID0gcmVxdWlyZS5jb250ZXh0KFwiLi9cIiwgdHJ1ZSwgL1xcLnNwZWNcXC50cyQvKTtcblx0XHR0ZXN0cy5rZXlzKCkubWFwKHRlc3RzKTtcblx0fSxcbn0pO1xuIiwiLy8gQSBzYW1wbGUgSmFzbWluZSB0ZXN0XG5kZXNjcmliZShcIkEgc3VpdGVcIiwgZnVuY3Rpb24oKSB7XG4gIGl0KFwiY29udGFpbnMgc3BlYyB3aXRoIGFuIGV4cGVjdGF0aW9uXCIsIGZ1bmN0aW9uKCkge1xuICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xuICB9KTtcbn0pO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3RzL2V4YW1wbGUuc3BlYy50c1wiOiBcIi4vc3JjL3Rlc3RzL2V4YW1wbGUuc3BlYy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLnNwZWNcXFxcLnRzJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==