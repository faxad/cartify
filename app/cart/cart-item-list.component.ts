import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';

import { ICartItem } from './cart-item.interface';
import { ICustomerCartItem } from './customer-cart-item.interface';
import { CartService } from './cart.service';
import { ShopService } from '../shop/shop.service';


@Component({
	templateUrl: 'app/cart/cart-item-list.component.html',
	providers: [CartService, ShopService]
})
export class ItemCartComponent implements OnInit {
	parmValue: string;
	cart: ICartItem[];
	userCartItems: any = {};

	constructor(private _routerParams: RouteParams,
		        private _router: Router,
		        private cartService: CartService) {
		this.parmValue = this._routerParams.get('userid');
	}

	ngOnInit(): void {
		this.cartService.getCustomerCart().subscribe(
			cart => this.cart = cart,
			error => console.log(error));
	}

	increaseQuantity(item: ICartItem): void {
		this.cartService.increaseQunatity(item).subscribe(
			items => console.log("Incremented"),
			error => console.log(error));
	}

	decreaseQunatity(item: ICartItem): void {
		this.cartService.decreaseQunatity(item).subscribe(
			items => console.log("Decremented"),
			error => console.log(error));
	}

	removeItem(item: ICartItem): void {
		this.cartService.removeItem(item).subscribe(
			items => console.log("Removed"),
			error => console.log(error));
	}
}
