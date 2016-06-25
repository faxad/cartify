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
var ShopItemFilterPipe = (function () {
    function ShopItemFilterPipe() {
    }
    ShopItemFilterPipe.prototype.transform = function (value, args) {
        var filter = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter(function (shopItem) {
            return shopItem.name.toLocaleLowerCase().indexOf(filter) != -1;
        }) : value;
    };
    ShopItemFilterPipe = __decorate([
        core_1.Pipe({
            name: 'shopItemFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], ShopItemFilterPipe);
    return ShopItemFilterPipe;
}());
exports.ShopItemFilterPipe = ShopItemFilterPipe;
//# sourceMappingURL=shop-item-filter.pipe.js.map