"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var item_component_1 = require('./items/item/item.component');
var item_detail_component_1 = require('./items/item-detail/item-detail.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-content',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, item_component_1.ItemComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            template: "\n\t\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t      <div class=\"container\">\n\t        <div class=\"navbar-header\">\n\t          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t            <span class=\"sr-only\">Toggle navigation</span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t          </button>\n\t          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n\t        </div>\n\t        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t          <ul class=\"nav navbar-nav\">\n\t            <li class=\"active\"><a href=\"#\">Home</a></li>\n\t            <li><a [routerLink]=\"['Items']\">Items</a></li>\n\t          </ul>\n\t        </div>\n\t      </div>\n\t    </nav>\n\t    <div class=\"container\">\n\t    \t<div class=\"starter-template\">\n\t    \t\t<br/><br/><br/>\n\t    \t\t<router-outlet></router-outlet>\n\t    \t</div>\n\t    </div>\n\t",
        }),
        router_deprecated_1.RouteConfig([
            { path: '/items', name: 'Items', component: item_component_1.ItemComponent },
            { path: '/item/:id', name: 'Detail', component: item_detail_component_1.ItemDetailComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map