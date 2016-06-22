import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { IShopItem } from '../shop-item.interface';
import { ShopService } from '../shop.service';
import { StarComponent } from '../../shared/star.component';
import { ItemFilterPipe } from './shop-item-filter.pipe';
import { FormComponent } from '../shop-item-form/shop-item-form.component';
import { CartService } from '../../cart/cart.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs/Observable';


@Component({
	selector: 'list-item',
	templateUrl: 'app/shop/shop-item-list/shop-item-list.component.html',
	styleUrls: ['app/shop/shop-item-list/shop-item-list.component.css'],
	pipes: [ItemFilterPipe],
	directives: [StarComponent, FormComponent, ROUTER_DIRECTIVES],
	providers: [ShopService, CartService]
})
export class ItemListComponent implements OnInit {
	pageTitle: string = '';
	modalIdentifier: string = 'itemCreateModal';
	imgWidth: number = 100;
	imgMargin: number = 10;
	showImg: boolean = true;
	filterBy: string;
	items: IShopItem[];

	constructor(private itemService: ShopService, private auth: AuthService, private cart: CartService) { }

	toggleImg(): void {
		this.showImg = !this.showImg;
	}

	ngOnInit(): void {
		this.itemService.getItems().subscribe(
			items => this.items = items,
			error => console.log(error));
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Item List: ' + message;
	}

	addItemToCart(item: any): void {
		this.cart.itemExists(item, function(service, item) {
			service.addItem(item).subscribe(
				items => console.log("Added to Cart"),
				error => console.log(error));
		})
	}
}
