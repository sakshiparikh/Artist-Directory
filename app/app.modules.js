System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './component.app', './component.header', './component.artist-item', './component.artist-details', './pipe.search', './app.login', './pageNotFoundComponent', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, component_app_1, component_header_1, component_artist_item_1, component_artist_details_1, pipe_search_1, app_login_1, pageNotFoundComponent_1, router_1;
    var appRoutes, AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            },
            function (component_header_1_1) {
                component_header_1 = component_header_1_1;
            },
            function (component_artist_item_1_1) {
                component_artist_item_1 = component_artist_item_1_1;
            },
            function (component_artist_details_1_1) {
                component_artist_details_1 = component_artist_details_1_1;
            },
            function (pipe_search_1_1) {
                pipe_search_1 = pipe_search_1_1;
            },
            function (app_login_1_1) {
                app_login_1 = app_login_1_1;
            },
            function (pageNotFoundComponent_1_1) {
                pageNotFoundComponent_1 = pageNotFoundComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'SignIn', component: app_login_1.LoginComponent },
                { path: '', redirectTo: '', pathMatch: 'full' },
                { path: '**', component: pageNotFoundComponent_1.PageNotFoundComponent }
            ];
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)
                    ],
                    declarations: [
                        component_app_1.AppComponent, component_artist_item_1.ArtistItemComponent, component_artist_details_1.ArtistDetailsComponent, pipe_search_1.SearchPipe, component_header_1.HeaderComponent, app_login_1.LoginComponent, pageNotFoundComponent_1.PageNotFoundComponent
                    ],
                    bootstrap: [
                        component_app_1.AppComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.modules.js.map