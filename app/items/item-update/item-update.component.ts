import { Component, Input, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ValidService } from '../shared/valid.service';
import { ExtendedValidators } from '../shared/validators';
import { ItemService } from '../shared/item.service';
import { IItem } from '../shared/item.interface';

@Component({
	selector: 'update-item',
	templateUrl: 'app/items/item-update/item-update.component.html',
	styleUrls: ['app/items/item-create/item-create.component.css'],
	directives: [FORM_DIRECTIVES],
	providers: [ValidService]
})
export class ItemUpdateComponent implements OnInit {
	@Input() item: IItem;
	createForm: ControlGroup;
	itemName: string;
	itemCode: string;

	constructor(private itemService: ItemService, private validService: ValidService, private fb: FormBuilder) {}

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

	ngOnInit(): void {
		this.createForm = this.fb.group({
			'itemName': [this.item.itemName, Validators.compose(
				[Validators.required,
					ExtendedValidators.nameValidator])],
			'itemCode': [this.item.itemCode, Validators.required]
		});

		this.validService.configure(
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
}
