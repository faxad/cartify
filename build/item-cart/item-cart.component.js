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
var cart_service_1 = require('../shared/cart.service');
var ItemCartComponent = (function () {
    function ItemCartComponent(_routerParams, _router, cartService) {
        this._routerParams = _routerParams;
        this._router = _router;
        this.cartService = cartService;
        this.parmValue = this._routerParams.get('userid');
    }
    ItemCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.cart = this.cartService.getCart();
        this.cartService.getCart().subscribe(function (cart) { return _this.cart = cart; }, function (error) { return console.log(error); });
        console.log(this.cart);
    };
    ItemCartComponent.prototype.increaseQuantity = function (item) {
        this.cartService.increaseQunatity(item).subscribe(function (items) { return console.log("Incremented"); }, function (error) { return console.log(error); });
    };
    ItemCartComponent.prototype.decreaseQunatity = function (item) {
        this.cartService.decreaseQunatity(item).subscribe(function (items) { return console.log("Decremented"); }, function (error) { return console.log(error); });
    };
    ItemCartComponent.prototype.removeItem = function (item) {
        this.cartService.removeItem(item).subscribe(function (items) { return console.log("Removed"); }, function (error) { return console.log(error); });
    };
    ItemCartComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/item-cart/item-cart.component.html',
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router, cart_service_1.CartService])
    ], ItemCartComponent);
    return ItemCartComponent;
}());
exports.ItemCartComponent = ItemCartComponent;
//# sourceMappingURL=item-cart.component.js.map