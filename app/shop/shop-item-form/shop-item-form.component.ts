import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ShopService } from '../shop.service';
import { ValidationService } from '../../shared/validation.service';
import { ExtendedValidators } from './validators';
import { IShopItem } from '../shop-item.interface';

@Component({
	selector: 'shop-item-form',
	templateUrl: 'app/shop/shop-item-form/shop-item-form.component.html',
	styleUrls: ['app/shop/shop-item-form/shop-item-form.component.css'],
	directives: [FORM_DIRECTIVES],
	providers: [ValidationService]
})
export class FormComponent implements OnInit {
	shopItemForm: ControlGroup;
	isCreateForm: boolean = true;
	@Input() modalId: string; // modal identifier
	@Input() shopItem: IShopItem;
	@Output() shopItemsUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(
		private shop: ShopService,
		private validation: ValidationService,
		private formBuilder: FormBuilder) {}

	submitItem(form: any): void {
		if (form.valid) {
			let action: string = this.isCreateForm ? 'addShopItem' : 'updateShopItem';

			this.shop[action](form.value).subscribe(
				shopItem => { this.shopItemsUpdated.emit(true); },
				error => console.log(error));
		}
		else { alert('Form Validation Failed! Please Re-Submit.'); }
	}

	ngOnInit(): void {
		this.shopItemForm = this.formBuilder.group({
			'id': ['', Validators.required],
			'name': ['', Validators.compose(
				[Validators.required,
					ExtendedValidators.nameValidator])],
			'code': ['', Validators.required],
			'unitPrice': ['', Validators.required],
			'quantityInStock': ['', Validators.required],
			'releaseDate': [''],
			'description': ['']
		});

		if (this.shopItem) {
			this.isCreateForm = false;
			for (let key in this.shopItemForm.controls) {
				this.shopItemForm.controls[key]._value = this.shopItem[key]
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