import { Observable } from 'rxjs';

import { IShopItem } from 'shared';

export interface IShopService {
    getShopItems(): Observable<IShopItem[]>;
    getShopItem(string): Observable<IShopItem>;
    addShopItem(any): Observable<IShopItem>;
    updateShopItem(any): Observable<IShopItem>;
}
