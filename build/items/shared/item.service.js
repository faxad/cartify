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
var mock_items_1 = require('./mock-items');
var ItemService = (function () {
    function ItemService() {
    }
    ItemService.prototype.getItems = function () {
        return mock_items_1.ITEMS;
    };
    ItemService.prototype.getItem = function () {
        return {
            "id": 5,
            "name": "Hammer",
            "code": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Sed lobortis ultrices dui a venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id risus luctus, facilisis ante in, dapibus nunc. Sed vitae porttitor lacus, et imperdiet mi. Phasellus iaculis ipsum et aliquam mattis. Nulla convallis, mi ac rutrum fringilla, est metus condimentum erat, et tempor libero purus a lacus. Nunc blandit, nisi in consectetur tristique, ex massa dapibus metus, id maximus nunc quam non sapien. In fermentum massa at ante semper, vel vehicula quam tempus. Sed eget neque lectus.",
            "unitPrice": 8.9,
            "quantity": 10,
            "rating": 4.8,
            "imageUrl": "http://placehold.it/320x150"
        };
    };
    ItemService.prototype.setItem = function (name, code) {
        this.getItems().push({
            "id": 9,
            "name": name,
            "code": code,
            "releaseDate": "March 19, 2016",
            "description": "Dummy description",
            "unitPrice": 11.11,
            "quantity": 50,
            "rating": 0.1,
            "imageUrl": "http://placehold.it/320x150"
        });
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map