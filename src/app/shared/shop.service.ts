import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    constructor(private http: HttpClient, private auth: AuthService) {}

    getShopItems(userId?: string): Observable<IShopItem[]> {
        let url = 'inventory';

        if (userId) {
            url = url + '/' + userId;
        }

        return this.http.get<IShopItem[]>(url)
    }

    getShopItem(id: string): Observable<IShopItem> {
        return this.http.get<IShopItem>('inventory/' + id + '/detail')
    }

    addShopItem(body: any): Observable<IShopItem> {
        return this.http.post<IShopItem>('inventory', body)
    }

    updateShopItem(body: any): Observable<IShopItem> {
        return this.http.put<IShopItem>('inventory', body)
    }

    setShopItemReview(itemId: string, remarks: string, rating: number): Observable<IShopItemReview> {
        let body: any = {
            'itemId': itemId,
            'userId': this.auth.getAuthenticatedUserId(),
            'reviewDate': 'March 19, 2016',
            'remarks': remarks,
            'rating': rating
        };

        return this.http.post<IShopItemReview>('review', body)
    }
}
