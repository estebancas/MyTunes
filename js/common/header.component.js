System.register(['angular2/core', 'angular2/router', "../user/services/user.srv", "./search.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_srv_1, search_component_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_srv_1_1) {
                user_srv_1 = user_srv_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(userService, router) {
                    var _this = this;
                    this.userService = userService;
                    this.router = router;
                    this.userService.getUser()
                        .subscribe(function (user) {
                        _this.user = user;
                    });
                }
                HeaderComponent.prototype.search = function ($event) {
                    this.router.navigate(["Albums", { query: $event, page: 0 }]);
                };
                HeaderComponent.prototype.logout = function () {
                    var _this = this;
                    this.userService.logout()
                        .subscribe(function () {
                        _this.router.navigateByUrl("/");
                    });
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header-component',
                        template: "\n        <nav class=\"navbar navbar-inverse header-component\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                        <span class=\"sr-only\">toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">My Tunes</a>\n                </div>\n\n                <form class=\"navbar-form navbar-left\" role=\"search\">\n                    <search-component (queryChange)=\"search($event)\"></search-component>\n                </form>\n\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><button type=\"button\" class=\"btn btn-info navbar-btn\" *ngIf=\"!user\" [routerLink]=\"['Login']\">Login</button><li>\n                        <li><button type=\"button\" class=\"btn btn-success navbar-btn\" *ngIf=\"!user\" [routerLink]=\"['Registration']\">Registration</button><li>\n                        <li><a href=\"#\" *ngIf=\"user\"></a></li>\n                        <li><a href=\"#\" *ngIf=\"user\" (click=\"logout()\")>Logout</a></li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    ",
                        providers: [user_srv_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent],
                        styles: ["\n        .header-component .navbar-nav .btn {\n            margin-left: 1em;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [user_srv_1.UserService, router_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map