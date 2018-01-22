import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ShopService } from 'core';

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

    constructor(
        private shop: ShopService,
        public validation: ValidationService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<FormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(): void {
        this.dialogRef.close(null);
    }

    submitItem(form: any): void {
        if (form.valid) {
            let action: string = this.isCreateForm ? 'addShopItem' : 'updateShopItem';
            this.shop[action](form.value).subscribe(shopItem => {
                // this is to make PhantomJS not cause the error
                // undefined is not a constructor evaluating
                try {
                    this.dialogRef.close(shopItem);
                } catch {
                    return
                }
            });
        }
    }

    ngOnInit(): void {
        this.isCreateForm = this.data._id === undefined ? true : false
        this.shopItemForm = this.formBuilder.group({
            '_id': [{
                value: this.data ? this.data._id : '',
                disabled: false
            }],
            'name': [
                this.data ? this.data.name : '',
                Validators.compose([
                    Validators.required,
                    ShopItemFormValidators.nameValidator])
            ],
            'code': [
                this.data ? this.data.code : '',
                Validators.required
            ],
            'unitPrice': [
                this.data ? this.data.unitPrice : '',
                Validators.required
            ],
            'quantityInStock': [
                this.data ? this.data.quantityInStock : '',
                Validators.required
            ],
            'releaseDate': [
                this.data ? this.data.releaseDate : '',
            ],
            'category': [
                this.data ? this.data.category : '',
            ],
            'description': [
                this.data ? this.data.description : ''
            ]
        });

        this.validation.configure(
            this.shopItemForm,
            {
                'name': {
                    'condition': 'invalidName',
                    'message': 'Name must start with captial letter'
                }
            },
            {}
        );
    }
}
