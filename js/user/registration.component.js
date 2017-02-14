System.register(['angular2/core', 'angular2/router', './services/user.srv', '../common/services/country.srv'], function(exports_1, context_1) {
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
    var core_1, router_1, user_srv_1, country_srv_1;
    var RegistrationComponent;
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
            function (country_srv_1_1) {
                country_srv_1 = country_srv_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(userService, countryService, router) {
                    var _this = this;
                    this.userService = userService;
                    this.countryService = countryService;
                    this.router = router;
                    this.countries = [];
                    this.countryService.getCountries()
                        .subscribe(function (countries) {
                        _this.countries = countries;
                    });
                }
                RegistrationComponent.prototype.register = function (username, email, password, country, birthday) {
                    var _this = this;
                    this.userService.register(username, email, password, country, birthday)
                        .subscribe(function (user) {
                        _this.router.navigateByUrl("/");
                    });
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration-component',
                        template: "\n    <form #registrationForm=\"ngForm\">\n        <div class=\"form-group\">\n            <input type=\"text\" required placeholder=\"username\" ngControl=\"userName\" #userName=\"ngForm\"/>\n            <div class=\"alert alert-danger\" [hidden]=\"userName.valid || userName.pristine\">Username required</div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" required placeholder=\"email\" ngControl=\"email\" #email=\"ngForm\"/>\n            <div class=\"alert alert-danger\" [hidden]=\"email.valid || email.pristine\">Email required</div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" required placeholder=\"password\" ngControl=\"password\" #password=\"ngForm\"/>\n            <div class=\"alert alert-danger\" [hidden]=\" password.valid || password.pristine\">Password required</div>\n        </div>\n        <div class=\"form-group\">\n            <select class=\"form-control\" ngControl=\"country\" #country=\"ngForm\">\n                <option value=\"\">Select a country</option>\n                <option *ngFor=\"#c of countries\" [value]=\"c.alpha2Core\">{{c.name}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"date\" ngControl=\"birthday\" #birthday=\"ngForm\"/>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\"\n            [disabled]=\"!registrationForm.valid\"\n            (click)=\"register(userName.value, email.value, password.value, country.value, birthday.value)\">\n            Register\n        </button>\n    </form>\n    ",
                        providers: [user_srv_1.UserService, country_srv_1.CountryService]
                    }), 
                    __metadata('design:paramtypes', [user_srv_1.UserService, country_srv_1.CountryService, router_1.Router])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map