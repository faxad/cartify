import { Injectable } from '@angular/core';

import { IItem } from './item.interface';
import { ICart } from './cart.interface';
import { CART } from './mock-cart';

@Injectable()
export class CartService {
	getCart(): ICart[] {
		console.log(CART);
		return CART;
	}

	addItem(item: IItem): void {}

	removeItem(item: IItem): void {}

	checkOut(): void {}

	clear(): void {}
}