import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';
import { tokenNotExpired } from 'angular2-jwt';

import { IShopItem } from '../shop-item.interface';
import { ShopService } from '../shop.service';


@Component({
	templateUrl: 'app/shop/shop-item-detail/shop-item-detail.component.html',
	providers: [ShopService]
})
@CanActivate(() => tokenNotExpired())
export class ItemDetailComponent implements OnInit {
	parmValue: string;
	item: IShopItem;

	constructor(private _routerParams: RouteParams,
		        private _router: Router,
				private itemService: ShopService) {
		this.parmValue = this._routerParams.get('id');
	}

	ngOnInit(): void {
		this.itemService.getItem(Number(this.parmValue)).subscribe(
			item => this.item = item,
			error => console.log(error));
	}

	goBack(): void {
		this._router.navigate(['Items']);
	}
}
