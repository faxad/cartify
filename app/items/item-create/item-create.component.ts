import { Component } from '@angular/core';

import { ItemService } from '../shared/item.service';


@Component({
	selector: 'create-item',
	templateUrl: 'app/items/item-create/item-create.component.html',
	styleUrls: ['app/items/item-create/item-create.component.css'],
})
export class ItemCreateComponent {
	itemName: string;
	itemCode: string;

	constructor(private itemService: ItemService) { }

	submitItem(): void {
		console.log(this.itemService.getItems());
		this.itemService.setItem(this.itemName, this.itemCode);
		this.itemName = '';
		this.itemCode = '';
	}
}