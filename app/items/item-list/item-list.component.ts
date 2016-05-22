import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { IItem } from '../shared/item.interface';
import { ItemService } from '../shared/item.service';
import { StarComponent } from '../shared/star.component';
import { ItemFilterPipe } from './item-filter.pipe';
import { ItemUpdateComponent } from '../item-update/item-update.component';


@Component({
	selector: 'list-item',
	templateUrl: 'app/items/item-list/item-list.component.html',
	styleUrls: ['app/items/item-list/item-list.component.css'],
	pipes: [ItemFilterPipe],
	directives: [StarComponent, ItemUpdateComponent, ROUTER_DIRECTIVES],
})
export class ItemListComponent implements OnInit {
	pageTitle: string = 'Item List';
	imgWidth: number = 100;
	imgMargin: number = 10;
	showImg: boolean = true;
	filterBy: string;
	items: IItem[];

	constructor (private itemService: ItemService) { }

	toggleImg(): void {
		this.showImg = !this.showImg;
	}

	ngOnInit(): void {
		console.log('inside OnInit hook')
		this.items = this.itemService.getItems();
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Item List: ' + message;
	}
}
