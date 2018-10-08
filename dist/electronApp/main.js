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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] }
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

var routingComponents = [_components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-homepage></app-homepage> -->\n\n<!-- <h1>Assalam o Alaikum!</h1> -->\n\n<router-outlet></router-outlet>\n\n"

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
    function AppComponent() {
        this.title = 'Screen Shoter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var ngx_fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-fs */ "./node_modules/ngx-fs/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/rooms.service */ "./src/app/services/rooms.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_fs__WEBPACK_IMPORTED_MODULE_7__["NgxFsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase, 'screenshot'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"]
            ],
            providers: [_services_rooms_service__WEBPACK_IMPORTED_MODULE_9__["RoomsService"], _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100 w-50\">\n  <div class=\"row h-100 align-items-center\">\n    <div class=\"container\">\n      <img class=\"img-fluid mx-auto d-block\" src=\"../../../assets/logo.jpg\" alt=\"Company name\">\n      <div *ngIf=\"!valid\" class=\"form-check pt-2 col-12\">\n        <p>{{roomMessage}}</p>\n      </div>\n      <form *ngIf=\"!isAudience\" class=\"form-group\" novalidate #roomForm=\"ngForm\" (ngSubmit)=\"submitForm(roomForm)\">\n        <!-- <div class=\"col-3\">\n          <div class=\"form-check\">\n            <input [(ngModel)]=\"person.type\" name=\"type\" #audience class=\"form-check-input\" type=\"radio\" value=\"Audience\" required>\n            <label class=\"form-check-label\">Audience</label>\n          </div>\n        </div> -->\n        <div class=\"form-check col-12 pt-2\">\n          <input [(ngModel)]=\"person.roomName\" name=\"roomName\" type=\"text\" class=\"form-control\" placeholder=\"Type room number\" autofocus required>\n        </div>\n        <div class=\"form-check pt-2 col-12\">\n          <input type=\"submit\" class=\"btn btn-block btn-outline-primary\" value=\"Join room\" [disabled]=\"valid\"/>\n        </div>\n      </form>\n      <div *ngIf=\"isAudience\" class=\"row col-12 d-flex justify-content-center\">\n        <button class=\"btn btn-success m-2\" type=\"button\" (click)=\"captureScreen()\" [disabled]=\"canCapture\">Capture screen</button>\n        <button class=\"btn btn-warning m-2\" type=\"button\" (click)=\"leaveRoom(true)\" [disabled]=\"canCapture\">Leave room: {{roomName}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rooms.service */ "./src/app/services/rooms.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var ngx_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-fs */ "./node_modules/ngx-fs/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(http, session, roomService, _fsService, afs, fbApp, storage) {
        this.http = http;
        this.session = session;
        this.roomService = roomService;
        this._fsService = _fsService;
        this.afs = afs;
        this.fbApp = fbApp;
        this.storage = storage;
        this.isAudience = false;
        this.captureFlag = false;
        this.iWant = false;
        this.prevCount = 0;
        this.valid = false;
        this.canCapture = false;
        this.once = false;
        this.person = {
            type: "Audience",
            roomName: null,
            token: null
        };
    }
    HomepageComponent.prototype.ngOnInit = function () {
        // console.log(typeof this.session.getRoom());
        // console.log(this.session.getRoom());
        if (this.session.getRoom() !== "undefined" && this.session.getRoom() !== null) {
            // console.log(this.session.getRoom() !== null);
            // console.log(this.session.getRoom() !== "null");
            // console.log(this.session.getRoom());
            this.audienceId = this.session.getAudienceId();
            this.roomName = this.session.getRoom();
            this.preSub = this.session.getPreSub();
            this.isAudience = true;
            return;
        }
        this.isAudience = false;
        // this.person.roomName = this.roomName;
        // console.log(this.roomName);
        // console.log(this.session.getAudienceId());
        this.startListening(true);
    };
    HomepageComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (form.valid) {
            // this.person.type = form.value.type;
            this.person.type = "Audience";
            this.person.roomName = form.value.roomName;
            this.roomName = this.person.roomName;
            this.valid = true;
            this.roomName = this.person.roomName;
            this.canCapture = false;
            this.roomService.addAudience(this.person)
                .then(function (result) {
                // alert(`Room:'${this.person.roomName}' joined`);
                _this.audienceId = result["id"];
                _this.session.setAudienceId(_this.audienceId);
                _this.isAudience = true;
                // console.log(this.roomName);
                // console.log(this.person.roomName);
                _this.session.setRoom(_this.person.roomName);
                // console.log(this.session.getRoom());
                _this.startListening(false);
                form.reset();
            })
                .catch(function (err) {
                console.log(err);
                _this.valid = false;
                _this.roomMessage = "Room: '" + _this.person.roomName + "' not found";
                // alert(`Room:'${this.person.roomName}' not found`);
            });
        }
        else {
            alert("Check the field!");
        }
    };
    HomepageComponent.prototype.startListening = function (go) {
        var _this = this;
        console.log("Here in listening..");
        var flag = true;
        if (this.preSub == undefined) {
            flag = false;
        }
        console.log(this.preSub);
        if (go) {
            return;
        }
        ;
        // console.log("Here in listening..");
        this.preSub = this.roomService.listenPresenter()
            .subscribe(function (uploaded) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (uploaded.length == 0) {
                    this.isAudience = false;
                    this.leaveRoom(false);
                    alert("Presenter has deleted the room!");
                    // this.session.setRoom(undefined);
                    // this.session.setAudienceId(undefined);
                }
                else {
                    if (this.iWant == false) {
                        return [2 /*return*/];
                    }
                    // if(flag == false) {
                    //   return this.captureScreen();
                    // }
                    uploaded.map(function (action) {
                        console.log(_this.preSub);
                        // console.log(action.payload.doc.data());
                        // console.log(action.payload.doc.get("screenshotUrl"));
                        // console.log(action.payload.doc.id);
                        var url, fullPath;
                        url = action.payload.doc.get("screenshotUrl");
                        fullPath = action.payload.doc.get("fullPath");
                        if (url == undefined) {
                            _this.canCapture = false;
                            _this.iWant = false;
                            return;
                        }
                        console.log(flag);
                        if (flag) {
                            var a = document.createElement('a');
                            a.href = url;
                            // a.type = "application/octet-stream";
                            a.type = "image/png";
                            a.download = url;
                            var ios = false;
                            if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                                console.log("Here i am...");
                                console.log(url);
                                console.log(navigator);
                                console.log(navigator.userAgent);
                                a.target = "_blank";
                                ios = true;
                            }
                            document.body.appendChild(a);
                            a.click();
                            a.parentNode.removeChild(a);
                            if (!ios) {
                                alert("Screenshot saved in downloads!");
                            }
                            _this.canCapture = false;
                            _this.iWant = false;
                            _this.session.setPreSub(_this.preSub);
                        }
                        else {
                            console.log("recalling...");
                            flag = true;
                            return _this.captureScreen();
                        }
                        setTimeout(function () {
                            _this.storage.ref(fullPath).delete();
                        }, 15000);
                    });
                }
                return [2 /*return*/];
            });
        }); });
    };
    HomepageComponent.prototype.leaveRoom = function (show) {
        var _this = this;
        this.roomService.remove('audience', this.audienceId)
            .then(function () {
            _this.valid = false;
            if (show) {
                alert("Room left.");
            }
            if (_this.preSub != undefined) {
                _this.preSub.unsubscribe();
            }
            _this.isAudience = false;
            _this.canCapture = true;
            _this.session.setAudienceId(undefined);
            _this.session.setRoom(undefined);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomepageComponent.prototype.captureScreen = function () {
        var _this = this;
        console.log("Going to capture screen...");
        this.iWant = true;
        this.canCapture = true;
        this.roomService.updateAudience(this.audienceId)
            .then(function (result) {
            // this.preSub = undefined;
            console.log(_this.preSub);
            if (_this.preSub == undefined) {
                _this.startListening(false);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
        // this._electronService.ipcRenderer.on('captureScreen')
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _services_rooms_service__WEBPACK_IMPORTED_MODULE_1__["RoomsService"],
            ngx_fs__WEBPACK_IMPORTED_MODULE_4__["FsService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            angularfire2__WEBPACK_IMPORTED_MODULE_3__["FirebaseApp"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/services/rooms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/rooms.service.ts ***!
  \*******************************************/
/*! exports provided: RoomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsService", function() { return RoomsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomsService = /** @class */ (function () {
    function RoomsService(afs, fbApp, session) {
        this.afs = afs;
        this.fbApp = fbApp;
        this.session = session;
    }
    RoomsService.prototype.listenPresenter = function () {
        var _this = this;
        this.roomName = this.session.getRoom();
        this.presenter = this.afs.collection('presenters', function (presenter) { return presenter.where("roomName", "==", _this.roomName); }).snapshotChanges();
        return this.presenter;
    };
    RoomsService.prototype.addAudience = function (person) {
        var _this = this;
        var audience = {
            'roomName': person.roomName,
            'audience_id': person.token
        };
        return new Promise(function (resolve, reject) {
            _this.checkRoom(person.roomName)
                .then(function (notExists) {
                console.log(notExists);
                reject("Room'" + person.roomName + "' not exists!");
            })
                .catch(function (exists) {
                _this.afs.collection('audience').add(audience)
                    .then(function (result) {
                    // resolve(`'${person.roomName}' created!`);
                    _this.roomName = person.roomName;
                    // this.listenPresenter();
                    console.log(result);
                    resolve(result);
                })
                    .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        });
    };
    RoomsService.prototype.updateAudience = function (audienceId) {
        var _this = this;
        var x = Math.random() * 200;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('audience').doc(audienceId).update({ 'screenshot': x })
                .then(function (result) {
                // resolve(`'${person.roomName}' created!`);
                // this.roomName = person.roomName;
                // this.listenPresenter();
                // console.log(result);
                resolve("Updated");
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    RoomsService.prototype.remove = function (collection, id) {
        var _this = this;
        // console.log(id);
        return new Promise(function (resolve, reject) {
            _this.afs.collection(collection).doc(id).delete()
                .then(function (result) {
                resolve("Document deleted");
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    RoomsService.prototype.checkRoom = function (roomName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.presenterCollection = _this.afs.collection('presenters', function (presenter) {
                    return presenter.where('roomName', '==', roomName);
                });
                var flag = true;
                _this.presenterCollection.snapshotChanges()
                    .subscribe(function (snapshot) {
                    if (snapshot.length == 0) {
                        flag = false;
                        resolve(true);
                    }
                    else if (flag) {
                        reject(false);
                    }
                });
            }
            catch (error) {
                console.log(error);
                reject(error);
            }
        });
    };
    RoomsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], angularfire2__WEBPACK_IMPORTED_MODULE_2__["FirebaseApp"], _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], RoomsService);
    return RoomsService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
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

var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setRoom = function (room) {
        localStorage.setItem("room", room);
    };
    SessionService.prototype.setAudienceId = function (audienceId) {
        localStorage.setItem("audienceId", audienceId);
    };
    SessionService.prototype.setPreSub = function (preSub) {
        this.preSub = preSub;
    };
    SessionService.prototype.getPreSub = function () {
        return this.preSub;
    };
    SessionService.prototype.getRoom = function () {
        return localStorage.getItem("room");
    };
    SessionService.prototype.getAudienceId = function () {
        return localStorage.getItem("audienceId");
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCviUrp-fMwdd3BXthO9F5wlsr2fJzlj-4",
        authDomain: "screenshot-ca76f.firebaseapp.com",
        databaseURL: "https://screenshot-ca76f.firebaseio.com",
        projectId: "screenshot-ca76f",
        storageBucket: "screenshot-ca76f.appspot.com",
        messagingSenderId: "585811144945"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Fiverr Own\Client-4-ScreenShotTaker\Electron Firestore\electronApp-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map