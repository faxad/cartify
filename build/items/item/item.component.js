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
var item_list_component_1 = require('../item-list/item-list.component');
var form_component_1 = require('../shared/form.component');
var item_service_1 = require('../shared/item.service');
var auth_service_1 = require('../shared/auth.service');
var cart_service_1 = require('../shared/cart.service');
var ItemComponent = (function () {
    function ItemComponent(itemService, auth, cart) {
        this.itemService = itemService;
        this.auth = auth;
        this.cart = cart;
        this.title = '[placeholdder]'; // will be displayed using interpolation
        this.modalIdentifier = 'itemCreateModal';
    }
    ItemComponent = __decorate([
        core_1.Component({
            //selector: 'item-main',
            templateUrl: 'app/items/item/item.component.html',
            directives: [item_list_component_1.ItemListComponent, form_component_1.FormComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [item_service_1.ItemService, cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, auth_service_1.AuthService, cart_service_1.CartService])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map