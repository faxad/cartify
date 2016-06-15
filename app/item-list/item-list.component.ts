import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { IItem } from '../shared/item.interface';
import { ItemService } from '../shared/item.service';
import { StarComponent } from '../shared/star.component';
import { ItemFilterPipe } from './item-filter.pipe';
import { FormComponent } from '../shared/form.component';
import { CartService } from '../shared/cart.service';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs/Observable';


@Component({
	selector: 'list-item',
	templateUrl: 'app/item-list/item-list.component.html',
	styleUrls: ['app/item-list/item-list.component.css'],
	pipes: [ItemFilterPipe],
	directives: [StarComponent, FormComponent, ROUTER_DIRECTIVES],
	providers: [ItemService, CartService]
})
export class ItemListComponent implements OnInit {
	pageTitle: string = 'Item List';
	modalIdentifier: string = 'itemCreateModal';
	imgWidth: number = 100;
	imgMargin: number = 10;
	showImg: boolean = true;
	filterBy: string;
	items: IItem[];

	constructor(private itemService: ItemService, private auth: AuthService, private cart: CartService) { }

	toggleImg(): void {
		this.showImg = !this.showImg;
	}

	ngOnInit(): void {
		console.log('inside OnInit hook')
		//this.items = this.itemService.getItems();
		this.itemService.getItems().subscribe(
			items => this.items = items,
			error => console.log(error));
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Item List: ' + message;
	}
}
