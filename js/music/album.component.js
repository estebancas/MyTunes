System.register(['angular2/core', 'angular2/router', './services/music.srv', './models/ialbum'], function(exports_1, context_1) {
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
    var core_1, router_1, music_srv_1, ialbum_1;
    var AlbumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (music_srv_1_1) {
                music_srv_1 = music_srv_1_1;
            },
            function (ialbum_1_1) {
                ialbum_1 = ialbum_1_1;
            }],
        execute: function() {
            AlbumComponent = (function () {
                function AlbumComponent(routeParams, MusicService) {
                    this.routeParams = routeParams;
                    this.MusicService = MusicService;
                    this.imageSize = ialbum_1.AlbumImageSize.LARGE;
                    this.getAlbumInfo(routeParams.get("id"));
                }
                AlbumComponent.prototype.getAlbumInfo = function (id) {
                    var _this = this;
                    this.MusicService.albumInfo(id)
                        .subscribe(function (album) {
                        _this.album = album;
                        var image = _this.album.getImage(ialbum_1.AlbumImageSize.LARGE);
                    });
                };
                AlbumComponent = __decorate([
                    core_1.Component({
                        selector: 'album',
                        template: "\n        <div *ngIf=\"album\">\n            <div class=\"page-header\">\n                <h1>{{album.name}}<small> .: {{album.artist}} :.</small></h1>\n            </div>\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <a href=\"#\">\n                        <img class=\"media-object\" [src]=\"album.getImage(imageSize)\">\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <ul>\n                        <li *ngFor=\"#song of album.songs\">\n                            {{song.name}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
                        providers: [music_srv_1.MusicService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, music_srv_1.MusicService])
                ], AlbumComponent);
                return AlbumComponent;
            }());
            exports_1("AlbumComponent", AlbumComponent);
        }
    }
});
//# sourceMappingURL=album.component.js.map