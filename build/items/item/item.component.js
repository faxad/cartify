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
var item_list_component_1 = require('../item-list/item-list.component');
var item_create_component_1 = require('../item-create/item-create.component');
var item_service_1 = require('../shared/item.service');
var auth_service_1 = require('../shared/auth.service');
var ItemComponent = (function () {
    function ItemComponent(itemService, authService) {
        var _this = this;
        this.itemService = itemService;
        this.authService = authService;
        this.title = '[placeholdder]'; // will be displayed using interpolation
        this.isAdmin = false;
        // let profile = JSON.parse(localStorage.getItem('profile'));
        // if (profile) {
        // 	this.isAdmin = profile['role'] == 'admin' ? true : false;
        // }
        this.authService.adminLogInOutActivity.subscribe(function (d) {
            _this.isAdmin = d;
            console.log('logged event...' + d + ' ' + _this.isAdmin);
        }, function (e) { return console.log('error occured'); });
    }
    ItemComponent.prototype.ngOnInit = function () {
        // this.subs = this.authService.getEmitter().subscribe(
        // 	isAdmin => this.isAdmin = true);
    };
    ItemComponent = __decorate([
        core_1.Component({
            //selector: 'item-main',
            templateUrl: 'app/items/item/item.component.html',
            directives: [item_list_component_1.ItemListComponent, item_create_component_1.ItemCreateComponent],
            providers: [item_service_1.ItemService] //, AuthService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, auth_service_1.AuthService])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map