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
var angular2_jwt_1 = require('angular2-jwt');
var shop_service_1 = require('../../shared/shop.service');
var ShopItemDetailComponent = (function () {
    function ShopItemDetailComponent(routerParams, router, shop) {
        this.routerParams = routerParams;
        this.router = router;
        this.shop = shop;
    }
    ShopItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop.getShopItem(Number(this.routerParams.get('id'))).subscribe(function (shopItem) { return _this.shopItem = shopItem; }, function (error) { return console.log(error); });
    };
    ShopItemDetailComponent.prototype.goBack = function () {
        this.router.navigate(['Items']);
    };
    ShopItemDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/shop/shop-item-detail/shop-item-detail.component.html',
            providers: [shop_service_1.ShopService]
        }),
        router_deprecated_1.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router, shop_service_1.ShopService])
    ], ShopItemDetailComponent);
    return ShopItemDetailComponent;
}());
exports.ShopItemDetailComponent = ShopItemDetailComponent;
//# sourceMappingURL=shop-item-detail.component.js.map