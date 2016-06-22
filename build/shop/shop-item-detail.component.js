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
var item_service_1 = require('../shared/item.service');
var ItemDetailComponent = (function () {
    function ItemDetailComponent(_routerParams, _router, itemService) {
        this._routerParams = _routerParams;
        this._router = _router;
        this.itemService = itemService;
        this.parmValue = this._routerParams.get('id');
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItem(Number(this.parmValue)).subscribe(function (item) { return _this.item = item; }, function (error) { return console.log(error); });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this._router.navigate(['Items']);
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/item-detail/item-detail.component.html',
            providers: [item_service_1.ItemService]
        }),
        router_deprecated_1.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router, (typeof (_a = typeof item_service_1.ItemService !== 'undefined' && item_service_1.ItemService) === 'function' && _a) || Object])
    ], ItemDetailComponent);
    return ItemDetailComponent;
    var _a;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=shop-item-detail.component.js.map