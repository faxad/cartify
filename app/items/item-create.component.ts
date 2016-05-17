import { Component } from '@angular/core';

import { ItemService } from './item.service';


@Component({
	selector: 'create-item',
	templateUrl: 'app/items/item-create.component.html',
})
export class ItemCreateComponent {
	productName: string;
	productCode: string;

	constructor(private itemService: ItemService) { }

	submitItem(): void {
		console.log(this.itemService.getItems());
		this.itemService.setItem(this.productName, this.productCode);
		this.productName = '';
		this.productCode = '';
	}
}