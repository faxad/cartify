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

	constructor (private itemService: ItemService) { }
}
