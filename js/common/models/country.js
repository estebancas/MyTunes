System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Country;
    return {
        setters:[],
        execute: function() {
            Country = (function () {
                function Country(name, alpha2Code) {
                    this.name = name;
                    this.alpha2Code = alpha2Code;
                }
                return Country;
            }());
            exports_1("Country", Country);
        }
    }
});
//# sourceMappingURL=country.js.map