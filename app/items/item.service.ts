import { Injectable } from '@angular/core';

import { ITEMS } from './mock-items';
import { IItem } from './item';

@Injectable()
export class ItemService {
	getItems() {
		return ITEMS;
	}

	setItem(name: string, code: string) {
		this.getItems().push({
			"productId": 9,
			"productName": name,
			"productCode": code,
			"releaseDate": "March 19, 2016",
			"description": "Dummy description",
			"price": 11.11,
			"starRating": 0.1,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
		});
	}
}