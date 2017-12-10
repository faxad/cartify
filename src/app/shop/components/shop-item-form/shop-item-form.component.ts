import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ShopService } from 'core';
import { IShopItem } from 'shared';
import { ValidationService } from './form-validation.service';
import { ShopItemFormValidators } from './shop-item-form.validators';

@Component({
    selector: 'app-shop-item-form',
    templateUrl: './shop-item-form.component.html',
    styleUrls: ['./shop-item-form.component.css'],
    providers: [ValidationService]
})
export class FormComponent implements OnInit {
    public shopItemForm: FormGroup;
    private isCreateForm = true;
    @Input() shopItem: IShopItem;
    @Output() shopItemsUpdated: EventEmitter<any> = new EventEmitter();

    constructor(
        private shop: ShopService,
        private validation: ValidationService,
        private formBuilder: FormBuilder) {}

    submitItem(form: any): void {
        if (form.valid) {
            let action: string = this.isCreateForm ? 'addShopItem' : 'updateShopItem';
            this.shop[action](form.value).subscribe(
                shopItem => { this.shopItemsUpdated.emit(null); },
            );
        } else {
            alert('Form Validation Failed! Please Re-Submit.');
        }
    }

    ngOnInit(): void {
        this.shopItemForm = this.formBuilder.group({
            '_id': [{ value: null, disabled: false }],
            'name': ['', Validators.compose([
                            Validators.required,
                            ShopItemFormValidators.nameValidator])
            ],
            'code': ['', Validators.required],
            'unitPrice': ['', Validators.required],
            'quantityInStock': ['', Validators.required],
            'releaseDate': [''],
            'description': ['']
        });

        if (this.shopItem) {
            this.isCreateForm = false;
            for (let key of Object.keys(this.shopItemForm.controls)) {
                (this.shopItemForm.controls[key] as FormControl).setValue(
                    (key === 'releaseDate') ? new Date(
                        this.shopItem[key]) : this.shopItem[key]
                ); // updateValue
            }
        }

        this.validation.configure(
            this.shopItemForm,
            {
                'name': {
                    'condition': 'invalidName',
                    'message': 'Name must start with abc'
                }
            },
            {}
        );
    }
}
