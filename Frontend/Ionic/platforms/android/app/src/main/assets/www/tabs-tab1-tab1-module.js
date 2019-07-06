(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab1-tab1-module"],{

/***/ "./src/app/tabs/tab1/tab1.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/tab1/tab1.module.ts ***!
  \******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tabs/tab1/tab1.page.ts");
/* harmony import */ var _tab1_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.resolver */ "./src/app/tabs/tab1/tab1.resolver.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"],
        resolve: {
            data: _tab1_resolver__WEBPACK_IMPORTED_MODULE_6__["HomeResolver"]
        }
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]],
            providers: [
                _tab1_resolver__WEBPACK_IMPORTED_MODULE_6__["HomeResolver"]
            ]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tab1/tab1.page.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tab1/tab1.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/new-task']\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content *ngIf=\"items\" class=\"list-mini-content\" no-padding>\n  <ion-row no-padding>\n    <ion-col size-xl=\"4\" offset-xl=\"4\" size-lg=\"6\" offset-lg=\"3\" size-md=\"10\" offset-md=\"1\" size-sm=\"12\" no-padding>\n      <div *ngIf=\"items.length > 0\" class=\"list-mini\" no-padding>\n          <ion-card *ngFor=\"let item of items\" no-padding>\n              <ion-item lines=\"none\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"../../../assets/imgs/perfil.jpg\">\n                  </ion-avatar>\n                  <ion-label>Mauricio Garduño</ion-label>\n                  <ion-note>11h ago</ion-note>\n                  <ion-button fill=\"clear\"><ion-icon name=\"more\"></ion-icon></ion-button>\n              </ion-item>\n              <img [src]=\"item.payload.doc.data().image\">\n              <ion-card-content>\n                  <p>{{item.payload.doc.data().description}}</p>\n                  <ion-col>\n                      <ion-button fill=\"clear\" size=\"small\" [routerLink]=\"['/details', item.payload.doc.id]\">...Ver más</ion-button>\n                  </ion-col>\n              </ion-card-content>\n              \n                <ion-row text-center>\n                  <ion-col>\n                    <ion-button fill=\"clear\" size=\"small\"><ion-icon name=\"thumbs-up\"></ion-icon>Me gusta</ion-button>\n                  </ion-col>\n                  <ion-col>\n                    <ion-button fill=\"clear\" size=\"small\"><ion-icon name=\"text\"></ion-icon>Comentar</ion-button>\n                  </ion-col>\n                  <ion-col>\n                      <ion-button fill=\"clear\" size=\"small\"><ion-icon name=\"ios-redo\"></ion-icon>Compartir</ion-button>\n                  </ion-col>\n                </ion-row>\n            </ion-card>\n      </div>\n      <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n        No has publicado nada aún.\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content> -->\n\n<!-- <ion-content *ngIf=\"items\" class=\"list-mini-content\" no-padding>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher>\n  <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n    <ion-card>\n      <ion-item *ngFor=\"let item of items\" [routerLink]=\"['/details', item.payload.doc.id]\" class=\"animated bounceInRight\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"item.payload.doc.data().image\">\n        </ion-thumbnail>\n        <ion-label>{{item.payload.doc.data().title}}</ion-label>\n        <ion-button fill=\"clear\" slot=\"end\">Detalles</ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n  <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n    Ingresa un nuevo alimento.\n  </div>\n</ion-content> -->\n\n<ion-content>\n\n      <!-- <ngx-barcode [bc-value]=\"value\" [bc-display-value]=\"true\"></ngx-barcode>\n\n      <ngx-qrcode \n        [qrc-value] = \"qrData\"\n        qrc-class = \"aclass\"\n        qrc-errorCorrectionLevel = \"L\">\n      </ngx-qrcode> -->\n\n\n        <!-- QR de Págo -->\n  <!-- <qrcode [qrdata]=\"'Your QR code data string'\" [size]=\"256\" [level]=\"'M'\"></qrcode> -->\n  <ion-card class=\"animated zoomInDown\" mode=\"ios\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <div text-center>\n            <ngx-qrcode [qrc-value]=\"qrCode\"></ngx-qrcode>\n            <!-- <qrcode [qrdata]=\"'Your QR code data string'\" [size]=\"256\" [level]=\"'M'\"></qrcode> -->\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <h3>Págo De:</h3>\n          <div text-left *ngIf=\"createdCode\">\n            <a style=\"font-weight: bold; font-size: 32px; color:#616161;\">${{ createdCode }}</a>\n          </div>\n          <h4>Conexion ETH Wallet</h4>\n        </ion-col>\n      </ion-row>\n      <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </ion-card>\n\n  \n  </ion-content>\n\n<!-- Teclado de pago -->\n<ion-footer>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"oneButton()\">1</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"twoButton()\">2</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"threeButton()\">3</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"fourButton()\">4</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"fiveButton()\">5</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"sixButton()\">6</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"sevenButton()\">7</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"eightButton()\">8</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"nineButton()\">9</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"secondary\" expand=\"block\" (click)=\"alertNFC()\"><ion-icon name=\"wifi\"></ion-icon></ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"zeroButton()\">0</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" color=\"danger\" expand=\"block\" (click)=\"cleanButton()\"><ion-icon name=\"close\"></ion-icon></ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-footer>\n    \n"

/***/ }),

/***/ "./src/app/tabs/tab1/tab1.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/tab1/tab1.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-list {\n  font-size: 22px;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: var(--ion-color-medium); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmlvOGEvRXNjcml0b3Jpby9oYWNrYXBhbG9vemEvSGFja2FwYWxvb3phMjAxOS9Gcm9udGVuZC9Jb25pYy9zcmMvYXBwL3RhYnMvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktbGlzdCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tabs/tab1/tab1.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tab1/tab1.page.ts ***!
  \****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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






var Tab1Page = /** @class */ (function () {
    function Tab1Page(loadingCtrl, authService, router, route, alertController, actionSheetController) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.qrData = "0"; //Para integrar al createdCode
        this.createdCode = "0"; //Crea el QR
        //Variables JSON QR
        this.jsonQRot = "0001";
        this.jsonQRalias = "Alias";
        this.jsonQRcl = "012180004585820842";
        this.jsonQRtype = "CL";
        this.jsonQRrefn = "0";
        this.jsonQRrefa = "MAURICIO";
        this.jsonQRamount = "0";
        this.jsonQRbank = "00012";
        this.jsonQRcountry = "MX";
        this.jsonQRcurrency = "MXN";
        //Fin de Variable JSON QR
        //JSON QR
        this.obj = {
            "ot": this.jsonQRot,
            "dOp": [
                { "alias": this.jsonQRalias },
                { "cl": this.jsonQRcl },
                { "type": this.jsonQRtype },
                { "refn": this.jsonQRrefn },
                { "refa": this.jsonQRrefa },
                { "amount": this.qrData },
                { "bank": this.jsonQRbank },
                { "country": this.jsonQRcountry },
                { "currency": this.jsonQRcurrency }
            ]
        };
        this.qrDataJson = JSON.stringify(this.obj);
        this.qrURL = this.qrDataJson;
        this.User = "000001/";
        this.qrCode = this.qrURL.concat(this.User);
    }
    Tab1Page.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    Tab1Page.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    Tab1Page.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Cargando...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.route.data.subscribe(function (routeData) {
                            routeData['data'].subscribe(function (data) {
                                loading.dismiss();
                                _this.items = data;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.presentLoading = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log(err);
        });
    };
    //Alert
    Tab1Page.prototype.alertNFC = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Activación',
                            message: 'Deseas Activar NFC.',
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
                                        _this.presentActionSheet();
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
    //Back
    Tab1Page.prototype.presentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Listo para Escanear NFC',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Share',
                                    icon: 'share',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Play (open modal)',
                                    icon: 'arrow-dropright-circle',
                                    handler: function () {
                                        console.log('Play clicked');
                                    }
                                }, {
                                    text: 'Favorite',
                                    icon: 'heart',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    Tab1Page.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    //Control de Págo
    Tab1Page.prototype.oneButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "1";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "1";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.twoButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "2";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "2";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.threeButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "3";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "3";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.fourButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "4";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "4";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.fiveButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "5";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "5";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.sixButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "6";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "6";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.sevenButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "7";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "7";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.eightButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "8";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "8";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.nineButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "9";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "9";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.zeroButton = function () {
        if (this.qrData.length > 4) {
            this.createdCode = this.qrData.slice(0, 5);
            this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
        }
        else {
            if (this.qrData == "0") {
                this.qrData = "0";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
            else {
                this.qrData = this.qrData + "0";
                this.createdCode = this.qrData;
                this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
            }
        }
    };
    Tab1Page.prototype.cleanButton = function () {
        this.qrData = "0";
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode); //Crea un QR Completo
    };
    Tab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tabs/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tabs/tab1/tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ }),

/***/ "./src/app/tabs/tab1/tab1.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tab1/tab1.resolver.ts ***!
  \********************************************/
/*! exports provided: HomeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolver", function() { return HomeResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeResolver = /** @class */ (function () {
    function HomeResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    HomeResolver.prototype.resolve = function () {
        return this.firebaseService.getTasks();
    };
    HomeResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], HomeResolver);
    return HomeResolver;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab1-tab1-module.js.map