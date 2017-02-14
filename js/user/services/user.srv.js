System.register(['rxjs/Observable', '../models/user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, user_1;
    var UserService;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this.firebaseUrl = "https://mytunes-5b979.firebaseio.com/";
                    this.firebaseRef = new Firebase(this.firebaseUrl);
                }
                UserService.prototype.getUser = function () {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this.firebaseRef.onAuth(function (authData) {
                            var authData = _this.firebaseRef.getAuth();
                            var user;
                            if (authData) {
                                user = new user_1.User(authData);
                            }
                            observable.next(user);
                        });
                    });
                };
                UserService.prototype.login = function (userName, password) {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this.firebaseRef.authWithPassword({
                            email: userName,
                            password: password
                        }, function (error, authData) {
                            if (error) {
                                observable.error(error);
                            }
                            else {
                                observable.next(new user_1.User(authData));
                            }
                        });
                    });
                };
                UserService.prototype.register = function (userName, email, password, country, birthday) {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this.firebaseRef.createUser({
                            userName: userName,
                            email: email,
                            password: password
                        }, function (error, userData) {
                            if (error) {
                                observable.error(error);
                            }
                            else {
                                observable.next(userData);
                            }
                        });
                    });
                };
                UserService.prototype.logout = function () {
                    var _this = this;
                    return new Observable_1.Observable(function (Observable) {
                        _this.firebaseRef.unauth();
                        observable.next();
                    });
                };
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.srv.js.map