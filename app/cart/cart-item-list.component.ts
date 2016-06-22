import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';

import { ICartItem } from './cart-item.interface';
import { CartService } from './cart.service';


@Component({
	templateUrl: 'app/cart/cart-item-list.component.html',
	providers: [CartService]
})
export class ItemCartComponent implements OnInit {
	parmValue: string;
	cart: ICartItem[];

	constructor(private _routerParams: RouteParams,
		        private _router: Router,
		        private cartService: CartService) {
		this.parmValue = this._routerParams.get('userid');
	}

	ngOnInit(): void {
		//this.cart = this.cartService.getCart();
		this.cartService.getCart().subscribe(
			cart => this.cart = cart,
			error => console.log(error));

		console.log(this.cart)
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
