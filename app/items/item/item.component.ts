import { Component, OnInit } from '@angular/core';

import { ItemListComponent } from '../item-list/item-list.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemService } from '../shared/item.service';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
	//selector: 'item-main',
	templateUrl: 'app/items/item/item.component.html',
	directives: [ItemListComponent, ItemCreateComponent], // using component as directive
	providers: [ItemService]//, AuthService]
})
export class ItemComponent implements OnInit { 
	title: string = '[placeholdder]'; // will be displayed using interpolation
	isAdmin: boolean = false;
	subs: any;
	constructor (private itemService: ItemService, private authService: AuthService) {
		// let profile = JSON.parse(localStorage.getItem('profile'));
		// if (profile) {
		// 	this.isAdmin = profile['role'] == 'admin' ? true : false;
		// }
		this.authService.adminLogInOutActivity.subscribe((d) => {
			this.isAdmin = d;
			console.log('logged event...'+d+' '+this.isAdmin);
		},
		e => console.log('error occured'))
	}

	ngOnInit(): void {
		// this.subs = this.authService.getEmitter().subscribe(
		// 	isAdmin => this.isAdmin = true);
	}
}
