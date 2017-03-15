import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IShopItem } from './shop-item.interface';
import { IShopItemReview } from './shop-item-review.interface';
import { IShopService } from './shop-service.interface';

@Injectable()
export class ShopService implements IShopService {
    constructor(private http: Http) {}

    handleError(error, Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service Error');
    }

    getShopItems(): Observable<IShopItem[]> {
        return this.http.get('http://localhost:8080/items')
            .map((response: Response) => <IShopItem[]>response.json())
            .catch(this.handleError);
            // .do(data => console.log(JSON.stringify(data)));
    }

    getShopItem(id: number): Observable<IShopItem> {
        return this.http.get('http://localhost:8080/item?id=' + id)
            .map((response: Response) => <IShopItem>response.json());
    }

    addShopItem(body: any): Observable<IShopItem> {
        return this.http.post('http://localhost:8080/insert', JSON.stringify(body))
            .map((response: Response) => response.json());
    }

    updateShopItem(body: any): Observable<IShopItem> {
        return this.http.post('http://localhost:8080/update', JSON.stringify(body))
            .map((response: Response) => response.json());
    }

    getShopItemReviews(itemId: number): Observable<IShopItemReview[]> {
        return this.http.get('http://localhost:8080/review?itemId=' + itemId)
            .map((response: Response) => <IShopItemReview[]>response.json());
    }

    getShopItemReviewsCount(itemId: number): Observable<number> {
        return this.http.get('http://localhost:8080/reviewcount?itemId=' + itemId)
            .map((response: Response) => <number>response.json());
    }

    getShopItemsRating(): Observable<any> {
        return this.http.get('http://localhost:8080/ratings')
            .map((response: Response) => <number>response.json());
    }

    setShopItemReview(itemId: number, remarks: string, rating: number): Observable<IShopItemReview> {
        let body: any = {
            'itemId': itemId.toString(),
            'userId': 'fawad', // AuthService.getUser(),
            'reviewDate': 'March 19, 2016',
            'remarks': remarks,
            'rating': rating
        };

        return this.http.post('http://localhost:8080/addreview', JSON.stringify(body))
            .map((response: Response) => response.json());
    }
}
