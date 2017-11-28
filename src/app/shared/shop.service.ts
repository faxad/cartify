import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { IShopItem } from './shop-item.interface';
import { IShopItemReview } from './shop-item-review.interface';
import { IShopService } from './shop-service.interface';
import { AppError } from '../error/app-error';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ShopService implements IShopService {
    constructor(private http: Http) {}

    getShopItems(userId?: string): Observable<IShopItem[]> {
        let url = 'http://localhost:8080/inventory';

        if (userId) {
            url = url + '/' + userId;
        }

        return this.http.get(url)
            .map((response: Response) => <IShopItem[]>response.json())
            .catch(AppError.handle);
    }

    getShopItem(id: string): Observable<IShopItem> {
        return this.http.get('http://localhost:8080/inventory/' + id + '/detail')
            .map((response: Response) => <IShopItem>response.json())
            .catch(AppError.handle);
    }

    addShopItem(body: any): Observable<IShopItem> {
        return this.http.post('http://localhost:8080/inventory', body)
            .map((response: Response) => response.json())
            .catch(AppError.handle);
    }

    updateShopItem(body: any): Observable<IShopItem> {
        return this.http.put('http://localhost:8080/inventory', body)
            .map((response: Response) => response.json())
            .catch(AppError.handle);
    }

    setShopItemReview(itemId: string, remarks: string, rating: number): Observable<IShopItemReview> {
        let body: any = {
            'itemId': itemId,
            'userId': AuthService.getUser(),
            'reviewDate': 'March 19, 2016',
            'remarks': remarks,
            'rating': rating
        };

        return this.http.post('http://localhost:8080/review', body)
            .map((response: Response) => response.json())
            .catch(AppError.handle);
    }
}
