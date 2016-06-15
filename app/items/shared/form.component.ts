import { Component, Input, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ItemService } from '../shared/item.service';
import { ValidService } from '../shared/valid.service';
import { ExtendedValidators } from '../shared/validators';
import { IItem } from '../shared/item.interface';

@Component({
	selector: 'custom-form',
	templateUrl: 'app/items/shared/form.component.html',
	styleUrls: ['app/items/shared/form.component.css'],
	directives: [FORM_DIRECTIVES],
	providers: [ValidService]
})
export class FormComponent implements OnInit {
	@Input() modalId: string;
	@Input() item: IItem;
	customForm: ControlGroup;

	formErrors: any;
	itemName: string;
	itemCode: string;

	constructor(private itemService: ItemService, private validService: ValidService, private fb: FormBuilder) {}

	submitItem(form: any): void {
		if (form.valid) {
			//console.log(form.value)
			this.itemName = form.value['id'];
			this.itemName = form.value['name'];
			this.itemCode = form.value['code'];
			//this.itemService.setItem(form.value);
			this.itemService.setItem(form.value).subscribe(
				item => console.log(item),
				error => console.log(error));

			this.itemName = '';
			this.itemCode = '';
		}
		else {
			alert('Form Validation Failed! Please Re-Submit.');
		}
	}

	ngOnInit(): void {
		this.customForm = this.fb.group({
			'id': ['', Validators.required],
			'name': ['', Validators.compose(
				[Validators.required,
					ExtendedValidators.nameValidator])],
			'code': ['', Validators.required]
		});

		if (this.item) {
			for (let key in this.customForm.controls) {
				this.customForm.controls[key]._value = this.item[key]
			}
		}

		this.validService.configure(
			this.customForm,
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