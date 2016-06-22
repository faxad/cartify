import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IShopItem } from './shop-item.interface';

@Injectable()
export class ShopService {
	constructor(private _http: Http) {}

	handleError(error, Response) {
		console.error(error);
		return Observable.throw(error.json().error || "Service Error");
	}

	getItems(): Observable<IShopItem[]> {
		return this._http.get("http://localhost:8080/items")
			.map((response: Response) => <IShopItem[]>response.json())
				.catch(this.handleError)
				//.do(data => console.log(JSON.stringify(data)));
	}

	getItem(id: number): Observable<IShopItem> {
		return this._http.get("http://localhost:8080/item?id=" + id)
			.map((response: Response) => <IShopItem>response.json())
			.catch(this.handleError)
			//.do(data => console.log(<IItem>data));
	}

	addItem(body: any): Observable<IShopItem> {
		return this._http.post("http://localhost:8080/insert", JSON.stringify(body))
			.map((res: Response) => res.json());
	}

	updateItem(body: any): Observable<IShopItem> {
		return this._http.post("http://localhost:8080/update", JSON.stringify(body))
			.map((res: Response) => res.json());
	}
}