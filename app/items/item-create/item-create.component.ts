import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, AbstractControl, ControlGroup, Validators } from '@angular/common';

import { ItemService } from '../shared/item.service';
import { ExtendedValidators } from '../shared/validators';

@Component({
	selector: 'create-item',
	templateUrl: 'app/items/item-create/item-create.component.html',
	styleUrls: ['app/items/item-create/item-create.component.css'],
	directives: [FORM_DIRECTIVES],
})
export class ItemCreateComponent {
	createForm: ControlGroup;
	formErrors: any;
	itemName: string;
	itemCode: string;

	check(): boolean {
		let c = this.createForm.controls['itemName'];
		return (c.touched && (!c.valid || c.hasError('invalidName') || c.hasError('required'));
	}

	constructor(private itemService: ItemService, fb: FormBuilder) {
		this.createForm = fb.group({
			'itemName': ['', Validators.compose([
				Validators.required, ExtendedValidators.nameValidator])],
			'itemCode': ['']
		});
	}

	submitItem(form: any): void {
		console.log(form);
		this.itemName = form['itemName'];
		this.itemCode = form['itemCode'];
		this.itemService.setItem(this.itemName, this.itemCode);
		this.itemName = '';
		this.itemCode = '';
	}
}