import { Component, Input, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ItemService } from '../shared/item.service';
import { ValidService } from '../shared/valid.service';
import { ExtendedValidators } from '../shared/validators';
import { IItem } from '../shared/item.interface';

@Component({
	selector: 'custom-form',
	templateUrl: 'app/shared/form.component.html',
	styleUrls: ['app/shared/form.component.css'],
	directives: [FORM_DIRECTIVES],
	providers: [ValidService]
})
export class FormComponent implements OnInit {
	isCreateForm: boolean = true;
	@Input() modalId: string;
	@Input() item: IItem;
	customForm: ControlGroup;

	formErrors: any;
	itemName: string;
	itemCode: string;

	constructor(private itemService: ItemService, private validService: ValidService, private fb: FormBuilder) {}

	submitItem(form: any): void {
		if (form.valid) {
			this.itemName = form.value['name'];
			this.itemCode = form.value['code'];

			let action: string = this.isCreateForm ? 'addItem' : 'updateItem';

			this.itemService[action](form.value).subscribe(
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
			this.isCreateForm = false;
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