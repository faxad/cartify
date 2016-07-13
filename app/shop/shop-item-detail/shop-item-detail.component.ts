import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import { IShopItem } from '../../shared/shop-item.interface';
import { ShopService } from '../../shared/shop.service';

@Component({
	templateUrl: 'app/shop/shop-item-detail/shop-item-detail.component.html',
	providers: [ShopService]
})
//@CanActivate(() => tokenNotExpired())
export class ShopItemDetailComponent implements OnInit {
	shopItem: IShopItem;

	constructor(
		private route: ActivatedRoute,
        private router: Router,
		private shop: ShopService) {}

	ngOnInit(): void {
		this.route.params.subscribe(param => {
			this.shop.getShopItem(
				Number(+param['id'])).subscribe(
					shopItem => this.shopItem = shopItem,
					error => console.log(error)
				);
		})
	}

	goBack(): void {
		this.router.navigate(['/items']);
	}
}
