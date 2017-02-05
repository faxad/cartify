import { Component, OnInit, Input } from '@angular/core';
//import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {
	AuthService,
	CartService,
	ShopService,
} from '../../shared/index';

import { FormComponent } from '../shop-item-form/shop-item-form.component';
import { IShopItem } from '../../shared/shop-item.interface';
import { ShopItemFilterPipe } from './shop-item-filter.pipe';

@Component({
	selector: 'list-item',
	templateUrl: 'app/shop/shop-item-list/shop-item-list.component.html',
	styleUrls: ['app/shop/shop-item-list/shop-item-list.component.css'],
	//pipes: [ShopItemFilterPipe],
	//directives: [FormComponent, ROUTER_DIRECTIVES],
	//providers: [ShopService, CartService]
})
export class ShopItemListComponent implements OnInit {
	private modalIdentifier: string = 'shopItemModal';
	private filterBy: string;
	private customerId: string;
	private customerCartItems = {};
	private shopItems: IShopItem[];
	private showLoading: boolean = true;
	private ccCount: number = 0;

	constructor(private shop: ShopService, private auth: AuthService, private cart: CartService) { }

	getShopItems(event: boolean): void {
		this.shop.getShopItems().subscribe(
			shopItems => this.shopItems = shopItems,
			error => console.log(error))
	}

	ngOnInit(): void {
		this.customerId = AuthService.getUser();
		this.cart.getCartItems().subscribe(
			cartItems => {
				for (let cartItem of cartItems) {
					this.customerCartItems[cartItem.itemId] = cartItem.quantity
				}
				this.getShopItems(true);
			},
			error => console.log(error),
			() => this.showLoading = false
		);
	}

	addToCart(item: any): void {
		this.cart.addOrUpdateCartItem(item, function(service, item) {
			service.addCartItem(item).subscribe(
				items => console.log("Added to Cart"),
				error => console.log(error));
		}).subscribe(
			() => { 
				this.customerCartItems[item.id] = this.customerCartItems[item.id] + 1
			}
		)
	}
}
