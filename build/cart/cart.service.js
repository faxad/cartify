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
var auth_service_1 = require('../shared/auth.service');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var shop_service_1 = require('../shop/shop.service');
var CartService = (function () {
    function CartService(_http, shop) {
        this._http = _http;
        this.shop = shop;
    }
    CartService.prototype.handleError = function (error, Response) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Service Error");
    };
    CartService.prototype.getCart = function () {
        return this._http.get("http://localhost:8080/cart?userId=" + auth_service_1.AuthService.getUser())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        //.do(data => console.log(JSON.stringify(data)));
    };
    CartService.prototype.getCustomerCart = function () {
        var _this = this;
        var customerCartItems = [];
        return Observable_1.Observable.create(function (observer) {
            _this.getCart().subscribe(function (cartItems) {
                var _loop_1 = function(cartItem) {
                    _this.shop.getItem(cartItem.itemId).subscribe(function (shopItem) {
                        customerCartItems.push({
                            'userId': cartItem.userId,
                            'itemId': cartItem.itemId,
                            'name': shopItem.name,
                            'code': shopItem.code,
                            'quantity': cartItem.quantity,
                            'unitPrice': cartItem.unitPrice,
                            'paid': cartItem.paid,
                        });
                    });
                };
                for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
                    var cartItem = cartItems_1[_i];
                    _loop_1(cartItem);
                }
                observer.next(customerCartItems);
                observer.complete();
            }, function (error) { return console.log(error); });
        });
    };
    CartService.prototype.addItem = function (item) {
        var body = {
            "userId": auth_service_1.AuthService.getUser(),
            "itemId": item.id,
            "quantity": 1
        };
        return this._http.post("http://localhost:8080/add", JSON.stringify(body))
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.itemExists = function (item, callback) {
        var _this = this;
        this.getCart().subscribe(function (cart) {
            for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
                var cartItem = cart_1[_i];
                if (cartItem['itemId'] == item['id']) {
                    _this.increaseQunatity(cartItem).subscribe(function (items) { return console.log("Incremented"); }, function (error) { return console.log(error); });
                    return;
                }
            }
            callback(_this, item);
        }, function (error) { return console.log(error); });
    };
    CartService.prototype.removeItem = function (item) {
        return this._http.post("http://localhost:8080/remove", JSON.stringify(item))
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.increaseQunatity = function (item) {
        item.quantity = item.quantity + 1;
        console.log(item);
        return this._http.post("http://localhost:8080/revise", JSON.stringify(item))
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.decreaseQunatity = function (item) {
        item.quantity = item.quantity - 1;
        console.log(item);
        return this._http.post("http://localhost:8080/revise", JSON.stringify(item))
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.checkOut = function () { };
    CartService.prototype.clear = function () { };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, shop_service_1.ShopService])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map