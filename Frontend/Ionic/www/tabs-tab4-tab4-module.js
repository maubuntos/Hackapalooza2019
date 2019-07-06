(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab4-tab4-module"],{

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(_id, name, position, office, salary) {
        if (_id === void 0) { _id = ''; }
        if (name === void 0) { name = ''; }
        if (position === void 0) { position = ''; }
        if (office === void 0) { office = ''; }
        if (salary === void 0) { salary = 0; }
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/employee */ "./src/app/models/employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.URL_API = 'http://localhost:3000/api/employees';
        this.selectedEmployee = new _models_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
    }
    EmployeeService.prototype.postEmployee = function (employee) {
        return this.http.post(this.URL_API, employee);
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.URL_API);
    };
    EmployeeService.prototype.putEmployee = function (employee) {
        return this.http.put(this.URL_API + ("/" + employee._id), employee);
    };
    EmployeeService.prototype.deleteEmployee = function (_id) {
        return this.http.delete(this.URL_API + ("/" + _id));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/tabs/tab4/tab4.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/tab4/tab4.module.ts ***!
  \******************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tabs/tab4/tab4.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_5__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_5__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tab4/tab4.page.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tab4/tab4.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/new-task']\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Mensajes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n      <form #employeeForm=\"ngForm\" (ngSubmit)=\"addEmployee(employeeForm)\">\n        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee._id\">\n        <ion-item>\n          <ion-label position=\"stacked\">Nombre:</ion-label>\n          <ion-input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.name\" placeholder=\"Enter your FullName\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Puesto:</ion-label>\n            <ion-input type=\"text\" name=\"position\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.position\" placeholder=\"Enter your Position\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Empresa:</ion-label>\n            <ion-input type=\"text\" name=\"office\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.office\" placeholder=\"Enter your Office\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Salario:</ion-label>\n            <ion-input type=\"text\" name=\"salary\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.salary\" value=\"0\" placeholder=\"Enter your Salary\"></ion-input>\n        </ion-item>\n        <ion-button class=\"submit-btn\" expand=\"block\" fill=\"solid\" type=\"submit\">Guardar</ion-button>\n        <ion-button class=\"submit-btn\" expand=\"block\" fill=\"solid\" (click)=\"resetForm(employeeForm)\">Limpiar</ion-button>\n      </form>\n    </ion-card>\n    <ion-item *ngFor=\"let employee of employeeService.employees\">\n        <ion-avatar slot=\"start\">\n          <img src=\"../../../assets/imgs/thumbal.jpg\">\n        </ion-avatar>\n        <ion-label>\n          {{ employee.name }}\n        </ion-label>\n        <p>{{ employee.position }}</p>\n        <p>{{ employee.office }}</p>\n        <a (click)=\"editEmployee(employee)\">\n            <i class=\"material-icons\">edit</i>\n          </a>\n          <a (click)=\"deleteEmployeeAlert(employee._id, employeeForm)\">\n            <i class=\"material-icons\">delete</i>\n          </a>\n    </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/tab4/tab4.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/tab4/tab4.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFiNC90YWI0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tabs/tab4/tab4.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tab4/tab4.page.ts ***!
  \****************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/employee */ "./src/app/models/employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Tab4Page = /** @class */ (function () {
    function Tab4Page(employeeService, toastController, alertController) {
        this.employeeService = employeeService;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    Tab4Page.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    //Toast
    Tab4Page.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            position: 'top',
                            color: 'dark',
                            message: 'Your settings have been saved.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.addEmployee = function (form) {
        var _this = this;
        console.log(form.value);
        if (form.value._id) {
            this.employeeService.putEmployee(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                _this.getEmployees();
                _this.presentToast();
            });
        }
        else {
            this.employeeService.postEmployee(form.value)
                .subscribe(function (res) {
                _this.getEmployees();
                _this.resetForm(form);
                _this.presentToast();
            });
        }
    };
    Tab4Page.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (res) {
            _this.employeeService.employees = res;
        });
    };
    Tab4Page.prototype.editEmployee = function (employee) {
        this.employeeService.selectedEmployee = employee;
    };
    Tab4Page.prototype.deleteEmployee = function (_id, form) {
        var _this = this;
        if (confirm('Are you sure you want to delete it?')) {
            this.employeeService.deleteEmployee(_id)
                .subscribe(function (res) {
                _this.getEmployees();
                _this.resetForm(form);
                _this.presentToast();
            });
        }
    };
    //Delete employed
    Tab4Page.prototype.deleteEmployeeAlert = function (_id, form) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>text</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.employeeService.deleteEmployee(_id)
                                            .subscribe(function (res) {
                                            _this.getEmployees();
                                            _this.resetForm(form);
                                            _this.presentToast();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.employeeService.selectedEmployee = new _models_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"]();
        }
    };
    Tab4Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tabs/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tabs/tab4/tab4.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab4-tab4-module.js.map