import { Injectable } from '@angular/core';

import { IItem } from './item.interface';
import { ICart } from './cart.interface';
import { CART } from './mock-cart';
import { AuthService } from './auth.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
	constructor(private _http: Http) { }

	handleError(error, Response) {
		console.error(error);
		return Observable.throw(error.json().error || "Service Error");
	}

	getCart(): Observable<ICart[]> {
		return this._http.get("http://localhost:8080/cart?userId=" + AuthService.getUser())
			.map((response: Response) => <ICart[]>response.json())
			.catch(this.handleError)
			//.do(data => console.log(JSON.stringify(data)));
	}

	addItem(item: IItem): Observable<ICart> {
		let body: any = {
			"userId": AuthService.getUser(),
			"itemId": item.id
		}

		return this._http.post("http://localhost:8080/add", JSON.stringify(body))
			.map((res: Response) => res.json());
	}

	itemExists(item: IItem, callback): void {
		this.getCart().subscribe(
			cart => {
				for (let cartItem of cart) {
					if (cartItem['itemId'] == item['id']) { return }
				}
				callback(this, item);
			},
			error => console.log(error));
	}

	removeItem(item: IItem): void {
		//this.getCart().pop() // will be replaced with an actual remove
	}

	increaseQunatity(item: IItem): void {
		item.quantity = item.quantity + 1;
	}

	decreaseQunatity(item: IItem): void {
		item.quantity = item.quantity - 1;
	}

	checkOut(): void {}

	clear(): void {}
}