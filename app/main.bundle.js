webpackJsonp([2,5],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 115;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(132);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
    if (window) {
        window.console.log = function () { };
    }
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.loginInfo = {
            first_name: 'Andrew',
            last_name: 'Yang',
            avatar: 'ay.jpeg',
            title: 'Senior Developer'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(216),
        styles: [__webpack_require__(202)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctHeight */
/* unused harmony export detectBody */
/* harmony export (immutable) */ __webpack_exports__["a"] = smoothlyMenu;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
*/
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeigh = jQuery('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();
    if (navbarHeigh > wrapperHeigh) {
        pageWrapper.css("min-height", navbarHeigh + "px");
    }
    if (navbarHeigh < wrapperHeigh) {
        if (navbarHeigh < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeigh + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeigh > wrapperHeigh) {
            pageWrapper.css("min-height", navbarHeigh + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
//# sourceMappingURL=app.helpers.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_topnavbar_topnavbar_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_topnavbar_topnavbar_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_auto_scroll__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* Navigation */],
            __WEBPACK_IMPORTED_MODULE_5__components_topnavbar_topnavbar_component__["a" /* Topnavbar */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_auto_scroll__["a" /* NgxAutoScrollModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* appRoutes */], { useHash: true })
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_11__components_topnavbar_topnavbar_service__["a" /* topnavbarService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });

var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__["a" /* HomeComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_login__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by andrew.yang on 2/6/2017.
 */




var Navigation = (function () {
    function Navigation(router, http) {
        this.router = router;
        this.http = http;
    }
    Navigation.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/app/token')
            .subscribe(function (response) {
            console.log("shilpa :", JSON.stringify(response));
            _this.loggedInUser = response.user;
        });
    };
    Navigation.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return Navigation;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_login__["a" /* Login */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_login__["a" /* Login */]) === "function" && _a || Object)
], Navigation.prototype, "loginInfo", void 0);
Navigation = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__(217)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], Navigation);

var _a, _b, _c;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnavbar_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topnavbar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Topnavbar = (function () {
    function Topnavbar(topnavbarService, http) {
        var _this = this;
        this.topnavbarService = topnavbarService;
        this.http = http;
        this.http.get('/app/token')
            .subscribe(function (response) {
            console.log("shilpa :", JSON.stringify(response));
            _this.loggedInUser = response.user;
        });
    }
    Topnavbar.prototype.ngOnInit = function () {
    };
    Topnavbar.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* smoothlyMenu */])();
    };
    Topnavbar.prototype.logout = function () {
        localStorage.clear();
        this.topnavbarService.updateUser(this.loggedInUser);
        // location.href='http://to_login_page';
    };
    return Topnavbar;
}());
Topnavbar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'topnavbar',
        template: __webpack_require__(218)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__topnavbar_service__["a" /* topnavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__topnavbar_service__["a" /* topnavbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], Topnavbar);

var _a, _b;
//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/**
 * Created by andrew.yang on 5/18/2017.
 */
var Login = (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".scrolll {\n  max-height: 550px;\n  width: 100%;\n  height: 550px;\n  overflow-y: scroll; }\n\n.chat-card .media {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.chat-card .msg {\n  padding: 3px 7px;\n  margin: 5px 0;\n  display: inline-block; }\n\n.chat-card .chat-saprator {\n  position: relative;\n  text-align: center; }\n  .chat-card .chat-saprator:before {\n    content: \"\";\n    position: absolute;\n    top: calc(50% - 1px);\n    left: 0;\n    background-color: #ccc;\n    height: 2px;\n    width: 100%;\n    z-index: 1; }\n  .chat-card .chat-saprator span {\n    background-color: #fff;\n    color: blue;\n    z-index: 99;\n    position: relative;\n    padding: 0 5px;\n    font-style: italic; }\n\n.chat-card .received-chat .msg {\n  background-color: #ccc; }\n\n.chat-card .send-chat {\n  text-align: right; }\n  .chat-card .send-chat .msg {\n    text-align: left;\n    background-color: #e6e6ff; }\n\n.chat-card .chat-control {\n  border-top: 1px solid blue;\n  position: relative; }\n  .chat-card .chat-control .chat-form .form-control {\n    border: none;\n    margin: 15px 0; }\n    .chat-card .chat-control .chat-form .form-control:active, .chat-card .chat-control .chat-form .form-control:focus, .chat-card .chat-control .chat-form .form-control:hover {\n      outline: none;\n      border: none; }\n  .chat-card .chat-control .chat-form .chat-btn {\n    position: absolute;\n    right: 25px;\n    top: 22px; }\n\n.scrolll {\n  max-height: 100%;\n  width: 100%;\n  height: 492px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.talk-bubble {\n  margin-left: 23px;\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: auto;\n  background-color: #62b55e; }\n\n.talk-reply {\n  margin-left: 130px;\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: auto;\n  background-color: #75d1d1; }\n\n.round {\n  border-radius: 30px;\n  -webkit-border-radius: 30px;\n  -moz-border-radius: 30px; }\n\n.tri-right.border.left-in:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  color: #fff;\n  height: 0;\n  left: -40px;\n  right: auto;\n  top: 30px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: #666 #666 transparent transparent; }\n\n.tri-rightt.border.right-in:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: auto;\n  right: -40px;\n  top: 30px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: #666 transparent transparent #666; }\n\n.bottom {\n  position: fixed;\n  width: 50%;\n  bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <navigation [loginInfo]=\"loginInfo\" *ngIf=\"loginInfo\"></navigation>\n\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <topnavbar></topnavbar>\n\n    <router-outlet></router-outlet>\n\n    <div class=\"footer\">\n      <div>\n        <strong>Copyright</strong> Andrew &copy; 2017\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <span>\n                        <img alt=\"image\" class=\"img-circle\" width=\"80px\"\n                             src=\"./assets/img/avatar/{{loginInfo.avatar}}\" />\n                    </span>\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                      <span class=\"clear\">\n                          <span class=\"block m-t-xs\">\n                          <strong class=\"font-bold\">{{loggedInUser}}</strong>\n                      </span>\n                      </span>\n                    </a>\n                </div>\n                <div class=\"logo-element\">\n                    SWWCC\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('home')}\">\n                <a [routerLink]=\"['./home']\"><i class=\"fa fa-dashboard\"></i> <span class=\"nav-label\">Dashboards</span></a>\n            </li>\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a onclick=\"location.href='/login'\" (click)=\"logout()\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n    </nav>\n</div>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <span class=\"label label-success pull-right\">Monthly</span>\n                    <h5>Income</h5>\n                </div>\n                <div class=\"ibox-content\">\n                    <h1 class=\"no-margins\">40 886,200</h1>\n                    <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n                    <small>Total income</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <span class=\"label label-info pull-right\">Annual</span>\n                    <h5>Orders</h5>\n                </div>\n                <div class=\"ibox-content\">\n                    <h1 class=\"no-margins\">275,800</h1>\n                    <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n                    <small>New orders</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <span class=\"label label-primary pull-right\">Today</span>\n                    <h5>visits</h5>\n                </div>\n                <div class=\"ibox-content\">\n                    <h1 class=\"no-margins\">106,120</h1>\n                    <div class=\"stat-percent font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i></div>\n                    <small>New visits</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <span class=\"label label-danger pull-right\">Low value</span>\n                    <h5>User activity</h5>\n                </div>\n                <div class=\"ibox-content\">\n                    <h1 class=\"no-margins\">80,600</h1>\n                    <div class=\"stat-percent font-bold text-danger\">38% <i class=\"fa fa-level-down\"></i></div>\n                    <small>In first month</small>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Messages</h5>\n                    <div class=\"ibox-tools\">\n                        <a class=\"collapse-link\">\n                            <i class=\"fa fa-chevron-up\"></i>\n                        </a>\n                        <a class=\"close-link\">\n                            <i class=\"fa fa-times\"></i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ibox-content ibox-heading\">\n                    <h3><i class=\"fa fa-envelope-o\"></i> New messages</h3>\n                    <small><i class=\"fa fa-tim\"></i> You have 22 new messages and 16 waiting in draft folder.</small>\n                </div>\n                <div class=\"ibox-content\">\n                    <div class=\"feed-activity-list\">\n\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right text-navy\">1m ago</small>\n                                <strong>Monica Smith</strong>\n                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>\n                                <small class=\"text-muted\">Today 5:60 pm - 12.06.2014</small>\n                            </div>\n                        </div>\n\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right\">2m ago</small>\n                                <strong>Jogn Angel</strong>\n                                <div>There are many variations of passages of Lorem Ipsum available</div>\n                                <small class=\"text-muted\">Today 2:23 pm - 11.06.2014</small>\n                            </div>\n                        </div>\n\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right\">5m ago</small>\n                                <strong>Jesica Ocean</strong>\n                                <div>Contrary to popular belief, Lorem Ipsum</div>\n                                <small class=\"text-muted\">Today 1:00 pm - 08.06.2014</small>\n                            </div>\n                        </div>\n\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right\">5m ago</small>\n                                <strong>Monica Jackson</strong>\n                                <div>The generated Lorem Ipsum is therefore </div>\n                                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n                            </div>\n                        </div>\n\n\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right\">5m ago</small>\n                                <strong>Anna Legend</strong>\n                                <div>All the Lorem Ipsum generators on the Internet tend to repeat </div>\n                                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n                            </div>\n                        </div>\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right\">5m ago</small>\n                                <strong>Damian Nowak</strong>\n                                <div>The standard chunk of Lorem Ipsum used </div>\n                                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n                            </div>\n                        </div>\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right\">5m ago</small>\n                                <strong>Gary Smith</strong>\n                                <div>200 Latin words, combined with a handful</div>\n                                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-8\">\n\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <h5>User project list</h5>\n                            <div class=\"ibox-tools\">\n                                <a class=\"collapse-link\">\n                                    <i class=\"fa fa-chevron-up\"></i>\n                                </a>\n                                <a class=\"close-link\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content\">\n                            <table class=\"table table-hover no-margins\">\n                                <thead>\n                                <tr>\n                                    <th>Status</th>\n                                    <th>Date</th>\n                                    <th>User</th>\n                                    <th>Value</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td><small>Pending...</small></td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 11:20pm</td>\n                                    <td>Samantha</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 24% </td>\n                                </tr>\n                                <tr>\n                                    <td><span class=\"label label-warning\">Canceled</span> </td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 10:40am</td>\n                                    <td>Monica</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66% </td>\n                                </tr>\n                                <tr>\n                                    <td><small>Pending...</small> </td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 01:30pm</td>\n                                    <td>John</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 54% </td>\n                                </tr>\n                                <tr>\n                                    <td><small>Pending...</small> </td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 02:20pm</td>\n                                    <td>Agnes</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 12% </td>\n                                </tr>\n                                <tr>\n                                    <td><small>Pending...</small> </td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 09:40pm</td>\n                                    <td>Janet</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 22% </td>\n                                </tr>\n                                <tr>\n                                    <td><span class=\"label label-primary\">Completed</span> </td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 04:10am</td>\n                                    <td>Amelia</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66% </td>\n                                </tr>\n                                <tr>\n                                    <td><small>Pending...</small> </td>\n                                    <td><i class=\"fa fa-clock-o\"></i> 12:08am</td>\n                                    <td>Damian</td>\n                                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 23% </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <h5>Small todo list</h5>\n                            <div class=\"ibox-tools\">\n                                <a class=\"collapse-link\">\n                                    <i class=\"fa fa-chevron-up\"></i>\n                                </a>\n                                <a class=\"close-link\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content\">\n                            <ul class=\"todo-list m-t small-list\">\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-check-square\"></i> </a>\n                                    <span class=\"m-l-xs todo-completed\">Buy a milk</span>\n\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                                    <span class=\"m-l-xs\">Go to shop and find some products.</span>\n\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                                    <span class=\"m-l-xs\">Send documents to Mike</span>\n                                    <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 mins</small>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                                    <span class=\"m-l-xs\">Go to the doctor dr Smith</span>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-check-square\"></i> </a>\n                                    <span class=\"m-l-xs todo-completed\">Plan vacation</span>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                                    <span class=\"m-l-xs\">Create new stuff</span>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\n                                    <span class=\"m-l-xs\">Call to Anna for dinner</span>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <h5>Transactions worldwide</h5>\n                            <div class=\"ibox-tools\">\n                                <a class=\"collapse-link\">\n                                    <i class=\"fa fa-chevron-up\"></i>\n                                </a>\n                                <a class=\"close-link\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content\">\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <table class=\"table table-hover margin bottom\">\n                                        <thead>\n                                        <tr>\n                                            <th style=\"width: 1%\" class=\"text-center\">No.</th>\n                                            <th>Transaction</th>\n                                            <th class=\"text-center\">Date</th>\n                                            <th class=\"text-center\">Amount</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr>\n                                            <td class=\"text-center\">1</td>\n                                            <td> Security doors\n                                            </td>\n                                            <td class=\"text-center small\">16 Jun 2014</td>\n                                            <td class=\"text-center\"><span class=\"label label-primary\">$483.00</span></td>\n\n                                        </tr>\n                                        <tr>\n                                            <td class=\"text-center\">2</td>\n                                            <td> Wardrobes\n                                            </td>\n                                            <td class=\"text-center small\">10 Jun 2014</td>\n                                            <td class=\"text-center\"><span class=\"label label-primary\">$327.00</span></td>\n\n                                        </tr>\n                                        <tr>\n                                            <td class=\"text-center\">3</td>\n                                            <td> Set of tools\n                                            </td>\n                                            <td class=\"text-center small\">12 Jun 2014</td>\n                                            <td class=\"text-center\"><span class=\"label label-warning\">$125.00</span></td>\n\n                                        </tr>\n                                        <tr>\n                                            <td class=\"text-center\">4</td>\n                                            <td> Panoramic pictures</td>\n                                            <td class=\"text-center small\">22 Jun 2013</td>\n                                            <td class=\"text-center\"><span class=\"label label-primary\">$344.00</span></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"text-center\">5</td>\n                                            <td>Phones</td>\n                                            <td class=\"text-center small\">24 Jun 2013</td>\n                                            <td class=\"text-center\"><span class=\"label label-primary\">$235.00</span></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"text-center\">6</td>\n                                            <td>Monitors</td>\n                                            <td class=\"text-center small\">26 Jun 2013</td>\n                                            <td class=\"text-center\"><span class=\"label label-primary\">$100.00</span></td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div id=\"world-map\" style=\"height: 300px;\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>\n</div> -->\n<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Joined users</h5>\n                    <div class=\"ibox-tools\">\n                        <a class=\"collapse-link\">\n                            <i class=\"fa fa-chevron-up\"></i>\n                        </a>\n                        <a class=\"close-link\">\n                            <i class=\"fa fa-times\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"ibox-content\">\n                    <div class=\"feed-activity-list\" *ngFor=\"let chat of chatList let i=index \">\n                        <div class=\"feed-element\">\n                            <div>\n                                <small class=\"pull-right text-navy\">Joined</small>\n                                <strong>{{chat.uname}}</strong>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n\n\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Transactions worldwide</h5>\n                    <div class=\"ibox-tools\">\n                        <a class=\"collapse-link\">\n                            <i class=\"fa fa-chevron-up\"></i>\n                        </a>\n                        <a class=\"close-link\">\n                            <i class=\"fa fa-times\"></i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ibox-content \" >\n\n                    <div class=\"row\">\n                        <div class=\"card chat-card\">\n                            <div class=\"card-header\">\n                                <!-- <h5>{{selectedChat?.roomId}}</h5> -->\n                            </div>\n                            <!-- <div class=\"card-block\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes > -->\n                            <!-- <perfect-scrollbar class=\"overflow-container\"  [style.width]=\"'100%'\" [style.height]=\"'500px'\" [config]=\"config\"> -->\n                              <div class=\"scrolll\" ngx-auto-scroll>\n                            <div *ngFor=\"let message of messages\" >\n\n                                    <div class=\"media chat-messages\" *ngIf=\"message.uname != loggedUser\" data-id=\"1\" data-status=\"online\"\n                            data-username=\"\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{message.uname}}\">\n                            <a class=\"media-left\">\n                                <img class=\"align-self-start mx-2 img-circle thumb32\" width=\"39px\" src=\"./assets/img/avatar/ay.jpeg\" \n                                    alt=\"Generic placeholder image \">\n                            </a>\n                            <div class=\"media-body\">\n                                <div class=\"f-13 chat-header\">{{message.uname}}\n                                    <span class=\"text-muted\"> - {{message.date | date :'short'}}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"talk-bubble round tri-right left-in\" *ngIf=\"message.uname != loggedUser\">\n                            <div class=\"talktext\">\n                                <p style=\"margin:8px;color:#fff\">{{message.message}}.</p>\n\n                            </div>\n                        </div>\n                        <div class=\"media send-chat\" *ngIf=\"message.uname == loggedUser\"  data-id=\"1\" data-status=\"online\"\n                            data-username=\"\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{message.uname}}\">\n                            <a>\n                                <img class=\"align-self-start mx-2 img-circle thumb32\" width=\"39px\" src=\"./assets/img/avatar/ay.jpeg\"\n                                    alt=\"Generic placeholder image \">\n                            </a>\n                            <div class=\"media-body\">\n                                <div class=\"f-13 chat-header\">{{message.uname}}\n                                    <span class=\"text-muted\">- {{message.date | date :'short'}}\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"talk-reply round pull-right\" *ngIf=\"message.uname == loggedUser\">\n                                    <div class=\"talktext\">\n                                        <p style=\"margin:8px;color:#fff\">{{message.message}}</p>\n        \n                                    </div>\n                                </div>\n                        </div>\n\n                       \n\n\n                                <!-- <div class=\"media send-chat\" *ngIf=\"message.uname == loggedUser\">\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0\">{{message.uname}}</h6>\n                                        <p class=\"m-t-10 msg\">{{message.message}}.</p>\n                                        <p class=\"text-muted\">{{message.date | date :'short'}}</p>\n                                    </div>\n                                    <img class=\"align-self-start ml-3 img-radius img-40\" src=\"../../assets/img/avatar/{{loginInfo.avatar}}\" onerror=\"this.src='https://s3-us-west-2.amazonaws.com/oawto/dummy.png';\"\n                                        alt=\"usrer image\">\n                                </div>\n                                <div class=\"media received-chat\"  *ngIf=\"message.uname != loggedUser\">\n                                    <img class=\"align-self-start mr-3 img-radius img-40\" src=\"https://s3-us-west-2.amazonaws.com/oawto/{{message.image}}\" onerror=\"this.src='https://s3-us-west-2.amazonaws.com/oawto/dummy.png'\"\n                                        alt=\"usrer image\">\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0\">{{message.uname}}</h6>\n                                        <p class=\"m-t-10 msg\">{{message.message}}.</p>\n                                        <p class=\"text-muted\">{{message.date | date :'short'}}</p>\n                                    </div>\n                                </div> -->\n                            </div>\n                        </div>\n                            <!-- </perfect-scrollbar> -->\n                            <!-- </div> -->\n                            <div class=\"card-footer chat-control\">\n                                <div class=\"chat-form\">\n                                    <input type=\"text\" class=\"form-control search-text\" [(ngModel)]=\"newMessage\" placeholder=\"Type Here . .\">\n                                    <div class=\"chat-btn\">\n                                        <button class=\"btn btn-primary btn-icon\" (click)=\"sendNewMessage()\">\n                                            <i class=\"fa fa-paper-plane\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topnavbarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var topnavbarService = (function () {
    function topnavbarService(http) {
        this.http = http;
        this.lastDisconnected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    topnavbarService.prototype.getUser = function () {
        return this.disconnectedUser;
    };
    topnavbarService.prototype.updateUser = function (user) {
        this.disconnectedUser = user;
        this.lastDisconnected.emit(user);
    };
    return topnavbarService;
}());
topnavbarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], topnavbarService);

var _a;
//# sourceMappingURL=topnavbar.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_topnavbar_topnavbar_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by andrew.yang on 5/18/2017.
 */




var HomeComponent = (function () {
    function HomeComponent(http, topnavbarService) {
        var _this = this;
        this.http = http;
        this.topnavbarService = topnavbarService;
        this.chatList = [];
        this.messages = [];
        this.topnavbarService.lastDisconnected.subscribe(function (lang) {
            _this.getDisUser = _this.topnavbarService.getUser();
            console.log("message :", _this.getDisUser);
            _this.socket.on('disconnect', _this.getDisUser);
        });
        this.http.get('/app/token')
            .subscribe(function (response) {
            _this.loggedUser = response.user;
            var soptions = {
                reconnection: true,
                reconnectionDelay: 3000,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: Infinity
            };
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('http://localhost:3006/', soptions);
            _this.socket.connect();
            _this.socket.emit('adduser', response.user, 'create', 'true');
            _this.socket.on('new message', function (msg) {
                if (!msg.chatType && msg.status) {
                    var indx = _this.chatList.filter(function (obj) { return obj.uname == msg.uname; });
                    console.log("index: ", indx, msg, _this.loggedUser);
                    if (msg.uname != _this.loggedUser && indx.length == 0) {
                        _this.chatList.push(msg);
                    }
                }
                else if (msg.chatType) {
                    _this.messages.push(msg);
                }
                else if (!msg.status) {
                    console.log("popop disconnected", msg);
                    for (var i = 0; i < _this.chatList.length; i++) {
                        if (_this.chatList[i].uname == msg.uname) {
                            _this.chatList.splice(i, 1); //removes 1 element at position i 
                            break;
                        }
                    }
                }
                console.log("message :", msg);
            });
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.sendNewMessage = function () {
        var obj = {
            message: this.newMessage,
            uname: this.loggedUser,
            date: new Date(),
            gname: 'create',
            type: 'message',
            chatType: true,
            status: true
        };
        this.socket.emit('sendmessage', obj);
        this.newMessage = '';
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'home',
        template: __webpack_require__(219),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__components_topnavbar_topnavbar_service__["a" /* topnavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_topnavbar_topnavbar_service__["a" /* topnavbarService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.bundle.js.map