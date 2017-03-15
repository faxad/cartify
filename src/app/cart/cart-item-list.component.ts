import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
	CartService,
	ShopService
} from '../shared/index';

import { ICartItem } from '../shared/cart-item.interface';
import { ICartItemDetailed } from '../shared/cart-item-detailed.interface';

@Component({
	templateUrl: './cart-item-list.component.html',
	providers: [CartService, ShopService]
})
export class ItemCartComponent implements OnInit {
	private userCartItems: ICartItem[];
	private showLoading = true;

	constructor(private router: Router, private cart: CartService) {}

	ngOnInit(): void {
		this.cart.getCartItemsWithDetails().subscribe(
			cart => this.userCartItems = cart,
			error => console.log(error),
			() => this.showLoading = false
		);
	}

	increaseQuantity(item: ICartItem): void {
		this.cart.increaseCartItemQunatity(item).subscribe(
			items => console.log('Incremented'),
			error => console.log(error));
	}

	decreaseQunatity(item: ICartItem): void {
		this.cart.decreaseCartItemQunatity(item).subscribe(
			items => console.log('Decremented'),
			error => console.log(error));
	}

	removeCartItem(item: ICartItem): void {
		this.cart.removeCartItem(item).subscribe(
			items => console.log('Removed'),
			error => console.log(error));
	}

	goBack(): void {
		this.router.navigate(['/items']);
	}
}
