System.register(['angular2/core', 'angular2/router', './models/ialbum', './services/music.srv', '../common/pipes/ellipsis.pipe', '../common/directives/highlight.directive', '../common/pagination.component'], function(exports_1, context_1) {
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
    var core_1, router_1, ialbum_1, music_srv_1, ellipsis_pipe_1, highlight_directive_1, pagination_component_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ialbum_1_1) {
                ialbum_1 = ialbum_1_1;
            },
            function (music_srv_1_1) {
                music_srv_1 = music_srv_1_1;
            },
            function (ellipsis_pipe_1_1) {
                ellipsis_pipe_1 = ellipsis_pipe_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(musicService, routeParams) {
                    this.musicService = musicService;
                    this.routeParams = routeParams;
                    this.albums = [];
                    this.albumImageSize = ialbum_1.AlbumImageSize.MEDIUM;
                }
                AlbumsComponent.prototype.ngOnInit = function () {
                    this.albumsSearch(this.routeParams.get("query"), this.routeParams.get("page"));
                };
                AlbumsComponent.prototype.albumsSearch = function (query, page) {
                    var _this = this;
                    if (query) {
                        this.musicService.albumsSearch(query, parseInt(page))
                            .subscribe(function (res) {
                            _this.albums = res.albums;
                            _this.pager = res.pager;
                        });
                    }
                    else {
                        this.albums = [];
                    }
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: 'albums-component',
                        template: "\n        <ul class=\"media-list\">\n            <li class=\"media\" *ngFor=\"#album of albums\" [routerLink]=\"['Album', { id : album.id }]\" appHighLight [hoverColor]=\"'whitesmoke'\" [activeColor] = \"'gray'\">\n                <div class=\"media-left\">\n                    <a>\n                        <img class=\"media-object\" [src]=\"album.getImage(albumImageSize)\">\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">{{album.name | ellipsis:40}}</h4>\n                    <p>{{album.artist}}</p>\n                </div>\n            </li>    \n        </ul>\n        <pagination-component [pager]=\"pager\" [pathName]=\"'Albums'\"></pagination-component>\n    ",
                        providers: [music_srv_1.MusicService],
                        directives: [router_1.ROUTER_DIRECTIVES, highlight_directive_1.HightLightDirective, pagination_component_1.PaginationComponent],
                        pipes: [ellipsis_pipe_1.EllipsisPipe]
                    }), 
                    __metadata('design:paramtypes', [music_srv_1.MusicService, router_1.RouteParams])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map