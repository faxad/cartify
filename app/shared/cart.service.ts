import { Injectable } from '@angular/core';

import { IItem } from './item.interface';
import { ICart } from './cart.interface';
import { CART } from './mock-cart';
import { AuthService } from './auth.service';


@Injectable()
export class CartService {
	getCart(): ICart[] {
		return CART;
	}

	addItem(item: IItem): void {
		let found: boolean = false;

		for (let cartItem of CART) {
			if (cartItem['userId'] == AuthService.getUser() && cartItem['item']['id'] == item['id']) {
				cartItem['quantity'] = cartItem['quantity'] + 1;
				found = true;
			}
		}

		if (!found) {
			this.getCart().push(
				{
					userId: 'fawad@outlook.com',
					item: item,
					quantity: 1,
					unitPrice: 40.00,
					paid: false,
				}
			)
		}
	}

	removeItem(item: IItem): void {
		this.getCart().pop() // will be replaced with an actual remove
	}

	increaseQunatity(item: IItem): void {
		item.quantity = item.quantity + 1;
	}

	decreaseQunatity(item: IItem): void {
		item.quantity = item.quantity - 1;
	}

	checkOut(): void {}

	clear(): void {}
}