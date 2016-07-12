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
var index_1 = require('../../shared/index');
var validators_1 = require('./validators');
var FormComponent = (function () {
    function FormComponent(shop, validation, formBuilder) {
        this.shop = shop;
        this.validation = validation;
        this.formBuilder = formBuilder;
        this.isCreateForm = true;
        this.shopItemsUpdated = new core_1.EventEmitter();
    }
    FormComponent.prototype.submitItem = function (form) {
        var _this = this;
        if (form.valid) {
            var action = this.isCreateForm ? 'addShopItem' : 'updateShopItem';
            this.shop[action](form.value).subscribe(function (shopItem) { _this.shopItemsUpdated.emit(true); }, function (error) { return console.log(error); });
        }
        else {
            alert('Form Validation Failed! Please Re-Submit.');
        }
    };
    FormComponent.prototype.ngOnInit = function () {
        console.log(this.modalId);
        //console.log(this.shopItem)
        this.shopItemForm = this.formBuilder.group({
            'id': ['', common_1.Validators.required],
            'name': ['', common_1.Validators.compose([common_1.Validators.required,
                    validators_1.ExtendedValidators.nameValidator])],
            'code': ['', common_1.Validators.required],
            'unitPrice': ['', common_1.Validators.required],
            'quantityInStock': ['', common_1.Validators.required],
            'releaseDate': [''],
            'description': ['']
        });
        if (this.shopItem) {
            this.isCreateForm = false;
            for (var key in this.shopItemForm.controls) {
                this.shopItemForm.controls[key].value = this.shopItem[key];
            }
        }
        this.validation.configure(this.shopItemForm, {
            'name': {
                'condition': 'invalidName',
                'message': 'Name must start with abc'
            }
        }, {});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormComponent.prototype, "modalId", void 0);
    __decorate([
        // modal identifier
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "shopItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormComponent.prototype, "shopItemsUpdated", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'shop-item-form',
            templateUrl: 'app/shop/shop-item-form/shop-item-form.component.html',
            styleUrls: ['app/shop/shop-item-form/shop-item-form.component.css'],
            directives: [common_1.FORM_DIRECTIVES],
            providers: [index_1.ValidationService]
        }), 
        __metadata('design:paramtypes', [index_1.ShopService, index_1.ValidationService, common_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=shop-item-form.component.js.map