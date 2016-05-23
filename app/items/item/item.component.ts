import { Component } from '@angular/core';

import { ItemListComponent } from '../item-list/item-list.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemService } from '../shared/item.service';


@Component({
	//selector: 'item-main',
	templateUrl: 'app/items/item/item.component.html',
	directives: [ItemListComponent, ItemCreateComponent], // using component as directive
	providers: [ItemService]
})
export class ItemComponent { 
	title: string = '[placeholdder]'; // will be displayed using interpolation
	isAdmin: boolean = false;

	constructor (private itemService: ItemService) {
		let profile = JSON.parse(localStorage.getItem('profile'));
		if (profile) {
			this.isAdmin = profile['role'] == 'admin' ? true : false;
		}
	}
}
