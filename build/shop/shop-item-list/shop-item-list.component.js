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
var shop_service_1 = require('../shop.service');
var shop_item_filter_pipe_1 = require('./shop-item-filter.pipe');
var shop_item_form_component_1 = require('../shop-item-form/shop-item-form.component');
var cart_service_1 = require('../../cart/cart.service');
var auth_service_1 = require('../../shared/auth.service');
var ItemListComponent = (function () {
    function ItemListComponent(itemService, auth, cart) {
        this.itemService = itemService;
        this.auth = auth;
        this.cart = cart;
        this.pageTitle = '';
        this.modalIdentifier = 'itemCreateModal';
        this.imgWidth = 100;
        this.imgMargin = 10;
        this.showImg = true;
    }
    ItemListComponent.prototype.toggleImg = function () {
        this.showImg = !this.showImg;
    };
    ItemListComponent.prototype.getShopItems = function (event) {
        var _this = this;
        this.itemService.getItems().subscribe(function (items) { return _this.items = items; }, function (error) { return console.log(error); });
    };
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart.getCart().subscribe(function (cart) {
            var dict = {};
            for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
                var c = cart_1[_i];
                dict[c.itemId] = c.quantity;
            }
            _this.cartItems = dict;
            _this.getShopItems(true);
        }, function (error) { return console.log(error); });
    };
    ItemListComponent.prototype.addItemToCart = function (item) {
        this.cart.itemExists(item, function (service, item) {
            service.addItem(item).subscribe(function (items) { return console.log("Added to Cart"); }, function (error) { return console.log(error); });
        });
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'list-item',
            templateUrl: 'app/shop/shop-item-list/shop-item-list.component.html',
            styleUrls: ['app/shop/shop-item-list/shop-item-list.component.css'],
            pipes: [shop_item_filter_pipe_1.ItemFilterPipe],
            directives: [shop_item_form_component_1.FormComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [shop_service_1.ShopService, cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [shop_service_1.ShopService, auth_service_1.AuthService, cart_service_1.CartService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=shop-item-list.component.js.map