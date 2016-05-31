import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, AbstractControl, ControlGroup, Validators } from '@angular/common';

import { ItemService } from '../shared/item.service';


@Component({
	selector: 'create-item',
	templateUrl: 'app/items/item-create/item-create.component.html',
	styleUrls: ['app/items/item-create/item-create.component.css'],
	directives: [FORM_DIRECTIVES],
})
export class ItemCreateComponent {
	createForm: ControlGroup;
	formErrors: any;
	//itemNameControl: AbstractControl;
	itemName: string;
	itemCode: string;

	nameValidator(control: Control): { [s: string]: boolean } {  
	  if (!control.value.match(/^abc/)) {  
	    return {invalidName: true};  
	  }
	}

	check(): boolean {
		let c = this.createForm.controls['itemName'];
		return (!c.valid && c.touched && c.hasError('invalidName') && c.hasError('required'));
	}

	constructor(private itemService: ItemService, fb: FormBuilder) {
		this.createForm = fb.group({
			'itemName': ['', Validators.compose([
				Validators.required, this.nameValidator])],
			'itemCode': ['']
		});

		//this.itemNameControl = this.createForm.controls['itemName'];
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