import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';

import { ICart } from '../shared/cart.interface';
import { CartService } from '../shared/cart.service';


@Component({
	templateUrl: 'app/items/item-cart/item-cart.component.html',
	providers: [CartService]
})
export class ItemCartComponent implements OnInit {
	parmValue: string;
	cart: ICart[];

	constructor(private _routerParams: RouteParams,
		        private _router: Router,
		        private cartService: CartService) {
		this.parmValue = this._routerParams.get('userid');
	}

	ngOnInit(): void {
		this.cart = this.cartService.getCart();
	}
}
