import { Injectable } from '@angular/core';

import { ITEMS } from './mock-items';
import { IItem } from './item.interface';

@Injectable()
export class ItemService {
	getItems(): IItem[] {
		return ITEMS;
	}

	getItem(): IItem {
		return 	{
			"itemId": 5,
			"itemName": "Hammer",
			"itemCode": "TBX-0048",
			"releaseDate": "May 21, 2016",
			"description": "Sed lobortis ultrices dui a venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id risus luctus, facilisis ante in, dapibus nunc. Sed vitae porttitor lacus, et imperdiet mi. Phasellus iaculis ipsum et aliquam mattis. Nulla convallis, mi ac rutrum fringilla, est metus condimentum erat, et tempor libero purus a lacus. Nunc blandit, nisi in consectetur tristique, ex massa dapibus metus, id maximus nunc quam non sapien. In fermentum massa at ante semper, vel vehicula quam tempus. Sed eget neque lectus.",
			"price": 8.9,
			"quantity": 10,
			"starRating": 4.8,
			"imageUrl": "http://placehold.it/320x150"
		}
	}

	setItem(name: string, code: string) {
		this.getItems().push({
			"itemId": 9,
			"itemName": name,
			"itemCode": code,
			"releaseDate": "March 19, 2016",
			"description": "Dummy description",
			"price": 11.11,
			"quantity": 50,
			"starRating": 0.1,
			"imageUrl": "http://placehold.it/320x150"
		});
	}
}