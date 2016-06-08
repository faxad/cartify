import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ItemListComponent } from '../item-list/item-list.component';
import { FormComponent } from '../shared/form.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemService } from '../shared/item.service';
import { AuthService } from '../shared/auth.service';
import { CartService } from '../shared/cart.service';
import { Observable } from 'rxjs/Observable';

@Component({
	//selector: 'item-main',
	templateUrl: 'app/items/item/item.component.html',
	directives: [ItemListComponent, FormComponent, ItemCreateComponent, ROUTER_DIRECTIVES], // using component as directive
	providers: [ItemService, CartService]
})
export class ItemComponent { 
	title: string = '[placeholdder]'; // will be displayed using interpolation
	modalIdentifier: string = 'itemCreateModal'
	constructor (private itemService: ItemService, private auth: AuthService, private cart: CartService) {}
}
