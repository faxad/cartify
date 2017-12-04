import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IShopItem } from './shop-item.interface';
import { ICartItem } from './cart-item.interface';
import { ICartService } from './cart-service.interface';

import { AuthService } from './auth.service';
import { ShopService } from './shop.service';
import { AppError } from '../error/app-error';
import { ShopItem } from 'app/shop/shop-item.model';

@Injectable()
export class CartService implements ICartService {
    constructor(
        private auth: AuthService,
        private http: HttpClient,
        private shop: ShopService
    ) {}

    getCartItems(): Observable<ICartItem[]> {
        return this.http.get<ICartItem[]>('cart/' + this.auth.getAuthenticatedUserId())
    }

    getCartItem(userId: string, itemId: string): Observable<ICartItem> {
        return this.http.get<ICartItem>('cart/' + userId + '?itemId=' + itemId)
    }

    addCartItem(shopItem: IShopItem): Observable<ICartItem> {
        let body: any = {
            'userId': this.auth.getAuthenticatedUserId(),
            'itemId': shopItem._id,
            'quantity': 1,
        };

        return this.http.post<ICartItem>('cart', body)
    }

    removeCartItem(cartItem: ICartItem): Observable<ICartItem> {
        return this.http.delete<ICartItem>('cart/' + cartItem._id)
    }

    increaseCartItemQunatity(cartItem: ICartItem): Observable<ICartItem> {
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.userId = this.auth.getAuthenticatedUserId();

        return this.http.put<ICartItem>('cart', cartItem)
    }

    decreaseCartItemQunatity(cartItem: ICartItem): Observable<ICartItem> {
        cartItem.quantity = cartItem.quantity - 1;
        cartItem.userId = this.auth.getAuthenticatedUserId();

        return this.http.put<ICartItem>('cart', cartItem)
    }

    checkOut(): void {} // TODO: for developers to implementation
}
