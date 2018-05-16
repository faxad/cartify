import { Observable } from 'rxjs';

import { ICartItem, IShopItem } from 'shared';

export interface ICartService {
    getCartItems(): Observable<ICartItem[]>;
    getCartItem(userId: string, itemId: string): Observable<ICartItem>;
    addCartItem(IShopItem): Observable<ICartItem>;
    removeCartItem(ICartItem): Observable<ICartItem>;
    increaseCartItemQunatity(ICartItem): Observable<ICartItem>;
    decreaseCartItemQunatity(ICartItem): Observable<ICartItem>;
    checkOut(): void;
}
