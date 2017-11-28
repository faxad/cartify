import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    constructor(private http: Http, private shop: ShopService) {}

    getCartItems(): Observable<ICartItem[]> {
        return this.http.get('http://localhost:8080/cart/' + AuthService.getUser())
            .map((response: Response) => <ICartItem[]>response.json())
            .catch(AppError.handle);
    }

    getCartItem(userId: string, itemId: string): Observable<ICartItem> {
        let url = 'http://localhost:8080/cart/' + userId + '?itemId=' + itemId;

        return this.http.get(url)
            .map((response: Response) => <ICartItem>response.json())
            .catch(AppError.handle);
    }

    addCartItem(shopItem: IShopItem): Observable<ICartItem> {
        let body: any = {
            'userId': AuthService.getUser(),
            'itemId': shopItem._id,
            'quantity': 1,
        };

        return this.http.post('http://localhost:8080/cart', body)
            .map((response: Response) => response.json())
            .catch(AppError.handle);
    }

    removeCartItem(cartItem: ICartItem): Observable<ICartItem> {
        return this.http.delete('http://localhost:8080/cart/' + cartItem._id)
            .map((response: Response) => response.json())
            .catch(AppError.handle);
    }

    increaseCartItemQunatity(cartItem: ICartItem): Observable<ICartItem> {
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.userId = AuthService.getUser();

        return this.http.put('http://localhost:8080/cart', cartItem)
            .map((response: Response) => <ICartItem>response.json())
            .catch(AppError.handle)
    }

    decreaseCartItemQunatity(cartItem: ICartItem): Observable<ICartItem> {
        cartItem.quantity = cartItem.quantity - 1;
        cartItem.userId = AuthService.getUser();

        return this.http.put('http://localhost:8080/cart', cartItem)
            .map((response: Response) => <ICartItem>response.json())
            .catch(AppError.handle);
    }

    checkOut(): void {} // TODO: for developers to implementation
}
