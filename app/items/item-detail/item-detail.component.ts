import { Component } from '@angular/core';
import { Router, RouteParams} from '@angular/router-deprecated';


@Component({
	templateUrl: 'app/items/item-detail/item-detail.component.html',
})
export class ItemDetailComponent {
	parmValue: string;

	constructor(private _routerParams: RouteParams,
		        private _router: Router) {
		this.parmValue = this._routerParams.get('id');
	}

	goBack(): void {
		this._router.navigate(['Items']);
	}
}
