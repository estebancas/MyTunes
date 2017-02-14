System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(authData) {
                    this.email = authData.password.email;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
/*
    constructor(public userName : string, public email : string, public password : string, public country? : string, public birthday? : string) {

    }
 */
//# sourceMappingURL=user.js.map