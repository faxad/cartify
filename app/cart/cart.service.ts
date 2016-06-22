import { Injectable } from '@angular/core';

import { IShopItem } from '../shop/shop-item.interface';
import { ICartItem } from './cart-item.interface';
import { AuthService } from '../shared/auth.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
	constructor(private _http: Http) { }

	handleError(error, Response) {
		console.error(error);
		return Observable.throw(error.json().error || "Service Error");
	}

	getCart(): Observable<ICartItem[]> {
		return this._http.get("http://localhost:8080/cart?userId=" + AuthService.getUser())
			.map((response: Response) => <ICartItem[]>response.json())
			.catch(this.handleError)
			//.do(data => console.log(JSON.stringify(data)));
	}

	addItem(item: IShopItem): Observable<ICartItem> {
		let body: any = {
			"userId": AuthService.getUser(),
			"itemId": item.id,
			"quantity": 1
		}

		return this._http.post("http://localhost:8080/add", JSON.stringify(body))
			.map((res: Response) => res.json());
	}

	itemExists(item: IShopItem, callback): void {
		this.getCart().subscribe(
			cart => {
				for (let cartItem of cart) {
					if (cartItem['itemId'] == item['id']) {
						this.increaseQunatity(cartItem).subscribe(
							items => console.log("Incremented"),
							error => console.log(error));
						return
					}
				}
				callback(this, item);
			},
			error => console.log(error));
	}

	removeItem(item: ICartItem): Observable<ICartItem> {
		return this._http.post("http://localhost:8080/remove", JSON.stringify(item))
			.map((res: Response) => res.json());
	}

	increaseQunatity(item: ICartItem): Observable<ICartItem> {
		item.quantity = item.quantity + 1;
		console.log(item)
		return this._http.post("http://localhost:8080/revise", JSON.stringify(item))
			.map((res: Response) => res.json());
	}

	decreaseQunatity(item: ICartItem): Observable<ICartItem> {
		item.quantity = item.quantity - 1;
		console.log(item)
		return this._http.post("http://localhost:8080/revise", JSON.stringify(item))
			.map((res: Response) => res.json());
	}

	checkOut(): void {}

	clear(): void {}
}