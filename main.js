(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./register/module": [
		"./src/app/register/module.ts",
		"register-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _news_containers_post_wrapper_post_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/containers/post-wrapper/post-wrapper.component */ "./src/app/news/containers/post-wrapper/post-wrapper.component.ts");
/* harmony import */ var _user_containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/containers/profile/profile.component */ "./src/app/user/containers/profile/profile.component.ts");
/* harmony import */ var _shared_guards_register_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/register.guard */ "./src/app/shared/guards/register.guard.ts");
/* harmony import */ var _core_components_successful_successful_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/successful/successful.component */ "./src/app/core/components/successful/successful.component.ts");
/* harmony import */ var _news_containers_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/containers/search-wrapper/search-wrapper.component */ "./src/app/news/containers/search-wrapper/search-wrapper.component.ts");
/* harmony import */ var _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/change-password/change-password.component */ "./src/app/core/components/change-password/change-password.component.ts");
/* harmony import */ var _core_containers_subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/containers/subscription-list/subscription-list.component */ "./src/app/core/containers/subscription-list/subscription-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'network',
        pathMatch: 'full'
    },
    {
        path: 'auth/reset_password',
        component: _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"]
    },
    {
        path: 'error',
        component: _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    {
        path: 'network',
        canActivate: [_shared_guards_register_guard__WEBPACK_IMPORTED_MODULE_5__["RegisterGuard"]],
        children: [
            {
                path: '',
                component: _core_components_successful_successful_component__WEBPACK_IMPORTED_MODULE_6__["SuccessfulComponent"]
            },
            {
                path: 'subscribers',
                component: _core_containers_subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_9__["SubscriptionListComponent"]
            },
            {
                path: 'profile',
                component: _user_containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                data: {
                    type: 'profile'
                }
            },
            {
                path: 'news',
                component: _news_containers_post_wrapper_post_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["PostWrapperComponent"]
            },
            {
                path: 'search',
                component: _news_containers_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["SearchWrapperComponent"]
            }
        ]
    },
    {
        path: 'register',
        loadChildren: './register/module#RegisterModule'
    },
    { path: '**', redirectTo: 'error' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-alert></app-alert>\r\n<ng-http-loader> </ng-http-loader>\r\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/service/register.service */ "./src/app/register/service/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, registerService) {
        this.router = router;
        this.registerService = registerService;
        this.title = 'SocialNetwork';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent.prototype.logout = function () {
        this.registerService.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _register_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/helpers/jwt.interceptor */ "./src/app/register/helpers/jwt.interceptor.ts");
/* harmony import */ var _register_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/helpers/error.interceptor */ "./src/app/register/helpers/error.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_directives_network_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/directives/network.directive */ "./src/app/shared/directives/network.directive.ts");
/* harmony import */ var _shared_pipes_custom_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/custom.pipe */ "./src/app/shared/pipes/custom.pipe.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _shared_guards_register_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/guards/register.guard */ "./src/app/shared/guards/register.guard.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _news_news_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news/news.module */ "./src/app/news/news.module.ts");
/* harmony import */ var _core_store_store_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/store/store.module */ "./src/app/core/store/store.module.ts");
/* harmony import */ var _register_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/components/alert/alert.component */ "./src/app/register/components/alert/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_directives_network_directive__WEBPACK_IMPORTED_MODULE_10__["NetworkDirective"],
                _shared_pipes_custom_pipe__WEBPACK_IMPORTED_MODULE_11__["CustomPipe"],
                _register_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_4__["NgHttpLoaderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_14__["UserModule"],
                _news_news_module__WEBPACK_IMPORTED_MODULE_15__["NewsModule"],
                _core_store_store_module__WEBPACK_IMPORTED_MODULE_16__["AppStoreModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _register_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _register_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                _shared_services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"],
                _shared_guards_register_guard__WEBPACK_IMPORTED_MODULE_13__["RegisterGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/card-of-user/card-of-user.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/card-of-user/card-of-user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"box header\">\r\n    <img src=\"{{user?.avatarUrl || defaultAvatar}}\">\r\n    <h2>{{user.name | uppercase}}</h2>\r\n    <h3>{{user.surname | uppercase}}</h3>\r\n  </div>\r\n  <div class=\"box footer\">\r\n    <button class=\"view\" (click)=\"viewSubscribeUser(user)\">View Profile</button>\r\n    <button *ngIf=\"btnChangeFollow\" class=\"follow\" (click)=\"addAsFriend(user)\">Follow</button>\r\n    <button *ngIf=\"btnChangeDelete\" class=\"follow\" (click)=\"removeFromFriends(user)\">Delete</button>\r\n\r\n  </div>\r\n</div> \r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/card-of-user/card-of-user.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/card-of-user/card-of-user.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexbox {\n  display: flex;\n  flex-direction: row; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\n.card,\n.box {\n  overflow: hidden;\n  padding: 0;\n  position: relative; }\n\nimg {\n  display: block;\n  width: 100%; }\n\n.follow, .view {\n  background: #c0f5f0;\n  border: 1px solid #09948d;\n  border-radius: 30px;\n  color: rgba(0, 0, 0, 0.75);\n  display: block;\n  font-size: 16px;\n  font-weight: bold;\n  height: 34px;\n  letter-spacing: 2px;\n  line-height: 20px;\n  margin: 20px auto;\n  padding: 0;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all .5s ease;\n  width: 90%; }\n\n.follow:hover {\n  background-color: #34cf7a;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.15); }\n\n.card {\n  background: linear-gradient(to top, #9ac9bb 0%, #5fccba 36%, #0e7063 100%);\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);\n  height: 380px;\n  margin: 2em;\n  width: 180px;\n  display: flex;\n  border-radius: 20px; }\n\n.header {\n  color: #FFF;\n  left: 0;\n  text-align: center;\n  top: 0;\n  width: inherit; }\n\n.header:before {\n  border: 2px solid rgba(161, 220, 255, 0.34);\n  border-radius: 100%;\n  content: \"\";\n  height: 140px;\n  left: 0;\n  margin: 40px auto;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 140px;\n  z-index: 2;\n  -webkit-transform: scale(1.24, 1.24);\n  transform: scale(1.24, 1.24); }\n\n.header img {\n  border: 5px solid #A1DCFF;\n  border-radius: 100%;\n  height: 140px;\n  margin: 2em auto 0.5em;\n  width: 140px; }\n\n.header h2 {\n  display: inline-block;\n  font-size: 20px;\n  letter-spacing: 2px;\n  margin: 0 auto;\n  padding: 30px 0 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); }\n\n.header h3 {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 15px;\n  margin: 0 auto;\n  padding: 5px 0 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  text-transform: uppercase; }\n\n.footer {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: inherit;\n  height: 29%; }\n\n.view:hover {\n  background-color: #34cf7a;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.15); }\n"

/***/ }),

/***/ "./src/app/core/components/card-of-user/card-of-user.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/card-of-user/card-of-user.component.ts ***!
  \************************************************************************/
/*! exports provided: CardOfUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOfUserComponent", function() { return CardOfUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardOfUserComponent = /** @class */ (function () {
    function CardOfUserComponent(store, service) {
        this.store = store;
        this.service = service;
        this.user = {};
        this.index = 0;
        this.viewEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultAvatar = this.service.defaultAvatar;
    }
    CardOfUserComponent.prototype.ngOnInit = function () {
    };
    CardOfUserComponent.prototype.viewSubscribeUser = function (item) {
        this.viewEvt.emit(item);
    };
    CardOfUserComponent.prototype.addAsFriend = function (item) {
        this.addEvt.emit(item);
    };
    CardOfUserComponent.prototype.removeFromFriends = function (item) {
        this.removeEvt.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardOfUserComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardOfUserComponent.prototype, "btnChangeDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardOfUserComponent.prototype, "btnChangeFollow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardOfUserComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardOfUserComponent.prototype, "viewEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardOfUserComponent.prototype, "addEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardOfUserComponent.prototype, "removeEvt", void 0);
    CardOfUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-of-user',
            template: __webpack_require__(/*! ./card-of-user.component.html */ "./src/app/core/components/card-of-user/card-of-user.component.html"),
            styles: [__webpack_require__(/*! ./card-of-user.component.scss */ "./src/app/core/components/card-of-user/card-of-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]])
    ], CardOfUserComponent);
    return CardOfUserComponent;
}());



/***/ }),

/***/ "./src/app/core/components/change-password/change-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/change-password/change-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"active\">\r\n  <h3>Password</h3>\r\n  <p class=\"text-muted\">Change your password or recover your current one.</p>\r\n  <form [formGroup]=\"changePasswordForm\" class=\"form-inline\">\r\n    <div *ngIf=\"changePass\" class=\"form-group\" [class.has-error]=\"currentPassword.invalid && currentPassword.touched\">\r\n      <label for=\"currentPassword\" class=\"required\"></label>\r\n      <input\r\n        formControlName=\"currentPassword\" \r\n\t      id=\"currentPassword\" \r\n\t      class=\"form-control\"\r\n        type=\"currentPassword\" \r\n        name=\"currentPassword\" \r\n        placeholder=\"Current password\"/>\r\n      <span *ngIf=\"currentPassword.invalid && currentPassword.touched\">\r\n        Password should contain at least one character and number\r\n      </span> \r\n    </div>\r\n    <div class=\"form-group\" [class.has-error]=\"(password.invalid || (changePasswordForm.errors || {}).matching) && password.touched\" >\r\n      <label for=\"password\" class=\"required\"></label>\r\n      <input\r\n        formControlName=\"password\" \r\n\t      id=\"password\" \r\n\t      class=\"form-control\"\r\n        type=\"password\" \r\n        name=\"password\" \r\n        placeholder=\"New password\"/>\r\n      <span *ngIf=\"(changePasswordForm.errors || {}).matching && confirmPassword.touched\">\r\n        {{(changePasswordForm.errors || {}).matching}}.\r\n      </span>        \r\n      <span *ngIf=\"password.invalid && password.touched\">\r\n        Password should contain at least one character and number\r\n      </span> \r\n    </div>\r\n    <div class=\"form-group\" [class.has-error]=\"(confirmPassword.invalid || (changePasswordForm.errors || {}).matching) && confirmPassword.touched\">\r\n      <label for=\"confirmPassword\" class=\"required\"></label>\r\n      <input\r\n        formControlName=\"confirmPassword\" \r\n        id=\"confirmPassword\" \r\n        class=\"form-control\" \r\n        type=\"password\" \r\n        name=\"confirmPassword\" \r\n        placeholder=\"Verify password\r\n\"/>\r\n      <span *ngIf=\"(changePasswordForm.errors || {}).matching && confirmPassword.touched\">\r\n        {{(changePasswordForm.errors || {}).matching}}.\r\n      </span>\r\n      <span *ngIf=\"confirmPassword.invalid && confirmPassword.touched\">\r\n        Password should contain at least one character and number\r\n      </span>       \r\n    </div>     \r\n    <button\r\n      [disabled]=\"changePasswordForm.invalid\"\r\n      type=\"submit\"\r\n      class=\"btn btn-success\"\r\n      (click) = \"submitHandler()\">\r\n      SAVE CHANGES\r\n    </button>              \r\n  </form>\r\n</div> "

/***/ }),

/***/ "./src/app/core/components/change-password/change-password.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/change-password/change-password.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  padding-left: 30px;\n  line-height: 1; }\n  .active h3 {\n    color: #27aae1;\n    font-size: 26px; }\n  .active .text-muted {\n    color: #939598;\n    font-size: 10px;\n    margin-bottom: 20px; }\n  .active .form-inline .form-group {\n    position: relative;\n    padding-bottom: 20px;\n    width: 50%;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    flex-direction: column; }\n  .active .form-inline .form-group input {\n      position: relative;\n      box-sizing: inherit;\n      width: 100%;\n      background: #fff;\n      color: #939598;\n      border-radius: 30px;\n      box-shadow: none;\n      border: 1px solid #f1f2f2;\n      padding-left: 15px;\n      font-size: 12px;\n      height: 35px;\n      margin-bottom: 0; }\n  .active .already {\n    font-size: 10px;\n    color: #27aae1;\n    line-height: 1; }\n  .active .btn {\n    background: #27aae1;\n    padding: 0 25px;\n    border: none;\n    font-size: 14px;\n    border-radius: 4px;\n    color: #fff;\n    position: relative;\n    font-weight: 600;\n    outline: none;\n    border-radius: 30px;\n    margin-top: 30px; }\n  .active .btn:hover {\n    background: #149AC9;\n    transition: all 1s; }\n  .has-error input {\n  border: 1px solid red; }\n  .has-error span {\n  position: absolute;\n  color: red;\n  font-size: 8px;\n  margin-top: 35px; }\n"

/***/ }),

/***/ "./src/app/core/components/change-password/change-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/change-password/change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_password_change_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/password-change.actions */ "./src/app/core/store/actions/password-change.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb, router, store) {
        this.fb = fb;
        this.router = router;
        this.store = store;
        this.changePass = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.fb.group(this.createFromGroup().controls, { validator: this.passwordConfirming });
    };
    ChangePasswordComponent.prototype.submitHandler = function () {
        var token = (window.location.search.split('='))[1];
        var data = {
            'password': this.password.value,
            'token': token
        };
        this.store.dispatch(new _store_actions_password_change_actions__WEBPACK_IMPORTED_MODULE_4__["GetPassword"](data));
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "currentPassword", {
        get: function () {
            return this.changePasswordForm.get('currentPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "password", {
        get: function () {
            return this.changePasswordForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "confirmPassword", {
        get: function () {
            return this.changePasswordForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.createFromGroup = function () {
        if (this.changePass) {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
            });
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
        });
    };
    ChangePasswordComponent.prototype.passwordConfirming = function (c) {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalid: true, matching: 'Passwords are not matching' };
        }
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/core/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/core/components/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/core/components/comment/comment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/components/comment/comment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n  <div class=\"post-comment\">\r\n    <img  (click)=\"onViewSubscribeUser(item)\" [src]=\"item?.author.avatarUrl || defaultAvatar\" alt=\"\" class=\"profile-photo-sm\">\r\n    <div class =\"post-comment-content\" (click)=\"onViewSubscribeUser(item)\"><a  class=\"profile-link\">{{item.author.fullname}} </a><i class=\"em em-laughing\"></i>\r\n      {{item.text}}<br> <p class =\"text-muted\">{{item.date | date:'medium'}}</p></div>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf = \"accessToDeleteComment\" >\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button (click)=\"deleteBtnCkickHandlerComment(item)\" mat-menu-item>\r\n          <mat-icon>delete</mat-icon>\r\n          <span>Delete</span>\r\n        </button>\r\n      </mat-menu>\r\n  </div>\r\n  <div class=\"line-divider\"></div>\r\n  <!-- <a class=\"comment clearfix\" (click)=\"addBtnClickHandler()\" *ngIf=\"!editMode\">Add comment</a>\r\n  <app-add-comment-for-comment *ngIf=\"editMode\"></app-add-comment-for-comment> -->\r\n  <!-- <ul *ngIf=\"commentForComment.length > 0\">\r\n    <div *ngFor=\"let commentItem of commentForComment; let i = index\"></div>\r\n    <li>\r\n      <div class=\"post-comment-1\">\r\n        <img [src]=\"item.avatar\" alt=\"\" class=\"profile-photo-sm\">\r\n        <p><a href=\"timeline.html\" class=\"profile-link\">{{commentItem.userName}} </a><i class=\"em em-laughing\"></i>\r\n          {{commentItem.content}}</p>\r\n\r\n      </div>\r\n      <div class=\"line-divider\"></div>\r\n    </li>\r\n\r\n  </ul> -->\r\n</li>\r\n\r\n<!-- <app-add-comment *ngIf=\"editMode\" (addEvt) = \"addHandler($event)\"></app-add-comment> -->"

/***/ }),

/***/ "./src/app/core/components/comment/comment.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/components/comment/comment.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-comment {\n  display: inline-flex;\n  margin: 10px auto;\n  width: 100%; }\n  .post-comment img.profile-photo-sm {\n    margin-right: 10px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 0; }\n  .line-divider {\n  background: none;\n  height: 1px;\n  border-top: 1px solid #e6e6e6;\n  width: 100%;\n  margin: auto;\n  margin-bottom: 10px; }\n  a:hover {\n  color: #23527c;\n  cursor: pointer; }\n  .text-muted {\n  color: #939598; }\n  .post-comment-content {\n  max-width: 750px;\n  width: 100%;\n  overflow: hidden; }\n  .profile-link {\n  background-color: transparent;\n  text-decoration: none; }\n  .profile-link:hover {\n  color: #23527c;\n  cursor: pointer; }\n  .profile-photo-sm:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/core/components/comment/comment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/comment/comment.component.ts ***!
  \**************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/core/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentComponent = /** @class */ (function () {
    function CommentComponent(networkService, store) {
        var _this = this;
        this.networkService = networkService;
        this.store = store;
        this.itemIndex = 0;
        this.deleteEvtComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.accessToDeleteComment = false;
        this.isUserProfileSubscribers = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_2__["getIsUserProfile"])).subscribe(function (isUserProfile) {
            _this.user$ = isUserProfile;
        });
        this.defaultAvatar = this.networkService.defaultAvatar;
    }
    CommentComponent.prototype.ngOnInit = function () {
        if (this.user$.id === this.item.author.id) {
            this.accessToDeleteComment = true;
        }
    };
    CommentComponent.prototype.deleteBtnCkickHandlerComment = function (comment) {
        this.deleteEvtComment.emit(comment);
    };
    CommentComponent.prototype.onViewSubscribeUser = function (item) {
        this.networkService.onViewSubscribeUser(item.author.id);
    };
    CommentComponent.prototype.ngOnDestroy = function () {
        this.isUserProfileSubscribers && this.isUserProfileSubscribers.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "itemIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "deleteEvtComment", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/core/components/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/core/components/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/core/components/item-post/item-post.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/item-post/item-post.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n  <div class=\"post-content\">\r\n    <img [src]=\"item?.imageUrl\" alt=\"post-image\" class=\"img-responsive post-image\">\r\n    <div class=\"post-container\">\r\n      <img [src]=\"item.author.avatarUrl || defaultAvatar\" alt=\"user\" class=\"profile-photo-md pull-left\" (click)=\"onViewSubscribeUser(item)\">\r\n      <div class=\"post-detail\">\r\n        <div class=\"user-info\">\r\n          <h5><p class=\"profile-link\" (click)=\"onViewSubscribeUser(item)\">{{item.author.fullname}}</p> <span class=\"following\">following</span></h5>\r\n          <p class=\"text-muted\">{{item.date | date:'medium'}}</p>\r\n        </div>\r\n        <div class=\"reaction\">\r\n          <a (click) = \"like(item)\" class=\"btn text-green\"><i class=\"material-icons\">  thumb_up  </i> {{item.likes.length}}</a>\r\n          <a (click) = \"dislike(item)\" class=\"btn text-red\"><i class=\"material-icons\">  thumb_down  </i> {{item.dislikes.length}}</a>\r\n          \r\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf = \"accessToEditPost\" >\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <!-- <button (click)=\"editBtnCkickHandler()\"  mat-menu-item>\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>Edit</span>\r\n                  </button> -->\r\n                  <button (click)=\"deleteBtnCkickHandler(item.id)\" mat-menu-item>\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Delete</span>\r\n                  </button>\r\n                </mat-menu>\r\n              \r\n        </div>\r\n      \r\n        <div class=\"line-divider\"></div>\r\n        <div class=\"post-text\" *ngIf=\"editModePost\">\r\n          <textarea type=\"text\" [value]=\"item.text\" (input)=\"inputHandler($event)\"></textarea>\r\n        </div>\r\n        <div class=\"post-text\" *ngIf=\"!editModePost\" >\r\n          <p>{{item.text}} <i class=\"em em-anguished\"></i> <i class=\"em em-anguished\"></i> <i class=\"em em-anguished\"></i></p>\r\n        </div>\r\n        <!-- <button class=\"btn-main\" *ngIf=\"editModePost\" (click)=\"saveBtnClickHandler(item, itemIndex)\">Send</button>\r\n        <button class=\"btn-main\" *ngIf=\"editModePost\" (click)=\"cancelBtnClickHandler(item, itemIndex)\">Cancel</button> -->\r\n        <div class=\"line-divider\"></div>\r\n        <a class=\"comment clearfix\" (click) = \"addBtnClickHandler()\" *ngIf=\"!editMode\" > Add comment</a>\r\n        <app-add-comment [postId]= \"item.id\" *ngIf=\"editMode\"  ></app-add-comment>\r\n        <app-comment-wrapper [post]= \"item\"  [arrayComments]= \"item.comments\"></app-comment-wrapper>\r\n       \r\n      </div>\r\n    </div>\r\n \r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/item-post/item-post.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/components/item-post/item-post.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%; }\n\n.post-content {\n  background: #f8f8f8;\n  border-radius: 4px;\n  width: 100%;\n  border: 1px solid #f1f2f2;\n  margin-bottom: 20px;\n  overflow: hidden;\n  position: relative; }\n\n.post-content img.post-image,\n  .post-content video.post-video {\n    width: 100%;\n    height: auto; }\n\n.post-content .post-container {\n    padding: 20px; }\n\n.post-content .post-container .post-detail {\n      margin-left: 65px;\n      position: relative; }\n\n.post-content .post-container .post-detail .reaction {\n        position: absolute;\n        right: 0;\n        top: 0; }\n\n.post-content .post-container .post-detail .post-text {\n        line-height: 24px;\n        margin: 0; }\n\n.post-content .post-container .post-detail textarea {\n        height: 5rem;\n        padding-left: 10px;\n        overflow: auto; }\n\n#menu {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\nh5 {\n  display: block;\n  font-size: 15px;\n  -webkit-margin-before: 1.67em;\n          margin-block-start: 1.67em;\n  -webkit-margin-after: 1.67em;\n          margin-block-end: 1.67em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-family: inherit;\n  color: #09948d; }\n\na {\n  background-color: transparent;\n  text-decoration: none; }\n\na:hover {\n  color: #23527c;\n  cursor: pointer; }\n\n.profile-link {\n  background-color: transparent;\n  text-decoration: none; }\n\n.profile-link:hover {\n  color: #23527c;\n  cursor: pointer; }\n\n.profile-photo-md:hover {\n  cursor: pointer; }\n\np {\n  margin: 0 0 10px;\n  text-align: justify; }\n\nimg {\n  vertical-align: middle;\n  border: 0; }\n\nimg.profile-photo-md {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%; }\n\n.pull-left {\n  float: left !important; }\n\n.profile-link {\n  font-weight: 600; }\n\n.following {\n  color: #8dc63f;\n  font-size: 12px;\n  margin-left: 20px; }\n\n.text-muted {\n  color: #939598; }\n\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n\n.text-green {\n  color: #8dc63f; }\n\n.text-red {\n  color: #ef4136; }\n\n.line-divider {\n  background: none;\n  height: 1px;\n  border-top: 1px solid #e6e6e6;\n  width: 100%;\n  margin: auto;\n  margin-bottom: 10px; }\n\n.comment {\n  padding: 10px;\n  float: right; }\n\n*:after {\n  box-sizing: border-box; }\n\n.clearfix:after {\n  display: block;\n  content: '';\n  clear: both; }\n\n.btn-main {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  background-color: #09948d;\n  border-radius: 30px;\n  border: none;\n  padding: 7px 25px;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/core/components/item-post/item-post.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/item-post/item-post.component.ts ***!
  \******************************************************************/
/*! exports provided: ItemPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPostComponent", function() { return ItemPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/core/store/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemPostComponent = /** @class */ (function () {
    function ItemPostComponent(service, store) {
        var _this = this;
        this.service = service;
        this.store = store;
        this.itemIndex = 0;
        this.saveEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.accessToEditPost = false;
        this.editMode = false;
        this.editModePost = false;
        this.counterLike = 0;
        this.counterDislike = 0;
        this.editingItem = {};
        this.defaultImageUrl = '../../../../assets/img/4.jpg';
        this.srcError = 'http://res.cloudinary.com/s-cloud/image/upload/v1544363237/posts/mmxjjuv6jch2sbah8nxv.png';
        this.isUserProfileSubscribers = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getIsUserProfile"])).subscribe(function (isUserProfile) {
            _this.user$ = isUserProfile;
        });
    }
    ItemPostComponent.prototype.ngOnInit = function () {
        if (this.user$.id === this.item.author.id) {
            this.accessToEditPost = true;
        }
        this.item.imageUrl = this.item.imageUrl !== this.srcError ?
            this.item.imageUrl : this.defaultImageUrl;
    };
    ItemPostComponent.prototype.inputHandler = function (event) {
        this.editingItem = __assign({}, this.item, { text: event.target.value });
    };
    ItemPostComponent.prototype.saveBtnClickHandler = function (item, itemIndex) {
        this.saveEvt.emit({ item: this.editingItem.text ? this.editingItem : this.item, itemIndex: itemIndex });
        this.editModePost = false;
    };
    ItemPostComponent.prototype.cancelBtnClickHandler = function () {
        this.editModePost = false;
        this.cancelEvt.emit();
    };
    ItemPostComponent.prototype.editBtnCkickHandler = function () {
        this.editModePost = true;
    };
    ItemPostComponent.prototype.addBtnClickHandler = function () {
        this.editMode = true;
    };
    ItemPostComponent.prototype.addHandler = function (e) {
        this.editMode = e;
    };
    ItemPostComponent.prototype.like = function (item) {
        this.service.like(item.id);
    };
    ItemPostComponent.prototype.dislike = function (item) {
        this.service.dislike(item.id);
    };
    ItemPostComponent.prototype.deleteBtnCkickHandler = function (id) {
        this.deleteEvt.emit(id);
    };
    ItemPostComponent.prototype.onViewSubscribeUser = function (item) {
        this.service.onViewSubscribeUser(item.author.id);
    };
    ItemPostComponent.prototype.ngOnDestroy = function () {
        this.isUserProfileSubscribers && this.isUserProfileSubscribers.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemPostComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemPostComponent.prototype, "itemIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemPostComponent.prototype, "saveEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemPostComponent.prototype, "cancelEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemPostComponent.prototype, "deleteEvt", void 0);
    ItemPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-post',
            template: __webpack_require__(/*! ./item-post.component.html */ "./src/app/core/components/item-post/item-post.component.html"),
            styles: [__webpack_require__(/*! ./item-post.component.scss */ "./src/app/core/components/item-post/item-post.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ItemPostComponent);
    return ItemPostComponent;
}());



/***/ }),

/***/ "./src/app/core/components/nav/nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/components/nav/nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\r\n  <nav>\r\n    <div class=\"nav-wrapper\">\r\n      <a routerLink=''  routerLinkActive=\"active\" class=\"brand-logo\"><img src=\"assets/img/logo.svg\" width=\"150px\" alt=\"\"></a>\r\n        \r\n        <img class=\"img-profile\" src=\"{{userProfile?.avatarUrl || defaultAvatar}}\" mat-button [matMenuTriggerFor] = \"menu\">\r\n        \r\n         <mat-menu  #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item>{{userProfile?.fullname}}</button>        \r\n          <button mat-menu-item (click)=\"goToProfilePage()\" routerLink='/network/profile'><i class=\"large material-icons\">account_box</i>My profile</button>\r\n          <button mat-menu-item routerLink='/network/news'><i class=\"large material-icons\">notifications</i>News</button>\r\n          <button mat-menu-item routerLink='/network/subscribers'><i class=\"large material-icons\">supervised_user_circle</i>My subscribers</button>\r\n          <button mat-menu-item routerLink='/network/search'><i class=\"material-icons\">search</i>Search</button>\r\n          <button mat-menu-item (click)=\"logout()\">Log Out</button>\r\n        </mat-menu>\r\n\r\n      \r\n      <!-- <ul class=\"right hide-on-med-and-down\">\r\n        <li><a routerLink='/network/profile' routerLinkActive=\"active\" [class.activated]=\"currentUrl == '/network/profile'\">account_box</a></li>\r\n        <li><a routerLink='/network/news'  [class.activated]=\"currentUrl == '/network/news'\">notifications</i></li>\r\n        <li><a routerLink='/network/subscribe'  routerLinkActive=\"active\" [class.activated]=\"currentUrl == '/network/subscribe'\" >supervised_user_circle</a></li>\r\n        <li > <a routerLink='/network/search'  routerLinkActive=\"active\" [class.activated]=\"currentUrl == '/network/search'\"> search</a> </li> \r\n      </ul> -->\r\n    </div>\r\n  </nav>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/nav/nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/core/components/nav/nav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #09948d;\n  position: relative;\n  width: 100%; }\n  nav .brand-logo {\n    margin-left: 25px; }\n  nav .hide-on-med-and-down {\n    margin-right: 25px; }\n  nav .nav-wrapper {\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n    -moz-flex-direction: row;\n    -o-flex-direction: row;\n    flex-direction: row;\n    align-items: center;\n    /*    ul{\r\n        li{\r\n            .activated {\r\n                background-color:#25a59f;\r\n            \r\n            }\r\n          \r\n        }\r\n    }\r\n*/ }\n  nav .nav-wrapper .brand-logo {\n      line-height: 64px; }\n  nav .nav-wrapper .brand-logo img {\n        margin: auto;\n        padding-top: 22px; }\n  nav .nav-wrapper .img-profile {\n      margin-left: 90%;\n      height: 40px;\n      width: 40px;\n      border-radius: 50%; }\n  nav .nav-wrapper mat-menu > button .activated {\n      background-color: #25a59f; }\n  i {\n  margin-right: 10px;\n  color: #25a59f;\n  font-size: 25px; }\n"

/***/ }),

/***/ "./src/app/core/components/nav/nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/nav/nav.component.ts ***!
  \******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/core/store/index.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    function NavComponent(router, networkService, store) {
        var _this = this;
        this.router = router;
        this.networkService = networkService;
        this.store = store;
        this.defaultAvatar = this.networkService.defaultAvatar;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
        this.isUserProfileSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getIsUserProfile"])).subscribe(function (isUserProfile) {
            _this.userProfile = (Object.keys(isUserProfile).length === 0) ? JSON.parse(sessionStorage.getItem('userProfile')) : isUserProfile;
        });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.goToProfilePage = function () {
        this.networkService.profileСhange('profile');
    };
    NavComponent.prototype.logout = function () {
        this.networkService.logout();
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.isUserProfileSubscription && this.isUserProfileSubscription.unsubscribe();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/core/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/core/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\t<div class=\"content\">\r\n    <h1>404</h1>\r\n    <p>oops! page not found</p>\r\n    <button routerLink=\"/network/profile\" (click)=\"goToProfilePage()\" class=\"btn\" routerLinkActive=\"active\">Go to profile page</button>\t\r\n\t</div>\r\n\t\r\n</div>"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100vw;\n  height: 100vh;\n  background-image: url(\"data:image/jpeg;base64,\");\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n  .wrapper .content {\n    background: url('8.png');\n    background-size: cover;\n    text-align: center;\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    max-width: 750px;\n    width: 100%;\n    height: 450px; }\n  .wrapper .content h1 {\n      font-size: 150px;\n      font-weight: bold;\n      color: red; }\n  .wrapper .content p {\n      font-size: 35px;\n      color: #09948d; }\n"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(networkService) {
        this.networkService = networkService;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goToProfilePage = function () {
        this.networkService.profileСhange('profile');
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/successful/successful.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/successful/successful.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\t<div class=\"content\">\r\n\t\t<h1>Welcome</h1>\r\n\t\t<h2>to the social network!</h2>\r\n\t\t<h2>We are glad that you are with us!</h2>\t\t\r\n\t</div>\r\n\t<button (click)=\"btnSubmit()\" class=\"btn\">\r\n\t\tGo to profile pages\r\n\t</button>\t\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/successful/successful.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/successful/successful.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background: url('1.jpg') fixed no-repeat;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  min-height: 100vh; }\n\n.content {\n  width: 100%;\n  height: 90%;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  -o-flex-direction: column;\n  flex-direction: column;\n  justify-content: center;\n  -ms-align-items: center;\n  align-items: center; }\n\nh1, h2 {\n  color: #4169E1; }\n\n.btn {\n  float: right;\n  margin-right: 25px;\n  background: #27aae1;\n  padding: 0 25px;\n  border: none;\n  font-size: 14px;\n  border-radius: 4px;\n  color: #fff;\n  position: relative;\n  font-weight: 600;\n  outline: none;\n  border-radius: 30px; }\n\n.btn:hover {\n  background: #149AC9;\n  transition: all 1s; }\n"

/***/ }),

/***/ "./src/app/core/components/successful/successful.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/successful/successful.component.ts ***!
  \********************************************************************/
/*! exports provided: SuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulComponent", function() { return SuccessfulComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessfulComponent = /** @class */ (function () {
    function SuccessfulComponent(router) {
        this.router = router;
    }
    SuccessfulComponent.prototype.ngOnInit = function () {
    };
    SuccessfulComponent.prototype.btnSubmit = function () {
        this.router.navigate(['/network/profile']);
    };
    SuccessfulComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-successful',
            template: __webpack_require__(/*! ./successful.component.html */ "./src/app/core/components/successful/successful.component.html"),
            styles: [__webpack_require__(/*! ./successful.component.scss */ "./src/app/core/components/successful/successful.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SuccessfulComponent);
    return SuccessfulComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/add-comment/add-comment.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/containers/add-comment/add-comment.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #commentForm=\"ngForm\" (ngSubmit)=\"onSubmit(commentForm)\"  (window:keyup) = \"keyEvent($event)\">\r\n<div class=\"post-comment\">\r\n          <img [src]=\"comment.author.avatarUrl\" alt=\"\" class=\"profile-photo-sm\">\r\n          <textarea\r\n         \r\n          type=\"text\"\r\n          class=\"form-control\" \r\n          placeholder=\"Post a comment\" \r\n          [(ngModel)]=\"content\"  \r\n           name=\"text\"\r\n           id=\"text\"\r\n           #text = \"ngModel\" >\r\n          \r\n        </textarea>\r\n            <button class=\"btn-main\" type=\"submit\">Publish</button>\r\n</div>\r\n</form>\r\n<!-- (click)=\"addBtnClickHandler() -->\r\n<!-- (window:keyup) = \"keyEvent($event) -->"

/***/ }),

/***/ "./src/app/core/containers/add-comment/add-comment.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/containers/add-comment/add-comment.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-comment {\n  display: inline-flex;\n  margin: 10px auto;\n  width: 100%; }\n  .post-comment img.profile-photo-sm {\n    margin-right: 10px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%; }\n  .post-comment .form-control {\n    height: 30px;\n    border: 1px solid #ccc;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    margin: 7px;\n    min-width: 0;\n    background: #fff;\n    width: 100% !important;\n    display: block;\n    line-height: 1.42857143;\n    color: #555;\n    background-image: none;\n    padding-left: 10px; }\n  textarea {\n  -webkit-appearance: textfield;\n  -webkit-rtl-ordering: logical;\n  cursor: text;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  font: 400 13.3333px Arial; }\n  .btn-main {\n  background-color: #09948d;\n  border-radius: 30px;\n  border: none;\n  padding: 7px 25px;\n  color: #fff;\n  transition: 1s; }\n  .btn-main:hover {\n  background-color: #06746e;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/core/containers/add-comment/add-comment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/containers/add-comment/add-comment.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/app/core/store/index.ts");
/* harmony import */ var _store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCommentComponent = /** @class */ (function () {
    function AddCommentComponent(networkService, store) {
        var _this = this;
        this.networkService = networkService;
        this.store = store;
        this.addEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = {
            _id: '',
            author: {
                name: '',
                surname: '',
                fullname: '',
                avatarUrl: '',
                id: '',
            },
            text: '',
            date: new Date()
        };
        this.isUserProfileSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getIsUserProfile"])).subscribe(function (isUserProfile) {
            if (isUserProfile) {
                _this.comment.author.name = isUserProfile.name;
                _this.comment.author.surname = isUserProfile.surname;
                _this.comment.author.avatarUrl = isUserProfile.avatarUrl;
                _this.comment.author.id = isUserProfile.id;
            }
        });
    }
    AddCommentComponent.prototype.ngOnInit = function () {
    };
    AddCommentComponent.prototype.onSubmit = function (form) {
        if (this.content && this.content.includes("<")) {
            this.comment.text = this.content.toString().replace("<", "!");
        }
        else {
            this.comment.text = this.content;
        }
        this.store.dispatch(new _store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostAddComment"](this.postId, this.comment));
        this.addBtnClickHandler();
    };
    AddCommentComponent.prototype.addBtnClickHandler = function () {
        this.addEvt.emit(false);
    };
    AddCommentComponent.prototype.keyEvent = function (event) {
        if (event.key === "Control") {
            if (this.content && this.content.includes("<")) {
                this.comment.text = this.content.toString().replace("<", "!");
            }
            else {
                this.comment.text = this.content;
            }
            this.store.dispatch(new _store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostAddComment"](this.postId, this.comment));
            this.addBtnClickHandler();
        }
    };
    AddCommentComponent.prototype.ngOnDestroy = function () {
        this.isUserProfileSubscription && this.isUserProfileSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddCommentComponent.prototype, "postId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddCommentComponent.prototype, "addEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('commentForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AddCommentComponent.prototype, "commentForm", void 0);
    AddCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-comment',
            template: __webpack_require__(/*! ./add-comment.component.html */ "./src/app/core/containers/add-comment/add-comment.component.html"),
            styles: [__webpack_require__(/*! ./add-comment.component.scss */ "./src/app/core/containers/add-comment/add-comment.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AddCommentComponent);
    return AddCommentComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/comment-wrapper/comment-wrapper.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/core/containers/comment-wrapper/comment-wrapper.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n<div *ngFor=\"let commentItem of arrayComments; let i = index\">\r\n    <app-comment\r\n     [item]=\"commentItem\" [itemIndex]=\"i\"\r\n     (deleteEvtComment)= \"deleteHandler($event)\"\r\n     >\r\n     \r\n    </app-comment>\r\n</div>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/core/containers/comment-wrapper/comment-wrapper.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/containers/comment-wrapper/comment-wrapper.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/containers/comment-wrapper/comment-wrapper.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/containers/comment-wrapper/comment-wrapper.component.ts ***!
  \******************************************************************************/
/*! exports provided: CommentWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentWrapperComponent", function() { return CommentWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentWrapperComponent = /** @class */ (function () {
    function CommentWrapperComponent(networkService, store) {
        this.networkService = networkService;
        this.store = store;
    }
    CommentWrapperComponent.prototype.ngOnInit = function () {
    };
    CommentWrapperComponent.prototype.deleteHandler = function (comment) {
        this.store.dispatch(new _store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserPostCommentDelete"](this.post, comment));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommentWrapperComponent.prototype, "arrayComments", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentWrapperComponent.prototype, "post", void 0);
    CommentWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-wrapper',
            template: __webpack_require__(/*! ./comment-wrapper.component.html */ "./src/app/core/containers/comment-wrapper/comment-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./comment-wrapper.component.scss */ "./src/app/core/containers/comment-wrapper/comment-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CommentWrapperComponent);
    return CommentWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/containers/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\r\n \r\n    <div class=\"container\">\r\n    © 2018 Copyright Text\r\n    <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\r\n    </div>\r\n  \r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/core/containers/footer/footer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/containers/footer/footer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #09948d;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  z-index: 2;\n  padding-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/core/containers/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/containers/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/containers/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/containers/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/containers/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\t\r\n  <app-nav></app-nav>\r\n</header>"

/***/ }),

/***/ "./src/app/core/containers/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/containers/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/containers/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/containers/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/containers/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/containers/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/main/main.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/containers/main/main.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>   </app-header>\r\n\r\n<app-footer> </app-footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/containers/main/main.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/containers/main/main.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/containers/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/containers/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/core/containers/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/core/containers/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/subscription-list/subscription-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/core/containers/subscription-list/subscription-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\r\n<div class = \"friends_list_wrapper\">\r\n\t<div class=\"row\"> \r\n      \t<app-card-of-user *ngFor = \"let item of userSubscribers; let i = index\"\r\n      \t\t[user]=\"item\" \r\n      \t\t[index]=\"i\"\r\n      \t\t(viewEvt)=\"onViewSubscribeUser($event)\"\r\n\t\t\t    (addEvt)=\"onAddAsFriend($event)\"\r\n\t\t\t    [btnChangeFollow]=\"btnChangeFollow\"\r\n          [btnChangeDelete]=\"btnChangeDelete\"\r\n      \t\t>\r\n      </app-card-of-user>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/core/containers/subscription-list/subscription-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/core/containers/subscription-list/subscription-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/core/containers/subscription-list/subscription-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/containers/subscription-list/subscription-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SubscriptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListComponent", function() { return SubscriptionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubscriptionListComponent = /** @class */ (function () {
    function SubscriptionListComponent(networkService, store) {
        var _this = this;
        this.networkService = networkService;
        this.store = store;
        this.isProfileSubscribtion = this.networkService.profileSubjObservable().subscribe(function (data) {
            _this.profileСhange = data;
            if (data === 'profile') {
                _this.isUserProfileSubscribers = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsSubscribersProfile"])).subscribe(function (isUserSubscribers) {
                    _this.userSubscribers = isUserSubscribers;
                });
                _this.btnChangeFollow = false;
                _this.btnChangeDelete = false;
            }
            else {
                _this.isCurrentUserSubscribers = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsSubscribersCurrent"])).subscribe(function (isUserSubscribers) {
                    _this.userSubscribers = isUserSubscribers;
                });
                _this.btnChangeFollow = true;
                _this.btnChangeDelete = false;
            }
        });
    }
    SubscriptionListComponent.prototype.ngOnInit = function () {
        this.profileСhange === 'profile' ? this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_2__["GetSubscribersProfile"]()) :
            this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_2__["GetSubscribersId"](this.profileСhange));
    };
    SubscriptionListComponent.prototype.onViewSubscribeUser = function (item) {
        this.networkService.onViewSubscribeUser(item.id);
    };
    SubscriptionListComponent.prototype.ngOnDestroy = function () {
        this.isProfileSubscribtion && this.isProfileSubscribtion.unsubscribe();
        this.isUserProfileSubscribers && this.isUserProfileSubscribers.unsubscribe();
        this.isCurrentUserSubscribers && this.isCurrentUserSubscribers.unsubscribe();
    };
    SubscriptionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription-list',
            template: __webpack_require__(/*! ./subscription-list.component.html */ "./src/app/core/containers/subscription-list/subscription-list.component.html"),
            styles: [__webpack_require__(/*! ./subscription-list.component.scss */ "./src/app/core/containers/subscription-list/subscription-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SubscriptionListComponent);
    return SubscriptionListComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/header/header.component */ "./src/app/core/containers/header/header.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/core/components/nav/nav.component.ts");
/* harmony import */ var _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/footer/footer.component */ "./src/app/core/containers/footer/footer.component.ts");
/* harmony import */ var _components_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item-post/item-post.component */ "./src/app/core/components/item-post/item-post.component.ts");
/* harmony import */ var _containers_comment_wrapper_comment_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/comment-wrapper/comment-wrapper.component */ "./src/app/core/containers/comment-wrapper/comment-wrapper.component.ts");
/* harmony import */ var _containers_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/add-comment/add-comment.component */ "./src/app/core/containers/add-comment/add-comment.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/core/components/comment/comment.component.ts");
/* harmony import */ var _containers_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/main/main.component */ "./src/app/core/containers/main/main.component.ts");
/* harmony import */ var _components_successful_successful_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/successful/successful.component */ "./src/app/core/components/successful/successful.component.ts");
/* harmony import */ var _components_card_of_user_card_of_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/card-of-user/card-of-user.component */ "./src/app/core/components/card-of-user/card-of-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/core/components/change-password/change-password.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-module */ "./src/app/core/material-module.ts");
/* harmony import */ var _containers_subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/subscription-list/subscription-list.component */ "./src/app/core/containers/subscription-list/subscription-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"]
            ],
            declarations: [
                _containers_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _components_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_6__["ItemPostComponent"],
                _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _containers_comment_wrapper_comment_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["CommentWrapperComponent"],
                _containers_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__["AddCommentComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                _containers_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _components_successful_successful_component__WEBPACK_IMPORTED_MODULE_12__["SuccessfulComponent"],
                _components_card_of_user_card_of_user_component__WEBPACK_IMPORTED_MODULE_13__["CardOfUserComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
                _containers_subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_17__["SubscriptionListComponent"]
            ],
            exports: [
                _containers_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _components_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_6__["ItemPostComponent"],
                _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _containers_comment_wrapper_comment_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["CommentWrapperComponent"],
                _containers_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__["AddCommentComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                _containers_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _components_successful_successful_component__WEBPACK_IMPORTED_MODULE_12__["SuccessfulComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_card_of_user_card_of_user_component__WEBPACK_IMPORTED_MODULE_13__["CardOfUserComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/material-module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material-module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/core/store/actions/news.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/core/store/actions/news.actions.ts ***!
  \****************************************************/
/*! exports provided: NewsActionTypes, GetPosts, GetPostsFail, GetPostsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsActionTypes", function() { return NewsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPosts", function() { return GetPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostsFail", function() { return GetPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostsSuccess", function() { return GetPostsSuccess; });
var NewsActionTypes;
(function (NewsActionTypes) {
    NewsActionTypes["GET_POSTS"] = "[POSTS] Fetch todos requested";
    NewsActionTypes["GET_POSTS_SUCCESS"] = "[POSTS] Fetch todos success";
    NewsActionTypes["GET_POSTS_FAIL"] = "[POSTS] Fetch todos failed";
})(NewsActionTypes || (NewsActionTypes = {}));
var GetPosts = /** @class */ (function () {
    function GetPosts() {
        this.type = NewsActionTypes.GET_POSTS;
    }
    return GetPosts;
}());

var GetPostsFail = /** @class */ (function () {
    function GetPostsFail(payload) {
        this.payload = payload;
        this.type = NewsActionTypes.GET_POSTS_FAIL;
    }
    return GetPostsFail;
}());

var GetPostsSuccess = /** @class */ (function () {
    function GetPostsSuccess(payload) {
        this.payload = payload;
        this.type = NewsActionTypes.GET_POSTS_SUCCESS;
    }
    return GetPostsSuccess;
}());



/***/ }),

/***/ "./src/app/core/store/actions/password-change.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/store/actions/password-change.actions.ts ***!
  \***************************************************************/
/*! exports provided: PasswordChangesActionTypes, GetPassword, GetPasswordSuccess, GetPasswordFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangesActionTypes", function() { return PasswordChangesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPassword", function() { return GetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPasswordSuccess", function() { return GetPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPasswordFail", function() { return GetPasswordFail; });
var PasswordChangesActionTypes;
(function (PasswordChangesActionTypes) {
    PasswordChangesActionTypes["GET_PASSWORD"] = "[PASSWORD] Fetch password requested";
    PasswordChangesActionTypes["GET_PASSWORD_SUCCESS"] = "[PASSWORD] Fetch password success";
    PasswordChangesActionTypes["GET_PASSWORD_FAIL"] = "[PASSWORD] Fetch password failed";
})(PasswordChangesActionTypes || (PasswordChangesActionTypes = {}));
var GetPassword = /** @class */ (function () {
    function GetPassword(payload) {
        this.payload = payload;
        this.type = PasswordChangesActionTypes.GET_PASSWORD;
    }
    return GetPassword;
}());

var GetPasswordSuccess = /** @class */ (function () {
    function GetPasswordSuccess(payload) {
        this.payload = payload;
        this.type = PasswordChangesActionTypes.GET_PASSWORD_SUCCESS;
    }
    return GetPasswordSuccess;
}());

var GetPasswordFail = /** @class */ (function () {
    function GetPasswordFail(error) {
        this.error = error;
        this.type = PasswordChangesActionTypes.GET_PASSWORD_FAIL;
    }
    return GetPasswordFail;
}());



/***/ }),

/***/ "./src/app/core/store/actions/subscribe.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/actions/subscribe.actions.ts ***!
  \*********************************************************/
/*! exports provided: SubscribersActionTypes, AddSubscribe, AddSubscribeSuccess, AddSubscribeFail, GetSubscribersId, GetSubscribersIdSuccess, GetSubscribersIdFail, GetSubscribersProfile, GetSubscribersProfileSuccess, GetSubscribersProfileFail, DeleteSubscribe, DeleteSubscribeSuccess, DeleteSubscribeFail, GetSubscriptionsProfile, GetSubscriptionsProfileSuccess, GetSubscriptionsProfileFail, GetSubscriptionsId, GetSubscriptionsIdSuccess, GetSubscriptionsIdFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribersActionTypes", function() { return SubscribersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubscribe", function() { return AddSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubscribeSuccess", function() { return AddSubscribeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubscribeFail", function() { return AddSubscribeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersId", function() { return GetSubscribersId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersIdSuccess", function() { return GetSubscribersIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersIdFail", function() { return GetSubscribersIdFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersProfile", function() { return GetSubscribersProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersProfileSuccess", function() { return GetSubscribersProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersProfileFail", function() { return GetSubscribersProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSubscribe", function() { return DeleteSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSubscribeSuccess", function() { return DeleteSubscribeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSubscribeFail", function() { return DeleteSubscribeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsProfile", function() { return GetSubscriptionsProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsProfileSuccess", function() { return GetSubscriptionsProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsProfileFail", function() { return GetSubscriptionsProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsId", function() { return GetSubscriptionsId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsIdSuccess", function() { return GetSubscriptionsIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsIdFail", function() { return GetSubscriptionsIdFail; });
var SubscribersActionTypes;
(function (SubscribersActionTypes) {
    SubscribersActionTypes["ADD_SUBSCRIBE"] = "[ADD_SUBSCRIBE] Fetch AddSubscribe requested";
    SubscribersActionTypes["ADD_SUBSCRIBE_SUCCESS"] = "[ADD_SUBSCRIBE] Fetch AddSubscribe success";
    SubscribersActionTypes["ADD_SUBSCRIBE_FAIL"] = "[ADD_SUBSCRIBE] Fetch AddSubscribe failed";
    SubscribersActionTypes["GET_SUBSCRIBERS_ID"] = "[SUBSCRIBERS_ID] Fetch GetSubscribersId requested";
    SubscribersActionTypes["GET_SUBSCRIBERS_ID_SUCCESS"] = "[SUBSCRIBERS_ID] Fetch GetSubscribersId success";
    SubscribersActionTypes["GET_SUBSCRIBERS_ID_FAIL"] = "[SUBSCRIBERS_ID] Fetch GetSubscribersId failed";
    SubscribersActionTypes["GET_SUBSCRIBERS_PROFILE"] = "[SUBSCRIBERS_PROFILE] Fetch GetSubscribersProfile requested";
    SubscribersActionTypes["GET_SUBSCRIBERS_PROFILE_SUCCESS"] = "[SUBSCRIBERS_PROFILE] Fetch GetSubscribersProfile success";
    SubscribersActionTypes["GET_SUBSCRIBERS_PROFILE_FAIL"] = "[SUBSCRIBERS_PROFILE] Fetch GetSubscribersProfile failed";
    SubscribersActionTypes["DELETE_SUBSCRIBE"] = "[DELETE_SUBSCRIBE] Fetch DeleteSubscribe requested";
    SubscribersActionTypes["DELETE_SUBSCRIBE_SUCCESS"] = "[DELETE_SUBSCRIBE] Fetch DeleteSubscribe success";
    SubscribersActionTypes["DELETE_SUBSCRIBE_FAIL"] = "[DELETE_SUBSCRIBE Fetch DeleteSubscribe failed";
    SubscribersActionTypes["GET_SUBSCRIPTIONS_PROFILE"] = "[SUBSCRIPTIONS_PROFILE] Fetch GetSubscriptionsProfile requested";
    SubscribersActionTypes["GET_SUBSCRIPTIONS_PROFILE_SUCCESS"] = "[SUBSCRIPTIONS_PROFILE] Fetch GetSubscriptionsProfile success";
    SubscribersActionTypes["GET_SUBSCRIPTIONS_PROFILE_FAIL"] = "[SUBSCRIPTIONS_PROFILE] Fetch GetSubscriptionsProfile failed";
    SubscribersActionTypes["GET_SUBSCRIPTIONS_ID"] = "[SUBSCRIPTIONS_ID] Fetch GetSubscriptionsId requested";
    SubscribersActionTypes["GET_SUBSCRIPTIONS_ID_SUCCESS"] = "[SUBSCRIPTIONS_ID] Fetch GetSubscriptionsId success";
    SubscribersActionTypes["GET_SUBSCRIPTIONS_ID_FAIL"] = "[SUBSCRIPTIONS_ID] Fetch GetSubscriptionsId failed";
})(SubscribersActionTypes || (SubscribersActionTypes = {}));
var AddSubscribe = /** @class */ (function () {
    function AddSubscribe(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.ADD_SUBSCRIBE;
    }
    return AddSubscribe;
}());

var AddSubscribeSuccess = /** @class */ (function () {
    function AddSubscribeSuccess(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.ADD_SUBSCRIBE_SUCCESS;
    }
    return AddSubscribeSuccess;
}());

var AddSubscribeFail = /** @class */ (function () {
    function AddSubscribeFail(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.ADD_SUBSCRIBE_FAIL;
    }
    return AddSubscribeFail;
}());

var GetSubscribersId = /** @class */ (function () {
    function GetSubscribersId(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIBERS_ID;
    }
    return GetSubscribersId;
}());

var GetSubscribersIdSuccess = /** @class */ (function () {
    function GetSubscribersIdSuccess(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIBERS_ID_SUCCESS;
    }
    return GetSubscribersIdSuccess;
}());

var GetSubscribersIdFail = /** @class */ (function () {
    function GetSubscribersIdFail(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIBERS_ID_FAIL;
    }
    return GetSubscribersIdFail;
}());

var GetSubscribersProfile = /** @class */ (function () {
    function GetSubscribersProfile() {
        this.type = SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE;
    }
    return GetSubscribersProfile;
}());

var GetSubscribersProfileSuccess = /** @class */ (function () {
    function GetSubscribersProfileSuccess(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE_SUCCESS;
    }
    return GetSubscribersProfileSuccess;
}());

var GetSubscribersProfileFail = /** @class */ (function () {
    function GetSubscribersProfileFail(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE_FAIL;
    }
    return GetSubscribersProfileFail;
}());

var DeleteSubscribe = /** @class */ (function () {
    function DeleteSubscribe(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.DELETE_SUBSCRIBE;
    }
    return DeleteSubscribe;
}());

var DeleteSubscribeSuccess = /** @class */ (function () {
    function DeleteSubscribeSuccess(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.DELETE_SUBSCRIBE_SUCCESS;
    }
    return DeleteSubscribeSuccess;
}());

var DeleteSubscribeFail = /** @class */ (function () {
    function DeleteSubscribeFail(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.DELETE_SUBSCRIBE_FAIL;
    }
    return DeleteSubscribeFail;
}());

var GetSubscriptionsProfile = /** @class */ (function () {
    function GetSubscriptionsProfile() {
        this.type = SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE;
    }
    return GetSubscriptionsProfile;
}());

var GetSubscriptionsProfileSuccess = /** @class */ (function () {
    function GetSubscriptionsProfileSuccess(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE_SUCCESS;
    }
    return GetSubscriptionsProfileSuccess;
}());

var GetSubscriptionsProfileFail = /** @class */ (function () {
    function GetSubscriptionsProfileFail(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE_FAIL;
    }
    return GetSubscriptionsProfileFail;
}());

var GetSubscriptionsId = /** @class */ (function () {
    function GetSubscriptionsId(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIPTIONS_ID;
    }
    return GetSubscriptionsId;
}());

var GetSubscriptionsIdSuccess = /** @class */ (function () {
    function GetSubscriptionsIdSuccess(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIPTIONS_ID_SUCCESS;
    }
    return GetSubscriptionsIdSuccess;
}());

var GetSubscriptionsIdFail = /** @class */ (function () {
    function GetSubscriptionsIdFail(payload) {
        this.payload = payload;
        this.type = SubscribersActionTypes.GET_SUBSCRIPTIONS_ID_FAIL;
    }
    return GetSubscriptionsIdFail;
}());



/***/ }),

/***/ "./src/app/core/store/actions/user-posts.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/store/actions/user-posts.actions.ts ***!
  \**********************************************************/
/*! exports provided: UserPostsActionTypes, GetUserPosts, GetUserPostsSuccess, GetUserPostsFail, GetUserPostAdd, GetUserPostAddSuccess, GetUserPostAddFail, GetUserPostDelete, GetUserPostDeleteSuccess, GetUserPostDeleteFail, GetUserPostAddComment, GetUserPostAddCommentSuccess, GetUserPostAddCommentFail, GetUserPostCommentDelete, GetUserPostCommentDeleteSuccess, GetUserPostCommentDeleteFail, AddLike, AddLikeSuccess, AddLikeFail, AddDislike, AddDislikeSuccess, AddDislikeFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsActionTypes", function() { return UserPostsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPosts", function() { return GetUserPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostsSuccess", function() { return GetUserPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostsFail", function() { return GetUserPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostAdd", function() { return GetUserPostAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostAddSuccess", function() { return GetUserPostAddSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostAddFail", function() { return GetUserPostAddFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostDelete", function() { return GetUserPostDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostDeleteSuccess", function() { return GetUserPostDeleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostDeleteFail", function() { return GetUserPostDeleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostAddComment", function() { return GetUserPostAddComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostAddCommentSuccess", function() { return GetUserPostAddCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostAddCommentFail", function() { return GetUserPostAddCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostCommentDelete", function() { return GetUserPostCommentDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostCommentDeleteSuccess", function() { return GetUserPostCommentDeleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserPostCommentDeleteFail", function() { return GetUserPostCommentDeleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLike", function() { return AddLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLikeSuccess", function() { return AddLikeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLikeFail", function() { return AddLikeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDislike", function() { return AddDislike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDislikeSuccess", function() { return AddDislikeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDislikeFail", function() { return AddDislikeFail; });
var UserPostsActionTypes;
(function (UserPostsActionTypes) {
    UserPostsActionTypes["GET_USER_POSTS"] = "[USER_PROFILE] Fetch UserPosts requested";
    UserPostsActionTypes["GET_USER_POSTS_SUCCESS"] = "[USER_PROFILE] Fetch UserPosts success";
    UserPostsActionTypes["GET_USER_POSTS_FAIL"] = "[USER_PROFILE] Fetch UserPosts failed";
    UserPostsActionTypes["GET_USER_POST_ADD"] = "[USER_PROFILE] Fetch UserPostsAdd requested";
    UserPostsActionTypes["GET_USER_POST_ADD_SUCCESS"] = "[USER_PROFILE] Fetch UserPostsAdd success";
    UserPostsActionTypes["GET_USER_POST_ADD_FAIL"] = "[USER_PROFILE] Fetch UserPostsAdd failed";
    UserPostsActionTypes["GET_USER_POST_DELETE"] = "[USER_PROFILE] Fetch UserPostsDelete requested";
    UserPostsActionTypes["GET_USER_POST_DELETE_SUCCESS"] = "[USER_PROFILE] Fetch UserPostsDelete success";
    UserPostsActionTypes["GET_USER_POST_DELETE_FAIL"] = "[USER_PROFILE] Fetch UserPostsDelete failed";
    UserPostsActionTypes["GET_USER_POST_ADD_COMMENT"] = "[USER_PROFILE] Fetch UserPostAddComment requested";
    UserPostsActionTypes["GET_USER_POST_ADD_COMMENT_SUCCESS"] = "[USER_PROFILE] Fetch UserPostAddComment success";
    UserPostsActionTypes["GET_USER_POST_ADD_COMMENT_FAIL"] = "[USER_PROFILE] Fetch UserPostAddComment failed";
    UserPostsActionTypes["GET_USER_POST_COMMENT_DELETE"] = "[USER_PROFILE] Fetch UserPostsCommentDelete requested";
    UserPostsActionTypes["GET_USER_POST_COMMENT_DELETE_SUCCESS"] = "[USER_PROFILE] Fetch UserPostsCommentDelete success";
    UserPostsActionTypes["GET_USER_POST_COMMENT_DELETE_FAIL"] = "[USER_PROFILE] Fetch UserPostsCommentDelete failed";
    UserPostsActionTypes["ADD_LIKE"] = "[ADD_LIKE] Fetch AddLike requested";
    UserPostsActionTypes["ADD_LIKE_SUCCESS"] = "[ADD_LIKE] Fetch AddLike success";
    UserPostsActionTypes["ADD_LIKE_FAIL"] = "[ADD_LIKE] Fetch AddLike failed";
    UserPostsActionTypes["ADD_DISLIKE"] = "[ADD_DISLIKE] Fetch AddDislike requested";
    UserPostsActionTypes["ADD_DISLIKE_SUCCESS"] = "[ADD_DISLIKE] Fetch AddDislike success";
    UserPostsActionTypes["ADD_DISLIKE_FAIL"] = "[ADD_DISLIKE] Fetch AddDislike failed";
})(UserPostsActionTypes || (UserPostsActionTypes = {}));
var GetUserPosts = /** @class */ (function () {
    function GetUserPosts(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POSTS;
    }
    return GetUserPosts;
}());

var GetUserPostsSuccess = /** @class */ (function () {
    function GetUserPostsSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POSTS_SUCCESS;
    }
    return GetUserPostsSuccess;
}());

var GetUserPostsFail = /** @class */ (function () {
    function GetUserPostsFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POSTS_FAIL;
    }
    return GetUserPostsFail;
}());

var GetUserPostAdd = /** @class */ (function () {
    function GetUserPostAdd(payload, imageUrl) {
        this.payload = payload;
        this.imageUrl = imageUrl;
        this.type = UserPostsActionTypes.GET_USER_POST_ADD;
    }
    return GetUserPostAdd;
}());

var GetUserPostAddSuccess = /** @class */ (function () {
    function GetUserPostAddSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_ADD_SUCCESS;
    }
    return GetUserPostAddSuccess;
}());

var GetUserPostAddFail = /** @class */ (function () {
    function GetUserPostAddFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_ADD_FAIL;
    }
    return GetUserPostAddFail;
}());

var GetUserPostDelete = /** @class */ (function () {
    function GetUserPostDelete(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_DELETE;
    }
    return GetUserPostDelete;
}());

var GetUserPostDeleteSuccess = /** @class */ (function () {
    function GetUserPostDeleteSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_DELETE_SUCCESS;
    }
    return GetUserPostDeleteSuccess;
}());

var GetUserPostDeleteFail = /** @class */ (function () {
    function GetUserPostDeleteFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_DELETE_FAIL;
    }
    return GetUserPostDeleteFail;
}());

var GetUserPostAddComment = /** @class */ (function () {
    function GetUserPostAddComment(payloadIdPost, payload) {
        this.payloadIdPost = payloadIdPost;
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_ADD_COMMENT;
    }
    return GetUserPostAddComment;
}());

var GetUserPostAddCommentSuccess = /** @class */ (function () {
    function GetUserPostAddCommentSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_ADD_COMMENT_SUCCESS;
    }
    return GetUserPostAddCommentSuccess;
}());

var GetUserPostAddCommentFail = /** @class */ (function () {
    function GetUserPostAddCommentFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_ADD_COMMENT_FAIL;
    }
    return GetUserPostAddCommentFail;
}());

var GetUserPostCommentDelete = /** @class */ (function () {
    function GetUserPostCommentDelete(payloadPost, payloadComment) {
        this.payloadPost = payloadPost;
        this.payloadComment = payloadComment;
        this.type = UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE;
    }
    return GetUserPostCommentDelete;
}());

var GetUserPostCommentDeleteSuccess = /** @class */ (function () {
    function GetUserPostCommentDeleteSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE_SUCCESS;
    }
    return GetUserPostCommentDeleteSuccess;
}());

var GetUserPostCommentDeleteFail = /** @class */ (function () {
    function GetUserPostCommentDeleteFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE_FAIL;
    }
    return GetUserPostCommentDeleteFail;
}());

var AddLike = /** @class */ (function () {
    function AddLike(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.ADD_LIKE;
    }
    return AddLike;
}());

var AddLikeSuccess = /** @class */ (function () {
    function AddLikeSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.ADD_LIKE_SUCCESS;
    }
    return AddLikeSuccess;
}());

var AddLikeFail = /** @class */ (function () {
    function AddLikeFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.ADD_LIKE_FAIL;
    }
    return AddLikeFail;
}());

var AddDislike = /** @class */ (function () {
    function AddDislike(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.ADD_DISLIKE;
    }
    return AddDislike;
}());

var AddDislikeSuccess = /** @class */ (function () {
    function AddDislikeSuccess(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.ADD_DISLIKE_SUCCESS;
    }
    return AddDislikeSuccess;
}());

var AddDislikeFail = /** @class */ (function () {
    function AddDislikeFail(payload) {
        this.payload = payload;
        this.type = UserPostsActionTypes.ADD_DISLIKE_FAIL;
    }
    return AddDislikeFail;
}());



/***/ }),

/***/ "./src/app/core/store/actions/user-profile.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/actions/user-profile.actions.ts ***!
  \************************************************************/
/*! exports provided: UserProfileActionTypes, GetUserProfile, GetUserProfileSuccess, GetUserProfileFail, GetCurrentUserProfile, GetCurrentUserProfileSuccess, GetCurrentUserProfileFail, GetUsers, GetUsersSuccess, GetUsersFail, PutUpdateProfile, PutUpdateProfileSuccess, PutUpdateProfileFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileActionTypes", function() { return UserProfileActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfile", function() { return GetUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileSuccess", function() { return GetUserProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileFail", function() { return GetUserProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentUserProfile", function() { return GetCurrentUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentUserProfileSuccess", function() { return GetCurrentUserProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentUserProfileFail", function() { return GetCurrentUserProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return GetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersSuccess", function() { return GetUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersFail", function() { return GetUsersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutUpdateProfile", function() { return PutUpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutUpdateProfileSuccess", function() { return PutUpdateProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutUpdateProfileFail", function() { return PutUpdateProfileFail; });
var UserProfileActionTypes;
(function (UserProfileActionTypes) {
    UserProfileActionTypes["GET_USER_PROFILE"] = "[USER_PROFILE] Fetch UserProfile requested";
    UserProfileActionTypes["GET_USER_PROFILE_SUCCESS"] = "[USER_PROFILE] Fetch UserProfile success";
    UserProfileActionTypes["GET_USER_PROFILE_FAIL"] = "[USER_PROFILE] Fetch UserProfile failed";
    UserProfileActionTypes["GET_CURRENT_USER_PROFILE"] = "[CURRENT_USER_PROFILE] Fetch CurrentUserProfile requested";
    UserProfileActionTypes["GET_CURRENT_USER_PROFILE_SUCCESS"] = "[CURRENT_USER_PROFILE] Fetch CurrentUserProfile success";
    UserProfileActionTypes["GET_CURRENT_USER_PROFILE_FAIL"] = "[CURRENT_USER_PROFILE] Fetch CurrentUserProfile failed";
    UserProfileActionTypes["GET_USERS"] = "[USERS] Fetch Users requested";
    UserProfileActionTypes["GET_USERS_SUCCESS"] = "[USERS] Fetch Users success";
    UserProfileActionTypes["GET_USERS_FAIL"] = "[USERS] Fetch Users failed";
    UserProfileActionTypes["PUT_UPDATE_PROFILE"] = "[UPDATE_PROFILE] Fetch UpdateProfile requested";
    UserProfileActionTypes["PUT_UPDATE_PROFILE_SUCCESS"] = "[UPDATE_PROFILE] Fetch UpdateProfile success";
    UserProfileActionTypes["PUT_UPDATE_PROFILE_FAIL"] = "[UPDATE_PROFILE] Fetch UpdateProfile failed";
})(UserProfileActionTypes || (UserProfileActionTypes = {}));
var GetUserProfile = /** @class */ (function () {
    function GetUserProfile() {
        this.type = UserProfileActionTypes.GET_USER_PROFILE;
    }
    return GetUserProfile;
}());

var GetUserProfileSuccess = /** @class */ (function () {
    function GetUserProfileSuccess(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_USER_PROFILE_SUCCESS;
    }
    return GetUserProfileSuccess;
}());

var GetUserProfileFail = /** @class */ (function () {
    function GetUserProfileFail(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_USER_PROFILE_FAIL;
    }
    return GetUserProfileFail;
}());

var GetCurrentUserProfile = /** @class */ (function () {
    function GetCurrentUserProfile(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_CURRENT_USER_PROFILE;
    }
    return GetCurrentUserProfile;
}());

var GetCurrentUserProfileSuccess = /** @class */ (function () {
    function GetCurrentUserProfileSuccess(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_CURRENT_USER_PROFILE_SUCCESS;
    }
    return GetCurrentUserProfileSuccess;
}());

var GetCurrentUserProfileFail = /** @class */ (function () {
    function GetCurrentUserProfileFail(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_CURRENT_USER_PROFILE_FAIL;
    }
    return GetCurrentUserProfileFail;
}());

var GetUsers = /** @class */ (function () {
    function GetUsers(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_USERS;
    }
    return GetUsers;
}());

var GetUsersSuccess = /** @class */ (function () {
    function GetUsersSuccess(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_USERS_SUCCESS;
    }
    return GetUsersSuccess;
}());

var GetUsersFail = /** @class */ (function () {
    function GetUsersFail(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.GET_USERS_FAIL;
    }
    return GetUsersFail;
}());

var PutUpdateProfile = /** @class */ (function () {
    function PutUpdateProfile(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.PUT_UPDATE_PROFILE;
    }
    return PutUpdateProfile;
}());

var PutUpdateProfileSuccess = /** @class */ (function () {
    function PutUpdateProfileSuccess(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.PUT_UPDATE_PROFILE_SUCCESS;
    }
    return PutUpdateProfileSuccess;
}());

var PutUpdateProfileFail = /** @class */ (function () {
    function PutUpdateProfileFail(payload) {
        this.payload = payload;
        this.type = UserProfileActionTypes.PUT_UPDATE_PROFILE_FAIL;
    }
    return PutUpdateProfileFail;
}());



/***/ }),

/***/ "./src/app/core/store/effects/add-dislike-post.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/store/effects/add-dislike-post.effects.ts ***!
  \****************************************************************/
/*! exports provided: AddDislikeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDislikeEffect", function() { return AddDislikeEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _core_store_actions_news_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/store/actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddDislikeEffect = /** @class */ (function () {
    function AddDislikeEffect(actions$, networkService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.getIsAddDislike$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["UserPostsActionTypes"].ADD_DISLIKE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.addDislikePost(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.store.dispatch(new _core_store_actions_news_actions__WEBPACK_IMPORTED_MODULE_7__["GetPosts"]());
            _this.store.dispatch(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPosts"](data.data.post.author.id));
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["AddDislikeSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["AddDislikeFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddDislikeEffect.prototype, "getIsAddDislike$", void 0);
    AddDislikeEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AddDislikeEffect);
    return AddDislikeEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/add-like-post.effects.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/store/effects/add-like-post.effects.ts ***!
  \*************************************************************/
/*! exports provided: AddLikeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLikeEffect", function() { return AddLikeEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _core_store_actions_news_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/store/actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddLikeEffect = /** @class */ (function () {
    function AddLikeEffect(actions$, networkService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.getIsAddLike$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["UserPostsActionTypes"].ADD_LIKE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) { return _this.networkService.addLikePost(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.store.dispatch(new _core_store_actions_news_actions__WEBPACK_IMPORTED_MODULE_7__["GetPosts"]());
            _this.store.dispatch(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPosts"](data.data.post.author.id));
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["AddLikeSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["AddLikeFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddLikeEffect.prototype, "getIsAddLike$", void 0);
    AddLikeEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AddLikeEffect);
    return AddLikeEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/add-subscribe.effects.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/store/effects/add-subscribe.effects.ts ***!
  \*************************************************************/
/*! exports provided: AddSubscribeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubscribeEffect", function() { return AddSubscribeEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/store/actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var _register_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../register/service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddSubscribeEffect = /** @class */ (function () {
    function AddSubscribeEffect(actions$, networkService, alertService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.alertService = alertService;
        this.store = store;
        this.getIsAddSubscribe$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["SubscribersActionTypes"].ADD_SUBSCRIBE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.addSubscribe(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.alertService.success('Subscription on profile succeeded.', true);
            _this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["GetSubscriptionsProfile"]());
            return new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["AddSubscribeSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.error(err, true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["AddSubscribeFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddSubscribeEffect.prototype, "getIsAddSubscribe$", void 0);
    AddSubscribeEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
            _register_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AddSubscribeEffect);
    return AddSubscribeEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/current-user-profile.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/store/effects/current-user-profile.effects.ts ***!
  \********************************************************************/
/*! exports provided: CurrentUserProfileEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserProfileEffect", function() { return CurrentUserProfileEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/store/actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var _register_service_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../register/service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CurrentUserProfileEffect = /** @class */ (function () {
    function CurrentUserProfileEffect(actions$, networkService, alertService, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.alertService = alertService;
        this.router = router;
        this.store = store;
        this.getIsCurrentUserProfile$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__["UserProfileActionTypes"].GET_CURRENT_USER_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.getCurrentUserProfile(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var carrentUser = data.data.user;
            _this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["GetSubscriptionsId"](carrentUser.id));
            _this.store.dispatch(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserPosts"](carrentUser.id));
            _this.router.navigate(['network/profile']);
            return new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__["GetCurrentUserProfileSuccess"](carrentUser);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__["GetCurrentUserProfileFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CurrentUserProfileEffect.prototype, "getIsCurrentUserProfile$", void 0);
    CurrentUserProfileEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"],
            _register_service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], CurrentUserProfileEffect);
    return CurrentUserProfileEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/delete-subscribe.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/store/effects/delete-subscribe.effects.ts ***!
  \****************************************************************/
/*! exports provided: DeleteSubscribeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSubscribeEffect", function() { return DeleteSubscribeEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var _register_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../register/service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/store/actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DeleteSubscribeEffect = /** @class */ (function () {
    function DeleteSubscribeEffect(actions$, networkService, alertService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.alertService = alertService;
        this.store = store;
        this.getIsDeleteSubscribe$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["SubscribersActionTypes"].DELETE_SUBSCRIBE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.deleteSubscribe(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_8__["GetUserProfile"]());
            _this.store.dispatch(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["GetSubscriptionsProfile"]());
            return new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteSubscribeSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.error(err, true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteSubscribeFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], DeleteSubscribeEffect.prototype, "getIsDeleteSubscribe$", void 0);
    DeleteSubscribeEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
            _register_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DeleteSubscribeEffect);
    return DeleteSubscribeEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/get-current-subscribers.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/store/effects/get-current-subscribers.effects.ts ***!
  \***********************************************************************/
/*! exports provided: GetSubscribersIdEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersIdEffect", function() { return GetSubscribersIdEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetSubscribersIdEffect = /** @class */ (function () {
    function GetSubscribersIdEffect(actions$, networkService) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.getIsSubscribersCurrent$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["SubscribersActionTypes"].GET_SUBSCRIBERS_ID), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.getUsersSubscribersId(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["GetSubscribersIdSuccess"](data.data.subscribers);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["GetSubscribersIdFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], GetSubscribersIdEffect.prototype, "getIsSubscribersCurrent$", void 0);
    GetSubscribersIdEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]])
    ], GetSubscribersIdEffect);
    return GetSubscribersIdEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/get-current-subscrirtions.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/store/effects/get-current-subscrirtions.effects.ts ***!
  \*************************************************************************/
/*! exports provided: GetSubscriptionsIdEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsIdEffect", function() { return GetSubscriptionsIdEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetSubscriptionsIdEffect = /** @class */ (function () {
    function GetSubscriptionsIdEffect(actions$, networkService) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.getIsSubscriptionsId$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["SubscribersActionTypes"].GET_SUBSCRIPTIONS_ID), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.getUsersSubscriptionsId(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["GetSubscriptionsIdSuccess"](data.data.subscriptions); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["GetSubscriptionsIdFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], GetSubscriptionsIdEffect.prototype, "getIsSubscriptionsId$", void 0);
    GetSubscriptionsIdEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]])
    ], GetSubscriptionsIdEffect);
    return GetSubscriptionsIdEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/get-profile-subscribers.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/store/effects/get-profile-subscribers.effects.ts ***!
  \***********************************************************************/
/*! exports provided: GetSubscribersProfileEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscribersProfileEffect", function() { return GetSubscribersProfileEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetSubscribersProfileEffect = /** @class */ (function () {
    function GetSubscribersProfileEffect(actions$, networkService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.router = router;
        this.getIsSubscribersProfile$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_4__["SubscribersActionTypes"].GET_SUBSCRIBERS_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) { return _this.networkService.getUsersSubscribersProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_4__["GetSubscribersProfileSuccess"](data.data.subscribers);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_4__["GetSubscribersProfileFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], GetSubscribersProfileEffect.prototype, "getIsSubscribersProfile$", void 0);
    GetSubscribersProfileEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GetSubscribersProfileEffect);
    return GetSubscribersProfileEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/get-profile-subscrirtions.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/store/effects/get-profile-subscrirtions.effects.ts ***!
  \*************************************************************************/
/*! exports provided: GetSubscriptionsProfileEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubscriptionsProfileEffect", function() { return GetSubscriptionsProfileEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetSubscriptionsProfileEffect = /** @class */ (function () {
    function GetSubscriptionsProfileEffect(actions$, networkService) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.getIsSubscriptionsProfile$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["SubscribersActionTypes"].GET_SUBSCRIPTIONS_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.getUsersSubscriptionsProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["GetSubscriptionsProfileSuccess"](data.data.subscriptions);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_3__["GetSubscriptionsProfileFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], GetSubscriptionsProfileEffect.prototype, "getIsSubscriptionsProfile$", void 0);
    GetSubscriptionsProfileEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]])
    ], GetSubscriptionsProfileEffect);
    return GetSubscriptionsProfileEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/get-users.effects.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/effects/get-users.effects.ts ***!
  \*********************************************************/
/*! exports provided: GetUsersEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersEffect", function() { return GetUsersEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetUsersEffect = /** @class */ (function () {
    function GetUsersEffect(actions$, networkService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.router = router;
        this.getIsUsers$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_4__["UserProfileActionTypes"].GET_USERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) { return _this.networkService.getUsersSearch(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_4__["GetUsersSuccess"](data.data.users);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_4__["GetUsersFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], GetUsersEffect.prototype, "getIsUsers$", void 0);
    GetUsersEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GetUsersEffect);
    return GetUsersEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/news.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/core/store/effects/news.effects.ts ***!
  \****************************************************/
/*! exports provided: NewsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEffects", function() { return NewsEffects; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_news_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewsEffects = /** @class */ (function () {
    function NewsEffects(actions$, networkService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.getPosts$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_news_actions__WEBPACK_IMPORTED_MODULE_5__["NewsActionTypes"].GET_POSTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) { return _this.networkService.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            // this.store.dispatch(new GetUserProfile()) 
            _this.store.dispatch(new _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_7__["GetSubscriptionsProfile"]());
            return new _actions_news_actions__WEBPACK_IMPORTED_MODULE_5__["GetPostsSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_news_actions__WEBPACK_IMPORTED_MODULE_5__["GetPostsFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], NewsEffects.prototype, "getPosts$", void 0);
    NewsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], NewsEffects);
    return NewsEffects;
}());



/***/ }),

/***/ "./src/app/core/store/effects/password-change.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/store/effects/password-change.effects.ts ***!
  \***************************************************************/
/*! exports provided: PasswordChangeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeEffect", function() { return PasswordChangeEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_password_change_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/password-change.actions */ "./src/app/core/store/actions/password-change.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _register_service_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../register/service/alert.service */ "./src/app/register/service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PasswordChangeEffect = /** @class */ (function () {
    function PasswordChangeEffect(actions$, networkService, alertService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.alertService = alertService;
        this.router = router;
        this.getIsPassword$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_password_change_actions__WEBPACK_IMPORTED_MODULE_5__["PasswordChangesActionTypes"].GET_PASSWORD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.resetPassword(action['payload']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.alertService.success('Your password has been reset successfully, you can now log in with your new password.', true);
            window.close();
            return new _actions_password_change_actions__WEBPACK_IMPORTED_MODULE_5__["GetPasswordSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.error('Registration failed', true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_password_change_actions__WEBPACK_IMPORTED_MODULE_5__["GetPasswordFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PasswordChangeEffect.prototype, "getIsPassword$", void 0);
    PasswordChangeEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _register_service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PasswordChangeEffect);
    return PasswordChangeEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/update-user-profile.effects.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/store/effects/update-user-profile.effects.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateUserProfileEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserProfileEffect", function() { return UpdateUserProfileEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _register_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../register/service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateUserProfileEffect = /** @class */ (function () {
    function UpdateUserProfileEffect(actions$, networkService, alertService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.alertService = alertService;
        this.store = store;
        this.getIsUpdateUserProfile$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["UserProfileActionTypes"].PUT_UPDATE_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.putUpdateProfile(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.alertService.success('Your profile has been successfully updated.', true);
            return new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["PutUpdateProfileSuccess"](data.data.user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["PutUpdateProfileFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UpdateUserProfileEffect.prototype, "getIsUpdateUserProfile$", void 0);
    UpdateUserProfileEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
            _register_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], UpdateUserProfileEffect);
    return UpdateUserProfileEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/user-post-add-comment.effects.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/store/effects/user-post-add-comment.effects.ts ***!
  \*********************************************************************/
/*! exports provided: UserPostAddCommentEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostAddCommentEffect", function() { return UserPostAddCommentEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_news_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserPostAddCommentEffect = /** @class */ (function () {
    function UserPostAddCommentEffect(actions$, networkService, store, router) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.router = router;
        this.getIsUserPostAddComment$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["UserPostsActionTypes"].GET_USER_POST_ADD_COMMENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.addComment(action.payloadIdPost, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.currentUrl = _this.router.url;
            _this.currentUrl === '/network/news' ? _this.store.dispatch(new _actions_news_actions__WEBPACK_IMPORTED_MODULE_9__["GetPosts"]()) :
                data.data.post.author.id === action.payload.author.id ?
                    _this.store.dispatch(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_7__["GetUserProfile"]()) : _this.store.dispatch(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_7__["GetCurrentUserProfile"](data.data.post.author.id));
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostAddCommentSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostAddCommentFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UserPostAddCommentEffect.prototype, "getIsUserPostAddComment$", void 0);
    UserPostAddCommentEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserPostAddCommentEffect);
    return UserPostAddCommentEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/user-post-add.effects.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/store/effects/user-post-add.effects.ts ***!
  \*************************************************************/
/*! exports provided: UserPostAddEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostAddEffect", function() { return UserPostAddEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPostAddEffect = /** @class */ (function () {
    function UserPostAddEffect(actions$, networkService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.getIsUserPostAdd$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["UserPostsActionTypes"].GET_USER_POST_ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) { return _this.networkService.addPost(action.payload, action.imageUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.store.dispatch(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserProfile"]());
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPostAddSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPostAddFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UserPostAddEffect.prototype, "getIsUserPostAdd$", void 0);
    UserPostAddEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], UserPostAddEffect);
    return UserPostAddEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/user-post-comment-delete.effects.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/store/effects/user-post-comment-delete.effects.ts ***!
  \************************************************************************/
/*! exports provided: UserPostDeleteCommentEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostDeleteCommentEffect", function() { return UserPostDeleteCommentEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_news_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserPostDeleteCommentEffect = /** @class */ (function () {
    function UserPostDeleteCommentEffect(actions$, networkService, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.router = router;
        this.store = store;
        this.getIsUserPostCommentDelete$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["UserPostsActionTypes"].GET_USER_POST_COMMENT_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.deleteComment(action.payloadPost, action.payloadComment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.currentUrl = _this.router.url;
            _this.currentUrl === '/network/news' ? _this.store.dispatch(new _actions_news_actions__WEBPACK_IMPORTED_MODULE_9__["GetPosts"]()) :
                data.data.post.author.id === action.payloadComment.author.id ?
                    _this.store.dispatch(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_7__["GetUserProfile"]()) :
                    _this.store.dispatch(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_7__["GetCurrentUserProfile"](data.data.post.author.id));
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostDeleteSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostDeleteFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UserPostDeleteCommentEffect.prototype, "getIsUserPostCommentDelete$", void 0);
    UserPostDeleteCommentEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]])
    ], UserPostDeleteCommentEffect);
    return UserPostDeleteCommentEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/user-post-delete.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/store/effects/user-post-delete.effects.ts ***!
  \****************************************************************/
/*! exports provided: UserPostDeleteEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostDeleteEffect", function() { return UserPostDeleteEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_news_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserPostDeleteEffect = /** @class */ (function () {
    function UserPostDeleteEffect(actions$, networkService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.getIsUserPostDelete$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["UserPostsActionTypes"].GET_USER_POST_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) { return _this.networkService.deletePost(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.store.dispatch(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserProfile"]());
            _this.store.dispatch(new _actions_news_actions__WEBPACK_IMPORTED_MODULE_8__["GetPosts"]());
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPostDeleteSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPostDeleteFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UserPostDeleteEffect.prototype, "getIsUserPostDelete$", void 0);
    UserPostDeleteEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], UserPostDeleteEffect);
    return UserPostDeleteEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/user-posts.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/store/effects/user-posts.effects.ts ***!
  \**********************************************************/
/*! exports provided: UserPostsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsEffect", function() { return UserPostsEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPostsEffect = /** @class */ (function () {
    function UserPostsEffect(actions$, networkService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.router = router;
        this.getIsUserPosts$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_6__["UserPostsActionTypes"].GET_USER_POSTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.getUserPosts(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserPostsSuccess"](data.data.posts);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserPostsFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UserPostsEffect.prototype, "getIsUserPosts$", void 0);
    UserPostsEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserPostsEffect);
    return UserPostsEffect;
}());



/***/ }),

/***/ "./src/app/core/store/effects/user-profile.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/effects/user-profile.effects.ts ***!
  \************************************************************/
/*! exports provided: UserProfileEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileEffect", function() { return UserProfileEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserProfileEffect = /** @class */ (function () {
    function UserProfileEffect(actions$, networkService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.store = store;
        this.getIsUserProfile$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["UserProfileActionTypes"].GET_USER_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.networkService.getUserProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            sessionStorage.setItem('userProfile', JSON.stringify(data.data.user));
            _this.store.dispatch(new _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserPosts"](data.data.user.id));
            return new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserProfileSuccess"](data.data.user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserProfileFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], UserProfileEffect.prototype, "getIsUserProfile$", void 0);
    UserProfileEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], UserProfileEffect);
    return UserProfileEffect;
}());



/***/ }),

/***/ "./src/app/core/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/*! exports provided: reducers, logger, getIsUserProfile, getIsUpdateUserProfile, getIsCurrentUserProfile, getIsNewPassword, getIsSubscribersCurrent, getIsSubscribersProfile, getIsAddSubscribe, getIsDeleteSubscribe, getIsSubscriptionsProfile, getIsSubscriptionsId, getIsUsers, getPosts, getIsUserPosts, getIsAddUserPost, getIsDeleteUserPost, getIsAddUserPostComment, getIsDeleteUserPostComment, getIsAddLike, getIsAddDislike, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUserProfile", function() { return getIsUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUpdateUserProfile", function() { return getIsUpdateUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCurrentUserProfile", function() { return getIsCurrentUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsNewPassword", function() { return getIsNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsSubscribersCurrent", function() { return getIsSubscribersCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsSubscribersProfile", function() { return getIsSubscribersProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAddSubscribe", function() { return getIsAddSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDeleteSubscribe", function() { return getIsDeleteSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsSubscriptionsProfile", function() { return getIsSubscriptionsProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsSubscriptionsId", function() { return getIsSubscriptionsId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUsers", function() { return getIsUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUserPosts", function() { return getIsUserPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAddUserPost", function() { return getIsAddUserPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDeleteUserPost", function() { return getIsDeleteUserPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAddUserPostComment", function() { return getIsAddUserPostComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDeleteUserPostComment", function() { return getIsDeleteUserPostComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAddLike", function() { return getIsAddLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAddDislike", function() { return getIsAddDislike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _reducers_news_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/news.reducer */ "./src/app/core/store/reducers/news.reducer.ts");
/* harmony import */ var _reducers_password_change_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/password-change.reducer */ "./src/app/core/store/reducers/password-change.reducer.ts");
/* harmony import */ var _reducers_user_profile_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/user-profile.reducer */ "./src/app/core/store/reducers/user-profile.reducer.ts");
/* harmony import */ var _reducers_user_posts_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/user-posts.reducer */ "./src/app/core/store/reducers/user-posts.reducer.ts");
/* harmony import */ var _reducers_subscribers_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/subscribers.reducer */ "./src/app/core/store/reducers/subscribers.reducer.ts");








var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
    post: _reducers_news_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    passwordChange: _reducers_password_change_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    userProfile: _reducers_user_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    userPosts: _reducers_user_posts_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
    subscribers: _reducers_subscribers_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    users: _reducers_user_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('action', action);
        console.log('state', state);
        return reducer(state, action);
    };
}
var getIsUserProfile = function (state) { return state.userProfile.isUserProfile; };
var getIsUpdateUserProfile = function (state) { return state.userProfile.isUpdateUserProfile; };
var getIsCurrentUserProfile = function (state) { return state.userProfile.isCurrentUserProfile; };
var getIsNewPassword = function (state) { return state.passwordChange.isNewPass; };
var getIsSubscribersCurrent = function (state) { return state.subscribers.isGetSubscribersCurrent; };
var getIsSubscribersProfile = function (state) { return state.subscribers.isGetSubscribersProfile; };
var getIsAddSubscribe = function (state) { return state.subscribers.isAddSubscribe; };
var getIsDeleteSubscribe = function (state) { return state.subscribers.isDeleteSubscribe; };
var getIsSubscriptionsProfile = function (state) { return state.subscribers.isGetSubscriptionsProfile; };
var getIsSubscriptionsId = function (state) { return state.subscribers.isGetSubscriptionsId; };
var getIsUsers = function (state) { return state.users.isUsers; };
// export const getNewsState = createFeatureSelector<fromNews.State>('news');
var getPosts = function (state) { return state.post.posts; };
var getIsUserPosts = function (state) { return state.userPosts.isUserPosts; };
var getIsAddUserPost = function (state) { return state.userPosts.isAddUserPost; };
var getIsDeleteUserPost = function (state) { return state.userPosts.isDeleteUserPost; };
var getIsAddUserPostComment = function (state) { return state.userPosts.isUserPostAddComment; };
var getIsDeleteUserPostComment = function (state) { return state.userPosts.isUserPostCommentDelete; };
var getIsAddLike = function (state) { return state.userPosts.isAddLike; };
var getIsAddDislike = function (state) { return state.userPosts.isAddDislike; };
// export const getTodosSelector = createSelector(
//     getNewsState,
//     getPosts,
// );
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? [logger]
    : [];


/***/ }),

/***/ "./src/app/core/store/reducers/news.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/reducers/news.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_news_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    posts: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_news_actions__WEBPACK_IMPORTED_MODULE_0__["NewsActionTypes"].GET_POSTS_SUCCESS:
            return __assign({}, state, { posts: action.payload.data.posts });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/store/reducers/password-change.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/store/reducers/password-change.reducer.ts ***!
  \****************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_password_change_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/password-change.actions */ "./src/app/core/store/actions/password-change.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isNewPass: {},
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_password_change_actions__WEBPACK_IMPORTED_MODULE_0__["PasswordChangesActionTypes"].GET_PASSWORD_SUCCESS:
            return __assign({}, state, { isNewPass: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/store/reducers/subscribers.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/reducers/subscribers.reducer.ts ***!
  \************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isAddSubscribe: {},
    isDeleteSubscribe: {},
    isGetSubscribersProfile: [],
    isGetSubscribersCurrent: [],
    isGetSubscriptionsProfile: [],
    isGetSubscriptionsId: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__["SubscribersActionTypes"].ADD_SUBSCRIBE_SUCCESS:
            return __assign({}, state, { isAddSubscribe: action.payload });
        case _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__["SubscribersActionTypes"].GET_SUBSCRIBERS_ID_SUCCESS:
            return __assign({}, state, { isGetSubscribersCurrent: action.payload });
        case _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__["SubscribersActionTypes"].GET_SUBSCRIBERS_PROFILE_SUCCESS:
            return __assign({}, state, { isGetSubscribersProfile: action.payload });
        case _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__["SubscribersActionTypes"].DELETE_SUBSCRIBE_SUCCESS:
            return __assign({}, state, { isDeleteSubscribe: action.payload });
        case _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__["SubscribersActionTypes"].GET_SUBSCRIPTIONS_PROFILE_SUCCESS:
            return __assign({}, state, { isGetSubscriptionsProfile: action.payload });
        case _actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_0__["SubscribersActionTypes"].GET_SUBSCRIPTIONS_ID_SUCCESS:
            return __assign({}, state, { isGetSubscriptionsId: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/store/reducers/user-posts.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/store/reducers/user-posts.reducer.ts ***!
  \***********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isUserPosts: [],
    isAddUserPost: {},
    isDeleteUserPost: {},
    isUserPostAddComment: {},
    isUserPostCommentDelete: {},
    isAddLike: {},
    isAddDislike: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].GET_USER_POSTS_SUCCESS:
            return __assign({}, state, { isUserPosts: action.payload });
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].GET_USER_POST_ADD_SUCCESS:
            return __assign({}, state, { isAddUserPost: action.payload });
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].GET_USER_POST_DELETE_SUCCESS:
            return __assign({}, state, { isDeleteUserPost: action.payload });
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].GET_USER_POST_ADD_COMMENT_SUCCESS:
            return __assign({}, state, { isUserPostAddComment: action.payload });
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].GET_USER_POST_COMMENT_DELETE_SUCCESS:
            return __assign({}, state, { isUserPostCommentDelete: action.payload });
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].ADD_LIKE_SUCCESS:
            return __assign({}, state, { isAddLike: action.payload });
        case _actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_0__["UserPostsActionTypes"].ADD_DISLIKE_SUCCESS:
            return __assign({}, state, { isAddDislike: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/store/reducers/user-profile.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/store/reducers/user-profile.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isUserProfile: {},
    isCurrentUserProfile: {},
    isUsers: [],
    isUpdateUserProfile: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActionTypes"].GET_USER_PROFILE_SUCCESS:
            return __assign({}, state, { isUserProfile: action.payload });
        case _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActionTypes"].GET_CURRENT_USER_PROFILE_SUCCESS:
            return __assign({}, state, { isCurrentUserProfile: action.payload });
        case _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActionTypes"].GET_USERS_SUCCESS:
            return __assign({}, state, { isUsers: action.payload });
        case _actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActionTypes"].PUT_UPDATE_PROFILE_SUCCESS:
            return __assign({}, state, { isUserProfile: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/store/store.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/store/store.module.ts ***!
  \********************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/app/core/store/index.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_news_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/news.effects */ "./src/app/core/store/effects/news.effects.ts");
/* harmony import */ var _effects_password_change_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/password-change.effects */ "./src/app/core/store/effects/password-change.effects.ts");
/* harmony import */ var _effects_user_profile_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/user-profile.effects */ "./src/app/core/store/effects/user-profile.effects.ts");
/* harmony import */ var _effects_current_user_profile_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/current-user-profile.effects */ "./src/app/core/store/effects/current-user-profile.effects.ts");
/* harmony import */ var _effects_user_posts_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/user-posts.effects */ "./src/app/core/store/effects/user-posts.effects.ts");
/* harmony import */ var _effects_user_post_add_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/user-post-add.effects */ "./src/app/core/store/effects/user-post-add.effects.ts");
/* harmony import */ var _effects_add_subscribe_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/add-subscribe.effects */ "./src/app/core/store/effects/add-subscribe.effects.ts");
/* harmony import */ var _effects_get_current_subscribers_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./effects/get-current-subscribers.effects */ "./src/app/core/store/effects/get-current-subscribers.effects.ts");
/* harmony import */ var _effects_get_profile_subscribers_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./effects/get-profile-subscribers.effects */ "./src/app/core/store/effects/get-profile-subscribers.effects.ts");
/* harmony import */ var _effects_delete_subscribe_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/delete-subscribe.effects */ "./src/app/core/store/effects/delete-subscribe.effects.ts");
/* harmony import */ var _effects_get_profile_subscrirtions_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/get-profile-subscrirtions.effects */ "./src/app/core/store/effects/get-profile-subscrirtions.effects.ts");
/* harmony import */ var _effects_get_users_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/get-users.effects */ "./src/app/core/store/effects/get-users.effects.ts");
/* harmony import */ var _effects_user_post_delete_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/user-post-delete.effects */ "./src/app/core/store/effects/user-post-delete.effects.ts");
/* harmony import */ var _effects_user_post_add_comment_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/user-post-add-comment.effects */ "./src/app/core/store/effects/user-post-add-comment.effects.ts");
/* harmony import */ var _effects_user_post_comment_delete_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effects/user-post-comment-delete.effects */ "./src/app/core/store/effects/user-post-comment-delete.effects.ts");
/* harmony import */ var _effects_get_current_subscrirtions_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effects/get-current-subscrirtions.effects */ "./src/app/core/store/effects/get-current-subscrirtions.effects.ts");
/* harmony import */ var _effects_add_like_post_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./effects/add-like-post.effects */ "./src/app/core/store/effects/add-like-post.effects.ts");
/* harmony import */ var _effects_add_dislike_post_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./effects/add-dislike-post.effects */ "./src/app/core/store/effects/add-dislike-post.effects.ts");
/* harmony import */ var _effects_update_user_profile_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./effects/update-user-profile.effects */ "./src/app/core/store/effects/update-user-profile.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppStoreModule = /** @class */ (function () {
    function AppStoreModule() {
    }
    AppStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_index__WEBPACK_IMPORTED_MODULE_2__["reducers"], { metaReducers: _index__WEBPACK_IMPORTED_MODULE_2__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({ name: 'NgRx Demo', logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([
                    _effects_news_effects__WEBPACK_IMPORTED_MODULE_7__["NewsEffects"],
                    _effects_password_change_effects__WEBPACK_IMPORTED_MODULE_8__["PasswordChangeEffect"],
                    _effects_user_profile_effects__WEBPACK_IMPORTED_MODULE_9__["UserProfileEffect"],
                    _effects_current_user_profile_effects__WEBPACK_IMPORTED_MODULE_10__["CurrentUserProfileEffect"],
                    _effects_user_posts_effects__WEBPACK_IMPORTED_MODULE_11__["UserPostsEffect"],
                    _effects_user_post_add_effects__WEBPACK_IMPORTED_MODULE_12__["UserPostAddEffect"],
                    _effects_user_post_delete_effects__WEBPACK_IMPORTED_MODULE_19__["UserPostDeleteEffect"],
                    _effects_user_post_add_comment_effects__WEBPACK_IMPORTED_MODULE_20__["UserPostAddCommentEffect"],
                    _effects_user_post_comment_delete_effects__WEBPACK_IMPORTED_MODULE_21__["UserPostDeleteCommentEffect"],
                    _effects_add_subscribe_effects__WEBPACK_IMPORTED_MODULE_13__["AddSubscribeEffect"],
                    _effects_get_current_subscribers_effects__WEBPACK_IMPORTED_MODULE_14__["GetSubscribersIdEffect"],
                    _effects_get_profile_subscribers_effects__WEBPACK_IMPORTED_MODULE_15__["GetSubscribersProfileEffect"],
                    _effects_delete_subscribe_effects__WEBPACK_IMPORTED_MODULE_16__["DeleteSubscribeEffect"],
                    _effects_get_profile_subscrirtions_effects__WEBPACK_IMPORTED_MODULE_17__["GetSubscriptionsProfileEffect"],
                    _effects_get_users_effects__WEBPACK_IMPORTED_MODULE_18__["GetUsersEffect"],
                    _effects_get_current_subscrirtions_effects__WEBPACK_IMPORTED_MODULE_22__["GetSubscriptionsIdEffect"],
                    _effects_add_like_post_effects__WEBPACK_IMPORTED_MODULE_23__["AddLikeEffect"],
                    _effects_add_dislike_post_effects__WEBPACK_IMPORTED_MODULE_24__["AddDislikeEffect"],
                    _effects_update_user_profile_effects__WEBPACK_IMPORTED_MODULE_25__["UpdateUserProfileEffect"]
                ])
            ]
        })
    ], AppStoreModule);
    return AppStoreModule;
}());



/***/ }),

/***/ "./src/app/news/components/search/search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/news/components/search/search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header>   </app-header>\r\n<div class=\"row\">\r\n  <form class=\"col s12\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s6\">\r\n        <i class=\"material-icons prefix\">people</i>\r\n        <textarea id=\"icon_prefix2\" class=\"materialize-textarea\"></textarea>\r\n        <label for=\"icon_prefix2\">Search user</label>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<app-footer> </app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/news/components/search/search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/news/components/search/search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/news/components/search/search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/news/components/search/search.component.ts ***!
  \************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/news/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/news/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/news/containers/post-wrapper/post-wrapper.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/news/containers/post-wrapper/post-wrapper.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\r\n<div class =\"wrapper\">\r\n<!-- <app-add-new-post></app-add-new-post> -->\r\n<ul class=\"news\">\r\n    <button class=\"btn-main\" *ngIf = \"!allPosts\" (click)=\"switchPosts()\">Show all</button>\r\n    <button  class=\"btn-main\" *ngIf = \"allPosts\" (click)=\"switchPostsSubscription()\">Posts of subscriptions</button>\r\n    <div *ngIf = \"allPosts\">\r\n       <div *ngFor= \"let itemPost of userPosts | async; let i = index\">\r\n           \r\n            <app-item-post\r\n\r\n             [item]=\"itemPost\"\r\n              [itemIndex]=\"i\"\r\n              (deleteEvt) = \"deleteHandler($event)\"\r\n              >\r\n            </app-item-post>\r\n    </div>\r\n    </div>\r\n    <div *ngIf = \"!allPosts\">\r\n        <!-- <ng-template #subscriptionPost> -->\r\n        <div *ngFor= \"let itemPost of (userPosts | async ) | filterPost; let i = index\">\r\n\r\n \r\n            <app-item-post\r\n             [item]=\"itemPost\"\r\n              [itemIndex]=\"i\"\r\n              (deleteEvt) = \"deleteHandler($event)\"\r\n              >\r\n            </app-item-post>\r\n        </div>\r\n        <!-- </ng-template> -->\r\n        </div>\r\n        </ul>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!-- itemPost?.author.id -->"

/***/ }),

/***/ "./src/app/news/containers/post-wrapper/post-wrapper.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/news/containers/post-wrapper/post-wrapper.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  margin-left: 25%;\n  margin-right: 25%; }\n\n.btn-main {\n  margin-left: 30px;\n  background-color: #09948d;\n  border-radius: 30px;\n  border: none;\n  padding: 7px 25px;\n  color: #fff;\n  transition: 1s;\n  margin-bottom: 15px; }\n\n.btn-main:hover {\n  cursor: pointer;\n  background: #00FFFF; }\n"

/***/ }),

/***/ "./src/app/news/containers/post-wrapper/post-wrapper.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/news/containers/post-wrapper/post-wrapper.component.ts ***!
  \************************************************************************/
/*! exports provided: PostWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWrapperComponent", function() { return PostWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store_actions_news_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/actions/news.actions */ "./src/app/core/store/actions/news.actions.ts");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/store/actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostWrapperComponent = /** @class */ (function () {
    // private isUserProfileSubscription: Subscription;
    // public userProfile: UserProfileModel;
    function PostWrapperComponent(store, service) {
        this.store = store;
        this.service = service;
        this.allPosts = true;
        this.userPosts = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getPosts"]));
    }
    PostWrapperComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _core_store_actions_news_actions__WEBPACK_IMPORTED_MODULE_2__["GetPosts"]());
    };
    PostWrapperComponent.prototype.deleteHandler = function (id) {
        this.store.dispatch(new _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserPostDelete"](id));
    };
    PostWrapperComponent.prototype.switchPosts = function () {
        this.allPosts = true;
    };
    PostWrapperComponent.prototype.switchPostsSubscription = function () {
        this.allPosts = false;
    };
    PostWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-wrapper',
            template: __webpack_require__(/*! ./post-wrapper.component.html */ "./src/app/news/containers/post-wrapper/post-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./post-wrapper.component.scss */ "./src/app/news/containers/post-wrapper/post-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]])
    ], PostWrapperComponent);
    return PostWrapperComponent;
}());



/***/ }),

/***/ "./src/app/news/containers/search-wrapper/search-wrapper.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/news/containers/search-wrapper/search-wrapper.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>   </app-header>\r\n<div class = \"search_wrapper\">\r\n<div class=\"row\">\r\n  <form class=\"col s12\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s6\">\r\n        <i class=\"material-icons prefix\">people</i>\r\n        <input type=\"text\" id=\"search\" name=\"search\" (keyup)=\"searchStr$.next($event.target.value)\" placeholder=\"Search user\"  >\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n    <div class=\"row\"> \r\n      <app-card-of-user *ngFor = \"let u of users; let i = index\"\r\n      [user]=\"u\" [index]=\"i\"\r\n      (viewEvt)=\"onViewSubscribeUser($event)\"\r\n      (addEvt)=\"onAddAsFriend($event)\"\r\n      [btnChangeFollow]=\"btnChangeFollow\"\r\n      [btnChangeDelete]=\"btnChangeDelete\">\r\n      </app-card-of-user>\r\n    </div>\r\n</div>\r\n<app-footer> </app-footer>\r\n"

/***/ }),

/***/ "./src/app/news/containers/search-wrapper/search-wrapper.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/news/containers/search-wrapper/search-wrapper.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/news/containers/search-wrapper/search-wrapper.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/news/containers/search-wrapper/search-wrapper.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapperComponent", function() { return SearchWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/debounceTime */ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/store/actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchWrapperComponent = /** @class */ (function () {
    function SearchWrapperComponent(networkService, router, store) {
        var _this = this;
        this.networkService = networkService;
        this.router = router;
        this.store = store;
        this.searchStr$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnChangeFollow = true;
        this.btnChangeDelete = false;
        this.isUsersSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_7__["getIsUsers"])).subscribe(function (data) { return _this.users = data; });
    }
    SearchWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_8__["GetUsers"]('a'));
        this.searchStr$.pipe(Object(rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (str) { return _this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_8__["GetUsers"](str)); });
    };
    SearchWrapperComponent.prototype.onViewSubscribeUser = function (item) {
        this.networkService.onViewSubscribeUser(item._id);
    };
    SearchWrapperComponent.prototype.onAddAsFriend = function (item) {
        this.networkService.onAddAsFriend(item._id);
    };
    SearchWrapperComponent.prototype.ngOnDestroy = function () {
        this.isUsersSubscription && this.isUsersSubscription.unsubscribe();
    };
    SearchWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-wrapper',
            template: __webpack_require__(/*! ./search-wrapper.component.html */ "./src/app/news/containers/search-wrapper/search-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./search-wrapper.component.scss */ "./src/app/news/containers/search-wrapper/search-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SearchWrapperComponent);
    return SearchWrapperComponent;
}());



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_post_wrapper_post_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/post-wrapper/post-wrapper.component */ "./src/app/news/containers/post-wrapper/post-wrapper.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/news/components/search/search.component.ts");
/* harmony import */ var _containers_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/search-wrapper/search-wrapper.component */ "./src/app/news/containers/search-wrapper/search-wrapper.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes_filter_post_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pipes/filter-post.pipe */ "./src/app/shared/pipes/filter-post.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            declarations: [
                _containers_post_wrapper_post_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["PostWrapperComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                _containers_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["SearchWrapperComponent"],
                _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"],
                _shared_pipes_filter_post_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPostPipe"]
            ],
            exports: [
                _containers_post_wrapper_post_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["PostWrapperComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                _containers_search_wrapper_search_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["SearchWrapperComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/register/components/alert/alert.component.html":
/*!****************************************************************!*\
  !*** ./src/app/register/components/alert/alert.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \r\n\t*ngIf=\"message\" \r\n\t[ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\"\r\n\tclass=\"alertMessage\">\r\n\t<div class=\"\" (click)=\"deleteMassegeAlert(true)\">\r\n\t\t<i class=\"fa fa-times did\" ></i>\r\n\t</div>\r\n\t{{message.text}}\r\n</div>"

/***/ }),

/***/ "./src/app/register/components/alert/alert.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/register/components/alert/alert.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertMessage {\n  position: fixed;\n  color: #27aae1;\n  background: #f1f2f2;\n  z-index: 100;\n  width: 60%;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);\n  border-radius: 8px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%);\n  padding: 10px 15px 10px 15px;\n  z-index: 100;\n  margin-top: 100px; }\n\n.did {\n  color: #27aae1;\n  float: right; }\n\n.did:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/register/components/alert/alert.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/register/components/alert/alert.component.ts ***!
  \**************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/alert.service */ "./src/app/register/service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(registerService, alertService) {
        this.registerService = registerService;
        this.alertService = alertService;
        this.changeLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.deleteMassegeAlert = function () {
        this.changeLogin.emit();
        this.message = false;
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "changeLogin", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/register/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/register/components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/register/helpers/error.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/register/helpers/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/alert.service */ "./src/app/register/service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(registerService, alertService) {
        this.registerService = registerService;
        this.alertService = alertService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // logout if 401 response returned from api
                // this.registerService.logout();
                // location.reload(true);
                // this.alertService.error('The email or password entered
                // are not the same as those stored in our database. Check that the entered data is correct and try again.', true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _service_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/register/helpers/jwt.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/helpers/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/register.service */ "./src/app/register/service/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(registerService) {
        this.registerService = registerService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var permissionToEnter = this.registerService.permissionToEnterValue;
        if (permissionToEnter && permissionToEnter.data.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + permissionToEnter.data.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/register/service/alert.service.ts":
/*!***************************************************!*\
  !*** ./src/app/register/service/alert.service.ts ***!
  \***************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/register/service/register.service.ts":
/*!******************************************************!*\
  !*** ./src/app/register/service/register.service.ts ***!
  \******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = /** @class */ (function () {
    function RegisterService(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = 'https://s-network.herokuapp.com/api/v1';
        this.permissionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('permissionToEnter')));
        this.permissionSubject.asObservable();
    }
    Object.defineProperty(RegisterService.prototype, "permissionToEnterValue", {
        get: function () {
            return JSON.parse(sessionStorage.getItem('permissionToEnter'));
        },
        enumerable: true,
        configurable: true
    });
    RegisterService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + "/entries/register", user);
    };
    RegisterService.prototype.login = function (body) {
        return this.http.post(this.apiUrl + "/entries/login", body);
    };
    RegisterService.prototype.passwordRecovery = function (body) {
        return this.http.post(this.apiUrl + "/entries/forgot_password", body);
    };
    RegisterService.prototype.logout = function () {
        sessionStorage.clear();
        this.permissionSubject.next(null);
        this.router.navigate(['/register']);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/shared/directives/network.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/network.directive.ts ***!
  \********************************************************/
/*! exports provided: NetworkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDirective", function() { return NetworkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkDirective = /** @class */ (function () {
    function NetworkDirective() {
    }
    NetworkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNetwork]'
        }),
        __metadata("design:paramtypes", [])
    ], NetworkDirective);
    return NetworkDirective;
}());



/***/ }),

/***/ "./src/app/shared/guards/register.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/guards/register.guard.ts ***!
  \*************************************************/
/*! exports provided: RegisterGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuard", function() { return RegisterGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../register/service/register.service */ "./src/app/register/service/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(router, registerService) {
        this.router = router;
        this.registerService = registerService;
    }
    RegisterGuard.prototype.canActivate = function (route, state) {
        var permissionToEnter = this.registerService.permissionToEnterValue;
        if (permissionToEnter && permissionToEnter.data.token) {
            return true;
        }
        this.router.navigate(['/register'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    RegisterGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "./src/app/shared/pipes/custom.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/custom.pipe.ts ***!
  \*********************************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomPipe = /** @class */ (function () {
    function CustomPipe() {
    }
    CustomPipe.prototype.transform = function (value, args) {
        return null;
    };
    CustomPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'custom'
        })
    ], CustomPipe);
    return CustomPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter-post.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/filter-post.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterPostPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPostPipe", function() { return FilterPostPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store */ "./src/app/core/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterPostPipe = /** @class */ (function () {
    function FilterPostPipe(store) {
        var _this = this;
        this.store = store;
        this.isUserSubscriptionsProfileSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_2__["getIsSubscriptionsProfile"])).subscribe(function (isUserSubscription) { _this.userSubscription = isUserSubscription; });
    }
    FilterPostPipe.prototype.transform = function (userPosts) {
        return this.compare(userPosts, this.userSubscription);
    };
    FilterPostPipe.prototype.compare = function (arr1, arr2) {
        var finallyArray = [];
        arr1.forEach(function (e1) { return arr2.forEach(function (e2) {
            if (e1.author.id === e2.id) {
                finallyArray.push(e1);
            }
        }); });
        return finallyArray;
    };
    FilterPostPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterPost'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FilterPostPipe);
    return FilterPostPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (users, value) {
        return users &&
            users.filter(function (user) {
                return user.name.includes(value) || user.surname.includes(value);
            });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/network.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/network.service.ts ***!
  \****************************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/store/actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _register_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../register/service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/store/actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/store/actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NetworkService = /** @class */ (function () {
    function NetworkService(http, store, registerService) {
        this.http = http;
        this.store = store;
        this.registerService = registerService;
        this.addPostSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userProfileСontrol = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('profile');
        this.apiUrl = 'https://s-network.herokuapp.com/api/v1';
        this.defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW8JSKU4Swud_MeCE1rN7cayv8RtnyzFxf6rZzh_g9M-b6dhqGA';
    }
    NetworkService.prototype.logout = function () {
        this.registerService.logout();
    };
    // REQUESTS PROFILE
    NetworkService.prototype.getUserProfile = function () {
        return this.http.get(this.apiUrl + "/profile");
    };
    NetworkService.prototype.getCurrentUserProfile = function (id) {
        return this.http.get(this.apiUrl + "/profile/" + id);
    };
    NetworkService.prototype.resetPassword = function (reset) {
        return this.http.post(this.apiUrl + "/entries/reset_password", reset);
    };
    NetworkService.prototype.addSubscribe = function (id) {
        return this.http.post(this.apiUrl + "/profile/" + id + "/subscribe", id);
    };
    NetworkService.prototype.deleteSubscribe = function (id) {
        return this.http.post(this.apiUrl + "/profile/" + id + "/unsubscribe", id);
    };
    NetworkService.prototype.getUsersSubscribersProfile = function () {
        return this.http.get(this.apiUrl + "/profile/subscribers");
    };
    NetworkService.prototype.getUsersSubscribersId = function (id) {
        return this.http.get(this.apiUrl + "/profile/" + id + "/subscribers");
    };
    NetworkService.prototype.profileSubjObservable = function () {
        return this.userProfileСontrol.asObservable();
    };
    NetworkService.prototype.profileСhange = function (params) {
        this.userProfileСontrol.next(params);
    };
    NetworkService.prototype.getUsersSubscriptionsProfile = function () {
        return this.http.get(this.apiUrl + "/profile/subscriptions");
    };
    NetworkService.prototype.getUsersSubscriptionsId = function (id) {
        return this.http.get(this.apiUrl + "/profile/" + id + "/subscriptions");
    };
    NetworkService.prototype.getUsersSearch = function (term) {
        return this.http.get(this.apiUrl + "/profile/search?fullname=" + term);
    };
    /////////////////////////////////// REQUESTS FOR POSTS    //////////////////////////////////
    NetworkService.prototype.addLikePost = function (id) {
        return this.http.put(this.apiUrl + "/posts/" + id + "/like", id);
    };
    NetworkService.prototype.addDislikePost = function (id) {
        return this.http.put(this.apiUrl + "/posts/" + id + "/dislike", id);
    };
    //////////////////    METHODS   CARD USER    ////////////////////////////////////////////////
    NetworkService.prototype.onViewSubscribeUser = function (id) {
        this.profileСhange(id);
        this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetCurrentUserProfile"](id));
    };
    NetworkService.prototype.onAddAsFriend = function (id) {
        this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_6__["AddSubscribe"](id));
    };
    NetworkService.prototype.onRemoveFromFriends = function (id) {
        this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteSubscribe"](id));
    };
    /////////////////////////////////// METHODS FOR POSTS    //////////////////////////////////
    NetworkService.prototype.like = function (id) {
        this.store.dispatch(new _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_7__["AddLike"](id));
    };
    NetworkService.prototype.dislike = function (id) {
        this.store.dispatch(new _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_7__["AddDislike"](id));
    };
    /////////////////////////////////// METHODS END REQUESTS  FOR UPDATE PROFILE /////////////////////////////////////////
    NetworkService.prototype.putUpdateProfile = function (data) {
        return this.http.put(this.apiUrl + "/profile", data);
    };
    NetworkService.prototype.updateProfile = function (data) {
        this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["PutUpdateProfile"](data));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////
    NetworkService.prototype.uploadPhotoUser = function (selectedFile) {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('image', selectedFile, selectedFile.name);
        this.http.post(this.apiUrl + "/profile/upload_avatar", uploadData, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            _this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserProfile"]());
        });
    };
    NetworkService.prototype.getPosts = function () {
        return this.http.get(this.apiUrl + "/posts");
    };
    NetworkService.prototype.getUserPosts = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('userId', userId);
        return this.http.get(this.apiUrl + "/posts", { params: params });
    };
    NetworkService.prototype.deletePost = function (id) {
        return this.http.delete(this.apiUrl + "/posts/" + id);
    };
    NetworkService.prototype.addComment = function (idPost, comment) {
        var commentText = {
            'text': comment.text
        };
        return this.http.post(this.apiUrl + "/posts/" + idPost + "/comment", commentText);
    };
    NetworkService.prototype.deleteComment = function (post, comment) {
        var idPost = post.id;
        var idComment = comment._id;
        console.log("Ghbdtn", comment);
        return this.http.delete(this.apiUrl + "/posts/" + idPost + "/comment/" + idComment);
    };
    NetworkService.prototype.getAddPostObservable = function () {
        return this.addPostSubject.asObservable();
    };
    NetworkService.prototype.addPost = function (post, selectedFile) {
        var postUser = JSON.stringify(post);
        var uploadData = new FormData();
        uploadData.append('data', postUser);
        // const uploadImage = new FormData();
        uploadData.append('image', selectedFile, selectedFile.name);
        return this.http.post(this.apiUrl + "/posts", uploadData);
    };
    NetworkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _register_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]])
    ], NetworkService);
    return NetworkService;
}());



/***/ }),

/***/ "./src/app/user/containers/add-new-post/add-new-post.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user/containers/add-new-post/add-new-post.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-post\">\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmitNewPost(post)\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <img\r\n          width=\"40\"\r\n          height=\"40\"\r\n          [src]=\" post?.author.avatarUrl || defaultAvatar\"\r\n          alt=\"\"\r\n          class=\"profile-photo-md\"\r\n        />\r\n        <textarea\r\n          type=\"text\"\r\n          id=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"content\"\r\n          name=\"text\"\r\n          #text=\"ngModel\"\r\n          cols=\"30\"\r\n          rows=\"1\"\r\n          placeholder=\"Write what you wish\"\r\n          required\r\n        ></textarea>\r\n      </div>\r\n      <img [src]=\" post?.imageUrl\" style=\" height: 3em; cursor: pointer\" (click)=\"Image.click()\" />\r\n      <input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event)\" style=\"display:none\" />\r\n      <div class=\"tools\">\r\n        <button type=\"submit\" class=\"btn-main\" [disabled]=\"Image.value == '' || !f.valid\">Publish</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- (change) = \"handleFileInput($event.target.files)\" -->\r\n"

/***/ }),

/***/ "./src/app/user/containers/add-new-post/add-new-post.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/containers/add-new-post/add-new-post.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  display: flex;\n  justify-content: space-around;\n  width: 75%; }\n\n.tools {\n  width: 10%;\n  display: flex;\n  align-items: center; }\n\n.create-post {\n  margin-left: 20%; }\n\n.comment {\n  margin-left: 10px;\n  width: 95%; }\n\n.row {\n  padding-top: 25px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\nimg.profile-photo-md {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%; }\n\ntextarea {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px; }\n\n.form-control {\n  background: #fff;\n  border: 1px solid #f1f2f2;\n  box-shadow: none;\n  border-radius: 4px;\n  color: #939598;\n  width: 80%;\n  min-height: 50px; }\n\n.btn-main {\n  background-color: #09948d;\n  border-radius: 30px;\n  border: none;\n  padding: 7px 25px;\n  color: #fff;\n  transition: 1s; }\n\n.btn-main:hover {\n  background-color: #06746e;\n  cursor: pointer; }\n\n.btn-main:disabled {\n  color: #939598; }\n"

/***/ }),

/***/ "./src/app/user/containers/add-new-post/add-new-post.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/containers/add-new-post/add-new-post.component.ts ***!
  \************************************************************************/
/*! exports provided: AddNewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPostComponent", function() { return AddNewPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/store/actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewPostComponent = /** @class */ (function () {
    function AddNewPostComponent(service, store) {
        var _this = this;
        this.service = service;
        this.store = store;
        this.fileToUpload = null;
        this.post = {
            id: '',
            text: '',
            author: {
                name: '',
                surname: '',
                fullname: '',
                avatarUrl: '',
                id: '8',
            },
            date: new Date(),
            imageUrl: 'assets/img/images-default.png',
        };
        this.defaultAvatar = this.service.defaultAvatar;
        var addPostSubscription = this.service.getAddPostObservable().subscribe(function (data) { return _this.post = data; });
        this.isUserProfileSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsUserProfile"])).subscribe(function (isUserProfile) {
            console.log(isUserProfile);
            if (isUserProfile) {
                _this.post.author.name = isUserProfile.name;
                _this.post.author.surname = isUserProfile.surname;
                _this.post.author.avatarUrl = isUserProfile.avatarUrl;
                _this.post.author.id = isUserProfile.id;
            }
        });
    }
    AddNewPostComponent.prototype.ngOnInit = function () {
    };
    AddNewPostComponent.prototype.handleFileInput = function (elem) {
        var _this = this;
        this.selectedFile = elem.target.files[0];
        var reader = new FileReader();
        reader.onload = function (elem) {
            _this.post.imageUrl = elem.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
    };
    AddNewPostComponent.prototype.onSubmitNewPost = function (f) {
        if (this.content && this.content.includes("<")) {
            this.post.text = this.content.toString().replace("<", "!");
        }
        else {
            this.post.text = this.content;
        }
        this.store.dispatch(new _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPostAdd"](this.post, this.selectedFile));
        this.f.resetForm();
        this.post.imageUrl = ' ../../../../../assets/img/images-default.png';
    };
    AddNewPostComponent.prototype.ngOnDestroy = function () {
        this.isUserProfileSubscription && this.isUserProfileSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], AddNewPostComponent.prototype, "f", void 0);
    AddNewPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-post',
            template: __webpack_require__(/*! ./add-new-post.component.html */ "./src/app/user/containers/add-new-post/add-new-post.component.html"),
            styles: [__webpack_require__(/*! ./add-new-post.component.scss */ "./src/app/user/containers/add-new-post/add-new-post.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AddNewPostComponent);
    return AddNewPostComponent;
}());



/***/ }),

/***/ "./src/app/user/containers/friends-list/friends-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user/containers/friends-list/friends-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class = \"friends_list_wrapper\">\r\n\t<div class=\"row\"> \r\n      \t<app-card-of-user *ngFor = \"let item of userSubscribers$ | async; let i = index\"\r\n      \t\t[user]=\"item\" \r\n      \t\t[index]=\"i\"\r\n      \t\t(viewEvt)=\"onViewSubscribeUser($event)\"\r\n\t\t\t    (addEvt)=\"onAddAsFriend($event)\"\r\n\t\t\t    (removeEvt)=\"onRemoveFromFriends($event)\"\r\n          [btnChangeDelete]=\"btnChangeDelete\"\r\n          [btnChangeFollow]=\"btnChangeFollow\"\r\n      \t\t>\r\n      </app-card-of-user>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/containers/friends-list/friends-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/containers/friends-list/friends-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/user/containers/friends-list/friends-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/containers/friends-list/friends-list.component.ts ***!
  \************************************************************************/
/*! exports provided: FriendsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsListComponent", function() { return FriendsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/actions/subscribe.actions */ "./src/app/core/store/actions/subscribe.actions.ts");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsListComponent = /** @class */ (function () {
    function FriendsListComponent(networkService, store) {
        var _this = this;
        this.networkService = networkService;
        this.store = store;
        this.profileSubscription = this.networkService.profileSubjObservable().subscribe(function (data) {
            _this.profileСhange = data;
            _this.btnChangeDelete = data === 'profile' ? true : false;
            _this.btnChangeFollow = !_this.btnChangeDelete;
            _this.userSubscribers$ = data === 'profile' ?
                _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsSubscriptionsProfile"])) : _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsSubscriptionsId"]));
        });
    }
    FriendsListComponent.prototype.ngOnInit = function () {
        this.profileСhange === 'profile' ?
            this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_2__["GetSubscriptionsProfile"]()) : this.store.dispatch(new _core_store_actions_subscribe_actions__WEBPACK_IMPORTED_MODULE_2__["GetSubscriptionsId"](this.profileСhange));
    };
    FriendsListComponent.prototype.onViewSubscribeUser = function (item) {
        this.networkService.onViewSubscribeUser(item.id);
    };
    FriendsListComponent.prototype.onAddAsFriend = function (item) {
        this.networkService.onAddAsFriend(item.id);
    };
    FriendsListComponent.prototype.onRemoveFromFriends = function (item) {
        this.networkService.onRemoveFromFriends(item.id);
    };
    FriendsListComponent.prototype.ngOnDestroy = function () {
        this.isUsersSubscription && this.isUsersSubscription.unsubscribe();
    };
    FriendsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends-list',
            template: __webpack_require__(/*! ./friends-list.component.html */ "./src/app/user/containers/friends-list/friends-list.component.html"),
            styles: [__webpack_require__(/*! ./friends-list.component.scss */ "./src/app/user/containers/friends-list/friends-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FriendsListComponent);
    return FriendsListComponent;
}());



/***/ }),

/***/ "./src/app/user/containers/info/user-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/containers/info/user-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-profile-container\">\r\n  <!-- <button class=\"test-btn-test\" (click)=\"testFunction()\" style=\"position: fixed; top: 20%; left: 20%;\">TEST</button> -->\r\n  <div class=\"block-title\">\r\n    <div *ngIf=\"owner\" class=\"hing\"><p>You can fill empty fields in settings*</p></div>\r\n    <h4 class=\"grey-text\">Basic info</h4>\r\n    <div class=\"line\"></div>\r\n    <div name=\"basic-info\" id=\"basic-info\" class=\"form-inline\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group half\"><p class=\"label\">First name:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.name; else dash\" class=\"data\">{{ data.name }}</p>\r\n        </div>\r\n        <div class=\"line\"></div>\r\n\r\n        <div class=\"form-group half\"><p class=\"label\">Last name:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.surname; else dash\" class=\"data\">{{ data.surname }}</p>\r\n        </div>\r\n        <div class=\"line\"></div>\r\n\r\n        <div class=\"form-group half\"><p class=\"label\">My date of Birth:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.birthDate; else dash\" class=\"data\">{{ data.birthDate | date: 'mediumDate' }}</p>\r\n        </div>\r\n        <div class=\"line\"></div>\r\n\r\n        <div class=\"form-group half\"><p class=\"label\">Gender:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.gender; else dash\" class=\"data\">{{ data.gender }}</p>\r\n        </div>\r\n        <div class=\"line\"></div>\r\n\r\n        <div class=\"form-group full\">\r\n          <p class=\"data\">About me:</p>\r\n          <div class=\"line\"></div>\r\n\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n          pariatur. Excepteur\r\n        </div>\r\n        <div class=\"line\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"block-title\">\r\n    <h4 class=\"grey-text\"><i class=\"icon ion-ios-book-outline\"></i>Contacts</h4>\r\n    <div class=\"line\"></div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group half\"><p class=\"label\">My email:</p></div>\r\n      <div class=\"form-group half\">\r\n        <p *ngIf=\"data.email; else dash\" class=\"data\">{{ data.email }}</p>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"form-group half\"><p class=\"label\">My phone:</p></div>\r\n      <div class=\"form-group half\">\r\n        <p *ngIf=\"data.contact && data.contact.mobilePhone; else dash\" class=\"data\">{{ data.contact.mobilePhone }}</p>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"form-group half\"><p class=\"label\">My Skype&#8482;:</p></div>\r\n      <div class=\"form-group half\">\r\n        <p *ngIf=\"data.contact && data.contact.skype; else dash\" class=\"data\">{{ data.contact.skype }}</p>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"form-group half\"><p class=\"label\">Town:</p></div>\r\n      <div class=\"form-group half\">\r\n        <p *ngIf=\"data.contact && data.contact.city; else dash\" class=\"data\">{{ data.contact.city }}</p>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"form-group half\"><p class=\"label\">Country:</p></div>\r\n      <div class=\"form-group half\">\r\n        <p *ngIf=\"data.contact && data.contact.country; else dash\" class=\"data\">{{ data.contact.country }}</p>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"form-group half\"><p class=\"label\">Street:</p></div>\r\n      <div class=\"form-group half\">\r\n        <p *ngIf=\"data.contact && data.contact.street; else dash\" class=\"data\">{{ data.contact.street }}</p>\r\n      </div>\r\n      <div class=\"line\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"block-title\">\r\n    <h4 class=\"grey-text\"><i class=\"icon ion-ios-book-outline\"></i>My education</h4>\r\n    <div class=\"line\"></div>\r\n\r\n    <div name=\"education\" id=\"education\" class=\"form-inline\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group half\"><p class=\"label\">School:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.education && data.education.school; else dash\" class=\"data\">{{ data.education.school }}</p>\r\n        </div>\r\n        <div class=\"form-group half\"><p class=\"date-from label\">Period:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.education && data.education.periodOfSchool; else dash\" class=\"date-from data\">\r\n            {{ data.education.periodOfSchool }}\r\n          </p>\r\n        </div>\r\n        <div class=\"line\"></div>\r\n\r\n        <div class=\"form-group half\"><p class=\"label\">University:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.education && data.education.university; else dash\" class=\"data\">\r\n            {{ data.education.university }}\r\n          </p>\r\n        </div>\r\n        <div class=\"form-group half\"><p class=\"date-from label\">Period:</p></div>\r\n        <div class=\"form-group half\">\r\n          <p *ngIf=\"data.education && data.education.periodOfUniversity; else dash\" class=\"date-from data\">\r\n            {{ data.education.periodOfUniversity }}\r\n          </p>\r\n        </div>\r\n        <div class=\"line\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"block-title\">\r\n    <h4 class=\"grey-text\"><i class=\"icon ion-ios-briefcase-outline\"></i>Work Experiences</h4>\r\n    <div class=\"line\"></div>\r\n    <div name=\"work\" id=\"work\" class=\"form-inline\">\r\n      <div *ngIf=\"data.work; else fullDash\" class=\"row\">\r\n        <div *ngFor=\"let work of data.work\" class=\"work-item\">\r\n          <div class=\"form-group half\"><p class=\"label\">Company:</p></div>\r\n          <div class=\"form-group half\">\r\n            <p *ngIf=\"data.work && data.work.company; else dash\" class=\"data\">{{ data.work.company }}</p>\r\n          </div>\r\n\r\n          <div class=\"form-group half\"><p class=\"label\">Country:</p></div>\r\n          <div class=\"form-group half\">\r\n            <p *ngIf=\"data.work && data.work.country; else dash\" class=\"data\">{{ data.work.country }}</p>\r\n          </div>\r\n\r\n          <div class=\"form-group half\"><p class=\"label\">City:</p></div>\r\n          <div class=\"form-group half\">\r\n            <p *ngIf=\"data.work && data.work.city; else dash\" class=\"data\">{{ data.work.city }}</p>\r\n          </div>\r\n\r\n          <div class=\"form-group half\"><p class=\"date-from label\">Period</p></div>\r\n          <div class=\"form-group half\">\r\n            <p *ngIf=\"data.work && data.work.period; else dash\" class=\"date-from data\">{{ data.work.period }}</p>\r\n          </div>\r\n          <div class=\"line\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #dash> <p class=\"data\">---</p> </ng-template>\r\n<ng-template #fullDash>\r\n  <div class=\"form-group full\"><p class=\"data\">---</p></div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/user/containers/info/user-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/containers/info/user-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Edit Profile Contents */\n.data {\n  font-size: 22px;\n  font-style: bold;\n  margin: 0; }\n.label {\n  height: 100%;\n  margin: 0; }\n.form-control {\n  display: block;\n  width: 100%;\n  min-height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-image: none;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  width: 100%;\n  margin: 0 0 8px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: box-shadow .3s, border .3s; }\ntextarea {\n  height: auto; }\n.row {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n.edit-profile-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n.block-title {\n  width: 80%;\n  padding-top: 20px; }\n.line {\n  background: #f1f2f2;\n  height: 1px;\n  width: 100%;\n  margin-bottom: 10px; }\n.edit-profile-container h4 i {\n  margin-right: 15px;\n  color: #27aae1; }\n.edit-block {\n  margin-bottom: 30px;\n  width: 80%; }\n.edit-block .form-group {\n  margin-bottom: 15px; }\n.edit-block select.form-control {\n  background: rgba(0, 0, 0, 0) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAFmwIRTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiVF/18AADA8MCgABi+P//PwNAAIEJoMh/EA0QQDCOAJgAcQACiBHMY2B4D8SCIPpGqBwjQACBZBNAslDlG1iAMgUaqx8xgGggngCTuQBTCRBgIHMuAGX0gTgRaMYCkFKgDpDZB6DigYwglWiCD4FYHlkTA8ximFuB2ABZDIQBlnNe7bEFQjUAAAAASUVORK5CYII=) no-repeat scroll calc(100% - 10px) center/8px auto;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n.grey-text {\n  color: grey;\n  text-align: center; }\n.edit-block ul.interests {\n  margin: 0;\n  margin-bottom: 10px; }\np {\n  font-family: 'Lato', sans-serif;\n  line-height: 26px;\n  color: #6d6e71;\n  font-size: 13px; }\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700; }\n.half {\n  padding: 5px;\n  width: 48%; }\n.full {\n  width: 96%;\n  padding: 5px; }\n.selects {\n  width: 31%; }\n.edit-block ul.interests li {\n  background: #8dc63f;\n  color: #fff;\n  padding: 5px 15px;\n  margin-right: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 40px; }\n.edit-block ul.interests li a {\n  color: #fff; }\n.edit-block ul.interests li a i.icon {\n  font-size: 18px; }\n.edit-block .btn-primary {\n  width: 100%; }\n.gender .custom-label {\n  padding-left: 0; }\n.custom-label {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  position: absolute;\n  top: -20px;\n  left: 7px; }\n/* Toggle Notification Switch */\n.toggle-switch {\n  text-align: right; }\n.toggle-switch .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin-top: 9px; }\n.toggle-switch .switch input {\n  display: none; }\n.toggle-switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f2f2f2;\n  transition: 0.4s; }\n.toggle-switch .slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s; }\ntextarea:active, select:active,\ntextarea:focus, select:focus {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a; }\ninput:checked + .slider {\n  background-color: #8dc63f; }\ninput:focus + .slider {\n  box-shadow: 0 0 1px #8dc63f; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n.slider.round {\n  border-radius: 34px; }\n.slider.round:before {\n  border-radius: 50%; }\n.hing p {\n  color: #26a69a; }\n"

/***/ }),

/***/ "./src/app/user/containers/info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/containers/info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        // this.data.birthDate = new Date(this.data.birbirthDate).toLocaleString();
        // console.log(this.data.birthDate);
    };
    UserInfoComponent.prototype.testFunction = function () {
        console.log(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserInfoComponent.prototype, "owner", void 0);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user/containers/info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/user/containers/info/user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user/containers/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/containers/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\r\n\r\n<div class=\"main-block\">\r\n  <!--\r\n    Timeline\r\n    =================================================\r\n  -->\r\n  <div class=\"timeline\">\r\n    <div class=\"timeline-cover\">\r\n      <div class=\"timeline-nav-bar\">\r\n        <div class=\"profile-info\">\r\n          <img src=\"{{ user$?.avatarUrl || defaultAvatar }}\" alt=\"\" class=\"img-responsive profile-photo\" />\r\n          <input style=\"display: none\" type=\"file\" (change)=\"onFileChanged($event)\" #fileInput />\r\n          <button class=\"btn-main\" (click)=\"fileInput.click()\">Change photo</button>\r\n          <h3>{{ user$?.fullname }}</h3>\r\n          <!-- <p class=\"text-muted\">{{ user$?.fullname }}</p> -->\r\n        </div>\r\n        <div class=\"profile-cont\">\r\n          <div class=\"follow-me\">\r\n            <p *ngIf=\"user$?.subscribers\">Subscribers: {{ user$?.subscribers.length }}</p>\r\n            <p *ngIf=\"user$?.subscriptions\">Subscriptions: {{ user$?.subscriptions.length }}</p>\r\n            <button *ngIf=\"!isOwner\" class=\"btn-main\" (click)=\"addSubscribe()\">Add Friend</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-tab-group class=\"profile-menu\">\r\n      <mat-tab label=\"Timeline\">\r\n        <div id=\"page-contents\">\r\n          <div class=\"main-wrap\">\r\n            <div class=\"main-post-field\">\r\n              <app-add-new-post *ngIf=\"accessToAddPost\"></app-add-new-post>\r\n              <ul class=\"posts-list\">\r\n                <div *ngFor=\"let itemPost of userPosts; let i = index\">\r\n                  <app-item-post\r\n                    [item]=\"itemPost\"\r\n                    [itemIndex]=\"i\"\r\n                    (saveEvt)=\"saveHandler($event)\"\r\n                    (cancelEvt)=\"cancelHandler()\"\r\n                    (deleteEvt)=\"deleteHandler($event)\"\r\n                  >\r\n                  </app-item-post>\r\n                </div>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"User info\"> <app-user-info [owner]=\"isOwner\" [data]=\"user$\"></app-user-info> </mat-tab>\r\n      <mat-tab *ngIf=\"isOwner\" label=\"Settings\"> <app-settings [user]=\"user$\"></app-settings> </mat-tab>\r\n      <mat-tab label=\"Friends\">\r\n        <div class=\"friends-wraper\"><app-friends-list></app-friends-list></div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/user/containers/profile/profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/containers/profile/profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0; }\n\n.ion-thumbs-down:before {\n  content: \"\\f250\"; }\n\n.ion-thumbsup:before {\n  content: \"\\f251\"; }\n\n.btn-main {\n  background-color: #09948d;\n  border-radius: 30px;\n  border: none;\n  padding: 7px 25px;\n  color: #fff; }\n\n.btn-main:hover {\n  cursor: pointer;\n  background: #00FFFF; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  box-shadow: none;\n  background-color: transparent;\n  min-width: 40px; }\n\n.btn:hover, .btn:focus, .btn.focus {\n    background: transparent;\n    color: transparent;\n    text-decoration: none; }\n\n.btn:active, .btn.active {\n    background: transparent;\n    outline: 0;\n    background-image: none;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n\n/*==================================================\r\n    Typography\r\n    ==================================================*/\n\nh3,\nh6 {\n  color: #09948d; }\n\n.text-white {\n  color: #fff; }\n\n.text-white:hover {\n  color: #fff; }\n\n.text-green {\n  color: #8dc63f; }\n\n.text-green:hover {\n  color: #39b54a; }\n\n.text-red {\n  color: #ef4136; }\n\n.text-red:hover {\n  color: #d6100b; }\n\n.profile-link {\n  font-weight: 600; }\n\n.text-muted {\n  color: #939598; }\n\na {\n  color: #09948d; }\n\na:hover {\n  color: #09948c; }\n\na,\na:active,\na:focus {\n  outline: none; }\n\n.following {\n  color: #8dc63f;\n  font-size: 12px;\n  margin-left: 20px; }\n\n.post-fields {\n  margin: auto;\n  margin-top: 40px;\n  width: 80%;\n  max-width: 1000px; }\n\n/*==================================================\r\n    Common\r\n    ==================================================*/\n\n.friends-wraper {\n  width: 75%;\n  max-width: 1200px;\n  margin: auto; }\n\n.form-group {\n  display: flex;\n  justify-content: space-around;\n  min-width: 70%; }\n\n.tools {\n  width: 10%; }\n\n.create-post {\n  margin-left: 0%; }\n\n.comment {\n  margin-left: 10px;\n  width: 95%; }\n\n.posts-list {\n  padding-top: 52px; }\n\n#page-contents {\n  width: 70%;\n  max-width: 1200px;\n  margin: auto; }\n\n#page-contents .main-wrap {\n  display: flex;\n  justify-content: center; }\n\n#page-contents .main-post-field {\n  width: 100%; }\n\nimg.profile-photo {\n  height: 58px;\n  width: 58px;\n  border-radius: 50%; }\n\nimg.profile-photo-md {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%; }\n\nimg.profile-photo-sm {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\nul {\n  padding-left: 15px; }\n\n.line-divider {\n  background: none;\n  height: 1px;\n  border-top: 1px solid #e6e6e6;\n  width: 100%;\n  margin: auto;\n  margin-bottom: 10px; }\n\ntextarea {\n  box-sizing: border-box;\n  width: 100%; }\n\n.custom-label {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 5px; }\n\n.form-control {\n  background: #fff;\n  border: 1px solid #f1f2f2;\n  box-shadow: none;\n  border-radius: 4px;\n  color: #939598;\n  width: 80%;\n  min-height: 50px; }\n\n/*==================================================\r\n  Post Contents CSS\r\n  ==================================================*/\n\n.post-content {\n  background: #f8f8f8;\n  border-radius: 4px;\n  width: 100%;\n  border: 1px solid #f1f2f2;\n  margin-bottom: 20px;\n  overflow: hidden;\n  position: relative; }\n\n.post-content img.post-image,\nvideo.post-video,\n.google-maps {\n  width: 100%;\n  height: auto; }\n\n.post-content .google-maps .map {\n  height: 300px; }\n\n.post-content .post-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 20px; }\n\n.post-content .post-container .post-detail {\n  width: 92%;\n  position: relative; }\n\n.post-content .post-container .post-detail .post-text {\n  line-height: 24px;\n  margin: 0; }\n\n.post-content .post-container .post-detail .reaction {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.post-content .post-container .post-detail .post-comment {\n  display: inline-flex;\n  margin: 10px auto;\n  width: 100%; }\n\n.post-content .post-container .post-detail .post-comment img.profile-photo-sm {\n  margin: 0; }\n\n.post-content .post-container .post-detail .post-comment .form-control {\n  height: 30px;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  margin: 7px 0 0 10px;\n  min-width: 0; }\n\n/*==================================================\r\n    Timeline\r\n    ==================================================*/\n\n.timeline-cover {\n  background: url('1.jpg') no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 360px;\n  border-radius: 0 0 4px 4px;\n  position: relative; }\n\n/*Timeline Menu for Large Screens*/\n\n.timeline-cover .timeline-nav-bar {\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n\n.timeline-cover .timeline-nav-bar .profile-info {\n  position: absolute;\n  text-align: center;\n  padding: 0 20px;\n  top: -199px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column; }\n\n.timeline-cover .timeline-nav-bar .profile-info * {\n  margin-top: 5px; }\n\n.timeline-cover .timeline-nav-bar .profile-info h3 {\n  font-size: 35px; }\n\n.timeline-cover .timeline-nav-bar .profile-info img.profile-photo {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%; }\n\n.timeline-cover .timeline-nav-bar .profile-cont {\n  margin: 0 250px;\n  width: 70%; }\n\n.profile-menu {\n  width: 100%;\n  top: -120px;\n  position: relative;\n  z-index: 1; }\n\n.timeline-cover .timeline-nav-bar .follow-me {\n  width: 35%;\n  margin: 0;\n  position: absolute;\n  right: 15px;\n  top: -120px;\n  color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 9px 15px;\n  line-height: 31px;\n  z-index: 2; }\n\n.timeline-cover .timeline-nav-bar .follow-me li {\n  color: #fff; }\n\n/*==================================================\r\n   Post Date\r\n  ==================================================*/\n\n.timeline .post-content {\n  position: relative;\n  overflow: visible; }\n\n.timeline .post-content::before {\n  content: \"\";\n  position: absolute;\n  background: none;\n  width: 1px;\n  height: 98%;\n  left: -145px;\n  border-left: 2px solid #8dc63f;\n  top: 15px; }\n\n.timeline .post-content .post-date {\n  position: absolute;\n  margin-left: -125px; }\n\n.timeline .post-content .post-date::before {\n  content: \"\";\n  background: #8dc63f;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  left: -30px;\n  top: 10px;\n  border: 2px solid #fff; }\n\n.timeline .post-content img.post-image {\n  border-radius: 4px 4px 0 0; }\n\n/*==================================================\r\n    Profile Album\r\n    ==================================================*/\n\nul.album-photos {\n  padding: 0;\n  margin: 0 auto 20px;\n  display: block;\n  font-size: 0;\n  text-align: center; }\n\nul.album-photos li {\n  list-style: none;\n  display: inline-block;\n  max-width: 194px;\n  padding: 2px; }\n\nul.album-photos li img {\n  max-width: 100%; }\n\n/*==================================================\r\n    Edit Profile\r\n    ==================================================*/\n\n/* Edit Profile Menu */\n\nul.edit-menu {\n  margin-top: 100px;\n  padding: 0 20px; }\n\nul.edit-menu li {\n  list-style: none;\n  border-bottom: 1px solid #f1f2f2;\n  padding: 15px 0;\n  position: relative; }\n\nul.edit-menu li.active::before {\n  content: \"\";\n  background: #8dc63f;\n  width: 2px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: -20px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nul.edit-menu li i.icon {\n  font-size: 16px; }\n\nul.edit-menu li.active i.icon {\n  color: #8dc63f; }\n\nul.edit-menu li a {\n  color: #6d6e71;\n  margin-left: 20px; }\n\nul.edit-menu li.active a {\n  color: #8dc63f; }\n\n@media screen and (max-width: 1024px) {\n  .timeline .post-content::before {\n    display: none; }\n  .timeline .post-content .post-date {\n    display: none; }\n  .create-post {\n    margin-left: 19%; }\n  #page-contents .main-post-field {\n    margin-left: 2%;\n    width: 96%; }\n  .timeline-cover .timeline-nav-bar .follow-me {\n    width: 40%; }\n  .btn-main {\n    margin: 0; } }\n"

/***/ }),

/***/ "./src/app/user/containers/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/containers/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/store/actions/user-posts.actions */ "./src/app/core/store/actions/user-posts.actions.ts");
/* harmony import */ var _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/store/actions/user-profile.actions */ "./src/app/core/store/actions/user-profile.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, store) {
        var _this = this;
        this.service = service;
        this.store = store;
        this.accessToAddPost = false;
        this.defaultAvatar = this.service.defaultAvatar;
        this.isUserPostSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsUserPosts"])).subscribe(function (posts) { return _this.userPosts = posts; });
        this.subscriptionIdUser = this.service.profileSubjObservable().subscribe(function (data) {
            _this.profileСhange = data;
            _this.isOwner = (data === 'profile');
            if (_this.isOwner) {
                _this.isUserProfileSubscription = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsUserProfile"])).subscribe(function (isUserProfile) { return _this.user$ = isUserProfile; });
                _this.accessToAddPost = true;
                _this.store.dispatch(new _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPosts"](_this.user$.id));
            }
            else {
                _this.isCurrentUserSubscription = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_store__WEBPACK_IMPORTED_MODULE_3__["getIsCurrentUserProfile"])).subscribe(function (isCurrentUserProfile) {
                    return _this.user$ = isCurrentUserProfile;
                });
                _this.accessToAddPost = false;
            }
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.isOwner ?
            this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserProfile"]()) : this.store.dispatch(new _core_store_actions_user_profile_actions__WEBPACK_IMPORTED_MODULE_5__["GetCurrentUserProfile"](this.profileСhange));
    };
    ProfileComponent.prototype.addSubscribe = function () {
        this.service.onAddAsFriend(this.user$.id);
    };
    ProfileComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
        this.service.uploadPhotoUser(this.selectedFile);
    };
    ProfileComponent.prototype.deleteHandler = function (id) {
        this.store.dispatch(new _core_store_actions_user_posts_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserPostDelete"](id));
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptionIdUser.unsubscribe();
        this.isUserProfileSubscription && this.isUserProfileSubscription.unsubscribe();
        this.isCurrentUserSubscription && this.isCurrentUserSubscription.unsubscribe();
        this.isUserPostSubscription && this.isUserPostSubscription.unsubscribe();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/containers/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/user/containers/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/containers/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user/containers/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-profile-container\">\r\n  <div class=\"block-title\">\r\n    <h4 class=\"grey-text\"><i class=\"icon ion-android-checkmark-circle\"></i>Edit basic information</h4>\r\n    <div class=\"line\"></div>\r\n    <p>\r\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\r\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate\r\n    </p>\r\n    <div class=\"line\"></div>\r\n  </div>\r\n  <div class=\"edit-block\">\r\n    <form\r\n      [formGroup]=\"basicInfoForm\"\r\n      name=\"basic-info\"\r\n      id=\"basic-info\"\r\n      class=\"form-inline\"\r\n      (ngSubmit)=\"submitBasicInfo()\"\r\n    >\r\n      <div class=\"row\">\r\n        <div class=\"form-group half\">\r\n          <label for=\"firstname\">First name</label>\r\n          <input\r\n            formControlName=\"firstname\"\r\n            id=\"firstname\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"firstname\"\r\n            title=\"Enter first name\"\r\n            placeholder=\"First name\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group half\">\r\n          <label for=\"lastname\" class=\"\">Last name</label>\r\n          <input\r\n            formControlName=\"lastname\"\r\n            id=\"lastname\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"lastname\"\r\n            title=\"Enter last name\"\r\n            placeholder=\"Last name\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"email\">My email</label>\r\n          <input\r\n            formControlName=\"email\"\r\n            id=\"email\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"Email\"\r\n            title=\"Enter Email\"\r\n            placeholder=\"My Email\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- <p class=\"custom-label\"><strong>Date of Birth</strong></p> -->\r\n        <div class=\"form-group half\">\r\n          <label for=\"date\">Date of Birth</label>\r\n          <input formControlName=\"date\" type=\"date\" name=\"date\" id=\"date\">\r\n        </div>\r\n        <div class=\"form-group gender half\">\r\n            <label for=\"gender\">I am a:</label>\r\n            <mat-radio-group formControlName=\"gender\" id=\"gender\" name=\"gender\" class=\"radio-inline\">\r\n              <mat-radio-button class=\"radio-btn\" value=\"male\">Male</mat-radio-button>\r\n              <mat-radio-button class=\"radio-btn\" value=\"female\">Female</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"form-group half\">\r\n          <label for=\"city\"> My city</label>\r\n          <input\r\n            formControlName=\"city\"\r\n            id=\"city\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"city\"\r\n            title=\"Enter city\"\r\n            placeholder=\"Your city\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group half\">\r\n            <label for=\"phone\"> My phone number</label>\r\n            <input\r\n              formControlName=\"phone\"\r\n              id=\"phone\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              name=\"phone\"\r\n              title=\"Enter phone\"\r\n              placeholder=\"Your phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group half\">\r\n              <label for=\"skype\"> My skype number</label>\r\n              <input\r\n                formControlName=\"skype\"\r\n                id=\"skype\"\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                name=\"skype\"\r\n                title=\"Enter skype\"\r\n                placeholder=\"Your skype\"\r\n              />\r\n            </div>\r\n\r\n        <div class=\"form-group half\">\r\n          <label for=\"country\">My country</label>\r\n          <select formControlName=\"country\" class=\"form-control\" id=\"country\" title=\"Enter country\"\r\n          placeholder=\"Your country\">\r\n            <option value=\"country\">Country</option>\r\n            <option value=\"AFG\">Afghanistan</option>\r\n            <option value=\"ALA\">Ƭand Islands</option>\r\n            <option value=\"ALB\">Albania</option>\r\n            <option value=\"DZA\">Algeria</option>\r\n            <option value=\"ASM\">American Samoa</option>\r\n            <option value=\"AND\">Andorra</option>\r\n            <option value=\"AGO\">Angola</option>\r\n            <option value=\"AIA\">Anguilla</option>\r\n            <option value=\"ATA\">Antarctica</option>\r\n            <option value=\"ATG\">Antigua and Barbuda</option>\r\n            <option value=\"ARG\">Argentina</option>\r\n            <option value=\"ARM\">Armenia</option>\r\n            <option value=\"ABW\">Aruba</option>\r\n            <option value=\"AUS\">Australia</option>\r\n            <option value=\"AUT\">Austria</option>\r\n            <option value=\"AZE\">Azerbaijan</option>\r\n            <option value=\"BHS\">Bahamas</option>\r\n            <option value=\"BHR\">Bahrain</option>\r\n            <option value=\"BGD\">Bangladesh</option>\r\n            <option value=\"BRB\">Barbados</option>\r\n            <option value=\"BLR\">Belarus</option>\r\n            <option value=\"BEL\">Belgium</option>\r\n            <option value=\"BLZ\">Belize</option>\r\n            <option value=\"BEN\">Benin</option>\r\n            <option value=\"BMU\">Bermuda</option>\r\n            <option value=\"BTN\">Bhutan</option>\r\n            <option value=\"BOL\">Bolivia, Plurinational State of</option>\r\n            <option value=\"BES\">Bonaire, Sint Eustatius and Saba</option>\r\n            <option value=\"BIH\">Bosnia and Herzegovina</option>\r\n            <option value=\"BWA\">Botswana</option>\r\n            <option value=\"BVT\">Bouvet Island</option>\r\n            <option value=\"BRA\">Brazil</option>\r\n            <option value=\"IOT\">British Indian Ocean Territory</option>\r\n            <option value=\"BRN\">Brunei Darussalam</option>\r\n            <option value=\"BGR\">Bulgaria</option>\r\n            <option value=\"BFA\">Burkina Faso</option>\r\n            <option value=\"BDI\">Burundi</option>\r\n            <option value=\"KHM\">Cambodia</option>\r\n            <option value=\"CMR\">Cameroon</option>\r\n            <option value=\"CAN\">Canada</option>\r\n            <option value=\"CPV\">Cape Verde</option>\r\n            <option value=\"CYM\">Cayman Islands</option>\r\n            <option value=\"CAF\">Central African Republic</option>\r\n            <option value=\"TCD\">Chad</option>\r\n            <option value=\"CHL\">Chile</option>\r\n            <option value=\"CHN\">China</option>\r\n            <option value=\"CXR\">Christmas Island</option>\r\n            <option value=\"CCK\">Cocos (Keeling) Islands</option>\r\n            <option value=\"COL\">Colombia</option>\r\n            <option value=\"COM\">Comoros</option>\r\n            <option value=\"COG\">Congo</option>\r\n            <option value=\"COD\">Congo, the Democratic Republic of the</option>\r\n            <option value=\"COK\">Cook Islands</option>\r\n            <option value=\"CRI\">Costa Rica</option>\r\n            <option value=\"CIV\">C𴥠d'Ivoire</option>\r\n            <option value=\"HRV\">Croatia</option>\r\n            <option value=\"CUB\">Cuba</option>\r\n            <option value=\"CUW\">Cura袯</option>\r\n            <option value=\"CYP\">Cyprus</option>\r\n            <option value=\"CZE\">Czech Republic</option>\r\n            <option value=\"DNK\">Denmark</option>\r\n            <option value=\"DJI\">Djibouti</option>\r\n            <option value=\"DMA\">Dominica</option>\r\n            <option value=\"DOM\">Dominican Republic</option>\r\n            <option value=\"ECU\">Ecuador</option>\r\n            <option value=\"EGY\">Egypt</option>\r\n            <option value=\"SLV\">El Salvador</option>\r\n            <option value=\"GNQ\">Equatorial Guinea</option>\r\n            <option value=\"ERI\">Eritrea</option>\r\n            <option value=\"EST\">Estonia</option>\r\n            <option value=\"ETH\">Ethiopia</option>\r\n            <option value=\"FLK\">Falkland Islands (Malvinas)</option>\r\n            <option value=\"FRO\">Faroe Islands</option>\r\n            <option value=\"FJI\">Fiji</option>\r\n            <option value=\"FIN\">Finland</option>\r\n            <option value=\"FRA\">France</option>\r\n            <option value=\"GUF\">French Guiana</option>\r\n            <option value=\"PYF\">French Polynesia</option>\r\n            <option value=\"ATF\">French Southern Territories</option>\r\n            <option value=\"GAB\">Gabon</option>\r\n            <option value=\"GMB\">Gambia</option>\r\n            <option value=\"GEO\">Georgia</option>\r\n            <option value=\"DEU\">Germany</option>\r\n            <option value=\"GHA\">Ghana</option>\r\n            <option value=\"GIB\">Gibraltar</option>\r\n            <option value=\"GRC\">Greece</option>\r\n            <option value=\"GRL\">Greenland</option>\r\n            <option value=\"GRD\">Grenada</option>\r\n            <option value=\"GLP\">Guadeloupe</option>\r\n            <option value=\"GUM\">Guam</option>\r\n            <option value=\"GTM\">Guatemala</option>\r\n            <option value=\"GGY\">Guernsey</option>\r\n            <option value=\"GIN\">Guinea</option>\r\n            <option value=\"GNB\">Guinea-Bissau</option>\r\n            <option value=\"GUY\">Guyana</option>\r\n            <option value=\"HTI\">Haiti</option>\r\n            <option value=\"HMD\">Heard Island and McDonald Islands</option>\r\n            <option value=\"VAT\">Holy See (Vatican City State)</option>\r\n            <option value=\"HND\">Honduras</option>\r\n            <option value=\"HKG\">Hong Kong</option>\r\n            <option value=\"HUN\">Hungary</option>\r\n            <option value=\"ISL\">Iceland</option>\r\n            <option value=\"IND\">India</option>\r\n            <option value=\"IDN\">Indonesia</option>\r\n            <option value=\"IRN\">Iran, Islamic Republic of</option>\r\n            <option value=\"IRQ\">Iraq</option>\r\n            <option value=\"IRL\">Ireland</option>\r\n            <option value=\"IMN\">Isle of Man</option>\r\n            <option value=\"ISR\">Israel</option>\r\n            <option value=\"ITA\">Italy</option>\r\n            <option value=\"JAM\">Jamaica</option>\r\n            <option value=\"JPN\">Japan</option>\r\n            <option value=\"JEY\">Jersey</option>\r\n            <option value=\"JOR\">Jordan</option>\r\n            <option value=\"KAZ\">Kazakhstan</option>\r\n            <option value=\"KEN\">Kenya</option>\r\n            <option value=\"KIR\">Kiribati</option>\r\n            <option value=\"PRK\">Korea, Democratic People's Republic of</option>\r\n            <option value=\"KOR\">Korea, Republic of</option>\r\n            <option value=\"KWT\">Kuwait</option>\r\n            <option value=\"KGZ\">Kyrgyzstan</option>\r\n            <option value=\"LAO\">Lao People's Democratic Republic</option>\r\n            <option value=\"LVA\">Latvia</option>\r\n            <option value=\"LBN\">Lebanon</option>\r\n            <option value=\"LSO\">Lesotho</option>\r\n            <option value=\"LBR\">Liberia</option>\r\n            <option value=\"LBY\">Libya</option>\r\n            <option value=\"LIE\">Liechtenstein</option>\r\n            <option value=\"LTU\">Lithuania</option>\r\n            <option value=\"LUX\">Luxembourg</option>\r\n            <option value=\"MAC\">Macao</option>\r\n            <option value=\"MKD\">Macedonia, the former Yugoslav Republic of</option>\r\n            <option value=\"MDG\">Madagascar</option>\r\n            <option value=\"MWI\">Malawi</option>\r\n            <option value=\"MYS\">Malaysia</option>\r\n            <option value=\"MDV\">Maldives</option>\r\n            <option value=\"MLI\">Mali</option>\r\n            <option value=\"MLT\">Malta</option>\r\n            <option value=\"MHL\">Marshall Islands</option>\r\n            <option value=\"MTQ\">Martinique</option>\r\n            <option value=\"MRT\">Mauritania</option>\r\n            <option value=\"MUS\">Mauritius</option>\r\n            <option value=\"MYT\">Mayotte</option>\r\n            <option value=\"MEX\">Mexico</option>\r\n            <option value=\"FSM\">Micronesia, Federated States of</option>\r\n            <option value=\"MDA\">Moldova, Republic of</option>\r\n            <option value=\"MCO\">Monaco</option>\r\n            <option value=\"MNG\">Mongolia</option>\r\n            <option value=\"MNE\">Montenegro</option>\r\n            <option value=\"MSR\">Montserrat</option>\r\n            <option value=\"MAR\">Morocco</option>\r\n            <option value=\"MOZ\">Mozambique</option>\r\n            <option value=\"MMR\">Myanmar</option>\r\n            <option value=\"NAM\">Namibia</option>\r\n            <option value=\"NRU\">Nauru</option>\r\n            <option value=\"NPL\">Nepal</option>\r\n            <option value=\"NLD\">Netherlands</option>\r\n            <option value=\"NCL\">New Caledonia</option>\r\n            <option value=\"NZL\">New Zealand</option>\r\n            <option value=\"NIC\">Nicaragua</option>\r\n            <option value=\"NER\">Niger</option>\r\n            <option value=\"NGA\">Nigeria</option>\r\n            <option value=\"NIU\">Niue</option>\r\n            <option value=\"NFK\">Norfolk Island</option>\r\n            <option value=\"MNP\">Northern Mariana Islands</option>\r\n            <option value=\"NOR\">Norway</option>\r\n            <option value=\"OMN\">Oman</option>\r\n            <option value=\"PAK\">Pakistan</option>\r\n            <option value=\"PLW\">Palau</option>\r\n            <option value=\"PSE\">Palestinian Territory, Occupied</option>\r\n            <option value=\"PAN\">Panama</option>\r\n            <option value=\"PNG\">Papua New Guinea</option>\r\n            <option value=\"PRY\">Paraguay</option>\r\n            <option value=\"PER\">Peru</option>\r\n            <option value=\"PHL\">Philippines</option>\r\n            <option value=\"PCN\">Pitcairn</option>\r\n            <option value=\"POL\">Poland</option>\r\n            <option value=\"PRT\">Portugal</option>\r\n            <option value=\"PRI\">Puerto Rico</option>\r\n            <option value=\"QAT\">Qatar</option>\r\n            <option value=\"REU\">R궮ion</option>\r\n            <option value=\"ROU\">Romania</option>\r\n            <option value=\"RUS\">Russian Federation</option>\r\n            <option value=\"RWA\">Rwanda</option>\r\n            <option value=\"BLM\">Saint Barthꭥmy</option>\r\n            <option value=\"SHN\">Saint Helena, Ascension and Tristan da Cunha</option>\r\n            <option value=\"KNA\">Saint Kitts and Nevis</option>\r\n            <option value=\"LCA\">Saint Lucia</option>\r\n            <option value=\"MAF\">Saint Martin (French part)</option>\r\n            <option value=\"SPM\">Saint Pierre and Miquelon</option>\r\n            <option value=\"VCT\">Saint Vincent and the Grenadines</option>\r\n            <option value=\"WSM\">Samoa</option>\r\n            <option value=\"SMR\">San Marino</option>\r\n            <option value=\"STP\">Sao Tome and Principe</option>\r\n            <option value=\"SAU\">Saudi Arabia</option>\r\n            <option value=\"SEN\">Senegal</option>\r\n            <option value=\"SRB\">Serbia</option>\r\n            <option value=\"SYC\">Seychelles</option>\r\n            <option value=\"SLE\">Sierra Leone</option>\r\n            <option value=\"SGP\">Singapore</option>\r\n            <option value=\"SXM\">Sint Maarten (Dutch part)</option>\r\n            <option value=\"SVK\">Slovakia</option>\r\n            <option value=\"SVN\">Slovenia</option>\r\n            <option value=\"SLB\">Solomon Islands</option>\r\n            <option value=\"SOM\">Somalia</option>\r\n            <option value=\"ZAF\">South Africa</option>\r\n            <option value=\"SGS\">South Georgia and the South Sandwich Islands</option>\r\n            <option value=\"SSD\">South Sudan</option>\r\n            <option value=\"ESP\">Spain</option>\r\n            <option value=\"LKA\">Sri Lanka</option>\r\n            <option value=\"SDN\">Sudan</option>\r\n            <option value=\"SUR\">Suriname</option>\r\n            <option value=\"SJM\">Svalbard and Jan Mayen</option>\r\n            <option value=\"SWZ\">Swaziland</option>\r\n            <option value=\"SWE\">Sweden</option>\r\n            <option value=\"CHE\">Switzerland</option>\r\n            <option value=\"SYR\">Syrian Arab Republic</option>\r\n            <option value=\"TWN\">Taiwan, Province of China</option>\r\n            <option value=\"TJK\">Tajikistan</option>\r\n            <option value=\"TZA\">Tanzania, United Republic of</option>\r\n            <option value=\"THA\">Thailand</option>\r\n            <option value=\"TLS\">Timor-Leste</option>\r\n            <option value=\"TGO\">Togo</option>\r\n            <option value=\"TKL\">Tokelau</option>\r\n            <option value=\"TON\">Tonga</option>\r\n            <option value=\"TTO\">Trinidad and Tobago</option>\r\n            <option value=\"TUN\">Tunisia</option>\r\n            <option value=\"TUR\">Turkey</option>\r\n            <option value=\"TKM\">Turkmenistan</option>\r\n            <option value=\"TCA\">Turks and Caicos Islands</option>\r\n            <option value=\"TUV\">Tuvalu</option>\r\n            <option value=\"UGA\">Uganda</option>\r\n            <option value=\"UKR\">Ukraine</option>\r\n            <option value=\"ARE\">United Arab Emirates</option>\r\n            <option value=\"GBR\">United Kingdom</option>\r\n            <option value=\"USA\" selected=\"\">United States</option>\r\n            <option value=\"UMI\">United States Minor Outlying Islands</option>\r\n            <option value=\"URY\">Uruguay</option>\r\n            <option value=\"UZB\">Uzbekistan</option>\r\n            <option value=\"VUT\">Vanuatu</option>\r\n            <option value=\"VEN\">Venezuela, Bolivarian Republic of</option>\r\n            <option value=\"VNM\">Viet Nam</option>\r\n            <option value=\"VGB\">Virgin Islands, British</option>\r\n            <option value=\"VIR\">Virgin Islands, U.S.</option>\r\n            <option value=\"WLF\">Wallis and Futuna</option>\r\n            <option value=\"ESH\">Western Sahara</option>\r\n            <option value=\"YEM\">Yemen</option>\r\n            <option value=\"ZMB\">Zambia</option>\r\n            <option value=\"ZWE\">Zimbabwe</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"my-info\">About me</label>\r\n          <textarea\r\n            \r\n            id=\"my-info\"\r\n            name=\"information\"\r\n            class=\"form-control\"\r\n            placeholder=\"Some texts about me\"\r\n            rows=\"4\"\r\n            cols=\"400\"\r\n          >\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</textarea\r\n          >\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\">Save Changes</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"block-title\">\r\n    <h4 class=\"grey-text\"><i class=\"icon ion-ios-book-outline\"></i>My education</h4>\r\n    <div class=\"line\"></div>\r\n    <p>\r\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\r\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate\r\n    </p>\r\n    <div class=\"line\"></div>\r\n  </div>\r\n  <div class=\"edit-block\">\r\n    <form\r\n      [formGroup]=\"educationForm\"\r\n      name=\"education\"\r\n      id=\"education\"\r\n      class=\"form-inline\"\r\n      (ngSubmit)=\"submitEducationForm()\"\r\n    >\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"university\">My university</label>\r\n          <input\r\n            formControlName=\"university\"\r\n            id=\"university\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"university\"\r\n            title=\"Enter University\"\r\n            placeholder=\"My University\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group half\">\r\n          <label for=\"date-from\">From</label>\r\n          <input\r\n            formControlName=\"universityFrom\"\r\n            id=\"date-from\"\r\n            class=\"form-control\"\r\n            type=\"date\"\r\n            name=\"date\"\r\n            title=\"Enter a Date\"\r\n            placeholder=\"from\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group half\">\r\n          <label for=\"date-to\" class=\"\">To</label>\r\n          <input\r\n            formControlName=\"universityTo\"\r\n            id=\"date-to\"\r\n            class=\"form-control\"\r\n            type=\"date\"\r\n            name=\"date\"\r\n            title=\"Enter a Date\"\r\n            placeholder=\"to\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"edu-description\">Description</label>\r\n          <textarea\r\n            formControlName=\"description\"\r\n            id=\"edu-description\"\r\n            name=\"description\"\r\n            class=\"form-control\"\r\n            placeholder=\"Some texts about my education\"\r\n            rows=\"4\"\r\n            cols=\"400\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\">Save Changes</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"block-title\">\r\n    <h4 class=\"grey-text\"><i class=\"icon ion-ios-briefcase-outline\"></i>Work Experiences</h4>\r\n    <div class=\"line\"></div>\r\n    <p>\r\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\r\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate\r\n    </p>\r\n    <div class=\"line\"></div>\r\n  </div>\r\n  <div class=\"edit-block\">\r\n    <form [formGroup]=\"workForm\" name=\"workForm\" id=\"work\" class=\"form-inline\" (ngSubmit)=\"submitWorkForm()\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"company\">Company</label>\r\n          <input\r\n            formControlName=\"company\"\r\n            id=\"company\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"company\"\r\n            title=\"Enter Company\"\r\n            placeholder=\"Company name\"\r\n            value=\"Envato Inc\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"designation\">Designation</label>\r\n          <input\r\n            formControlName=\"designation\"\r\n            id=\"designation\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"designation\"\r\n            title=\"Enter designation\"\r\n            placeholder=\"designation name\"\r\n            value=\"Exclusive Author\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group half\">\r\n          <label for=\"from-date\">From</label>\r\n          <input\r\n            formControlName=\"companyFrom\"\r\n            id=\"from-date\"\r\n            class=\"form-control\"\r\n            type=\"date\"\r\n            name=\"date\"\r\n            title=\"Enter a Date\"\r\n            placeholder=\"from\"\r\n            value=\"2016\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group half\">\r\n          <label for=\"to-date\" class=\"\">To</label>\r\n          <input\r\n            formControlName=\"companyTo\"\r\n            id=\"to-date\"\r\n            class=\"form-control\"\r\n            type=\"date\"\r\n            name=\"date\"\r\n            title=\"Enter a Date\"\r\n            placeholder=\"to\"\r\n            value=\"Present\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"work-city\">City/Town</label>\r\n          <input\r\n            formControlName=\"companyCity\"\r\n            id=\"work-city\"\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            name=\"city\"\r\n            title=\"Enter city\"\r\n            placeholder=\"Your city\"\r\n            value=\"Melbourne\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group full\">\r\n          <label for=\"work-description\">Description</label>\r\n          <textarea\r\n            formControlName=\"description\"\r\n            id=\"work-description\"\r\n            name=\"description\"\r\n            class=\"form-control\"\r\n            placeholder=\"Some texts about my work\"\r\n            rows=\"4\"\r\n            cols=\"400\"\r\n          >\r\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</textarea\r\n          >\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\">Save Changes</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/containers/settings/settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/user/containers/settings/settings.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Edit Profile Contents */\n* {\n  margin: 0; }\n.form-control {\n  display: block;\n  width: 100%;\n  min-height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-image: none;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  width: 100%;\n  margin: 0 0 8px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: box-shadow .3s, border .3s; }\ntextarea {\n  height: auto; }\n.row {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n.edit-profile-container {\n  padding-top: 55px;\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n.block-title {\n  width: 80%;\n  padding-top: 20px; }\n.line {\n  background: #f1f2f2;\n  height: 1px;\n  width: 100%;\n  margin-bottom: 10px; }\n.edit-profile-container h4 i {\n  margin-right: 15px;\n  color: #27aae1; }\n.edit-block {\n  margin-bottom: 30px;\n  width: 80%; }\n.edit-block .form-group {\n  margin-bottom: 15px; }\n.edit-block select.form-control {\n  background: rgba(0, 0, 0, 0) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAFmwIRTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiVF/18AADA8MCgABi+P//PwNAAIEJoMh/EA0QQDCOAJgAcQACiBHMY2B4D8SCIPpGqBwjQACBZBNAslDlG1iAMgUaqx8xgGggngCTuQBTCRBgIHMuAGX0gTgRaMYCkFKgDpDZB6DigYwglWiCD4FYHlkTA8ximFuB2ABZDIQBlnNe7bEFQjUAAAAASUVORK5CYII=) no-repeat scroll calc(100% - 10px) center/8px auto;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n.grey-text {\n  color: grey;\n  text-align: center; }\n.edit-block ul.interests {\n  margin: 0;\n  margin-bottom: 10px; }\np {\n  font-family: 'Lato', sans-serif;\n  line-height: 26px;\n  color: #6d6e71;\n  font-size: 13px; }\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700; }\n.half {\n  padding: 5px;\n  width: 48%; }\n.full {\n  width: 96%;\n  padding: 5px; }\n.selects {\n  width: 31%; }\n.editblockulinterestsli {\n  background: #8dc63f;\n  color: #fff;\n  padding: 5px 15px;\n  margin-right: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 40px; }\n.edit-block ul.interests li div {\n  /*color: #fff;*/ }\n.activedInt {\n  background: #C0C0C0;\n  color: #fff;\n  padding: 5px 15px;\n  margin-right: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 40px;\n  pointer-events: none;\n  cursor: default; }\n.edit-block ul.interests li div i.icon {\n  font-size: 18px; }\n.edit-block .btn-primary {\n  width: 100%; }\n.gender .custom-label {\n  padding-left: 0;\n  position: relative; }\n.radio-inline {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  align-items: center;\n  padding-left: 50px; }\n.gender label {\n  margin-right: 20px; }\n.radio-btn {\n  color: #26a69a; }\n.custom-label {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  position: absolute;\n  top: 0px;\n  left: 7px; }\n/* Toggle Notification Switch */\n.toggle-switch {\n  text-align: right; }\n.toggle-switch .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin-top: 9px; }\n.toggle-switch .switch input {\n  display: none; }\n.toggle-switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f2f2f2;\n  transition: 0.4s; }\n.toggle-switch .slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s; }\ntextarea:active, select:active,\ntextarea:focus, select:focus {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a; }\ninput:checked + .slider {\n  background-color: #8dc63f; }\ninput:focus + .slider {\n  box-shadow: 0 0 1px #8dc63f; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n.slider.round {\n  border-radius: 34px; }\n.slider.round:before {\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/user/containers/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/containers/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(networkService, store, fb) {
        this.networkService = networkService;
        this.store = store;
        this.fb = fb;
        this.interestArr = [];
        this.bycicle = false;
        this.photgraphy = false;
        this.shopping = false;
        this.traveling = false;
        this.eating = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.basicInfoForm = this.fb.group(this.createFromGroupBasicInfo().controls);
        this.educationForm = this.fb.group(this.createFromGroupEducation().controls);
        this.workForm = this.fb.group(this.createFromGroupWorkForm().controls);
        //basic
        this.basicInfoForm.controls.lastname.setValue(this.user.surname, { onlySelf: true });
        this.basicInfoForm.controls.firstname.setValue(this.user.name, { onlySelf: true });
        this.basicInfoForm.controls.email.setValue(this.user.email, { onlySelf: true });
        this.basicInfoForm.controls.date.setValue(new Date(this.user.birthDate), { onlySelf: true });
        this.basicInfoForm.controls.gender.setValue(this.user.gender, { onlySelf: true });
        // this.basicInfoForm.controls.aboutMe.setValue(this.user., {onlySelf: true});
        //contacts
        if (this.user.contact) {
            this.basicInfoForm.controls.country.setValue(this.user.contact.country, { onlySelf: true });
            this.basicInfoForm.controls.city.setValue(this.user.contact.city, { onlySelf: true });
            this.basicInfoForm.controls.phone.setValue(this.user.contact.mobilePhone, { onlySelf: true });
            this.basicInfoForm.controls.skype.setValue(this.user.contact.skype, { onlySelf: true });
        }
    };
    SettingsComponent.prototype.submitBasicInfo = function () {
        var basicInfo = {
            'email': this.email.value,
            'fullname': this.firstname.value + " " + this.lastname.value,
            'name': this.firstname.value,
            'surname': this.lastname.value,
            'gender': this.gender.value,
            'birthDate': this.date.value,
            // 'aboutMe': this.aboutMe.value,
            'contact': {
                'country': this.country.value,
                'city': this.city.value,
                'mobilePhone': this.phone.value,
                'skype': this.skype.value
            }
        };
        this.networkService.updateProfile(basicInfo);
    };
    Object.defineProperty(SettingsComponent.prototype, "firstname", {
        get: function () {
            return this.basicInfoForm.get('firstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "lastname", {
        get: function () {
            return this.basicInfoForm.get('lastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "email", {
        get: function () {
            return this.basicInfoForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "gender", {
        get: function () {
            return this.basicInfoForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "date", {
        get: function () {
            return this.basicInfoForm.get('date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "country", {
        get: function () {
            return this.basicInfoForm.get('country');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "city", {
        get: function () {
            return this.basicInfoForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "phone", {
        get: function () {
            return this.basicInfoForm.get('phone');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "skype", {
        get: function () {
            return this.basicInfoForm.get('skype');
        },
        enumerable: true,
        configurable: true
    });
    // get aboutMe() {
    //   return this.basicInfoForm.get('aboutMe');
    // }
    SettingsComponent.prototype.createFromGroupBasicInfo = function () {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            skype: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        return formGroup;
    };
    SettingsComponent.prototype.submitEducationForm = function () {
        var educationData = {
            'education': {
                'country': '',
                'city': '',
                'school': '',
                'university': this.university.value,
                'periodOfSchool': '',
                'periodOfUniversity': "" + this.universityFrom.value + this.universityTo.value
            }
        };
        this.networkService.updateProfile(educationData);
    };
    Object.defineProperty(SettingsComponent.prototype, "university", {
        get: function () {
            return this.educationForm.get('university');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "universityFrom", {
        get: function () {
            return this.educationForm.get('universityFrom');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "universityTo", {
        get: function () {
            return this.educationForm.get('universityTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "description", {
        get: function () {
            return this.educationForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "graduate", {
        get: function () {
            return this.educationForm.get('graduate');
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.createFromGroupEducation = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            university: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            universityFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            universityTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            graduate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    SettingsComponent.prototype.submitWorkForm = function () {
        var workData = {
            'work': [
                {
                    'country': '',
                    'city': this.companyCity.value,
                    'company': this.company.value,
                    // "designation": this.designation.value,
                    'period': this.companyFrom.value + "." + this.companyTo.value
                }
            ]
        };
        this.networkService.updateProfile(workData);
    };
    Object.defineProperty(SettingsComponent.prototype, "company", {
        get: function () {
            return this.workForm.get('company');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "designation", {
        get: function () {
            return this.workForm.get('designation');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "companyCity", {
        get: function () {
            return this.workForm.get('companyCity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "companyFrom", {
        get: function () {
            return this.workForm.get('companyFrom');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "companyTo", {
        get: function () {
            return this.workForm.get('companyTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "descriptionCompany", {
        get: function () {
            return this.workForm.get('designation');
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.createFromGroupWorkForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            companyFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            companyTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            companyCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    SettingsComponent.prototype.addInterestArray = function (elem) {
        this.interestArr.push(elem.target.innerText);
        var int = elem.target.innerText.toLowerCase();
        this[int] = !this[int];
    };
    SettingsComponent.prototype.AddInterestsProfile = function () {
        var _this = this;
        if (this.interest) {
            this.interestArr.push(this.interest);
        }
        this.interestArr.forEach(function (x) { _this[x.toLowerCase()] = !_this[x.toLowerCase()]; });
        this.interest = '';
        this.networkService.updateProfile({ 'interests': this.interestArr });
        this.interestArr = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SettingsComponent.prototype, "interest", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/user/containers/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/user/containers/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/profile/profile.component */ "./src/app/user/containers/profile/profile.component.ts");
/* harmony import */ var _containers_friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/friends-list/friends-list.component */ "./src/app/user/containers/friends-list/friends-list.component.ts");
/* harmony import */ var _containers_add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/add-new-post/add-new-post.component */ "./src/app/user/containers/add-new-post/add-new-post.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/material-module */ "./src/app/core/material-module.ts");
/* harmony import */ var _containers_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/settings/settings.component */ "./src/app/user/containers/settings/settings.component.ts");
/* harmony import */ var _containers_info_user_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/info/user-info.component */ "./src/app/user/containers/info/user-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _containers_add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_11__["AddNewPostComponent"],
                _containers_friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_10__["FriendsListComponent"],
                _containers_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _containers_info_user_info_component__WEBPACK_IMPORTED_MODULE_14__["UserInfoComponent"]
            ],
            exports: [
                _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _containers_add_new_post_add_new_post_component__WEBPACK_IMPORTED_MODULE_11__["AddNewPostComponent"],
                _containers_friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_10__["FriendsListComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], UserModule);
    return UserModule;
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

module.exports = __webpack_require__(/*! C:\Users\victo\Desktop\Trening\DZ\DZ Angular\Modul Angular\social-network\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map