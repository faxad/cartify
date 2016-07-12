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
var index_1 = require('../shared/index');
var ItemCartComponent = (function () {
    function ItemCartComponent(router, cart) {
        this.router = router;
        this.cart = cart;
    }
    ItemCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart.getCartItemsWithDetails().subscribe(function (cart) { return _this.userCartItems = cart; }, function (error) { return console.log(error); });
    };
    ItemCartComponent.prototype.increaseQuantity = function (item) {
        this.cart.increaseCartItemQunatity(item).subscribe(function (items) { return console.log("Incremented"); }, function (error) { return console.log(error); });
    };
    ItemCartComponent.prototype.decreaseQunatity = function (item) {
        this.cart.decreaseCartItemQunatity(item).subscribe(function (items) { return console.log("Decremented"); }, function (error) { return console.log(error); });
    };
    ItemCartComponent.prototype.removeCartItem = function (item) {
        this.cart.removeCartItem(item).subscribe(function (items) { return console.log("Removed"); }, function (error) { return console.log(error); });
    };
    ItemCartComponent.prototype.goBack = function () {
        this.router.navigate(['Items']);
    };
    ItemCartComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/cart/cart-item-list.component.html',
            providers: [index_1.CartService, index_1.ShopService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, index_1.CartService])
    ], ItemCartComponent);
    return ItemCartComponent;
}());
exports.ItemCartComponent = ItemCartComponent;
//# sourceMappingURL=cart-item-list.component.js.map