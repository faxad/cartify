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
var item_service_1 = require('../shared/item.service');
var star_component_1 = require('../shared/star.component');
var item_filter_pipe_1 = require('./item-filter.pipe');
var item_update_component_1 = require('../item-update/item-update.component');
var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
        this.pageTitle = 'Item List';
        this.imgWidth = 50;
        this.imgMargin = 2;
        this.showImg = false;
    }
    ItemListComponent.prototype.toggleImg = function () {
        this.showImg = !this.showImg;
    };
    ItemListComponent.prototype.ngOnInit = function () {
        console.log('inside OnInit hook');
        this.items = this.itemService.getItems();
    };
    ItemListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Item List: ' + message;
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'list-item',
            templateUrl: 'app/items/item-list/item-list.component.html',
            styleUrls: ['app/items/item-list/item-list.component.css'],
            pipes: [item_filter_pipe_1.ItemFilterPipe],
            directives: [star_component_1.StarComponent, item_update_component_1.ItemUpdateComponent],
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
// interpolation
// property binding
// event binding
// two-way binding
//# sourceMappingURL=item-list.component.js.map