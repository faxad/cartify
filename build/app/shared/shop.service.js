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
var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
    }
    ShopService.prototype.handleError = function (error, Response) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Service Error");
    };
    ShopService.prototype.getShopItems = function () {
        return this.http.get("http://localhost:8080/items")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        //.do(data => console.log(JSON.stringify(data)));
    };
    ShopService.prototype.getShopItem = function (id) {
        return this.http.get("http://localhost:8080/item?id=" + id)
            .map(function (response) { return response.json(); });
    };
    ShopService.prototype.addShopItem = function (body) {
        return this.http.post("http://localhost:8080/insert", JSON.stringify(body))
            .map(function (response) { return response.json(); });
    };
    ShopService.prototype.updateShopItem = function (body) {
        return this.http.post("http://localhost:8080/update", JSON.stringify(body))
            .map(function (response) { return response.json(); });
    };
    ShopService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map