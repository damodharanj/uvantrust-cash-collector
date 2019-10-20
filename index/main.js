(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accept-delivery/accept-delivery.component.css":
/*!***************************************************************!*\
  !*** ./src/app/accept-delivery/accept-delivery.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXB0LWRlbGl2ZXJ5L2FjY2VwdC1kZWxpdmVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWNjZXB0LWRlbGl2ZXJ5L2FjY2VwdC1kZWxpdmVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/accept-delivery/accept-delivery.component.html":
/*!****************************************************************!*\
  !*** ./src/app/accept-delivery/accept-delivery.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!hide; else exp\">\n    <h1>Delivery will be attempted by {{dm}}</h1>\n    <p>Please show this OTP {{otp}} after getting the delivery</p>\n    Please accpet within {{seconds}} seconds\n    <mat-spinner></mat-spinner>\n</div>\n<ng-template #exp>\n  <h1>No OTP at the moment</h1>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/accept-delivery/accept-delivery.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/accept-delivery/accept-delivery.component.ts ***!
  \**************************************************************/
/*! exports provided: AcceptDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptDeliveryComponent", function() { return AcceptDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _erservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../erservice.service */ "./src/app/erservice.service.ts");



var AcceptDeliveryComponent = /** @class */ (function () {
    function AcceptDeliveryComponent(er) {
        this.er = er;
        this.hide = true;
    }
    AcceptDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsub1 = this.er.otp.subscribe(function (x) {
            if (x === null) {
                _this.hide = true;
            }
            else {
                _this.otp = x;
                _this.hide = false;
                _this.unsub2 = _this.er.timer.subscribe(function (t) {
                    if (t == 0) {
                        alert('OTP expired');
                        _this.hide = true;
                        return;
                    }
                    _this.seconds = t;
                });
            }
        });
    };
    AcceptDeliveryComponent.prototype.ngOnDestroy = function () {
        if (this.unsub1) {
            this.unsub1.unsubscribe();
        }
        if (this.unsub2) {
            this.unsub2.unsubscribe();
        }
    };
    AcceptDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accept-delivery',
            template: __webpack_require__(/*! ./accept-delivery.component.html */ "./src/app/accept-delivery/accept-delivery.component.html"),
            styles: [__webpack_require__(/*! ./accept-delivery.component.css */ "./src/app/accept-delivery/accept-delivery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_erservice_service__WEBPACK_IMPORTED_MODULE_2__["ErserviceService"]])
    ], AcceptDeliveryComponent);
    return AcceptDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'y';
        this.resp = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.fetch('cat');
    };
    AppComponent.prototype.fetch = function (url, param) {
        var _this = this;
        this.resp = fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify(param)
        }).then(function (x) {
            x.json().then(function (y) {
                _this.resp = y;
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _make_delivery_make_delivery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./make-delivery/make-delivery.component */ "./src/app/make-delivery/make-delivery.component.ts");
/* harmony import */ var _accept_delivery_accept_delivery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accept-delivery/accept-delivery.component */ "./src/app/accept-delivery/accept-delivery.component.ts");
/* harmony import */ var _erservice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./erservice.service */ "./src/app/erservice.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./otp/otp.component */ "./src/app/otp/otp.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





















var routes = [
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'payment', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'store', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'delivery', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'item', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'makedelivery', component: _make_delivery_make_delivery_component__WEBPACK_IMPORTED_MODULE_13__["MakeDeliveryComponent"] },
    { path: 'acceptdelivery', component: _accept_delivery_accept_delivery_component__WEBPACK_IMPORTED_MODULE_14__["AcceptDeliveryComponent"] },
    { path: 'otp', component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_18__["OtpComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
                _make_delivery_make_delivery_component__WEBPACK_IMPORTED_MODULE_13__["MakeDeliveryComponent"],
                _accept_delivery_accept_delivery_component__WEBPACK_IMPORTED_MODULE_14__["AcceptDeliveryComponent"],
                _otp_otp_component__WEBPACK_IMPORTED_MODULE_18__["OtpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].production })
            ],
            providers: [_erservice_service__WEBPACK_IMPORTED_MODULE_15__["ErserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/const.ts":
/*!**************************!*\
  !*** ./src/app/const.ts ***!
  \**************************/
/*! exports provided: info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
var info = [
    { path: 'order', meta: ['id', 'quantity', 'amount', 'status'] },
    { path: 'payment', meta: ['id', 'otp', 'payment generated'] },
    { path: 'store', meta: ['id', 'name', 'mobile'] },
    { path: 'delivery', meta: ['id', 'otp', 'delivery generated'] },
    { path: 'item', meta: ['name', 'price'] },
];


/***/ }),

/***/ "./src/app/erservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/erservice.service.ts ***!
  \**************************************/
/*! exports provided: ErserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErserviceService", function() { return ErserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErserviceService = /** @class */ (function () {
    function ErserviceService() {
        this.seconds = 10;
        this.otpSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.otp = this.otpSub.asObservable();
        this.timerSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.seconds);
        this.timer = this.timerSub.asObservable();
    }
    ErserviceService.prototype.generateOTP = function (data) {
        var _this = this;
        return this.fetch('/d_otp', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            _this.otpSub.next(x);
            var intv = setInterval(function () {
                _this.seconds--;
                _this.timerSub.next(_this.seconds);
                if (_this.seconds < 0) {
                    clearInterval(intv);
                    _this.seconds = 10;
                    _this.timerSub.next(_this.seconds);
                    _this.otpSub.next(null);
                }
            }, 1000);
        }));
    };
    ErserviceService.prototype.acceptOTP = function (id) {
        var _this = this;
        return this.fetch('/accept_otp', { id: id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            _this.seconds = 10;
            _this.timerSub.next(_this.seconds);
            _this.otpSub.next(null);
        }));
    };
    ErserviceService.prototype.rejectOTP = function (id) {
        var _this = this;
        this.fetch('/reject_otp', id).subscribe(function (x) {
            _this.seconds = 10;
            _this.timerSub.next(_this.seconds);
            _this.otpSub.next(null);
        });
    };
    ErserviceService.prototype.fetch = function (url, data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (x) {
            var y = x.json();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(y);
        }));
    };
    ErserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErserviceService);
    return ErserviceService;
}());



/***/ }),

/***/ "./src/app/make-delivery/make-delivery.component.css":
/*!***********************************************************!*\
  !*** ./src/app/make-delivery/make-delivery.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFrZS1kZWxpdmVyeS9tYWtlLWRlbGl2ZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL21ha2UtZGVsaXZlcnkvbWFrZS1kZWxpdmVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/make-delivery/make-delivery.component.html":
/*!************************************************************!*\
  !*** ./src/app/make-delivery/make-delivery.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Make Delivery</h2>\n<mat-form-field>\n  <mat-label>Delivery Man</mat-label>\n  <mat-select>\n    <mat-option\n      *ngFor=\"let i of dm;\"\n      [value]=\"i.value\">\n      {{i.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n    <mat-label>Order Id</mat-label>\n    <mat-select>\n      <mat-option\n        *ngFor=\"let i of order;\"\n        [value]=\"i.value\">\n        {{i.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n      <mat-label>Delivery Man</mat-label>\n      <mat-select>\n        <mat-option\n          *ngFor=\"let i of store;\"\n          [value]=\"i.value\">\n          {{i.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n      <input [(ngModel)]=\"otp\" *ngIf=\"!showButton1\" matInput placeholder=\"Enter OTP\">\n<button *ngIf=\"showButton1\" (click)=\"requestOTP()\" mat-button>Make Delivery!</button>\n<button *ngIf=\"!showButton1\" (click)=\"acceptOTP()\" mat-button>Accept OTP</button>\n"

/***/ }),

/***/ "./src/app/make-delivery/make-delivery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/make-delivery/make-delivery.component.ts ***!
  \**********************************************************/
/*! exports provided: MakeDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeDeliveryComponent", function() { return MakeDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _erservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../erservice.service */ "./src/app/erservice.service.ts");



var MakeDeliveryComponent = /** @class */ (function () {
    function MakeDeliveryComponent(ser) {
        this.ser = ser;
        this.dm = [{ value: 'damo', viewValue: 'Damo' }];
        this.order = [{ value: 'damo', viewValue: 'Potato' }];
        this.store = [{ value: 'damo', viewValue: 'Funny Stores' }];
        this.showInp = false;
        this.showButton1 = true;
        this.str = 'Make Delivery!';
        this.otp = '';
    }
    MakeDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ser.otp.subscribe(function (x) {
            if (x !== null) {
                _this.showInp = true;
                _this.showButton1 = false;
            }
        });
    };
    MakeDeliveryComponent.prototype.requestOTP = function () {
        var _this = this;
        this.ser.generateOTP({}).subscribe(function (x) {
            _this.showButton1 = false;
        });
    };
    MakeDeliveryComponent.prototype.acceptOTP = function () {
        var _this = this;
        this.ser.acceptOTP(this.otp).subscribe(function (x) {
            _this.showInp = false;
            _this.showButton1 = true;
        });
    };
    MakeDeliveryComponent.prototype.ngOnDestroy = function () {
    };
    MakeDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-make-delivery',
            template: __webpack_require__(/*! ./make-delivery.component.html */ "./src/app/make-delivery/make-delivery.component.html"),
            styles: [__webpack_require__(/*! ./make-delivery.component.css */ "./src/app/make-delivery/make-delivery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_erservice_service__WEBPACK_IMPORTED_MODULE_2__["ErserviceService"]])
    ], MakeDeliveryComponent);
    return MakeDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a *ngFor=\"let i of menu\" mat-list-item routerLink=\"{{i.link}}\">{{i.name}}</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>UvanTrust - ElasticRun</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.menu = [
            { name: 'Make Delivery', link: 'makedelivery' },
            { name: 'Accept Delivery', link: 'acceptdelivery' },
            { name: 'OTP Logs', link: 'otp' }
        ];
    }
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-list role=\"list\">\n  <mat-list-item *ngFor=\"let i of item.meta\" role=\"listitem\">\n    {{i}}\n  </mat-list-item>\n</mat-list> -->\n\n<!-- <table mat-table>\n  <tr>\n    <th *ngFor=\"let i of item.meta\">{{i}}</th>\n  </tr>\n  <tr>\n    <td></td>\n  </tr>\n</table> -->\n\n<table mat-table [dataSource]=\"[{id: 1, price: 50}]\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");




var OrderComponent = /** @class */ (function () {
    function OrderComponent(r) {
        this.r = r;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.r.snapshot.routeConfig.path;
        this.item = _const__WEBPACK_IMPORTED_MODULE_3__["info"].filter(function (x) { return x.path === _this.name; })[0];
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/otp/otp.component.css":
/*!***************************************!*\
  !*** ./src/app/otp/otp.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwL290cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvb3RwL290cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/otp/otp.component.html":
/*!****************************************!*\
  !*** ./src/app/otp/otp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"logs\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"accpeted\">\n      <th mat-header-cell *matHeaderCellDef> Accpeted </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.accpeted}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"expired\">\n      <th mat-header-cell *matHeaderCellDef> Expired </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.expired}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayed\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayed;\"></tr>\n  </table>\n\n\n<!-- <mat-list>\n  <mat-list-item>\n      <div style=\"padding: 10px; display: flex\">\n          <div style=\"padding: 10px;\">ID</div>\n          <div style=\"padding: 10px;\">Accepted</div>\n          <div style=\"padding: 10px;\">Rejected</div>\n      </div>\n  </mat-list-item>\n  <mat-list-item *ngFor=\"let i of logs\">\n    <div style=\"padding: 10px; display: flex\">\n        <div style=\"padding: 10px;\">{{i.id}}</div>\n        <div style=\"padding: 10px;\">{{i.accpeted}}</div>\n        <div style=\"padding: 10px;\">{{i.rejected}}</div>\n        <div style=\"padding: 10px;\">{{i.expired}}</div>\n    </div>\n  </mat-list-item>\n</mat-list> -->\n"

/***/ }),

/***/ "./src/app/otp/otp.component.ts":
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _erservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../erservice.service */ "./src/app/erservice.service.ts");



var OtpComponent = /** @class */ (function () {
    function OtpComponent(ser) {
        this.ser = ser;
        this.logs = [{
                id: 1,
                accpeted: false,
                expired: false
            }];
        this.displayed = ['id', 'accpeted', 'expired'];
    }
    OtpComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('/d_otp').then(function (x) {
            x.json().then(function (val) {
                console.log(val);
                _this.logs = val;
            });
        });
    };
    OtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! ./otp.component.html */ "./src/app/otp/otp.component.html"),
            styles: [__webpack_require__(/*! ./otp.component.css */ "./src/app/otp/otp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_erservice_service__WEBPACK_IMPORTED_MODULE_2__["ErserviceService"]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/damodharan-2579/nest/sample/13-mongo-typeorm/y/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map