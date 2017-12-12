import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service'
import { IShopService } from '../contracts/shop-service.interface';
import { BaseError, NotFoundError } from 'error';
import { IShopItem, IShopItemReview } from 'shared';

@Injectable()
export class ShopService implements IShopService {
    constructor(private http: HttpClient, private auth: AuthService) {}

    getShopItems(userId?: string): Observable<IShopItem[]> {
        let url = 'inventory';

        if (userId) {
            url = url + '/' + userId;
        }

        const network$ = this.http
            .get<IShopItem[]>(url)
            .publishReplay(1, 5000)
            .refCount();

        network$.subscribe(
            () => console.log('HTTP GET successful'),
            (error: BaseError) => {
                if (error instanceof NotFoundError) {
                    console.log('NOT FOUND');
                } else {
                    throw error;
                }
            },
        );

        return network$;
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
