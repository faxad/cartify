import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseError, NotFoundError } from 'error';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ICartItem, IShopItem, IShopItemReview } from 'shared';

import { IShopService } from '../contracts/shop-service.interface';
import { AuthService } from '../services/auth.service';

const _array = require('lodash/array');

@Injectable()
export class ShopService implements IShopService {
    private subject = new BehaviorSubject<IShopItem[]>([])
    public shopItems$: Observable<IShopItem[]> = this.subject.asObservable()

    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) {}

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
            shopItems => {
                console.log('HTTP GET successful')
                this.subject.next(shopItems);
            },
            (error) => {
                throw {
                    error,
                    message: 'Something went wrong :('
                };
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

    refreshCartCountFor(cartItem: ICartItem) {
        this.subject.value
            .filter(shopItem => shopItem._id === cartItem.itemId)
            .shift()
            .cartCount = cartItem.quantity

        this.subject.next(this.subject.value);
    }

    refreshShopItem(shopItem: IShopItem) {
        const shopItems = this.subject.value
        const index = _array.findIndex(shopItems, {_id: shopItem._id});

        if (index !== -1) {
            shopItem.reviewsCount = shopItems[index].reviewsCount
            shopItem.cartCount = shopItems[index].cartCount
            this.subject.value.splice(index, 1, shopItem);
        } else {
            this.subject.value.push(shopItem);
        }
    }
}
