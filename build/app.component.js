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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var shop_item_list_component_1 = require('./shop/shop-item-list/shop-item-list.component');
var shop_item_detail_component_1 = require('./shop/shop-item-detail/shop-item-detail.component');
var cart_item_list_component_1 = require('./cart/cart-item-list.component');
var auth_service_1 = require('./shared/auth.service');
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.login = function () {
        this.auth.login();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-content',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, shop_item_list_component_1.ItemListComponent, cart_item_list_component_1.ItemCartComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, auth_service_1.AuthService],
            template: "\n\t\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t      <div class=\"container\">\n\t        <div class=\"navbar-header\">\n\t          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t            <span class=\"sr-only\">Toggle navigation</span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t          </button>\n\t          <a class=\"navbar-brand\" href=\"#\">Smart Cart</a>\n\t        </div>\n\t        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n\t          <form class=\"navbar-form navbar-right\">\n\t            <button (click)=\"auth.login()\" *ngIf=\"!auth.isLoggedIn()\" class=\"btn btn-success btn-sm\">\n\t            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Sign In\n\t            </button>\n\t            <button (click)=\"auth.logout()\" *ngIf=\"auth.isLoggedIn()\" class=\"btn btn-success btn-sm\">\n\t            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Sign Out\n\t            </button>\n\t          </form>\n\t        </div><!--/.navbar-collapse -->\n\t      </div>\n\t    </nav>\n\t    <div class=\"container\">\n\t    \t<div class=\"starter-template\">\n\t    \t\t<br/><br/><br/>\n\t    \t\t<router-outlet></router-outlet>\n\t    \t</div>\n\t    </div>\n\t",
        }),
        router_deprecated_1.RouteConfig([
            { path: '/items', name: 'Items', component: shop_item_list_component_1.ItemListComponent, useAsDefault: true },
            { path: '/item/:id', name: 'Detail', component: shop_item_detail_component_1.ItemDetailComponent },
            { path: '/cart/:userid', name: 'Cart', component: cart_item_list_component_1.ItemCartComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map