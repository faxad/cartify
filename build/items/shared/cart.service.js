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
var mock_cart_1 = require('./mock-cart');
var auth_service_1 = require('./auth.service');
var CartService = (function () {
    function CartService() {
    }
    CartService.prototype.getCart = function () {
        return mock_cart_1.CART;
    };
    CartService.prototype.addItem = function (item) {
        var found = false;
        for (var _i = 0, CART_1 = mock_cart_1.CART; _i < CART_1.length; _i++) {
            var cartItem = CART_1[_i];
            if (cartItem['userId'] == auth_service_1.AuthService.getUser() && cartItem['item']['itemId'] == item['itemId']) {
                cartItem['quantity'] = cartItem['quantity'] + 1;
                found = true;
            }
        }
        if (!found) {
            this.getCart().push({
                userId: 'fawad@outlook.com',
                item: item,
                quantity: 1,
                unitPrice: 40.00,
                paid: false,
            });
        }
    };
    CartService.prototype.removeItem = function (item) {
        this.getCart().pop(); // will be replaced with an actual remove
    };
    CartService.prototype.increaseQunatity = function (item) {
        item.quantity = item.quantity + 1;
    };
    CartService.prototype.decreaseQunatity = function (item) {
        item.quantity = item.quantity - 1;
    };
    CartService.prototype.checkOut = function () { };
    CartService.prototype.clear = function () { };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map