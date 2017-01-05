import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IShopItem } from './shop-item.interface';
import { ICartItem } from './cart-item.interface';
import { ICartService } from './cart-service.interface';

import { ICartItemDetailed } from './cart-item-detailed.interface';
import { AuthService } from './auth.service';
import { ShopService } from './shop.service';

@Injectable()
export class CartService implements ICartService {
	constructor(private http: Http, private shop: ShopService) {}

	getCartItems(): Observable<ICartItem[]> {
		return this.http.get("http://localhost:8080/cart?userId=" + AuthService.getUser())
			.map((response: Response) => <ICartItem[]>response.json())
	}

	getCartItemsWithDetails(): Observable<ICartItemDetailed[]> {
		let detailedCartItems: ICartItemDetailed[] = []

		return Observable.create(observer => {
			this.getCartItems().subscribe(
				cartItems => {
					for (let cartItem of cartItems) {
						this.shop.getShopItem(cartItem.itemId).subscribe(
							shopItem => {
								detailedCartItems.push(<ICartItemDetailed>{
									'_id': cartItem['_id'], // mongo db ref.
									'userId': cartItem.userId,
									'itemId': cartItem.itemId,
									'name': shopItem.name,
									'code': shopItem.code,
									'unitPrice': shopItem.unitPrice,
									'quantity': cartItem.quantity,
									'paid': cartItem.paid,
								})
							})
					}
					observer.next(detailedCartItems);
					observer.complete();
				},
				error => console.log(error));
		})
	}

	addCartItem(item: IShopItem): Observable<ICartItem> {
		let body: any = {
			"userId": AuthService.getUser(),
			"itemId": item.id,
			"quantity": 1,
		}

		return this.http.post("http://localhost:8080/add", JSON.stringify(body))
			.map((response: Response) => response.json());
	}

	addOrUpdateCartItem(item: IShopItem, callback): void {
		this.getCartItems().subscribe(
			cart => {
				for (let cartItem of cart) {
					if (cartItem['itemId'] == item['id']) {
						this.increaseCartItemQunatity(cartItem).subscribe(
							items => console.log("Incremented"),
							error => console.log(error));
						return
					}
				}
				callback(this, item);
			},
			error => console.log(error));
	}

	removeCartItem(cartItem: ICartItem): Observable<ICartItem> {
		return this.http.post("http://localhost:8080/remove", JSON.stringify(cartItem))
			.map((response: Response) => response.json());
	}

	increaseCartItemQunatity(cartItem: ICartItem): Observable<ICartItem> {
		cartItem.quantity = cartItem.quantity + 1;
		return this.http.post("http://localhost:8080/revise", JSON.stringify(cartItem))
			.map((response: Response) => response.json());
	}

	decreaseCartItemQunatity(cartItem: ICartItem): Observable<ICartItem> {
		cartItem.quantity = cartItem.quantity - 1;
		return this.http.post("http://localhost:8080/revise", JSON.stringify(cartItem))
			.map((response: Response) => response.json());
	}

	checkOut(): void {} // TODO: for later implementation
}