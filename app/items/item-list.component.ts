import { Component, OnInit } from '@angular/core';

import { IItem } from './item';
import { ItemService } from './item.service';
import { ItemFilterPipe } from './item-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ItemCreateComponent } from './item-create.component';


@Component({
	selector: 'item',
	templateUrl: 'app/items/item-list.component.html', // template defined as linked template
	styleUrls: ['app/items/item-list.component.css'],
	pipes: [ItemFilterPipe],
	directives: [StarComponent, ItemCreateComponent],
	providers: [ItemService]
})
export class ItemListComponent implements OnInit {
	pageTitle: string = 'Item List';
	imgWidth: number = 50;
	imgMargin: number = 2;
	showImg: boolean = false;
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


// interpolation
// property binding
// event binding
// two-way binding
