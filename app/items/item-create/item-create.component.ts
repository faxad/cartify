import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { ItemService } from '../shared/item.service';


@Component({
	selector: 'create-item',
	templateUrl: 'app/items/item-create/item-create.component.html',
	styleUrls: ['app/items/item-create/item-create.component.css'],
	directives: [FORM_DIRECTIVES],
})
export class ItemCreateComponent {
	itemName: string;
	itemCode: string;

	constructor(private itemService: ItemService) { }

	submitItem(form: any): void {
		console.log(form);
		this.itemName = form['itemName'];
		this.itemCode = form['itemCode'];
		this.itemService.setItem(this.itemName, this.itemCode);
		this.itemName = '';
		this.itemCode = '';
	}
}