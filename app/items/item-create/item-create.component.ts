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
	controls: AbstractControl[];

	formErrors: any;
	itemName: string;
	itemCode: string;

	stateCheck(control: AbstractControl, code: string): boolean {
		let checks = {
			//'itemName': control.touched,
		}

		return (code in checks) ? checks[code] : control.touched
	}

	validityCheck(control: AbstractControl, code: string): { [s: string]: any } {
		let checks = {
			'itemName': { 
				'condition': control.hasError('invalidName'),
				'message': 'Name must start with abc'
			}
		}[code]

		return {
			"result": checks['condition'],
			"message": checks['message']
		}
	}

	check(control: string): { [s: string]: any } {
		let c = this.createForm.controls[control];
		if (this.stateCheck(c, control)) {
			if (c.hasError('required')) {
				return { 
					"result": true, 
					"message": "Required Field!"
				}
			}
			else {
				return this.validityCheck(c, control)
			}
		}
		else {
			return {
				"result": false,
				"message": ""
			}
		}
	}

	constructor(private itemService: ItemService, fb: FormBuilder) {
		this.createForm = fb.group({
			'itemName': ['', Validators.compose([
				Validators.required, ExtendedValidators.nameValidator])],
			'itemCode': ['', Validators.required]
		});

		//this.controls = this.createForm.controls;
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