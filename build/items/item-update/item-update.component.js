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
var common_1 = require('@angular/common');
var valid_service_1 = require('../shared/valid.service');
var validators_1 = require('../shared/validators');
var item_service_1 = require('../shared/item.service');
var ItemUpdateComponent = (function () {
    function ItemUpdateComponent(itemService, validService, fb) {
        this.itemService = itemService;
        this.validService = validService;
        this.fb = fb;
    }
    ItemUpdateComponent.prototype.submitItem = function (form) {
        if (form.valid) {
            this.itemName = form.value['itemName'];
            this.itemCode = form.value['itemCode'];
            this.itemService.setItem(this.itemName, this.itemCode);
            this.itemName = '';
            this.itemCode = '';
        }
        else {
            alert('Form Validation Failed! Please Re-Submit.');
        }
    };
    ItemUpdateComponent.prototype.ngOnInit = function () {
        this.createForm = this.fb.group({
            'itemName': [this.item.itemName, common_1.Validators.compose([common_1.Validators.required,
                    validators_1.ExtendedValidators.nameValidator])],
            'itemCode': [this.item.itemCode, common_1.Validators.required]
        });
        this.validService.configure(this.createForm, {
            'itemName': {
                'condition': 'invalidName',
                'message': 'Name must start with abc'
            }
        }, {});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemUpdateComponent.prototype, "item", void 0);
    ItemUpdateComponent = __decorate([
        core_1.Component({
            selector: 'update-item',
            templateUrl: 'app/items/item-update/item-update.component.html',
            styleUrls: ['app/items/item-create/item-create.component.css'],
            directives: [common_1.FORM_DIRECTIVES],
            providers: [valid_service_1.ValidService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, valid_service_1.ValidService, common_1.FormBuilder])
    ], ItemUpdateComponent);
    return ItemUpdateComponent;
}());
exports.ItemUpdateComponent = ItemUpdateComponent;
//# sourceMappingURL=item-update.component.js.map