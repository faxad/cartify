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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var auth_service_1 = require('./auth.service');
var shop_service_1 = require('./shop.service');
var CartService = (function () {
    function CartService(http, shop) {
        this.http = http;
        this.shop = shop;
    }
    CartService.prototype.getCartItems = function () {
        return this.http.get("http://localhost:8080/cart?userId=" + auth_service_1.AuthService.getUser())
            .map(function (response) { return response.json(); });
    };
    CartService.prototype.getCartItemsWithDetails = function () {
        var _this = this;
        var detailedCartItems = [];
        return Observable_1.Observable.create(function (observer) {
            _this.getCartItems().subscribe(function (cartItems) {
                var _loop_1 = function(cartItem) {
                    _this.shop.getShopItem(cartItem.itemId).subscribe(function (shopItem) {
                        detailedCartItems.push({
                            '_id': cartItem['_id'],
                            'userId': cartItem.userId,
                            'itemId': cartItem.itemId,
                            'name': shopItem.name,
                            'code': shopItem.code,
                            'unitPrice': shopItem.unitPrice,
                            'quantity': cartItem.quantity,
                            'paid': cartItem.paid,
                        });
                    });
                };
                for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
                    var cartItem = cartItems_1[_i];
                    _loop_1(cartItem);
                }
                observer.next(detailedCartItems);
                observer.complete();
            }, function (error) { return console.log(error); });
        });
    };
    CartService.prototype.addCartItem = function (cartItem) {
        var body = {
            "userId": auth_service_1.AuthService.getUser(),
            "itemId": cartItem.id,
            "quantity": 1,
        };
        return this.http.post("http://localhost:8080/add", JSON.stringify(body))
            .map(function (response) { return response.json(); });
    };
    CartService.prototype.addOrUpdateCartItem = function (item, callback) {
        var _this = this;
        this.getCartItems().subscribe(function (cart) {
            for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
                var cartItem = cart_1[_i];
                if (cartItem['itemId'] == item['id']) {
                    _this.increaseCartItemQunatity(cartItem).subscribe(function (items) { return console.log("Incremented"); }, function (error) { return console.log(error); });
                    return;
                }
            }
            callback(_this, item);
        }, function (error) { return console.log(error); });
    };
    CartService.prototype.removeCartItem = function (cartItem) {
        return this.http.post("http://localhost:8080/remove", JSON.stringify(cartItem))
            .map(function (response) { return response.json(); });
    };
    CartService.prototype.increaseCartItemQunatity = function (cartItem) {
        cartItem.quantity = cartItem.quantity + 1;
        return this.http.post("http://localhost:8080/revise", JSON.stringify(cartItem))
            .map(function (response) { return response.json(); });
    };
    CartService.prototype.decreaseCartItemQunatity = function (cartItem) {
        cartItem.quantity = cartItem.quantity - 1;
        return this.http.post("http://localhost:8080/revise", JSON.stringify(cartItem))
            .map(function (response) { return response.json(); });
    };
    CartService.prototype.checkOut = function () { }; // TODO: for later implementation
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, shop_service_1.ShopService])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map