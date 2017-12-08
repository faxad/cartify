import { Observable } from 'rxjs/Observable';

import { IShopItem } from '../../shared';

export interface IShopService {
    getShopItems(): Observable<IShopItem[]>;
    getShopItem(string): Observable<IShopItem>;
    addShopItem(any): Observable<IShopItem>;
    updateShopItem(any): Observable<IShopItem>;
}
