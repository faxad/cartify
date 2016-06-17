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
var item_service_1 = require('../shared/item.service');
var star_component_1 = require('../shared/star.component');
var item_filter_pipe_1 = require('./item-filter.pipe');
var form_component_1 = require('../shared/form.component');
var cart_service_1 = require('../shared/cart.service');
var auth_service_1 = require('../shared/auth.service');
var ItemListComponent = (function () {
    function ItemListComponent(itemService, auth, cart) {
        this.itemService = itemService;
        this.auth = auth;
        this.cart = cart;
        this.pageTitle = 'Item List';
        this.modalIdentifier = 'itemCreateModal';
        this.imgWidth = 100;
        this.imgMargin = 10;
        this.showImg = true;
    }
    ItemListComponent.prototype.toggleImg = function () {
        this.showImg = !this.showImg;
    };
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems().subscribe(function (items) { return _this.items = items; }, function (error) { return console.log(error); });
    };
    ItemListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Item List: ' + message;
    };
    ItemListComponent.prototype.addItemToCart = function (item) {
        this.cart.itemExists(item, function (service, item) {
            service.addItem(item).subscribe(function (items) { return console.log("Added to Cart"); }, function (error) { return console.log(error); });
        });
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'list-item',
            templateUrl: 'app/item-list/item-list.component.html',
            styleUrls: ['app/item-list/item-list.component.css'],
            pipes: [item_filter_pipe_1.ItemFilterPipe],
            directives: [star_component_1.StarComponent, form_component_1.FormComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [item_service_1.ItemService, cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, auth_service_1.AuthService, cart_service_1.CartService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map