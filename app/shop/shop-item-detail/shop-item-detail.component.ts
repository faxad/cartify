import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';
import { tokenNotExpired } from 'angular2-jwt';

import { IShopItem } from '../../shared/shop-item.interface';
import { ShopService } from '../../shared/shop.service';

@Component({
	templateUrl: 'app/shop/shop-item-detail/shop-item-detail.component.html',
	providers: [ShopService]
})
@CanActivate(() => tokenNotExpired())
export class ShopItemDetailComponent implements OnInit {
	shopItem: IShopItem;

	constructor(
		private routerParams: RouteParams,
        private router: Router,
		private shop: ShopService) {}

	ngOnInit(): void {
		this.shop.getShopItem(
			Number(this.routerParams.get('id'))).subscribe(
				shopItem => this.shopItem = shopItem,
				error => console.log(error)
			);
	}

	goBack(): void {
		this.router.navigate(['Items']);
	}
}
