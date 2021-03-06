System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ForRangeDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ForRangeDirective = (function () {
                function ForRangeDirective(_templateRef, _viewContainer) {
                    this._templateRef = _templateRef;
                    this._viewContainer = _viewContainer;
                }
                Object.defineProperty(ForRangeDirective.prototype, "forRange", {
                    set: function (value) {
                        this.render(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ForRangeDirective.prototype.render = function (range) {
                    for (var i = 0; i < range; i++) {
                        var view = this._viewContainer.createEmbeddedView(this._templateRef, i);
                        view.setLocal("index", i);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ForRangeDirective.prototype, "forRange", null);
                ForRangeDirective = __decorate([
                    core_1.Directive({
                        selector: '[forRange]'
                    }), 
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
                ], ForRangeDirective);
                return ForRangeDirective;
            }());
            exports_1("ForRangeDirective", ForRangeDirective);
        }
    }
});
//# sourceMappingURL=forRange.directive.js.map