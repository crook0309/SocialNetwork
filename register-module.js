(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-module"],{

/***/ "./src/app/register/components/check-in/check-in.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/register/components/check-in/check-in.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" active\" id=\"register\">\r\n  <h3>Register Now !!!</h3>\r\n    <p class=\"text-muted\">Be cool and join today. Meet millions</p>\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitHandler()\" id='registration_form' class=\"form-inline\">\r\n    <div class=\"rowName\">\r\n      <div class=\"form-group\" [class.has-error]=\"firstname.invalid && firstname.touched\">\r\n        <label for=\"firstname\" class=\"required\"></label>\r\n        <input \r\n          formControlName=\"name\" \r\n          id=\"firstname\" \r\n          class=\"form-control\" \r\n          type=\"text\" \r\n          name=\"firstname\" \r\n          placeholder=\"First name\"/>\r\n        <span *ngIf=\"firstname.invalid && firstname.touched\">\r\n          Please enter only letters\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\" [class.has-error]=\"lastname.invalid && lastname.touched\">\r\n        <label for=\"lastname\" class=\"required\"></label>\r\n        <input \r\n          formControlName=\"surname\"\r\n          id=\"lastname\" \r\n          class=\"form-control\" \r\n          type=\"text\" \r\n          name=\"lastname\" \r\n          placeholder=\"Last name\"/>\r\n        <span *ngIf=\"lastname.invalid && lastname.touched\">\r\n          Please enter only letters\r\n        </span>\r\n      </div>\r\n    </div>   \r\n    <div class=\"form-group\" [class.has-error]=\"email.invalid && email.touched\">\r\n      <label for=\"email\" class=\"required\"></label>\r\n      <input\r\n        formControlName=\"email\" \r\n\t      id=\"email\" \r\n\t      class=\"form-control\" \r\n\t      type=\"text\" \r\n\t      name=\"email\" \r\n\t      placeholder=\"Your Email\"/>\r\n        <span *ngIf=\"email.invalid && email.touched\">\r\n          Invalid email\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\" [class.has-error]=\"(password.invalid || (registerForm.errors || {}).matching) && password.touched\" >\r\n      <label for=\"password\" class=\"required\"></label>\r\n      <input\r\n        formControlName=\"password\" \r\n\t      id=\"password\" \r\n\t      class=\"form-control\"\r\n        type=\"password\" \r\n        name=\"password\" \r\n        placeholder=\"Password\"/>\r\n      <span *ngIf=\"(registerForm.errors || {}).matching && confirmPassword.touched\">\r\n        {{(registerForm.errors || {}).matching}}\r\n      </span>        \r\n      <span *ngIf=\"password.invalid && password.touched\">\r\n        Password should contain at least one character and number\r\n      </span> \r\n    </div>\r\n    <div class=\"form-group\" [class.has-error]=\"(confirmPassword.invalid || (registerForm.errors || {}).matching) && confirmPassword.touched\">\r\n      <label for=\"confirmPassword\" class=\"required\"></label>\r\n      <input\r\n        formControlName=\"confirmPassword\" \r\n        id=\"confirmPassword\" \r\n        class=\"form-control\" \r\n        type=\"password\" \r\n        name=\"confirmPassword\" \r\n        placeholder=\"Confirm password\"/>\r\n      <span *ngIf=\"(registerForm.errors || {}).matching && confirmPassword.touched\">\r\n        {{(registerForm.errors || {}).matching}}\r\n      </span>\r\n      <span *ngIf=\"password.invalid && password.touched\">\r\n        Password should contain at least one character and number\r\n      </span>       \r\n    </div>\r\n    <p class=\"already\"><a href=\"#\">Already have an account?</a></p>\r\n    <button\r\n      [disabled]=\"registerForm.invalid\"\r\n      type=\"submit\"\r\n      class=\"btn btn-success\">\r\n      Register Now\r\n    </button>              \r\n  </form>\r\n</div> \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register/components/check-in/check-in.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/register/components/check-in/check-in.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  line-height: 1; }\n  .active h3 {\n    color: #27aae1;\n    font-size: 30px; }\n  .active .text-muted {\n    color: #939598;\n    font-size: 12px;\n    margin-bottom: 20px; }\n  .active .form-inline .rowName {\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n    -moz-flex-direction: row;\n    -o-flex-direction: row;\n    flex-direction: row;\n    justify-content: space-between; }\n  .active .form-inline .form-group {\n    position: relative;\n    padding-left: 15px;\n    padding-bottom: 20px;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    flex-direction: column; }\n  .active .form-inline .form-group label {\n      display: block;\n      line-height: 0.1; }\n  .active .form-inline .form-group label.required:after {\n        content: ' *';\n        color: red; }\n  .active .form-inline .form-group input {\n      background: #fff;\n      color: #939598;\n      border-radius: 30px;\n      box-shadow: none;\n      width: 100%;\n      border: 1px solid #f1f2f2;\n      padding-left: 15px;\n      font-size: 12px;\n      height: 25px;\n      margin-bottom: 0;\n      box-sizing: border-box; }\n  .active .already {\n    font-size: 12px;\n    color: #27aae1;\n    line-height: 1; }\n  .active .btn {\n    background: #27aae1;\n    padding: 0 25px;\n    border: none;\n    font-size: 14px;\n    border-radius: 4px;\n    color: #fff;\n    position: relative;\n    font-weight: 600;\n    outline: none;\n    border-radius: 30px; }\n  .active .btn:hover {\n    background: #149AC9;\n    transition: all 1s; }\n  .has-error input {\n  border: 1px solid red; }\n  .has-error span {\n  position: absolute;\n  color: red;\n  font-size: 8px;\n  margin-top: 25px; }\n  @media screen and (max-width: 630px) {\n  .active .form-inline .rowName {\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    flex-direction: column; } }\n  @media screen and (max-width: 435px) {\n  .active h3 {\n    font-size: 24px; }\n  .active .text-muted {\n    margin-bottom: 15px; }\n  .active .form-inline .rowName {\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    flex-direction: column; }\n  .active .btn {\n    font-size: 12px; } }\n"

/***/ }),

/***/ "./src/app/register/components/check-in/check-in.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/register/components/check-in/check-in.component.ts ***!
  \********************************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/register.actions */ "./src/app/register/store/actions/register.actions.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/alert.service */ "./src/app/register/service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckInComponent = /** @class */ (function () {
    function CheckInComponent(registerService, fb, route, router, store, alertService) {
        this.registerService = registerService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.store = store;
        this.alertService = alertService;
        this.loading = false;
        if (this.registerService.permissionToEnterValue) {
            this.router.navigate(['']);
        }
    }
    CheckInComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group(this.createFromGroup().controls, { validator: this.passwordConfirming });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    CheckInComponent.prototype.submitHandler = function () {
        console.log(this.registerForm.value);
        this.store.dispatch(new _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_4__["GetRegister"](this.registerForm.value));
    };
    Object.defineProperty(CheckInComponent.prototype, "firstname", {
        get: function () {
            return this.registerForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckInComponent.prototype, "lastname", {
        get: function () {
            return this.registerForm.get('surname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckInComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckInComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckInComponent.prototype, "confirmPassword", {
        get: function () {
            return this.registerForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    CheckInComponent.prototype.createFromGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я]+$')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
        });
    };
    CheckInComponent.prototype.passwordConfirming = function (c) {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalid: true, matching: 'Passwords are not matching' };
        }
    };
    CheckInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-in',
            template: __webpack_require__(/*! ./check-in.component.html */ "./src/app/register/components/check-in/check-in.component.html"),
            styles: [__webpack_require__(/*! ./check-in.component.scss */ "./src/app/register/components/check-in/check-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], CheckInComponent);
    return CheckInComponent;
}());



/***/ }),

/***/ "./src/app/register/components/log-in/log-in.component.html":
/*!******************************************************************!*\
  !*** ./src/app/register/components/log-in/log-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"active\" id=\"login\">\r\n  <h3>Login</h3>\r\n  <p class=\"text-muted\">Log into your account</p>\r\n  <form [formGroup]=\"loginForm\" name=\"Login_form\" id=\"Login_form\" (ngSubmit)=\"submitHandler()\">\r\n    <div class=\"form-group\" [class.has-error]=\"email.invalid && email.touched\">\r\n      <input\r\n        formControlName=\"email\" \r\n        id=\"email\" \r\n        class=\"form-control\" \r\n        type=\"text\" \r\n        name=\"email\" \r\n        placeholder=\"Your Email\">\r\n        <span *ngIf=\"email.invalid && email.touched\">\r\n          Invalid email\r\n        </span>\r\n    </div>      \r\n    <div class=\"form-group\"  [class.has-error]=\"(password.invalid || (loginForm.errors || {}).matching) && password.touched\">\r\n      <input\r\n        formControlName=\"password\" \r\n        id=\"password\" \r\n        class=\"form-control\" \r\n        type=\"password\" \r\n        name=\"password\"  \r\n        placeholder=\"Password\">\r\n      <span *ngIf=\"(loginForm.errors || {}).matching && password.touched\">\r\n        {{(loginForm.errors || {}).matching}}.\r\n      </span>\r\n      <span *ngIf=\"password.invalid && password.touched\">\r\n        Password should contain at least one character and number\r\n      </span>\r\n    </div>    \r\n    <p class=\"already\" (click)=\"clickedRecovery(true)\">Forgot Password?</p>    \r\n    <button \r\n      [disabled]=\"loginForm.invalid\"\r\n      type=\"submit\"\r\n      class=\"btn btn-success\">\r\n      Login Now\r\n    </button>  \r\n  </form>\r\n  <p class=\"text-muted\">Do not use the network? Sign up now</p>  \r\n </div>\r\n"

/***/ }),

/***/ "./src/app/register/components/log-in/log-in.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/register/components/log-in/log-in.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  line-height: 1; }\n  .active h3 {\n    font-family: 'Agency FB Bold', arial;\n    color: #27aae1;\n    font-size: 30px; }\n  .active .text-muted {\n    color: #939598;\n    font-size: 12px;\n    margin-bottom: 20px; }\n  .active .form-group {\n    position: relative;\n    padding-bottom: 20px;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    flex-direction: column; }\n  .active .form-group input {\n      background: #fff;\n      color: #939598;\n      border-radius: 30px;\n      box-shadow: none;\n      width: 100%;\n      border: 1px solid #f1f2f2;\n      padding-left: 15px;\n      font-size: 12px;\n      height: 30px;\n      margin-bottom: 0;\n      box-sizing: border-box; }\n  .active .already {\n    font-size: 12px;\n    color: #27aae1; }\n  .active .already:hover {\n    cursor: pointer;\n    color: #939598; }\n  .active .btn {\n    background: #27aae1;\n    border: none;\n    font-size: 14px;\n    border-radius: 4px;\n    color: #fff;\n    position: relative;\n    font-weight: 600;\n    outline: none;\n    border-radius: 30px;\n    height: 30px;\n    line-height: 1;\n    margin-bottom: 20px; }\n  .active .btn:hover {\n    background: #149AC9;\n    transition: all 1s; }\n  .has-error input {\n  border: 1px solid red; }\n  .has-error span {\n  position: absolute;\n  color: red;\n  font-size: 8px;\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/register/components/log-in/log-in.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/register/components/log-in/log-in.component.ts ***!
  \****************************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/register.actions */ "./src/app/register/store/actions/register.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogInComponent = /** @class */ (function () {
    function LogInComponent(registerService, fb, route, router, store) {
        this.registerService = registerService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.store = store;
        this.loading = false;
        this.error = '';
        this.btnClickRecovery = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LogInComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group(this.createFromGroup().controls);
        this.registerService.logout();
    };
    LogInComponent.prototype.clickedRecovery = function (recovery) {
        this.btnClickRecovery.emit(recovery);
    };
    LogInComponent.prototype.submitHandler = function () {
        this.store.dispatch(new _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["GetLogin"](this.loginForm.value));
    };
    Object.defineProperty(LogInComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogInComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LogInComponent.prototype.createFromGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LogInComponent.prototype, "btnClickRecovery", void 0);
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/register/components/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.scss */ "./src/app/register/components/log-in/log-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/register/components/password-recovery/password-recovery.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/register/components/password-recovery/password-recovery.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"active\" id=\"recovery\">\r\n  <div>\r\n    <h3>Password recovery</h3>\r\n    \r\n    <form [formGroup]=\"recoveryForm\" name=\"recovery_form\" id=\"recovery_form\">\r\n    \t<div  class=\"form-group\" [class.has-error]=\"email.invalid && email.touched\">\r\n    \t\t<p class=\"text-muted\">Enter your email address.</p>\r\n        <input\r\n          formControlName=\"email\" \r\n          id=\"email\" \r\n          class=\"form-control\" \r\n          type=\"text\" \r\n          name=\"email\" \r\n          placeholder=\"Your Email\">\r\n        <span *ngIf=\"email.invalid && email.touched\">\r\n          Invalid email\r\n        </span>\r\n      </div>\r\n\r\n      <button \r\n        [disabled]=\"email.invalid\"\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"submitEmail()\">\r\n        SEARCH\r\n      </button>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/register/components/password-recovery/password-recovery.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/register/components/password-recovery/password-recovery.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  line-height: 1; }\n  .active h3 {\n    font-family: 'Agency FB Bold', arial;\n    color: #27aae1;\n    font-size: 26px; }\n  .active .text-muted {\n    color: #939598;\n    font-size: 10px;\n    margin-bottom: 20px; }\n  .active .form-group {\n    position: relative;\n    padding-bottom: 20px; }\n  .active .form-group input {\n      background: #fff;\n      color: #939598;\n      border-radius: 30px;\n      box-shadow: none;\n      width: 100%;\n      border: 1px solid #f1f2f2;\n      padding-left: 15px;\n      font-size: 12px;\n      height: 30px;\n      margin-bottom: 0; }\n  .active .already {\n    font-size: 10px;\n    color: #27aae1; }\n  .active .btn {\n    background: #27aae1;\n    border: none;\n    font-size: 14px;\n    border-radius: 4px;\n    color: #fff;\n    position: relative;\n    font-weight: 600;\n    outline: none;\n    border-radius: 30px;\n    height: 30px;\n    line-height: 1;\n    margin-bottom: 20px; }\n  .active .btn:hover {\n    background: #149AC9;\n    transition: all 1s; }\n  .has-error input {\n  border: 1px solid red; }\n  .has-error span {\n  position: absolute;\n  color: red;\n  font-size: 8px;\n  margin-top: 5px; }\n"

/***/ }),

/***/ "./src/app/register/components/password-recovery/password-recovery.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/register/components/password-recovery/password-recovery.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PasswordRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRecoveryComponent", function() { return PasswordRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _store_actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/password-recovery.actions */ "./src/app/register/store/actions/password-recovery.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordRecoveryComponent = /** @class */ (function () {
    function PasswordRecoveryComponent(registerService, fb, router, store) {
        this.registerService = registerService;
        this.fb = fb;
        this.router = router;
        this.store = store;
        this.changePass = false;
    }
    PasswordRecoveryComponent.prototype.ngOnInit = function () {
        this.recoveryForm = this.fb.group(this.createFromGroup().controls);
    };
    PasswordRecoveryComponent.prototype.submitEmail = function () {
        this.store.dispatch(new _store_actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_5__["GetEmail"](this.recoveryForm.value));
    };
    Object.defineProperty(PasswordRecoveryComponent.prototype, "email", {
        get: function () {
            return this.recoveryForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordRecoveryComponent.prototype, "password", {
        get: function () {
            return this.recoveryForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    PasswordRecoveryComponent.prototype.createFromGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
        });
    };
    PasswordRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-recovery',
            template: __webpack_require__(/*! ./password-recovery.component.html */ "./src/app/register/components/password-recovery/password-recovery.component.html"),
            styles: [__webpack_require__(/*! ./password-recovery.component.scss */ "./src/app/register/components/password-recovery/password-recovery.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PasswordRecoveryComponent);
    return PasswordRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/register/containers/register/register.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/register/containers/register/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"registerAll\">\r\n  <div class=\"wrapper\">\r\n    <!-- <app-alert (changeLogin)=\"changeLogin($event)\"></app-alert> -->\r\n    <div class=\"reg-form-container\">    \r\n      <div class=\"reg-options\">\r\n        <ul class=\"nav-tabs\">\r\n          <li class=\"reg\" (click)=\"changeRegister()\">\r\n            <button [ngClass]=\"{ active: register }\" type=\"button\">\r\n              Register\r\n            </button>\r\n          </li>\r\n          <li class=\"log\" (click)=\"changeLogin()\">\r\n            <button type=\"button\" [ngClass]=\"{ active: login }\">Login</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"tab-content\">\r\n        <app-log-in\r\n          *ngIf=\"login\"\r\n          (btnClickRecovery)=\"btnClickRecovery($event)\"\r\n        ></app-log-in>\r\n        <app-check-in *ngIf=\"register\"></app-check-in>\r\n        <app-password-recovery *ngIf=\"recovery\"></app-password-recovery>\r\n      </div>    \r\n    </div>\r\n    <div class=\"icons\">\r\n      <ul class=\"list-inline social-icons\">\r\n        <li>\r\n          <a href=\"http://www.facebook.com/\"\r\n            ><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i\r\n          ></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"http://twitter.com/\"\r\n            ><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i\r\n          ></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://plus.google.com/\"\r\n            ><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i\r\n          ></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.pinterest.com\"\r\n            ><i class=\"fa fa-pinterest\"></i\r\n          ></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"http://www.linkedin.com/\"\r\n            ><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i\r\n          ></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.instagram.com\"\r\n            ><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i\r\n          ></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n</div>       \r\n</div>\r\n<!-- background animations -->\r\n<div class=\"video-background\">\r\n  <svg\r\n    class=\"logo\"\r\n    version=\"1.1\"\r\n    id=\"Слой_1\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    x=\"0px\"\r\n    y=\"0px\"\r\n    viewBox=\"0 0 2657.9 651.2\"\r\n    style=\"enable-background:new 0 0 2657.9 651.2;\"\r\n    xml:space=\"preserve\"\r\n  >\r\n    <style type=\"text/css\">\r\n      .st0 {\r\n        fill: #fff;\r\n        stroke: #ffffff;\r\n        stroke-width: 4;\r\n        stroke-linecap: round;\r\n        stroke-miterlimit: 10;\r\n      }\r\n    </style>\r\n    <g>\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M87.4,457.2l-61.3,10.1c-14.9,2.1-29.3-13.9-25.6-28.8c1.1-4.3,4.3-5.9,8-6.4c10.7-2.1,21.3-4.3,32-5.9\r\n       c29.8-5.3,60.2-10.1,90.6-11.7c13.9-0.5,27.7-1.1,41.6,2.1c23.5,4.8,37.3,26.1,40.5,45.8c0,1.6,0,3.2-0.5,4.8\r\n       c-0.5,2.1-1.6,4.3-3.2,4.8c-1.6,0-3.7-1.1-5.3-2.1l-1.6-2.7c-6.9-13.3-19.2-15.5-32.5-16c-5.3,8.5-8,17.6-10.7,26.7\r\n       c-3.7,16-5.3,32-2.1,48c6.9,33,29.3,51.7,60.2,60.2c20.3,5.9,40.5,4.3,61.3,0.5c22.9-4.3,44.8-12.8,64-26.7\r\n       c8-5.3,15.5-11.7,21.3-19.2c15.5-18.7,19.7-40.5,13.9-64c-4.3-16.5-11.7-31.4-20.3-45.8c-17.1-26.7-36.8-50.6-56-75.2\r\n       c-18.7-24-36.2-48.5-50.6-75.7c-8-15.5-14.9-31.4-18.1-49c-4.8-29.3,1.6-56.5,14.9-82.1c13.9-26.7,34.1-46.9,57.6-65\r\n       c44.8-35.2,95.4-56,151.4-64.5c10.1-1.6,20.3-3.2,29.8-3.2c16.5-0.5,28.2,9.1,36.8,22.4c3.7,5.3,3.7,12.3,1.6,18.1\r\n       c-5.3,12.3-10.1,24.5-16,36.8c-20.8,45.8-42.6,92.2-62.9,138.6c-12.8,28.8-24,58.1-31.4,89c-4.3,18.1-5.9,36.2,2.1,54.4\r\n       c1.6,3.7,4.3,9.1-0.5,11.7c-2.1,1.1-7.5-1.1-10.7-3.2C388,373.5,380,356.5,379,336.8c-1.6-23.5,4.3-45.8,11.2-68.2\r\n       c15.5-50.1,35.7-98.1,57.6-145.5l32.5-69.8l3.2-8c-9.6,1.6-18.1,2.7-26.1,4.3c-51.2,11.7-95.9,34.6-133.8,70.9\r\n       c-13.9,12.8-26.1,27.7-35.2,44.8c-18.1,34.1-19.2,68.2-2.7,102.9c12.3,25.6,28.8,48,45.8,69.3c21.9,27.2,43.7,53.3,64.5,80.5\r\n       c12.8,16.5,23.5,34.6,31.4,53.8c16.5,40,3.7,74.1-26.1,98.6c-20.8,17.6-45.8,27.7-71.4,35.2c-25.6,7.5-51.2,11.2-77.3,8.5\r\n       c-43.2-3.7-82.6-17.6-112.5-50.1c-20.3-21.9-27.7-48-24-77.3c1.1-10.7,4.3-21.9,6.4-34.1L87.4,457.2z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M742.5,338.9c3.2,1.1,6.4,3.2,10.1,4.8c-1.6,3.2-2.1,5.3-3.2,6.4c-19.2,23.5-39.4,45.8-65.6,61.8\r\n       c-8,4.8-17.1,8.5-26.1,12.3c-5.3,2.1-9.1,4.3-12.3,9.1c-12.8,18.1-27.2,35.2-44.8,49c-13.3,10.7-28.8,16-45.8,13.9\r\n       c-43.2-6.4-73.6-45.8-73.6-87.9c-0.5-40,11.2-76.8,37.3-107.7c9.1-10.1,16-20.3,21.3-33c7.5-18.1,20.3-33.6,36.2-45.3\r\n       c21.3-14.9,43.7-16.5,66.6-5.9c31.4,14.9,48,40.5,50.6,75.2c2.1,29.3-2.7,57-15.5,83.1l-9.1,19.7c22.4-5.3,48.5-29.3,65.6-52.2\r\n       C736.6,338.9,739.3,337.8,742.5,338.9z M531.9,434.8c4.3,46.4,37.3,30.9,61.8,6.4l12.3-13.9c-29.3-7.5-51.2-22.9-66.1-50.6\r\n       C533.5,395.4,530.3,417.2,531.9,434.8z M578.3,299.5c6.4,7.5,5.9,11.7-2.7,17.1c-1.1,1.1-2.1,2.1-3.2,2.7\r\n       c-9.1,6.4-14.9,13.9-11.2,25.6v2.7c3.2,17.6,8,34.6,20.3,49c7.5,9.6,17.1,14.9,29.3,16c4.8,0.5,7.5-0.5,10.1-4.8\r\n       c6.9-11.7,14.4-23.5,20.8-35.7c13.3-27.2,21.3-55.4,20.3-85.8c-0.5-17.6-4.8-34.6-16.5-48.5c-4.3-4.8-9.6-6.9-16-6.4\r\n       c-10.7,1.1-20.3,5.3-28.3,12.3c-14.9,12.3-25.1,27.7-32.5,44.2C572.4,292,575.6,295.7,578.3,299.5z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M870.4,278.1c-13.3,6.4-24,13.9-32.5,22.9c-25.6,26.7-43.7,58.1-53.3,93.8c-4.8,16-5.3,33-1.1,49\r\n       c6.9,25.6,14.4,25.6,34.1,20.3c14.4-3.7,27.2-10.7,39.4-19.7c16-11.2,29.8-25.1,43.2-40c17.1-19.2,34.6-37.8,49-59.2\r\n       c3.2-5.3,9.6-6.9,14.4-3.7c4.3,2.7,5.3,8,2.1,13.9c-7.5,11.2-15.5,22.4-23.5,33c-12.8,16-26.1,32-39.4,47.4\r\n       c-16.5,19.2-36.2,34.6-60.2,44.2c-14.9,5.9-29.8,7.5-45.8,3.2c-29.8-8-46.9-27.7-52.8-57.6c-4.8-22.4-2.7-44.8,4.3-66.6\r\n       c11.2-36.8,30.4-69.3,59.7-94.9c9.1-8.5,19.7-14.9,31.4-19.7c22.4-9.6,42.6-4.3,60.8,10.7c6.9,5.3,12.3,11.7,13.9,21.3\r\n       c0.5,5.9-0.5,10.1-3.2,14.9c-7.5,16.5-13.9,33.6-17.1,51.7c-1.6,6.4-1.6,12.8,0,19.7c2.1,6.9-0.5,9.6-8,8\r\n       c-14.9-3.7-25.1-17.6-26.1-35.2c-0.5-16,3.7-32,8-47.4L870.4,278.1z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M990.8,483.3c7.5-8,15.5-16,22.4-25.1c28.8-35.7,59.2-70.9,85.3-109.3l4.3-5.3c5.3-6.4,9.1-6.9,17.1,0\r\n       c-1.1,2.1-2.1,4.3-3.7,6.4l-89.5,124.2c-7.5,9.6-15.5,18.7-24,27.2c-11.7,12.3-33,12.8-45.8,1.6c-5.3-4.3-7.5-10.7-9.1-17.1\r\n       c-3.2-18.7-1.6-37.3,2.7-56c12.3-53.8,32.5-103.9,61.8-150.8l9.6-13.3c3.2-4.3,7.5-5.3,12.8-4.8c7.5,1.6,13.9,4.8,19.2,10.1\r\n       c5.9,5.3,6.4,8.5,2.7,16l-28.3,62.9c-17.1,40-30.4,81-41.6,123.1c-1.1,4.3-1.6,9.1-2.7,16L990.8,483.3z M1053.7,202.4\r\n       c3.2-10.1,6.9-19.7,10.7-29.3c2.1-5.9,5.3-7.5,10.7-6.4c10.7,2.1,19.2,8.5,25.1,18.1c2.7,3.7,2.1,7.5,0,11.2\r\n       c-4.8,7.5-9.6,15.5-13.3,23.5c-2.1,4.3-3.2,9.1-4.3,13.9c-0.5,4.3-2.7,5.9-6.4,5.3c-11.7-0.5-24.5-14.4-24-28.2\r\n       C1052.1,208.8,1052.7,205.6,1053.7,202.4z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M1207.2,438l-42.6,48c-3.2,3.7-6.9,6.4-10.1,9.6c-8,6.9-17.1,7.5-26.7,3.7c-14.4-5.9-23.5-15.5-28.2-30.4\r\n       c-3.2-11.2-3.7-22.4-2.7-34.1c3.2-34.6,15.5-66.6,33-96.5c16-27.2,34.6-52.2,58.6-72.5c12.3-10.7,26.1-19.2,42.1-24\r\n       c27.2-8.5,50.1-1.1,70.4,18.7c6.9,6.4,12.3,14.4,15.5,23.5c2.1,5.3,2.7,10.7,0.5,16c-3.7,11.2-12.3,12.8-20.3,4.3\r\n       c-4.8-4.8-5.3-10.7-5.9-16.5c-1.1-10.1-2.1-11.2-12.3-11.7c-10.7-1.1-20.8,2.1-29.8,6.9c-18.1,9.6-33,22.4-46.9,36.8\r\n       c-34.1,36.2-57,78.9-66.6,127.9c-0.5,3.2-1.1,6.4-1.1,9.6c0,2.1,0,3.7,0.5,7.5l5.9-5.3c27.2-26.6,50.1-56.5,72.5-86.9\r\n       c5.9-8.5,12.3-17.1,18.7-25.1c2.1-3.2,3.7-5.9,6.4-8c6.4-5.3,11.7-11.2,14.9-19.2c2.7-5.3,7.5-7.5,13.9-6.4\r\n       c8.5,1.6,16.5,4.8,22.9,11.2c4.8,4.3,6.9,9.1,4.3,16c-8.5,22.4-16,44.8-24,67.2c-3.2,9.1-5.9,18.1-8.5,27.7l2.1,1.1l5.3-4.8\r\n       l86.3-86.3c2.1-1.6,4.3-4.3,6.9-5.3c2.1-1.6,5.3-2.7,8-2.1c2.1,0,5.3,1.6,5.9,3.2c1.1,2.1-0.5,5.3-2.1,6.9\r\n       c-6.4,7.5-13.9,14.4-20.8,21.9c-24.5,27.7-49,56-74.1,83.7l-25.6,30.4c-11.2,12.8-24.5,14.4-38.4,4.3c-6.4-4.8-8-11.2-7.5-18.7\r\n       c1.1-9.6,2.7-19.2,4.3-28.8c0-2.7,0.5-5.3,1.6-10.1L1207.2,438z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M1416.7,483.9c3.2-3.2,6.4-5.9,9.1-9.1c20.3-23.5,36.2-50.1,52.8-76.2c9.6-15.5,19.2-30.9,29.3-45.8\r\n       c4.3-6.9,9.6-8.5,16-6.9c4.8,1.1,5.9,3.2,4.3,7.5l-1.6,3.2l-53.8,94.9c-8,12.8-17.1,25.1-25.6,36.8c-4.3,5.9-9.1,10.7-14.4,14.9\r\n       c-13.3,11.2-28.2,12.3-43.2,6.9c-13.3-4.8-18.1-16-20.8-28.2c-3.2-14.9-2.1-29.8-1.1-44.8c5.3-60.2,24.5-116.7,46.4-172.7\r\n       c14.9-37.8,31.4-75.7,50.6-111.9c13.3-25.1,28.8-49.6,48-71.4c8-9.6,17.1-17.6,27.7-24c10.7-5.9,22.4-10.1,35.2-7.5\r\n       c19.2,3.7,30.4,16,30.9,35.2c0.5,20.3-4.3,39.4-11.7,58.1c-25.1,62.4-66.1,126.3-109.8,173.8c-12.3,13.3-26.6,25.6-41,38.4\r\n       c-2.7,2.7-4.8,4.8-5.9,9.1c-9.1,35.2-17.1,70.4-21.9,106.6l-1.1,12.3L1416.7,483.9z M1558.5,84.1c-6.9,9.1-13.9,18.7-19.7,28.8\r\n       c-35.2,61.3-61.3,127.9-81,194.5c41-46.4,71.4-91.7,100.2-140.7c9.6-16,16.5-33.6,21.9-51.7c5.9-19.2,10.7-46.4,1.1-48\r\n       C1570.7,70.8,1563.8,76.7,1558.5,84.1z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M1968.3,330.4c-51.2,5.9-100.7,10.7-150.3,16.5c-6.9,18.1-13.9,35.7-20.3,53.8c-12.8,35.2-24.5,70.9-33,107.1\r\n       c-5.3,21.9-8,43.7-6.4,66.1c0.5,11.2,0.5,22.4-2.7,33c-2.7,7.5-8,9.6-14.4,4.3c-7.5-6.4-13.3-14.4-17.6-23.5\r\n       c-5.3-11.2-8-24-8.5-36.8c-1.1-28.2,4.8-55.4,11.7-82.6c9.1-36.2,20.8-72,33.6-107.7c1.1-2.1,1.6-4.8,2.7-8l-32,2.1\r\n       c-8.5,0-16.5,0-25.1-0.5c-14.9-1.6-28.8-16-30.4-30.4c-0.5-6.9,2.1-9.1,8.5-7.5c3.7,1.1,7.5,2.1,10.7,1.6\r\n       c27.7-1.6,55.4-3.2,83.7-5.3c35.2-90.1,75.7-177,118.3-263.8c-12.3-1.1-22.4,1.1-33,3.2c-47.4,9.6-88.5,30.9-122.1,66.6\r\n       c-8,8.5-14.9,18.1-19.7,28.8c-3.7,7.5-5.9,14.9-2.1,22.4v2.7c-3.2,3.2-6.4,1.6-9.1,0.5c-13.3-7.5-25.6-18.7-18.7-40\r\n       c4.3-12.3,10.7-22.9,19.2-32.5c21.9-26.7,49-46.4,80.5-60.8c31.4-14.4,65-23.5,100.2-24.5c2.1,0,4.3-0.5,6.9-0.5\r\n       c20.3-2.1,36.2,6.4,49,21.9c6.4,6.9,8,15.5,3.7,24c-4.3,10.1-9.1,20.3-14.4,30.4c-35.2,67.7-67.7,136.4-98.6,206.3l-3.2,8.5\r\n       l146.6-11.7l13.3-34.6c29.3-73,59.7-145,92.7-216.4c2.7-5.9,5.9-11.2,9.1-17.1c3.2-5.3,8-8,14.4-6.9c13.9,2.7,25.1,10.1,32.5,22.4\r\n       c3.2,5.3,2.1,11.2-0.5,16.5l-17.6,36.8c-30.4,63.4-59.2,127.9-86.3,192.9c-1.1,1.6-1.6,4.3-2.1,6.4l18.1,2.7\r\n       c27.7,4.8,49.6,18.1,62.9,43.7c1.6,3.7,2.7,7.5,4.3,12.3c-3.2-0.5-5.3-0.5-6.9-1.1c-4.8-2.7-9.1-4.8-13.3-8\r\n       c-12.3-7.5-25.6-12.3-40-13.3c-12.8-1.1-26.1-1.6-38.9-2.1l-2.7,5.3C1995.5,397,1971,461,1953.9,527c-6.4,24.5-11.7,49.6-11.2,75.2\r\n       c0,8,0,16-0.5,24c0,4.3-1.6,8.5-3.2,12.8c-2.1,4.3-4.3,5.3-9.1,3.7c-2.7-1.1-5.3-2.7-7.5-4.3c-12.8-11.7-20.3-25.6-21.9-43.2\r\n       c-2.7-25.6,1.6-51.2,7.5-76.2c12.8-53.8,30.4-106.1,49-157.8L1968.3,330.4z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M2113.3,473.2c2.1-2.1,4.8-4.3,6.9-6.9c9.6-12.3,19.7-24,28.2-36.8c25.6-38.9,51.2-78.4,76.2-117.8\r\n       c4.8-8,6.9-18.1,10.1-27.7c3.2-8.5,5.9-17.1,8.5-25.6c2.7-8,8-11.7,16-11.7c7.5,0,14.9,2.1,22.4,5.3c8,3.7,10.1,10.1,8.5,18.7\r\n       c-2.7,13.9-5.3,27.7-9.1,41.6c-10.1,35.2-20.8,69.3-30.9,104.5c-4.3,14.9-8,30.4-11.7,45.3c0,1.1,0.5,1.6,0.5,3.7l8.5-11.2\r\n       c21.9-29.3,40.5-60.8,60.2-91.7c4.8-7.5,8.5-14.9,13.3-21.9c3.7-5.9,10.7-8,17.1-5.9c4.8,1.6,6.4,4.8,4.3,9.6l-10.7,18.1\r\n       c-19.2,32-38.4,64-58.6,94.9c-9.6,14.9-20.8,28.8-31.4,42.6c-10.1,13.3-21.9,14.9-37.3,9.6c-7.5-2.1-11.7-7.5-12.8-14.9\r\n       c-3.2-13.9-2.7-28.2-0.5-42.6l12.3-62.9c-3.2,3.7-4.3,6.4-5.9,8.5c-13.9,22.4-27.7,44.8-42.1,66.6c-6.4,9.1-13.9,17.6-21.3,25.6\r\n       c-11.7,12.3-25.6,15.5-40.5,10.7c-9.6-2.7-17.1-8.5-19.7-18.1c-2.1-8.5-3.7-17.1-4.3-25.6c-0.5-29.3,5.9-58.1,12.8-86.3\r\n       c9.1-36.2,20.3-71.4,30.4-107.1l3.2-9.1c2.7-8,8.5-11.2,16.5-11.2c10.1,0,19.7,2.7,27.7,9.1c6.4,4.8,8,9.1,4.8,17.1\r\n       c-17.6,49.6-29.8,101.3-43.2,152.4c-4.3,16.5-6.9,33-10.7,50.1L2113.3,473.2z\"\r\n      />\r\n      <path\r\n        class=\"st0\"\r\n        d=\"M2375,417.8c29.3-46.4,63.4-87.9,107.1-121.5c16.5-12.8,34.1-22.4,54.4-26.7c6.9-1.6,12.8-0.5,18.7,2.1\r\n       c16,8.5,25.6,20.8,26.1,38.9c0.5,8.5-0.5,17.6-1.1,26.1c0,2.7-0.5,4.8-1.1,9.1c4.3-2.1,8-3.2,11.2-4.3c6.9-2.7,13.9-5.9,20.8-8\r\n       c5.9-2.1,11.2-2.1,16,1.6c3.7,3.2,3.7,6.9-0.5,9.6c-2.7,1.6-5.3,2.1-8,3.7c-13.9,5.9-27.7,12.3-41.6,18.7c-4.3,1.6-6.9,4.8-8.5,9.1\r\n       c-10.1,26.7-24.5,50.6-41,74.1c-13.9,20.3-31.4,37.3-52.2,51.2c-17.1,11.2-35.2,15.5-55.4,8c-19.2-6.9-24-17.6-16-36.8\r\n       c4.3-11.2,11.2-20.3,19.2-28.8c25.1-27.2,54.9-48.5,87.4-65.6c10.1-4.8,16.5-11.7,20.8-21.9c6.4-14.9,14.4-29.8,18.1-46.4\r\n       c4.8-21.9,5.9-26.1-12.8-21.9c-12.3,3.2-22.9,9.1-33.6,16c-26.7,18.1-49.6,40.5-69.8,65.6c-26.7,32-48,67.7-67.2,104.5\r\n       c-3.7,6.9-6.9,14.4-9.6,21.3c-2.1,5.3-5.9,7.5-11.2,6.4c-3.7-0.5-8-1.1-11.7-2.1c-12.8-4.3-17.1-9.6-16-22.9\r\n       c1.6-17.1,4.3-34.1,7.5-50.6c5.3-27.7,11.2-54.9,18.1-82.1c9.6-36.2,22.4-71.4,37.3-106.1c21.9-50.1,46.9-98.6,78.4-143.4\r\n       c12.8-17.6,26.1-35.2,43.2-49c7.5-5.9,15.5-11.2,23.5-14.9c13.9-5.9,26.1-3.2,36.8,7.5c16.5,16.5,21.3,36.2,14.9,58.6\r\n       c-4.3,16-11.7,30.4-19.2,44.8c-12.8,23.5-27.7,44.8-43.7,66.1c-32.5,42.6-68.8,82.1-108.7,117.8c-2.7,2.1-4.8,4.8-5.9,8\r\n       c-10.1,28.3-19.2,56.5-28.8,84.2c-0.5,2.7-1.1,5.3-2.1,7.5c0.5,0,1.1,0.5,1.1,0.5L2375,417.8z M2415,286.1c0.5,0,1.1,0.5,1.6,1.1\r\n       c1.1-1.6,2.7-2.7,4.3-4.3l65.6-73c19.7-22.4,38.9-46.4,54.9-72.5c9.1-15.5,17.6-31.4,21.9-49.6c1.6-6.9,2.7-14.4,2.1-21.3\r\n       c-1.6-15.5-9.6-19.2-22.4-10.1c-5.9,4.3-11.7,9.1-16.5,14.9c-10.7,12.8-20.8,25.6-29.8,39.4c-24.5,38.4-43.7,80-60.8,122.1\r\n       L2415,286.1z M2499.7,411.9c-11.2,7.5-22.4,15.5-32,25.1c-9.1,8-17.1,17.6-25.1,27.2c-4.8,5.3-8,12.3-10.1,20.8\r\n       C2462.9,466.8,2482.1,440.2,2499.7,411.9z\"\r\n      />\r\n    </g>\r\n  </svg>\r\n  <div class=\"back-cover\"></div>\r\n  <div class=\"back-cover-player\"></div>\r\n\r\n  <div class=\"video-foreground\">\r\n    <iframe\r\n      src=\"https://www.youtube.com/embed/vqqt5p0q-eU?controls=0&showinfo=0&rel=0&mute=1&autoplay=1&loop=1&playlist=vqqt5p0q-eU\"\r\n      frameborder=\"0\"\r\n      allowfullscreen\r\n    ></iframe>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/containers/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/register/containers/register/register.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('fontawesome-webfont.eot?v=4.7.0');\n  src: url('fontawesome-webfont.eot?#iefix&v=4.7.0') format(\"embedded-opentype\"), url('fontawesome-webfont.woff2?v=4.7.0') format(\"woff2\"), url('fontawesome-webfont.woff?v=4.7.0') format(\"woff\"), url('fontawesome-webfont.ttf?v=4.7.0') format(\"truetype\"), url('fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n.fa-2x {\n  font-size: 2em; }\n.fa-3x {\n  font-size: 3em; }\n.fa-4x {\n  font-size: 4em; }\n.fa-5x {\n  font-size: 5em; }\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center; }\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n.fa-ul > li {\n    position: relative; }\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center; }\n.fa-li.fa-lg {\n    left: -1.85714286em; }\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n.fa-pull-left {\n  float: left; }\n.fa-pull-right {\n  float: right; }\n.fa.fa-pull-left {\n  margin-right: .3em; }\n.fa.fa-pull-right {\n  margin-left: .3em; }\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n.pull-left {\n  float: left; }\n.fa.pull-left {\n  margin-right: .3em; }\n.fa.pull-right {\n  margin-left: .3em; }\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1); }\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n.fa-stack-1x {\n  line-height: inherit; }\n.fa-stack-2x {\n  font-size: 2em; }\n.fa-inverse {\n  color: #fff; }\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\"; }\n.fa-music:before {\n  content: \"\"; }\n.fa-search:before {\n  content: \"\"; }\n.fa-envelope-o:before {\n  content: \"\"; }\n.fa-heart:before {\n  content: \"\"; }\n.fa-star:before {\n  content: \"\"; }\n.fa-star-o:before {\n  content: \"\"; }\n.fa-user:before {\n  content: \"\"; }\n.fa-film:before {\n  content: \"\"; }\n.fa-th-large:before {\n  content: \"\"; }\n.fa-th:before {\n  content: \"\"; }\n.fa-th-list:before {\n  content: \"\"; }\n.fa-check:before {\n  content: \"\"; }\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\"; }\n.fa-search-plus:before {\n  content: \"\"; }\n.fa-search-minus:before {\n  content: \"\"; }\n.fa-power-off:before {\n  content: \"\"; }\n.fa-signal:before {\n  content: \"\"; }\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\"; }\n.fa-trash-o:before {\n  content: \"\"; }\n.fa-home:before {\n  content: \"\"; }\n.fa-file-o:before {\n  content: \"\"; }\n.fa-clock-o:before {\n  content: \"\"; }\n.fa-road:before {\n  content: \"\"; }\n.fa-download:before {\n  content: \"\"; }\n.fa-arrow-circle-o-down:before {\n  content: \"\"; }\n.fa-arrow-circle-o-up:before {\n  content: \"\"; }\n.fa-inbox:before {\n  content: \"\"; }\n.fa-play-circle-o:before {\n  content: \"\"; }\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\"; }\n.fa-refresh:before {\n  content: \"\"; }\n.fa-list-alt:before {\n  content: \"\"; }\n.fa-lock:before {\n  content: \"\"; }\n.fa-flag:before {\n  content: \"\"; }\n.fa-headphones:before {\n  content: \"\"; }\n.fa-volume-off:before {\n  content: \"\"; }\n.fa-volume-down:before {\n  content: \"\"; }\n.fa-volume-up:before {\n  content: \"\"; }\n.fa-qrcode:before {\n  content: \"\"; }\n.fa-barcode:before {\n  content: \"\"; }\n.fa-tag:before {\n  content: \"\"; }\n.fa-tags:before {\n  content: \"\"; }\n.fa-book:before {\n  content: \"\"; }\n.fa-bookmark:before {\n  content: \"\"; }\n.fa-print:before {\n  content: \"\"; }\n.fa-camera:before {\n  content: \"\"; }\n.fa-font:before {\n  content: \"\"; }\n.fa-bold:before {\n  content: \"\"; }\n.fa-italic:before {\n  content: \"\"; }\n.fa-text-height:before {\n  content: \"\"; }\n.fa-text-width:before {\n  content: \"\"; }\n.fa-align-left:before {\n  content: \"\"; }\n.fa-align-center:before {\n  content: \"\"; }\n.fa-align-right:before {\n  content: \"\"; }\n.fa-align-justify:before {\n  content: \"\"; }\n.fa-list:before {\n  content: \"\"; }\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\"; }\n.fa-indent:before {\n  content: \"\"; }\n.fa-video-camera:before {\n  content: \"\"; }\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\"; }\n.fa-pencil:before {\n  content: \"\"; }\n.fa-map-marker:before {\n  content: \"\"; }\n.fa-adjust:before {\n  content: \"\"; }\n.fa-tint:before {\n  content: \"\"; }\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\"; }\n.fa-share-square-o:before {\n  content: \"\"; }\n.fa-check-square-o:before {\n  content: \"\"; }\n.fa-arrows:before {\n  content: \"\"; }\n.fa-step-backward:before {\n  content: \"\"; }\n.fa-fast-backward:before {\n  content: \"\"; }\n.fa-backward:before {\n  content: \"\"; }\n.fa-play:before {\n  content: \"\"; }\n.fa-pause:before {\n  content: \"\"; }\n.fa-stop:before {\n  content: \"\"; }\n.fa-forward:before {\n  content: \"\"; }\n.fa-fast-forward:before {\n  content: \"\"; }\n.fa-step-forward:before {\n  content: \"\"; }\n.fa-eject:before {\n  content: \"\"; }\n.fa-chevron-left:before {\n  content: \"\"; }\n.fa-chevron-right:before {\n  content: \"\"; }\n.fa-plus-circle:before {\n  content: \"\"; }\n.fa-minus-circle:before {\n  content: \"\"; }\n.fa-times-circle:before {\n  content: \"\"; }\n.fa-check-circle:before {\n  content: \"\"; }\n.fa-question-circle:before {\n  content: \"\"; }\n.fa-info-circle:before {\n  content: \"\"; }\n.fa-crosshairs:before {\n  content: \"\"; }\n.fa-times-circle-o:before {\n  content: \"\"; }\n.fa-check-circle-o:before {\n  content: \"\"; }\n.fa-ban:before {\n  content: \"\"; }\n.fa-arrow-left:before {\n  content: \"\"; }\n.fa-arrow-right:before {\n  content: \"\"; }\n.fa-arrow-up:before {\n  content: \"\"; }\n.fa-arrow-down:before {\n  content: \"\"; }\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\"; }\n.fa-expand:before {\n  content: \"\"; }\n.fa-compress:before {\n  content: \"\"; }\n.fa-plus:before {\n  content: \"\"; }\n.fa-minus:before {\n  content: \"\"; }\n.fa-asterisk:before {\n  content: \"\"; }\n.fa-exclamation-circle:before {\n  content: \"\"; }\n.fa-gift:before {\n  content: \"\"; }\n.fa-leaf:before {\n  content: \"\"; }\n.fa-fire:before {\n  content: \"\"; }\n.fa-eye:before {\n  content: \"\"; }\n.fa-eye-slash:before {\n  content: \"\"; }\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\"; }\n.fa-plane:before {\n  content: \"\"; }\n.fa-calendar:before {\n  content: \"\"; }\n.fa-random:before {\n  content: \"\"; }\n.fa-comment:before {\n  content: \"\"; }\n.fa-magnet:before {\n  content: \"\"; }\n.fa-chevron-up:before {\n  content: \"\"; }\n.fa-chevron-down:before {\n  content: \"\"; }\n.fa-retweet:before {\n  content: \"\"; }\n.fa-shopping-cart:before {\n  content: \"\"; }\n.fa-folder:before {\n  content: \"\"; }\n.fa-folder-open:before {\n  content: \"\"; }\n.fa-arrows-v:before {\n  content: \"\"; }\n.fa-arrows-h:before {\n  content: \"\"; }\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\"; }\n.fa-twitter-square:before {\n  content: \"\"; }\n.fa-facebook-square:before {\n  content: \"\"; }\n.fa-camera-retro:before {\n  content: \"\"; }\n.fa-key:before {\n  content: \"\"; }\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\"; }\n.fa-comments:before {\n  content: \"\"; }\n.fa-thumbs-o-up:before {\n  content: \"\"; }\n.fa-thumbs-o-down:before {\n  content: \"\"; }\n.fa-star-half:before {\n  content: \"\"; }\n.fa-heart-o:before {\n  content: \"\"; }\n.fa-sign-out:before {\n  content: \"\"; }\n.fa-linkedin-square:before {\n  content: \"\"; }\n.fa-thumb-tack:before {\n  content: \"\"; }\n.fa-external-link:before {\n  content: \"\"; }\n.fa-sign-in:before {\n  content: \"\"; }\n.fa-trophy:before {\n  content: \"\"; }\n.fa-github-square:before {\n  content: \"\"; }\n.fa-upload:before {\n  content: \"\"; }\n.fa-lemon-o:before {\n  content: \"\"; }\n.fa-phone:before {\n  content: \"\"; }\n.fa-square-o:before {\n  content: \"\"; }\n.fa-bookmark-o:before {\n  content: \"\"; }\n.fa-phone-square:before {\n  content: \"\"; }\n.fa-twitter:before {\n  content: \"\"; }\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\"; }\n.fa-github:before {\n  content: \"\"; }\n.fa-unlock:before {\n  content: \"\"; }\n.fa-credit-card:before {\n  content: \"\"; }\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\"; }\n.fa-hdd-o:before {\n  content: \"\"; }\n.fa-bullhorn:before {\n  content: \"\"; }\n.fa-bell:before {\n  content: \"\"; }\n.fa-certificate:before {\n  content: \"\"; }\n.fa-hand-o-right:before {\n  content: \"\"; }\n.fa-hand-o-left:before {\n  content: \"\"; }\n.fa-hand-o-up:before {\n  content: \"\"; }\n.fa-hand-o-down:before {\n  content: \"\"; }\n.fa-arrow-circle-left:before {\n  content: \"\"; }\n.fa-arrow-circle-right:before {\n  content: \"\"; }\n.fa-arrow-circle-up:before {\n  content: \"\"; }\n.fa-arrow-circle-down:before {\n  content: \"\"; }\n.fa-globe:before {\n  content: \"\"; }\n.fa-wrench:before {\n  content: \"\"; }\n.fa-tasks:before {\n  content: \"\"; }\n.fa-filter:before {\n  content: \"\"; }\n.fa-briefcase:before {\n  content: \"\"; }\n.fa-arrows-alt:before {\n  content: \"\"; }\n.fa-group:before,\n.fa-users:before {\n  content: \"\"; }\n.fa-chain:before,\n.fa-link:before {\n  content: \"\"; }\n.fa-cloud:before {\n  content: \"\"; }\n.fa-flask:before {\n  content: \"\"; }\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\"; }\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\"; }\n.fa-paperclip:before {\n  content: \"\"; }\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\"; }\n.fa-square:before {\n  content: \"\"; }\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\"; }\n.fa-list-ul:before {\n  content: \"\"; }\n.fa-list-ol:before {\n  content: \"\"; }\n.fa-strikethrough:before {\n  content: \"\"; }\n.fa-underline:before {\n  content: \"\"; }\n.fa-table:before {\n  content: \"\"; }\n.fa-magic:before {\n  content: \"\"; }\n.fa-truck:before {\n  content: \"\"; }\n.fa-pinterest:before {\n  content: \"\"; }\n.fa-pinterest-square:before {\n  content: \"\"; }\n.fa-google-plus-square:before {\n  content: \"\"; }\n.fa-google-plus:before {\n  content: \"\"; }\n.fa-money:before {\n  content: \"\"; }\n.fa-caret-down:before {\n  content: \"\"; }\n.fa-caret-up:before {\n  content: \"\"; }\n.fa-caret-left:before {\n  content: \"\"; }\n.fa-caret-right:before {\n  content: \"\"; }\n.fa-columns:before {\n  content: \"\"; }\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\"; }\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\"; }\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\"; }\n.fa-envelope:before {\n  content: \"\"; }\n.fa-linkedin:before {\n  content: \"\"; }\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\"; }\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\"; }\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\"; }\n.fa-comment-o:before {\n  content: \"\"; }\n.fa-comments-o:before {\n  content: \"\"; }\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\"; }\n.fa-sitemap:before {\n  content: \"\"; }\n.fa-umbrella:before {\n  content: \"\"; }\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\"; }\n.fa-lightbulb-o:before {\n  content: \"\"; }\n.fa-exchange:before {\n  content: \"\"; }\n.fa-cloud-download:before {\n  content: \"\"; }\n.fa-cloud-upload:before {\n  content: \"\"; }\n.fa-user-md:before {\n  content: \"\"; }\n.fa-stethoscope:before {\n  content: \"\"; }\n.fa-suitcase:before {\n  content: \"\"; }\n.fa-bell-o:before {\n  content: \"\"; }\n.fa-coffee:before {\n  content: \"\"; }\n.fa-cutlery:before {\n  content: \"\"; }\n.fa-file-text-o:before {\n  content: \"\"; }\n.fa-building-o:before {\n  content: \"\"; }\n.fa-hospital-o:before {\n  content: \"\"; }\n.fa-ambulance:before {\n  content: \"\"; }\n.fa-medkit:before {\n  content: \"\"; }\n.fa-fighter-jet:before {\n  content: \"\"; }\n.fa-beer:before {\n  content: \"\"; }\n.fa-h-square:before {\n  content: \"\"; }\n.fa-plus-square:before {\n  content: \"\"; }\n.fa-angle-double-left:before {\n  content: \"\"; }\n.fa-angle-double-right:before {\n  content: \"\"; }\n.fa-angle-double-up:before {\n  content: \"\"; }\n.fa-angle-double-down:before {\n  content: \"\"; }\n.fa-angle-left:before {\n  content: \"\"; }\n.fa-angle-right:before {\n  content: \"\"; }\n.fa-angle-up:before {\n  content: \"\"; }\n.fa-angle-down:before {\n  content: \"\"; }\n.fa-desktop:before {\n  content: \"\"; }\n.fa-laptop:before {\n  content: \"\"; }\n.fa-tablet:before {\n  content: \"\"; }\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\"; }\n.fa-circle-o:before {\n  content: \"\"; }\n.fa-quote-left:before {\n  content: \"\"; }\n.fa-quote-right:before {\n  content: \"\"; }\n.fa-spinner:before {\n  content: \"\"; }\n.fa-circle:before {\n  content: \"\"; }\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\"; }\n.fa-github-alt:before {\n  content: \"\"; }\n.fa-folder-o:before {\n  content: \"\"; }\n.fa-folder-open-o:before {\n  content: \"\"; }\n.fa-smile-o:before {\n  content: \"\"; }\n.fa-frown-o:before {\n  content: \"\"; }\n.fa-meh-o:before {\n  content: \"\"; }\n.fa-gamepad:before {\n  content: \"\"; }\n.fa-keyboard-o:before {\n  content: \"\"; }\n.fa-flag-o:before {\n  content: \"\"; }\n.fa-flag-checkered:before {\n  content: \"\"; }\n.fa-terminal:before {\n  content: \"\"; }\n.fa-code:before {\n  content: \"\"; }\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\"; }\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\"; }\n.fa-location-arrow:before {\n  content: \"\"; }\n.fa-crop:before {\n  content: \"\"; }\n.fa-code-fork:before {\n  content: \"\"; }\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\"; }\n.fa-question:before {\n  content: \"\"; }\n.fa-info:before {\n  content: \"\"; }\n.fa-exclamation:before {\n  content: \"\"; }\n.fa-superscript:before {\n  content: \"\"; }\n.fa-subscript:before {\n  content: \"\"; }\n.fa-eraser:before {\n  content: \"\"; }\n.fa-puzzle-piece:before {\n  content: \"\"; }\n.fa-microphone:before {\n  content: \"\"; }\n.fa-microphone-slash:before {\n  content: \"\"; }\n.fa-shield:before {\n  content: \"\"; }\n.fa-calendar-o:before {\n  content: \"\"; }\n.fa-fire-extinguisher:before {\n  content: \"\"; }\n.fa-rocket:before {\n  content: \"\"; }\n.fa-maxcdn:before {\n  content: \"\"; }\n.fa-chevron-circle-left:before {\n  content: \"\"; }\n.fa-chevron-circle-right:before {\n  content: \"\"; }\n.fa-chevron-circle-up:before {\n  content: \"\"; }\n.fa-chevron-circle-down:before {\n  content: \"\"; }\n.fa-html5:before {\n  content: \"\"; }\n.fa-css3:before {\n  content: \"\"; }\n.fa-anchor:before {\n  content: \"\"; }\n.fa-unlock-alt:before {\n  content: \"\"; }\n.fa-bullseye:before {\n  content: \"\"; }\n.fa-ellipsis-h:before {\n  content: \"\"; }\n.fa-ellipsis-v:before {\n  content: \"\"; }\n.fa-rss-square:before {\n  content: \"\"; }\n.fa-play-circle:before {\n  content: \"\"; }\n.fa-ticket:before {\n  content: \"\"; }\n.fa-minus-square:before {\n  content: \"\"; }\n.fa-minus-square-o:before {\n  content: \"\"; }\n.fa-level-up:before {\n  content: \"\"; }\n.fa-level-down:before {\n  content: \"\"; }\n.fa-check-square:before {\n  content: \"\"; }\n.fa-pencil-square:before {\n  content: \"\"; }\n.fa-external-link-square:before {\n  content: \"\"; }\n.fa-share-square:before {\n  content: \"\"; }\n.fa-compass:before {\n  content: \"\"; }\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\"; }\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\"; }\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\"; }\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\"; }\n.fa-gbp:before {\n  content: \"\"; }\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\"; }\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\"; }\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\"; }\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\"; }\n.fa-won:before,\n.fa-krw:before {\n  content: \"\"; }\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\"; }\n.fa-file:before {\n  content: \"\"; }\n.fa-file-text:before {\n  content: \"\"; }\n.fa-sort-alpha-asc:before {\n  content: \"\"; }\n.fa-sort-alpha-desc:before {\n  content: \"\"; }\n.fa-sort-amount-asc:before {\n  content: \"\"; }\n.fa-sort-amount-desc:before {\n  content: \"\"; }\n.fa-sort-numeric-asc:before {\n  content: \"\"; }\n.fa-sort-numeric-desc:before {\n  content: \"\"; }\n.fa-thumbs-up:before {\n  content: \"\"; }\n.fa-thumbs-down:before {\n  content: \"\"; }\n.fa-youtube-square:before {\n  content: \"\"; }\n.fa-youtube:before {\n  content: \"\"; }\n.fa-xing:before {\n  content: \"\"; }\n.fa-xing-square:before {\n  content: \"\"; }\n.fa-youtube-play:before {\n  content: \"\"; }\n.fa-dropbox:before {\n  content: \"\"; }\n.fa-stack-overflow:before {\n  content: \"\"; }\n.fa-instagram:before {\n  content: \"\"; }\n.fa-flickr:before {\n  content: \"\"; }\n.fa-adn:before {\n  content: \"\"; }\n.fa-bitbucket:before {\n  content: \"\"; }\n.fa-bitbucket-square:before {\n  content: \"\"; }\n.fa-tumblr:before {\n  content: \"\"; }\n.fa-tumblr-square:before {\n  content: \"\"; }\n.fa-long-arrow-down:before {\n  content: \"\"; }\n.fa-long-arrow-up:before {\n  content: \"\"; }\n.fa-long-arrow-left:before {\n  content: \"\"; }\n.fa-long-arrow-right:before {\n  content: \"\"; }\n.fa-apple:before {\n  content: \"\"; }\n.fa-windows:before {\n  content: \"\"; }\n.fa-android:before {\n  content: \"\"; }\n.fa-linux:before {\n  content: \"\"; }\n.fa-dribbble:before {\n  content: \"\"; }\n.fa-skype:before {\n  content: \"\"; }\n.fa-foursquare:before {\n  content: \"\"; }\n.fa-trello:before {\n  content: \"\"; }\n.fa-female:before {\n  content: \"\"; }\n.fa-male:before {\n  content: \"\"; }\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\"; }\n.fa-sun-o:before {\n  content: \"\"; }\n.fa-moon-o:before {\n  content: \"\"; }\n.fa-archive:before {\n  content: \"\"; }\n.fa-bug:before {\n  content: \"\"; }\n.fa-vk:before {\n  content: \"\"; }\n.fa-weibo:before {\n  content: \"\"; }\n.fa-renren:before {\n  content: \"\"; }\n.fa-pagelines:before {\n  content: \"\"; }\n.fa-stack-exchange:before {\n  content: \"\"; }\n.fa-arrow-circle-o-right:before {\n  content: \"\"; }\n.fa-arrow-circle-o-left:before {\n  content: \"\"; }\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\"; }\n.fa-dot-circle-o:before {\n  content: \"\"; }\n.fa-wheelchair:before {\n  content: \"\"; }\n.fa-vimeo-square:before {\n  content: \"\"; }\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\"; }\n.fa-plus-square-o:before {\n  content: \"\"; }\n.fa-space-shuttle:before {\n  content: \"\"; }\n.fa-slack:before {\n  content: \"\"; }\n.fa-envelope-square:before {\n  content: \"\"; }\n.fa-wordpress:before {\n  content: \"\"; }\n.fa-openid:before {\n  content: \"\"; }\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\"; }\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\"; }\n.fa-yahoo:before {\n  content: \"\"; }\n.fa-google:before {\n  content: \"\"; }\n.fa-reddit:before {\n  content: \"\"; }\n.fa-reddit-square:before {\n  content: \"\"; }\n.fa-stumbleupon-circle:before {\n  content: \"\"; }\n.fa-stumbleupon:before {\n  content: \"\"; }\n.fa-delicious:before {\n  content: \"\"; }\n.fa-digg:before {\n  content: \"\"; }\n.fa-pied-piper-pp:before {\n  content: \"\"; }\n.fa-pied-piper-alt:before {\n  content: \"\"; }\n.fa-drupal:before {\n  content: \"\"; }\n.fa-joomla:before {\n  content: \"\"; }\n.fa-language:before {\n  content: \"\"; }\n.fa-fax:before {\n  content: \"\"; }\n.fa-building:before {\n  content: \"\"; }\n.fa-child:before {\n  content: \"\"; }\n.fa-paw:before {\n  content: \"\"; }\n.fa-spoon:before {\n  content: \"\"; }\n.fa-cube:before {\n  content: \"\"; }\n.fa-cubes:before {\n  content: \"\"; }\n.fa-behance:before {\n  content: \"\"; }\n.fa-behance-square:before {\n  content: \"\"; }\n.fa-steam:before {\n  content: \"\"; }\n.fa-steam-square:before {\n  content: \"\"; }\n.fa-recycle:before {\n  content: \"\"; }\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\"; }\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\"; }\n.fa-tree:before {\n  content: \"\"; }\n.fa-spotify:before {\n  content: \"\"; }\n.fa-deviantart:before {\n  content: \"\"; }\n.fa-soundcloud:before {\n  content: \"\"; }\n.fa-database:before {\n  content: \"\"; }\n.fa-file-pdf-o:before {\n  content: \"\"; }\n.fa-file-word-o:before {\n  content: \"\"; }\n.fa-file-excel-o:before {\n  content: \"\"; }\n.fa-file-powerpoint-o:before {\n  content: \"\"; }\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\"; }\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\"; }\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\"; }\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\"; }\n.fa-file-code-o:before {\n  content: \"\"; }\n.fa-vine:before {\n  content: \"\"; }\n.fa-codepen:before {\n  content: \"\"; }\n.fa-jsfiddle:before {\n  content: \"\"; }\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\"; }\n.fa-circle-o-notch:before {\n  content: \"\"; }\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\"; }\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\"; }\n.fa-git-square:before {\n  content: \"\"; }\n.fa-git:before {\n  content: \"\"; }\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\"; }\n.fa-tencent-weibo:before {\n  content: \"\"; }\n.fa-qq:before {\n  content: \"\"; }\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\"; }\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\"; }\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\"; }\n.fa-history:before {\n  content: \"\"; }\n.fa-circle-thin:before {\n  content: \"\"; }\n.fa-header:before {\n  content: \"\"; }\n.fa-paragraph:before {\n  content: \"\"; }\n.fa-sliders:before {\n  content: \"\"; }\n.fa-share-alt:before {\n  content: \"\"; }\n.fa-share-alt-square:before {\n  content: \"\"; }\n.fa-bomb:before {\n  content: \"\"; }\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\"; }\n.fa-tty:before {\n  content: \"\"; }\n.fa-binoculars:before {\n  content: \"\"; }\n.fa-plug:before {\n  content: \"\"; }\n.fa-slideshare:before {\n  content: \"\"; }\n.fa-twitch:before {\n  content: \"\"; }\n.fa-yelp:before {\n  content: \"\"; }\n.fa-newspaper-o:before {\n  content: \"\"; }\n.fa-wifi:before {\n  content: \"\"; }\n.fa-calculator:before {\n  content: \"\"; }\n.fa-paypal:before {\n  content: \"\"; }\n.fa-google-wallet:before {\n  content: \"\"; }\n.fa-cc-visa:before {\n  content: \"\"; }\n.fa-cc-mastercard:before {\n  content: \"\"; }\n.fa-cc-discover:before {\n  content: \"\"; }\n.fa-cc-amex:before {\n  content: \"\"; }\n.fa-cc-paypal:before {\n  content: \"\"; }\n.fa-cc-stripe:before {\n  content: \"\"; }\n.fa-bell-slash:before {\n  content: \"\"; }\n.fa-bell-slash-o:before {\n  content: \"\"; }\n.fa-trash:before {\n  content: \"\"; }\n.fa-copyright:before {\n  content: \"\"; }\n.fa-at:before {\n  content: \"\"; }\n.fa-eyedropper:before {\n  content: \"\"; }\n.fa-paint-brush:before {\n  content: \"\"; }\n.fa-birthday-cake:before {\n  content: \"\"; }\n.fa-area-chart:before {\n  content: \"\"; }\n.fa-pie-chart:before {\n  content: \"\"; }\n.fa-line-chart:before {\n  content: \"\"; }\n.fa-lastfm:before {\n  content: \"\"; }\n.fa-lastfm-square:before {\n  content: \"\"; }\n.fa-toggle-off:before {\n  content: \"\"; }\n.fa-toggle-on:before {\n  content: \"\"; }\n.fa-bicycle:before {\n  content: \"\"; }\n.fa-bus:before {\n  content: \"\"; }\n.fa-ioxhost:before {\n  content: \"\"; }\n.fa-angellist:before {\n  content: \"\"; }\n.fa-cc:before {\n  content: \"\"; }\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\"; }\n.fa-meanpath:before {\n  content: \"\"; }\n.fa-buysellads:before {\n  content: \"\"; }\n.fa-connectdevelop:before {\n  content: \"\"; }\n.fa-dashcube:before {\n  content: \"\"; }\n.fa-forumbee:before {\n  content: \"\"; }\n.fa-leanpub:before {\n  content: \"\"; }\n.fa-sellsy:before {\n  content: \"\"; }\n.fa-shirtsinbulk:before {\n  content: \"\"; }\n.fa-simplybuilt:before {\n  content: \"\"; }\n.fa-skyatlas:before {\n  content: \"\"; }\n.fa-cart-plus:before {\n  content: \"\"; }\n.fa-cart-arrow-down:before {\n  content: \"\"; }\n.fa-diamond:before {\n  content: \"\"; }\n.fa-ship:before {\n  content: \"\"; }\n.fa-user-secret:before {\n  content: \"\"; }\n.fa-motorcycle:before {\n  content: \"\"; }\n.fa-street-view:before {\n  content: \"\"; }\n.fa-heartbeat:before {\n  content: \"\"; }\n.fa-venus:before {\n  content: \"\"; }\n.fa-mars:before {\n  content: \"\"; }\n.fa-mercury:before {\n  content: \"\"; }\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\"; }\n.fa-transgender-alt:before {\n  content: \"\"; }\n.fa-venus-double:before {\n  content: \"\"; }\n.fa-mars-double:before {\n  content: \"\"; }\n.fa-venus-mars:before {\n  content: \"\"; }\n.fa-mars-stroke:before {\n  content: \"\"; }\n.fa-mars-stroke-v:before {\n  content: \"\"; }\n.fa-mars-stroke-h:before {\n  content: \"\"; }\n.fa-neuter:before {\n  content: \"\"; }\n.fa-genderless:before {\n  content: \"\"; }\n.fa-facebook-official:before {\n  content: \"\"; }\n.fa-pinterest-p:before {\n  content: \"\"; }\n.fa-whatsapp:before {\n  content: \"\"; }\n.fa-server:before {\n  content: \"\"; }\n.fa-user-plus:before {\n  content: \"\"; }\n.fa-user-times:before {\n  content: \"\"; }\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\"; }\n.fa-viacoin:before {\n  content: \"\"; }\n.fa-train:before {\n  content: \"\"; }\n.fa-subway:before {\n  content: \"\"; }\n.fa-medium:before {\n  content: \"\"; }\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\"; }\n.fa-optin-monster:before {\n  content: \"\"; }\n.fa-opencart:before {\n  content: \"\"; }\n.fa-expeditedssl:before {\n  content: \"\"; }\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\"; }\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\"; }\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\"; }\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\"; }\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\"; }\n.fa-mouse-pointer:before {\n  content: \"\"; }\n.fa-i-cursor:before {\n  content: \"\"; }\n.fa-object-group:before {\n  content: \"\"; }\n.fa-object-ungroup:before {\n  content: \"\"; }\n.fa-sticky-note:before {\n  content: \"\"; }\n.fa-sticky-note-o:before {\n  content: \"\"; }\n.fa-cc-jcb:before {\n  content: \"\"; }\n.fa-cc-diners-club:before {\n  content: \"\"; }\n.fa-clone:before {\n  content: \"\"; }\n.fa-balance-scale:before {\n  content: \"\"; }\n.fa-hourglass-o:before {\n  content: \"\"; }\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\"; }\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\"; }\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\"; }\n.fa-hourglass:before {\n  content: \"\"; }\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\"; }\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\"; }\n.fa-hand-scissors-o:before {\n  content: \"\"; }\n.fa-hand-lizard-o:before {\n  content: \"\"; }\n.fa-hand-spock-o:before {\n  content: \"\"; }\n.fa-hand-pointer-o:before {\n  content: \"\"; }\n.fa-hand-peace-o:before {\n  content: \"\"; }\n.fa-trademark:before {\n  content: \"\"; }\n.fa-registered:before {\n  content: \"\"; }\n.fa-creative-commons:before {\n  content: \"\"; }\n.fa-gg:before {\n  content: \"\"; }\n.fa-gg-circle:before {\n  content: \"\"; }\n.fa-tripadvisor:before {\n  content: \"\"; }\n.fa-odnoklassniki:before {\n  content: \"\"; }\n.fa-odnoklassniki-square:before {\n  content: \"\"; }\n.fa-get-pocket:before {\n  content: \"\"; }\n.fa-wikipedia-w:before {\n  content: \"\"; }\n.fa-safari:before {\n  content: \"\"; }\n.fa-chrome:before {\n  content: \"\"; }\n.fa-firefox:before {\n  content: \"\"; }\n.fa-opera:before {\n  content: \"\"; }\n.fa-internet-explorer:before {\n  content: \"\"; }\n.fa-tv:before,\n.fa-television:before {\n  content: \"\"; }\n.fa-contao:before {\n  content: \"\"; }\n.fa-500px:before {\n  content: \"\"; }\n.fa-amazon:before {\n  content: \"\"; }\n.fa-calendar-plus-o:before {\n  content: \"\"; }\n.fa-calendar-minus-o:before {\n  content: \"\"; }\n.fa-calendar-times-o:before {\n  content: \"\"; }\n.fa-calendar-check-o:before {\n  content: \"\"; }\n.fa-industry:before {\n  content: \"\"; }\n.fa-map-pin:before {\n  content: \"\"; }\n.fa-map-signs:before {\n  content: \"\"; }\n.fa-map-o:before {\n  content: \"\"; }\n.fa-map:before {\n  content: \"\"; }\n.fa-commenting:before {\n  content: \"\"; }\n.fa-commenting-o:before {\n  content: \"\"; }\n.fa-houzz:before {\n  content: \"\"; }\n.fa-vimeo:before {\n  content: \"\"; }\n.fa-black-tie:before {\n  content: \"\"; }\n.fa-fonticons:before {\n  content: \"\"; }\n.fa-reddit-alien:before {\n  content: \"\"; }\n.fa-edge:before {\n  content: \"\"; }\n.fa-credit-card-alt:before {\n  content: \"\"; }\n.fa-codiepie:before {\n  content: \"\"; }\n.fa-modx:before {\n  content: \"\"; }\n.fa-fort-awesome:before {\n  content: \"\"; }\n.fa-usb:before {\n  content: \"\"; }\n.fa-product-hunt:before {\n  content: \"\"; }\n.fa-mixcloud:before {\n  content: \"\"; }\n.fa-scribd:before {\n  content: \"\"; }\n.fa-pause-circle:before {\n  content: \"\"; }\n.fa-pause-circle-o:before {\n  content: \"\"; }\n.fa-stop-circle:before {\n  content: \"\"; }\n.fa-stop-circle-o:before {\n  content: \"\"; }\n.fa-shopping-bag:before {\n  content: \"\"; }\n.fa-shopping-basket:before {\n  content: \"\"; }\n.fa-hashtag:before {\n  content: \"\"; }\n.fa-bluetooth:before {\n  content: \"\"; }\n.fa-bluetooth-b:before {\n  content: \"\"; }\n.fa-percent:before {\n  content: \"\"; }\n.fa-gitlab:before {\n  content: \"\"; }\n.fa-wpbeginner:before {\n  content: \"\"; }\n.fa-wpforms:before {\n  content: \"\"; }\n.fa-envira:before {\n  content: \"\"; }\n.fa-universal-access:before {\n  content: \"\"; }\n.fa-wheelchair-alt:before {\n  content: \"\"; }\n.fa-question-circle-o:before {\n  content: \"\"; }\n.fa-blind:before {\n  content: \"\"; }\n.fa-audio-description:before {\n  content: \"\"; }\n.fa-volume-control-phone:before {\n  content: \"\"; }\n.fa-braille:before {\n  content: \"\"; }\n.fa-assistive-listening-systems:before {\n  content: \"\"; }\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\"; }\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\"; }\n.fa-glide:before {\n  content: \"\"; }\n.fa-glide-g:before {\n  content: \"\"; }\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\"; }\n.fa-low-vision:before {\n  content: \"\"; }\n.fa-viadeo:before {\n  content: \"\"; }\n.fa-viadeo-square:before {\n  content: \"\"; }\n.fa-snapchat:before {\n  content: \"\"; }\n.fa-snapchat-ghost:before {\n  content: \"\"; }\n.fa-snapchat-square:before {\n  content: \"\"; }\n.fa-pied-piper:before {\n  content: \"\"; }\n.fa-first-order:before {\n  content: \"\"; }\n.fa-yoast:before {\n  content: \"\"; }\n.fa-themeisle:before {\n  content: \"\"; }\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\"; }\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\"; }\n.fa-handshake-o:before {\n  content: \"\"; }\n.fa-envelope-open:before {\n  content: \"\"; }\n.fa-envelope-open-o:before {\n  content: \"\"; }\n.fa-linode:before {\n  content: \"\"; }\n.fa-address-book:before {\n  content: \"\"; }\n.fa-address-book-o:before {\n  content: \"\"; }\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\"; }\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\"; }\n.fa-user-circle:before {\n  content: \"\"; }\n.fa-user-circle-o:before {\n  content: \"\"; }\n.fa-user-o:before {\n  content: \"\"; }\n.fa-id-badge:before {\n  content: \"\"; }\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\"; }\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\"; }\n.fa-quora:before {\n  content: \"\"; }\n.fa-free-code-camp:before {\n  content: \"\"; }\n.fa-telegram:before {\n  content: \"\"; }\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\"; }\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\"; }\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\"; }\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\"; }\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\"; }\n.fa-shower:before {\n  content: \"\"; }\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\"; }\n.fa-podcast:before {\n  content: \"\"; }\n.fa-window-maximize:before {\n  content: \"\"; }\n.fa-window-minimize:before {\n  content: \"\"; }\n.fa-window-restore:before {\n  content: \"\"; }\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\"; }\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\"; }\n.fa-bandcamp:before {\n  content: \"\"; }\n.fa-grav:before {\n  content: \"\"; }\n.fa-etsy:before {\n  content: \"\"; }\n.fa-imdb:before {\n  content: \"\"; }\n.fa-ravelry:before {\n  content: \"\"; }\n.fa-eercast:before {\n  content: \"\"; }\n.fa-microchip:before {\n  content: \"\"; }\n.fa-snowflake-o:before {\n  content: \"\"; }\n.fa-superpowers:before {\n  content: \"\"; }\n.fa-wpexplorer:before {\n  content: \"\"; }\n.fa-meetup:before {\n  content: \"\"; }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n.registerAll {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  min-height: 100vh;\n  color: #ffffff;\n  font-family: 'Agency FB', sans-serif;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.wrapper {\n  margin-top: 120px;\n  display: flex;\n  -moz-flex-direction: column;\n  -o-flex-direction: column;\n  flex-direction: column;\n  opacity: 1;\n  min-width: 30%;\n  -webkit-animation: content 6s ease-out;\n          animation: content 6s ease-out; }\n.reg-form-container {\n  background: #fff;\n  box-shadow: 0 0 35px rgba(0, 0, 0, 0.4);\n  padding: 25px;\n  border-radius: 6px;\n  position: relative;\n  min-height: 420px;\n  z-index: 10; }\n.reg-form-container::before {\n  content: '';\n  background: rgba(255, 255, 255, 0.1);\n  width: 95%;\n  height: 70%;\n  border-radius: 6px;\n  position: absolute;\n  right: -15px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: -2; }\n.reg-form-container::after {\n  content: '';\n  background: rgba(255, 255, 255, 0.1);\n  width: 90%;\n  height: 65%;\n  border-radius: 6px;\n  position: absolute;\n  right: -30px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: -1; }\n.reg-options::before {\n  content: '';\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));\n  height: 70%;\n  width: 50px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateX(-100%) translateY(-50%);\n          transform: translateX(-100%) translateY(-50%);\n  border-radius: 6px 0 0 6px;\n  z-index: -1; }\n.nav-tabs {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-60%) rotate(270deg);\n          transform: translateY(-50%) translateX(-60%) rotate(270deg);\n  border: none;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -moz-flex-direction: row;\n  -o-flex-direction: row;\n  flex-direction: row; }\n.nav-tabs > li {\n  margin-left: 15px;\n  margin-right: 15px;\n  position: relative; }\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px; }\n.reg::after {\n  content: '';\n  background: rgba(255, 255, 255, 0.1);\n  height: 25px;\n  width: 1px;\n  position: absolute;\n  right: -20px;\n  top: 5px; }\nbutton {\n  background: transparent;\n  color: #939598;\n  padding: 5px 30px;\n  min-width: 100px;\n  border-radius: 30px;\n  font-size: 14px;\n  font-weight: 700;\n  text-align: center;\n  border: none;\n  display: block; }\n.active {\n  background: transparent;\n  color: #fff;\n  font-weight: 700;\n  border: none; }\nbutton:hover {\n  cursor: pointer; }\n/*Social Icons*/\nul {\n  text-align: center;\n  z-index: 11;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -moz-flex-direction: row;\n  -o-flex-direction: row;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 0; }\nul.list-inline li {\n  border: none;\n  margin-left: 10px; }\nul.list-inline li a {\n  color: #fff; }\nul.list-inline li a:hover {\n  color: #27aae1;\n  transition: all 0.5s; }\ni {\n  color: #ffffff; }\n.alertAll {\n  position: absolute;\n  color: #27aae1;\n  background: #f1f2f2;\n  z-index: 100;\n  width: 60%;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);\n  border-radius: 8px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%);\n  padding: 10px 15px 10px 15px; }\n.did {\n  color: #27aae1;\n  float: right; }\n.video-background {\n  background: #000;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -99; }\n.video-foreground,\n.video-background iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n@media (min-aspect-ratio: 16 / 9) {\n  .video-foreground {\n    height: 300%;\n    top: -100%; } }\n@media (max-aspect-ratio: 16 / 9) {\n  .video-foreground {\n    width: 300%;\n    left: -100%; } }\n.back-cover-player,\n.back-cover {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  content: '';\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://thunder-team.com/friend-finder/images/bg/bg-3.jpg) fixed no-repeat; }\n.back-cover-player {\n  -webkit-animation: back-fadeout 26.7s  1s ease-out infinite;\n          animation: back-fadeout 26.7s  1s ease-out infinite; }\n.back-cover {\n  -webkit-animation: fadeout 10s linear;\n          animation: fadeout 10s linear; }\n.logo {\n  position: absolute;\n  z-index: 2;\n  width: 500px;\n  top: 12%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: logo-wraper 5.5s ease-in-out;\n          animation: logo-wraper 5.5s ease-in-out; }\npath {\n  stroke: #fff;\n  fill: #fff;\n  stroke-dasharray: 3800;\n  opacity: 10;\n  -webkit-animation: logo-path 3s cubic-bezier(0, 0.23, 1, 0.1);\n          animation: logo-path 3s cubic-bezier(0, 0.23, 1, 0.1); }\n@-webkit-keyframes logo-path {\n  0% {\n    opacity: 0;\n    fill: none;\n    stroke-dashoffset: 3800; }\n  30% {\n    opacity: 10;\n    fill: none;\n    stroke-dashoffset: 3800; }\n  90% {\n    fill: rgba(255, 255, 255, 0); }\n  100% {\n    fill: white;\n    stroke-dashoffset: 0; } }\n@keyframes logo-path {\n  0% {\n    opacity: 0;\n    fill: none;\n    stroke-dashoffset: 3800; }\n  30% {\n    opacity: 10;\n    fill: none;\n    stroke-dashoffset: 3800; }\n  90% {\n    fill: rgba(255, 255, 255, 0); }\n  100% {\n    fill: white;\n    stroke-dashoffset: 0; } }\n@-webkit-keyframes logo-wraper {\n  0% {\n    top: 50%; }\n  70% {\n    top: 50%; }\n  100% {\n    top: 12%; } }\n@keyframes logo-wraper {\n  0% {\n    top: 50%; }\n  70% {\n    top: 50%; }\n  100% {\n    top: 12%; } }\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@-webkit-keyframes back-fadeout {\n  0% {\n    opacity: 1; }\n  5% {\n    opacity: 1; }\n  30% {\n    opacity: 0; }\n  80% {\n    opacity: 0; }\n  95% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n@keyframes back-fadeout {\n  0% {\n    opacity: 1; }\n  5% {\n    opacity: 1; }\n  30% {\n    opacity: 0; }\n  80% {\n    opacity: 0; }\n  95% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n@-webkit-keyframes content {\n  0% {\n    opacity: 0; }\n  90% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes content {\n  0% {\n    opacity: 0; }\n  90% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@media screen and (max-width: 460px) {\n  .wrapper {\n    min-width: 60%; }\n  .reg-form-container {\n    padding: 15px; } }\n"

/***/ }),

/***/ "./src/app/register/containers/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/register/containers/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.login = true;
        this.register = false;
        this.recovery = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.changeRegister = function () {
        this.login = false;
        this.register = true;
        this.recovery = false;
    };
    RegisterComponent.prototype.changeLogin = function () {
        this.login = true;
        this.register = false;
        this.recovery = false;
    };
    RegisterComponent.prototype.btnClickRecovery = function (recovery) {
        this.login = false;
        this.register = false;
        this.recovery = true;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/containers/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/containers/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/module.ts":
/*!************************************!*\
  !*** ./src/app/register/module.ts ***!
  \************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing.module */ "./src/app/register/routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _store_effects_register_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/effects/register.effects */ "./src/app/register/store/effects/register.effects.ts");
/* harmony import */ var _store_effects_login_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects/login.effects */ "./src/app/register/store/effects/login.effects.ts");
/* harmony import */ var _store_effects_password_recovery_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/password-recovery.effects */ "./src/app/register/store/effects/password-recovery.effects.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./src/app/register/store/index.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _components_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/password-recovery/password-recovery.component */ "./src/app/register/components/password-recovery/password-recovery.component.ts");
/* harmony import */ var _components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/check-in/check-in.component */ "./src/app/register/components/check-in/check-in.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/register/components/log-in/log-in.component.ts");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/register/register.component */ "./src/app/register/containers/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _containers_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_13__["CheckInComponent"],
                _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_14__["LogInComponent"],
                _components_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_12__["PasswordRecoveryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('auth', _store__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_store_effects_register_effects__WEBPACK_IMPORTED_MODULE_7__["RegisterEffect"], _store_effects_login_effects__WEBPACK_IMPORTED_MODULE_8__["LoginEffect"], _store_effects_password_recovery_effects__WEBPACK_IMPORTED_MODULE_9__["EmailEffect"]])
            ],
            providers: [
                _service_register_service__WEBPACK_IMPORTED_MODULE_11__["RegisterService"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/register/routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/register/routing.module.ts ***!
  \********************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/register/register.component */ "./src/app/register/containers/register/register.component.ts");
/* harmony import */ var _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/components/change-password/change-password.component */ "./src/app/core/components/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _containers_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'auth/reset_password',
        component: _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]
    }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/store/actions/password-recovery.actions.ts":
/*!*********************************************************************!*\
  !*** ./src/app/register/store/actions/password-recovery.actions.ts ***!
  \*********************************************************************/
/*! exports provided: EmailsActionTypes, GetEmail, GetEmailSuccess, GetEmailFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsActionTypes", function() { return EmailsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEmail", function() { return GetEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEmailSuccess", function() { return GetEmailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEmailFail", function() { return GetEmailFail; });
var EmailsActionTypes;
(function (EmailsActionTypes) {
    EmailsActionTypes["GET_EMAIL"] = "[EMAIL] Fetch email requested";
    EmailsActionTypes["GET_EMAIL_SUCCESS"] = "[EMAIL] Fetch email success";
    EmailsActionTypes["GET_EMAIL_FAIL"] = "[EMAIL] Fetch email failed";
})(EmailsActionTypes || (EmailsActionTypes = {}));
var GetEmail = /** @class */ (function () {
    function GetEmail(payload) {
        this.payload = payload;
        this.type = EmailsActionTypes.GET_EMAIL;
    }
    return GetEmail;
}());

var GetEmailSuccess = /** @class */ (function () {
    function GetEmailSuccess(payload) {
        this.payload = payload;
        this.type = EmailsActionTypes.GET_EMAIL_SUCCESS;
    }
    return GetEmailSuccess;
}());

var GetEmailFail = /** @class */ (function () {
    function GetEmailFail(error) {
        this.error = error;
        this.type = EmailsActionTypes.GET_EMAIL_FAIL;
    }
    return GetEmailFail;
}());



/***/ }),

/***/ "./src/app/register/store/actions/register.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/register/store/actions/register.actions.ts ***!
  \************************************************************/
/*! exports provided: RegisterActionTypes, GetLogin, GetLoginSuccess, GetLoginFail, GetRegister, GetRegisterSuccess, GetRegisterFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterActionTypes", function() { return RegisterActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLogin", function() { return GetLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLoginSuccess", function() { return GetLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLoginFail", function() { return GetLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRegister", function() { return GetRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRegisterSuccess", function() { return GetRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRegisterFail", function() { return GetRegisterFail; });
var RegisterActionTypes;
(function (RegisterActionTypes) {
    RegisterActionTypes["GET_LOGIN"] = "[LOGIN] Fetch login requested";
    RegisterActionTypes["GET_LOGIN_SUCCESS"] = "[LOGIN] Fetch login success";
    RegisterActionTypes["GET_LOGIN_FAIL"] = "[LOGIN] Fetch login failed";
    RegisterActionTypes["GET_REGISTER"] = "[REGISTER] Fetch register requested";
    RegisterActionTypes["GET_REGISTER_SUCCESS"] = "[REGISTER] Fetch register success";
    RegisterActionTypes["GET_REGISTER_FAIL"] = "[REGISTER] Fetch register failed";
})(RegisterActionTypes || (RegisterActionTypes = {}));
var GetLogin = /** @class */ (function () {
    function GetLogin(payload) {
        this.payload = payload;
        this.type = RegisterActionTypes.GET_LOGIN;
    }
    return GetLogin;
}());

var GetLoginSuccess = /** @class */ (function () {
    function GetLoginSuccess(payload) {
        this.payload = payload;
        this.type = RegisterActionTypes.GET_LOGIN_SUCCESS;
    }
    return GetLoginSuccess;
}());

var GetLoginFail = /** @class */ (function () {
    function GetLoginFail(error) {
        this.error = error;
        this.type = RegisterActionTypes.GET_LOGIN_FAIL;
    }
    return GetLoginFail;
}());

var GetRegister = /** @class */ (function () {
    function GetRegister(payload) {
        this.payload = payload;
        this.type = RegisterActionTypes.GET_REGISTER;
    }
    return GetRegister;
}());

var GetRegisterSuccess = /** @class */ (function () {
    function GetRegisterSuccess(payload) {
        this.payload = payload;
        this.type = RegisterActionTypes.GET_REGISTER_SUCCESS;
    }
    return GetRegisterSuccess;
}());

var GetRegisterFail = /** @class */ (function () {
    function GetRegisterFail(error) {
        this.error = error;
        this.type = RegisterActionTypes.GET_REGISTER_FAIL;
    }
    return GetRegisterFail;
}());



/***/ }),

/***/ "./src/app/register/store/effects/login.effects.ts":
/*!*********************************************************!*\
  !*** ./src/app/register/store/effects/login.effects.ts ***!
  \*********************************************************/
/*! exports provided: LoginEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEffect", function() { return LoginEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/register/store/actions/register.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginEffect = /** @class */ (function () {
    function LoginEffect(actions$, networkService, registerService, alertService, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.networkService = networkService;
        this.registerService = registerService;
        this.alertService = alertService;
        this.router = router;
        this.store = store;
        this.getIsLogin$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_4__["RegisterActionTypes"].GET_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) { return _this.registerService.login(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            sessionStorage.setItem('permissionToEnter', JSON.stringify(data));
            sessionStorage.setItem('token', data['data'].token);
            _this.registerService.permissionSubject.next(data);
            _this.networkService.profileСhange('profile');
            _this.router.navigate(['/network/profile']);
            return new _actions_register_actions__WEBPACK_IMPORTED_MODULE_4__["GetLoginSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.alertService.error('The email or password entered are not the same as those stored in our database. Check that the entered data is correct and try again.', true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_register_actions__WEBPACK_IMPORTED_MODULE_4__["GetLoginFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], LoginEffect.prototype, "getIsLogin$", void 0);
    LoginEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"],
            _service_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], LoginEffect);
    return LoginEffect;
}());



/***/ }),

/***/ "./src/app/register/store/effects/password-recovery.effects.ts":
/*!*********************************************************************!*\
  !*** ./src/app/register/store/effects/password-recovery.effects.ts ***!
  \*********************************************************************/
/*! exports provided: EmailEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailEffect", function() { return EmailEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/password-recovery.actions */ "./src/app/register/store/actions/password-recovery.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmailEffect = /** @class */ (function () {
    function EmailEffect(actions$, registerService, alertService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.registerService = registerService;
        this.alertService = alertService;
        this.router = router;
        this.getIsEmail$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_4__["EmailsActionTypes"].GET_EMAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) { return _this.registerService.passwordRecovery(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            _this.alertService.success('You have requested a password reset, for this, use the link sent to your e-mail', true);
            return new _actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_4__["GetEmailSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.alertService.error('The email address you entered does not match the data stored in our database. Make sure the entered data is correct and try again.', true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_4__["GetEmailFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], EmailEffect.prototype, "getIsEmail$", void 0);
    EmailEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _service_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmailEffect);
    return EmailEffect;
}());



/***/ }),

/***/ "./src/app/register/store/effects/register.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/register/store/effects/register.effects.ts ***!
  \************************************************************/
/*! exports provided: RegisterEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEffect", function() { return RegisterEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/network.service */ "./src/app/shared/services/network.service.ts");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/register/store/actions/register.actions.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/alert.service */ "./src/app/register/service/alert.service.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/register.service */ "./src/app/register/service/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterEffect = /** @class */ (function () {
    function RegisterEffect(actions$, registerService, alertService, router, networkService) {
        var _this = this;
        this.actions$ = actions$;
        this.registerService = registerService;
        this.alertService = alertService;
        this.router = router;
        this.networkService = networkService;
        this.getIsRegister$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_6__["RegisterActionTypes"].GET_REGISTER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) { return _this.registerService.register(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.alertService.success('Registration successful', true);
            sessionStorage.setItem('permissionToEnter', JSON.stringify(data));
            sessionStorage.setItem('token', data['data'].token);
            _this.networkService.profileСhange('profile');
            _this.router.navigate(['']);
            return new _actions_register_actions__WEBPACK_IMPORTED_MODULE_6__["GetRegisterSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.error('Registration failed', true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_register_actions__WEBPACK_IMPORTED_MODULE_6__["GetRegisterFail"](err));
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], RegisterEffect.prototype, "getIsRegister$", void 0);
    RegisterEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _service_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]])
    ], RegisterEffect);
    return RegisterEffect;
}());



/***/ }),

/***/ "./src/app/register/store/index.ts":
/*!*****************************************!*\
  !*** ./src/app/register/store/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, getIsAuthorization, getEmail, getIsEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuthorization", function() { return getIsAuthorization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmail", function() { return getEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsEmail", function() { return getIsEmail; });
/* harmony import */ var _reducers_register_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/register.reducer */ "./src/app/register/store/reducers/register.reducer.ts");
/* harmony import */ var _reducers_password_recovery_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/password-recovery.reducer */ "./src/app/register/store/reducers/password-recovery.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var reducers = {
    authorization: _reducers_register_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    email: _reducers_password_recovery_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getIsAuthorization = function (state) { return state.authorization; };
var getEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('auth');
var getIsEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getEmail, _reducers_password_recovery_reducer__WEBPACK_IMPORTED_MODULE_1__["selectIsemail"]);


/***/ }),

/***/ "./src/app/register/store/reducers/password-recovery.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/register/store/reducers/password-recovery.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: initialState, reducer, selectIsemail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsemail", function() { return selectIsemail; });
/* harmony import */ var _actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/password-recovery.actions */ "./src/app/register/store/actions/password-recovery.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isPasswordRecovery: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_password_recovery_actions__WEBPACK_IMPORTED_MODULE_0__["EmailsActionTypes"].GET_EMAIL_SUCCESS:
            return __assign({}, state, { isPasswordRecovery: action.payload });
        default:
            return state;
    }
}
var selectIsemail = function (state) { return state.email.isPasswordRecovery; };


/***/ }),

/***/ "./src/app/register/store/reducers/register.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/register/store/reducers/register.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/register/store/actions/register.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    authorization: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__["RegisterActionTypes"].GET_LOGIN_SUCCESS:
            return __assign({}, state, { authorization: true });
        case _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__["RegisterActionTypes"].GET_REGISTER_SUCCESS:
            return __assign({}, state, { authorization: true });
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=register-module.js.map