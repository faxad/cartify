import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';

import { ICartItem } from './cart-item.interface';
import { ICartItemDetailed } from './cart-item-detailed.interface';
import { CartService } from './cart.service';
import { ShopService } from '../shop/shop.service';


@Component({
	templateUrl: 'app/cart/cart-item-list.component.html',
	providers: [CartService, ShopService]
})
export class ItemCartComponent implements OnInit {
	userCartItems: ICartItem[];

	constructor(private router: Router, private cart: CartService) {}

	ngOnInit(): void {
		this.cart.getCartItemsWithDetails().subscribe(
			cart => this.userCartItems = cart,
			error => console.log(error));
	}

	increaseQuantity(item: ICartItem): void {
		this.cart.increaseCartItemQunatity(item).subscribe(
			items => console.log("Incremented"),
			error => console.log(error));
	}

	decreaseQunatity(item: ICartItem): void {
		this.cart.decreaseCartItemQunatity(item).subscribe(
			items => console.log("Decremented"),
			error => console.log(error));
	}

	removeCartItem(item: ICartItem): void {
		this.cart.removeCartItem(item).subscribe(
			items => console.log("Removed"),
			error => console.log(error));
	}

	goBack(): void {
		this.router.navigate(['Items']);
	}
}
