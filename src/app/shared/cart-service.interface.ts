import { Observable } from 'rxjs/Observable';

import { IShopItem } from './shop-item.interface';
import { ICartItem } from './cart-item.interface';
import { ICartItemDetailed } from './cart-item-detailed.interface';

export interface ICartService {
    getCartItems(): Observable<ICartItem[]>;
    getCartItemsWithDetails(): Observable<ICartItemDetailed[]>;
    addCartItem(IShopItem): Observable<ICartItem>;
    addOrUpdateCartItem(IShopItem, callback): void;
    removeCartItem(ICartItem): Observable<ICartItem>;
    increaseCartItemQunatity(ICartItem): Observable<ICartItem>;
    decreaseCartItemQunatity(ICartItem): Observable<ICartItem>;
    checkOut(): void;
}
