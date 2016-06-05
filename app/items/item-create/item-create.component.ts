import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ItemService } from '../shared/item.service';
import { ValidService } from '../shared/valid.service';
import { ExtendedValidators } from '../shared/validators';

@Component({
	selector: 'create-item',
	templateUrl: 'app/items/item-create/item-create.component.html',
	styleUrls: ['app/items/item-create/item-create.component.css'],
	directives: [FORM_DIRECTIVES],
	providers: [ValidService]
})
export class ItemCreateComponent {
	createForm: ControlGroup;

	formErrors: any;
	itemName: string;
	itemCode: string;

	constructor(private itemService: ItemService, private validService: ValidService, fb: FormBuilder) {
		this.createForm = fb.group({
			'itemName': ['', Validators.compose(
								[Validators.required,
								ExtendedValidators.nameValidator])],
			'itemCode': ['', Validators.required]
		});

		validService.configure(
			this.createForm,
			{
				'itemName': {
					'condition': 'invalidName',
					'message': 'Name must start with abc'
				}
			},
			{}
		);
	}

	submitItem(form: any): void {
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
	}
}