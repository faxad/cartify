import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, CanActivate} from '@angular/router-deprecated';
import { tokenNotExpired } from 'angular2-jwt';

import { IItem } from '../shared/item.interface';
import { ItemService } from '../shared/item.service';


@Component({
	templateUrl: 'app/item-detail/item-detail.component.html',
	providers: [ItemService]
})
@CanActivate(() => tokenNotExpired())
export class ItemDetailComponent implements OnInit {
	parmValue: string;
	item: IItem;

	constructor(private _routerParams: RouteParams,
		        private _router: Router,
		        private itemService: ItemService) {
		this.parmValue = this._routerParams.get('id');
	}

	ngOnInit(): void {
		this.item = this.itemService.getItem();
	}

	goBack(): void {
		this._router.navigate(['Items']);
	}
}
